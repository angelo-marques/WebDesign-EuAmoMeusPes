/*
 * isMobile
 * retinaLogos
 * responsiveVideo
 * responsiveMenu
 * counter
 * testimonials
 * clients
 * productRelated
 * langTrigger
 * galleryV1
 * progressCircle
 * blogSlider
 * rollSlider
 * blogMasonry
 * popupVideo
 * animations
 * toggles
 * progressBar
 * tabs
 * ajaxContactForm
 * googleMap
 * parallax
 * loadPage
 * priceFilter
 * ratingStars
 * handlerHeader
 * detectViewport
*/

;(function($) {

    'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var retinaLogos = function() {
        var retina = window.devicePixelRatio > 1 ? true : false;

        if(retina) {
            $('.logo img').attr({src:'img/logo.png'});
        }
    };

    var responsiveVideo= function() {
        if ( $().fitVids ) {
            $('.container').fitVids();
        }
    };

    var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#main-nav').attr('id', 'main-nav-mobi').hide();
                    var hasChildMenu = $('#main-nav-mobi').find('li:has(ul)');

                    $('#header').find('.main-header').append($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#main-nav-mobi').attr('id', 'main-nav').removeAttr('style');

                    $desktopMenu.find('.sub-menu').removeAttr('style');
                    $('#header').find('.col-md-12').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {
            $('#main-nav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#main-nav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    };

    var counter = function() {
        if ( $().countTo ) {
            $('.roll-counter').on('on-appear', function() {
                $(this).find('.numb').each(function() {
                    var to = parseInt($(this).attr('data-to'), 10),
                        speed = parseInt($(this).attr('data-speed'), 10);
                        
                    $(this).countTo({
                        to: to,
                        speen: speed
                    });
                });
            }); //counter
        }
    };

    var testimonials = function() {
        if ( $().owlCarousel ) {
            $('.roll-testimonials').each(function(){
                var $this = $(this);
                $this.find('.owl-carousel').owlCarousel({
                    navigation : true,
                    pagination: true,
                    responsive: true,
                    items: 1,
                    navigationText: false,
                    itemsDesktop: [3000,3],
                    itemsDesktopSmall: [1400,3],
                    itemsTablet:[970,2],
                    itemsTabletSmall: [600,1],
                    itemsMobile: [360,1],
                    touchDrag: true,
                    mouseDrag: true,
                    autoHeight: false,
                    autoPlay: true
                });
            });
        } // end if
    };

    var clients = function() {
        if ( $().owlCarousel ) {
            $('.roll-clients').each(function(){
                var $this = $(this);
                $this.find('.owl-carousel').owlCarousel({
                    navigation : true,
                    pagination: true,
                    responsive: true,
                    items: 1,
                    navigationText: false,
                    itemsDesktop: [3000,6],
                    itemsDesktopSmall: [1400,5],
                    itemsTablet:[970,4],
                    itemsTabletSmall: [600,3],
                    itemsMobile: [360,2],
                    touchDrag: true,
                    mouseDrag: true,
                    autoHeight: false,
                    autoPlay: false
                });
            });
        } // end if
    };

    var productRelated = function() {
        if ( $().owlCarousel ) {
            $('.product-related').each(function(){
                var $this = $(this);
                $this.find('.owl-carousel').owlCarousel({
                    navigation : true,
                    pagination: true,
                    responsive: true,
                    items: 1,
                    navigationText: false,
                    itemsDesktop: [3000,4],
                    itemsDesktopSmall: [1400,4],
                    itemsTablet:[970,3],
                    itemsTabletSmall: [600,2],
                    itemsMobile: [360,1],
                    touchDrag: true,
                    mouseDrag: true,
                    autoHeight: false,
                    autoPlay: false
                });
            });
        } // end if
    };

    var langTrigger = function() {
        $('.top').find('.language').each(function(){
            var langTrigger = $(this).find('.lang-trigger'),
                langList = $(this).find('.lang-list');

            langTrigger.on('click', function(){
                if ( langList.hasClass('ghost') ) {
                    langList.removeClass('ghost').addClass('human');
                } else {
                    langList.removeClass('human').addClass('ghost');
                }
            })

            $(document).mouseup(function(e) {
                if ( !langTrigger.is(e.target)
                    && langTrigger.has(e.target).length === 0 )
                {
                    langList.removeClass('human').addClass('ghost');
                }
            });
        });
    };

    var galleryV1 = function() {
        $('.galleries').each(function () {
            var $this = $(this);
            var item = $this.data("item");
            var layout = $this.data("layout");
            var gapH = Number($this.data("gaph"));
            var gapV = Number($this.data("gapv"));

            $this.cubeportfolio({
                filters: '#gallery-v1-filter',
                layoutMode: layout,
                defaultFilter: '*',
                animationType: 'quicksand',
                gapHorizontal: gapH,
                gapVertical: gapV,
                showPagination: false,
                gridAdjustment: 'responsive',
                rewindNav: false,
                mediaQueries: [{
                    width: 1500,
                    cols: item
                }, {
                    width: 1100,
                    cols: item
                }, {
                    width: 800,
                    cols: 3
                }, {
                    width: 550,
                    cols: 2
                }, {
                    width: 320,
                    cols: 1
                }],
                caption: ' ',
                displayType: 'bottomToTop',
                displayTypeSpeed: 100
            });
        });

        $('.roll-gallery .gallery-button a').on('click', function(e) {
            e.preventDefault();

            var $container = $('.galleries');
            var el = $(this),
                url = el.attr('href'),
                page = parseInt(el.attr('data-page'), 10);

            el.addClass('loading').text('Loading...');

            $.ajax({
                type: "GET",
                url: url,
                dataType: "html",
                async: false,   // wait result
                data : { page : page }
            })
            .done(function (data) {
                if ( data != null ) {
                    var newitem = $(data);
                    $container.append(newitem).cubeportfolio('appendItems', newitem);
                    el.removeClass('loading').text('Load more');
                    page = page + 1;
                    el.attr({'data-page': page, 'href': './inc/ajax/g' + page + '.html'});
                }
            })
            .fail(function () {
                el.text('No more galleries.');
            })
        });
    };

    var progressCircle = function() {
        if ( isMobile.any() == null ) {
            $('.piechart').each(function () {
                var $this = $(this);
                var value = Number($this.data("value")) / 100;
                var option;

                option = {
                    strokeWidth: 7.5,
                    trailWidth: 7.5,
                    duration: 1500,
                    text: {
                        value: '0%'
                    },
                    step: function (state, bar) {
                        bar.setText((bar.value() * 100).toFixed(0) + "%");
                    }
                }

                var circle = new ProgressBar.Circle($(this)[0], option);

                $this.waypoint({
                    handler: function (direction) {
                        circle.animate(value);
                    },
                    offset: "75%"
                });
            });
        }
    };

    var blogSlider = function() {
        if ( $().flexslider ) {
            $('.blog-slider, .gallery-slider').each(function() {
                $(this).find('.flexslider').flexslider({
                    animation      :  'fade',
                    pauseOnHover   :  true,
                    useCSS         :  false,
                    easing         :  'easeInOutExpo',
                    animationSpeed :  500,
                    slideshowSpeed :  5000,
                    controlNav     :  true,
                    directionNav   :  true,
                    slideshow      :  true,
                    prevText       :  '<i class="fa fa-angle-left"></i>',
                    nextText       :  '<i class="fa fa-angle-right"></i>',
                    smoothHeight   :  true
                });
            });
        }
    };

    var rollSlider = function() {
        if ( $().flexslider ) {
            $('.roll-slider').each(function() {
                $(this).find('.flexslider').flexslider({
                    animation      :  'slide',
                    pauseOnHover   :  true,
                    useCSS         :  false,
                    easing         :  'easeInOutExpo',
                    animationSpeed :  500,
                    slideshowSpeed :  5000,
                    controlNav     :  true,
                    directionNav   :  true,
                    slideshow      :  true,
                    prevText       :  '<i class="fa fa-angle-left"></i>',
                    nextText       :  '<i class="fa fa-angle-right"></i>',
                    smoothHeight   :  true
                });
            });
        }  
    };

    var blogMasonry = function() {
        if ( $().isotope ) {
            var $container = $('.post-masonry');

            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.post',
                    transitionDuration: '0.5s',
                    layoutMode: 'masonry',
                    masonry: { columnWidth: $container.width() / 12 }
                }); // isotope
            });

            $(window).resize(function() {
                $container.isotope({
                    masonry: { columnWidth: $container.width() / 12 }
                });
            }); // relayout
        };
    };

    var popupVideo = function() {
        if ( $().magnificPopup ) {
            $('.popup-youtube, .popup-vimeo').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: true
            });
        };
    };

    var animations = function() {
        $('.animate-scroll').each( function() {
            var $this = $(this),
                animateClass  = $this.data('animation'),
                animateDelay  = $this.data('animation-delay'),
                animateOffset = $this.data('animation-offset');

            $this.css({
                '-webkit-animation-delay':  animateDelay,
                '-moz-animation-delay':     animateDelay,
                'animation-delay':          animateDelay
            });
        
            $this.waypoint(function() {
                $this.addClass('animated ' + animateClass);
                },{
                    triggerOnce: true,
                    offset: animateOffset
            });
        });
    };

    var toggles = function() {
        var args = {easing:'easeOutExpo', duration:300};
        $('.roll-toggle.active, .toggle.active').find('.toggle-content').show();

        $('.roll-accordion .toggle-title, .accordion .toggle-title').on('click', function () {
            if ( !$(this).parent().is('.active') ) {
                $(this).parent().toggleClass('active')
                    .children('.toggle-content').slideToggle(args)
                .parent().siblings('.active').removeClass('active')
                    .children('.toggle-content').slideToggle(args);
            } else {
                $(this).parent().toggleClass('active');
                $(this).next().slideToggle(args);
            }
        });
    };

    var progressBar = function() {
        $('.progress-bar').on('on-appear', function() {
            $(this).each(function() {
                var percent = $(this).data('percent');

                $(this).find('.progress-animate').animate({
                    "width": percent + '%'
                },1000, "easeOutBack");

                $(this).parent('.roll-progress').find('.perc').addClass('show').animate({
                    "width": percent + '%'
                },1000, "easeOutBack");
            });
        });
    };

    var tabs = function() {
        $('.roll-tabs').each(function() {
            $(this).children('.content-tab').children().hide();
            $(this).children('.content-tab').children().first().show();
            $(this).find('.menu-tab').children('li').on('click', function(e) {  
                var liActive = $(this).index();
                var contentActive = $(this).siblings().removeClass('active').parents('.roll-tabs').children('.content-tab').children().eq(liActive);
                contentActive.addClass('active').fadeIn('slow');
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.roll-tabs').children('.content-tab').children().eq(liActive).siblings().hide();
                e.preventDefault();
            });
        });
    };

    var ajaxContactForm = function() {
        if ( $().validate ) {        
            $('.roll-contact-form').each(function() {
                $(this).validate({
                    submitHandler: function( form ) {
                        var $form = $(form),
                            str = $form.serialize(),
                            loading = $('<div />', { 'class': 'loading' });

                        $.ajax({
                            type: "POST",
                            url:  $form.attr('action'),
                            data: str,
                            beforeSend: function () {
                                $form.find('.send-wrap').prepend(loading);
                                $form.find('.roll-alert').remove();
                            },
                            success: function( msg ) {
                                var result, cls;

                                if ( msg == 'Success' ) {
                                    result = 'Your message has been sent. Thank you!';
                                    cls = 'msg-success';
                                } else {
                                    result = 'Error sending email.';
                                    cls = 'msg-error';
                                }

                                $form.prepend(
                                    $('<div />', {
                                        'class': 'roll-alert ' + cls,
                                        'text' : result
                                    }).append(
                                        $('<a class="remove" href="#"><i class="fa fa-close"></i></a>')
                                    )
                                );

                                $form.find(':input').not('.submit').val('');
                            },
                            complete: function( xhr, status, error_thrown ) {
                                $form.find('.loading').remove();
                            }
                        });
                    }
                });
            });
        }
        $(document).on('click', '.roll-alert .remove', function(e) {
            $(this).closest('.roll-alert').remove();
            e.preventDefault();
        })
    };

    var googleMap = function() {
        if ( $().gmap3 ) {
            $("#map").gmap3({
                map:{
                    options:{
                        zoom: 14,
                        mapTypeId: 'zupahealth_style',
                        mapTypeControlOptions: {
                            mapTypeIds: ['zupahealth_style', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: true
                    }
                },
                getlatlng:{
                    address:  "New York, NY 10017 United States",
                    callback: function(results) {
                        if ( !results ) return;
                            $(this).gmap3('get').setCenter(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
                            $(this).gmap3({
                            marker:{
                            latLng:results[0].geometry.location
                            }
                        });
                    }
                },
                styledmaptype:{
                    id: "zupahealth_style",
                    options:{
                        name: "ZupaHealth Map"
                    },
                },
            });
        }
    };

    var parallax = function() {
        if ( $('.parallax').length > 0 && isMobile.any() == null ) {
            $.stellar({
                horizontalScrolling: false,
                verticalScrolling: true,
                horizontalOffset: 0,
                verticalOffset: 0
            });
        }
    };

    var loadPage = function() {
        if ( $().animsition ) {
            $(".animsition").animsition({
                inClass: 'fade-in',
                outClass: 'fade-out',
                inDuration: 1500,
                outDuration: 800,
                loading: true,
                loadingParentElement: 'body',
                loadingClass: 'animsition-loading',
                // loadingInner: '', // e.g '<img src="loading.svg" />'
                timeout: false,
                timeoutCountdown: 5000,
                onLoadEvent: true,
                browser: [
                    'animation-duration',
                    '-webkit-animation-duration',
                    '-moz-animation-duration',
                    '-o-animation-duration'
                    ],
                overlay: false,
                overlayClass: 'animsition-overlay-slide',
                overlayParentElement: 'body',
                transition: function(url){ window.location.href = url; }
            });
        }
    };

    var priceFilter = function() {
        if ($('.price-filter').find('.price-slider-range').length > 0) {
            $(".price-filter").each(function() {
                var $sliderRange = $(this).find('.price-slider-range'),
                    $valueFrom = $(this).find('span.from'),
                    $valueTo = $(this).find('span.to');

                $sliderRange.slider({
                    range: true,
                    min: 0,
                    max: 20000,
                    values: [ 1, 10000 ],
                    slide: function( event, ui ) {
                        $valueFrom.text("$" + ui.values[ 0 ]);
                        $valueTo.text("$" + ui.values[ 1 ]);
                    }
                });

                $valueFrom.text("$" + $sliderRange.slider( "values", 0 ));
                $valueTo.text("$" + $sliderRange.slider( "values", 1 ));
            });
        }
    };

    var ratingStars = function() {
        $('.star-ratings').each(function () {
            var point = parseInt($(this).attr('data-rating'), 10);
            if (point === 5) {
                $(this).children("span").addClass('rated');
            } else {
                $(this).children().eq(point).prevAll().addClass('rated');
            }
        });
    };

    var handlerHeader = function() {
        var header = $('.site-header');

        if ( $().sticky && header.is('.sticky') ) {
            header.sticky();

            $(window).on('load scroll', function(){
                if ( $(window).scrollTop() > 200 ) {
                    $('.site-header').addClass('scrolled');
                } else {
                    $('.site-header').removeClass('scrolled');
                }
            });
        }

        $('.one-page .main-nav ul > li > a').on('click',function() {
            var mainHeader = $('.main-header').outerHeight();
            var anchor = $(this).attr('href').split('#')[1];

            if ( anchor ) {
                if ( $('#'+anchor).length > 0 ) {
                    var target = $('#'+anchor).offset().top - 63;

                    $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
                }
            }

            $(this).parent().addClass('active').siblings().removeClass('active');

            return false;
        });
    };

    var detectViewport = function() {
        $('[data-waypoint-active="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };

    // Dom Ready
    $(function() {
        retinaLogos();
        responsiveVideo();
        responsiveMenu();
        counter();
        progressCircle();
        galleryV1();
        langTrigger();
        testimonials();
        clients();
        productRelated();
        blogSlider();
        rollSlider();
        blogMasonry();
        popupVideo();
        animations();
        toggles();
        progressBar();
        tabs();
        ajaxContactForm();
        googleMap();
        parallax();
        loadPage();
        priceFilter();
        ratingStars();
        handlerHeader();
        detectViewport();
    });

})(jQuery);