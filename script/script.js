$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger, .nav').toggleClass('active');
    });
    document.querySelector('.header').style.height = `${document.documentElement.clientHeight}px`;
})

