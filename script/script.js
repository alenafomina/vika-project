$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger, .nav').toggleClass('active');
    });
    console.log(document.documentElement.clientHeight)
    document.querySelector('.header').style.minHeight = `${document.documentElement.clientHeight}px`;
})

