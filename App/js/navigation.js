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
    });

    //open/close regular submenu

    $('.has-children').children('a').on('click', function (e) {
        e.stopPropagation(); // stop the document click function below
        var selected = $(this);

        if (selected.next('ul').hasClass('is-hidden')) {
            selected.addClass('selected').next('ul').removeClass('is-hidden').end();
            selected.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected');
        } else {
            selected.removeClass('selected').next('ul').addClass('is-hidden').end();
        }
    });
    
    // add is-hidden class to submenu when you click out the submenu
    $(document).click(function (e) {
        if (!$(e.target).closest('.submenu').length) {
            if($('.submenu').is(":visible")) {
                $('.submenu').addClass('is-hidden'); //make all inactive
                $('.has-children').children('a').removeClass('selected');
            } 
        }
    });
    
}); // document