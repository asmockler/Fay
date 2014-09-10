$("[class*='fay-caret'").each(function ( i ){

	/////////////////////
	// DECLARING SCALE //
	/////////////////////


	var elementScale = $(this).attr('data-fay-scale');
	var size = elementScale / 200 || .25;
	var caret = $(this);

	//////////////////
	// BASIC SHAPES //
	//////////////////

	var caretDown = 'M ' + 0 + ' ' + 5*size + ' l ' + 25*size + ' ' + 43*size + ' l ' + 25*size + ' ' + -43*size + ' z';
	var caretRight = 'M ' + 5*size + ' ' + 0 + ' l ' + 43*size + ' ' + 25*size + ' l ' + -43*size + ' ' + 25*size + ' z'

	////////////////
	// ANIMATIONS //
	////////////////

	var rightToDown = function ( paper ){
		paper.animate({
			path: caretRight
		}, 0, function(){
			paper.animate({
				path: caretDown,
			}, 300, 'cubic-bezier(.82,.32,.51,.93)');
			caret.attr('direction', 'down');
		});
	}

	var downToRight = function ( paper ){
		paper.animate({
			path: caretDown
		}, 0, function(){
			paper.animate({
				path: caretRight
			}, 300, 'cubic-bezier(.82,.32,.51,.93)');
			caret.attr('direction', 'right');
		});
	}


	////////////////////////
	// INITIALIZE DRAWING //
	////////////////////////

	var paper = Raphael($(this)[0], 50*size, 50*size);
	var path = paper.path(caretRight);
	path.attr({
		'fill'            : '#000000'
	}).transform('R0');
	caret.attr('direction', 'right');

	$(this).on('click', function(){
		if ( caret.attr('direction') == 'down' ) {
			downToRight(path);
		} else if ( caret.attr('direction') == 'right' ) {
			rightToDown(path);
		}
	});
	

});
