/* global loadJSONP, checkPrefixer */
'use strict';

(function (loadJSONP, checkPrefixer) {

    var words = {},
        canvas = document.getElementById('canvas'),
        wordsQuery = 'http://query.yahooapis.com/v1/public/yql?' +
            'q=use%0A%22http%3A%2F%2Fyqlblog.net%2Fsamples%2Fdata.html.cssselect.xml%22' +
            '%20as%20data.html.cssselect%3B%0Aselect%20*%20from%20data.html.cssselect' +
            '%20where%20url%3D%22http%3A%2F%2Fwww.dicionario-aberto.net%2Frandom%22' +
            '%20and%0Acss%3D%22%23main%20.text%20.term%20h3%22&format=json';

    var setWords = function (data) {
        if (data && data.query && data.query.results && data.query.results.results) {
            var usableData = data.query.results.results.h3,
                finalWord;

            if (Array.isArray(usableData)) {
                if (usableData[0].content) {
                    finalWord = usableData[0].content;
                }
                else {
                    finalWord = usableData[0];
                }
            }
            else if (usableData.content) {
                finalWord = usableData.content;
            }
            else {
                finalWord = usableData;
            }

            finalWord = finalWord.toLowerCase().replace(/,.*$/, '');
            words[finalWord] = true;
            writeWord(finalWord);
        }
        else {
            loadJSONP(wordsQuery,setWords);
            console.log('Words not found!');
        }
    };

    var writeWord = function (word) {
        var wordNode,
            wordNodeContent;

        wordNode = document.createElement('span');
        wordNodeContent = document.createTextNode(word);
        wordNode.appendChild(wordNodeContent);
        wordNode.classList.add('word');
        wordNode.style.top = Math.floor(((Math.random() * 100) + 1)) + 'px';

        wordNode.addEventListener(checkPrefixer.getAnimationEndEventName(), function () {
            this.parentNode.removeChild(this);
        }, false);

        canvas.appendChild(wordNode);
    };

    var checkWord = function (event) {
        event.preventDefault();

        if (words[this.word.value]) {
            console.log('ok');
        }
        else {
            console.log('not ok');
        }

        this.word.value = '';
    };

    loadJSONP(wordsQuery,setWords);
    window.setInterval(function () {
        loadJSONP(wordsQuery,setWords);
    }, 10000);

    document.forms[0].addEventListener('submit', checkWord, false);

})(loadJSONP, checkPrefixer);
