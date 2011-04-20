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
    $(state).animate({
        opacity: 1
    }, 300);
    
    $("#carousel-map a").eq($(state).index()).addClass('active');
}

function unsetActive(carousel, state) {
    $(state).animate({
        opacity: 0
    }, 300);
    
    $("#carousel-map a").eq($(state).index()).removeClass('active');
}

jQuery(document).ready(function() {
    jQuery("#carousel-list").jcarousel({
        scroll: 1,
        auto: 3,
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