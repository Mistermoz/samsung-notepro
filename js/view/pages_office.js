$(function () {
	'use strict';

	var it ='';

	$(document).ready( function () {
		var div = $('div.tablet-fixed div.black');

		$('#btn-office').draggable({
			axis: 'x',
			cursor: 'move',        // sets the cursor apperance
			containment: '#drag-office',   // sets to can be dragged only within "#drg" element

			// when dragging stops
			drag: function(event, ui) {
			  // calculate the dragged distance, with the current X and Y position and the "xpos" and "ypos"
				var xmove = ui.position.left, doc = '', num = 1;

				// Muestra imagenes tab
				if((xmove%20) === 0) {
					if(xmove <= 40) {
						clearInterval(it);
						$('div.office-bg img').removeClass('enabled');
					}
					if(xmove == 0) {
						$('div.office-bg').removeClass('active');
					}
					if(xmove >= 40) {
						$('div.documents-office img').removeClass('enabled');
					}
					if(xmove >= 100) {
						$('div.office-bg').addClass('active');
					}
					if(xmove <= 100) {
						$('div.office-bg img.bg1').removeClass('enabled');
					}
					if(xmove >= 100) {
						$('div.office-bg img').removeClass('enabled');
						$('div.office-bg img.bg1').addClass('enabled');
					}
					if(xmove >= 200) {
						$('div.office-bg img').removeClass('enabled');
						$('div.office-bg img.bg2').addClass('enabled');
					}
					if(xmove >= 300) {
						$('div.office-bg img').removeClass('enabled');
						$('div.office-bg img.bg3').addClass('enabled');
					}

					if(xmove >= 400) {
						it = window.setInterval(function() {
							$('div.office-bg img').removeClass('enabled');
							$('div.office-bg img.bg' + num + '').addClass('enabled');

							if(num <3) {
								num++;
							} else {
								num = 1;
							}
						},3000);
					}else {
						clearInterval(it);
					}
					$('.document' + xmove + '').addClass('enabled');
				}
			}
		});
	})

});
