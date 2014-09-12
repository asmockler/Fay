requirejs.config({
	"baseUrl": "scripts/icons",
	"paths": {
		"main"      : "../main",
		"jquery"    : "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
		"raphael"   : "../lib/raphael",
		"bootstrap" : "http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",
		"menu"      : "menu",
		"chevron"   : "chevron"
	}
});

requirejs(['jquery', 'raphael'],
	function ($,      raphael){
		requirejs(['menu', 'chevron', 'loadingwave', 'loadingspin', 'caret'], function(menu, chevron, loadingwave, loadingspin, caret){
			requirejs(['properties'], function(properties){})
		});
});

