/* gloabal skrollr*/
$(function () {
	'use strict';

	var num = 1, s = '', seccion = 0;

	$('div.find').hover(function () {
		$(this).addClass('enabled');
	}, function () {
		$(this).removeClass('enabled');
	});

	$('div.find a:nth-of-type(1)').click(function (e) {
		e.preventDefault();
	})

	$('a[href="#!/share/twitter"]').click(function (e) {
		var data = $(this).data();
		window.open('https://twitter.com/share?text=' + encodeURIComponent(data.message) + '&url=' + encodeURIComponent(data.link),
			'sharer', 'toolbar=0, status=0, width=626, height=436');

		ga('send', 'event', 'share', 'click', 'twitter');

		e.preventDefault();
	});

	$('a[href="#!/share/facebook"]').click(function (e) {
		var data = $(this).data();
		if (typeof FB !== 'undefined') {
			FB.ui({
				method: 'feed',
				name: data.title,
				link: data.link,
				picture: data.picture,
				description: data.message
			});
		}

		ga('send', 'event', 'share', 'click', 'facebook');

		e.preventDefault();
	});

	$(document).ready(function () {
		var myVideo=document.getElementById("video1");

		$('body').jpreLoader({
			splashID: "#preload",
			loaderVPos: '0%',
			autoClose: true,
			splashFunction: function() {
					scrollPlug();
			}
		}, function() {	//callback function
				opening();

				$('#preload').children('section').not('.selected').hide();
				$('#preload').hide().fadeIn(800);
				$('section').addClass('enabled');
				$('.hotspot').addClass('enabled');
		});

		function scrollPlug () {
			s = skrollr.init({
				edgeStrategy: 'set',
				easing: {
					WTF: Math.random,
					inverted: function(p) {
						return 1-p;
					}
				}
			});

			skrollr.menu.init(s, {
				animate: true,

				//The easing function to use.
				easing: 'sqrt',

				//Multiply your data-[offset] values so they match those set in skrollr.init
				scale: 2,

				//How long the animation should take in ms.
				duration: function(currentTop, targetTop) {
						//By default, the duration is hardcoded at 500ms.
						return Math.abs(currentTop - targetTop);

						//But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
						//return Math.abs(currentTop - targetTop) * 10;
				},
			});
		}

		//Animación opening

		function opening () {
			function loadImage(num) {
				$('section.home div.opening img').removeClass('enabled');
				$('section.home div.opening img.seq' + num + '').addClass('enabled');
			}

			setTimeout(function () {
				$('section.home div.tablet12 div.opening').addClass('enabled');

				var count = window.setInterval(function() {
					loadImage(num);
					num++;

					if(num >= 41) {
						window.clearInterval(count);
						$('section.home div.tablet12').addClass('enabled');
					}
				},100);
			}, 100);
		}

		function scrollEvent() {
				// Video autoplay
				if(parseInt($('#video').css('top')) <= 500) {
					myVideo.play();
					$('section.video .fa-play').addClass('disabled');
				}

				if(parseInt($('#video').css('top')) >= 500) {
					myVideo.pause();
					myVideo.currentTime = 0;
					$('section.video .fa-play').removeClass('disabled');
				}

				$('a[href="#/video/play"]').click(function (e) {
					myVideo.play();
					$('section.video .fa-play').addClass('disabled');

					e.preventDefault();
				});
				// Marcaje y main menu current section

				if ((s.getScrollTop() >= 0) && (s.getScrollTop() <= 1700) && (seccion != 0)) {
						 seccion = 0;
						 ga('send', 'pageview', 'home');

						 $('header nav li').removeClass('current');
						 $('header nav li:nth-of-type(1)').addClass('current');
				}

				if ((s.getScrollTop() >= 1800) && (s.getScrollTop() <= 3700) && (seccion != 1)) {
						 seccion = 1;
						 ga('send', 'pageview', 'spen');

						 $('header nav li').removeClass('current');
						 $('header nav li:nth-of-type(2)').addClass('current');
				}

				if ((s.getScrollTop() >= 3800) && (s.getScrollTop() <= 5100) && (seccion != 2)) {
						 seccion = 2;
						 ga('send', 'pageview', 'pantalla12.2');

						 $('header nav li').removeClass('current');
						 $('header nav li:nth-of-type(3)').addClass('current');
				}

				if ((s.getScrollTop() >= 5200) && (s.getScrollTop() <= 6200) && (seccion != 3)) {
						 seccion = 3;
						 ga('send', 'pageview', 'office');

						 $('header nav li').removeClass('current');
						 $('header nav li:nth-of-type(4)').addClass('current');
				}

				if ((s.getScrollTop() >= 6200) && (s.getScrollTop() <= 8100) && (seccion != 4)) {
						 seccion = 4;
						 ga('send', 'pageview', 'view360');

						 $('header nav li').removeClass('current');
						 $('header nav li:nth-of-type(5)').addClass('current');
				}

				if ((s.getScrollTop() >= 8200) && (seccion != 5)) {
						 seccion = 5;
						 ga('send', 'pageview', 'video');
				}
		};

		$(window).scroll(function () {
			scrollEvent();
		});

		window.addEventListener('touchmove', scrollEvent, false);
	});
});
