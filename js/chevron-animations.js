        // FLIP-OVER
            window.onload = function() {
                var flip = new Raphael(document.getElementById('flip-over'), 50, 50);
                var chevronFlip = flip.path('M 5 15 l 20 20 l 20 -20');
                chevronFlip.attr({
                    'stroke-linejoin': 'round',
                    'stroke-width': 2
                });

                flipDownToUp = function (el) {
                    el.animate({
                        path: 'M 5 35 l 20 -20 l 20 20'
                    }, 250, '<<>>');
                    $('#flip-over').attr('down', 'false');
                },

                flipUpToDown = function (el) {
                    el.animate({
                        path: 'M 5 15 l 20 20 l 20 -20'
                    }, 250, '<<>>');
                    $('#flip-over').attr('down', 'true');
                },

                $('#flip-over').click(function(){
                    if ( $(this).attr('down') == "true" ){
                        flipDownToUp(chevronFlip);
                    } else {
                        flipUpToDown(chevronFlip);
                    }
                });


                // #################################################

                var fanInOut = new Raphael(document.getElementById('fan-in-out'), 50, 50);
                var chevronFanInOut = fanInOut.path('M 5 15 l 20 20 l 20 -20');
                chevronFanInOut.attr({
                    'stroke-linejoin': 'round',
                    'stroke-width': 2
                });

                fanDownToUp = function(el) {
                    el.animate({
                        path: 'M 25 15 l 0 20 l 0 -20'
                    }, 250, '<>', function(){
                        el.animate({
                            path: 'M 25 35 l 0 -20 l 0 20'
                        }, 150, '<>', function(){
                            el.animate({
                                path: 'M 5 35 l 20 -20 l 20 20'
                            }, 250, '<>');
                        });
                    });
                },

                fanUpToDown = function(el){
                    el.animate({
                        path: 'M 25 35 l 0 -20 l 0 20'
                    }, 250, '<>', function(){
                        el.animate({
                            path: 'M 25 15 l 0 20 l 0 -20'
                        }, 150, '<>', function(){
                            el.animate({
                                path: 'M 5 15 l 20 20 l 20 -20'
                            }, 250, '<>');
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

                // #########################################

                var fanInOut2 = new Raphael(document.getElementById('fan-in-out-2'), 50, 50);
                var chevronFanInOut2 = fanInOut2.path('M 5 15 l 20 20 l 20 -20');
                chevronFanInOut2.attr({
                    'stroke-linejoin': 'round',
                    'stroke-width': 2
                });

                fanDownToUp2 = function(el){
                    el.animate({
                        path: 'M 25 35 l 0 -20 l 0 20'
                    }, 250, '<>', function(){
                        el.animate({
                            path: 'M 5 35 l 20 -20 l 20 20'
                        }, 250, '<>');
                    });
                },

                fanUpToDown2 = function(el) {
                    el.animate({
                        path: 'M 25 15 l 0 20 l 0 -20'
                    }, 250, '<>', function(){
                        el.animate({
                            path: 'M 5 15 l 20 20 l 20 -20'
                        }, 250, '<>');
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
            };