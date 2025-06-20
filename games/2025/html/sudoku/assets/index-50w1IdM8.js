(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const r of s.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && n(r)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function a(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function n(o) {
        if (o.ep) return;
        o.ep = !0;
        const s = a(o);
        fetch(o.href, s)
    }
})();

function T(t, e, a, n) {
    for (let o = 0; o < 3; o++)
        for (let s = 0; s < 3; s++)
            if (t[e + o][a + s] === n) return !1;
    return !0
}

function $(t, e, a) {
    for (let n = 0; n < 3; n++)
        for (let o = 0; o < 3; o++) {
            let s;
            do s = Math.floor(Math.random() * 9) + 1; while (!T(t, e, a, s));
            t[e + n][a + o] = s
        }
}

function D(t, e, a) {
    for (let n = 0; n < 9; n++)
        if (t[e][n] === a) return !1;
    return !0
}

function U(t, e, a) {
    for (let n = 0; n < 9; n++)
        if (t[n][e] === a) return !1;
    return !0
}

function _(t, e, a, n) {
    return D(t, e, n) && U(t, a, n) && T(t, e - e % 3, a - a % 3, n)
}

function K(t) {
    for (let e = 0; e < 9; e += 3) $(t, e, e)
}

function G(t, e, a) {
    if (a >= 9 && e < 8 && (e++, a = 0), e >= 9 && a >= 9) return !0;
    if (e < 3) a < 3 && (a = 3);
    else if (e < 6) a === Math.floor(e / 3) * 3 && (a += 3);
    else if (a === 6 && (e++, a = 0, e >= 9)) return !0;
    for (let n = 1; n <= 9; n++)
        if (_(t, e, a, n)) {
            if (t[e][a] = n, G(t, e, a + 1)) return !0;
            t[e][a] = 0
        }
    return !1
}

function z(t, e) {
    for (; e > 0;) {
        const a = Math.floor(Math.random() * 81),
            n = Math.floor(a / 9),
            o = a % 9;
        t[n][o] !== 0 && (t[n][o] = 0, e--)
    }
}

function F(t) {
    const e = Array.from({
        length: 9
    }, () => Array(9).fill(0));
    K(e), G(e, 0, 3);
    const a = e.map(n => [...n]);
    return z(e, t), {
        initialBoard: e,
        solution: a
    }
}
let B = [],
    v = [],
    i = [],
    l = null,
    I, M = 0,
    y = 0,
    u = !1,
    d = !1,
    m = !1,
    R = "easy";
const Y = {
    easy: 30,
    medium: 35,
    hard: 40,
    expert: 45,
    master: 50
};
let h = 0,
    g = 3,
    w = [];

function H(t, e) {
    return Math.floor(t / 3) * 3 + Math.floor(e / 3)
}

function J() {
    const t = Y[R],
        e = F(t);
    B = e.initialBoard, v = e.solution;
    const a = document.getElementById("grid");
    a.innerHTML = "";
    for (let n = 0; n < 9; n++) {
        i[n] = [];
        for (let o = 0; o < 9; o++) {
            const s = document.createElement("div"),
                r = B[n][o] !== 0;
            s.className = `cell ${r?"initial-cell font-semibold":""}`, s.dataset.row = n, s.dataset.col = o, s.dataset.block = H(n, o), s.dataset.initial = r, s.dataset.value = B[n][o], s.dataset.notes = "0,0,0,0,0,0,0,0,0", s.dataset.scored = r ? "true" : "false", r && (s.textContent = B[n][o]), s.addEventListener("click", P), a.appendChild(s), i[n][o] = s
        }
    }
}

function P(t) {
    d || (S(), b(t.target), q(t.target))
}

function S() {
    i.flat().forEach(t => {
        t.classList.remove("selected-cell", "highlight-cell", "same-value-cell")
    })
}

function L(t) {
    R = t, document.querySelectorAll(".difficultyBtn").forEach(e => {
        e.classList.toggle("active", e.dataset.difficulty === t)
    }), document.getElementById("difficulty").value = t, A()
}

function b(t) {
    l = t, t.classList.add("selected-cell")
}

