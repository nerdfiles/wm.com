function carousel_initCallback(carousel) {
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
};

jQuery(document).ready(function() {
    jQuery("#carousel-list").jcarousel({
        scroll: 1,
        auto: 3,
        wrap: 'last',
        initCallback: carousel_initCallback,
        buttonNextHTML: null,
        buttonPrevHTML: null
    });
});