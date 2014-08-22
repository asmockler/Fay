// #############################
// ##                         ##
// ## SVG PATHS FOR EACH ICON ##
// ##                         ##
// #############################

// CHEVRON-UP

var PathChevronUp = function ( size ) {
	var scale = size / 50
	var path = 'M 5 35 l 20 -20 l 20 20'
	var scaled =  'M ' + 5*scale + ' ' + 35*scale + ' l ' + 20*scale + ' ' + -20*scale + ' l ' + 20*scale + ' ' + 20*scale

	return scaled
}

var PathChevronDown = function ( size ) {
	var scale = size / 50
	var path = 'M 5 15 l 20 20 l 20 -20'
	var scaled =  'M ' + 5*scale + ' ' + 15*scale + ' l ' + 20*scale + ' ' + 20*scale + ' l ' + 20*scale + ' ' + -20*scale

	return scaled
}

var MenuBars = function ( size ){
	var scale = size / 50
	var path = ''
}