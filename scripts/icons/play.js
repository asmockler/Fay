$("[class*='fay-play']").each(function ( i ){

	/////////////////////
	// DECLARING SCALE //
	/////////////////////

	var size;
	if ( $(this).attr('data-fay-size') ){
		var elementScale = $(this).attr('data-fay-size');
		size = elementScale / 50 || 1;
	} else {
		console.error('Something is seriously wrong here. You screwed up the scale, bub.')
	}
	var strokeWidth;
	if ( $(this).attr('data-fay-stroke') ) {
		var strokeWidth = $(this).attr('data-fay-stroke')
	} else {
		if ( (elementScale / 25) < 2 ){
			strokeWidth = 2
		} else {
			strokeWidth = elementScale / 25 || 2;
		}
	}

	/////////////////////
	// ANIMATION SPEED //
	/////////////////////

	var animationSpeed = $(this).attr('data-fay-speed') || 300;

	//////////////////
	// BASIC SHAPES //
	//////////////////

	var play = 'M ' + 10*size + ' ' + 8*size + ' l ' + 28*size + ' ' + 17*size + ' l ' + -28*size + ' ' + 17*size + ' z';
	var pause = 'M ' + 10*size + ' ' + 10*size + ' l ' + 10*size + ' ' + 0 + ' l ' + 0 + ' ' + 30*size + ' l ' + -10*size + ' ' + 0 + ' l ' + 0 + ' ' + -30*size + ' M ' + 30*size + ' ' + 10*size + ' l ' + 10*size + ' ' + 0 + ' l ' + 0 + ' ' + 30*size + ' l ' + -10*size + ' ' + 0 + ' l ' + 0 + ' ' + -30*size;
	var pauseOffCanvas = 'M ' + -20*size + ' ' + 5*size + ' l ' + 15*size + ' ' + 0 + ' l ' + 0 + ' ' + 40*size + ' l ' + -15*size + ' ' + 0 + ' l ' + 0 + ' ' + -40*size + ' M ' + 55*size + ' ' + 5*size + ' l ' + 15*size + ' ' + 0 + ' l ' + 0 + ' ' + 40*size + ' l ' + -15*size + ' ' + 0 + ' l ' + 0 + ' ' + -40*size;
	var nothing = 'M ' + 25*size + ' ' + 25*size + ' l ' + 1 + ' ' + 1;
	var stop = 'M ' + 11*size + ' ' + 11*size + ' l ' + 28*size + ' ' + 0 + ' l ' + 0 + ' ' + 28*size + ' l ' + -28*size + ' ' + 0 + ' z';

	////////////////
	// ANIMATIONS //
	////////////////

	var playToPause = function ( paper ){
		paper.animate({
			path: play
		}, 0, function(){
			paper.animate({
				path: nothing
			}, animationSpeed*.5, Easings.easeIn, function(){
				paper.animate({
					path: pause
				}, animationSpeed*.5, Easings.easeOut);
			});
		});
	}

	var pauseToPlay = function ( paper ){
		paper.animate({
			path: pause
		}, 0, function(){
			paper.animate({
				path: nothing
			}, animationSpeed*.5, Easings.easeIn, function(){
				paper.animate({
					path: play
				}, animationSpeed*.5, Easings.easeOut)
			});
		});
	}

	var playToPauseZoom = function ( paper ){
		paper.animate({
			path: play
		}, 0, function(){
			paper.animate({
				path: nothing
			}, animationSpeed*.5, Easings.easeIn, function(){
				paper.animate({
					path: pauseOffCanvas
				}, 0, '<>', function(){
					paper.animate({
						path: pause
					}, animationSpeed*1.5, Easings.easeOut)
				})
			})
		})
	}

	var pauseToPlayZoom = function ( paper ){
		paper.animate({
			path: pause
		}, 0, function(){
			paper.animate({
				path: pauseOffCanvas
			}, animationSpeed*.75, Easings.easeIn, function(){
				paper.animate({
					path: nothing
				}, 0, function(){
					paper.animate({
						path: play
					}, animationSpeed, Easings.easeOut);
				});
			});
		});
	}

	var playToStop = function ( paper ){
		paper.animate({
			path: play
		}, 0, function(){
			paper.animate({
				path: stop
			}, animationSpeed, Easings.easeOut);
		});
	}

	var stopToPlay = function ( paper ){
		paper.animate({
			path: stop
		}, 0, function(){
			paper.animate({
				path: play
			}, animationSpeed, Easings.easeOut);
		});
	}


	////////////////////////
	// INITIALIZE DRAWING //
	////////////////////////

	var paper = Raphael($(this)[0], 50*size, 50*size);

    // Checks for class; returns true or false
	var check = function ( el, fayClass ){
		if ( el.hasClass(fayClass) ){
			return true
		} else {
			return false
		}
	}

	if ( !$(this).attr('data-fay-play') ) {
		$(this).attr('data-fay-play', 'true')
	}

	if ( $(this).attr('data-fay-play') === 'true' ){
		var path = paper.path(play);
	} else if ( $(this).attr('data-fay-play') === 'false' ){
		if( check($(this), 'fay-play-stop' ) ){
			var path = paper.path(stop);
		} else {
			var path = paper.path(pause)
		}
	}

	path.attr({
		'fill' : 'black',
		'line-join' : 'rounded'
	});
    
   	// Click and animation logic
   	$(this).on('click', function(){
   		if( $(this).attr('data-fay-play') === 'true' ){
   			if ( check($(this), 'fay-play-default') ){
   				playToPause(path);
   			} else if ( check($(this), 'fay-play-zoom' ) ){
   				playToPauseZoom(path);
   			} else if ( check($(this), 'fay-play-stop') ){
   				playToStop(path);
   			}
   			$(this).attr('data-fay-play', 'false')
   		} else {
   			if( check($(this), 'fay-play-default' ) ){
   				pauseToPlay(path);
   			} else if ( check($(this), 'fay-play-zoom') ){
   				pauseToPlayZoom(path)
   			} else if ( check($(this), 'fay-play-stop') ){
   				stopToPlay(path)
   			}
   			$(this).attr('data-fay-play', 'true') 
   		}
   	});
});
