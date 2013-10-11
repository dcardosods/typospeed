/* global typoSpeed, dialogPolyfill */
'use strict';

(function (typoSpeed, dialog) {

    var introModal = document.getElementById('intro-modal'),
        gameOverModal = document.getElementById('game-over-modal'),
        gameOverCallback = function () {
            typoSpeed.stop();
            gameOverModal.showModal();
        };

    dialog.registerDialog(introModal);
    dialog.registerDialog(gameOverModal);

    document.getElementById('intro-modal-close').addEventListener('click', function() {
        introModal.close();
        typoSpeed.init(gameOverCallback);
    });

    document.getElementById('game-over-modal-close').addEventListener('click', function() {
        gameOverModal.close();
        typoSpeed.reset();
        typoSpeed.init(gameOverCallback);
    });

    introModal.showModal();

})(typoSpeed, dialogPolyfill);
