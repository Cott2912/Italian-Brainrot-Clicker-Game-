const _0x25e0f0 = _0x18a3;

function _0x18a3(_0x49f9c0, _0x37a84f) {
    const _0x280469 = _0x2804();
    return _0x18a3 = function(_0x18a3ea, _0x980b1a) {
        _0x18a3ea = _0x18a3ea - 0x185;
        let _0x41c6dd = _0x280469[_0x18a3ea];
        return _0x41c6dd;
    }, _0x18a3(_0x49f9c0, _0x37a84f);
}(function(_0x4e82f8, _0x29d421) {
    const _0xdcbff4 = _0x18a3,
        _0xe761ea = _0x4e82f8();
    while (!![]) {
        try {
            const _0xb69331 = -parseInt(_0xdcbff4(0x1bc)) / 0x1 + -parseInt(_0xdcbff4(0x1a5)) / 0x2 * (-parseInt(_0xdcbff4(0x1c0)) / 0x3) + parseInt(_0xdcbff4(0x1a1)) / 0x4 + parseInt(_0xdcbff4(0x1bd)) / 0x5 + -parseInt(_0xdcbff4(0x1a3)) / 0x6 * (-parseInt(_0xdcbff4(0x1b5)) / 0x7) + -parseInt(_0xdcbff4(0x1bb)) / 0x8 * (parseInt(_0xdcbff4(0x1b4)) / 0x9) + parseInt(_0xdcbff4(0x1a9)) / 0xa * (-parseInt(_0xdcbff4(0x193)) / 0xb);
            if (_0xb69331 === _0x29d421) break;
            else _0xe761ea['push'](_0xe761ea['shift']());
        } catch (_0x13e1f8) {
            _0xe761ea['push'](_0xe761ea['shift']());
        }
    }
}(_0x2804, 0x33216));
const canvas = document[_0x25e0f0(0x1a2)](_0x25e0f0(0x1ad)),
    ctx = canvas[_0x25e0f0(0x19a)]('2d'),
    canvasWidth = 0x258,
    canvasHeight = 0x190,
    gridSizeX = 0x1e,
    gridSizeY = 0x14,
    tileSizeX = canvasWidth / gridSizeX,
    tileSizeY = canvasHeight / gridSizeY;
let snake, food, direction, lastDirection, queuedDirection, directionQueue = [],
    score, highScore, gameOver, gameInterval, originalGameSpeed = 0x96,
    gameTmpMessage = '',
    gameTmpMsgCount = 0x0;
highScore = localStorage[_0x25e0f0(0x18e)](_0x25e0f0(0x1b8)) || 0x0;

function initGame() {
    snake = [{
        'x': 0xa,
        'y': 0xa
    }], food = generateFood(), direction = {
        'x': 0x0,
        'y': 0x0
    }, lastDirection = direction, directionQueue = [], score = 0x0, gameOver = ![];
}

function generateFood() {
    const _0xa267a2 = _0x25e0f0;
    let _0x219196;
    while (!![]) {
        _0x219196 = {
            'x': Math[_0xa267a2(0x199)](Math[_0xa267a2(0x18c)]() * gridSizeX),
            'y': Math[_0xa267a2(0x199)](Math[_0xa267a2(0x18c)]() * gridSizeY)
        };
        let _0x43e652 = snake[_0xa267a2(0x1c2)](_0x22cac4 => _0x22cac4['x'] === _0x219196['x'] && _0x22cac4['y'] === _0x219196['y']);
        if (!_0x43e652) break;
    }
    return _0x219196;
}

function drawSnake() {
    const _0x2a50c8 = _0x25e0f0;
    if (snake[_0x2a50c8(0x187)] > 0x1) {
        ctx[_0x2a50c8(0x1ba)] = _0x2a50c8(0x1a4), ctx[_0x2a50c8(0x198)] = tileSizeX / 0x2, ctx[_0x2a50c8(0x190)](), ctx[_0x2a50c8(0x1ac)]((snake[0x0]['x'] + 0.5) * tileSizeX, (snake[0x0]['y'] + 0.5) * tileSizeY);
        for (let _0x1fb772 = 0x1; _0x1fb772 < snake[_0x2a50c8(0x187)]; _0x1fb772++) {
            ctx[_0x2a50c8(0x18d)]((snake[_0x1fb772]['x'] + 0.5) * tileSizeX, (snake[_0x1fb772]['y'] + 0.5) * tileSizeY);
        }
        ctx['stroke']();
    }
    ctx[_0x2a50c8(0x1be)] = _0x2a50c8(0x1a4), ctx[_0x2a50c8(0x190)](), ctx['arc']((snake[0x0]['x'] + 0.5) * tileSizeX, (snake[0x0]['y'] + 0.5) * tileSizeY, tileSizeX / 0x2, 0x0, Math['PI'] * 0x2), ctx[_0x2a50c8(0x1b6)]();
}

