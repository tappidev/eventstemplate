// TAPPI Navigation
//
/// - Global TAPPI Navigation
/// - Main Navigation


   $(document).ready(function () {

    // tappi navigation

       $('.tappi-menu-tab').on('click', function (e) {
            e.stopPropagation();
            var menu = $('.tappi-container');
            menu.slideToggle(300); 
    });
      
    $(document).click(function (e) {
        if (!$(e.target).closest('.global-nav-is-hidden').length) {
            if ($('.global-nav-is-hidden').is(":visible")) {
                $('.tappi-container').slideToggle(300); 
            }
        }

        if (!$(e.target).closest('#mobile-nav').length) {
            if ($('#mobile-nav').is(":visible")) {
                $('#mobile-nav').slideToggle(300);
            }
        }

    });

    $(window).resize(function () {
        if ($(window).width() > 790) {
            $('#mobile-nav').hide();
        }
    });

    if($(window).width() > 790) {
        $('#mobile-nav').hide();
     }

        var mobileSubMenu = $('#mobile-nav .submenu');
        var nav = document.getElementById("main-nav");
        var mobileNav = document.getElementById("mobile-nav");
        mobileNav.innerHTML = nav.innerHTML;

        $('.mobile-target').on('click', function (e) {
            e.stopPropagation();
            var menu = $('#mobile-nav');
            menu.slideToggle(300);
        });

       //open-close  submenu
    $('.has-children').children('a').on('click', function (e) {
        e.stopPropagation(); // stop the document click function below
        var selected = $(this);

        if (selected.next('ul').hasClass('is-hidden')) {
            selected.addClass('selected').next('ul').removeClass('is-hidden').end();
            $('.selected .material-icons').html('close');
            selected.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected').children('a .material-icons').html('keyboard_arrow_down');
        } else {
            $('.selected .material-icons').html('keyboard_arrow_down');
            selected.removeClass('selected').next('ul').addClass('is-hidden').end();
        }
    });
    // add is-hidden class to submenu when you click out the submenu
    $(document).click(function (e) {
        if (!$(e.target).closest('.submenu').length) {
            if($('.submenu').is(":visible")) {
                $('.submenu').addClass('is-hidden'); //make all inactive
                $('.has-children .material-icons').html('keyboard_arrow_down');
                $('.has-children').children('a').removeClass('selected');
            }
        }
    });

     

       // make fixed if not visible

    var newsItems = $('.news-item');

    $(function () {

        var startIndex = 0;
        var endIndex = newsItems.length;
        $('.news a:first').fadeIn(1000).delay(1000);
 
        window.setInterval(function () {
            $('.news a:eq(' + startIndex + ')').fadeOut(1000);
            startIndex++;
            $('.news a:eq(' + startIndex + ')').delay(1500).fadeIn(1000).delay(1500);

            if (endIndex == startIndex) {
                startIndex = -1;
            }
        }, (4000));

    });
       
    
    
   }); // document

   var constructMobileNav = function() {
       var w = $(window).width();

       if (w < 1141) {
            var nav = document.getElementById("main-nav");
            var mobileNav = document.getElementById("mobile-nav");

            mobileNav.innerHTML = nav.innerHTML;
            mobileNav.child('.submenu').removeClass('is-hidden');
       }
       
       

   };