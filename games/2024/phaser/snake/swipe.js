function _0x40f7(_0x1ed3a5, _0x20a181) {
    const _0x3cdbfa = _0x3cdb();
    return _0x40f7 = function(_0x40f76c, _0x493b20) {
        _0x40f76c = _0x40f76c - 0xd8;
        let _0x42e7ef = _0x3cdbfa[_0x40f76c];
        return _0x42e7ef;
    }, _0x40f7(_0x1ed3a5, _0x20a181);
}
const _0x323d2e = _0x40f7;
(function(_0x3f24cd, _0x3d71e0) {
    const _0x8cc79 = _0x40f7,
        _0x27908b = _0x3f24cd();
    while (!![]) {
        try {
            const _0x5c7491 = parseInt(_0x8cc79(0xea)) / 0x1 + parseInt(_0x8cc79(0xda)) / 0x2 * (-parseInt(_0x8cc79(0xf4)) / 0x3) + parseInt(_0x8cc79(0xf1)) / 0x4 * (parseInt(_0x8cc79(0xd9)) / 0x5) + -parseInt(_0x8cc79(0xed)) / 0x6 * (parseInt(_0x8cc79(0xdc)) / 0x7) + -parseInt(_0x8cc79(0xdd)) / 0x8 + parseInt(_0x8cc79(0xeb)) / 0x9 + -parseInt(_0x8cc79(0xe2)) / 0xa;
            if (_0x5c7491 === _0x3d71e0) break;
            else _0x27908b['push'](_0x27908b['shift']());
        } catch (_0x46f8db) {
            _0x27908b['push'](_0x27908b['shift']());
        }
    }
}(_0x3cdb, 0x63b6c));

function _0x3cdb() {
    const _0x5b848c = ['once', 'Scenes', 'input', 'lastPointerDownLocation', 'Events', '275096FZISmH', '2786526nWNkvz', 'lastPointerUpLocation', '133638gxagre', 'swipeDirection', 'DOWN', 'abs', '8VTZSiE', 'Math', 'NONE', '21bycaUd', 'events', 'BetweenPoints', 'Vector2', 'clone', 'RIGHT', 'LEFT', '1304165wrWsOe', '1408ZaDQNJ', 'POINTER_UP', '70LudnVa', '3316840HtRuBW', 'isPointerDown', 'swipeDetectedCallback', 'POINTER_DOWN', 'freeze', '556850PifYZH', 'Input', 'position'];
    _0x3cdb = function() {
        return _0x5b848c;
    };
    return _0x3cdb();
}
const BASE_DIRECTION = Object[_0x323d2e(0xe1)]({
        'LEFT': _0x323d2e(0xd8),
        'RIGHT': _0x323d2e(0xf9),
        'DOWN': 'DOWN',
        'UP': 'UP'
    }),
    DIRECTION = Object[_0x323d2e(0xe1)]({ ...BASE_DIRECTION,
        'NONE': _0x323d2e(0xf3)
    });
class Swipe {#
    scene;
    ['lastPointerDownLocation'];
    [_0x323d2e(0xec)];
    ['swipeDirection'];#
    config;
    [_0x323d2e(0xde)];
    constructor(_0x280285, _0x565b32) {
        const _0x1c9f82 = _0x323d2e;
        this.#scene = _0x280285, this['lastPointerDownLocation'] = new Phaser[(_0x1c9f82(0xf2))][(_0x1c9f82(0xf7))](0x0, 0x0), this[_0x1c9f82(0xec)] = new Phaser[(_0x1c9f82(0xf2))][(_0x1c9f82(0xf7))](0x0, 0x0), this[_0x1c9f82(0xee)] = DIRECTION['NONE'], this.#config = _0x565b32, this.#setupEvents(), this[_0x1c9f82(0xde)] = ![];
    }#
    setupEvents() {
        const _0x2631a4 = _0x323d2e;
        this.#scene[_0x2631a4(0xe7)]['on'](Phaser[_0x2631a4(0xe3)]['Events'][_0x2631a4(0xe0)], this.#handlePointerDown, this), this.#scene['input']['on'](Phaser[_0x2631a4(0xe3)][_0x2631a4(0xe9)]['POINTER_UP'], this.#handlePointerUp, this), this.#scene[_0x2631a4(0xf5)][_0x2631a4(0xe5)](Phaser[_0x2631a4(0xe6)][_0x2631a4(0xe9)]['SHUTDOWN'], () => {
            const _0x5e231c = _0x2631a4;
            this.#scene[_0x5e231c(0xe7)]['off'](Phaser['Input'][_0x5e231c(0xe9)][_0x5e231c(0xe0)], this.#handlePointerDown, this), this.#scene[_0x5e231c(0xe7)]['off'](Phaser[_0x5e231c(0xe3)]['Events'][_0x5e231c(0xdb)], this.#handlePointerUp, this);
        });
    }#
    handlePointerDown(_0x4df752) {
        const _0x3dd7bb = _0x323d2e;
        this[_0x3dd7bb(0xe8)] = _0x4df752['position'][_0x3dd7bb(0xf8)](), this[_0x3dd7bb(0xde)] = !![];
    }#
    handlePointerUp(_0x501d34) {
        const _0x38afae = _0x323d2e;
        this['lastPointerUpLocation'] = _0x501d34[_0x38afae(0xe4)]['clone'](), this[_0x38afae(0xde)] = ![], this.#handleSwipe(), this[_0x38afae(0xee)] !== DIRECTION[_0x38afae(0xf3)] && this.#config && this.#config[_0x38afae(0xdf)] && this.#config[_0x38afae(0xdf)](this[_0x38afae(0xee)]);
    }#
    handleSwipe() {
        const _0x5e1f28 = _0x323d2e;
        if (this[_0x5e1f28(0xe8)]['x'] === this[_0x5e1f28(0xec)]['x'] && this[_0x5e1f28(0xe8)]['y'] === this[_0x5e1f28(0xec)]['y']) {
            this[_0x5e1f28(0xee)] = DIRECTION[_0x5e1f28(0xf3)];
            return;
        }
        const _0x1d0ddd = Phaser[_0x5e1f28(0xf2)]['Angle'][_0x5e1f28(0xf6)](this[_0x5e1f28(0xe8)], this['lastPointerUpLocation']),
            _0x2bf500 = Phaser[_0x5e1f28(0xf2)]['RadToDeg'](_0x1d0ddd),
            _0x471921 = Math[_0x5e1f28(0xf0)](_0x2bf500);
        if (_0x471921 <= 0x2d) {
            this[_0x5e1f28(0xee)] = DIRECTION[_0x5e1f28(0xf9)];
            return;
        }
        if (_0x471921 >= 0x87) {
            this[_0x5e1f28(0xee)] = DIRECTION[_0x5e1f28(0xd8)];
            return;
        }
        if (_0x2bf500 < 0x0) {
            this[_0x5e1f28(0xee)] = DIRECTION['UP'];
            return;
        }
        this[_0x5e1f28(0xee)] = DIRECTION[_0x5e1f28(0xef)];
    }
}