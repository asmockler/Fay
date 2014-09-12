var fay = $("[class*='fay-']").find('svg');

var getDefaultColor = function( el ){
	if ( el.attr('data-fay-color') ){
		return el.attr('data-fay-color');
	} else {
		return el.css('color');
	}
}

var getOpacity = function( el ){
	if ( el.attr('data-fay-opacity') ){
		return el.attr('data-fay-opacity');
	} else {
		return el.css('opacity');
	}
}

fay.each(function ( i ){
	var elParent = $(this).parent("[class*='fay-']");
	var path = $(this).find('path, circle');
	var defaultColor = getDefaultColor(elParent);
	var opacity = getOpacity(elParent);

	$(this).css({
		'cursor' : 'pointer',
	});

	// Ensure items without fills don't get filled in
	if ( path.css('fill') == "rgb(0, 0, 0)" ){
		path.css({
			'fill' : defaultColor,
		});
	}

	path.css({
		'stroke' : defaultColor,
		'opacity' : opacity
	});	
});

// TODO
// Fix chevron mix-and-match
// Allow for declaring units (convert px to rem, etc)
// Finish stroke scaling for chevrons
// Add opacity to properties
// Fix spinners
// Play to pause
// Check for unnecessary animation steps (chevrons especially)
