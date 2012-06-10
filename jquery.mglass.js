/**
 * jQuery MGlass, Displays a magnifying glass on image hover
 * http://github.com/younes0/jQuery-MGlass
 * 
 * Version 1.0
 *  
 * TODO: add support for CSS3 transitions
 * 
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * 
 */
(function($) {

	// Start
    $.mglass = function(element, options) {

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

			$element.wrap('<div class="mglassWrapper" />')

			$('<div class="mglass" style="width: '+w+'; height: '+h+'"></div>')
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
    $.fn.mglass = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('mglass')) {
                var plugin = new $.mglass(this, options);
                $(this).data('mglass', plugin);
            }
        });
    }

// End
})(jQuery);