$(document).ready(function () {

    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
$(".fa-align-justify").click(function() {

$(".menuitems ul").toggleClass("menuresponsiv");

$(".menuitems ul li").toggleClass("menuResponsivLi");
$(".menuInput").toggleClass("menuInputresponsive")

})


});