$("[class*='fay-menu'").each(function ( i ){

	/////////////////////
	// DECLARING SCALE //
	/////////////////////

	var elementScale = $(this).attr('data-fay-scale');
	var size = elementScale / 50 || 1;
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
	console.log(strokeWidth)

	/////////////////////
	// ANIMATION SPEED //
	/////////////////////

	var animationSpeed = $(this).attr('data-fay-speed') || 300;

	//////////////////
	// BASIC SHAPES //
	//////////////////

	var menuBars = 'M ' + 5*size + ' ' + 15*size + ' l ' + 40*size + ' ' + 0 + ' M ' + 5*size + ' ' + 25*size + ' l ' + 40*size + ' ' + 0 + ' M ' + 5*size + ' ' + 35*size + ' l ' + 40*size + ' ' + 0
	var menuX = 'M ' + 10*size + ' ' + 10*size + ' l ' + 30*size + ' ' + 30*size + ' M ' + 10*size + ' ' + 40*size + ' l ' + 30*size + ' ' + -30*size

	////////////////
	// ANIMATIONS //
	////////////////

	var menuDefaultOpen = function ( paper ){
		paper.animate({
			path: menuBars,
			transform: 'r0'
		}, 0, function(){
			paper.animate({
				transform: 'R180'
			}, 0, function(){
				paper.animate({
					path: menuX,
					transform: 'r0'
				}, animationSpeed, function(){
					paper.animate({
						transform: 'R180'
					});
				});
			});
		});
	}

	var menuDefaultClose = function ( paper ){
		paper.animate({
			path: menuX,
			transform: 'R180'
		}, 0, function(){
			paper.animate({
				path: menuBars,
				transform: 'r0'
			}, animationSpeed, function(){
				paper.animate({
					transform: 'R180'
				});
			});
		});
	}

	var menuSpinOpen = function ( paper ){
		paper.animate({
			transform: 'R0'
		}, 0, function(){
			paper.animate({
				path: menuX,
				transform:'R180'
			}, animationSpeed, '<>', function(){
				paper.animate({
					transform:'R0'
				}, 0);
			});
		});
	}

	var menuSpinClose = function ( paper ){
		paper.animate({
			transform: 'R180'
		}, 0, function(){
			paper.animate({
				path: menuBars,
				transform: 'R0'
			}, animationSpeed, '<>')
		})	
	}

	var menuFoldOpen = function ( paper ){
		paper.animate({
			path: 'M ' + 25*size + ' ' + 10*size + ' ' + ' l ' +  0 + ' ' + 30*size + ' M ' + 25*size + ' ' + 10*size + ' l ' + 0 + ' ' + 30*size + ' M ' + 25*size + ' ' + 10*size + ' l ' + 0 + ' ' + 30*size
		}, animationSpeed*.5, '<>', function() {
			paper.animate({
				path: 'M ' + 25*size + ' ' + 10*size + ' l ' + 0 + ' ' + 30*size + ' M ' + 25*size + ' ' + 10*size + ' l ' + 0 + ' ' + 30*size
			}, 0, function(){
				paper.animate({
					path: menuX
				}, animationSpeed*.5);
			});
		});
	}

	var menuFoldClose = function ( paper ){
		paper.animate({
			path: menuBars
		}, animationSpeed*.5)
	}

	var menuFloatOpen = function ( paper ){
		paper.animate({
			path: 'M ' + 5*size + ' ' + 25*size + ' l ' + 40*size + ' ' + 0 + ' M ' + 5*size + ' ' + 25*size + ' l ' + 40*size + ' ' + 0 + ' M ' + 5*size + ' ' + 25*size + ' l ' + 40*size + ' ' + 0
		}, animationSpeed*.5, '<>', function(){
			paper.animate({
				path: 'M ' + 5*size + ' ' + 25*size + ' l ' + 40*size + ' ' + 0 + ' M ' + 5*size + ' ' + 25*size + ' l ' + 40*size + ' ' + 0				
			}, 0, function(){
				paper.animate({
					path: menuX
				}, animationSpeed*.5, '<>');
			});
		});
	}

	var menuFloatClose = function ( paper ){
		paper.animate({
			path: 'M ' + 5*size + ' ' + 25*size + ' l ' + 40*size + ' ' + 0 + ' M ' + 5*size + ' ' + 25*size + ' l ' + 40*size + ' ' + 0
		}, animationSpeed*.5, '<>', function(){
			paper.animate({
				path: 'M ' + 5*size + ' ' + 25*size + ' l ' + 40*size + ' ' + 0 + ' M ' + 5*size + ' ' + 25*size + ' l ' + 40*size + ' ' + 0 + ' M ' + 5*size + ' ' + 25*size + ' l ' + 40*size + ' ' + 0
			}, 0, function(){
				paper.animate({
					path: 'M ' + 5*size + ' ' + 15*size + ' l ' + 40*size + ' ' + 0 + ' M ' + 5*size + ' ' + 25*size + ' l ' + 40*size + ' ' + 0 + ' M ' + 5*size + ' ' + 35*size + ' l ' + 40*size + ' ' + 0
				}, animationSpeed*.5, '<>');
			});
		});
	}

	////////////////////////
	// INITIALIZE DRAWING //
	////////////////////////

	var paper = Raphael($(this)[0], 50*size, 50*size)

	// Draws Menu Icon or X depending on data-fay-open attribute
	if ( $(this).attr('data-fay-open') == "true" ){
		var path = paper.path(menuX).transform('R180')
	} else {
    	var path = paper.path(menuBars)
	}

	path.attr({
		'stroke-linejoin' : 'round',
		'stroke-width'    : strokeWidth,
		'stroke-linecap'  : 'round'
	});
    
   	// Click and animation logic
	$(this).on('click', function(){
		if ( $(this).attr('data-fay-open') == 'true' ){
			if ( $(this).hasClass('fay-menu-spin-close') ){
				menuSpinClose(path);
			} else if ( $(this).hasClass('fay-menu-fold-close') ){
				menuFoldClose(path);
			} else if ( $(this).hasClass('fay-menu-default-close') ) {
    			menuDefaultClose(path);
    		} else if ( $(this).hasClass('fay-menu-float-close') ){
    			menuFloatClose(path);
    		} else if ( $(this).hasClass('fay-menu-spin') ) {
				menuSpinClose(path);    			
    		} else if ( $(this).hasClass('fay-menu-fold') ) {
				menuFoldClose(path);
    		} else if ( $(this).hasClass('fay-menu-float') ){
    			menuFloatClose(path);
    		} else if ( $(this).hasClass('fay-menu-default') ) {
				menuDefaultClose(path);
    		} else {
    			menuDefaultClose(path);
    		}
			$(this).attr('data-fay-open', 'false');
		} else {
			if ( $(this).hasClass('fay-menu-spin-open') ){
				menuSpinOpen(path);
			} else if ($(this).hasClass('fay-menu-fold-open') ){
				menuFoldOpen(path);
			} else if ( $(this).hasClass('fay-menu-default-open') ) {
    			menuDefaultOpen(path);
    		} else if ( $(this).hasClass('fay-menu-float-open') ) {
    			menuFloatOpen(path);
    		} else if ( $(this).hasClass('fay-menu-spin') ) {
				menuSpinOpen(path);    			
    		} else if ( $(this).hasClass('fay-menu-fold') ) {
				menuFoldOpen(path);
    		} else if ( $(this).hasClass('fay-menu-float') ) {
    			menuFloatOpen(path);
    		} else if ( $(this).hasClass('fay-menu-default') ) {
				menuDefaultOpen(path);
    		} else {
    			menuDefaultOpen(path);
    		}
    		$(this).attr('data-fay-open', 'true');
		}
	});
});
