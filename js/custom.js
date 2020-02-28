$(document).ready(function () {
    $(".down").click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 750);
        return false;
    });


    // form border color started.
    $("form.search input.search").focusin(function () {
        $(this).prev().find("i").css("border-color", "#4d90fe")
    })
    $("form.search input.search").focusout(function () {
        $(this).prev().find("i").css("border-color", "rgba(0, 0, 0, 0.1)")
    })

    //search form open in mobile
    $(".filter-event .icon i.fa-search").click(function () {
        $(".filter-event form.mob-search").slideToggle("fast");
    })

    //filter open in mobile
    $(".filter-event .icon i.fa-filter").click(function () {
        $(".filter").slideToggle("fast");
    })

    // open and close filter
    $("button.filter-icon").click(function () {
        $(".restaurant-filter").addClass("active");
        $(".restaurant-filter").css("animation", "left .5s")
    })
    $(".user-profile .nav-fill .nav-item").click(function () {
        $(".restaurant-filter").removeClass("active")
        $(".restaurant-filter").css("animation", "right .5s")

    })

    // get height for restaurant detail page
    var height = $("section.user-profile .col-lg-3").height() - $("section.user-profile .nav.nav-tabs.nav-fill").height();
    if ($(window).width() <= 768){
        height = height - 40
    }
    $("section.user-profile .upper .row > .col-lg-3 .align-items-end").css("height", height);
    
    // header back started.
    $(window).scroll(function () {
        if ($(window).scrollTop() > 60) {
            $("header").css("background", "#7f7f7f")
        } else if ($(window).scrollTop() < 60) {
            $("header").css("background", "");
        }
    })
})
