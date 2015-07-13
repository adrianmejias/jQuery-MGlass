/**
 * jQuery MGlass, Displays a magnifying glass on image hover
 * https://github.com/younes0/jQuery-MGlass
 *
 * Updated
 * https://github.com/adrianmejias/jQuery-MGlass
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 */
(function($) {
    // Start
    $.mglass = function(element, options) {
        // Defaults
        var defaults = {
            large: 'example-large.jpg'
        };
        var plugin = this,
            $element = $(element),
            settings = {};
        settings = $.extend({}, defaults, options);
        // Create Image
        settings.largeImage = $('<img>').attr('src', settings.large);
        var largeImage = new Image();
        largeImage.src = settings.large;
        // Init
        var w = $element.width(),
            h = $element.height(),
            b = $element.css('border-top-width');
        // Wrapper
        $element.addClass('mglass-photo').wrap($('<div>').addClass('mglass-wrapper').css({
            width: parseInt(w) + 'px',
            height: parseInt(h) + 'px'
        }).mousemove(function(e) {
            var mglassViewer = $(this).find('.mglass-viewer'),
                img = $(this).find('img'),
                pageOffset = {
                    x: $('body').offset().left,
                    y: $('body').offset().top
                },
                imagePosition = {
                    x: $(img).offset().left,
                    y: $(img).offset().top
                };
            if (imagePosition.x <= (e.clientX + pageOffset.x) &&
                imagePosition.y <= (e.clientY + pageOffset.y) &&
                (imagePosition.x + img.outerWidth()) >= (e.clientX + pageOffset.x) &&
                (imagePosition.y + img.outerHeight()) >= (e.clientY + pageOffset.y)) {
                var x = (e.clientX + pageOffset.x),
                    y = (e.clientY + pageOffset.y);
                mglassViewer.css({
                    visibility: 'visible',
                    left: (x - (mglassViewer.outerWidth() / 2)) + 'px',
                    top: (y - (mglassViewer.outerHeight() / 2)) + 'px'
                });
                var srcX = x - imagePosition.x,
                    srcY = y - imagePosition.y,
                    dstX = (srcX * (largeImage.width - mglassViewer.outerWidth())) / img.outerWidth(),
                    dstY = (srcY * (largeImage.height - mglassViewer.outerHeight())) / img.outerHeight();
                mglassViewer.css('background-position', (-dstX) + 'px ' + (-dstY) + 'px');
            } else {
                mglassViewer.css('visibility', 'hidden');
            }
        }).hover(function(e) {
            // ..
        }, function(e) {
            var mglassViewer = $(this).find('.mglass-viewer'),
                img = $(this).find('img'),
                pageOffset = {
                    x: $('body').offset().left,
                    y: $('body').offset().top
                },
                imagePosition = {
                    x: $(img).offset().left,
                    y: $(img).offset().top
                };
            if (!(imagePosition.x <= (e.clientX + pageOffset.x) &&
                imagePosition.y <= (e.clientY + pageOffset.y) &&
                imagePosition.x + img.outerWidth() >= (e.clientX + pageOffset.x) &&
                imagePosition.y + img.outerHeight() >= (e.clientY + pageOffset.y))) {
                mglassViewer.css('visibility', 'hidden');
            }
        })).wrap($('<div>').addClass('mglass-photo-box').css({
            width: parseInt(w) + 'px',
            height: parseInt(h) + 'px'
        })).parent().parent().prepend($('<div>').addClass('mglass-viewer').css('background-image', 'url(' + settings.large + ')'));
        return true;
    };
    // Add the plugin to the jQuery.fn object
    $.fn.mglass = function(options) {
        return this.each(function() {
            if (undefined === $(this).data('mglass')) {
                var plugin = new $.mglass(this, options);
                $(this).data('mglass', plugin).addClass('mglass-photo');
            }
        });
    };
    // End
})(jQuery);