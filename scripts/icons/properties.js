var fay = $("[class*='fay-']").find('svg');

fay.each(function ( i ){
	$(this).css({
		'cursor' : 'pointer'
	});

});


// TODO
// Add stroke scaling
// Add spinners
// Play to pause
// Solid carets
// Allow for declaring units (convert px to rem, etc)
// Set animation speed
