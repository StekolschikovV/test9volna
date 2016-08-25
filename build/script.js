// прелоадер
$( document ).ready(function() {
    $( ".preloader" ).addClass("opacity-null");
    setTimeout($( ".preloader" ).hide(), 1000);
});
// прелоадер //

// слайдер
function width() {
    $( ".slider img" ).width($(window).width());
    $('.slider').animate({scrollLeft:  0}, 100);
    $('.arr-left').animate({"left":  "5%"}, 100);
    $('.arr-right').animate({"left":  "auto"}, 0);
    $('.arr-right').animate({"right":  "5%"}, 100);
}
$( document ).ready(function() { width(); });
$( window ).resize(function() { width(); });

function slide(e) {
    var DW = $(window).width();
    if (e == "R"){
        if($('.slider').scrollLeft() !== DW*2) {
            $('.slider').animate({scrollLeft: '+=' + DW}, 100);
            $('.arr-left, .arr-right').animate({"left": '+=' + DW}, 100);
        }
    } else {
        if($('.slider').scrollLeft() !== 0){
            $('.slider').animate( { scrollLeft: '-=' + DW }, 100);
            $('.arr-left, .arr-right').animate( { "left": '-=' + DW }, 100);
        }
    }
}

$( ".arr-left" ).click(function () {
    slide("L");
});
$( ".arr-right" ).click(function () {
    slide("R");
});
// слайдер //

// цены
$( ".price .el" ).hover(
    function() {
        $(this).find(".tite").toggleClass( "select" )
        $(this).find("button").toggleClass( "select" )
    }, function() {
        $(this).find(".tite").toggleClass( "select" )
        $(this).find("button").toggleClass( "select" )
    }
);
// цены //

// карта
function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        draggable: false,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: true,
        scaleControl: true

    };
    var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
// карта //

// скролл
$( ".menu li").click(function () {
    to = $( this ).data( "to");
    console.log(to);
    $('body').animate({ scrollTop: $( to ).offset().top - 77}, 500);
    $( ".menu *" ).removeClass( "select" );
    $( this ).addClass( "select" );
});
$( ".mob-menu .order, #top h4").click(function () {
    $('body').animate({ scrollTop: $( "#footer" ).offset().top - 77}, 500);
});
// скролл //

// coll
$( "nav .coll-back, .mob-menu .coll-back, .coll-back-page .close").click(function () {
    $( ".coll-back-page" ).toggleClass( "display-none" )
});
// coll //

// mob menu
$( ".mob-menu .menu, .menu-page-close").click(function () {
    $( ".menu-page" ).toggleClass( "display-none" )
});
// mob menu //

// scroll to menu
$( document ).ready(function() {
    $(window).scroll(function (event) {
        var offsetHome = $("#top").offset();
        var home = parseInt(offsetHome.top);

        var offsetWhy = $("#why-we").offset();
        var why = offsetWhy.top;
        var offsetPor = $("#portfolio").offset();
        var portfolio = offsetPor.top;
        var offsetPrice = $("#price").offset();
        var price = offsetPrice.top;
        var offsetFooter = $("#footer").offset();
        var footer = offsetFooter.top;
        var scroll = parseInt($(window).scrollTop());
        if(scroll == 0){
            $(".menu *").removeClass("select");
            $("#mtop").addClass( "select" );
        }
        else if (scroll < why) {
            $(".menu *").removeClass("select");
            $("#mwhy-we").addClass( "select" );
        }
        else if (scroll > why && scroll < portfolio) {
            $(".menu *").removeClass("select");
            $( "#mportfolio" ).addClass( "select" );
        }
        else if (portfolio < scroll && scroll < price) {
            $(".menu *").removeClass("select");
            $( "#mprice" ).addClass( "select" );
        }
        else if(scroll > price){
            $(".menu *").removeClass("select");
            $( "#mfooter" ).addClass( "select" );
        }
    });
});
// scroll to menu //
new WOW().init();
