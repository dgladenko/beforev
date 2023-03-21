/*---------------------------- start Hamburger_menu_mobile ------------------------*/

$(document).ready(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('open');
        $(".header_right_open").slideToggle("slow");
    });

});
/*---------------------------- finish show more cards  ------------------------*/
$(document).scroll(function() {
    $(".show_more_cards").click(function() {
        $(".cards_row").removeClass("active");
        $('.show_more_cards').hide();
    })
});


/*---------------------------- start Slick_slider ------------------------*/
$('.first_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 6000,
    arrows: false,
});

/*----------------------------  header_fixed ------------------------*/


$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 95) {
        $('.header_fixed').addClass('active');
    } else {
        $('.header_fixed').removeClass('active');
    }
});


/*----------------------------  sidebar_fixed ------------------------*/

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 355) {
        $('.sidebarBe_fixed').addClass('active');
    } else {
        $('.sidebarBe_fixed').removeClass('active');
    }
});

(function($) {

    var allPanels = $('.accordion > dd');
    var allPanelsTitle = $('.accordion > dt');

    $('.accordion > dt').click(function() {
        allPanels.removeClass('hide');
        $(this).next().addClass('hide');
        return false;
    });
    $('.accordion > dt').click(function() {
        allPanelsTitle.removeClass('noactive');
        $(this).addClass('noactive');
        return false;
    });
})(jQuery);
$(document).ready(function() {
    $('.accordion > dt.noactive').click(function() {
        $(this).removeClass('noactive');
        $(".accordion > dd.hide").remove("noactive");
    });
});
/*----------------------------  tabs_js kabinet ------------------------*/

(function($) {
    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);
$(document).ready(function() {
    $(".sidebar_title").click(function() {
        $(".sidebar_form").toggleClass("showform");
    })
});

/*----------------------------  photo magnif ------------------------*/

$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        },

    });
});


/*---------------------------- card Slick_slider ------------------------*/

$('.popup-gallery').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    prevArrow: $('.leftsec'),
    nextArrow: $('.rightsec'),
    autoplaySpeed: 7000,
    arrows: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});




/*---------------------------- finish Scroll_To ------------------------*/

// Add smooth scrolling to all links
$(".cardfull__right a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1800, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});


/*----------------------------  card text show  ------------------------*/
$(document).scroll(function() {
    $(".cardtextdet__openmore").click(function() {
        $(".cardtextdet__inside").addClass("active");
        $(this).hide();
    })
});