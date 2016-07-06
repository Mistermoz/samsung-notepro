$(function () {
	'use strict';

	var myCanvas = document.getElementById("tools_sketch"), myCanvas2 = document.getElementById("tools_sketch_responsive");
	var ctx = myCanvas.getContext('2d'), ctx2 = myCanvas2.getContext('2d');

	$('div.tablet-fixed div.spen-apps-menu div.menu a').click(function (e) {
		var item = $(this).attr('href'),
		title = $(this).text(),
		desc = $(this).data('description');

		item = item.replace('#/item', '');

		$('div.tablet-fixed div.spen-apps div.item').removeClass('enabled');
		$('div.tablet-fixed div.spen-apps-menu div.bgs img').removeClass('enabled');
		$('div.tablet-fixed div.spen-apps-menu div.description').removeClass('enabled');

		$('div.tablet-fixed div.spen-apps-menu div.description h4').html(title);
		$('div.tablet-fixed div.spen-apps-menu div.description p').html(desc);

		setTimeout(function () {
			$('div.tablet-fixed div.spen-apps-menu div.description').addClass('enabled');
		}, 200);

		$('div.tablet-fixed div.spen-apps-menu div.bgs img:nth-of-type(' + item + ')').addClass('enabled');
		$('div.tablet-fixed div.spen-apps div.item' + item +'').addClass('enabled');
	});

	$('div.tablet-fixed div.spen-apps-menu div.menu a').click(function (e) {
		e.preventDefault();
	});

	$(document).ready(function () {
		var sk =  $('#tools_sketch').sketch(),
			sk2 =  $('#tools_sketch_responsive').sketch();

			sk.sketch().actions = [];       // this line empties the actions.

			ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

			sk2.sketch().actions = [];       // this line empties the actions.

			ctx2.clearRect(0, 0, myCanvas.width, myCanvas.height);

		$('div.tablet-fixed div.tools a').click(function (e) {
			e.preventDefault();
		});

		$('a[href="#eraser"]').click(function (e) {
			sk.sketch().actions = [];       // this line empties the actions.

			ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
			e.preventDefault();
		});

		$('a[href="#eraser_responsive"]').click(function (e) {
			sk2.sketch().actions = [];       // this line empties the actions.

			ctx2.clearRect(0, 0, myCanvas2.width, myCanvas2.height);
			e.preventDefault();
		});
	});
});
