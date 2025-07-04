var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("js-header");
var stickyMenu = document.getElementById("js-navbar-menu");
window.addEventListener("scroll", function(a) {
    last_scroll_position = window.scrollY;
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        header.classList.remove("is-visible");
        header.classList.add("is-hidden")
    } else {
        if (new_scroll_position > last_scroll_position) {
            header.classList.remove("is-hidden");
            header.classList.add("is-visible");
            if (stickyMenu) {
                stickyMenu.classList.add("is-sticky")
            }
        }
    }
    if (last_scroll_position < 1) {
        header.classList.remove("is-visible");
        if (stickyMenu) {
            stickyMenu.classList.remove("is-sticky")
        }
    }
    new_scroll_position = last_scroll_position
});
(function(e) {
    var d = {
        mobileMenuMode: "overlay",
        animationSpeed: 300,
        submenuWidth: 300,
        doubleClickTime: 500,
        mobileMenuExpandableSubmenus: false,
        isHoverMenu: true,
        wrapperSelector: ".navbar",
        buttonSelector: ".navbar__toggle",
        menuSelector: ".navbar__menu",
        submenuSelector: ".navbar__submenu",
        mobileMenuSidebarLogoSelector: null,
        mobileMenuSidebarLogoUrl: null,
        relatedContainerForOverlayMenuSelector: null,
        ariaButtonAttribute: "aria-haspopup",
        separatorItemClass: "is-separator",
        parentItemClass: "has-submenu",
        submenuLeftPositionClass: "is-left-submenu",
        submenuRightPositionClass: "is-right-submenu",
        mobileMenuOverlayClass: "navbar_mobile_overlay",
        mobileMenuSubmenuWrapperClass: "navbar__submenu_wrapper",
        mobileMenuSidebarClass: "navbar_mobile_sidebar",
        mobileMenuSidebarOverlayClass: "navbar_mobile_sidebar__overlay",
        hiddenElementClass: "is-hidden",
        openedMenuClass: "is-active",
        noScrollClass: "no-scroll",
        relatedContainerForOverlayMenuClass: "is-visible"
    };
    var b = {};
    Object.keys(d).forEach(function(p) {
        b[p] = d[p]
    });
    if (typeof e === "object") {
        Object.keys(e).forEach(function(p) {
            b[p] = e[p]
        })
    }

    function o() {
        if (!document.querySelectorAll(b.wrapperSelector).length) {
            return
        }
        c();
        if (b.mobileMenuMode === "overlay") {
            m()
        } else {
            if (b.mobileMenuMode === "sidebar") {
                l()
            }
        }
        n();
        if (!b.isHoverMenu) {
            f()
        }
    }

    function c() {
        var p = document.querySelectorAll(b.wrapperSelector + " ." + b.parentItemClass);
        for (var r = 0; r < p.length; r++) {
            var q = b.isHoverMenu ? "mouseenter" : "click";
            p[r].addEventListener(q, function() {
                var u = this.querySelector(b.submenuSelector);
                var t = this.getBoundingClientRect().left;
                var s = 2;
                if (this.parentNode === document.querySelector(b.menuSelector)) {
                    s = 1
                }
                if (b.submenuWidth !== "auto") {
                    var x = t + (b.submenuWidth * s);
                    if (window.innerWidth < x) {
                        u.classList.remove(b.submenuLeftPositionClass);
                        u.classList.add(b.submenuRightPositionClass)
                    } else {
                        u.classList.remove(b.submenuRightPositionClass);
                        u.classList.add(b.submenuLeftPositionClass)
                    }
                } else {
                    var x = 0;
                    var v = 0;
                    if (s === 1) {
                        x = t + u.clientWidth
                    } else {
                        x = t + this.clientWidth + u.clientWidth
                    }
                    if (window.innerWidth < x) {
                        u.classList.remove(b.submenuLeftPositionClass);
                        u.classList.add(b.submenuRightPositionClass);
                        v = -1 * u.clientWidth;
                        u.removeAttribute("style");
                        if (s === 1) {
                            v = 0;
                            u.style.right = v + "px"
                        } else {
                            u.style.right = this.clientWidth + "px"
                        }
                    } else {
                        u.classList.remove(b.submenuRightPositionClass);
                        u.classList.add(b.submenuLeftPositionClass);
                        v = this.clientWidth;
                        if (s === 1) {
                            v = 0
                        }
                        u.removeAttribute("style");
                        u.style.left = v + "px"
                    }
                }
                u.setAttribute("aria-hidden", false)
            });
            if (b.isHoverMenu) {
                p[r].addEventListener("mouseleave", function() {
                    var s = this.querySelector(b.submenuSelector);
                    s.removeAttribute("style");
                    s.setAttribute("aria-hidden", true)
                })
            }
        }
    }

    function m() {
        var r = document.createElement("div");
        r.classList.add(b.mobileMenuOverlayClass);
        r.classList.add(b.hiddenElementClass);
        var p = document.querySelector(b.menuSelector).outerHTML;
        r.innerHTML = p;
        document.body.appendChild(r);
        if (b.mobileMenuExpandableSubmenus) {
            j(r);
            a(r)
        } else {
            k(r)
        }
        var q = document.querySelector(b.buttonSelector);
        q.addEventListener("click", function() {
            var s = document.querySelector(b.relatedContainerForOverlayMenuSelector);
            r.classList.toggle(b.hiddenElementClass);
            q.classList.toggle(b.openedMenuClass);
            q.setAttribute(b.ariaButtonAttribute, q.classList.contains(b.openedMenuClass));
            if (q.classList.contains(b.openedMenuClass)) {
                document.documentElement.classList.add(b.noScrollClass);
                if (s) {
                    s.classList.add(b.relatedContainerForOverlayMenuClass)
                }
            } else {
                document.documentElement.classList.remove(b.noScrollClass);
                if (s) {
                    s.classList.remove(b.relatedContainerForOverlayMenuClass)
                }
            }
        })
    }

    function l() {
        var r = document.createElement("div");
        r.classList.add(b.mobileMenuSidebarClass);
        r.classList.add(b.hiddenElementClass);
        var p = "";
        if (b.mobileMenuSidebarLogoSelector !== null) {
            p = document.querySelector(b.mobileMenuSidebarLogoSelector).outerHTML
        } else {
            if (b.mobileMenuSidebarLogoUrl !== null) {
                p = '<img src="' + b.mobileMenuSidebarLogoUrl + '" alt="" />'
            }
        }
        p += document.querySelector(b.menuSelector).outerHTML;
        r.innerHTML = p;
        var s = document.createElement("div");
        s.classList.add(b.mobileMenuSidebarOverlayClass);
        s.classList.add(b.hiddenElementClass);
        document.body.appendChild(s);
        document.body.appendChild(r);
        if (b.mobileMenuExpandableSubmenus) {
            j(r);
            a(r)
        } else {
            k(r)
        }
        r.addEventListener("click", function(t) {
            t.stopPropagation()
        });
        s.addEventListener("click", function() {
            r.classList.add(b.hiddenElementClass);
            s.classList.add(b.hiddenElementClass);
            q.classList.remove(b.openedMenuClass);
            q.setAttribute(b.ariaButtonAttribute, false);
            document.documentElement.classList.remove(b.noScrollClass)
        });
        var q = document.querySelector(b.buttonSelector);
        q.addEventListener("click", function() {
            r.classList.toggle(b.hiddenElementClass);
            s.classList.toggle(b.hiddenElementClass);
            q.classList.toggle(b.openedMenuClass);
            q.setAttribute(b.ariaButtonAttribute, q.classList.contains(b.openedMenuClass));
            document.documentElement.classList.toggle(b.noScrollClass)
        })
    }

    function k(r) {
        var p = r.querySelectorAll(b.submenuSelector);
        for (var q = 0; q < p.length; q++) {
            p[q].setAttribute("aria-hidden", false)
        }
    }

    function j(r) {
        var p = r.querySelectorAll(b.submenuSelector);
        for (var q = 0; q < p.length; q++) {
            var s = document.createElement("div");
            s.classList.add(b.mobileMenuSubmenuWrapperClass);
            p[q].parentNode.insertBefore(s, p[q]);
            s.appendChild(p[q])
        }
    }

    function a(s) {
        var q = s.querySelectorAll("." + b.parentItemClass);
        for (var r = 0; r < q.length; r++) {
            q[r].addEventListener("click", function(y) {
                y.stopPropagation();
                var v = this.querySelector("." + b.mobileMenuSubmenuWrapperClass);
                var x = v.firstElementChild;
                if (v.classList.contains(b.openedMenuClass)) {
                    var u = x.clientHeight;
                    v.style.height = u + "px";
                    setTimeout(function() {
                        v.style.height = "0px"
                    }, 0);
                    setTimeout(function() {
                        v.removeAttribute("style");
                        v.classList.remove(b.openedMenuClass)
                    }, b.animationSpeed);
                    x.setAttribute("aria-hidden", true);
                    x.parentNode.firstElementChild.setAttribute("aria-expanded", false)
                } else {
                    var u = x.clientHeight;
                    v.classList.add(b.openedMenuClass);
                    v.style.height = "0px";
                    setTimeout(function() {
                        v.style.height = u + "px"
                    }, 0);
                    setTimeout(function() {
                        v.removeAttribute("style")
                    }, b.animationSpeed);
                    x.setAttribute("aria-hidden", false);
                    x.parentNode.firstElementChild.setAttribute("aria-expanded", true)
                }
            });
            var t = q[r].children;
            for (var p = 0; p < t.length; p++) {
                if (t[p].tagName === "A") {
                    t[p].addEventListener("click", function(x) {
                        var u = parseInt(this.getAttribute("data-last-click"), 10);
                        var v = +new Date();
                        if (isNaN(u)) {
                            x.preventDefault();
                            this.setAttribute("data-last-click", v)
                        } else {
                            if (u + b.doubleClickTime <= v) {
                                x.preventDefault();
                                this.setAttribute("data-last-click", v)
                            } else {
                                if (u + b.doubleClickTime > v) {
                                    x.stopPropagation();
                                    g(this, true)
                                }
                            }
                        }
                    })
                }
            }
        }
    }

    function f() {
        var q = document.querySelectorAll(b.wrapperSelector + " *[aria-hidden]");
        for (var r = 0; r < q.length; r++) {
            var p = q[r];
            if (p.parentNode.classList.contains("active") || p.parentNode.classList.contains("active-parent")) {
                p.setAttribute("aria-hidden", "false");
                p.parentNode.firstElementChild.setAttribute("aria-expanded", true)
            } else {
                p.setAttribute("aria-hidden", "true");
                p.parentNode.firstElementChild.setAttribute("aria-expanded", false)
            }
        }
    }

    function n() {
        var p = document.querySelectorAll(b.menuSelector + " a");
        for (var q = 0; q < p.length; q++) {
            if (p[q].parentNode.classList.contains(b.parentItemClass)) {
                continue
            }
            p[q].addEventListener("click", function(r) {
                g(this, false)
            })
        }
    }

    function g(q, t) {
        if (t === false) {
            if (q.parentNode.classList.contains(b.parentItemClass)) {
                return
            }
        }
        var p = document.querySelector(b.relatedContainerForOverlayMenuSelector);
        var s = document.querySelector(b.buttonSelector);
        var r = document.querySelector("." + b.mobileMenuOverlayClass);
        if (!r) {
            r = document.querySelector("." + b.mobileMenuSidebarClass)
        }
        r.classList.add(b.hiddenElementClass);
        s.classList.remove(b.openedMenuClass);
        s.setAttribute(b.ariaButtonAttribute, false);
        document.documentElement.classList.remove(b.noScrollClass);
        if (p) {
            p.classList.remove(b.relatedContainerForOverlayMenuClass)
        }
        var u = document.querySelector("." + b.mobileMenuSidebarOverlayClass);
        if (u) {
            u.classList.add(b.hiddenElementClass)
        }
    }
    o()
})(window.publiiThemeMenuConfig);
(function() {
    let shareButton = document.querySelector(".js-post__share-button");
    let sharePopup = document.querySelector(".js-post__share-popup");
    if (shareButton) {
        sharePopup.addEventListener("click", function(a) {
            a.stopPropagation()
        });
        shareButton.addEventListener("click", function(a) {
            a.preventDefault();
            a.stopPropagation();
            sharePopup.classList.toggle("is-visible")
        });
        document.body.addEventListener("click", function() {
            sharePopup.classList.remove("is-visible")
        })
    }
    var c = {
        Link: ".js-share",
        Width: 500,
        Height: 500
    };
    var e = document.querySelectorAll(c.Link);
    for (var d = 0; d < e.length; d++) {
        e[d].onclick = b
    }

    function b(l) {
        l = (l ? l : window.event);
        var j = (l.target ? l.target : l.srcElement);
        if (sharePopup) {
            sharePopup.classList.remove("is-visible")
        }
        var g = Math.floor(((screen.availWidth || 1024) - c.Width) / 2),
            f = Math.floor(((screen.availHeight || 700) - c.Height) / 2);
        var k = j.href ? j.href : j.parentNode.href;
        var a = window.open(k, "social", "width=" + c.Width + ",height=" + c.Height + ",left=" + g + ",top=" + f + ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
        if (a) {
            a.focus();
            if (l.preventDefault) {
                l.preventDefault()
            }
            l.returnValue = false
        }
        return !!a
    }
})();
var searchButton = document.querySelector(".js-search-btn");
searchOverlay = document.querySelector(".js-search-overlay");
searchInput = document.querySelector("[type='search']");
if (searchButton) {
    searchButton.addEventListener("click", function() {
        searchOverlay.classList.toggle("expanded");
        if (searchInput) {
            setTimeout(function() {
                if (searchOverlay.classList.contains("expanded")) {
                    searchInput.focus()
                }
            }, 60)
        }
    });
    searchOverlay.addEventListener("click", function(a) {
        a.stopPropagation()
    });
    searchButton.addEventListener("click", function(a) {
        a.stopPropagation()
    });
    document.body.addEventListener("click", function() {
        searchOverlay.classList.remove("expanded")
    })
}
var backToTopButton = document.getElementById("backToTop");
if (backToTopButton) {
    window.onscroll = function() {
        backToTopScrollFunction()
    };

    function backToTopScrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            backToTopButton.classList.add("is-visible")
        } else {
            backToTopButton.classList.remove("is-visible")
        }
    }

    function backToTopFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }
}(function() {
    let wrappers = document.querySelectorAll(".post__video, .post__iframe");
    for (let i = 0; i < wrappers.length; i++) {
        let embed = wrappers[i].querySelector("iframe, embed, video, object");
        if (!embed) {
            continue
        }
        if (embed.getAttribute("data-responsive") === "false") {
            continue
        }
        let w = embed.getAttribute("width");
        let h = embed.getAttribute("height");
        let ratio = false;
        if (!w || !h) {
            continue
        }
        if (w.indexOf("%") > -1 && h.indexOf("%") > -1) {
            w = parseFloat(w.replace("%", ""));
            h = parseFloat(h.replace("%", ""));
            ratio = h / w
        } else {
            if (w.indexOf("%") === -1 && h.indexOf("%") === -1) {
                w = parseInt(w, 10);
                h = parseInt(h, 10);
                ratio = h / w
            }
        }
        if (ratio !== false) {
            let ratioValue = (ratio * 100) + "%";
            wrappers[i].setAttribute("style", "--embed-aspect-ratio:" + ratioValue)
        }
    }
})();