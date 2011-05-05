/**
 * Site Consolidation / Manhattan Beach
 */

/**
 * jQuery Metadata Configuration
 *
 * jQuery Metadata Configuration
 *
 * @author              aalexander
 * @project             wm-redesign
 * @package             wm-redesign-r2
 * @subpackage          site-consolidation
 * @version             0.0.1
 * @lastmodified        03-18-2011 1:40PM
 * @depends             jquery.metadata
 *
 * @js-for              all
 * @tested              ie6,ie7,ie8,chrome_10.x,opera_11.x,firefox_3.6.x,safari_5.x,
 */

$.metadata.setType('attr', 'data-settings');


/**
 * jQuery init
 *
 * jQuery init
 *
 * @author              aalexander
 * @project             wm-redesign
 * @package             wm-redesign-r2
 * @subpackage          site-consolidation
 * @version             0.0.1
 * @lastmodified        03-18-2011 1:40PM
 * @depends             jquery
 *
 * @js-for              all
 * @tested              ie6,ie7,ie8,chrome_10.x,opera_11.x,firefox_3.6.x,safari_5.x,
 * @valid               true
 */


$(function() {
    
/**
 * jQuery Tabs Configuration
 *
 * jQuery Tabs Configuration
 *
 * @author              aalexander
 * @project             wm-redesign
 * @package             wm-redesign-r2
 * @subpackage          site-consolidation
 * @version             0.0.1
 * @lastmodified        03-18-2011 1:40PM
 * @depends             jquery.tabs
 *
 * @js-for              all
 * @tested              ie6,ie7,ie8,chrome_10.x,opera_11.x,firefox_3.6.x,safari_5.x,
 * @valid               true
 */
 
    $.tabs("div.tabs");
    
/**
 * jQuery FAQ Init
 *
 * jQuery FAQ Init
 *
 * @author              aalexander
 * @project             wm-redesign
 * @package             wm-redesign-r2
 * @subpackage          site-consolidation
 * @subsubpackage       wm-module-faq
 * @version             0.0.1
 * @lastmodified        03-18-2011 1:40PM
 * @depends             jquery
 *
 * @js-for              all
 * @tested              ie6,ie7,ie8,chrome_10.x,opera_11.x,firefox_3.6.x,safari_5.x,
 * @valid               true
 */

    $("dl[class*='faq']").each(function(e) {
        var $self = $(this),
            cn = $self.attr("class"),
            grid = cn.match(/\:(grid\_\d{0,2})/),
            grid = grid[1];
            
        $self.find("dd").addClass(grid+" alpha").css({
            margin: "0 !important"
        });

    });
    

/**
 * jQuery FAQ Toggle Next
 *
 * jQuery FAQ Init
 *
 * @author              aalexander
 * @project             wm-redesign
 * @package             wm-redesign-r2
 * @subpackage          site-consolidation
 * @subsubpackage       wm-module-faq
 * @version             0.0.1
 * @lastmodified        03-18-2011 1:40PM
 * @depends             jquery
 *
 * @js-for              all
 * @tested              ie6,ie7,ie8,chrome_10.x,opera_11.x,firefox_3.6.x,safari_5.x,
 * @valid               true
 */
    
    $(".toggle-next").each(function(e) {
        var that = $(this),
            nextElem = that.next(),
            parentElem = that.parent();
            
        nextElem.wrapInner('<div class="faq-answer-container" style="padding-left: 30px"></div>');
        /*nextElem.wrapInner(function() {
            return '<div class="faq-answer-container" style="height: '+nextElem.height()+'px"></div>';
        });*/
        
        that.bind("click", function(e) {
            if (parentElem.hasClass("faq-toggle-list")) {
                //nextElem.height()
                nextElem.animate({
                    height: ["toggle", "swing"]
                }, 300);
                //nextElem.slideToggle("slow", function() {});
            } else {
                nextElem.toggle();
            }
        
            that.toggleClass("toggle-next-active");
            
            e.preventDefault();
        });
        
    });
    
    $(".toggle-all").bind("click", function(e) {
    
        var $self = $(this);
            
        if ( $self.hasClass('toggle-all-active') == false ) {
            // show all
            $self.closest('.faq-container').find('dd').slideDown();
            $self.closest('.faq-container').find('dt').addClass('toggle-next-active');
            $self.addClass('toggle-all-active');
        } else {
            // all hidden
            $self.closest('.faq-container').find('dd').slideUp();
            $self.closest('.faq-container').find('dt').removeClass('toggle-next-active');
            $self.removeClass('toggle-all-active');
        }
        
        e.preventDefault();
        //return false;
    });
	
	/**
 * jQuery FAQ Toggle Next
 *
 * jQuery FAQ Init
 *
 * @author              kfargason
 * @project             wm-redesign
 * @package             wm-redesign-r2
 * @subpackage          site-consolidation
 * @subsubpackage       form validation
 * @version             0.0.1
 * @lastmodified        03-23-2011 
 * @depends             jquery, jquery.validate.js
 * @tested              ie6,ie7,ie8,chrome_10.x,opera_11.x,firefox_3.6.x,safari_5.x,
 * @valid               true
 */
 
   //container-selection-form 
	$("#container-selection-form #container-selection-first-name").attr("validate", "required: true, maxlength: 50");
	$("#container-selection-form #container-selection-last-name").attr("validate", "required: true, maxlength: 50");
	$("#container-selection-form #container-selection-address-1").attr("validate", "required: true, maxlength: 100");
	$("#container-selection-form #container-selection-unit").attr("validate", "maxlength: 10, number: true ");
	$("#container-selection-form #container-selection-address-2").attr("validate", "maxlength: 50");
	$("#container-selection-form #container-selection-city").attr("validate", "required: true, maxlength: 50");
	$("#container-selection-form #container-selection-state").attr("validate", "required: true, maxlength: 25");
	$("#container-selection-form #container-selection-zip").attr("validate", "required: true, postalcode:true");
	$("#container-selection-form #container-selection-email").attr("validate", "required: true, maxlength: 50, email:true");

  $("#container-selection-form").validate();
    
});

