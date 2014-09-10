$("[class*='fay-loading-wave'").each(function ( i ){

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

	////////////////
	// ANIMATIONS //
	////////////////

	var waveAnimation = function( element ){
		element.animate({
			cy : 10*size
		}, 700, 'cubic-bezier(0,0,.5,1)', function(){
			element.animate({
				cy : 40*size
			}, 1400, 'cubic-bezier(.6,0,.6,1)', function(){
				element.animate({
					cy : 25*size
				}, 700, 'cubic-bezier(.5,0,1,1)', function(){
					waveAnimation(element);
				});
			});
		});
	}

	////////////////////////
	// INITIALIZE DRAWING //
	////////////////////////

	var paper = Raphael($(this)[0], 50*size, 50*size)

	// Draws Menu Icon or X depending on data-fay-open attribute
	var circleOne = paper.circle(5*size, 25*size, 2*size);
	var circleTwo = paper.circle(15*size, 25*size, 2*size);
	var circleThree = paper.circle(25*size, 25*size, 2*size);
	var circleFour = paper.circle(35*size, 25*size, 2*size);
	var circleFive = paper.circle(45*size, 25*size, 2*size);

	paper.forEach(function (el) {
		el.attr({
			'fill' : '#000',
			'stroke-width'    : strokeWidth,
		});
	});

	waveAnimation(circleOne);
	setTimeout(function(){
		waveAnimation(circleTwo)
	}, 150);
	setTimeout(function(){
		waveAnimation(circleThree)
	}, 300);
	setTimeout(function(){
		waveAnimation(circleFour)
	}, 450);
	setTimeout(function(){
		waveAnimation(circleFive)
	}, 600);

});
