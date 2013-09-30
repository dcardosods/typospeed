(function () {

    var words = {
        algumas: '',
        palavras: '',
        para: '',
        teste: ''
    };

    var canvas = document.getElementById('canvas');

    for (var word in words) {
        var wordNode = document.createElement('div');
        var wordNodeContent = document.createTextNode(word);
        wordNode.appendChild(wordNodeContent);
        wordNode.classList.add('word');
        wordNode.style.top = ((Math.random() * 100) + 1) + 'px';

        canvas.appendChild(wordNode);
    }

})();
