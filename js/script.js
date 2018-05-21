$(document).ready(function () {


    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    var count=0;
console.log($(window).width()<800);
$(".fa-align-justify").click(function() {
$(".menuitems ul").toggleClass("menuresponsiv");

//$(".menuitems ul").slideToggle("slow");
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
$('.dropdown a').hover(function(){
    $('.dropdown .dropdown-content').toggleClass("dropdown-content-hover");

})
// if($("body").width()<1025) {
//     console.log("salam")
//   $(".menuSlogan").parent().removeClass("col-lg-5") ;
//   $(".menuContent").parent().removeClass("col-lg-7") ;
// } else {
//     $(".menuSlogan").parent().addClass("col-lg-5")
//     $(".menuContent").parent().addClass("col-lg-7")
    
// }


});