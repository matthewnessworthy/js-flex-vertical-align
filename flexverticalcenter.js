/*!
 * Flex Vertical Center v0.1
 * https://github.com/devmatt/js-flex-vertical-align
 *
 * Copyright 2014 Matthew Nessworthy (http://devmatt.co.za)
 * Released under the MIT license
 * https://raw.github.com/devmatt/js-flex-vertical-align/master/LICENSE
 *
 * Date: 2014-01-30
 */
(function(window, document, undefined) {
    var css = function(el, prop) {
        return window.getComputedStyle ? getComputedStyle(el).getPropertyValue(prop) : el.currentStyle[prop];
    };

    var addEvent = function(el, type, fn) {
        if (el.addEventListener) {
            el.addEventListener(type, fn, false);
        } else {
            el.attachEvent('on' + type, fn);
        }
    };

    window.flexVerticalCenter = function(el) {
        var resize = function(el) {
            var resizer = function() {
                var elHeight = (
                        el.offsetHeight
                        - parseInt(css(el, 'padding-top'), 10)
                        - parseInt(css(el, 'padding-bottom'), 10)
                    ),
                    parentHeight = (
                        el.parentNode.offsetHeight
                        - parseInt(css(el.parentNode, 'padding-top'), 10)
                        - parseInt(css(el.parentNode, 'padding-bottom'), 10)
                    ),
                    offsetMargin = Math.round(
                        (parentHeight - elHeight)
                        / 2
                    )
                ;

                el.style.marginTop = offsetMargin + 'px';
            };

            resizer();

            addEvent(window, 'resize', resizer);
        };

        if (!el.length) {
            el = [el];
        }

        for (var i = 0; i < el.length; i++) {
            resize(el[i]);
        }

        // return set of elements
        return el;
    };
})(window, document);
