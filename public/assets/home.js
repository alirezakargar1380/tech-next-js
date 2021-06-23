$(document).ready(() => {
    function checkHover() {

        // ------------   -------------------
        $(".moreBtn").hover(function(){
            $(".owlElement").addClass("hover activity-card");
            $(".textBoxC").addClass("activity-textBox");
        }, function(){
            $(".owlElement").removeClass("hover activity-card");
            $(".textBoxC").removeClass("activity-textBox");

        });
        // ------------  Favorite Artikle  -------------------
        $("#artikleController1").hover(function(){
            setTimeout(function () {
                $("#artickleDisController1").css("display","block");
            },100)
        }, function(){
            $("#artickleDisController1").css("display","none");
        });
        $("#artikleController2").hover(function(){
            setTimeout(function () {
                $("#artickleDisController2").css("display","block");
            },100)
        }, function(){
            $("#artickleDisController2").css("display","none");
        });
        $("#artikleController3").hover(function(){
            setTimeout(function () {
                $("#artickleDisController3").css("display","block");
            },100)
        }, function(){
            $("#artickleDisController3").css("display","none");
        });
        $("#artikleController4").hover(function(){
            setTimeout(function () {
                $("#artickleDisController4").css("display","block");
            },100)
        }, function(){
            $("#artickleDisController4").css("display","none");
        });
        $("#artikleController5").hover(function(){
            setTimeout(function () {
                $("#artickleDisController5").css("display","block");
            },100)
        }, function(){
            $("#artickleDisController5").css("display","none");
        });
        $("#artikleController6").hover(function(){
            setTimeout(function () {
                $("#artickleDisController6").css("display","block");
            },100)
        }, function(){
            $("#artickleDisController6").css("display","none");
        });
    }

    $('body').mousemove(() => {
        checkHover();
    }).mouseleave(function() {
        checkHover();
    });
    //////////////////////////////////////////////// HELLL
    setInterval(() => {
        $("#s1").css("height", window.innerHeight);
    }, 100);
    /////////////////////////////////////////////// START OWL SLIDER
    function owlC() {
        $("#carsoual").owlCarousel({
            rtl:true,
            // stagePadding: 20,
            loop:true,
            // margin:30,
            items: 2,
            nav:false,
            responsive:{
                1620:{
                    items: 3.20
                },
                1366:{
                    items: 2.50
                },
                768:{
                    items: 2.25
                },
                480:{
                    items: 1.20,
                    // stagePadding: 50,
                },
                240:{
                    items: 1.20,
                    // stagePadding: 50,
                },
            }
        });
        $("#AppsOwl").owlCarousel({
            rtl:true,
            // stagePadding: 20,
            loop:true,
            // margin:30,
            items: 2,
            nav:false,
            responsive:{
                1620:{
                    items: 3.20
                },
                1366:{
                    items: 2.20
                },
                768:{
                    items: 2.25
                },
                480:{
                    items: 1.20,
                    // stagePadding: 50,
                },
                240:{
                    items: 1.20,
                    // stagePadding: 50,
                },
            }
        })
        $('#podcastOwl').owlCarousel({
            rtl:true,
            // stagePadding: pad,
            loop:true,
            // margin:30,
            // items: 5,
            nav:false,
            responsive:{
                1620:{
                    items: 5.20
                },
                1366:{
                    items: 4.20
                },
                1000:{
                    items: 3.20
                },
                768:{
                    items: 2.25
                },
                480:{
                    items: 1.30,
                    // stagePadding: 50,
                },
                240:{
                    items: 1.20,
                    // stagePadding: 50,
                },
            }
        })
        $('#artikleOwl').owlCarousel({
            rtl:true,
            // stagePadding: pad,
            loop:true,
            // margin:30,
            items: 3,
            nav:false,
            responsive:{
                1620:{
                    items: 3.20
                },
                1366:{
                    items: 2.20
                },
                768:{
                    items: 2.25
                },
                480:{
                    items: 1.20,
                    // stagePadding: 50,
                },
                240:{
                    items: 1.20,
                    // stagePadding: 50,
                },
            }
        })
    }
    setInterval(() => {
        owlC();
    },1000)
    /////////////////////////////////////////////// END OWL SLIDER

    $("#columnsBox").mousemove(()=>{
        $(".f-element").hover(()=>{
            $(".f-element").removeClass("f-emlement-fix");
            $(".f-element").addClass("hideAnimation");
            $(".f-element").addClass("showAnimation");
        },function () {
            $(".f-element").removeClass("f-emlement-fix");
            $(".f-element").removeClass("showAnimation");
            $(".f-element").addClass("hideAnimation");
        })
    }).mouseleave(()=>{
        $(".f-element").removeClass("hideAnimation");
        $(".f-element").addClass("f-emlement-fix");
    })

    $(function() {
        var originalBGplaypen = $("#playpen").css("background"),
            x, y, xy, bgWebKit, bgMoz,
            lightColor = "rgba(255,255,255,0.75)",
            gradientSize = 200;

        // Basic Demo
        let counter = 0;
        $('#playpen').mousemove(function(e) {
            x  = e.pageX - this.offsetLeft;
            y  = e.pageY - this.offsetTop;
            xy = x + " " + y;

            bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(rgba(255,255,255,0.0)), to(rgba(000,000,000,1)))";
            bgMoz = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBGplaypen + " " + gradientSize + "px)";

            $(this).css({ background: bgWebKit })

        }).mouseleave(function() {
            // console.log(fsdfasd)
            // $(this).css({ background: fsdfasd });
        });

    });
})


function animation() {
    var el4 = document.getElementById("s4").getBoundingClientRect().top;
    var el5 = document.getElementById("s5").getBoundingClientRect().top;
    var el6 = document.getElementById("s6").getBoundingClientRect().top;
    // var el7 = document.getElementById("s7").getBoundingClientRect().top;

    var height = $(window).height();

    var el4p = parseInt(el4) + parseInt(el4 / 2);
    var el5p = parseInt(el5) + parseInt(el5 / 2);
    var el6p = parseInt(el6) + parseInt(el6 / 2);
    // var el7p = parseInt(el7) + parseInt(el7 / 2);

    if ( el4p < height ) {
        $("#slider").addClass("animation_fade");
        $("#dis-activity-box").addClass("animation_fade")
    }  else { $("#slider").removeClass("animation_fade"); $("#dis-activity-box").removeClass("animation_fade") }
    if ( el5p < height ) {
        $("#s5").addClass("animation_fade")
    } else { $("#s5").removeClass("animation_fade") }
    if ( el6p < height ) {
        $("#s6").addClass("animation_fade")
    } else { $("#s6").removeClass("animation_fade") }
    // if ( el7p < height ) {
    //     $("#s7").addClass("animation_fade")
    // } else { $("#s7").removeClass("animation_fade") }
}

$(window).scroll( function() { animation(); })
