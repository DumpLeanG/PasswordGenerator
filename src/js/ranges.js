document.addEventListener("DOMContentLoaded", function() {
    var lengthRange = document.getElementById('pass-length-range');
    var lengthLine = document.getElementById('pass-length-line');
    var lengthNum = document.getElementById('pass-length-num');

    var amountRange = document.getElementById('pass-amount-range');
    var amountLine = document.getElementById('pass-amount-line');
    var amountNum = document.getElementById('pass-amount-num');

    lengthRange.addEventListener('input', function (e) {
        lengthNum.value = e.target.value;
        lengthLine.style.width = 2*e.target.value + '%';
    });

    lengthNum.addEventListener('input', function (e) {
        lengthRange.value = e.target.value;
        lengthLine.style.width = 2*e.target.value + '%';
    });

    amountRange.addEventListener('input', function (e) {
        amountNum.value = e.target.value;
        amountLine.style.width = 8.33*e.target.value + '%';
    });

    amountNum.addEventListener('input', function (e) {
        amountRange.value = e.target.value;
        amountLine.style.width = 8.33*e.target.value + '%';
    });
});