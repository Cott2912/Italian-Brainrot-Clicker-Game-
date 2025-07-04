'use strict';
(function() {
    var isKasperskyScriptInjected = !!document.querySelector('script[src*="kaspersky"]');
    var tmpCanvas = document.createElement("canvas");
    var hasWebGL = !!tmpCanvas.getContext("webgl");
    var missingFeatures = [];
    if (!hasWebGL) missingFeatures.push("WebGL");
    if (typeof WebAssembly === "undefined") missingFeatures.push("WebAssembly");
    if (!("noModule" in HTMLScriptElement.prototype)) missingFeatures.push("JavaScript Modules");
    if (!window["C3_ModernJSSupport_OK"]) missingFeatures.push("Modern JavaScript support");
    if (missingFeatures.length === 0 && !isKasperskyScriptInjected) window["C3_Is_Supported"] = true;
    else {
        var msgWrap = document.createElement("div");
        msgWrap.id = "notSupportedWrap";
        document.body.appendChild(msgWrap);
        var msgTitle = document.createElement("h2");
        msgTitle.id = "notSupportedTitle";
        if (isKasperskyScriptInjected) msgTitle.textContent = "Kaspersky Internet Security broke this export";
        else msgTitle.textContent = "Software update needed";
        msgWrap.appendChild(msgTitle);
        var msgBody = document.createElement("p");
        msgBody.className =
            "notSupportedMessage";
        var msgText = "This content is not supported because your device's software appears to be out-of-date. ";
        var ua = navigator.userAgent;
        if (/android/i.test(ua)) msgText += '<br><br>On Android, fix this by making sure the <a href="https://play.google.com/store/apps/details?id=com.google.android.webview">Android System Webview</a> app has updates enabled and is up-to-date.';
        else if (/iphone|ipad|ipod/i.test(ua)) {
            msgText += "Alternatively if <strong>Lockdown mode</strong> is enabled, try turning it off to view this content.";
            msgText += "<br><br>Note: using the <strong>iOS simulator</strong> requires <strong>Xcode 12+</strong>. Otherwise try testing on a real device instead."
        } else if (/msie/i.test(ua) || /trident/i.test(ua) || /edge\//i.test(ua)) msgText += "<br><br>Note: <strong>Internet Explorer</strong> and the <strong>legacy Edge browser</strong> are not supported. Try using <a href='https://www.google.com/chrome'>Chrome</a> or <a href='https://www.mozilla.org/firefox'>Firefox</a> instead.";
        else if (isKasperskyScriptInjected) msgText =
            "It appears a script was added to this export by Kaspersky software. This prevents the exported project from working. Try disabling Kaspersky and exporting again.";
        else msgText += "Try installing any available software updates. Alternatively try on a different device.";
        msgText += "<br><br><em>Missing features: " + missingFeatures.join(", ") + "<br>User agent: " + navigator.userAgent + "</em>";
        msgBody.innerHTML = msgText;
        msgWrap.appendChild(msgBody)
    }
})();