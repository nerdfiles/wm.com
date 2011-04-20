function initCarousel(carousel) {
    jQuery('#carousel-map a').bind('mouseover', function() {
        $(this).addClass('hover');
    });
    
    jQuery('#carousel-map a').bind('mouseout', function() {
        $(this).removeClass('hover');
    });
    
    jQuery('#carousel-map a').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        return false;
    });
 
    jQuery('#carousel-next').bind('click', function() {
        carousel.next();
        return false;
    });
 
    jQuery('#carousel-prev').bind('click', function() {
        carousel.prev();
        return false;
    });
    
    // disable if next or prev
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto(0);
    });
 
    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto(0);
    });
    
    // pause
    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
}

function setActive(carousel, state) {
    /* fade in item */
    $(state).animate({
        opacity: 1
    }, 300);
    
    /* for custom timing in seconds */
    var secs = ($(state).find('div[class*="carousel-item-duration-"]').length) ? $(state).find('div[class*="carousel-item-duration-"]').attr("class") : false;
    secs = (secs !== false) ? secs.match(/carousel\-item\-duration\-([0-9]+)/)[1] : false;
    
    if ( secs !== false ) {
        carousel.stopAuto();
        
        secs = (parseInt(secs)*1000);
        
        window.setTimeout(function() {
            carousel.startAuto();
            carousel.next();
        }, secs );
    
    }
    
    /* set control to active */
    $("#carousel-map a").eq($(state).index()).addClass('active');
}

function unsetActive(carousel, state) {
    /* fade out item */
    $(state).animate({
        opacity: 0
    }, 300);
    
    /* unset control from active */
    $("#carousel-map a").eq($(state).index()).removeClass('active');
}

jQuery(document).ready(function() {
    jQuery("#carousel-list").jcarousel({
        scroll: 1,
        auto: 3,
        /*animation: 0,*/
        wrap: 'last',
        initCallback: initCarousel,
        buttonNextHTML: null,
        buttonPrevHTML: null,
        itemFirstInCallback: {
            onBeforeAnimation: setActive
        },
        itemFirstOutCallback: {
            onBeforeAnimation: unsetActive,
        }
    });
});