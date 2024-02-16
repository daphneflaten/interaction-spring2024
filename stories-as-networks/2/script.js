document.addEventListener('DOMContentLoaded', function() {
    var initialText = document.getElementById('text1').innerText;

    document.getElementById('text3').addEventListener('click', function() {
        var tempText = document.getElementById('text1').innerText;
        document.getElementById('text1').innerText = document.getElementById('text3').innerText;
        document.getElementById('text3').innerText = tempText;
    });

    document.getElementById('text2').addEventListener('click', function() {
        var tempText = document.getElementById('text1').innerText;
        document.getElementById('text1').innerText = document.getElementById('text2').innerText;
        document.getElementById('text2').innerText = tempText;
    });
});