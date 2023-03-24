$(document).ready(function () {
    if (window.innerWidth < 992) {
        $('.side-menu').addClass('offcanvas offcanvas-end');
    } else {
        $('.btn-offcavas').unbind('click')
    }
});
$(window).resize(function () {
    if (window.innerWidth < 992) {
        $('.side-menu').addClass('offcanvas offcanvas-end');
        $('.btn-offcavas').bind('click')
    } else {
        $('.side-menu').removeClass('offcanvas offcanvas-end');
        $('.btn-offcavas').unbind('click')
    }
});

function tabcontrol () {
    $('.tab-khac').toggleClass("active")
    $('.menu-khac .nav-link').toggleClass("active")
    $('.tab-chuyen-muc').toggleClass("active")
    $('.menu-chuyenmuc .nav-link').toggleClass("active")
}

$('.menu-chuyenmuc').click(tabcontrol)

$('.menu-khac').click(tabcontrol)