var sectionHome = {};

sectionHome.colorPrint = function(context) {

	//==================================================
	// API
	//==================================================
	var api    = {},

	//==================================================
	// DOM SELECTIONS
	//==================================================
	$context   = context,
	$slider    = $context.find('.color'),
	$divider   = $slider.find('.divider'),
	$layer1    = $slider.find('.color-white'),
	$layer2    = $slider.find('.color-black'),
	$hotspot   = null,

	//==================================================
	// CONSTANTS
	//==================================================
	PADDING    = parseInt($slider.css('padding-left'), 10),
	FRICTION   = 0.15,

	//==================================================
	// INSTANCE VARIABLES
	//==================================================
	request    = null,
	over       = false,

	//==================================================
	// STATES
	//==================================================
	dimensions = {
		width  : $slider.outerWidth(),
		height : $slider.outerHeight()
	},

	offset     = {
		x      : $slider.offset().left,
		y      : $slider.offset().top
	},

	limits     = {
		left   : 0,
		right  : 0,
		top    : 48,
		bottom : 100
	},

	target     = {
		x      : (dimensions.width / 2),
	},

	chase      = {
		x      : limits.left,
	},

	//==================================================
	// CALLBACKS
	//==================================================
	callbacks = {

		onMouseEnter: function(event) {
			offset.x = $slider.offset().left;

			$divider.addClass('disabled');

			$hotspot.on('mouseleave', callbacks.onMouseLeave);
			$(window).on('mousemove', callbacks.onMouseMove);
		},

		onMouseLeave: function(event) {
			$divider.removeClass('disabled');

			$hotspot.off('mouseleave', callbacks.onMouseLeave);
			$(window).off('mousemove', callbacks.onMouseMove);

			target.x = (dimensions.width / 2);
		},

		onMouseMove: function(event) {
			var mouseX = event.pageX - offset.x;
			var clampX = Math.max(mouseX, limits.left);

			clampX = Math.min(clampX, dimensions.width - limits.right);

			target.x = clampX;
		},

		onRequestAnimationFrame: function() {
			request = window.requestAnimationFrame(callbacks.onRequestAnimationFrame);

			update();
		}
	};

	function initialize() {
		$slider.append('<div class="hotspot">');
		$hotspot = $slider.find('.hotspot');
	}

	function enable() {
		enableUpdate(true);
		$hotspot.on('mouseenter', callbacks.onMouseEnter);
	}

	function disable() {
		enableUpdate(false);
		$hotspot.off('mouseenter', callbacks.onMouseEnter);
	}

	function enableUpdate(value) {
		var lastTime = 0,
			vendors = ['ms', 'moz', 'webkit', 'o'];

		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
			window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
		}

		if(!window.requestAnimationFrame) {
			window.requestAnimationFrame = function (callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function () {
				callback(currTime + timeToCall);
		  	},
				timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
			if(!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function (id) {
				clearTimeout(id);
			};
		}

		if (value) {
			request = window.requestAnimationFrame(callbacks.onRequestAnimationFrame);

		} else {

			cancelAnimationFrame(request);
		}
	}

	function update() {
		chase.x += (target.x - chase.x) * FRICTION;

		$divider.css({
			left: chase.x
		});

		$layer1.css({
			width: Math.ceil(dimensions.width - chase.x - PADDING),
		});

		$layer2.css({
			width: Math.ceil(chase.x - PADDING),
		});
	}

	// API
	api.initialize = initialize;
	api.enable     = enable;
	api.disable    = disable;

	return api;
};

$(function () {
	'use strict';

	$('section.home div.links a').click(function (e) {
		var slider = $(this).attr('href');

		slider = slider.replace('#/', '');

		$('section.home').removeClass('slider-tab10 slider-tab8');

		setTimeout(function() {$('body').removeClass('no-scroll');}, 250);

		if(slider !== 'back') {
			$('section.home').addClass('slider-' + slider + '');
			setTimeout(function() {$('body').addClass('no-scroll');}, 250);
		}

		e.preventDefault();
	});

	jQuery(document).ready(function($) {
		var colorPrint = new sectionHome.colorPrint(jQuery('.body'));

		colorPrint.initialize();
		colorPrint.enable();
	});
});