function q(t) {
    const e = parseInt(t.dataset.row),
        a = parseInt(t.dataset.col);
    i.flat().forEach(n => {
        const o = parseInt(n.dataset.row),
            s = parseInt(n.dataset.col),
            r = o === e,
            c = s === a,
            N = Math.floor(o / 3) === Math.floor(e / 3) && Math.floor(s / 3) === Math.floor(a / 3),
            f = n.dataset.value === t.dataset.value && n.dataset.value !== "0";
        (r || c || N) && n.classList.add("highlight-cell"), f && n.classList.add("same-value-cell")
    })
}

function O() {
    document.getElementById("newGameModal").style.display = "none"
}

function k(t = !0) {
    document.getElementById("pauseModal").style.display = t ? "flex" : "none"
}

function Q() {
    const t = [];
    for (let a = 0; a < 9; a++)
        for (let n = 0; n < 9; n++) {
            const o = i[a][n],
                s = parseInt(o.dataset.value),
                r = v[a][n];
            o.dataset.initial === "false" && (s === 0 || s !== r) && t.push({
                row: a,
                col: n
            })
        }
    if (t.length === 0) return null;
    const e = Math.floor(Math.random() * t.length);
    return t[e]
}

function X(t, e) {
    const a = v[t][e],
        n = H(t, e),
        o = Array.from({
            length: 9
        }, (f, x) => i[t][x].dataset.value).filter(f => f === a.toString()).length === 0,
        s = Array.from({
            length: 9
        }, (f, x) => i[x][e].dataset.value).filter(f => f === a.toString()).length === 0,
        r = i.flat().filter(f => parseInt(f.dataset.block) === n && f.dataset.value === a.toString()),
        c = [];
    return o && c.push("row"), s && c.push("column"), r.length === 0 && c.push("block"), c.length === 3 ? "This number completes the only missing value in its row, column, and 3x3 block." : Z(t, e) ? "This is the only possible number that can fit here based on existing numbers in its row, column, and block." : c.length > 0 ? `This number is needed to complete the ${c.join(" and ")}.` : "This number helps maintain the Sudoku rules for this position."
}

function Z(t, e) {
    return i[t][e].dataset.notes.split(",").map(Number).filter(n => n !== 0).length === 1
}

function W(t, e) {
    document.getElementById("hintNumber").textContent = t, document.getElementById("hintReason").textContent = e, document.getElementById("hintModal").style.display = "flex"
}

