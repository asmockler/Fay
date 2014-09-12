$("[class*='fay-caret'").each(function ( i ){

	/////////////////////////////
	// DECLARING SPECIAL SCALE //
	/////////////////////////////

	var elementScale = $(this).attr('data-fay-scale');
	var size = elementScale / 200 || .25;
	var caret = $(this);

	/////////////////////
	// ANIMATION SPEED //
	/////////////////////

	var animationSpeed = $(this).attr('data-fay-speed') || 300;

	//////////////////
	// BASIC SHAPES //
	//////////////////

	var caretDown = 'M ' + 0 + ' ' + 0 + ' l ' + 24*size + ' ' + 42*size + ' l ' + 24*size + ' ' + -42*size + ' z';
	var caretRight = 'M ' + 0 + ' ' + 0 + ' l ' + 42*size + ' ' + 24*size + ' l ' + -42*size + ' ' + 24*size + ' z';
	var caretUp = 'M ' + 0 + ' ' + 50*size + ' l ' + 24*size + ' ' + -42*size + ' l ' + 24*size + ' ' + 42*size + ' z';
	var caretLeft = 'M ' + 50*size + ' ' + 0 + ' l ' + -42*size + ' ' + 24*size + ' l ' + 42*size + ' ' + 24*size + ' z';	
	var caretSpin = 'M ' + 8*size + ' ' + 5*size + ' l ' + 34*size + ' ' + 20*size + ' l ' + -34*size + ' ' + 20*size + ' z';

	////////////////
	// ANIMATIONS //
	////////////////

	var flip = function ( paper, start, end ){
		paper.animate({
			path: start
		}, 0, function(){
			paper.animate({
				path: end,
			}, animationSpeed, 'cubic-bezier(.82,.32,.51,.93)');
		});
	}

	var spin = function ( paper, start, rotation ){
		var trueRotation = parseInt(rotation, 10) + parseInt(start, 10);

		paper.animate({
			path: caretSpin,
			transform: 'R' + start
		}, 0, function(){
			paper.animate({
				transform: 'R' + trueRotation,
			}, animationSpeed, 'cubic-bezier(.82,.32,.51,.93)');
		});
	}

	///////////////////////////////
	// GET CARET CHARACTERISTICS //
	///////////////////////////////

	var findStartingRotation = function( el ) {
		var check = function ( c ){
			var result = el.hasClass( c );
			return result
		}

		if ( check('fay-caret-spin-down') || check('fay-caret-down') ){
			return 90;
		} else if ( check('fay-caret-spin-left') || check('fay-caret-left') ){
			return 180;
		} else if ( check('fay-caret-spin-up') || check('fay-caret-up') ){
			return 270;
		} else if ( check('fay-caret-spin-right') || check('fay-caret-right') ){
			return 0;
		} else {
			return 0;
		}
	}

	var findRotationAmount = function( attr, start ){
		var check = function ( c ){
			return attr == c;
		}

		if ( check('down') ){ return 90 - parseInt(start, 10) } 
		else if ( check('left') ) { return 180 - parseInt(start, 10) } 
		else if ( check('up') ) { return 270 - parseInt(start, 10) } 
		else if ( check('right') ) { return 0 - parseInt(start, 10) } 
		else {
			if ( startingRotation == 90 ){ return 180 }
			else if ( startingRotation == 180 ){ return 90 }
			if ( startingRotation == 270 ){ return 180 }
			else if ( startingRotation == 0 ){ return 90 }
		}
	}

	var findFlipDirection = function (el){
		var check = function ( c ){
			var result = el.hasClass( c );
			return result
		}

		if ( check('fay-caret-flip-down') ){
			return caretDown;
		} else if ( check('fay-caret-flip-left') ){
			return caretLeft;
		} else if ( check('fay-caret-flip-up') ){
			return caretUp;
		} else if ( check('fay-caret-flip-right') ){
			return caretRight;
		} else {
			return caretRight;
		}
	}

	var findFlipDestination = function (attr){
		var check = function ( c ){
			return attr == c;
		}

		if ( check('down') ){ return caretDown } 
		else if ( check('left') ) { return caretLeft } 
		else if ( check('up') ) { return caretUp } 
		else if ( check('right') ) { return caretRight } 
		else {
			if ( flipDirection == caretDown ){ return caretUp }
			else if ( flipDirection == caretLeft ){ return caretUp }
			if ( flipDirection == caretUp ){ return caretDown }
			else if ( flipDirection == caretRight ){ return caretDown }
		}
	}

	var startingRotation = findStartingRotation(caret);
	var rotationAmount = findRotationAmount( caret.attr('fay-destination'), startingRotation );
	var flipDirection = findFlipDirection(caret);
	var flipDestination = findFlipDestination( caret.attr('fay-destination'), startingRotation );

	////////////////////////
	// INITIALIZE DRAWING //
	////////////////////////

	var paper = Raphael($(this)[0], 50*size, 50*size);

	if( $(this).hasClass('fay-caret-spin-down') || $(this).hasClass('fay-caret-spin-left') || $(this).hasClass('fay-caret-spin-right') || $(this).hasClass('fay-caret-spin-up') || $(this).hasClass('fay-caret-spin'))
	{
		var path = paper.path(caretSpin);
		$(this).on('click', function(){
			if ( caret.attr('spun') == 'true') {
				spin(path, parseInt(startingRotation, 10) + parseInt(rotationAmount, 10), -rotationAmount);
				caret.attr('spun', 'false');
			} else if ( caret.attr('spun') == 'false' ){
				spin(path, startingRotation, rotationAmount);
				caret.attr('spun', 'true');
			} else {
				spin(path, startingRotation, rotationAmount);
				caret.attr('spun', 'true');
			};
		});
	} 
	else if ( $(this).hasClass('fay-caret-flip') || $(this).hasClass('fay-caret-flip-up') || $(this).hasClass('fay-caret-flip-right') || $(this).hasClass('fay-caret-flip-down') || $(this).hasClass('fay-caret-flip-left') )
	{
		var path = paper.path(flipDirection);
		$(this).on('click', function(){
			if ( caret.attr('flipped') == 'true' ) {
				flip(path, flipDestination, flipDirection);
				caret.attr('flipped', 'false');
			} else if ( caret.attr('flipped') == 'false' ) {
				flip(path, flipDirection, flipDestination);
				caret.attr('flipped', 'true');
			} else {
				flip(path, flipDirection, flipDestination);
				caret.attr('flipped', 'true');
			}
		});
	}

	path.attr({
		'fill'            : '#000000',
		'stroke-width'          : '0'
	}).transform('R' + startingRotation);

});
