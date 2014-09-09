$('.fay-chevron').each(function ( i ){

	/////////////////////
	// DECLARING SCALE //
	/////////////////////

	var elementScale = $(this).attr('data-fay-scale');
	var size = elementScale / 50 || 1;
	var strokeWidth = elementScale / 25 || 2;

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
			}, 300, '<>');
		});
	}

	var chevronDefaultDown = function ( paper ){
		paper.animate({
			path: chevronUp
		}, 0, function(){
			paper.animate({
				path: chevronDown
			}, 300, '<>');
		});
	}

	var chevronFanUp = function ( paper ){
		paper.animate({
			path: chevronDown
		}, 0, function(){
			paper.animate({
				path: 'M ' + 25*size + ' ' + 15*size + ' l ' + 0 + ' ' + 20*size + ' l ' + 0 + ' ' + -20*size
			}, 150, '<>', function(){
				paper.animate({
					path: 'M ' + 25*size + ' ' + 35*size + ' l ' + 0 + ' ' + -20*size + ' l ' + 0 + ' ' + 20*size
				}, 0, function(){
					paper.animate({
						path: chevronUp
					}, 150, '<>');
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
			}, 150, '<>', function(){
				paper.animate({
					path: 'M ' + 25*size + ' ' + 15*size + ' l ' + 0 + ' ' + 20*size + ' l ' + 0 + ' ' + -20*size
				}, 0, function(){
					paper.animate({
						path:chevronDown
					}, 150, '<>');
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
			}, 150, '<>', function(){
				paper.animate({
					path:chevronUp
				}, 150, '<>');
			});
		});
	}

	var chevronFlipDown = function ( paper ){
		paper.animate({
			path:chevronUp
		}, 0, function(){
			paper.animate({
				path: 'M ' + 25*size + ' ' + 15*size + ' l ' + 0 + ' ' + 20*size + ' l ' + 0 + ' ' + -20*size
			}, 150, '<>', function(){
				paper.animate({
					path:chevronDown
				}, 150, '<>');
			});
		});
	}

	var chevronSpringUp = function ( paper ){
		paper.animate({
			path:chevronDown
		}, 0, function(){
			paper.animate({
				path: 'M ' + 23*size + ' ' + 15*size + ' l ' + 2*size + ' ' + 20*size + ' l ' + 2*size + ' ' + -20*size
			}, 150, '<>', function(){
				paper.animate({
					path: chevronUp
				}, 150, '<>');
			});
		});
	}

	var chevronSpringDown = function ( paper ){
		paper.animate({
			path:chevronUp
		}, 0, function(){
			paper.animate({
				path: 'M ' + 23*size + ' ' + 35*size + ' l ' + 2*size + ' ' + -20*size + ' l ' + 2*size + ' ' + 20*size
			}, 150, '<>', function(){
				paper.animate({
					path:chevronDown
				}, 150, '<>');
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
			if ( $(this).hasClass('fay-chev-default-down') || $(this).hasClass('fay-chev-default') ) {
    			chevronDefaultDown(path);
    		} else if ( $(this).hasClass('fay-chev-fan-down') || $(this).hasClass('fay-chev-fan') ) {
    			chevronFanDown(path);
    		} else if ( $(this).hasClass('fay-chev-flip-down') || $(this).hasClass('fay-chev-flip') ) {
    			chevronFlipDown(path);
    		} else if ( $(this).hasClass('fay-chev-spring-down') || $(this).hasClass('fay-chev-spring') ) {
    			chevronSpringDown(path);
    		} else {
    			chevronDefaultDown(path);
    		}
			$(this).attr('data-fay-up', 'false');
		} else {
			if ( $(this).hasClass('fay-chev-default-up') || $(this).hasClass('fay-chev-default') ){
    			chevronDefaultUp(path);
    		} else if ( $(this).hasClass('fay-chev-fan-up') || $(this).hasClass('fay-chev-fan') ) {
    			chevronFanUp(path);
    		} else if ( $(this).hasClass('fay-chev-flip-up') || $(this).hasClass('fay-chev-flip') ) {
    			chevronFlipUp(path);
    		} else if ( $(this).hasClass('fay-chev-spring-up') || $(this).hasClass('fay-chev-spring') ){
    			chevronSpringUp(path);
    		} else {
    			chevronDefaultUp(path);
    		}
    		$(this).attr('data-fay-up', 'true');
		}
	});
});
