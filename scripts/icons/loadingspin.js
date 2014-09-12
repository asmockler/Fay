$("[class*='fay-loading-spin'").each(function ( i ){

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

	////////////////////////
	// INITIALIZE DRAWING //
	////////////////////////

	var paper = Raphael($(this)[0], 50*size, 50*size)

	var circleOne = paper.circle(25, 5, 2);
	var circleTwo = paper.circle(40, 10, 2);
	var circleThree = paper.circle(45, 25, 2);
	var circleFour = paper.circle(40, 40, 2);
	var circleFive = paper.circle(25, 45, 2);
	var circleSix = paper.circle(10, 40, 2);
	var circleSeven = paper.circle(5, 25, 2);
	var circleEight = paper.circle(10, 10, 2);

	paper.forEach(function (el) {
		el.attr({
			'fill' : '#000',
			'stroke-width'    : strokeWidth,
		});
	});

	////////////////
	// ANIMATIONS //
	////////////////

	var circleOneAnim = function(){
		circleOne.animate({
			cx : 40,
			cy : 10
		}, 500, 'linear', function(){
			this.animate({
				cx : 25,
				cy : 5
			}, 0, function(){
				circleOneAnim();
			})
		});
	}

	var circleTwoAnim = function(){
		circleTwo.animate({
			cx : 45,
			cy : 25,
		}, 500,'linear', function(){
			this.animate({
				cx : 40,
				cy : 10
			}, 0, function(){
				circleTwoAnim();
			})
		});
	}

	var circleThreeAnim = function(){
		circleThree.animate({
			cx : 40,
			cy : 40,
		}, 500, 'linear', function(){
			this.animate({
				cx : 45,
				cy : 25
			}, 0, function(){
				circleThreeAnim();
			})
		});
	}

	var circleFourAnim = function(){
		circleFour.animate({
			cx : 25,
			cy : 45
		}, 500, 'linear', function(){
			this.animate({
				cx : 40,
				cy : 40
			}, 0, function(){
				circleFourAnim();
			})
		});
	}

	var circleFiveAnim = function(){
		circleFive.animate({
			cx : 10,
			cy : 40,
		}, 500, 'linear', function(){
			this.animate({
				cx : 25,
				cy : 45
			}, 0, function(){
				circleFiveAnim();
			})
		});
	}

	var circleSixAnim = function(){
		circleSix.animate({
			cx : 5,
			cy : 25,
		}, 500, 'linear', function(){
			this.animate({
				cx : 10,
				cy : 40
			}, 0, function(){
				circleSixAnim();
			})
		});
	}

	var circleSevenAnim = function(){
		circleSeven.animate({
			cx : 10,
			cy : 10,
		}, 500, function(){
			this.animate({
				cx : 5,
				cy : 25
			}, 0, 'linear', function(){
				circleSevenAnim();
			})
		});
	}

	var circleEightAnim = function(){
		circleEight.animate({
			cx : 25,
			cy : 5,
		}, 500, function(){
			this.animate({
				cx : 10,
				cy : 10
			}, 0, 'linear', function(){
				circleEightAnim();
			})
		});
	}

	circleOneAnim();
	circleTwoAnim();
	circleThreeAnim();
	circleFourAnim();
	circleFiveAnim();
	circleSixAnim();
	circleSevenAnim();
	circleEightAnim();

});
