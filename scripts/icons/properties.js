var fay = $("[class*='fay-']").find('svg');

var getDefaultColor = function( el ){
	if ( el.attr('data-fay-color') ){
		return el.attr('data-fay-color');
	} else {
		return el.css('color');
	}
}

fay.each(function ( i ){
	var elParent = $(this).parent("[class*='fay-']");
	var path = $(this).find('path, circle');
	var defaultColor = getDefaultColor(elParent);

	$(this).css({
		'cursor' : 'pointer',
	});

	// Ensure items without fills don't get filled in
	if ( path.css('fill') == "rgb(0, 0, 0)" ){
		path.css({
			'fill' : defaultColor
		});
	}

	path.css({
		'stroke' : defaultColor
	});
	
});


// TODO
// Colors via css and data-attr
// Add stroke scaling
// Add spinners
// Play to pause
// Allow for declaring units (convert px to rem, etc)
// Set animation speed