function j() {
    document.getElementById("difficulty").addEventListener("change", t => {
        L(t.target.value)
    }), document.querySelectorAll(".difficultyBtn").forEach(t => {
        t.addEventListener("click", () => {
            L(t.dataset.difficulty)
        })
    }), document.querySelectorAll(".difficultyBtn2").forEach(t => {
        t.addEventListener("click", () => {
            O(), L(t.dataset.difficulty)
        })
    }), document.getElementById("restartBtn").addEventListener("click", () => {
        O(), A()
    }), document.getElementById("secondChanceBtn").addEventListener("click", () => {
        y = 2, document.querySelectorAll(".mistakes").forEach(t => t.textContent = "2/3"), document.getElementById("gameOverModal").style.display = "none", d = !1, C()
    }), document.getElementById("newGameFromGameOverBtn").addEventListener("click", () => {
        A()
    }), document.querySelectorAll(".pauseBtn").forEach(t => {
        t.addEventListener("click", () => {
            u = !u, u ? (clearInterval(I), document.querySelectorAll(".pauseBtn").forEach(e => e.classList.toggle("active")), k()) : (C(), document.querySelectorAll(".pauseBtn").forEach(e => e.classList.toggle("active")), k(!1))
        })
    }), document.getElementById("resumeBtn").addEventListener("click", () => {
        d || u && (u = !1, C(), document.querySelectorAll(".pauseBtn").forEach(t => t.classList.toggle("active")), k(!1))
    }), document.getElementById("newGameBtn").addEventListener("click", () => {
        document.getElementById("newGameModal").style.display = "flex"
    }), document.querySelectorAll(".add-btn").forEach(t => t.addEventListener("click", () => {
        if (!l || d || u) return;
        const e = t.innerText;
        e >= "1" && e <= "9" && l.dataset.initial === "false" && (E(l, e), !m && Math.floor(l.dataset.value) === v[Math.floor(l.dataset.row)][Math.floor(l.dataset.col)] && l.dataset.scored === "false" && (l.dataset.scored = "true", h += [100, 75, 50, 25][Math.floor(Math.random() * 4)], document.querySelectorAll(".score").forEach(n => n.textContent = h)), p(!0, l.dataset.scored === "false"))
    })), document.getElementById("eraseBtn").addEventListener("click", () => {
        u || l && (d || !m && l.dataset.value === "0" || m && l.dataset.notes === "0,0,0,0,0,0,0,0,0" || (E(l, "0"), p(!1)))
    }), document.getElementById("editBtn").addEventListener("click", () => {
        d || (m = !m, m || i.flat().forEach(t => {
            t.dataset.notes === "0,0,0,0,0,0,0,0,0" && t.classList.remove("active")
        }), document.getElementById("editBtn").classList.toggle("active"))
    }), document.getElementById("undoBtn").addEventListener("click", () => {
        if (d || !w.length || u) return;
        const t = w.pop(),
            e = i[t.row][t.col];
        if (e.dataset.value = t.prevValue, e.dataset.notes = t.prevNotes, e.dataset.notes !== "0,0,0,0,0,0,0,0,0") {
            e.classList.contains("active") || e.classList.add("active");
            const a = t.prevNotes.split(",").map(Number);
            e.innerHTML = a.map(n => `<span>${n===0?"":n}</span>`).join("")
        } else e.classList.contains("active") && e.classList.remove("active"), e.textContent = e.dataset.value === "0" ? "" : e.dataset.value, e.innerHTML = e.textContent;
        p(!1)
    }), document.getElementById("hintBtn").addEventListener("click", async () => {
        if (d || u) return;
        if (g === 0) {
            window.hints == 99 && (g = 99);
            return
        } else g--, g === 0 ? document.getElementById("hintsCount").textContent = "0" : document.getElementById("hintsCount").textContent = g;
        const t = Q();
        if (!t) return;
        const {
            row: e,
            col: a
        } = t, n = v[e][a], o = X(e, a);
        S(), b(i[e][a]), q(i[e][a]), E(i[e][a], n.toString()), W(n, o), l.dataset.scored === "false" && (l.dataset.scored = "true", h += 50, document.querySelectorAll(".score").forEach(s => s.textContent = h)), p(!1)
    })
}

function ee() {
    document.addEventListener("keydown", t => {
        if (!l || d || u) return;
        const e = t.key,
            a = e >= "1" && e <= "9",
            n = ["Backspace", "Delete", "0"].includes(e);
        a && l.dataset.initial === "false" ? (E(l, e), !m && Math.floor(l.dataset.value) === v[Math.floor(l.dataset.row)][Math.floor(l.dataset.col)] && l.dataset.scored === "false" && (l.dataset.scored = "true", h += [100, 75, 50, 25][Math.floor(Math.random() * 4)], document.querySelectorAll(".score").forEach(o => o.textContent = h)), p(!0)) : n && l.dataset.initial === "false" ? (E(l, "0"), p(!1)) : e.startsWith("Arrow") && te(e)
    })
}

function E(t, e) {
    if (t.dataset.initial === "true") return;
    const a = t.dataset.value,
        n = t.dataset.notes;
    if (!m) t.dataset.value === e && (e = "0"), t.classList.contains("active") && t.classList.remove("active"), t.dataset.value = e, t.dataset.notes = "0,0,0,0,0,0,0,0,0", t.innerHTML = e === "0" ? "" : e;
    else {
        t.dataset.value = "0";
        const o = t.dataset.notes.split(",").map(s => parseInt(s));
        if (t.classList.contains("active") || t.classList.add("active"), e === "0") {
            t.dataset.notes = "0,0,0,0,0,0,0,0,0", t.innerHTML = "";
            return
        } else {
            const s = parseInt(e) - 1;
            o[s] = o[s] === 0 ? e : 0, t.dataset.notes = o.join(","), t.innerHTML = o.map(r => `<span>${r===0?"":r}</span>`).join("")
        }
    }
    w.push({
        row: parseInt(t.dataset.row),
        col: parseInt(t.dataset.col),
        prevValue: a,
        prevNotes: n
    })
}