/**
 * Careers
 */

;(function($){
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
                if (nakedElem) {
                    if (nakedElem.hasOwnProperty && nakedElem.hasOwnProperty('dataset')) {
                        if ('undefined' != (typeof nakedElem.dataset[key])) {
                            retValue = nakedElem.dataset[key];
                        }
                    } else {
                        retValue = this.attr('data-'+key);
                    }
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
        carousel.stopAuto(0);
    }, function() {
        carousel.startAuto(0);
    });
    
}

function setActive(carousel, state) {

    $(state).css({
        position: "relative"
    }).hide();
    
    $(state).animate({
        left: 0
    }, 500).show();
    
    /*$(state).parent().find('li').css({
        position: "absolute",
        left: "-10000px",
        top: "auto",
        width: "1px",
        height: "1px",
        overflow: "hidden"
    });*/
    
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
        if (secs === 0) {
            carousel.stopAuto();
        } else {
            carousel.stopAuto();
            
            secs = (parseInt(secs)*1000);
            
            window.setTimeout(function() {
                carousel.startAuto();
                carousel.next();
            }, secs );
        }
    }
    
    /* set control to active */
    
    $("#carousel-map a").eq($(state).index()).addClass('active');
    
}

function unsetActive(carousel, state) {
    
    /* unset control from active */
    
    $("#carousel-map a").eq($(state).index()).removeClass('active');
    
}
  
jQuery(document).ready(function() {

        jQuery("#carousel-list").jcarousel({
            scroll: 1,
            auto: 10,
            wrap: 'circular',
            initCallback: initCarousel,
            buttonNextHTML: null,
            buttonPrevHTML: null,
            itemFirstInCallback: {
                onBeforeAnimation: setActive
            },
            itemFirstOutCallback: {
                onBeforeAnimation: unsetActive
            },
            fade: false
        });
        
        jQuery(".module-branding-carousel ul").jcarousel({
            scroll: 1,
            auto: 2,
            animation: 0,
            wrap: 'circular',
            initCallback: initCarousel,
            buttonNextHTML: null,
            buttonPrevHTML: null,
            itemFirstInCallback: {
                onBeforeAnimation: setActive,
                onAfterAnimation: function() {}
            },
            itemFirstOutCallback: {
                onBeforeAnimation: unsetActive,
                onAfterAnimation: function() {}
            },
            itemLastInCallback: {
                onBeforeAnimation: function() {},
                onAfterAnimation: function() {}
            },
            fade: true
        });
  
});