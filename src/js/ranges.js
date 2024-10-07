document.addEventListener("DOMContentLoaded", function() {
    var lengthRange = document.getElementById('pass-length-range');
    var lengthLine = document.getElementById('pass-length-line');
    var lengthNum = document.getElementById('pass-length-num');

    var amountRange = document.getElementById('pass-amount-range');
    var amountLine = document.getElementById('pass-amount-line');
    var amountNum = document.getElementById('pass-amount-num');

    lengthRange.addEventListener('input', function (e) {
        lengthNum.value = e.target.value;
        lengthLine.style.width = 5*e.target.value + 'px';
    });

    lengthNum.addEventListener('input', function (e) {
        lengthRange.value = e.target.value;
        lengthLine.style.width = 5*e.target.value + 'px';
    });

    amountRange.addEventListener('input', function (e) {
        amountNum.value = e.target.value;
        amountLine.style.width = 20.83*e.target.value + 'px';
    });

    amountNum.addEventListener('input', function (e) {
        amountRange.value = e.target.value;
        amountLine.style.width = 20.83*e.target.value + 'px';
    });
});