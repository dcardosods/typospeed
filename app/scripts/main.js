/* global loadJSONP */
'use strict';

(function (loadJSONP) {

    var words = {},
        canvas = document.getElementById('canvas'),
        canvasContext = canvas.getContext('2d'),
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
                    words[usableData[0].content] = '';
                    finalWord = usableData[0].content;
                }
                else {
                    words[usableData[0]] = '';
                    finalWord = usableData[0];
                }
            }
            else if (usableData.content) {
                words[usableData.content] = '';
                finalWord = usableData.content;
            }
            else {
                words[usableData] = '';
                finalWord = usableData;
            }

            writeWord(finalWord.toLowerCase().replace(/,.*$/, ''));
        }
        else {
            loadJSONP(wordsQuery,setWords);
            console.log('Words not found!');
        }
    };

    var writeWord = function (word) {
        var usedYAxis = [],
            yAxis;

        do {
            yAxis = Math.floor(((Math.random() * 100) + 1));
        } while (usedYAxis.indexOf(yAxis) > -1);
        usedYAxis.push(yAxis);

        canvasContext.fillText(word, 10, yAxis);
    };

    loadJSONP(wordsQuery,setWords);
    window.setInterval(function () {
        loadJSONP(wordsQuery,setWords);
    }, 10000);

})(loadJSONP);
