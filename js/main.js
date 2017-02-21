var ResponsiveBootstrapToolkit = function(e) {
    var i = {
        detectionDivs: {
            bootstrap: {
                xs: e('<div class="device-xs visible-xs visible-xs-block"></div>'),
                sm: e('<div class="device-sm visible-sm visible-sm-block"></div>'),
                md: e('<div class="device-md visible-md visible-md-block"></div>'),
                lg: e('<div class="device-lg visible-lg visible-lg-block"></div>'),
                xl: e('<div class="device-xl visible-xl visible-xl-block"></div>')
            },
            foundation: {
                small: e('<div class="device-xs show-for-small-only"></div>'),
                medium: e('<div class="device-sm show-for-medium-only"></div>'),
                large: e('<div class="device-md show-for-large-only"></div>'),
                xlarge: e('<div class="device-lg show-for-xlarge-only"></div>')
            }
        },
        applyDetectionDivs: function() {
            e(document).ready(function() {
                e.each(t.breakpoints, function(e) {
                    t.breakpoints[e].appendTo(".responsive-bootstrap-toolkit")
                })
            })
        },
        isAnExpression: function(e) {
            return "<" == e.charAt(0) || ">" == e.charAt(0)
        },
        splitExpression: function(e) {
            var i = e.charAt(0)
              , t = "=" == e.charAt(1)
              , s = 1 + (t ? 1 : 0)
              , o = e.slice(s);
            return {
                operator: i,
                orEqual: t,
                breakpointName: o
            }
        },
        isAnyActive: function(i) {
            var s = !1;
            return e.each(i, function(e, i) {
                if (t.breakpoints[i].is(":visible"))
                    return s = !0,
                    !1
            }),
            s
        },
        isMatchingExpression: function(e) {
            var s = i.splitExpression(e)
              , o = Object.keys(t.breakpoints)
              , n = o.indexOf(s.breakpointName);
            if (n !== -1) {
                var r = 0
                  , a = 0;
                "<" == s.operator && (r = 0,
                a = s.orEqual ? ++n : n),
                ">" == s.operator && (r = s.orEqual ? n : ++n,
                a = void 0);
                var c = o.slice(r, a);
                return i.isAnyActive(c)
            }
        }
    }
      , t = {
        interval: 300,
        framework: null,
        breakpoints: null,
        is: function(e) {
            return i.isAnExpression(e) ? i.isMatchingExpression(e) : t.breakpoints[e] && t.breakpoints[e].is(":visible")
        },
        use: function(e, s) {
            t.framework = e.toLowerCase(),
            "bootstrap" === t.framework || "foundation" === t.framework ? t.breakpoints = i.detectionDivs[t.framework] : t.breakpoints = s,
            i.applyDetectionDivs()
        },
        current: function() {
            var i = "unrecognized";
            return e.each(t.breakpoints, function(e) {
                t.is(e) && (i = e)
            }),
            i
        },
        changed: function(e, i) {
            var s;
            return function() {
                clearTimeout(s),
                s = setTimeout(function() {
                    e()
                }, i || t.interval)
            }
        }
    };
    return e('<div class="responsive-bootstrap-toolkit"></div>').appendTo("body"),
    null === t.framework && t.use("bootstrap"),
    t
}(jQuery);
!("function" == typeof Number.isNaN) || (Number.isNaN = function(e) {
    return null !== e && (e != e || +e != e)
}
),
window.Tether = function() {
    throw new Error("Your Bootstrap may actually need Tether.")
}
,
function(e, i) {
    "use strict";
    var t = function(e, i, t) {
        var s;
        return function() {
            function o() {
                t || e.apply(n, r),
                s = null
            }
            var n = this
              , r = arguments;
            s ? clearTimeout(s) : t && e.apply(n, r),
            s = setTimeout(o, i || 100)
        }
    };
    jQuery.fn[i] = function(e) {
        return e ? this.bind("resize", t(e)) : this.trigger(i)
    }
}(jQuery, "smartresize"),
function(e, i) {
    var t = function(i) {
        "use strict";
        var t = e(this);
        if (t && t.offset()) {
            var s = [];
            if (e(t).attr("data-images")) {
                var o = e(t).attr("data-images").split(",");
                s = [];
                for (var n = 0; n < o.length; n++) {
                    var r = o[n];
                    r = r.replace(/'/g, ""),
                    r = r.trim(),
                    r.length > 0 && s.push(r)
                }
            }
            var a = function() {
                var e = s.length - 1
                  , i = 0
                  , t = Math.floor(Math.random() * (e - i + 1)) + i;
                return s[t]
            }
              , c = e("<img />", {
                class: "img-bg",
                "data-index": 0,
                src: a()
            });
            return e(t).prepend(c),
            t
        }
    };
    jQuery.fn[i] = t
}(jQuery, "BackgroundCarousel"),
function(e, i) {
    "use strict";
    var t = function(i) {
        var t = e(this);
        if (t && t.offset()) {
            var s, o = e(".venture-slider-controls", e(t).parent()).first(), n = 1, r = function() {
                var i = e(window).innerWidth();
                return i > 767 ? "big" : "small"
            }, a = function() {
                s = r(),
                e(".venture-box-selector", o).click(function(i) {
                    var s = e(this).attr("data-index")
                      , o = e(".venture-box-selector.active")
                      , r = n;
                    if (r != s) {
                        n = s,
                        e(o).removeClass("active"),
                        e(this).toggleClass("active");
                        var a = e(t).offset().left
                          , c = e(t).outerWidth()
                          , l = 0
                          , u = a - c
                          , v = e(".venture-box-column[data-index=" + s + "]")
                          , d = e(".venture-box-column[data-index=" + r + "]");
                        e(v).removeClass("hidden-sm-down"),
                        e(d).removeClass("hidden-sm-down");
                        var f = 1e3;
                        e(v).css({
                            left: u,
                            top: l,
                            position: "absolute"
                        }).animate({
                            left: "0px",
                            opacity: "show"
                        }, f, function() {
                            e(v).css("right", ""),
                            e(v).css("left", ""),
                            e(v).css("top", ""),
                            e(v).css("position", "")
                        }),
                        e(d).css({
                            left: a,
                            top: l,
                            position: "absolute"
                        }).animate({
                            left: c + "px",
                            opacity: "hide"
                        }, f, function() {
                            e(d).hide(),
                            e(v).css("right", ""),
                            e(v).css("left", ""),
                            e(v).css("top", ""),
                            e(v).css("position", "")
                        })
                    }
                })
            }, c = function() {
                var i = e(".venture-box-column[data-index=" + n + "]");
                e(i).removeClass("hidden-sm-down");
                var s = e(t).offset().left
                  , o = e(t).outerWidth()
                  , r = 0
                  , a = s - o;
                e(i).css({
                    left: a,
                    top: r,
                    position: "absolute"
                }).animate({
                    left: "0px",
                    opacity: "show"
                }, 250, function() {
                    e(i).css("right", ""),
                    e(i).css("left", ""),
                    e(i).css("top", ""),
                    e(i).css("position", "")
                })
            }, l = function() {
                e(".venture-box-column", t).each(function() {
                    e(this).css("right", ""),
                    e(this).css("left", ""),
                    e(this).css("top", ""),
                    e(this).css("position", "relative"),
                    e(this).css("display", "inline-block"),
                    e(this).addClass("hidden-sm-down")
                })
            };
            return a(),
            e(window).smartresize(function() {
                if (t && t.offset()) {
                    var e = r();
                    e !== s && ("small" === e ? c() : l(),
                    s = e)
                }
            }),
            t
        }
    };
    jQuery.fn[i] = t
}(jQuery, "VentureSlider"),
function(e) {
    function i(e) {
        "use strict";
        var i = "data-async";
        if (e = e || window.document.querySelectorAll("[" + i + "]"),
        e.length) {
            for (var t = 0; t < e.length; t++) {
                var s = e[t];
                s["link" !== s.tagName.toLowerCase() ? "src" : "href"] = s.getAttribute(i),
                s.removeAttribute(i)
            }
            return e
        }
    }
    function t() {
        e(".js-only").toggleClass("js-only"),
        e(".no-js").remove()
    }
    if (i(),
    t(),
    !Modernizr.objectfit) {
        objectFitVideos();
        var s = function(e, i) {
            i && e.css("backgroundImage", "url(" + i + ")").addClass("compat-object-fit")
        };
        e(".img-bg-container").each(function() {
            var i = e(this)
              , t = i.find("img.img-bg").prop("src");
            s(i, t)
        }),
        e(".cover").each(function() {
            var i = e(this)
              , t = i.parent()
              , o = i.prop("src");
            s(t, o)
        }),
        e(".vid-bg-container").each(function() {
            var i = e(this)
              , t = i.find("video");
            t.get(0).play()
        }),
        e(window).smartresize(function() {
            objectFitVideos()
        })
    }
}(jQuery);
