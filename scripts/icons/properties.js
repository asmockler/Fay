var fay = $("[class*='fay-']").find('svg');

fay.each(function ( i ){
	var path = $(this).find('path, circle');
	var defaultColor = $('p').css('color');

	console.log(defaultColor);

	$(this).css({
		'cursor' : 'pointer',
	});

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
