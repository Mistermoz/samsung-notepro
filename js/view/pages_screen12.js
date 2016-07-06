$(function () {
	$(document).ready( function () {
		var div = $('div.tablet-fixed div.black');

		$('#btn').draggable({
			axis: 'x',
			cursor: 'move',        // sets the cursor apperance
			containment: '#drag-screen12',   // sets to can be dragged only within "#drg" element

			// when dragging stops
			drag: function(event, ui) {
			  // calculate the dragged distance, with the current X and Y position and the "xpos" and "ypos"
				var xmove = ui.position.left;

				// Muestra imagenes tab
				if (xmove < 50) {
					div.find('span').removeClass('enabled');
				}
				if (xmove >= 50) {
					div.find('span').addClass('enabled');
				}

				if (xmove < 100) {
					div.find('.window1').removeClass('enabled');
				}
				if (xmove >= 100) {
					div.find('.window1').addClass('enabled');
				}
				if (xmove < 225) {
					div.find('.window2').removeClass('enabled');
				}
				if (xmove >= 225) {
					div.find('.window2').addClass('enabled');
				}
				if (xmove < 350) {
					div.find('.window3').removeClass('enabled');
				}
				if (xmove >= 350) {
					div.find('.window3').addClass('enabled');
				}
				if (xmove < 450) {
					div.find('.window4').removeClass('enabled');
				}
				if (xmove >= 450) {
					div.find('.window4').addClass('enabled');
				}
			}
		});

		var videoCoffee = document.getElementById("video-coffee");

		videoCoffee.playbackRate -= .45;

		if(/Microsoft/.test(navigator.appName)) {
			$('#video-coffee').addClass('disabled');
		}
	});
});
