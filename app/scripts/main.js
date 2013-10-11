/* global typoSpeed, dialogPolyfill */
'use strict';

(function (typoSpeed, dialog) {

    var introModal = document.getElementById('intro-modal'),
        gameOverModal = document.getElementById('game-over-modal'),
        aboutModal = document.getElementById('about-modal'),
        gameOverCallback = function () {
            typoSpeed.stop();
            gameOverModal.showModal();
        };

    dialog.registerDialog(introModal);
    dialog.registerDialog(gameOverModal);
    dialog.registerDialog(aboutModal);

    document.getElementById('intro-modal-close').addEventListener('click', function() {
        introModal.close();
        typoSpeed.init(gameOverCallback);
    });

    document.getElementById('game-over-modal-close').addEventListener('click', function() {
        gameOverModal.close();
        typoSpeed.reset();
        typoSpeed.init(gameOverCallback);
    });

    document.getElementById('about-modal-open').addEventListener('click', function(event) {
        event.preventDefault();
        aboutModal.showModal();
    });

    document.getElementById('about-modal-close').addEventListener('click', function() {
        aboutModal.close();
    });

    introModal.showModal();

})(typoSpeed, dialogPolyfill);