function te(t) {
    if (!l || d) return;
    const e = parseInt(l.dataset.row),
        a = parseInt(l.dataset.col);
    let n = e,
        o = a;
    switch (t) {
        case "ArrowUp":
            n = Math.max(0, e - 1);
            break;
        case "ArrowDown":
            n = Math.min(8, e + 1);
            break;
        case "ArrowLeft":
            o = Math.max(0, a - 1);
            break;
        case "ArrowRight":
            o = Math.min(8, a + 1);
            break;
        default:
            return
    }
    S(), b(i[n][o]), q(i[n][o])
}

function V(t = !1) {
    document.getElementById("gameOverModal").style.display = "flex", document.getElementById("gameOverTitle").textContent = t ? "Congratulations!" : "Game Over!", document.getElementById("gameOverMessage").textContent = t ? `You have successfully completed the puzzle with a score of ${h}.` : "You've reached the maximum number of mistakes.", document.getElementById("secondChanceBtn").style.display = t ? "none" : "block", document.getElementById("gameOverCloseBtn").style.display = t ? "flex" : "none"
}

function p(t = !0) {
    i.flat().forEach(a => a.classList.remove("wrong-cell"));
    let e = !1;
    for (let a = 0; a < 9; a++)
        for (let n = 0; n < 9; n++) {
            const o = i[a][n],
                s = o.dataset.value;
            if (s === "0") continue;
            const r = [...ae(a, n, s), ...oe(a, n, s), ...se(a, n, s)];
            r.length > 0 ? (e = !0, o.classList.add("wrong-cell"), r.forEach(c => c.classList.add("wrong-cell"))) : v[a][n] !== parseInt(s) && (e = !0, o.classList.add("wrong-cell"))
        }
    return e && t && !m && ne(), e || i.flat().some(n => n.dataset.value === "0") || (d = !0, clearInterval(I), V(!0)), !e
}

function ne() {
    y >= 3 || (y++, document.querySelectorAll(".mistakes").forEach(t => t.textContent = `${y}/3`), y === 3 && (d = !0, clearInterval(I), V()))
}

function ae(t, e, a) {
    return Array.from({
        length: 9
    }, (n, o) => o !== e && i[t][o].dataset.value === a ? i[t][o] : null).filter(n => n !== null)
}

function oe(t, e, a) {
    return Array.from({
        length: 9
    }, (n, o) => o !== t && i[o][e].dataset.value === a ? i[o][e] : null).filter(n => n !== null)
}

function se(t, e, a) {
    const n = [],
        o = Math.floor(t / 3) * 3,
        s = Math.floor(e / 3) * 3;
    for (let r = o; r < o + 3; r++)
        for (let c = s; c < s + 3; c++)(r !== t || c !== e) && i[r][c].dataset.value === a && n.push(i[r][c]);
    return n
}

function A() {
    clearInterval(I), M = 0, y = 0, g = 3, h = 0, u = !1, d = !1, w = [], document.querySelectorAll(".mistakes").forEach(e => e.textContent = `${y}/3`), document.getElementById("gameOverModal").style.display = "none", document.getElementById("hintsCount").textContent = g, document.querySelectorAll(".score").forEach(e => e.textContent = "0"), document.querySelectorAll(".timer").forEach(e => e.textContent = "00:00"), C(), J(), l = null, P({
        target: i[0][0]
    })
}

function C() {
    const t = document.querySelectorAll(".timer");
    I = setInterval(() => {
        M++;
        let e = Math.floor(M / 60),
            a = M % 60;
        t.forEach(n => n.textContent = `${e<10?"0"+e:e}:${a<10?"0"+a:a}`)
    }, 1e3)
}
j();
ee();
L("easy");