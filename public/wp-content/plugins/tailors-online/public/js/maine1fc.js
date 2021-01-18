"use strict";
jQuery(document).ready(function () {
    var loader_html = '<div class="customizer-site-wrap"><div class="customizer-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>';
    var force_measurement = wp_localize_tailors.force_measurement;
    //Force Meashureent to be added in cart
    if (force_measurement == 'yes') {
        jQuery(document).on('click', '.checkout-button, .place-order input[type=submit]', function (e) {
            var is_empty = false;

            jQuery('.custom-measurement-data .measurement-parent .measurement_val').each(function () {
                var current = jQuery(this).val();
                if (jQuery.trim(current).length == 0) {
                    is_empty = true;
                }
            });

            if (is_empty == true) {
                e.preventDefault();
                jQuery.sticky(wp_localize_tailors.force_measurement_message, {
                    classList: 'important',
                    speed: 200,
                    autoclose: 5000,
                    position: 'top-right',
                });
            }
        });
    }

    //tabs active
    jQuery(document).on('click', 'li.tab-status', function (event) {
        event.preventDefault();

        setTimeout(function () {
            jQuery(window).trigger('resize');
            jQuery(document.body).trigger("sticky_kit:recalc");
        }, 50);

        jQuery('.tg-radio').trigger('change');  //update asset id
        var _this = jQuery(this);
        var _current = _this;
        var _next = _this.parents('.steps-next-prev-buttons').find('steps-next');
        _this.prevAll('li').removeClass('cus-active').addClass('cus-done');
        _this.nextAll('li').removeClass('cus-active cus-done');


        _this.addClass('cus-active');
        var _step = _this.find('a').data('step');

        if (jQuery('body').hasClass('single-product')) {
            //do nothing
        } else {
            if (_current.data('step-count') === 'last-step') {
                jQuery('.selected-fabric').trigger('click');
                jQuery('.add-to-cart-order').css("display", "block");
                _next.css("display", "none");
            } else {
                jQuery('.add-to-cart-order').css("display", "none");
                jQuery('.steps-next').css("display", "block");
            }
        }


        _this.parents('.steps-main-wrapper').find('.steps-content-wrap .tg-stepcontent').removeClass('step-active');
        _this.parents('.steps-main-wrapper').find('.steps-content-wrap #' + _step).addClass('step-active');

    });

    /* --------------------------------------
            FORM STEP PROGRESS
    -------------------------------------- */
    function customDesign() {
        jQuery('.tg-radio label img').on('click', function () {
            var _this = jQuery(this);
            var _src = _this.data('parent');
            var _asset = _this.parents('.tg-radio').data('asset');
            jQuery("#asset-" + _asset).attr('src', _src);
        });
    }

    customDesign();

    //Sticky
    jQuery('#tg-stickyheader').stick_in_parent();
    jQuery(".tg-stickybox").stick_in_parent({
        offset_top: 150,
    });

    //Step next Menu
    jQuery(document).on('click', '.steps-next-prev-buttons a.steps-next', function () {
        setTimeout(function () {
            jQuery(window).trigger('resize');
            jQuery(document.body).trigger("sticky_kit:recalc");
        }, 50);

        var _this = jQuery(this);
        var _current = _this.parents('.steps-next-prev-buttons').find('ul.steps-nav li.cus-active');
        var _next = _this.parents('.steps-next-prev-buttons').find('ul.steps-nav li.cus-active').next('li');
        var _step = _next.find('a').data('step');
        var _step_count = _current.data('step-count');

        if (_step_count === 'last-step') {
            return false;
        }

        if (jQuery('body').hasClass('single-product')) {
            //do nothing
        } else {
            if (_next.data('step-count') === 'last-step') {
                jQuery('.add-to-cart-order').css("display", "block");
                _this.css("display", "none");
            }
        }

        //Menu Active
        _current.removeClass('cus-active');
        _current.addClass('cus-done');
        _next.addClass('cus-active');


        //Content Active
        _this.parents('.steps-main-wrapper').find('.steps-content-wrap .tg-stepcontent').removeClass('step-active');
        _this.parents('.steps-main-wrapper').find('.steps-content-wrap #' + _step).addClass('step-active');
    });

    //Step prev Menu
    jQuery(document).on('click', '.steps-next-prev-buttons a.steps-prev', function () {

        setTimeout(function () {
            jQuery(window).trigger('resize');
            jQuery(document.body).trigger("sticky_kit:recalc");
        }, 50);

        var _this = jQuery(this);
        var _current = _this.parents('.steps-next-prev-buttons').find('ul.steps-nav li.cus-active');
        var _prev = _this.parents('.steps-next-prev-buttons').find('ul.steps-nav li.cus-active').prev('li');

        var _step = _prev.find('a').data('step');
        var _step_count = _current.data('step-count');

        _current.removeClass('cus-done');
        _prev.removeClass('cus-done');

        if (_step_count === 'first-step') {
            return false;
        }

        if (_current.data('step-count') === 'last-step') {
            jQuery('.add-to-cart-order').css("display", "none");
            jQuery('.steps-next').css("display", "block");
        }

        //Menu Active
        _current.removeClass('cus-active');
        _prev.addClass('cus-active');

        //Content Active
        _this.parents('.steps-main-wrapper').find('.steps-content-wrap .tg-stepcontent').removeClass('step-active');
        _this.parents('.steps-main-wrapper').find('.steps-content-wrap #' + _step).addClass('step-active');
    });

    /*------------------------------------------
            STICKY MAIN IMAGE
    ------------------------------------------*/
    //jQuery('#tg-stickyheader').stick_in_parent();
    jQuery(".tg-stickybox").stick_in_parent({
        offset_top: 150,
    });


    /* ---------------------------------------
     Add to cart
     --------------------------------------- */
    jQuery(document).on('click', 'a.add-to-cart-order', function (event) {
        event.preventDefault();
        jQuery.confirm({
            'title': wp_localize_tailors.confirm_garment_title,
            'message': wp_localize_tailors.confirm_garment_message,
            'buttons': {
                'Yes': {
                    'class': 'blue',
                    'action': function () {
                        jQuery('body').append(loader_html);
                        var json_data = jQuery(this).parents('.cus-page-wrapper').data('customzer_json');
                        var dataString = 'json=' + json_data + '&' + jQuery('.wp-customizer-form').serialize() + '&action=customizer_update_cart';
                        jQuery.ajax({
                            type: "POST",
                            url: wp_localize_tailors.ajaxurl,
                            data: dataString,
                            dataType: "json",
                            success: function (response) {
                                if (response.type === 'success') {
                                    jQuery.sticky(response.message, {
                                        classList: 'success',
                                        speed: 200,
                                        autoclose: 5000,
                                        position: 'top-right',
                                    });

                                    if (response.cart_url) {
                                        window.location.replace(response.cart_url);
                                    } else {
                                        window.location.reload();
                                    }

                                } else {
                                    jQuery.sticky(response.message, {
                                        classList: 'important',
                                        speed: 200,
                                        autoclose: 5000
                                    });
                                }
                            }
                        });
                    }
                },
                'No': {
                    'class': 'gray',
                    'action': function () {
                        return false;
                    }	// Nothing to do in this case. You can as well omit the action property.
                }
            }
        });

    });

    /* ---------------------------------------
     Menu next/previous
     --------------------------------------- */
    jQuery(document).on('click', '.measurement-next', function () {
        var _this = jQuery(this);
        if (_this.parents('.measurement-parent').next('.measurement-parent').length > 0) {
            _this.parents('.measurement-parent').removeClass('tg-current');
            _this.parents('.measurement-parent').next('.measurement-parent').addClass('tg-current');

            if (_this.parents('.measurement-parent').next('.measurement-parent').hasClass('show-measurement-btn')) {
                jQuery('.measurement-checkout').show();
            }
        }
    });

    jQuery(document).on('click', '.measurement-prev', function () {
        var _this = jQuery(this);
        if (_this.parents('.measurement-parent').prev('.measurement-parent').length > 0) {
            _this.parents('.measurement-parent').removeClass('tg-current');
            _this.parents('.measurement-parent').prev('.measurement-parent').addClass('tg-current');
            jQuery('.measurement-checkout').hide();
        }
    });

    /* ---------------------------------------
     Measurement thumbnails preview
     --------------------------------------- */
    jQuery(document).on('click', '.measurement-tumbnails', function () {
        var _this = jQuery(this);
        var _thumbnail = _this.find('img').attr('src');
        _this.parents('figure').find('.measurement-tumbnails.first-thumb img').attr('src', _thumbnail);
    });

    /* ---------------------------------------
     Save measurements and checkout
     --------------------------------------- */
    jQuery(document).on('click', '.save_and_checkout', function (event) {
        event.preventDefault();
        var _this = jQuery(this);
        var _type = _this.data('type');
        var _current_index = _this.parents('.wp-measurement-form').find('.current_cart').val();

        jQuery('body').append(loader_html);
        var dataString = _this.parents('form').serialize() + '&current_index=' + _current_index + '&action=customizer_update_measurements';

        jQuery.ajax({
            type: "POST",
            url: wp_localize_tailors.ajaxurl,
            data: dataString,
            dataType: "json",
            success: function (response) {
                jQuery('body').find('.customizer-site-wrap').remove();
                if (response.type === 'success') {
                    jQuery.sticky(response.message, {
                        classList: 'success',
                        speed: 200,
                        autoclose: 5000,
                        position: 'top-right',
                    });
                    if (_type === 'save_close') {
                        jQuery('.cus-close-modal').trigger('click');
                    }
                } else {
                    jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
                }
            }
        });
    });

    /* ---------------------------------------
     Update settings
     --------------------------------------- */
    jQuery(document).on('click', '.update_settings', function (event) {
        event.preventDefault();
        var _this = jQuery(this);
        var _type = _this.data('type');
        var _current_index = _this.parents('.cus-form-change-settings').find('.current_cart').val();

        jQuery('body').append(loader_html);
        var dataString = _this.parents('form').serialize() + '&current_index=' + _current_index + '&action=customizer_update_settings';

        jQuery.ajax({
            type: "POST",
            url: wp_localize_tailors.ajaxurl,
            data: dataString,
            dataType: "json",
            success: function (response) {
                jQuery('body').find('.customizer-site-wrap').remove();
                if (response.type === 'success') {
                    jQuery.sticky(response.message, {
                        classList: 'success',
                        speed: 200,
                        autoclose: 5000,
                        position: 'top-right',
                    });
                    if (_type === 'save_close') {
                        jQuery('.cus-close-modal').trigger('click');
                    }
                } else {
                    jQuery.sticky(response.message, {classList: 'important', speed: 200, autoclose: 5000});
                }
            }
        });
    });

    /* ---------------------------------------
      measurement type
     --------------------------------------- */
    jQuery(document).on('change', '.measurement_size_type', function (event) {
        var _this = jQuery(this);
        if (_this.val() === 'custom') {
            _this.parents('.wp-measurement-form').find('.custom-measurement-data').show();
        } else {
            _this.parents('.wp-measurement-form').find('.custom-measurement-data').hide();
        }
    });

    /* ---------------------------------------
      Modal box Window
     --------------------------------------- */
    jQuery(document).on('click', ".cus-open-modal", function (event) {
        event.preventDefault();
        var _this = jQuery(this);
        jQuery(document).find(".customizer-items " + _this.data("target")).show();
        jQuery(document).find(".customizer-items " + _this.data("target")).addClass('in');

        jQuery(document).find(".measurements-items " + _this.data("target")).show();
        jQuery(document).find(".measurements-items " + _this.data("target")).addClass('in');

        jQuery('body').addClass('cus-modal-open');
    });

    jQuery(document).on('click', ".cus-close-modal", function (event) {
        event.preventDefault();
        var _this = jQuery(this);

        jQuery(document).find(".customizer-items " + _this.data("target")).removeClass('in');
        jQuery(document).find(".customizer-items " + _this.data("target")).hide();

        jQuery(document).find(".measurements-items " + _this.data("target")).removeClass('in');
        jQuery(document).find(".measurements-items " + _this.data("target")).hide();

        jQuery('body').removeClass('cus-modal-open');
    });
});

