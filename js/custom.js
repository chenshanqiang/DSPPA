
jQuery(document).ready(function () {

/*----------------------------------------------------*/
/*	Search box expand Section
/*----------------------------------------------------*/
	    
	jQuery(".search-text-box").focus(function(){
	   jQuery("ul.social").animate({ marginLeft: "-120px"}, 450, "easeInSine")
	});







/*----------------------------------------------------*/
/*	Accordion Section
/*----------------------------------------------------*/

    jQuery('.accordionMod').each(function (index) {
        var thisBox = jQuery(this).children(),
            thisMainIndex = index + 1;
        jQuery(this).attr('id', 'accordion' + thisMainIndex);
        thisBox.each(function (i) {
            var thisIndex = i + 1,
                thisParentIndex = thisMainIndex,
                thisMain = jQuery(this).parent().attr('id'),
                thisTriggers = jQuery(this).find('.accordion-toggle'),
                thisBoxes = jQuery(this).find('.accordion-inner');
            jQuery(this).addClass('panel');
            thisBoxes.wrap('<div id=\"collapseBox' + thisParentIndex + '_' + thisIndex + '\" class=\"panel-collapse collapse\" />');
            thisTriggers.wrap('<div class=\"panel-heading\" />');
            thisTriggers.attr('data-toggle', 'collapse').attr('data-parent', '#' + thisMain).attr('data-target', '#collapseBox' + thisParentIndex + '_' + thisIndex);
        });
        jQuery('.accordion-toggle').prepend('<span class=\"icon\" />');
		jQuery("div.accordion-item:first-child .accordion-toggle").addClass("current");
		jQuery("div.accordion-item:first-child .icon").addClass("iconActive");
		jQuery("div.accordion-item:first-child .panel-collapse").addClass("in");
        jQuery('.accordionMod .accordion-toggle').click(function () {
            if (jQuery(this).parent().parent().find('.panel-collapse').is('.in')) {
                jQuery(this).removeClass('current');
                jQuery(this).find('.icon').removeClass('iconActive');
            } else {
                jQuery(this).addClass('current');
                jQuery(this).find('.icon').addClass('iconActive');
            }
            jQuery(this).parent().parent().siblings().find('.accordion-toggle').removeClass('current');
            jQuery(this).parent().parent().siblings().find('.accordion-toggle > .icon').removeClass('iconActive');
        });
    });
});
/*----------------------------------------------------*/
/*	Revolution Slider Triggering
/*----------------------------------------------------*/


   jQuery(document).ready(function() {
      if (jQuery.fn.cssOriginal!=undefined)
      jQuery.fn.css = jQuery.fn.cssOriginal;
      jQuery('.fullwidthbanner').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 470,

        onHoverStop: "on",
        // Stop Banner Timet at Hover on Slide on/off
        thumbWidth: 100,
        // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
        thumbHeight: 50,
        thumbAmount: 3,

        hideThumbs: 0,
        navigationType: "none",
        // bullet, thumb, none
        navigationArrows: "solo",
        // nexttobullets, solo (old name verticalcentered), none
        navigationStyle: "square",
        // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom

        navigationHAlign: "center",
        // Vertical Align top,center,bottom
        navigationVAlign: "top",
        // Horizontal Align left,center,right
        navigationHOffset: 0,
        navigationVOffset: 20,

        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 0,
        soloArrowLeftVOffset: 0,

        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 0,
        soloArrowRightVOffset: 0,

        touchenabled: "on",
        // Enable Swipe Function : on/off


        stopAtSlide: -1,
        // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
        stopAfterLoops: -1,
        // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
        hideCaptionAtLimit: 0,
        // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
        hideAllCaptionAtLilmit: 0,
        // Hide all The Captions if Width of Browser is less then this value
        hideSliderAtLimit: 0,
        // Hide the whole slider, and stop also functions if Width of Browser is less than this value

        fullWidth: "on",

        shadow: 0 //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
    });




});



/*----------------------------------------------------*/
/*	Hover Overlay
/*----------------------------------------------------*/

jQuery(document).ready(function () {
	
	


	jQuery('.portfolio-item').hover(function () {
			jQuery(this).find( '.portfolio-item-hover' ).animate({
				"opacity": 0.8
			}, 100, 'easeInOutCubic');
			
			
		}, function () {
			jQuery(this).find( '.portfolio-item-hover' ).animate({
				"opacity": 0
			}, 100, 'easeInOutCubic');
			
	});
	
	
	jQuery('.portfolio-item').hover(function () {
       jQuery(this).find(".fullscreen").stop().animate({'top' : '60%', 'opacity' : 1}, 250, 'easeOutBack');
        
    }, function () {
        jQuery(this).find(".fullscreen").stop().animate({'top' : '65%', 'opacity' : 0}, 150, 'easeOutBack');
        
    });
	
	
	jQuery('.blog-showcase ul li').each(function () {
		jQuery(this).on('hover', function () {
			jQuery(this).siblings('li').removeClass('blog-first-el').end().addClass('blog-first-el');
		});
	});
	
	
	jQuery('.blog-showcase-thumb').hover(function () {
        jQuery(this).find( '.post-item-hover' ).animate({
            "opacity": 0.8
        }, 100, 'easeInOutCubic');
        
    }, function () {
        jQuery(this).find( '.post-item-hover' ).animate({
            "opacity": 0
        }, 100, 'easeInOutCubic');
        
    });
	

	
	jQuery('.blog-showcase-thumb').hover(function () {
       jQuery(this).find(".fullscreen").stop().animate({'top' : '57%', 'opacity' : 1}, 250, 'easeOutBack');
        
    }, function () {
        jQuery(this).find(".fullscreen").stop().animate({'top' : '65%', 'opacity' : 0}, 150, 'easeOutBack');
        
    });



/* Post Image overlay */	
	
	jQuery('.post-image').hover(function () {
        jQuery(this).find( '.img-hover' ).animate({
            "opacity": 0.8
        }, 100, 'easeInOutCubic');
		
        
    }, function () {
        jQuery(this).find( '.img-hover' ).animate({
            "opacity": 0
        }, 100, 'easeInOutCubic');
        
    });
	
	
	jQuery('.post-image').hover(function () {
       jQuery(this).find(".fullscreen").stop().animate({'top' : '55%', 'opacity' : 1}, 250, 'easeOutBack');
        
    }, function () {
        jQuery(this).find(".fullscreen").stop().animate({'top' : '65%', 'opacity' : 0}, 150, 'easeOutBack');
        
    });
	

/*Mobile device topnav opener*/
	
	jQuery( ".down-button" ).click(function() {
    jQuery( ".down-button .icon-current" ).toggleClass("icon-angle-up icon-angle-down");
});

/*----------------------------------------------------*/
/*	Tootltip Initialize
/*----------------------------------------------------*/



    jQuery("[data-toggle='tooltip']").tooltip();

});


