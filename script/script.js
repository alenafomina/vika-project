$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger, .nav').toggleClass('active');
    });
    document.querySelector('.header').style.minHeight = window.outerHeight;
})

