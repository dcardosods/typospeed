/* global typoSpeed, dialogPolyfill */
'use strict';

(function (typoSpeed, dialog) {

    var introModal = document.getElementById('intro-modal'),
        gameOverModal = document.getElementById('game-over-modal');

    dialog.registerDialog(introModal);
    dialog.registerDialog(gameOverModal);

    document.getElementById('intro-modal-close').addEventListener('click', function() {
        introModal.close();
        typoSpeed.init(function () {
            typoSpeed.stop();
            gameOverModal.showModal();
        });
    });

    document.getElementById('game-over-modal-close').addEventListener('click', function() {
        gameOverModal.close();
    });

    introModal.showModal();

})(typoSpeed, dialogPolyfill);
