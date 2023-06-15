$('.hamburger-nav').click(function () {
    $('.toggle').css('display', 'flex');
    $('.close-nav').css('display', 'flex');
    $('.hamburger-nav').css('display', 'none');

});
$('.close-nav').click(function () {
    $('.toggle').css('display', 'none');
    $('.close-nav').css('display', 'none');
    $('.hamburger-nav').css('display', 'flex');

});