/* ---------------------------------------
 Confirm Box
 --------------------------------------- */
(function ($) {

    $.confirm = function (params) {

        if ($('#confirmOverlay').length) {
            // A confirm is already shown on the page:
            return false;
        }

        var buttonHTML = '';
        $.each(params.buttons, function (name, obj) {

            // Generating the markup for the buttons:

            buttonHTML += '<a href="#" class="button ' + obj['class'] + '">' + name + '<span></span></a>';

            if (!obj.action) {
                obj.action = function () {
                };
            }
        });

        var markup = [
            '<div id="confirmOverlay">',
            '<div id="confirmBox">',
            '<h1>', params.title, '</h1>',
            '<p>', params.message, '</p>',
            '<div id="confirmButtons">',
            buttonHTML,
            '</div></div></div>'
        ].join('');

        $(markup).hide().appendTo('body').fadeIn();

        var buttons = $('#confirmBox .button'),
            i = 0;

        $.each(params.buttons, function (name, obj) {
            buttons.eq(i++).click(function () {

                // Calling the action attribute when a
                // click occurs, and hiding the confirm.

                obj.action();
                $.confirm.hide();
                return false;
            });
        });
    }

    $.confirm.hide = function () {
        $('#confirmOverlay').fadeOut(function () {
            $(this).remove();
        });
    }

})(jQuery);

