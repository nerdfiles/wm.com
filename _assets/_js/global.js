(function($){
    $.fn.extend({
        '_data': $.fn.data,
        'data' : function( key, value ) {
            if ( typeof key === "undefined" && this.length ) {
                return jQuery.data( this[0] );
            } else if ( typeof key === "object" ) {
                return this.each(function() {
                    jQuery.data( this, key );
                });
            }
            var retValue;
            retValue = $.fn._data(key, value);
            if ('undefined' == (typeof retValue) || retValue.length == 0) {
                var nakedElem = this.get(0);
                if (nakedElem.hasOwnProperty('dataset')) {
                    if ('undefined' != (typeof nakedElem.dataset[key])) {
                        retValue = nakedElem.dataset[key];
                    }
                } else {
                    retValue = this.attr('data-'+key);
                }
            }
            return retValue;
        }
    });
})(jQuery);

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
    
    // pause on hover
    
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
    }, 300, function() {
    
    });
    
    if ( carousel.options.fade === true ) {
        $(state).next().animate({
            opacity: 0
        }, 300);
    }
    
    /**
     * for custom timing in seconds 
     *
     * @class is overridden by @data-duration; 
     * uses carousel object's "auto" if neither one is set
     */
     
    var secs = ($(state).find('> div[class*="carousel-item-duration"]').length) ?
        parseInt($(state).find('> div').attr('class').match(/carousel\-item\-duration\-([0-9]+)/)[1]) : false;
    
    if ($(state).find("> div").data("duration")) {
        secs = parseInt($(state).find("> div").data("duration"));
    }
    
    if ( typeof( secs ) === "number" ) {
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

    if ( carousel.options.animation !== 0 ) {
        // if animation; for fade and slide
        // need to check for fade; comment opacity for slide only
        if ( carousel.options.fade === true ) {
            $(state).animate({
                opacity: 0
            }, 300);        
        } else {
        }
    }
    
    /* unset control from active */
    
    $("#carousel-map a").eq($(state).index()).removeClass('active');
    
}

jQuery(document).ready(function() {

    jQuery("#carousel-list").jcarousel({
        scroll: 1,
        auto: 3,
        //animation: 0,
        wrap: 'last',
        initCallback: initCarousel,
        buttonNextHTML: null,
        buttonPrevHTML: null,
        itemFirstInCallback: {
            onBeforeAnimation: setActive
        },
        itemFirstOutCallback: {
            onBeforeAnimation: unsetActive,
        },
        fade: false
    });
    
});