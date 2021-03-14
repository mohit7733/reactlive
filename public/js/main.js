(function($) {
    "use strict";
    jQuery(document).ready(function($) {
        $("body").on('scroll', function(){
            if ($("body").scrollTop() >= 200) {
                $('#header-area').addClass('fixTotop');
            } else {
                $('#header-area').removeClass('fixTotop');
            }
            if ($("body").scrollTop() >= 400) {
                $('.scroll-top').slideDown(400);
            } else {
                $('.scroll-top').slideUp(400);
            }
        });
        var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

       

        $(".popucar-menu a, .home2-car-filter a").click(function() {
            $(".popucar-menu a, .home2-car-filter a").removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            $(".popular-car-gird").isotope({
                filter: filterValue
            });
            return false;
        });      
        $(".web-slider").owlCarousel({
            loop: true,
            items: 5,
            margin: 10,
            autoplay:false,
            autoplayHoverPause: true,
            autoplayTimeout: 2000,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 5
                }
            }
        });
        $(".service-container-wrap").owlCarousel({
            loop: true,
            items: 3,
            margin: 20,
            autoplay:false,
            autoplayHoverPause: true,
            autoplayTimeout: 2000,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $(".service-container-blog").owlCarousel({
            loop: true,
            items: 3,
            margin: 20,
            autoplay:false,
            autoplayHoverPause: true,
            autoplayTimeout: 2000,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        $(".service-agent").owlCarousel({
            loop: true,
            items: 3,
            margin: 60,
            autoplay:false,
            autoplayHoverPause: true,
            autoplayTimeout: 2000,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
        $(".service-terrace").owlCarousel({
            loop: true,
            items: 3,
            margin: 20,
            autoplay:false,
            autoplayHoverPause: true,
            autoplayTimeout: 2000,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    });
}(jQuery));


var languageSelect = document.getElementById('LanguageSelect');
   var selectedLanguage = readCookie('language');
  
  if ((selectedLanguage == 'english') || (selectedLanguage == 'spanish') || (selectedLanguage == 'portuguese')) {
  $(".language select").val(selectedLanguage);
  var sel = $(".language select").val(selectedLanguage);
  if (selectedLanguage == 'english') {
           $(".english").css("display", "inline");
           $(".spanish").css("display", "none"); 
           $(".portuguese").css("display", "none"); 
        }else if (selectedLanguage =='spanish') {
           $(".english").css("display", "none");
           $(".spanish").css("display", "inline");
           $(".portuguese").css("display", "none");
        }else if (selectedLanguage =='portuguese') {
           $(".english").css("display", "none");
           $(".spanish").css("display", "none");
           $(".portuguese").css("display", "inline");
        }
    }

  $(".language select").bind('change', function() {
    setCookie('language', this.value, 365);
    
        var sel = $(".language select").val();
        if (sel=='english') {
           $(".english").css("display", "inline");
           $(".spanish").css("display", "none");
           $(".portuguese").css("display", "none");
        }else if (sel=='spanish') {
           $(".english").css("display", "none");
           $(".spanish").css("display", "inline");
           $(".portuguese").css("display", "none"); 
        }else if (sel=='portuguese') {
           $(".english").css("display", "none");
           $(".spanish").css("display", "none");
           $(".portuguese").css("display", "inline"); 
        
        }
        

});