function drawFood() {
    ctx['fillStyle'] = 'red', ctx['fillRect'](food['x'] * tileSizeX, food['y'] * tileSizeY, tileSizeX, tileSizeY);
}

function drawGameOverScreen() {
    const _0x4e65b1 = _0x25e0f0;
    ctx['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)', ctx[_0x4e65b1(0x185)](0x0, canvasHeight / 0x2 - 0x32, canvasWidth, 0x64), ctx[_0x4e65b1(0x1be)] = _0x4e65b1(0x1aa), ctx[_0x4e65b1(0x1b2)] = _0x4e65b1(0x1b3), ctx[_0x4e65b1(0x192)] = _0x4e65b1(0x197), ctx['fillText'](_0x4e65b1(0x194) + score, canvas[_0x4e65b1(0x1a6)] / 0x2, canvas['height'] / 0x2), ctx[_0x4e65b1(0x19f)](_0x4e65b1(0x1c1), canvas['width'] / 0x2, canvas[_0x4e65b1(0x191)] / 0x2 + 0x28), ctx[_0x4e65b1(0x1b2)] = _0x4e65b1(0x1af), ctx[_0x4e65b1(0x19f)](_0x4e65b1(0x1b0), canvas[_0x4e65b1(0x1a6)] / 0x2, canvas[_0x4e65b1(0x191)] - 0x1e);
}

function showTmpMessage(_0x26d73e, _0x463513) {
    gameTmpMessage = _0x26d73e, gameTmpMsgCount = _0x463513;
}

function drawGame() {
    const _0x56d0c7 = _0x25e0f0;
    ctx[_0x56d0c7(0x188)](0x0, 0x0, canvas['width'], canvas[_0x56d0c7(0x191)]), ctx[_0x56d0c7(0x1be)] = _0x56d0c7(0x1aa), ctx[_0x56d0c7(0x1b2)] = _0x56d0c7(0x19b), ctx[_0x56d0c7(0x192)] = _0x56d0c7(0x197), ctx['fillText'](_0x56d0c7(0x189), canvas[_0x56d0c7(0x1a6)] / 0x2, 0x1e), ctx[_0x56d0c7(0x1be)] = _0x56d0c7(0x1aa), ctx[_0x56d0c7(0x1b2)] = _0x56d0c7(0x1af), ctx[_0x56d0c7(0x192)] = _0x56d0c7(0x1c3), ctx[_0x56d0c7(0x19f)](_0x56d0c7(0x19c) + score, 0xa, 0x1e), ctx[_0x56d0c7(0x19f)]('High\x20Score:\x20' + highScore, 0xa, 0x3c), gameTmpMsgCount > 0x0 && (gameTmpMsgCount--, ctx['font'] = _0x56d0c7(0x1af), ctx[_0x56d0c7(0x192)] = _0x56d0c7(0x197), ctx[_0x56d0c7(0x19f)](gameTmpMessage, canvas['width'] / 0x2, canvas[_0x56d0c7(0x191)] - 0x1e)), drawSnake(), drawFood();
}

function updateSnakePosition() {
    const _0x29c272 = _0x25e0f0;
    directionQueue[_0x29c272(0x187)] > 0x0 && (direction = directionQueue['shift']());
    lastDirection = direction;
    const _0x293702 = {
        'x': snake[0x0]['x'] + direction['x'],
        'y': snake[0x0]['y'] + direction['y']
    };
    snake[_0x29c272(0x1bf)](_0x293702), _0x293702['x'] === food['x'] && _0x293702['y'] === food['y'] ? (score++, score > highScore && (highScore = score, localStorage[_0x29c272(0x195)](_0x29c272(0x1b8), highScore)), food = generateFood()) : snake[_0x29c272(0x19d)]();
}

function _0x2804() {
    const _0x3bd036 = ['36IfkNKr', '25389CcxfbV', 'fill', 'Game\x20Speed\x203', 'highScore', 'keydown', 'strokeStyle', '126640vlcqZB', '367842ldAFhn', '811590gRpECw', 'fillStyle', 'unshift', '78uvdDzT', 'Press\x20any\x20key\x20to\x20restart', 'some', 'left', 'key', 'ArrowLeft', 'fillRect', 'onload', 'length', 'clearRect', 'www.FreezeNova.com', 'Game\x20Speed\x208', 'addEventListener', 'random', 'lineTo', 'getItem', 'Game\x20Speed\x209', 'beginPath', 'height', 'textAlign', '11ZUtwKt', 'Game\x20Over!\x20Score:\x20', 'setItem', 'Game\x20Speed\x201', 'center', 'lineWidth', 'floor', 'getContext', '18px\x20Arial', 'Score:\x20', 'pop', 'removeEventListener', 'fillText', 'ArrowRight', '774856mIYhCt', 'getElementById', '582lXQtFu', 'rgba(0,\x20255,\x200,\x201)', '7944ZTqprz', 'width', 'ArrowDown', 'Game\x20Speed\x204', '1705310cUCNuA', 'white', '\x20game\x20speed\x20', 'moveTo', 'gameCanvas', 'Game\x20Speed\x207', '20px\x20Arial', 'Start\x20with\x201,2,3,4,5,6,7,8,9\x20keys\x20to\x20change\x20game\x20speed', 'Game\x20Speed\x202', 'font', '24px\x20Arial'];
    _0x2804 = function() {
        return _0x3bd036;
    };
    return _0x2804();
}

function checkCollision() {
    const _0x502f92 = _0x25e0f0,
        _0x37b920 = snake[0x0];
    (_0x37b920['x'] < 0x0 || _0x37b920['x'] >= gridSizeX || _0x37b920['y'] < 0x0 || _0x37b920['y'] >= gridSizeY) && (gameOver = !![]);
    for (let _0x3c0812 = 0x1; _0x3c0812 < snake[_0x502f92(0x187)]; _0x3c0812++) {
        if (snake[_0x3c0812]['x'] === _0x37b920['x'] && snake[_0x3c0812]['y'] === _0x37b920['y']) {
            gameOver = !![];
            break;
        }
    }
    gameOver && (stopGameLoop(), drawGameOverScreen(), setTimeout(delayCheckStart, 0x190));
}

function delayCheckStart() {
    const _0x58fb06 = _0x25e0f0;
    document['addEventListener'](_0x58fb06(0x1b9), startGame, {
        'once': !![]
    });
}

function gameLoop() {
    !gameOver && (updateSnakePosition(), !gameOver && drawGame(), checkCollision(), lastDirection = direction);
}

function startGameLoop() {
    gameInterval = setInterval(gameLoop, originalGameSpeed);
}

function stopGameLoop() {
    clearInterval(gameInterval);
}

function handleDirectionInput(_0x3bec3b) {
    const _0x56bcc9 = _0x25e0f0;
    let _0x54e57f;
    switch (_0x3bec3b[_0x56bcc9(0x1c4)]) {
        case 'ArrowUp':
            {
                if (directionQueue[_0x56bcc9(0x187)] > 0x0) directionQueue[directionQueue[_0x56bcc9(0x187)] - 0x1]['y'] === 0x0 && (_0x54e57f = {
                    'x': 0x0,
                    'y': -0x1
                });
                else lastDirection['y'] === 0x0 && (_0x54e57f = {
                    'x': 0x0,
                    'y': -0x1
                });
            }
            break;
        case _0x56bcc9(0x1a7):
            {
                if (directionQueue[_0x56bcc9(0x187)] > 0x0) directionQueue[directionQueue[_0x56bcc9(0x187)] - 0x1]['y'] === 0x0 && (_0x54e57f = {
                    'x': 0x0,
                    'y': 0x1
                });
                else lastDirection['y'] === 0x0 && (_0x54e57f = {
                    'x': 0x0,
                    'y': 0x1
                });
            }
            break;
        case _0x56bcc9(0x1c5):
            {
                if (directionQueue[_0x56bcc9(0x187)] > 0x0) directionQueue[directionQueue[_0x56bcc9(0x187)] - 0x1]['x'] === 0x0 && (_0x54e57f = {
                    'x': -0x1,
                    'y': 0x0
                });
                else lastDirection['x'] === 0x0 && (_0x54e57f = {
                    'x': -0x1,
                    'y': 0x0
                });
            }
            break;
        case _0x56bcc9(0x1a0):
            {
                if (directionQueue[_0x56bcc9(0x187)] > 0x0) directionQueue[directionQueue[_0x56bcc9(0x187)] - 0x1]['x'] === 0x0 && (_0x54e57f = {
                    'x': 0x1,
                    'y': 0x0
                });
                else lastDirection['x'] === 0x0 && (_0x54e57f = {
                    'x': 0x1,
                    'y': 0x0
                });
            }
            break;
    }
    _0x54e57f && (directionQueue['length'] >= 0x3 && directionQueue[_0x56bcc9(0x19d)](), directionQueue['push'](_0x54e57f));
}

function startGame(_0x19bcd4) {
    const _0x1c8ab1 = _0x25e0f0,
        _0x46950a = _0x19bcd4[_0x1c8ab1(0x1c4)];
    if (_0x46950a === '1') originalGameSpeed = 0x96, showTmpMessage(_0x1c8ab1(0x196), 0xa);
    else {
        if (_0x46950a === '2') originalGameSpeed = 0x8c, showTmpMessage(_0x1c8ab1(0x1b1), 0xb);
        else {
            if (_0x46950a === '3') originalGameSpeed = 0x82, showTmpMessage(_0x1c8ab1(0x1b7), 0xc);
            else {
                if (_0x46950a === '4') originalGameSpeed = 0x78, showTmpMessage(_0x1c8ab1(0x1a8), 0xd);
                else {
                    if (_0x46950a === '5') originalGameSpeed = 0x6e, showTmpMessage('Game\x20Speed\x205', 0xe);
                    else {
                        if (_0x46950a === '6') originalGameSpeed = 0x64, showTmpMessage('Game\x20Speed\x206', 0xf);
                        else {
                            if (_0x46950a === '7') originalGameSpeed = 0x5f, showTmpMessage(_0x1c8ab1(0x1ae), 0x10);
                            else {
                                if (_0x46950a === '8') originalGameSpeed = 0x5a, showTmpMessage(_0x1c8ab1(0x18a), 0x12);
                                else _0x46950a === '9' && (originalGameSpeed = 0x55, showTmpMessage(_0x1c8ab1(0x18f), 0x14));
                            }
                        }
                    }
                }
            }
        }
    }
    document[_0x1c8ab1(0x19e)](_0x1c8ab1(0x1b9), startGame), initGame(), startGameLoop(), document[_0x1c8ab1(0x18b)]('keydown', handleDirectionInput), console['log']('Game\x20started\x20with\x20key:\x20' + _0x46950a + _0x1c8ab1(0x1ab) + originalGameSpeed);
}

function initialize() {
    const _0x158939 = _0x25e0f0;
    drawStartScreen(), document[_0x158939(0x18b)](_0x158939(0x1b9), startGame, {
        'once': !![]
    });
}

function drawStartScreen() {
    const _0x3d5094 = _0x25e0f0;
    ctx['clearRect'](0x0, 0x0, canvas[_0x3d5094(0x1a6)], canvas[_0x3d5094(0x191)]), ctx[_0x3d5094(0x1be)] = _0x3d5094(0x1aa), ctx[_0x3d5094(0x1b2)] = _0x3d5094(0x19b), ctx[_0x3d5094(0x192)] = _0x3d5094(0x197), ctx[_0x3d5094(0x19f)](_0x3d5094(0x189), canvas[_0x3d5094(0x1a6)] / 0x2, 0x1e), ctx[_0x3d5094(0x1b2)] = _0x3d5094(0x1b3), ctx[_0x3d5094(0x19f)]('Press\x20any\x20key\x20to\x20start', canvas[_0x3d5094(0x1a6)] / 0x2, canvas[_0x3d5094(0x191)] / 0x2), ctx[_0x3d5094(0x1b2)] = _0x3d5094(0x1af), ctx['fillText'](_0x3d5094(0x1b0), canvas[_0x3d5094(0x1a6)] / 0x2, canvas[_0x3d5094(0x191)] - 0x1e);
}
window[_0x25e0f0(0x186)] = () => {
    initialize();
};