$(document).ready(function () {

    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    var count=0;
$(".fa-align-justify").click(function() {

$(".menuitems ul").toggleClass("menuresponsiv");

$(".menuitems ul li").toggleClass("menuResponsivLi");
if(count==0) {
    $(".menuInput").attr("id", "menuInputresponsive");
} else {
    $(".menuInput").removeAttr("id", "menuInputresponsive");
}
if(count==1) {
    count=0;
}else {
    count=1;
}
})


});