/*
	Sticky v2.1.2 by Andy Matthews
	http://twitter.com/commadelimited

	forked from Sticky by Daniel Raftery
	http://twitter.com/ThrivingKings
*/
(function ($) {

    $.sticky = $.fn.sticky = function (note, options, callback) {
        // allow options to be ignored, and callback to be second argument
        if (typeof options === 'function') callback = options;
        // generate unique ID based on the hash of the note.
        var hashCode = function (str) {
                var hash = 0,
                    i = 0,
                    c = '',
                    len = str.length;
                if (len === 0) return hash;
                for (i = 0; i < len; i++) {
                    c = str.charCodeAt(i);
                    hash = ((hash << 5) - hash) + c;
                    hash &= hash;
                }
                return 's' + Math.abs(hash);
            },
            o = {
                position: 'top-right', // top-left, top-right, bottom-left, or bottom-right
                speed: 'fast', // animations: fast, slow, or integer
                allowdupes: true, // true or false
                autoclose: 5000,  // delay in milliseconds. Set to 0 to remain open.
                classList: '' // arbitrary list of classes. Suggestions: success, warning, important, or info. Defaults to ''.
            },
            uniqID = hashCode(note), // a relatively unique ID
            display = true,
            duplicate = false,
            tmpl = '<div class="sticky border-POS CLASSLIST" id="ID"><span class="sticky-close"></span><p class="sticky-note">NOTE</p></div>',
            positions = ['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'];

        // merge default and incoming options
        if (options) $.extend(o, options);

        // Handling duplicate notes and IDs
        $('.sticky').each(function () {
            if ($(this).attr('id') === hashCode(note)) {
                duplicate = true;
                if (!o.allowdupes) display = false;
            }
            if ($(this).attr('id') === uniqID) uniqID = hashCode(note);
        });

        // Make sure the sticky queue exists
        if (!$('.sticky-queue').length) {
            $('body').append('<div class="sticky-queue ' + o.position + '">');
        } else {
            // if it exists already, but the position param is different,
            // then allow it to be overridden
            $('.sticky-queue').removeClass(positions.join(' ')).addClass(o.position);
        }

        // Can it be displayed?
        if (display) {
            // Building and inserting sticky note
            $('.sticky-queue').prepend(
                tmpl
                    .replace('POS', o.position)
                    .replace('ID', uniqID)
                    .replace('NOTE', note)
                    .replace('CLASSLIST', o.classList)
            ).find('#' + uniqID)
                .slideDown(o.speed, function () {
                    display = true;
                    // Callback function?
                    if (callback && typeof callback === 'function') {
                        callback({
                            'id': uniqID,
                            'duplicate': duplicate,
                            'displayed': display
                        });
                    }
                });

        }

        // Listeners
        $('.sticky').ready(function () {
            // If 'autoclose' is enabled, set a timer to close the sticky
            if (o.autoclose) {
                $('#' + uniqID).delay(o.autoclose).fadeOut(o.speed, function () {
                    // remove element from DOM
                    $(this).remove();
                });
            }
        });

        // Closing a sticky
        $('.sticky-close').on('click', function () {
            $('#' + $(this).parent().attr('id')).dequeue().fadeOut(o.speed, function () {
                // remove element from DOM
                $(this).remove();
            });
        });

    };
})(jQuery);