(function (loadJSONP) {

    var words = {};
    var canvas = document.getElementById('canvas');

    var setWords = function (data) {
        var i = 0;
        var length = data.list.length;
        for (; i < length; i++) {
            words[data.list[i]] = '';
        }

        writeWords(words)
    };

    var writeWords = function (words) {
        for (var word in words) {
            var wordNode = document.createElement('div');
            var wordNodeContent = document.createTextNode(word);
            wordNode.appendChild(wordNodeContent);
            wordNode.classList.add('word');
            wordNode.style.top = ((Math.random() * 100) + 1) + 'px';

            canvas.appendChild(wordNode);
        }
    };

    loadJSONP('http://dicionario-aberto.net/search-json?prefix=ab', setWords);

})(loadJSONP);
