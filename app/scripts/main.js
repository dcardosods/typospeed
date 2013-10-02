/* global loadJSONP */
'use strict';

(function (loadJSONP) {

    var words = {},
        canvas = document.getElementById('canvas');

    var setWords = function (data) {
        for (var i = data.list.length - 1; i >= 0; i--) {
            words[data.list[i]] = '';
        }

        writeWords(words);
    };

    var writeWords = function (words) {
        var wordNode,
            wordNodeContent;

        for (var word in words) {
            wordNode = document.createElement('div');
            wordNodeContent = document.createTextNode(word);
            wordNode.appendChild(wordNodeContent);
            wordNode.classList.add('word');
            wordNode.style.top = ((Math.random() * 100) + 1) + 'px';

            canvas.appendChild(wordNode);
        }
    };

    loadJSONP('http://dicionario-aberto.net/search-json?prefix=ab', setWords);

})(loadJSONP);
