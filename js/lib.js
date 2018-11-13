//FONTS

!function () {
    var nua = navigator.userAgent;
    var noSupport = !window.addEventListener // IE8 и ниже
        || (nua.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/) && !nua.match(/Chrome/)) // Android Stock Browser до 4.4 и Opera Mini
    if (noSupport) {
        return;
    }
    function e(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
    }
    function t(e) {
        return window.localStorage && localStorage.font_css_cache && localStorage.font_css_cache_file === e
    }
    function n() {
        if (window.localStorage && window.XMLHttpRequest)if (t(o))c(localStorage.font_css_cache); else {
            var n = new XMLHttpRequest;
            n.open("GET", o, !0), e(n, "load", function () {
                4 === n.readyState && (c(n.responseText), localStorage.font_css_cache = n.responseText, localStorage.font_css_cache_file = o)
            }), n.send()
        } else {
            var a = document.createElement("link");
            a.href = o, a.rel = "stylesheet", a.type = "text/css", document.getElementsByTagName("head")[0].appendChild(a), document.cookie = "font_css_cache"
        }
    }
    function c(e) {
        var t = document.createElement("style");
        t.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(t)
    }
    var o = "font.css"; //url file font convert base64
    window.localStorage && localStorage.font_css_cache || document.cookie.indexOf("font_css_cache") > -1 ? n() : e(window, "load", n)
}();

// SELBEL
(function($){
    $.fn.selbel = function(settings) {
        var defaults = {
                onChange: function(){},
                label: ''
            },
            options = $.extend(defaults, settings);

        return this.each(function () {
            var el = $(this),
                sb_label = options.label ? '<label>' + options.label + '</label>' : '';
            if (!el.hasClass('selbel')) { el.addClass('selbel'); }
            el.each(function() {
                $(this).wrap("<span class='selbel_w' />").after(sb_label + '<span>' + $('*:selected', this).text() + '</span>');
            });
            el.change(function() {
                $(this).next().text($('*:selected', this).text());
                if(options.onChange) options.onChange.call(this);
            });
        });
    };
})(jQuery);