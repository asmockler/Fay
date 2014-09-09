$("[class*='fay-loading'").each(function ( i ){

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

	//////////////////
	// BASIC SHAPES //
	//////////////////

	var loadingCircle = '';
	var loadingWave = '';

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
				}, 300, function(){
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
			}, 300, function(){
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
			}, 300, '<>', function(){
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
			}, 300, '<>')
		})	
	}

	var menuFoldOpen = function ( paper ){
		paper.animate({
			path: 'M ' + 25*size + ' ' + 10*size + ' ' + ' l ' +  0 + ' ' + 30*size + ' M ' + 25*size + ' ' + 10*size + ' l ' + 0 + ' ' + 30*size + ' M ' + 25*size + ' ' + 10*size + ' l ' + 0 + ' ' + 30*size
		}, 150, '<>', function() {
			paper.animate({
				path: 'M ' + 25*size + ' ' + 10*size + ' l ' + 0 + ' ' + 30*size + ' M ' + 25*size + ' ' + 10*size + ' l ' + 0 + ' ' + 30*size
			}, 0, function(){
				paper.animate({
					path: menuX
				}, 150);
			});
		});
	}

	var menuFoldClose = function ( paper ){
		paper.animate({
			path: menuBars
		}, 150)
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
			} else if ($(this).hasClass('fay-menu-fold-close') ){
				menuFoldClose(path);
			} else if ( $(this).hasClass('fay-menu-default-close') ) {
    			menuDefaultClose(path);
    		} else if ( $(this).hasClass('fay-menu-spin') ) {
				menuSpinClose(path);    			
    		} else if ( $(this).hasClass('fay-menu-fold') ) {
				menuFoldClose(path);
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
    		} else if ( $(this).hasClass('fay-menu-spin') ) {
				menuSpinOpen(path);    			
    		} else if ( $(this).hasClass('fay-menu-fold') ) {
				menuFoldOpen(path);
    		} else if ( $(this).hasClass('fay-menu-default') ) {
				menuDefaultOpen(path);
    		} else {
    			menuDefaultOpen(path);
    		}
    		$(this).attr('data-fay-open', 'true');
		}
	});
});
