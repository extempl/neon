/*************************************************
**  jQuery neon version 1.2.0
**  copyright Anton Konovalov, licensed GPL & MIT
**  http://extempl.com/
**  requires:getRgb
**************************************************/

(function($) {

	var random = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	var textShadowRow = function(rgb, width, transparency) {
		return '0 0 ' + width + 'em ' + 'rgba('+ rgb[0] +', ' + rgb[1] + ', ' + rgb[2] + ', ' + transparency + ')';
	};

	var textShadow = function(rgb) {
		return textShadowRow(rgb, 0.1, 0.6) + ', ' +
			textShadowRow(rgb, 0.6, 0.2) + ', ' +
			textShadowRow(rgb, 1.2, 0.4) + ', ' +
			textShadowRow(rgb, 1.8, 0.6) + ', ' +
			textShadowRow(rgb, 2.4, 0.8) + ', ' +
			'.02em .02em  .1em rgba(0, 0, 0, 0.8)';
	};

	var eachInitNeon = function() {
		$(this).blinkNeon({color: $(this).css('color')});
	};

	$.initNeon = function() {

		var blinksParam = "[data-neon-params='blinks']";

		$("[data-neon='basic']")
			.filter(blinksParam)
			.each(eachInitNeon);

		$("[data-neon='custom']")
			.find(blinksParam)
			.each(eachInitNeon);

		generateNeon($("[data-neon='auto']"))
			.find(blinksParam)
			.each(eachInitNeon);

	};


	var generateNeon = function($elem) {

		$elem.html($elem.text().replace(/./g , '<span>$&</span>'));

		$elem.children().each(function() {
			var rgb = [random(10, 255), random(10, 255), random(10, 255)];
			$(this).css({
				color     : 'rgb(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ')',
				textShadow: textShadow(rgb)
			});
			if(random(0, 10) == 10) {
				$(this).attr('data-neon-params', 'blinks');
			}
		});

		return $elem;

	};

	$.fn.blinkNeon = function(options) {

		var $elem = $(this);

		options = $.extend({
			state   : 'on',
			color   : '#fff',
			colorOff: '#444',
			textShadowOff: '.02em .02em  .1em rgba(0, 0, 0, 0.8)',
			rgb: $.getRgb(options.color)
		}, options);

		if(options.state == 'off')
			$elem.css({
				color     : options.color,
				textShadow: textShadow(options.rgb)
			});
		else
			$elem.css({
				color     : options.colorOff,
				textShadow: options.textShadowOff
			});

		setTimeout(function() {
			$elem.blinkNeon({
				state: (options.state == 'on' ? 'off' : 'on'),
				color: options.color,
				rgb  : options.rgb
			})
		}, random(100, 1500));

	};

})(jQuery);