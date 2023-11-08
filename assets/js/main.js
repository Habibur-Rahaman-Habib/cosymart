(function ($) {
	"use strict";

	// preloader
	function preloader() {
		$('#xb-loadding').delay().fadeOut();
	};

	$(window).on('load', function () {
		preloader();
		wowAnimation();
	});

	// back to top - start
	// --------------------------------------------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.xb-backtotop').addClass('active');
		} else {
			$('.xb-backtotop').removeClass('active');
		}
	});
	$(function () {
		$(".scroll").on('click', function () {
			$("html,body").animate({ scrollTop: 0 }, "slow");
			return false
		});
	});
	// back to top - end
	// --------------------------------------------------

	// sticky header
	if ($('.stricky').length) {
		$('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
	}
	$(window).on('scroll', function () {
		if ($('.stricked-menu').length) {
			var headerScrollPos = 100;
			var stricky = $('.stricked-menu');
			if ($(window).scrollTop() > headerScrollPos) {
				stricky.addClass('stricky-fixed');
			} else if ($(this).scrollTop() <= headerScrollPos) {
				stricky.removeClass('stricky-fixed');
			}
		}
	});

	//=======================
	// header search
	$(".header-search-btn").on("click", function (e) {
		e.preventDefault();
		$(".header-search-form-wrapper").addClass("open");
		$('.header-search-form-wrapper input[type="search"]').focus();
		$('.body-overlay').addClass('active');
	});
	$(".xb-search-close").on("click", function (e) {
		e.preventDefault();
		$(".header-search-form-wrapper").removeClass("open");
		$("body").removeClass("active");
		$('.body-overlay').removeClass('active');
	});


	// Off Canvas - Start
	// --------------------------------------------------
	$(document).ready(function () {
		$('.cart_close_btn, .body-overlay').on('click', function () {
			$('.cart_sidebar').removeClass('active');
			$('.body-overlay').removeClass('active');
		});

		$('.header-cart-btn').on('click', function () {
			$('.cart_sidebar').addClass('active');
			$('.body-overlay').addClass('active');
		});
	});


	// sidebar info start
	// --------------------------------------------------
	$(document).ready(function () {
		$('.sidebar-menu-close, .body-overlay').on('click', function () {
			$('.offcanvas-sidebar').removeClass('active');
			$('.body-overlay').removeClass('active');
		});

		$('.offcanvas-sidebar-btn').on('click', function () {
			$('.offcanvas-sidebar').addClass('active');
			$('.body-overlay').addClass('active');
		});
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".header-search-form-wrapper").removeClass("open");
	});


	/* Start Menu Mobile */
	$('.xb-nav-hidden li.menu-item-has-children > a').append('<span class="xb-menu-toggle"></span>');
	$('.xb-header-menu li.menu-item-has-children, .xb-menu-primary li.menu-item-has-children').append('<span class="xb-menu-toggle"></span>');
	$('.xb-menu-toggle').on('click', function () {
		if (!$(this).hasClass('active')) {
			$(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
			$(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
		}
		$(this).toggleClass('active');
		$(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
		$(this).closest('.menu-item').find('> .sub-menu').slideToggle();
	});

	$('.xb-nav-hidden li.menu-item-has-children > a').click(function (e) {
		var target = $(e.target);
		if ($(this).attr('href') === '#' && !(target.is('.xb-menu-toggle'))) {
			e.stopPropagation();
			if (!$(this).find('.xb-menu-toggle').hasClass('active')) {
				$(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
				$(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
			}
			$(this).find('.xb-menu-toggle').toggleClass('active');
			$(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
			$(this).closest('.menu-item').find('> .sub-menu').slideToggle();
		}
	});
	$(".xb-nav-mobile").on('click', function () {
		$(this).toggleClass('active');
		$('.xb-header-menu').toggleClass('active');
	});

	$(".xb-menu-close, .xb-header-menu-backdrop").on('click', function () {
		$(this).removeClass('active');
		$('.xb-header-menu').removeClass('active');
		$('.xb-nav-mobile').removeClass('active');
	});
	/* End Menu Mobile */

	/*------------------------------------------
	= VERTICAL MENU FOR HEADER CAT
		-------------------------------------------*/
	if ($(".vertical-menu").length) {
		var $verticalMenu = $(".vertical-menu");
		var $btn = $(".vertical-menu > button");
		var $menu = $(".category-nav__list");

		$menu.hide();

		$btn.on("click", function (e) {
			$menu.slideToggle();
			$verticalMenu.toggleClass("rotate-arrow");
		});
	}


	//data background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ") ")
	})

	// data bg color
	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));

	});

	function wowAnimation() {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
		});
		wow.init();
	}

	// xbo counter start
	if ($(".xbo").length) {
		$('.xbo').appear();
		$(document.body).on('appear', '.xbo', function (e) {
			var odo = $(".xbo");
			odo.each(function () {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
			window.xboOptions = {
				format: 'd',
			};
		});
	}
	// xbo counter end

	// isotop
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});

		// filter items on button click
		$('.prodcut-category').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
	});

	//for menu active class
	$('.prodcut-category button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	// banner paralax
	jQuery('.jarallax').jarallax({
		speed: 0.5,
	});

	// counter UP
	$(document).ready(function () {
		$('.count').counterUp({
			delay: 10,
			time: 5000
		});
	});

	// testimonial slider
	var slider = new Swiper('.xb-testimonial-slider', {
		spaceBetween: 24,
		slidesPerView: 3,
		roundLengths: true,
		loop: true,
		centeredSlides: true,
		loopAdditionalSlides: 30,
		watchSlidesVisibility: true,
		slideVisibleClass: 'swiper-slide-visible',
		navigation: {
			nextEl: ".xb-swiper-arrow-next",
			prevEl: ".xb-swiper-arrow-prev",
		},
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
				centeredSlides: false,
			},
			'768': {
				slidesPerView: 2,
				centeredSlides: false,
			},
			'576': {
				slidesPerView: 1,
				centeredSlides: false,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// team slider
	var slider = new Swiper('.xb-team-slider', {
		spaceBetween: 24,
		slidesPerView: 3,
		roundLengths: true,
		loop: true,
		centeredSlides: true,
		loopAdditionalSlides: 30,
		watchSlidesVisibility: true,
		slideVisibleClass: 'swiper-slide-visible',
		navigation: {
			nextEl: ".xb-team-arrow-next",
			prevEl: ".xb-team-arrow-prev",
		},
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
				centeredSlides: false,
			},
			'768': {
				slidesPerView: 2,
				centeredSlides: false,
			},
			'576': {
				slidesPerView: 1,
				centeredSlides: false,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// category slider
	var slider = new Swiper('.xb-meat-category-slider', {
		spaceBetween: 24,
		slidesPerView: 3,
		roundLengths: true,
		loop: true,
		centeredSlides: true,
		loopAdditionalSlides: 30,
		watchSlidesVisibility: true,
		slideVisibleClass: 'swiper-slide-visible',
		navigation: {
			nextEl: ".xb-swiper-arrow-next",
			prevEl: ".xb-swiper-arrow-prev",
		},
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
				centeredSlides: false,
			},
			'576': {
				slidesPerView: 1,
				centeredSlides: false,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// product gallery slider
	var slider = new Swiper('.xb-product-gallery-slider', {
		spaceBetween: 24,
		slidesPerView: 3,
		roundLengths: true,
		loop: true,
		centeredSlides: true,
		navigation: {
			nextEl: ".xb-swiper-arrow-next",
			prevEl: ".xb-swiper-arrow-prev",
		},
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
				centeredSlides: false,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// deal product slider
	var slider = new Swiper('.xb-deal-product-slider', {
		spaceBetween: 0,
		slidesPerView: 1,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		navigation: {
			nextEl: ".xb-swiper-arrow-next",
			prevEl: ".xb-swiper-arrow-prev",
		},
		speed: 400,
	});

	// deal product slider
	var slider = new Swiper('.xb-product-slider', {
		spaceBetween: 0,
		slidesPerView: 1,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		watchSlidesVisibility: true,
		slideVisibleClass: 'swiper-slide-visible',
		autoplay: {
			enabled: true,
			delay: 6000
		},
		navigation: {
			nextEl: ".xb-swiper-arrow-next",
			prevEl: ".xb-swiper-arrow-prev",
		},
		speed: 400,
	});

	// deal product slider
	var slider2 = new Swiper('.meat-slider', {
		loop: true,
		spaceBetween: 0,
		effect: 'fade',
		autoplay: {
			enabled: true,
			delay: 6000
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		slidesPerView: 1,
	});

	// deal product slider
	var slider = new Swiper('.cloth-slider', {
		loop: true,
		spaceBetween: 0,
		effect: 'fade',
		autoplay: {
			enabled: false,
			delay: 6000
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		slidesPerView: 1,
	});

	// testimonial slider
	var slider2 = new Swiper('.meat-testimonial-slider', {
		loop: true,
		spaceBetween: 0,
		effect: 'fade',
		autoplay: {
			enabled: true,
			delay: 6000
		},
		navigation: {
			nextEl: ".xb-swiper-arrow-next",
			prevEl: ".xb-swiper-arrow-prev",
		},
		slidesPerView: 1,
	});

	// category slider
	var slider = new Swiper('.xb-category-slider', {
		spaceBetween: 16,
		slidesPerView: 7,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		watchSlidesVisibility: true,
		slideVisibleClass: 'swiper-slide-visible',
		navigation: {
			nextEl: ".xb-swiper-arrow-next",
			prevEl: ".xb-swiper-arrow-prev",
		},
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 7,
			},
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	});

	// realted product
	var slider = new Swiper('.realted-porduct-slider', {
		spaceBetween: 24,
		slidesPerView: 4,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		watchSlidesVisibility: true,
		slideVisibleClass: 'swiper-slide-visible',
		navigation: {
			nextEl: ".xb-swiper-arrow-next",
			prevEl: ".xb-swiper-arrow-prev",
		},
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// feature collection2
	var slider = new Swiper('.feature_collection_slider', {
		spaceBetween: 24,
		slidesPerView: 3,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		watchSlidesVisibility: true,
		slideVisibleClass: 'swiper-slide-visible',
		navigation: {
			nextEl: ".xb-swiper-arrow-next",
			prevEl: ".xb-swiper-arrow-prev",
		},
		autoplay: {
			enabled: false,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// testimonial 2
	var slider = new Swiper('.hm2_testimonial', {
		spaceBetween: 24,
		slidesPerView: 1,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		watchSlidesVisibility: true,
		slideVisibleClass: 'swiper-slide-visible',
		navigation: {
			nextEl: ".xb-swiper-arrow-next",
			prevEl: ".xb-swiper-arrow-prev",
		},
		autoplay: {
			enabled: false,
			delay: 6000
		},
		speed: 400,
	});

	// nav tab slider
	var slider = new Swiper('.nav_tab_slider', {
		spaceBetween: 24,
		slidesPerView: 4,
		roundLengths: true,
		loop: true,
		centeredSlides: true,
		// loopAdditionalSlides: 30,
		watchSlidesVisibility: true,
		slideVisibleClass: 'swiper-slide-visible',
		autoplay: {
			enabled: true,
			delay: 6000
		},
		pagination: {
			el: '.swiper-pagination',
		},
		speed: 400,
		breakpoints: {
			'1750': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
				centeredSlides: false,
			},
			'768': {
				slidesPerView: 2,
				centeredSlides: false,
			},
			'576': {
				slidesPerView: 1,
				centeredSlides: false,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	$(document).ready(function () {
		$('#nice-select').niceSelect();
	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-zoom-in',
	});

	// Accordion Box start
	if ($(".accordion_box").length) {
		$(".accordion_box").on("click", ".acc-btn", function () {
			var outerBox = $(this).parents(".accordion_box");
			var target = $(this).parents(".accordion");

			if ($(this).next(".acc_body").is(":visible")) {
				$(this).removeClass("active");
				$(this).next(".acc_body").slideUp(300);
				$(outerBox).children(".accordion").removeClass("active-block");
			} else {
				$(outerBox).find(".accordion .acc-btn").removeClass("active");
				$(this).addClass("active");
				$(outerBox).children(".accordion").removeClass("active-block");
				$(outerBox).find(".accordion").children(".acc_body").slideUp(300);
				target.addClass("active-block");
				$(this).next(".acc_body").slideDown(300);
			}
		});
	}
	// Accordion Box end

	//  Countdown
	$('[data-countdown]').each(function () {

		var $this = $(this),
			finalDate = $(this).data('countdown');
		if (!$this.hasClass('countdown-full-format')) {
			$this.countdown(finalDate, function (event) {
				$this.html(event.strftime('<div class="single"><h1>%D</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hours</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Sec</p></div>'));
			});
		} else {
			$this.countdown(finalDate, function (event) {
				$this.html(event.strftime('<div class="single"><h1>%Y</h1><p>Years</p></div> <div class="single"><h1>%m</h1><p>Months</p></div> <div class="single"><h1>%W</h1><p>Weeks</p></div> <div class="single"><h1>%d</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hours</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Sec</p></div>'));
			});
		}
	});


	/*----------------------------
	= SHOP PRICE SLIDER
		------------------------------ */
	if ($("#slider-range").length) {
		$("#slider-range").slider({
			range: true,
			min: 12,
			max: 200,
			values: [0, 100],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});

		$("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
	}


	/*------------------------------------------
		= TOUCHSPIN FOR PRODUCT SINGLE PAGE
		-------------------------------------------*/
	if ($("input.product-count").length) {
		$("input.product-count").TouchSpin({
			min: 1,
			max: 1000,
			step: 1,
			buttondown_class: "btn btn-link",
			buttonup_class: "btn btn-link",
		});
	}

	// color active
	$(function () {
		$('.color-option li').on('click', function () {
			var active = $('.color-option li.active');
			active.removeClass('active');
			$(this).addClass('active');
		});
	});

	// devHabib

	// countdown clock
	$(".countdown-timer").each(function () {
		var $data_date = $(this).data('date');
		$(this).countdown({
			date: $data_date
		});
	});




})(jQuery);



