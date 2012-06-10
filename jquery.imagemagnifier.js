/**
 * jQuery Umage Magnifier Plugin, displays a magnifying glass (or other image) as an overlay on a image
 * http://github.com/younes0/jQuery-Image-Magnifier
 * 
 * Version 1.0
 *  
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * 
 */
(function($) {

	// Start
    $.imageMagnifier = function(element, options) {

		// Defaults
       var defaults = {
       		opacity: 0.4
       }
	
        var plugin = this, $element = $(element);
		
		plugin.settings = {}
		
		
        // Constructor
        plugin.init = function() {

			plugin.settings = $.extend({}, defaults, options);
						
			var h = $element.css("height");
			var w = $element.css("width");		

			$element.wrap('<div class="imageMagnifierWrapper" />')

			$('<div class="imageMagnifier" style="width: '+w+'; height: '+h+'"></div>')
				.insertBefore($(element))
				.hover(
					function () {
						$(this).stop().animate({opacity: plugin.settings.opacity}, "fast");
					},
					function () {
						$(this).stop().css("opacity", 0);
					}
				);
		
		},

		// Init
        plugin.init();

    }

    // Add the plugin to the jQuery.fn object
    $.fn.imageMagnifier = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('imageMagnifier')) {
                var plugin = new $.imageMagnifier(this, options);
                $(this).data('imageMagnifier', plugin);
            }
        });
    }

// End
})(jQuery);