$("[class*='fay-chevron'").each(function ( i ){

	/////////////////////
	// DECLARING SCALE //
	/////////////////////

	var elementScale = $(this).attr('data-fay-scale');
	var size = elementScale / 50 || 1;
	if ( $(this).attr('data-fay-stroke') ) {
		var strokeWidth = $(this).attr('data-fay-stroke')
	} else {
		var strokeWidth = elementScale / 25 || 2;
	}

	/////////////////////
	// ANIMATION SPEED //
	/////////////////////

	var animationSpeed = $(this).attr('data-fay-speed') || 300;

	//////////////////
	// BASIC SHAPES //
	//////////////////

	var chevronDown = 'M ' + 5*size + ' ' + 15*size + ' l ' + 20*size + ' ' + 20*size + ' l ' + 20*size + ' ' + -20*size
	var chevronUp = 'M ' + 5*size + ' ' + 35*size + ' l ' + 20*size + ' ' + -20*size + ' l ' + 20*size + ' ' + 20*size

	////////////////
	// ANIMATIONS //
	////////////////

	var chevronDefaultUp = function ( paper ){
		paper.animate({
			path: chevronDown
		}, 0, function(){
			paper.animate({
				path: chevronUp
			}, animationSpeed*.75, '<>');
		});
	}

	var chevronDefaultDown = function ( paper ){
		paper.animate({
			path: chevronUp
		}, 0, function(){
			paper.animate({
				path: chevronDown
			}, animationSpeed*.75, '<>');
		});
	}

	var chevronFanUp = function ( paper ){
		paper.animate({
			path: chevronDown
		}, 0, function(){
			paper.animate({
				path: 'M ' + 25*size + ' ' + 15*size + ' l ' + 0 + ' ' + 20*size + ' l ' + 0 + ' ' + -20*size
			}, animationSpeed*.5, '<>', function(){
				paper.animate({
					path: 'M ' + 25*size + ' ' + 35*size + ' l ' + 0 + ' ' + -20*size + ' l ' + 0 + ' ' + 20*size
				}, 0, function(){
					paper.animate({
						path: chevronUp
					}, animationSpeed*.5, '<>');
				});
			});
		});
	}

	var chevronFanDown = function ( paper ){
		paper.animate({
			path: chevronUp
		}, 0, function(){
			paper.animate({
				path: 'M ' + 25*size + ' ' + 35*size + ' l ' + 0 + ' ' + -20*size + ' l ' + 0 + ' ' + 20*size
			}, animationSpeed*.5, '<>', function(){
				paper.animate({
					path: 'M ' + 25*size + ' ' + 15*size + ' l ' + 0 + ' ' + 20*size + ' l ' + 0 + ' ' + -20*size
				}, 0, function(){
					paper.animate({
						path:chevronDown
					}, animationSpeed*.5, '<>');
				});
			});
		});
	}

	var chevronFlipUp = function ( paper ){
		paper.animate({
			path:chevronDown
		}, 0, function(){
			paper.animate({
				path: 'M ' + 25*size + ' ' + 35*size + ' l ' + 0 + ' ' + -20*size + ' l ' + 0 + ' ' + 20*size
			}, animationSpeed*.5, '<>', function(){
				paper.animate({
					path:chevronUp
				}, animationSpeed*.5, '<>');
			});
		});
	}

	var chevronFlipDown = function ( paper ){
		paper.animate({
			path:chevronUp
		}, 0, function(){
			paper.animate({
				path: 'M ' + 25*size + ' ' + 15*size + ' l ' + 0 + ' ' + 20*size + ' l ' + 0 + ' ' + -20*size
			}, animationSpeed*.5, '<>', function(){
				paper.animate({
					path:chevronDown
				}, animationSpeed*.5, '<>');
			});
		});
	}

	var chevronSpringUp = function ( paper ){
		paper.animate({
			path:chevronDown
		}, 0, function(){
			paper.animate({
				path: 'M ' + 23*size + ' ' + 15*size + ' l ' + 2*size + ' ' + 20*size + ' l ' + 2*size + ' ' + -20*size
			}, animationSpeed*.5, '<>', function(){
				paper.animate({
					path: chevronUp
				}, animationSpeed*.5, '<>');
			});
		});
	}

	var chevronSpringDown = function ( paper ){
		paper.animate({
			path:chevronUp
		}, 0, function(){
			paper.animate({
				path: 'M ' + 23*size + ' ' + 35*size + ' l ' + 2*size + ' ' + -20*size + ' l ' + 2*size + ' ' + 20*size
			}, animationSpeed*.5, '<>', function(){
				paper.animate({
					path:chevronDown
				}, animationSpeed*.5, '<>');
			});
		});
	}

	////////////////////////
	// INITIALIZE DRAWING //
	////////////////////////

	var paper = Raphael($(this)[0], 50*size, 50*size)

	// Draws Menu Icon or X depending on data-fay-open attribute
	if ( $(this).attr('data-fay-up') == "true" ){
		var path = paper.path(chevronUp)
	} else {
    	var path = paper.path(chevronDown)
	}

	path.attr({
		'stroke-linejoin' : 'round',
		'stroke-width'    : strokeWidth,
		'stroke-linecap'  : 'round'
	});
    
   	// Click and animation logic
	$(this).on('click', function(){
		if ( $(this).attr('data-fay-up') == 'true' ){
			if ( $(this).hasClass('fay-chevron-default-down') || $(this).hasClass('fay-chevron-default') ) {
    			chevronDefaultDown(path);
    		} else if ( $(this).hasClass('fay-chevron-fan-down') || $(this).hasClass('fay-chevron-fan') ) {
    			chevronFanDown(path);
    		} else if ( $(this).hasClass('fay-chevron-flip-down') || $(this).hasClass('fay-chevron-flip') ) {
    			chevronFlipDown(path);
    		} else if ( $(this).hasClass('fay-chevron-spring-down') || $(this).hasClass('fay-chevron-spring') ) {
    			chevronSpringDown(path);
    		} else {
    			chevronDefaultDown(path);
    		}
			$(this).attr('data-fay-up', 'false');
		} else {
			if ( $(this).hasClass('fay-chev-default-up') || $(this).hasClass('fay-chevron-default') ){
    			chevronDefaultUp(path);
    		} else if ( $(this).hasClass('fay-chevron-fan-up') || $(this).hasClass('fay-chevron-fan') ) {
    			chevronFanUp(path);
    		} else if ( $(this).hasClass('fay-chevron-flip-up') || $(this).hasClass('fay-chevron-flip') ) {
    			chevronFlipUp(path);
    		} else if ( $(this).hasClass('fay-chevron-spring-up') || $(this).hasClass('fay-chevron-spring') ){
    			chevronSpringUp(path);
    		} else {
    			chevronDefaultUp(path);
    		}
    		$(this).attr('data-fay-up', 'true');
		}
	});
});
