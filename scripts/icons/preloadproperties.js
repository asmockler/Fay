var preLoadProperties = function () {
	var fay = $("[class*='fay-']");

	fay.each(function ( i ){
		// Sets size using either data-fay-size, data-fay-scale, or defaulting to 2x the p size
		if ( $(this).attr('data-fay-size') ) {
			var sizeWithoutUnits = $(this).attr('data-fay-size').replace(/[^\d.]/g, '');
			$(this).attr('data-fay-size', sizeWithoutUnits);
		} else if ( $(this).attr('data-fay-scale') ) {
			var fontSize = $('p').css('font-size').replace( /[^\d.]/g, '' );
			var scaleAttr = $(this).attr('data-fay-scale').replace( /[^\d.]/g, '' );
			var trueScale = parseFloat(fontSize, 10)*parseFloat(scaleAttr, 10);
			var elScale = 10 * Math.round(trueScale/5);
			$(this).attr('data-fay-size', elScale);
		} else {
			var fontSize = $('p').css('font-size').replace( /[^\d.]/g, '' );
			var elScale = 10 * Math.round(fontSize/5);
			$(this).attr('data-fay-size', elScale);
		}
	});
}

preLoadProperties();

