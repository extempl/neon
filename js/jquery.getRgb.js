/*************************************************
**  jQuery getRgb (returns r, g, b in array from any color (rgb, hex))
**  copyright Anton Konovalov, licensed GPL & MIT
**  http://extempl.com/
**************************************************/
(function($) {

	var getHexRGBColor = function(color_) {
		var color = color_.replace(/\s/g,"");
		var aRGB = color.match(/^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i);

		if(aRGB) {
			color = '';
			for (var i=1;  i<=3; i++) color += Math.round((aRGB[i][aRGB[i].length-1]=="%"?2.55:1)*parseInt(aRGB[i])).toString(16).replace(/^(.)$/,'0$1');
		}
		else color = color.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, '$1$1$2$2$3$3');

		return color;
	};

	$.getRgb = function(color_) {
		var color = getHexRGBColor(color_);
		var matches = color.match(/^#?([\dabcdef]{2})([\dabcdef]{2})([\dabcdef]{2})$/i);

		if (!matches) return false;

		for (var i=1, rgb = new Array(3);  i<=3; i++) rgb[i-1] = parseInt(matches[i],16);

		return rgb;
	};

})(jQuery);