/* @TheDiegaso */ /*DAGC*/

$(document).ready(function(){

    var SlideFade = function(){

            $(".slideFade > div:gt(0)").hide();
    
            setInterval(function() { 
              $('.slideFade > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('.slideFade');
            },  4000);
    };

    SlideFade();

    var SlideFadeTwo = function(){

            $(".slideFade2 > div:gt(0)").hide();
    
            setInterval(function() { 
              $('.slideFade2 > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('.slideFade2');
            },  4000);
    };

    SlideFadeTwo();

    var SlideFadethree = function(){

            $(".slideFade3 > div:gt(0)").hide();
    
            setInterval(function() { 
              $('.slideFade3 > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('.slideFade3');
            },  4000);
    };

    SlideFadethree();

    var SlideFadeFour = function(){

            $(".slideFade4 > div:gt(0)").hide();
    
            setInterval(function() { 
              $('.slideFade4 > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('.slideFade4');
            },  4000);
    };

    SlideFadeFour();

    var SlideFadeFive = function(){

            $(".slideFade5 > div:gt(0)").hide();
    
            setInterval(function() { 
              $('.slideFade5 > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('.slideFade5');
            },  4000);
    };

    SlideFadeFive();

});

