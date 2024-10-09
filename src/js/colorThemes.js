document.addEventListener("DOMContentLoaded", function() {
    let body = document.querySelector('body');
    let themesSwapper = document.getElementById('theme_swapper');

    themesSwapper.addEventListener('click', function () {
        if(body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
        }
    });
});