/* global $this */

"use strict";
/* -------------------------------------
 CUSTOM FUNCTION WRITE HERE
 -------------------------------------- */
jQuery(document).ready(function (e) {
    //Pre Loader
    jQuery("#status").fadeOut();
    /*will fade out the whole DIV that covers the website.*/
    jQuery(".preloader").delay(300).fadeOut("slow");
    jQuery("body").css('overflow-y', 'visible');
    jQuery("body").css('position', 'relative');

    setTimeout(function () {
        jQuery('body').addClass('loaded');
    }, 3000);

    /* -------------------------------------
     PROGRESS BAR
     -------------------------------------- */
    try {
        jQuery('#skill-faq').appear(function () {
            jQuery('.skill-holder').each(function () {
                jQuery(this).find('.skill-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2500);
            });
        });
    } catch (err) {
    }
    /* -------------------------------------
     HOME SLIDER PROGRESSBAR
     -------------------------------------- */
    var time = 7;
    var $progressBar, $bar, $elem, isPause, tick, percentTime;
    jQuery("#home-slider").owlCarousel({
        slideSpeed: 500,
        paginationSpeed: 500,
        pagination: false,
        singleItem: true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        afterInit: progressBar,
        afterMove: moved,
        startDragging: pauseOnDragging
    });

    function progressBar(elem) {
        $elem = elem;
        buildProgressBar();
        start();
    }

    function buildProgressBar() {
        $progressBar = jQuery("<div>", {
            id: "progressBar"
        });
        $bar = jQuery("<div>", {
            id: "bar"
        });
        $progressBar.append($bar).prependTo($elem);
    }

    function start() {
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }
    ;

    function interval() {
        if (isPause === false) {
            percentTime += 1 / time;
            $bar.css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $elem.trigger('owl.next')
            }
        }
    }

    function pauseOnDragging() {
        isPause = true;
    }

    function moved() {
        clearTimeout(tick);
        start();
    }

    /* -------------------------------------
     PRODUCT SLIDER
     -------------------------------------- */
    jQuery("#product-slider").owlCarousel({
        autoPlay: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 3],
        itemsMobile: [479, 1],
        pagination: false,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });

    /* -------------------------------------
     SIDEBAR ACCORDION
     -------------------------------------- */
    function toggleChevron(e) {
        $(e.target)
            .prev('.accordion-heading')
            .find("i.indicator")
            .toggleClass('fa-angle-down fa-angle-right');
    }

    jQuery('#sidebar-accordion').on('hidden.bs.collapse', toggleChevron);
    jQuery('#sidebar-accordion').on('shown.bs.collapse', toggleChevron);

    /* -------------------------------------
     SIDEBAR ACCORDION
     -------------------------------------- */
    function toggleChevron(e) {
        jQuery(e.target)
            .prev('.accordion-heading')
            .find("i.indicator")
            .toggleClass('fa-angle-down fa-angle-right');
    }

    jQuery('#shirtdesign-accordion').on('hidden.bs.collapse', toggleChevron);
    jQuery('#shirtdesign-accordion').on('shown.bs.collapse', toggleChevron);
    /* -------------------------------------
     POPULAR ITEMS SLIDER
     -------------------------------------- */
    jQuery("#popular-items-slider").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });
    /* -------------------------------------
     RECENTLY VIEWED SLIDER
     -------------------------------------- */
    jQuery("#recently-viewed-slider").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });
    /* -------------------------------------
     Pretty Photo Gallery
     -------------------------------------- */
    jQuery("a[data-rel]").each(function () {
        jQuery(this).attr("rel", jQuery(this).data("rel"));
    });
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'dark_square',
        slideshow: 3000,
        autoplay_slideshow: true,
        social_tools: false
    });
    /* -------------------------------------
     Product Slider 				
     -------------------------------------- */
    (function ($) {
        var sync1 = jQuery("#sync1");
        var sync2 = jQuery("#sync2");
        sync1.owlCarousel({
            singleItem: true,
            slideSpeed: 1000,
            navigation: false,
            pagination: false,
            afterAction: syncPosition,
            responsiveRefreshRate: 200,
        });
        sync2.owlCarousel({
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 3],
            itemsTabletSmall: [640, 3],
            itemsMobile: [479, 4],
            pagination: false,
            responsiveRefreshRate: 100,
            afterInit: function (el) {
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });

        function syncPosition(el) {
            var current = this.currentItem;
            jQuery("#sync2")
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced")
            if (jQuery("#sync2").data("owlCarousel") !== undefined) {
                center(current)
            }
        }

        jQuery("#sync2").on("click", ".owl-item", function (e) {
            e.preventDefault();
            var number = jQuery(this).data("owlItem");
            sync1.trigger("owl.goTo", number);
        });

        function center(number) {
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for (var i in sync2visible) {
                if (num === sync2visible[i]) {
                    var found = true;
                }
            }
            if (found === false) {
                if (num > sync2visible[sync2visible.length - 1]) {
                    sync2.trigger("owl.goTo", num - sync2visible.length + 2)
                } else {
                    if (num - 1 === -1) {
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if (num === sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if (num === sync2visible[0]) {
                sync2.trigger("owl.goTo", num - 1)
            }
        }
    }(jQuery));
    /* -------------------------------------
     RECENTLY VIEWED SLIDER
     -------------------------------------- */
    jQuery("#product-review-slider").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });
    /* -------------------------------------
     DESIGN YOUR PRODUCT SLIDER
     -------------------------------------- */
    (function ($) {
        var sync1 = jQuery("#product-tab-data");
        var sync2 = jQuery("#product-tabs");
        sync1.owlCarousel({
            autoPlay: false,
            singleItem: true,
            slideSpeed: 1000,
            navigation: true,
            pagination: false,
            navigationText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            lazyEffect: "fade",
            autoHeight: true,
            afterAction: syncPosition,
            responsiveRefreshRate: 200,
        });
        sync2.owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [992, 2],
            itemsTablet: [768, 2],
            itemsMobile: [479, 2],
            pagination: false,
            responsiveRefreshRate: 100,
            afterInit: function (el) {
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });

        function syncPosition(el) {
            var current = this.currentItem;
            jQuery("#product-tabs")
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced")
            if (jQuery("#product-tabs").data("owlCarousel") !== undefined) {
                center(current)
            }
        }

        jQuery("#product-tabs").on("click", ".owl-item", function (e) {
            e.preventDefault();
            var number = jQuery(this).data("owlItem");
            sync1.trigger("owl.goTo", number);
        });

        function center(number) {
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for (var i in sync2visible) {
                if (num === sync2visible[i]) {
                    var found = true;
                }
            }
            if (found === false) {
                if (num > sync2visible[sync2visible.length - 1]) {
                    sync2.trigger("owl.goTo", num - sync2visible.length + 2)
                } else {
                    if (num - 1 === -1) {
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if (num === sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if (num === sync2visible[0]) {
                sync2.trigger("owl.goTo", num - 1)
            }
        }
    }(jQuery));

    /* -------------------------------------
     Product Image Change
     -------------------------------------- */
    jQuery(".product-img .rotate").on('click', function () {
        jQuery(".active .img-swap").toggle();
    });
    /* -------------------------------------
     Product Increase
     -------------------------------------- */
    jQuery('em.minus').on('click', function () {
        jQuery('#quantity1').val(parseInt(jQuery('#quantity1').val()) - 1);
    });
    jQuery('em.plus').on('click', function () {
        jQuery('#quantity1').val(parseInt(jQuery('#quantity1').val()) + 1);
    });


    if (scripts_vars.is_stiky == 'on') {
        jQuery('#nav').affix({
            offset: {
                top: jQuery('header').height() - jQuery('#nav').height()
            }
        });

        /* highlight the top nav as scrolling occurs */
        jQuery('body').scrollspy({target: '#nav'})

        /* smooth scrolling for scroll to top */
        jQuery('.scroll-top').click(function () {
            jQuery('body,html').animate({scrollTop: 0}, 1000);
        })

        /* smooth scrolling for nav sections */
        jQuery('#nav .navbar-nav li>a').click(function () {
            var link = $(this).attr('href');
            var posi = $(link).offset().top;
            jQuery('body,html').animate({scrollTop: posi}, 700);
        });
    }


    /* affix the navbar after scroll below header */

    /* -------------------------------------
     Sorting Products			
     -------------------------------------- */

    jQuery('.woocommerce-ordering').on('click', '.orderby', function () {
        jQuery(this).parents('form').submit();
    });

    //Dummy Data Gallery
    jQuery('#gallery-1').isotope({
        itemSelector: '.gallery-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 50
        }
    });


    /* -------------------------------------
     Sorting Products			
     -------------------------------------- */
    //Add To cart button Customization
    /*jQuery('#product-slider a.add_to_cart_button').click(function(e) {
        var $thisbutton =jQuery( this );
        if ( ! wc_add_to_cart_params.is_cart && $thisbutton.parent().find( '.added_to_cart' ).size() === 0 ) {
            $thisbutton.parents('.product-img').find('.cart-badge').before( ' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' +
                wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + '</a>' );

        }
    });*/

});



