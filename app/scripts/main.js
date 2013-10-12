/* global typoSpeed, dialogPolyfill */
'use strict';

(function (typoSpeed, dialog) {

    var introModal = document.getElementById('intro-modal'),
        gameOverModal = document.getElementById('game-over-modal'),
        aboutModal = document.getElementById('about-modal'),
        gameOverCallback = function () {
            typoSpeed.stop();
            gameOverModal.showModal();
            displayResults(typoSpeed.getResult());
        };

    var displayResults = function (result) {
        var resultText = 'Das ' + (result.hits + result.misses) + ' palavras, ' +
            'você conseguiu acertar ' + result.hits + ', errando ' +
            result.errors + ' vezes durante a partida.';

        document.getElementById('game-over-modal-result').innerHTML = resultText;
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

    [].forEach.call(document.getElementsByClassName('about-modal-open'), function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            aboutModal.showModal();
        });
    });

    document.getElementById('about-modal-close').addEventListener('click', function() {
        aboutModal.close();
    });

    introModal.showModal();

})(typoSpeed, dialogPolyfill);
