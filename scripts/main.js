requirejs.config({
	"baseUrl": "scripts/icons",
	"paths": {
		"main"      : "../main",
		"jquery"    : "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
		"raphael"   : "../lib/raphael",
		"bootstrap" : "http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",
	}
});

requirejs(['jquery', 'raphael'], function ($, raphael){
	requirejs(['preloadproperties'], function (preloadproperties){
		requirejs(['menu', 'chevron', 'loadingwave', 'loadingspin', 'caret', 'play'], function (menu, chevron, loadingwave, loadingspin, caret, play){
			requirejs(['properties'], function (properties){

			});
		});
	});
});