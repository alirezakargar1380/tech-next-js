function setHeight() {
    if (
        $("#playpen").height() !== $("#element").height() ||
        $("#playpen").height() !== $("#s1").height()
    ) {
        $("#playpen, #s1, #element").css("height", $("#playpen").height())
    }
}

$(document).ready(() => {
    // setInterval(() => {
    //     var hhhrr = $("#main-content").css("height").split("px");// - $(window).height();
    //     var windowH = $(window).height();
    //     var image_height = $("#main-image").height();
    //     // var image_height = $("#main").height();
    //     console.log(image_height);
    //     if (windowH > 768) {
    //         // var main_height = parseInt(windowH) - parseInt(hhhrr);
    //         var main_height = parseInt(windowH) / 2;
    //         $("#main").css("height", main_height);
    //     }
    // }, 100)

    $("#rg").mousemove((event) => {

        windowWidth = $(window).width();
        windowHeight = $(window).height();
        let x = event.pageX;
        let y = event.pageY;
        mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
        mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
        $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, transparent, black, black)');
    });

    setTimeout(() => {
        $("#main-content").css("paddingTop", $("#header-place").css("height"));
    }, 100)

    $("#menu")
        .addClass("hide-menu")
        .hide();

    function handler1() {
        $("#menuSec").css("display", "block");
        $("#menu").show();
        $("#header").removeClass("header-bg");
        setTimeout(() => {
            $("#menu-icon").toggleClass("change")
            $("#s2").hide();
            $("#menu")
                .show()
                .removeClass("hide-menu")
                .addClass("show-menu")
        }, 500);
        $(this).one("click", handler2);
    }

    function handler2() {
        $("#menu")
            .removeClass("show-menu")
            .addClass("hide-menu")
        setTimeout(() => {
            $("#menu-icon").toggleClass("change");
            $("#header").addClass("header-bg");
            $("#s2").show();
            $("#menu").hide();
            $("#menuSec").css("display", "none")
            $(this).one("click", handler1);
        }, 500)
    }

    $("#menu-btn").one("click", handler1);

    $("#menu-open").click(() => {
        $("#menuSec").css("display", "block");
        $("#menu").show()
        setTimeout(() => {
            $("#menu-icon").toggleClass("change")
            $("#s2").hide();
            $("#menu")
                .show()
                .removeClass("hide-menu")
                .addClass("show-menu")
        }, 500)
    })

    $("#close-menu").click(() => {
        $("#menu")
            .removeClass("show-menu")
            .addClass("hide-menu")
        setTimeout(() => {
            $("#menu-icon").toggleClass("change");
            $("#s2").show();
            $("#menu").hide();
            $("#menuSec").css("display", "none")
        }, 500)
    })

    // $('body').mousemove(() => {
    //     checkHover();
    // }).mouseleave(function() {
    //     checkHover();
    // });


    // function animation() {
    //     var el1 = document.getElementById("s1").getBoundingClientRect().top;
    //     var el4 = document.getElementById("s4").getBoundingClientRect().top;
    //     var el5 = document.getElementById("s5").getBoundingClientRect().top;
    //     var el6 = document.getElementById("s6").getBoundingClientRect().top;
    //     var el7 = document.getElementById("s7").getBoundingClientRect().top;
    //
    //     var height = $(window).height();
    //
    //     var el4p = parseInt(el4) + parseInt(el4 / 2);
    //     var el5p = parseInt(el5) + parseInt(el5 / 2);
    //     var el6p = parseInt(el6) + parseInt(el6 / 2);
    //     var el7p = parseInt(el7) + parseInt(el7 / 2);
    //
    //     if ( el4p < height ) {
    //         $("#slider").addClass("animation_fade");
    //         $("#dis-activity-box").addClass("animation_fade")
    //     }  else { $("#slider").removeClass("animation_fade"); $("#dis-activity-box").removeClass("animation_fade") }
    //     if ( el5p < height ) {
    //         $("#s5").addClass("animation_fade")
    //     } else { $("#s5").removeClass("animation_fade") }
    //     if ( el6p < height ) {
    //         $("#s6").addClass("animation_fade")
    //     } else { $("#s6").removeClass("animation_fade") }
    //     if ( el7p < height ) {
    //         $("#s7").addClass("animation_fade")
    //     } else { $("#s7").removeClass("animation_fade") }
    //     // console.log("x "+window.scrollX)
    //     // console.log("y "+window.scrollY)
    // }
    //
    // $(window).scroll( function() { animation(); })

    // function checkHover() {
    //     // ------------   -------------------
    //     $(".moreBtn").hover(function(){
    //         $(".owlElement").addClass("hover activity-card");
    //         $(".textBoxC").addClass("activity-textBox");
    //     }, function(){
    //         $(".owlElement").removeClass("hover activity-card");
    //         $(".textBoxC").removeClass("activity-textBox");
    //
    //     });
    //     // ------------  Favorite Artikle  -------------------
    //     $("#artikleController1").hover(function(){
    //         setTimeout(function () {
    //             $("#artickleDisController1").css("display","block");
    //         },100)
    //     }, function(){
    //         $("#artickleDisController1").css("display","none");
    //     });
    //     $("#artikleController2").hover(function(){
    //         setTimeout(function () {
    //             $("#artickleDisController2").css("display","block");
    //         },100)
    //     }, function(){
    //         $("#artickleDisController2").css("display","none");
    //     });
    //     $("#artikleController3").hover(function(){
    //         setTimeout(function () {
    //             $("#artickleDisController3").css("display","block");
    //         },100)
    //     }, function(){
    //         $("#artickleDisController3").css("display","none");
    //     });
    //     $("#artikleController4").hover(function(){
    //         setTimeout(function () {
    //             $("#artickleDisController4").css("display","block");
    //         },100)
    //     }, function(){
    //         $("#artickleDisController4").css("display","none");
    //     });
    //     $("#artikleController5").hover(function(){
    //         setTimeout(function () {
    //             $("#artickleDisController5").css("display","block");
    //         },100)
    //     }, function(){
    //         $("#artickleDisController5").css("display","none");
    //     });
    //     $("#artikleController6").hover(function(){
    //         setTimeout(function () {
    //             $("#artickleDisController6").css("display","block");
    //         },100)
    //     }, function(){
    //         $("#artickleDisController6").css("display","none");
    //     });
    // }

    // setInterval(() => {
    // },100)

});
























