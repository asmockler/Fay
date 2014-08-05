window.onload = function() {

    // ##### Flip Animation #####

    var flip = new Raphael(document.getElementById('flip-over'), 50, 50);
    var chevronFlip = flip.path('M 5 15 l 20 20 l 20 -20');
    chevronFlip.attr({
        'stroke-linejoin': 'round',
        'stroke-width': 2
    });

    flipDownToUp = function (el) {

        el.animate({
            path: 'M 5 35 l 20 -20 l 20 20'
        }, 200, '<<>>');

        $('#flip-over').attr('down', 'false');
    },

    flipUpToDown = function (el) {

        el.animate({
            path: 'M 5 15 l 20 20 l 20 -20'
        }, 200, '<<>>');

        $('#flip-over').attr('down', 'true');
    },

    $('#flip-over').click(function(){
        if ( $(this).attr('down') == "true" ){
            flipDownToUp(chevronFlip);
        } else {
            flipUpToDown(chevronFlip);
        }
    });


    // ##### Fan In Out 1 #####

    var fanInOut = new Raphael(document.getElementById('fan-in-out'), 50, 50);
    var chevronFanInOut = fanInOut.path('M 5 15 l 20 20 l 20 -20');
    chevronFanInOut.attr({
        'stroke-linejoin': 'round',
        'stroke-width': 2
    });

    fanDownToUp = function(el) {
        el.animate({
            path: 'M 25 15 l 0 20 l 0 -20'
        }, 150, '<>', function(){
            el.animate({
                path: 'M 25 35 l 0 -20 l 0 20'
            }, 100, '<>', function(){
                el.animate({
                    path: 'M 5 35 l 20 -20 l 20 20'
                }, 150, '<>');
            });
        });
    },

    fanUpToDown = function(el){
        el.animate({
            path: 'M 25 35 l 0 -20 l 0 20'
        }, 150, '<>', function(){
            el.animate({
                path: 'M 25 15 l 0 20 l 0 -20'
            }, 100, '<>', function(){
                el.animate({
                    path: 'M 5 15 l 20 20 l 20 -20'
                }, 150, '<>');
            });
        });
    },

    $('#fan-in-out').click(function(){
        if ( $(this).attr('down') == 'true' ){
            fanDownToUp(chevronFanInOut);
            $(this).attr('down', 'false');
        } else {
            fanUpToDown(chevronFanInOut);
            $(this).attr('down', 'true');
        }
    });

    // ##### Fan In Out 2 #####

    var fanInOut2 = new Raphael(document.getElementById('fan-in-out-2'), 50, 50);
    var chevronFanInOut2 = fanInOut2.path('M 5 15 l 20 20 l 20 -20');
    chevronFanInOut2.attr({
        'stroke-linejoin': 'round',
        'stroke-width': 2
    });

    fanDownToUp2 = function(el){
        el.animate({
            path: 'M 25 35 l 0 -20 l 0 20'
        }, 150, '<>', function(){
            el.animate({
                path: 'M 5 35 l 20 -20 l 20 20'
            }, 150, '<>');
        });
    },

    fanUpToDown2 = function(el) {
        el.animate({
            path: 'M 25 15 l 0 20 l 0 -20'
        }, 150, '<>', function(){
            el.animate({
                path: 'M 5 15 l 20 20 l 20 -20'
            }, 150, '<>');
        });
    },

    $('#fan-in-out-2').click(function(){
        if ( $(this).attr('down') == 'true' ){
            fanDownToUp2(chevronFanInOut2);
            $(this).attr('down', 'false');
        } else {
            fanUpToDown2(chevronFanInOut2);
            $(this).attr('down', 'true');
        }
    });

    // ##### Fan In Out 3 #####
    var fanInOut3 = new Raphael(document.getElementById('fan-in-out-3'), 50, 50);
    var chevronFanInOut3 = fanInOut3.path('M 5 15 l 20 20 l 20 -20');
    chevronFanInOut3.attr({
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        'stroke-linecap': 'round'
    });

    fanDownToUp3 = function(el) {
        el.animate({
            path: 'M 25 15 l 0 20 l 0 -20'
        }, 150, '<>', function(){
            el.animate({
                path: 'M 25 35 l 0 -20 l 0 20'
            }, 0, '<>', function(){
                el.animate({
                    path: 'M 5 35 l 20 -20 l 20 20'
                }, 150, '<>')
            });
        });
    },

    fanUpToDown3 = function(el) {
        el.animate({
            path: 'M 25 35 l 0 -20 l 0 20'
        }, 150, '<>', function(){
            el.animate({
                path: 'M 25 15 l 0 20 l 0 -20'
            }, 0 , '<>', function(){
                el.animate({
                    path: 'M 5 15 l 20 20 l 20 -20'
                }, 150, '<>');
            });
        });
    },

    $('#fan-in-out-3').click(function(){
        if ( $(this).attr('down') == 'true' ){
            fanDownToUp3(chevronFanInOut3);
            $(this).attr('down', 'false');
        } else {
            fanUpToDown3(chevronFanInOut3);
            $(this).attr('down', 'true');
        }
    });

    // ##### Fan In Out 4 #####
    var fanInOut4 = new Raphael(document.getElementById('fan-in-out-4'), 50, 50);
    var chevronFanInOut4 = fanInOut4.path('M 5 15 l 20 20 l 20 -20');
    chevronFanInOut4.attr({
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        'stroke-linecap': 'round'
    });

    fanDownToUp4 = function(el){
        el.animate({
            path: 'M 23 15 l 2 20 l 2 -20'
        }, 150, '<>', function(){
            el.animate({
                path: 'M 5 35 l 20 -20 l 20 20'
            }, 150, '<>')
        });
    },

    fanUpToDown4 = function(el){
        el.animate({
            path: 'M 23 35 l 2 -20 l 2 20'
        }, 150, '<>', function(){
            el.animate({
                path: 'M 5 15 l 20 20 l 20 -20'
            }, 150, '<>');
        });
    },

    $('#fan-in-out-4').click(function(){
        if ( $(this).attr('down') == 'true' ){
            fanDownToUp4(chevronFanInOut4);
            $(this).attr('down', 'false');
        } else {
            fanUpToDown4(chevronFanInOut4);
            $(this).attr('down', 'true');
        }
    });

    $('button').on('click', function(){

        if ( $('#fan-in-out-3').attr('down') == 'true' ){
            fanDownToUp3(chevronFanInOut3);
            $('#fan-in-out-3').attr('down', 'false');
        } else {
            fanUpToDown3(chevronFanInOut3);
            $('#fan-in-out-3').attr('down', 'true');
        }

        if ( $('#flip-over').attr('down') == "true" ){
            flipDownToUp(chevronFlip);
        } else {
            flipUpToDown(chevronFlip);
        }

        if ( $('#fan-in-out').attr('down') == 'true' ){
            fanDownToUp(chevronFanInOut);
            $('#fan-in-out').attr('down', 'false');
        } else {
            fanUpToDown(chevronFanInOut);
            $('#fan-in-out').attr('down', 'true');
        }

        if ( $('#fan-in-out-2').attr('down') == 'true' ){
            fanDownToUp2(chevronFanInOut2);
            $('#fan-in-out-2').attr('down', 'false');
        } else {
            fanUpToDown2(chevronFanInOut2);
            $('#fan-in-out-2').attr('down', 'true');
        }

        if ( $('#fan-in-out-4').attr('down') == 'true' ){
            fanDownToUp4(chevronFanInOut4);
            $('#fan-in-out-4').attr('down', 'false');
        } else {
            fanUpToDown4(chevronFanInOut4);
            $('#fan-in-out-4').attr('down', 'true');
        }
    });

};