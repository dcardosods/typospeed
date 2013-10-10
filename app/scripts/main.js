/* global typoSpeed, dialogPolyfill */
'use strict';

(function (typoSpeed, dialog) {

    var introModal = document.getElementById('intro-modal');
    dialog.registerDialog(introModal);
    introModal.showModal();

    document.getElementById('intro-modal-close').addEventListener('click', function() {
        introModal.close();
        typoSpeed.init();
    });

})(typoSpeed, dialogPolyfill);
