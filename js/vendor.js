/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderradius-boxsizing-canvas-cssanimations-csscalc-cssgradients-cssremunit-csstransforms-csstransitions-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-es5-es5array-es5date-es5function-es5object-es5string-es5syntax-es5undefined-flexbox-flexboxlegacy-flexwrap-fontface-formvalidation-input-inputtypes-lastchild-microdata-objectfit-opacity-overflowscrolling-picture-rgba-scriptasync-scriptdefer-sizes-strictmode-supports-svg-textalignlast-video-videoautoplay-videoloop-videopreload-wrapflow-xhr2-xhrresponsetype-xhrresponsetypejson-xhrresponsetypetext-setclasses !*/
!function(window, document, undefined) {
    function is(e, t) {
        return typeof e === t
    }
    function testRunner() {
        var e, t, r, n, A, o, i;
        for (var s in tests)
            if (tests.hasOwnProperty(s)) {
                if (e = [],
                t = tests[s],
                t.name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (r = 0; r < t.options.aliases.length; r++)
                        e.push(t.options.aliases[r].toLowerCase());
                for (n = is(t.fn, "function") ? t.fn() : t.fn,
                A = 0; A < e.length; A++)
                    o = e[A],
                    i = o.split("."),
                    1 === i.length ? Modernizr[i[0]] = n : (!Modernizr[i[0]] || Modernizr[i[0]]instanceof Boolean || (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])),
                    Modernizr[i[0]][i[1]] = n),
                    classes.push((n ? "" : "no-") + i.join("-"))
            }
    }
    function setClasses(e) {
        var t = docElement.className
          , r = Modernizr._config.classPrefix || "";
        if (isSVG && (t = t.baseVal),
        Modernizr._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + r + "no-js(\\s|$)");
            t = t.replace(n, "$1" + r + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + r + e.join(" " + r),
        isSVG ? docElement.className.baseVal = t : docElement.className = t)
    }
    function createElement() {
        return "function" != typeof document.createElement ? document.createElement(arguments[0]) : isSVG ? document.createElementNS.call(document, "http://www.w3.org/2000/svg", arguments[0]) : document.createElement.apply(document, arguments)
    }
    function contains(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function getBody() {
        var e = document.body;
        return e || (e = createElement(isSVG ? "svg" : "body"),
        e.fake = !0),
        e
    }
    function injectElementWithStyles(e, t, r, n) {
        var A, o, i, s, d = "modernizr", a = createElement("div"), l = getBody();
        if (parseInt(r, 10))
            for (; r--; )
                i = createElement("div"),
                i.id = n ? n[r] : d + (r + 1),
                a.appendChild(i);
        return A = createElement("style"),
        A.type = "text/css",
        A.id = "s" + d,
        (l.fake ? l : a).appendChild(A),
        l.appendChild(a),
        A.styleSheet ? A.styleSheet.cssText = e : A.appendChild(document.createTextNode(e)),
        a.id = d,
        l.fake && (l.style.background = "",
        l.style.overflow = "hidden",
        s = docElement.style.overflow,
        docElement.style.overflow = "hidden",
        docElement.appendChild(l)),
        o = t(a, e),
        l.fake ? (l.parentNode.removeChild(l),
        docElement.style.overflow = s,
        docElement.offsetHeight) : a.parentNode.removeChild(a),
        !!o
    }
    function domToCSS(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function nativeTestProps(e, t) {
        var r = e.length;
        if ("CSS"in window && "supports"in window.CSS) {
            for (; r--; )
                if (window.CSS.supports(domToCSS(e[r]), t))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in window) {
            for (var n = []; r--; )
                n.push("(" + domToCSS(e[r]) + ":" + t + ")");
            return n = n.join(" or "),
            injectElementWithStyles("@supports (" + n + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return undefined
    }
    function cssToDOM(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, r) {
            return t + r.toUpperCase()
        }).replace(/^-/, "")
    }
    function testProps(e, t, r, n) {
        function A() {
            i && (delete mStyle.style,
            delete mStyle.modElem)
        }
        if (n = is(n, "undefined") ? !1 : n,
        !is(r, "undefined")) {
            var o = nativeTestProps(e, r);
            if (!is(o, "undefined"))
                return o
        }
        for (var i, s, d, a, l, c = ["modernizr", "tspan"]; !mStyle.style; )
            i = !0,
            mStyle.modElem = createElement(c.shift()),
            mStyle.style = mStyle.modElem.style;
        for (d = e.length,
        s = 0; d > s; s++)
            if (a = e[s],
            l = mStyle.style[a],
            contains(a, "-") && (a = cssToDOM(a)),
            mStyle.style[a] !== undefined) {
                if (n || is(r, "undefined"))
                    return A(),
                    "pfx" == t ? a : !0;
                try {
                    mStyle.style[a] = r
                } catch (u) {}
                if (mStyle.style[a] != l)
                    return A(),
                    "pfx" == t ? a : !0
            }
        return A(),
        !1
    }
    function fnBind(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function testDOMProps(e, t, r) {
        var n;
        for (var A in e)
            if (e[A]in t)
                return r === !1 ? e[A] : (n = t[e[A]],
                is(n, "function") ? fnBind(n, r || t) : n);
        return !1
    }
    function testPropsAll(e, t, r, n, A) {
        var o = e.charAt(0).toUpperCase() + e.slice(1)
          , i = (e + " " + cssomPrefixes.join(o + " ") + o).split(" ");
        return is(t, "string") || is(t, "undefined") ? testProps(i, t, n, A) : (i = (e + " " + domPrefixes.join(o + " ") + o).split(" "),
        testDOMProps(i, t, r))
    }
    function testAllProps(e, t, r) {
        return testPropsAll(e, undefined, undefined, t, r)
    }
    function roundedEquals(e, t) {
        return e - 1 === t || e === t || e + 1 === t
    }
    function addTest(e, t) {
        if ("object" == typeof e)
            for (var r in e)
                hasOwnProp(e, r) && addTest(r, e[r]);
        else {
            e = e.toLowerCase();
            var n = e.split(".")
              , A = Modernizr[n[0]];
            if (2 == n.length && (A = A[n[1]]),
            "undefined" != typeof A)
                return Modernizr;
            t = "function" == typeof t ? t() : t,
            1 == n.length ? Modernizr[n[0]] = t : (!Modernizr[n[0]] || Modernizr[n[0]]instanceof Boolean || (Modernizr[n[0]] = new Boolean(Modernizr[n[0]])),
            Modernizr[n[0]][n[1]] = t),
            setClasses([(t && 0 != t ? "" : "no-") + n.join("-")]),
            Modernizr._trigger(e, t)
        }
        return Modernizr
    }
    var tests = []
      , ModernizrProto = {
        _version: "3.3.1",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var r = this;
            setTimeout(function() {
                t(r[e])
            }, 0)
        },
        addTest: function(e, t, r) {
            tests.push({
                name: e,
                fn: t,
                options: r
            })
        },
        addAsyncTest: function(e) {
            tests.push({
                name: null,
                fn: e
            })
        }
    }
      , Modernizr = function() {};
    Modernizr.prototype = ModernizrProto,
    Modernizr = new Modernizr;
    var classes = []
      , docElement = document.documentElement
      , isSVG = "svg" === docElement.nodeName.toLowerCase();
    Modernizr.addTest("canvas", function() {
        var e = createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    });
    var inputElem = createElement("input")
      , inputattrs = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")
      , attrs = {};
    Modernizr.input = function(e) {
        for (var t = 0, r = e.length; r > t; t++)
            attrs[e[t]] = !!(e[t]in inputElem);
        return attrs.list && (attrs.list = !(!createElement("datalist") || !window.HTMLDataListElement)),
        attrs
    }(inputattrs);
    var inputtypes = "search tel url email datetime date month week time datetime-local number range color".split(" ")
      , inputs = {};
    Modernizr.inputtypes = function(e) {
        for (var t, r, n, A = e.length, o = "1)", i = 0; A > i; i++)
            inputElem.setAttribute("type", t = e[i]),
            n = "text" !== inputElem.type && "style"in inputElem,
            n && (inputElem.value = o,
            inputElem.style.cssText = "position:absolute;visibility:hidden;",
            /^range$/.test(t) && inputElem.style.WebkitAppearance !== undefined ? (docElement.appendChild(inputElem),
            r = document.defaultView,
            n = r.getComputedStyle && "textfield" !== r.getComputedStyle(inputElem, null).WebkitAppearance && 0 !== inputElem.offsetHeight,
            docElement.removeChild(inputElem)) : /^(search|tel)$/.test(t) || (n = /^(url|email)$/.test(t) ? inputElem.checkValidity && inputElem.checkValidity() === !1 : inputElem.value != o)),
            inputs[e[i]] = !!n;
        return inputs
    }(inputtypes),
    Modernizr.addTest("svg", !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect),
    Modernizr.addTest("video", function() {
        var e = createElement("video")
          , t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t),
            t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""),
            t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""),
            t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (r) {}
        return t
    });
    var omPrefixes = "Moz O ms Webkit"
      , cssomPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.split(" ") : [];
    ModernizrProto._cssomPrefixes = cssomPrefixes;
    var modElem = {
        elem: createElement("modernizr")
    };
    Modernizr._q.push(function() {
        delete modElem.elem
    });
    var mStyle = {
        style: modElem.elem.style
    };
    Modernizr._q.unshift(function() {
        delete mStyle.style
    });
    var domPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(" ") : [];
    ModernizrProto._domPrefixes = domPrefixes,
    ModernizrProto.testAllProps = testPropsAll,
    ModernizrProto.testAllProps = testAllProps,
    Modernizr.addTest("cssanimations", testAllProps("animationName", "a", !0));
    var atRule = function(e) {
        var t, r = prefixes.length, n = window.CSSRule;
        if ("undefined" == typeof n)
            return undefined;
        if (!e)
            return !1;
        if (e = e.replace(/^@/, ""),
        t = e.replace(/-/g, "_").toUpperCase() + "_RULE",
        t in n)
            return "@" + e;
        for (var A = 0; r > A; A++) {
            var o = prefixes[A]
              , i = o.toUpperCase() + "_" + t;
            if (i in n)
                return "@-" + o.toLowerCase() + "-" + e
        }
        return !1
    };
    ModernizrProto.atRule = atRule;
    var prefixed = ModernizrProto.prefixed = function(e, t, r) {
        return 0 === e.indexOf("@") ? atRule(e) : (-1 != e.indexOf("-") && (e = cssToDOM(e)),
        t ? testPropsAll(e, t, r) : testPropsAll(e, "pfx"))
    }
    ;
    Modernizr.addTest("backgroundblendmode", prefixed("backgroundBlendMode", "text")),
    Modernizr.addTest("backgroundcliptext", function() {
        return testAllProps("backgroundClip", "text")
    }),
    Modernizr.addTest("bgpositionshorthand", function() {
        var e = createElement("a")
          , t = e.style
          , r = "right 10px bottom 10px";
        return t.cssText = "background-position: " + r + ";",
        t.backgroundPosition === r
    }),
    Modernizr.addTest("bgpositionxy", function() {
        return testAllProps("backgroundPositionX", "3px", !0) && testAllProps("backgroundPositionY", "5px", !0)
    }),
    Modernizr.addTest("bgrepeatround", testAllProps("backgroundRepeat", "round")),
    Modernizr.addTest("bgrepeatspace", testAllProps("backgroundRepeat", "space")),
    Modernizr.addTest("backgroundsize", testAllProps("backgroundSize", "100%", !0)),
    Modernizr.addTest("bgsizecover", testAllProps("backgroundSize", "cover")),
    Modernizr.addTest("borderradius", testAllProps("borderRadius", "0px", !0)),
    Modernizr.addTest("boxsizing", testAllProps("boxSizing", "border-box", !0) && (document.documentMode === undefined || document.documentMode > 7));
    var prefixes = ModernizrProto._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    ModernizrProto._prefixes = prefixes,
    Modernizr.addTest("csscalc", function() {
        var e = "width:"
          , t = "calc(10px);"
          , r = createElement("a");
        return r.style.cssText = e + prefixes.join(t + e),
        !!r.style.length
    }),
    Modernizr.addTest("flexbox", testAllProps("flexBasis", "1px", !0)),
    Modernizr.addTest("flexboxlegacy", testAllProps("boxDirection", "reverse", !0)),
    Modernizr.addTest("flexwrap", testAllProps("flexWrap", "wrap", !0));
    var testStyles = ModernizrProto.testStyles = injectElementWithStyles
      , blacklist = function() {
        var e = navigator.userAgent
          , t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1)
          , r = e.match(/w(eb)?osbrowser/gi)
          , n = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9
          , A = 533 > t && e.match(/android/gi);
        return r || A || n
    }();
    blacklist ? Modernizr.addTest("fontface", !1) : testStyles('@font-face {font-family:"font";src:url("https://")}', function(e, t) {
        var r = document.getElementById("smodernizr")
          , n = r.sheet || r.styleSheet
          , A = n ? n.cssRules && n.cssRules[0] ? n.cssRules[0].cssText : n.cssText || "" : ""
          , o = /src/i.test(A) && 0 === A.indexOf(t.split(" ")[0]);
        Modernizr.addTest("fontface", o)
    }),
    Modernizr.addTest("cssgradients", function() {
        for (var e, t = "background-image:", r = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "", A = 0, o = prefixes.length - 1; o > A; A++)
            e = 0 === A ? "to " : "",
            n += t + prefixes[A] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (n += t + "-webkit-" + r);
        var i = createElement("a")
          , s = i.style;
        return s.cssText = n,
        ("" + s.backgroundImage).indexOf("gradient") > -1
    }),
    testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", function(e) {
        Modernizr.addTest("lastchild", e.lastChild.offsetWidth > e.firstChild.offsetWidth)
    }, 2),
    Modernizr.addTest("objectfit", !!prefixed("objectFit"), {
        aliases: ["object-fit"]
    }),
    Modernizr.addTest("opacity", function() {
        var e = createElement("a").style;
        return e.cssText = prefixes.join("opacity:.55;"),
        /^0.55$/.test(e.opacity)
    }),
    Modernizr.addTest("overflowscrolling", testAllProps("overflowScrolling", "touch", !0)),
    Modernizr.addTest("cssremunit", function() {
        var e = createElement("a").style;
        try {
            e.fontSize = "3rem"
        } catch (t) {}
        return /rem/.test(e.fontSize)
    }),
    Modernizr.addTest("rgba", function() {
        var e = createElement("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)",
        ("" + e.backgroundColor).indexOf("rgba") > -1
    });
    var newSyntax = "CSS"in window && "supports"in window.CSS
      , oldSyntax = "supportsCSS"in window;
    Modernizr.addTest("supports", newSyntax || oldSyntax),
    Modernizr.addTest("textalignlast", testAllProps("textAlignLast")),
    Modernizr.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && testAllProps("transform", "scale(1)", !0)
    }),
    Modernizr.addTest("csstransitions", testAllProps("transition", "all", !0)),
    testStyles("#modernizr { height: 50vh; }", function(e) {
        var t = parseInt(window.innerHeight / 2, 10)
          , r = parseInt((window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).height, 10);
        Modernizr.addTest("cssvhunit", r == t)
    }),
    testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
        var t = e.childNodes[2]
          , r = e.childNodes[1]
          , n = e.childNodes[0]
          , A = parseInt((r.offsetWidth - r.clientWidth) / 2, 10)
          , o = n.clientWidth / 100
          , i = n.clientHeight / 100
          , s = parseInt(50 * Math.max(o, i), 10)
          , d = parseInt((window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
        Modernizr.addTest("cssvmaxunit", roundedEquals(s, d) || roundedEquals(s, d - A))
    }, 3),
    testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
        var t = e.childNodes[2]
          , r = e.childNodes[1]
          , n = e.childNodes[0]
          , A = parseInt((r.offsetWidth - r.clientWidth) / 2, 10)
          , o = n.clientWidth / 100
          , i = n.clientHeight / 100
          , s = parseInt(50 * Math.min(o, i), 10)
          , d = parseInt((window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
        Modernizr.addTest("cssvminunit", roundedEquals(s, d) || roundedEquals(s, d - A))
    }, 3),
    testStyles("#modernizr { width: 50vw; }", function(e) {
        var t = parseInt(window.innerWidth / 2, 10)
          , r = parseInt((window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).width, 10);
        Modernizr.addTest("cssvwunit", r == t)
    }),
    Modernizr.addTest("wrapflow", function() {
        var e = prefixed("wrapFlow");
        if (!e || isSVG)
            return !1;
        var t = e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
          , r = createElement("div")
          , n = createElement("div")
          , A = createElement("span");
        n.style.cssText = "position: absolute; left: 50px; width: 100px; height: 20px;" + t + ":end;",
        A.innerText = "X",
        r.appendChild(n),
        r.appendChild(A),
        docElement.appendChild(r);
        var o = A.offsetLeft;
        return docElement.removeChild(r),
        n = A = r = undefined,
        150 == o
    }),
    Modernizr.addTest("microdata", "getItems"in document),
    Modernizr.addTest("picture", "HTMLPictureElement"in window),
    Modernizr.addTest("es5array", function() {
        return !!(Array.prototype && Array.prototype.every && Array.prototype.filter && Array.prototype.forEach && Array.prototype.indexOf && Array.prototype.lastIndexOf && Array.prototype.map && Array.prototype.some && Array.prototype.reduce && Array.prototype.reduceRight && Array.isArray)
    }),
    Modernizr.addTest("es5date", function() {
        var e = "2013-04-12T06:06:37.307Z"
          , t = !1;
        try {
            t = !!Date.parse(e)
        } catch (r) {}
        return !!(Date.now && Date.prototype && Date.prototype.toISOString && Date.prototype.toJSON && t)
    }),
    Modernizr.addTest("es5function", function() {
        return !(!Function.prototype || !Function.prototype.bind)
    }),
    Modernizr.addTest("es5object", function() {
        return !!(Object.keys && Object.create && Object.getPrototypeOf && Object.getOwnPropertyNames && Object.isSealed && Object.isFrozen && Object.isExtensible && Object.getOwnPropertyDescriptor && Object.defineProperty && Object.defineProperties && Object.seal && Object.freeze && Object.preventExtensions)
    }),
    Modernizr.addTest("strictmode", function() {
        "use strict";
        return !this
    }()),
    Modernizr.addTest("es5string", function() {
        return !(!String.prototype || !String.prototype.trim)
    }),
    Modernizr.addTest("json", "JSON"in window && "parse"in JSON && "stringify"in JSON),
    Modernizr.addTest("es5syntax", function() {
        var value, obj, stringAccess, getter, setter, reservedWords, zeroWidthChars;
        try {
            return stringAccess = eval('"foobar"[3] === "b"'),
            getter = eval("({ get x(){ return 1 } }).x === 1"),
            eval("({ set x(v){ value = v; } }).x = 1"),
            setter = 1 === value,
            eval("obj = ({ if: 1 })"),
            reservedWords = 1 === obj["if"],
            zeroWidthChars = eval("_‌‍ = true"),
            stringAccess && getter && setter && reservedWords && zeroWidthChars
        } catch (ignore) {
            return !1
        }
    }),
    Modernizr.addTest("es5undefined", function() {
        var e, t;
        try {
            t = window.undefined,
            window.undefined = 12345,
            e = "undefined" == typeof window.undefined,
            window.undefined = t
        } catch (r) {
            return !1
        }
        return e
    }),
    Modernizr.addTest("es5", function() {
        return !!(Modernizr.es5array && Modernizr.es5date && Modernizr.es5function && Modernizr.es5object && Modernizr.strictmode && Modernizr.es5string && Modernizr.json && Modernizr.es5syntax && Modernizr.es5undefined)
    }),
    Modernizr.addTest("formvalidation", function() {
        var e = createElement("form");
        if (!("checkValidity"in e && "addEventListener"in e))
            return !1;
        if ("reportValidity"in e)
            return !0;
        var t, r = !1;
        return Modernizr.formvalidationapi = !0,
        e.addEventListener("submit", function(e) {
            (!window.opera || window.operamini) && e.preventDefault(),
            e.stopPropagation()
        }, !1),
        e.innerHTML = '<input name="modTest" required="required" /><button></button>',
        testStyles("#modernizr form{position:absolute;top:-99999em}", function(n) {
            n.appendChild(e),
            t = e.getElementsByTagName("input")[0],
            t.addEventListener("invalid", function(e) {
                r = !0,
                e.preventDefault(),
                e.stopPropagation()
            }, !1),
            Modernizr.formvalidationmessage = !!t.validationMessage,
            e.getElementsByTagName("button")[0].click()
        }),
        r
    });
    var hasOwnProp;
    !function() {
        var e = {}.hasOwnProperty;
        hasOwnProp = is(e, "undefined") || is(e.call, "undefined") ? function(e, t) {
            return t in e && is(e.constructor.prototype[t], "undefined")
        }
        : function(t, r) {
            return e.call(t, r)
        }
    }(),
    ModernizrProto._l = {},
    ModernizrProto.on = function(e, t) {
        this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }
    ,
    ModernizrProto._trigger = function(e, t) {
        if (this._l[e]) {
            var r = this._l[e];
            setTimeout(function() {
                var e, n;
                for (e = 0; e < r.length; e++)
                    (n = r[e])(t)
            }, 0),
            delete this._l[e]
        }
    }
    ,
    Modernizr._q.push(function() {
        ModernizrProto.addTest = addTest
    }),
    Modernizr.addAsyncTest(function() {
        var e, t, r, n = createElement("img"), A = "sizes"in n;
        !A && "srcset"in n ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
        e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        r = function() {
            addTest("sizes", 2 == n.width)
        }
        ,
        n.onload = r,
        n.onerror = r,
        n.setAttribute("sizes", "9px"),
        n.srcset = e + " 1w," + t + " 8w",
        n.src = e) : addTest("sizes", A)
    });
    var testXhrType = function(e) {
        if ("undefined" == typeof XMLHttpRequest)
            return !1;
        var t = new XMLHttpRequest;
        t.open("get", "/", !0);
        try {
            t.responseType = e
        } catch (r) {
            return !1
        }
        return "response"in t && t.responseType == e
    };
    Modernizr.addTest("xhrresponsetypejson", testXhrType("json")),
    Modernizr.addTest("xhrresponsetypetext", testXhrType("text")),
    Modernizr.addTest("xhrresponsetype", function() {
        if ("undefined" == typeof XMLHttpRequest)
            return !1;
        var e = new XMLHttpRequest;
        return e.open("get", "/", !0),
        "response"in e
    }()),
    Modernizr.addTest("xhr2", "XMLHttpRequest"in window && "withCredentials"in new XMLHttpRequest),
    Modernizr.addTest("scriptasync", "async"in createElement("script")),
    Modernizr.addTest("scriptdefer", "defer"in createElement("script")),
    Modernizr.addAsyncTest(function() {
        function e(r) {
            clearTimeout(t),
            n.removeEventListener("playing", e, !1),
            addTest("videoautoplay", r && "playing" === r.type || 0 !== n.currentTime),
            n.parentNode.removeChild(n)
        }
        var t, r = 300, n = createElement("video"), A = n.style;
        if (!(Modernizr.video && "autoplay"in n))
            return void addTest("videoautoplay", !1);
        A.position = "absolute",
        A.height = 0,
        A.width = 0;
        try {
            if (Modernizr.video.ogg)
                n.src = "data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A";
            else {
                if (!Modernizr.video.h264)
                    return void addTest("videoautoplay", !1);
                n.src = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="
            }
        } catch (o) {
            return void addTest("videoautoplay", !1)
        }
        n.setAttribute("autoplay", ""),
        n.style.cssText = "display:none",
        docElement.appendChild(n),
        setTimeout(function() {
            n.addEventListener("playing", e, !1),
            t = setTimeout(e, r)
        }, 0)
    }),
    Modernizr.addTest("videoloop", "loop"in createElement("video")),
    Modernizr.addTest("videopreload", "preload"in createElement("video")),
    testRunner(),
    setClasses(classes),
    delete ModernizrProto.addTest,
    delete ModernizrProto.addAsyncTest;
    for (var i = 0; i < Modernizr._q.length; i++)
        Modernizr._q[i]();
    window.Modernizr = Modernizr
}(window, document);
/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a, b) {
    function c(a, b) {
        var c = a.createElement("p")
          , d = a.getElementsByTagName("head")[0] || a.documentElement;
        return c.innerHTML = "x<style>" + b + "</style>",
        d.insertBefore(c.lastChild, d.firstChild)
    }
    function d() {
        var a = t.elements;
        return "string" == typeof a ? a.split(" ") : a
    }
    function e(a, b) {
        var c = t.elements;
        "string" != typeof c && (c = c.join(" ")),
        "string" != typeof a && (a = a.join(" ")),
        t.elements = c + " " + a,
        j(b)
    }
    function f(a) {
        var b = s[a[q]];
        return b || (b = {},
        r++,
        a[q] = r,
        s[r] = b),
        b
    }
    function g(a, c, d) {
        if (c || (c = b),
        l)
            return c.createElement(a);
        d || (d = f(c));
        var e;
        return e = d.cache[a] ? d.cache[a].cloneNode() : p.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a),
        !e.canHaveChildren || o.test(a) || e.tagUrn ? e : d.frag.appendChild(e)
    }
    function h(a, c) {
        if (a || (a = b),
        l)
            return a.createDocumentFragment();
        c = c || f(a);
        for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++)
            e.createElement(h[g]);
        return e
    }
    function i(a, b) {
        b.cache || (b.cache = {},
        b.createElem = a.createElement,
        b.createFrag = a.createDocumentFragment,
        b.frag = b.createFrag()),
        a.createElement = function(c) {
            return t.shivMethods ? g(c, a, b) : b.createElem(c)
        }
        ,
        a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-:]+/g, function(a) {
            return b.createElem(a),
            b.frag.createElement(a),
            'c("' + a + '")'
        }) + ");return n}")(t, b.frag)
    }
    function j(a) {
        a || (a = b);
        var d = f(a);
        return !t.shivCSS || k || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
        l || i(a, d),
        a
    }
    var k, l, m = "3.7.3-pre", n = a.html5 || {}, o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, q = "_html5shiv", r = 0, s = {};
    !function() {
        try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>",
            k = "hidden"in a,
            l = 1 == a.childNodes.length || function() {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
            }()
        } catch (c) {
            k = !0,
            l = !0
        }
    }();
    var t = {
        elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: m,
        shivCSS: n.shivCSS !== !1,
        supportsUnknownElements: l,
        shivMethods: n.shivMethods !== !1,
        type: "default",
        shivDocument: j,
        createElement: g,
        createDocumentFragment: h,
        addElements: e
    };
    a.html5 = t,
    j(b),
    "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : this, document);
/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = []
      , d = a.document
      , e = Object.getPrototypeOf
      , f = c.slice
      , g = c.concat
      , h = c.push
      , i = c.indexOf
      , j = {}
      , k = j.toString
      , l = j.hasOwnProperty
      , m = l.toString
      , n = m.call(Object)
      , o = {};
    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a,
        b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.1.1"
      , r = function(a, b) {
        return new r.fn.init(a,b)
    }
      , s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , t = /^-ms-/
      , u = /-([a-z])/g
      , v = function(a, b) {
        return b.toUpperCase()
    };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this)
        },
        get: function(a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this,
            b
        },
        each: function(a) {
            return r.each(this, a)
        },
        map: function(a) {
            return this.pushStack(r.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    },
    r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || r.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1,
                    f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {},
                    g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor,
            "function" == typeof c && m.call(c) === n))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            p(a)
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1)
                        break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++)
                a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, f = 0, h = [];
            if (w(a))
                for (d = a.length; f < d; f++)
                    e = b(a[f], f, c),
                    null != e && h.push(e);
            else
                for (f in a)
                    e = b(a[f], f, c),
                    null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b],
            b = a,
            a = c),
            r.isFunction(a))
                return d = f.call(arguments, 2),
                e = function() {
                    return a.apply(b || this, d.concat(f.call(arguments)))
                }
                ,
                e.guid = a.guid = a.guid || r.guid++,
                e
        },
        now: Date.now,
        support: o
    }),
    "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
    r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });
    function w(a) {
        var b = !!a && "length"in a && a.length
          , c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+","g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$","g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]","g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = {
            ID: new RegExp("^#(" + L + ")"),
            CLASS: new RegExp("^\\.(" + L + ")"),
            TAG: new RegExp("^(" + L + "|[*])"),
            ATTR: new RegExp("^" + M),
            PSEUDO: new RegExp("^" + N),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)","i"),
            bool: new RegExp("^(?:" + J + ")$","i"),
            needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)","i")
        }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)","ig"), aa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function(a, b) {
            return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
        }, da = function() {
            m()
        }, ea = ta(function(a) {
            return a.disabled === !0 && ("form"in a || "label"in a)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes),
            D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9;
            if (d = d || [],
            "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j),
                                d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j),
                            d
                    } else {
                        if (l[2])
                            return G.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return G.apply(d, b.getElementsByClassName(f)),
                            d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w)
                        s = b,
                        r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u),
                        o = g(a),
                        h = o.length;
                        while (h--)
                            o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","),
                        s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r)
                        try {
                            return G.apply(d, s.querySelectorAll(r)),
                            d
                        } catch (x) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ia(a) {
            return a[u] = !0,
            a
        }
        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ka(a, b) {
            var c = a.split("|")
              , e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function la(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function oa(a) {
            return function(b) {
                return "form"in b ? b.parentNode && b.disabled === !1 ? "label"in b ? "label"in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label"in b && b.disabled === a
            }
        }
        function pa(a) {
            return ia(function(b) {
                return b = +b,
                ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {},
        f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }
        ,
        m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = n.documentElement,
            p = !f(n),
            v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
            c.attributes = ja(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = Y.test(n.getElementsByClassName),
            c.getById = ja(function(a) {
                return o.appendChild(a).id = u,
                !n.getElementsByName || !n.getElementsByName(u).length
            }),
            c.getById ? (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ,
            d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }
            ) : (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ,
            d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"),
                        c && c.value === a)
                            return [f];
                        e = b.getElementsByName(a),
                        d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"),
                            c && c.value === a)
                                return [f]
                    }
                    return []
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p)
                    return b.getElementsByClassName(a)
            }
            ,
            r = [],
            q = [],
            (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="),
                2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"),
                o.appendChild(a).disabled = !0,
                2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"),
                s.call(a, "[s!='']:x"),
                r.push("!=", N)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = Y.test(o.compareDocumentPosition),
            t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f)
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f)
                    return la(a, b);
                c = a;
                while (c = c.parentNode)
                    g.unshift(c);
                c = b;
                while (c = c.parentNode)
                    h.unshift(c);
                while (g[d] === h[d])
                    d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }
            ,
            n) : n
        }
        ,
        ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }
        ,
        ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(S, "='$1']"),
            c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }
        ,
        ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        ga.escape = function(a) {
            return (a + "").replace(ba, ca)
        }
        ,
        ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                m = q,
                                l = m[u] || (m[u] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                t = n && j[2],
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b,
                            l = m[u] || (m[u] = {}),
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                            j = k[a] || [],
                            n = j[0] === w && j[1],
                            t = n),
                            t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                    k[a] = [w, t]),
                                    m === b))
                                        break;
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = I(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a),
                    a = a.replace(_, aa).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function() {
                    return [0]
                }),
                last: pa(function(a, b) {
                    return [b - 1]
                }),
                eq: pa(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: pa(function(a, b) {
                    for (var c = 0; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                lt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = na(b);
        function ra() {}
        ra.prototype = d.filters = d.pseudos,
        d.setFilters = new ra,
        g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = R.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        }
        ;
        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++)
                d += a[b].value;
            return d
        }
        function ta(a, b, c) {
            var d = b.dir
              , e = b.next
              , f = e || d
              , g = c && "parentNode" === f
              , h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g)
                        return a(b, c, e);
                return !1
            }
            : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}),
                            k = l[b.uniqueID] || (l[b.uniqueID] = {}),
                            e && e === b.nodeName.toLowerCase())
                                b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h)
                                    return m[2] = j[2];
                                if (k[f] = m,
                                m[2] = a(b, c, i))
                                    return !0
                            }
                return !1
            }
        }
        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++)
                ga(a, b[d], c);
            return c
        }
        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                j && b.push(h)));
            return g
        }
        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)),
            e && !e[u] && (e = xa(e, f)),
            ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = wa(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = wa(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : G.apply(g, r)
            })
        }
        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                return a === b
            }, h, !0), l = ta(function(a) {
                return I(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; i < f; i++)
                if (c = d.relative[a[i].type])
                    m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type])
                                break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }
        function za(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0,
                        g || l.ownerDocument === n || (m(l),
                        h = !p);
                        while (q = a[o++])
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--,
                    f && t.push(l))
                }
                if (r += s,
                c && s !== r) {
                    o = 0;
                    while (q = b[o++])
                        q(t, u, g, h);
                    if (f) {
                        if (r > 0)
                            while (s--)
                                t[s] || u[s] || (u[s] = E.call(i));
                        u = wa(u)
                    }
                    G.apply(i, u),
                    k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = y,
                j = v),
                t
            };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = ya(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a);
            if (c = c || [],
            1 === n.length) {
                if (i = n[0] = n[0].slice(0),
                i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0],
                    !b)
                        return c;
                    m && (b = b.parentNode),
                    a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f],
                    d.relative[k = j.type])
                        break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1),
                        a = e.length && sa(i),
                        !a)
                            return G.apply(c, e),
                            c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b),
            c
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }),
        ja(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            if (!c)
                return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase())
                return a.defaultValue
        }),
        ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function(a, b, c) {
            var d;
            if (!c)
                return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        ga
    }(a);
    r.find = x,
    r.expr = x.selectors,
    r.expr[":"] = r.expr.pseudos,
    r.uniqueSort = r.unique = x.uniqueSort,
    r.text = x.getText,
    r.isXMLDoc = x.isXML,
    r.contains = x.contains,
    r.escapeSelector = x.escape;
    var y = function(a, b, c) {
        var d = []
          , e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && r(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }
      , z = function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }
      , A = r.expr.match.needsContext
      , B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , C = /^.[^:#\[\.,]*$/;
    function D(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c
        }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a),
        r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    r.fn.extend({
        find: function(a) {
            var b, c, d = this.length, e = this;
            if ("string" != typeof a)
                return this.pushStack(r(a).filter(function() {
                    for (b = 0; b < d; b++)
                        if (r.contains(e[b], this))
                            return !0
                }));
            for (c = this.pushStack([]),
            b = 0; b < d; b++)
                r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(D(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(D(this, a || [], !0))
        },
        is: function(a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, G = r.fn.init = function(a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || E,
        "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a),
            !e || !e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof r ? b[0] : b,
                r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
                B.test(e[1]) && r.isPlainObject(b))
                    for (e in b)
                        r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = d.getElementById(e[2]),
            f && (this[0] = f,
            this.length = 1),
            this
        }
        return a.nodeType ? (this[0] = a,
        this.length = 1,
        this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
    }
    ;
    G.prototype = r.fn,
    E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/
      , I = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this)
              , c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType)
            ;
        return a
    }
    r.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return y(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function(a) {
            return J(a, "nextSibling")
        },
        prev: function(a) {
            return J(a, "previousSibling")
        },
        nextAll: function(a) {
            return y(a, "nextSibling")
        },
        prevAll: function(a) {
            return y(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return z(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || r.merge([], a.childNodes)
        }
    }, function(a, b) {
        r.fn[a] = function(c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = r.filter(d, e)),
            this.length > 1 && (I[a] || r.uniqueSort(e),
            H.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var K = /[^\x20\t\r\n\f]+/g;
    function L(a) {
        var b = {};
        return r.each(a.match(K) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once,
            d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                    c = !1)
            }
            a.memory || (c = !1),
            b = !1,
            e && (f = c ? [] : "")
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1,
                g.push(c)),
                function d(b) {
                    r.each(b, function(b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                    })
                }(arguments),
                c && !b && i()),
                this
            },
            remove: function() {
                return r.each(arguments, function(a, b) {
                    var c;
                    while ((c = r.inArray(b, f, c)) > -1)
                        f.splice(c, 1),
                        c <= h && h--
                }),
                this
            },
            has: function(a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0
            },
            empty: function() {
                return f && (f = []),
                this
            },
            disable: function() {
                return e = g = [],
                f = c = "",
                this
            },
            disabled: function() {
                return !f
            },
            lock: function() {
                return e = g = [],
                c || b || (f = c = ""),
                this
            },
            locked: function() {
                return !!e
            },
            fireWith: function(a, c) {
                return e || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                g.push(c),
                b || i()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return j
    }
    ;
    function M(a) {
        return a
    }
    function N(a) {
        throw a
    }
    function O(a, b, c) {
        var d;
        try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
        } catch (a) {
            c.call(void 0, a)
        }
    }
    r.extend({
        Deferred: function(b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]]
              , d = "pending"
              , e = {
                state: function() {
                    return d
                },
                always: function() {
                    return f.done(arguments).fail(arguments),
                    this
                },
                "catch": function(a) {
                    return e.then(null, a)
                },
                pipe: function() {
                    var a = arguments;
                    return r.Deferred(function(b) {
                        r.each(c, function(c, d) {
                            var e = r.isFunction(a[d[4]]) && a[d[4]];
                            f[d[1]](function() {
                                var a = e && e.apply(this, arguments);
                                a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                then: function(b, d, e) {
                    var f = 0;
                    function g(b, c, d, e) {
                        return function() {
                            var h = this
                              , i = arguments
                              , j = function() {
                                var a, j;
                                if (!(b < f)) {
                                    if (a = d.apply(h, i),
                                    a === c.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    j = a && ("object" == typeof a || "function" == typeof a) && a.then,
                                    r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++,
                                    j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0,
                                    i = [a]),
                                    (e || c.resolveWith)(h, i))
                                }
                            }
                              , k = e ? j : function() {
                                try {
                                    j()
                                } catch (a) {
                                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace),
                                    b + 1 >= f && (d !== N && (h = void 0,
                                    i = [a]),
                                    c.rejectWith(h, i))
                                }
                            }
                            ;
                            b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()),
                            a.setTimeout(k))
                        }
                    }
                    return r.Deferred(function(a) {
                        c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)),
                        c[1][3].add(g(0, a, r.isFunction(b) ? b : M)),
                        c[2][3].add(g(0, a, r.isFunction(d) ? d : N))
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? r.extend(a, e) : e
                }
            }
              , f = {};
            return r.each(c, function(a, b) {
                var g = b[2]
                  , h = b[5];
                e[b[1]] = g.add,
                h && g.add(function() {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock),
                g.add(b[3].fire),
                f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments),
                    this
                }
                ,
                f[b[0] + "With"] = g.fireWith
            }),
            e.promise(f),
            b && b.call(f, f),
            f
        },
        when: function(a) {
            var b = arguments.length
              , c = b
              , d = Array(c)
              , e = f.call(arguments)
              , g = r.Deferred()
              , h = function(a) {
                return function(c) {
                    d[a] = this,
                    e[a] = arguments.length > 1 ? f.call(arguments) : c,
                    --b || g.resolveWith(d, e)
                }
            };
            if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject),
            "pending" === g.state() || r.isFunction(e[c] && e[c].then)))
                return g.then();
            while (c--)
                O(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }
    ,
    r.readyException = function(b) {
        a.setTimeout(function() {
            throw b
        })
    }
    ;
    var Q = r.Deferred();
    r.fn.ready = function(a) {
        return Q.then(a)["catch"](function(a) {
            r.readyException(a)
        }),
        this
    }
    ,
    r.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? r.readyWait++ : r.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0,
            a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
        }
    }),
    r.ready.then = Q.then;
    function R() {
        d.removeEventListener("DOMContentLoaded", R),
        a.removeEventListener("load", R),
        r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R),
    a.addEventListener("load", R));
    var S = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === r.type(c)) {
            e = !0;
            for (h in c)
                S(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        r.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(r(a), c)
        }
        )),
        b))
            for (; h < i; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , T = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function U() {
        this.expando = r.expando + U.uid++
    }
    U.uid = 1,
    U.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {},
            T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))),
            b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b)
                e[r.camelCase(b)] = c;
            else
                for (d in b)
                    e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c),
            void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b),
                    b = b in d ? [b] : b.match(K) || []),
                    c = b.length;
                    while (c--)
                        delete d[b[c]]
                }
                (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var V = new U
      , W = new U
      , X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Y = /[A-Z]/g;
    function Z(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a)
    }
    function $(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Y, "-$&").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = Z(c)
                } catch (e) {}
                W.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    r.extend({
        hasData: function(a) {
            return W.hasData(a) || V.hasData(a)
        },
        data: function(a, b, c) {
            return W.access(a, b, c)
        },
        removeData: function(a, b) {
            W.remove(a, b)
        },
        _data: function(a, b, c) {
            return V.access(a, b, c)
        },
        _removeData: function(a, b) {
            V.remove(a, b)
        }
    }),
    r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = W.get(f),
                1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)),
                        $(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                W.set(this, a)
            }) : S(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = W.get(f, a),
                    void 0 !== c)
                        return c;
                    if (c = $(f, a),
                    void 0 !== c)
                        return c
                } else
                    this.each(function() {
                        W.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                W.remove(this, a)
            })
        }
    }),
    r.extend({
        queue: function(a, b, c) {
            var d;
            if (a)
                return b = (b || "fx") + "queue",
                d = V.get(a, b),
                c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)),
                d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = r._queueHooks(a, b)
              , g = function() {
                r.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return V.get(a, c) || V.access(a, c, {
                empty: r.Callbacks("once memory").add(function() {
                    V.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                r.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = V.get(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$","i")
      , ba = ["Top", "Right", "Bottom", "Left"]
      , ca = function(a, b) {
        return a = b || a,
        "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
    }
      , da = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    };
    function ea(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur()
        }
        : function() {
            return r.css(a, b, "")
        }
        , i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"), k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do
                f = f || ".5",
                k /= f,
                r.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0,
        e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
        d && (d.unit = j,
        d.start = k,
        d.end = e)),
        e
    }
    var fa = {};
    function ga(a) {
        var b, c = a.ownerDocument, d = a.nodeName, e = fa[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)),
        e = r.css(b, "display"),
        b.parentNode.removeChild(b),
        "none" === e && (e = "block"),
        fa[d] = e,
        e)
    }
    function ha(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
            d = a[f],
            d.style && (c = d.style.display,
            b ? ("none" === c && (e[f] = V.get(d, "display") || null,
            e[f] || (d.style.display = "")),
            "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none",
            V.set(d, "display", c)));
        for (f = 0; f < g; f++)
            null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function() {
            return ha(this, !0)
        },
        hide: function() {
            return ha(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                ca(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ia = /^(?:checkbox|radio)$/i
      , ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , ka = /^$|\/(?:java|ecma)script/i
      , la = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    la.optgroup = la.option,
    la.tbody = la.tfoot = la.colgroup = la.caption = la.thead,
    la.th = la.td;
    function ma(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [],
        void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c
    }
    function na(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
            V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"))
    }
    var oa = /<|&#?\w+;/;
    function pa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n],
            f || 0 === f)
                if ("object" === r.type(f))
                    r.merge(m, f.nodeType ? [f] : f);
                else if (oa.test(f)) {
                    g = g || l.appendChild(b.createElement("div")),
                    h = (ja.exec(f) || ["", ""])[1].toLowerCase(),
                    i = la[h] || la._default,
                    g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2],
                    k = i[0];
                    while (k--)
                        g = g.lastChild;
                    r.merge(m, g.childNodes),
                    g = l.firstChild,
                    g.textContent = ""
                } else
                    m.push(b.createTextNode(f));
        l.textContent = "",
        n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1)
                e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f),
            g = ma(l.appendChild(f), "script"),
            j && na(g),
            c) {
                k = 0;
                while (f = g[k++])
                    ka.test(f.type || "") && c.push(f)
            }
        return l
    }
    !function() {
        var a = d.createDocumentFragment()
          , b = a.appendChild(d.createElement("div"))
          , c = d.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var qa = d.documentElement
      , ra = /^key/
      , sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , ta = /^([^.]*)(?:\.(.+)|)/;
    function ua() {
        return !0
    }
    function va() {
        return !1
    }
    function wa() {
        try {
            return d.activeElement
        } catch (a) {}
    }
    function xa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c,
            c = void 0);
            for (h in b)
                xa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c,
        d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
        d = void 0) : (e = d,
        d = c,
        c = void 0)),
        e === !1)
            e = va;
        else if (!e)
            return a;
        return 1 === f && (g = e,
        e = function(a) {
            return r().off(a),
            g.apply(this, arguments)
        }
        ,
        e.guid = g.guid || (g.guid = r.guid++)),
        a.each(function() {
            r.event.add(this, b, e, d, c)
        })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
            if (q) {
                c.handler && (f = c,
                c = f.handler,
                e = f.selector),
                e && r.find.matchesSelector(qa, e),
                c.guid || (c.guid = r.guid++),
                (i = q.events) || (i = q.events = {}),
                (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }
                ),
                b = (b || "").match(K) || [""],
                j = b.length;
                while (j--)
                    h = ta.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || "").split(".").sort(),
                    n && (l = r.event.special[n] || {},
                    n = (e ? l.delegateType : l.bindType) || n,
                    l = r.event.special[n] || {},
                    k = r.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && r.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f),
                    (m = i[n]) || (m = i[n] = [],
                    m.delegateCount = 0,
                    l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)),
                    l.add && (l.add.call(a, k),
                    k.handler.guid || (k.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    r.event.global[n] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(K) || [""],
                j = b.length;
                while (j--)
                    if (h = ta.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || "").split(".").sort(),
                    n) {
                        l = r.event.special[n] || {},
                        n = (d ? l.delegateType : l.bindType) || n,
                        m = i[n] || [],
                        h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        g = f = m.length;
                        while (f--)
                            k = m[f],
                            !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                            k.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle),
                        delete i[n])
                    } else
                        for (n in i)
                            r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (V.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {};
            for (i[0] = b,
            c = 1; c < arguments.length; c++)
                i[c] = arguments[c];
            if (b.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j),
                c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem,
                    d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
                        b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g,
                        b.data = g.data,
                        e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== e && (b.result = e) === !1 && (b.preventDefault(),
                        b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b),
                b.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [],
                        g = {},
                        c = 0; c < i; c++)
                            d = b[c],
                            e = d.selector + " ",
                            void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length),
                            g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return j = this,
            i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }),
            h
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function() {
                    if (this.originalEvent)
                        return b(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[a]
                }
                ,
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== wa() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === wa() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && r.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(a) {
                    return r.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    },
    r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    ,
    r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va,
        this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target,
        this.currentTarget = a.currentTarget,
        this.relatedTarget = a.relatedTarget) : this.type = a,
        b && r.extend(this, b),
        this.timeStamp = a && a.timeStamp || r.now(),
        void (this[r.expando] = !0)) : new r.Event(a,b)
    }
    ,
    r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: va,
        isPropagationStopped: va,
        isImmediatePropagationStopped: va,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ua,
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ua,
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ua,
            a && !this.isSimulated && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp),
    r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    r.fn.extend({
        on: function(a, b, c, d) {
            return xa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return xa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b,
            b = void 0),
            c === !1 && (c = va),
            this.each(function() {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , za = /<script|<style|<link/i
      , Aa = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ba = /^true\/(.*)/
      , Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Da(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }
    function Ea(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function Fa(a) {
        var b = Ba.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function Ga(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a),
            g = V.set(b, f),
            j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0,
                    d = j[e].length; c < d; c++)
                        r.event.add(b, e, j[e][c])
            }
            W.hasData(a) && (h = W.access(a),
            i = r.extend({}, h),
            W.set(b, i))
        }
    }
    function Ha(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }
    function Ia(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q))
            return a.each(function(e) {
                var f = a.eq(e);
                s && (b[0] = q.call(this, e, f.html())),
                Ia(f, b, c, d)
            });
        if (m && (e = pa(b, a[0].ownerDocument, !1, a, d),
        f = e.firstChild,
        1 === e.childNodes.length && (e = f),
        f || d)) {
            for (h = r.map(ma(e, "script"), Ea),
            i = h.length; l < m; l++)
                j = e,
                l !== n && (j = r.clone(j, !0, !0),
                i && r.merge(h, ma(j, "script"))),
                c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument,
                r.map(h, Fa),
                l = 0; l < i; l++)
                    j = h[l],
                    ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k))
        }
        return a
    }
    function Ja(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || r.cleanData(ma(d)),
            d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")),
            d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(ya, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = ma(h),
                f = ma(a),
                d = 0,
                e = f.length; d < e; d++)
                    Ha(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ma(a),
                    g = g || ma(h),
                    d = 0,
                    e = f.length; d < e; d++)
                        Ga(f[d], g[d]);
                else
                    Ga(a, h);
            return g = ma(h, "script"),
            g.length > 0 && na(g, !i && ma(a, "script")),
            h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events)
                            for (d in b.events)
                                e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[V.expando] = void 0
                    }
                    c[W.expando] && (c[W.expando] = void 0)
                }
        }
    }),
    r.fn.extend({
        detach: function(a) {
            return Ja(this, a, !0)
        },
        remove: function(a) {
            return Ja(this, a)
        },
        text: function(a) {
            return S(this, function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return Ia(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ia(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ia(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ia(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (r.cleanData(ma(a, !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a,
            b = null == b ? a : b,
            this.map(function() {
                return r.clone(this, a, b)
            })
        },
        html: function(a) {
            return S(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (r.cleanData(ma(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ia(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(ma(this)),
                c && c.replaceChild(b, this))
            }, a)
        }
    }),
    r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
                c = g === f ? this : this.clone(!0),
                r(e[g])[b](c),
                h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ka = /^margin/
      , La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$","i")
      , Ma = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    };
    !function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                i.innerHTML = "",
                qa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top,
                g = "2px" === b.marginLeft,
                e = "4px" === b.width,
                i.style.marginRight = "50%",
                f = "4px" === b.marginRight,
                qa.removeChild(h),
                i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"), i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box",
        i.cloneNode(!0).style.backgroundClip = "",
        o.clearCloneStyle = "content-box" === i.style.backgroundClip,
        h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        h.appendChild(i),
        r.extend(o, {
            pixelPosition: function() {
                return b(),
                c
            },
            boxSizingReliable: function() {
                return b(),
                e
            },
            pixelMarginRight: function() {
                return b(),
                f
            },
            reliableMarginLeft: function() {
                return b(),
                g
            }
        }))
    }();
    function Na(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ma(a),
        c && (g = c.getPropertyValue(b) || c[b],
        "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
        !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 !== g ? g + "" : g
    }
    function Oa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Pa = /^(none|table(?!-c[ea]).+)/
      , Qa = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ra = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Sa = ["Webkit", "Moz", "ms"]
      , Ta = d.createElement("div").style;
    function Ua(a) {
        if (a in Ta)
            return a;
        var b = a[0].toUpperCase() + a.slice(1)
          , c = Sa.length;
        while (c--)
            if (a = Sa[c] + b,
            a in Ta)
                return a
    }
    function Va(a, b, c) {
        var d = aa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }
    function Wa(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)
            "margin" === c && (g += r.css(a, c + ba[f], !0, e)),
            d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)),
            "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e),
            "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
        return g
    }
    function Xa(a, b, c) {
        var d, e = !0, f = Ma(a), g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]),
        d <= 0 || null == d) {
            if (d = Na(a, b, f),
            (d < 0 || null == d) && (d = a.style[b]),
            La.test(d))
                return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]),
            d = parseFloat(d) || 0
        }
        return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Na(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b), i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h),
                g = r.cssHooks[b] || r.cssHooks[h],
                void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e),
                f = "number"),
                null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")),
                o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b);
            return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h),
            g = r.cssHooks[b] || r.cssHooks[h],
            g && "get"in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = Na(a, b, d)),
            "normal" === e && b in Ra && (e = Ra[b]),
            "" === c || c ? (f = parseFloat(e),
            c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }),
    r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                if (c)
                    return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function() {
                        return Xa(a, b, d)
                    })
            },
            set: function(a, c, d) {
                var e, f = d && Ma(a), g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c,
                c = r.css(a, b)),
                Va(a, c, g)
            }
        }
    }),
    r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function(a, b) {
        if (b)
            return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            })) + "px"
    }),
    r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)
                    e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Ka.test(a) || (r.cssHooks[a + b].set = Va)
    }),
    r.fn.extend({
        css: function(a, b) {
            return S(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (r.isArray(b)) {
                    for (d = Ma(a),
                    e = b.length; g < e; g++)
                        f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });
    function Ya(a, b, c, d, e) {
        return new Ya.prototype.init(a,b,c,d,e)
    }
    r.Tween = Ya,
    Ya.prototype = {
        constructor: Ya,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || r.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ya.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ya.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ya.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Ya.propHooks._default.set(this),
            this
        }
    },
    Ya.prototype.init.prototype = Ya.prototype,
    Ya.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    r.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    r.fx = Ya.prototype.init,
    r.fx.step = {};
    var Za, $a, _a = /^(?:toggle|show|hide)$/, ab = /queueHooks$/;
    function bb() {
        $a && (a.requestAnimationFrame(bb),
        r.fx.tick())
    }
    function cb() {
        return a.setTimeout(function() {
            Za = void 0
        }),
        Za = r.now()
    }
    function db(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; d < 4; d += 2 - b)
            c = ba[d],
            e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function eb(a, b, c) {
        for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function fb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width"in b || "height"in b, m = this, n = {}, o = a.style, p = a.nodeType && ca(a), q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"),
        null == g.unqueued && (g.unqueued = 0,
        h = g.empty.fire,
        g.empty.fire = function() {
            g.unqueued || h()
        }
        ),
        g.unqueued++,
        m.always(function() {
            m.always(function() {
                g.unqueued--,
                r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d],
            _a.test(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d])
                        continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b),
        i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
            j = q && q.display,
            null == j && (j = V.get(a, "display")),
            k = r.css(a, "display"),
            "none" === k && (j ? k = j : (ha([a], !0),
            j = a.style.display || j,
            k = r.css(a, "display"),
            ha([a]))),
            ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }),
            null == j && (k = o.display,
            j = "none" === k ? "" : k)),
            o.display = "inline-block")),
            c.overflow && (o.overflow = "hidden",
            m.always(function() {
                o.overflow = c.overflow[0],
                o.overflowX = c.overflow[1],
                o.overflowY = c.overflow[2]
            })),
            i = !1;
            for (d in n)
                i || (q ? "hidden"in q && (p = q.hidden) : q = V.access(a, "fxshow", {
                    display: j
                }),
                f && (q.hidden = !p),
                p && ha([a], !0),
                m.done(function() {
                    p || ha([a]),
                    V.remove(a, "fxshow");
                    for (d in n)
                        r.style(a, d, n[d])
                })),
                i = eb(p ? q[d] : 0, d, m),
                d in q || (q[d] = i.start,
                p && (i.end = i.start,
                i.start = 0))
        }
    }
    function gb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c),
            e = b[d],
            f = a[c],
            r.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = r.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function hb(a, b, c) {
        var d, e, f = 0, g = hb.prefilters.length, h = r.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            f < 1 && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: r.extend({}, b),
            opts: r.extend(!0, {
                specialEasing: {},
                easing: r.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Za || cb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; c < d; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]),
                h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (gb(k, j.opts.specialEasing); f < g; f++)
            if (d = hb.prefilters[f].call(j, a, k, j.opts))
                return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
                d;
        return r.map(k, eb, j),
        r.isFunction(j.opts.start) && j.opts.start.call(a, j),
        r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    r.Animation = r.extend(hb, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return ea(c.elem, a, aa.exec(b), c),
                c
            }
            ]
        },
        tweener: function(a, b) {
            r.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.match(K);
            for (var c, d = 0, e = a.length; d < e; d++)
                c = a[d],
                hb.tweeners[c] = hb.tweeners[c] || [],
                hb.tweeners[c].unshift(b)
        },
        prefilters: [fb],
        prefilter: function(a, b) {
            b ? hb.prefilters.unshift(a) : hb.prefilters.push(a)
        }
    }),
    r.speed = function(a, b, c) {
        var e = a && "object" == typeof a ? r.extend({}, a) : {
            complete: c || !c && b || r.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !r.isFunction(b) && b
        };
        return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default),
        null != e.queue && e.queue !== !0 || (e.queue = "fx"),
        e.old = e.complete,
        e.complete = function() {
            r.isFunction(e.old) && e.old.call(this),
            e.queue && r.dequeue(this, e.queue)
        }
        ,
        e
    }
    ,
    r.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(ca).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = r.isEmptyObject(a)
              , f = r.speed(b, c, d)
              , g = function() {
                var b = hb(this, r.extend({}, a), f);
                (e || V.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = r.timers
                  , g = V.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                !b && c || r.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = V.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                r.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; b < g; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    r.each(["toggle", "show", "hide"], function(a, b) {
        var c = r.fn[b];
        r.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e)
        }
    }),
    r.each({
        slideDown: db("show"),
        slideUp: db("hide"),
        slideToggle: db("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        r.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    r.timers = [],
    r.fx.tick = function() {
        var a, b = 0, c = r.timers;
        for (Za = r.now(); b < c.length; b++)
            a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        c.length || r.fx.stop(),
        Za = void 0
    }
    ,
    r.fx.timer = function(a) {
        r.timers.push(a),
        a() ? r.fx.start() : r.timers.pop()
    }
    ,
    r.fx.interval = 13,
    r.fx.start = function() {
        $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval))
    }
    ,
    r.fx.stop = function() {
        a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a),
        $a = null
    }
    ,
    r.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    r.fn.delay = function(b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b,
        c = c || "fx",
        this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    }
    ,
    function() {
        var a = d.createElement("input")
          , b = d.createElement("select")
          , c = b.appendChild(d.createElement("option"));
        a.type = "checkbox",
        o.checkOn = "" !== a.value,
        o.optSelected = c.selected,
        a = d.createElement("input"),
        a.value = "t",
        a.type = "radio",
        o.radioValue = "t" === a.value
    }();
    var ib, jb = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return S(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a)
            })
        }
    }),
    r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)),
                void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0, e = b && b.match(K);
            if (e && 1 === a.nodeType)
                while (c = e[d++])
                    a.removeAttribute(c)
        }
    }),
    ib = {
        set: function(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = jb[b] || r.find.attr;
        jb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = jb[g],
            jb[g] = e,
            e = null != c(a, b, d) ? g : null,
            jb[g] = f),
            e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i
      , lb = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return S(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a]
            })
        }
    }),
    r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b,
                e = r.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        r.propFix[this.toLowerCase()] = this
    });
    function mb(a) {
        var b = a.match(K) || [];
        return b.join(" ")
    }
    function nb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a))
                return this.each(function(b) {
                    r(this).addClass(a.call(this, b, nb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c),
                    d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = mb(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a))
                return this.each(function(b) {
                    r(this).removeClass(a.call(this, b, nb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c),
                    d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = mb(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
                r(this).toggleClass(a.call(this, c, nb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                    e = r(this),
                    f = a.match(K) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = nb(this),
                    b && V.set(this, "__className__", b),
                    this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    });
    var ob = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = r.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c)
            }
        }
    }),
    r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : mb(r.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d],
                        (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(),
                            g)
                                return b;
                            h.push(b)
                        }
                    return h
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = r.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g],
                        (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    r.each(["radio", "checkbox"], function() {
        r.valHooks[this] = {
            set: function(a, b) {
                if (r.isArray(b))
                    return a.checked = r.inArray(r(a).val(), b) > -1
            }
        },
        o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d], p = l.call(b, "type") ? b.type : b, q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d,
            3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."),
            p = q.shift(),
            q.sort()),
            k = p.indexOf(":") < 0 && "on" + p,
            b = b[r.expando] ? b : new r.Event(p,"object" == typeof b && b),
            b.isTrigger = f ? 2 : 3,
            b.namespace = q.join("."),
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = e),
            c = null == c ? [b] : r.makeArray(c, [b]),
            n = r.event.special[p] || {},
            f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p,
                    pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode)
                        o.push(h),
                        i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped())
                    b.type = g > 1 ? j : n.bindType || p,
                    m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"),
                    m && m.apply(h, c),
                    m = k && h[k],
                    m && m.apply && T(h) && (b.result = m.apply(h, c),
                    b.result === !1 && b.preventDefault());
                return b.type = p,
                f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k],
                i && (e[k] = null),
                r.event.triggered = p,
                e[p](),
                r.event.triggered = void 0,
                i && (e[k] = i)),
                b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }),
    r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c)
                return r.event.trigger(a, b, c, !0)
        }
    }),
    r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        r.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    o.focusin = "onfocusin"in a,
    o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = V.access(d, b);
                e || d.addEventListener(a, c, !0),
                V.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0),
                V.remove(d, b))
            }
        }
    });
    var qb = a.location
      , rb = r.now()
      , sb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b)
            return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b),
        c
    }
    ;
    var tb = /\[\]$/
      , ub = /\r?\n/g
      , vb = /^(?:submit|button|image|reset|file)$/i
      , wb = /^(?:input|select|textarea|keygen)/i;
    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b))
            r.each(b, function(b, e) {
                c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== r.type(b))
            d(a, b);
        else
            for (e in b)
                xb(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            var c = r.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
        };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a))
            r.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                xb(c, a[c], b, e);
        return d.join("&")
    }
    ,
    r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a))
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null : r.isArray(c) ? r.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ub, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ub, "\r\n")
                }
            }).get()
        }
    });
    var yb = /%20/g
      , zb = /#.*$/
      , Ab = /([?&])_=[^&]*/
      , Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Db = /^(?:GET|HEAD)$/
      , Eb = /^\/\//
      , Fb = {}
      , Gb = {}
      , Hb = "*/".concat("*")
      , Ib = d.createElement("a");
    Ib.href = qb.href;
    function Jb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c))
                while (d = f[e++])
                    "+" === d[0] ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Kb(a, b, c, d) {
        var e = {}
          , f = a === Gb;
        function g(h) {
            var i;
            return e[h] = !0,
            r.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Lb(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d),
        a
    }
    function Mb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f)
            return f !== i[0] && i.unshift(f),
            c[f]
    }
    function Nb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: Cb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Hb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a)
        },
        ajaxPrefilter: Jb(Fb),
        ajaxTransport: Jb(Gb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b,
            b = void 0),
            c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (k) {
                        if (!h) {
                            h = {};
                            while (b = Bb.exec(g))
                                h[b[1].toLowerCase()] = b[2]
                        }
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return k ? g : null
                },
                setRequestHeader: function(a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a,
                    v[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return null == k && (o.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (k)
                            y.always(a[y.status]);
                        else
                            for (b in a)
                                u[b] = [u[b], a[b]];
                    return this
                },
                abort: function(a) {
                    var b = a || x;
                    return e && e.abort(b),
                    A(0, b),
                    this
                }
            };
            if (s.promise(y),
            o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"),
            o.type = c.method || c.type || o.method || o.type,
            o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""],
            null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url,
                    j.href = j.href,
                    o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)),
            Kb(Fb, o, c, y),
            k)
                return y;
            l = r.event && o.global,
            l && 0 === r.active++ && r.event.trigger("ajaxStart"),
            o.type = o.type.toUpperCase(),
            o.hasContent = !Db.test(o.type),
            f = o.url.replace(zb, ""),
            o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length),
            o.data && (f += (sb.test(f) ? "&" : "?") + o.data,
            delete o.data),
            o.cache === !1 && (f = f.replace(Ab, "$1"),
            n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n),
            o.url = f + n),
            o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]),
            r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
            (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType),
            y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers)
                y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
                return y.abort();
            if (x = "abort",
            t.add(o.complete),
            y.done(o.success),
            y.fail(o.error),
            e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1,
                l && q.trigger("ajaxSend", [y, o]),
                k)
                    return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1,
                    e.send(v, A)
                } catch (z) {
                    if (k)
                        throw z;
                    A(-1, z)
                }
            } else
                A(-1, "No Transport");
            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0,
                i && a.clearTimeout(i),
                e = void 0,
                g = h || "",
                y.readyState = b > 0 ? 4 : 0,
                j = b >= 200 && b < 300 || 304 === b,
                d && (v = Mb(o, y, d)),
                v = Nb(o, v, y, j),
                j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"),
                w && (r.lastModified[f] = w),
                w = y.getResponseHeader("etag"),
                w && (r.etag[f] = w)),
                204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state,
                m = v.data,
                n = v.error,
                j = !n)) : (n = x,
                !b && x || (x = "error",
                b < 0 && (b = 0))),
                y.status = b,
                y.statusText = (c || x) + "",
                j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
                y.statusCode(u),
                u = void 0,
                l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]),
                t.fireWith(p, [y, x]),
                l && (q.trigger("ajaxComplete", [y, o]),
                --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script")
        }
    }),
    r.each(["get", "post"], function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }),
    r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])),
            b = r(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this
        },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = r(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    r.expr.pseudos.hidden = function(a) {
        return !r.expr.pseudos.visible(a)
    }
    ,
    r.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }
    ,
    r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    ;
    var Ob = {
        0: 200,
        1223: 204
    }
      , Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials"in Pb,
    o.ajax = Pb = !!Pb,
    r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Pb && !b.crossDomain)
            return {
                send: function(e, f) {
                    var g, h = b.xhr();
                    if (h.open(b.type, b.url, b.async, b.username, b.password),
                    b.xhrFields)
                        for (g in b.xhrFields)
                            h[g] = b.xhrFields[g];
                    b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
                    b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    for (g in e)
                        h.setRequestHeader(g, e[g]);
                    c = function(a) {
                        return function() {
                            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null,
                            "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                                binary: h.response
                            } : {
                                text: h.responseText
                            }, h.getAllResponseHeaders()))
                        }
                    }
                    ,
                    h.onload = c(),
                    d = h.onerror = c("error"),
                    void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                        4 === h.readyState && a.setTimeout(function() {
                            c && d()
                        })
                    }
                    ,
                    c = c("abort");
                    try {
                        h.send(b.hasContent && b.data || null)
                    } catch (i) {
                        if (c)
                            throw i
                    }
                },
                abort: function() {
                    c && c()
                }
            }
    }),
    r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }),
    r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a),
                a
            }
        }
    }),
    r.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    r.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && f("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Qb = []
      , Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Qb.pop() || r.expando + "_" + rb++;
            return this[a] = !0,
            a
        }
    }),
    r.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0])
            return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
            b.converters["script json"] = function() {
                return g || r.error(e + " was not called"),
                g[0]
            }
            ,
            b.dataTypes[0] = "json",
            f = a[e],
            a[e] = function() {
                g = arguments
            }
            ,
            d.always(function() {
                void 0 === f ? r(a).removeProp(e) : a[e] = f,
                b[e] && (b.jsonpCallback = c.jsonpCallback,
                Qb.push(e)),
                g && r.isFunction(f) && f(g[0]),
                g = f = void 0
            }),
            "script"
    }),
    o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>",
        2 === a.childNodes.length
    }(),
    r.parseHTML = function(a, b, c) {
        if ("string" != typeof a)
            return [];
        "boolean" == typeof b && (c = b,
        b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""),
        e = b.createElement("base"),
        e.href = d.location.href,
        b.head.appendChild(e)) : b = d),
        f = B.exec(a),
        g = !c && [],
        f ? [b.createElement(f[1])] : (f = pa([a], b, g),
        g && g.length && r(g).remove(),
        r.merge([], f.childNodes))
    }
    ,
    r.fn.load = function(a, b, c) {
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = mb(a.slice(h)),
        a = a.slice(0, h)),
        r.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ,
    r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = r.css(a, "top"),
            i = r.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    r.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    r.offset.setOffset(this, a, b)
                });
            var b, c, d, e, f = this[0];
            if (f)
                return f.getClientRects().length ? (d = f.getBoundingClientRect(),
                d.width || d.height ? (e = f.ownerDocument,
                c = Sb(e),
                b = e.documentElement,
                {
                    top: d.top + c.pageYOffset - b.clientTop,
                    left: d.left + c.pageXOffset - b.clientLeft
                }) : d) : {
                    top: 0,
                    left: 0
                }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                r.nodeName(a[0], "html") || (d = a.offset()),
                d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }),
                {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position"))
                    a = a.offsetParent;
                return a || qa
            })
        }
    }),
    r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return S(this, function(a, d, e) {
                var f = Sb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }),
    r.each(["top", "left"], function(a, b) {
        r.cssHooks[b] = Oa(o.pixelPosition, function(a, c) {
            if (c)
                return c = Na(a, b),
                La.test(c) ? r(a).position()[b] + "px" : c
        })
    }),
    r.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e)
                  , h = c || (e === !0 || f === !0 ? "margin" : "border");
                return S(this, function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement,
                    Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }),
    r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }),
    r.parseJSON = JSON.parse,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return r
    });
    var Tb = a.jQuery
      , Ub = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Ub),
        b && a.jQuery === r && (a.jQuery = Tb),
        r
    }
    ,
    b || (a.jQuery = a.$ = r),
    r
});

/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a) {
    var b = navigator.userAgent;
    a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function() {
        var b, c = document.createElement("source"), d = function(a) {
            var b, d, e = a.parentNode;
            "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(),
            e.insertBefore(b, e.firstElementChild),
            setTimeout(function() {
                e.removeChild(b)
            })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth,
            d = a.sizes,
            a.sizes += ",100vw",
            setTimeout(function() {
                a.sizes = d
            }))
        }, e = function() {
            var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]");
            for (a = 0; a < b.length; a++)
                d(b[a])
        }, f = function() {
            clearTimeout(b),
            b = setTimeout(e, 99)
        }, g = a.matchMedia && matchMedia("(orientation: landscape)"), h = function() {
            f(),
            g && g.addListener && g.addListener(f)
        };
        return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h),
        f
    }())
}(window),
function(a, b, c) {
    "use strict";
    function d(a) {
        return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a
    }
    function e(b, c) {
        var d = new a.Image;
        return d.onerror = function() {
            A[b] = !1,
            ba()
        }
        ,
        d.onload = function() {
            A[b] = 1 === d.width,
            ba()
        }
        ,
        d.src = c,
        "pending"
    }
    function f() {
        M = !1,
        P = a.devicePixelRatio,
        N = {},
        O = {},
        s.DPR = P || 1,
        Q.width = Math.max(a.innerWidth || 0, z.clientWidth),
        Q.height = Math.max(a.innerHeight || 0, z.clientHeight),
        Q.vw = Q.width / 100,
        Q.vh = Q.height / 100,
        r = [Q.height, Q.width, P].join("-"),
        Q.em = s.getEmValue(),
        Q.rem = Q.em
    }
    function g(a, b, c, d) {
        var e, f, g, h;
        return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c,
        e = Math.pow(a - .6, 1.5),
        g = f * e,
        d && (g += .1 * e),
        h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a,
        h > c
    }
    function h(a) {
        var b, c = s.getSet(a), d = !1;
        "pending" !== c && (d = r,
        c && (b = s.setRes(c),
        s.applySetCandidate(b, a))),
        a[s.ns].evaled = d
    }
    function i(a, b) {
        return a.res - b.res
    }
    function j(a, b, c) {
        var d;
        return !c && b && (c = a[s.ns].sets,
        c = c && c[c.length - 1]),
        d = k(b, c),
        d && (b = s.makeUrl(b),
        a[s.ns].curSrc = b,
        a[s.ns].curCan = d,
        d.res || aa(d, d.set.sizes)),
        d
    }
    function k(a, b) {
        var c, d, e;
        if (a && b)
            for (e = s.parseSet(b),
            a = s.makeUrl(a),
            c = 0; c < e.length; c++)
                if (a === s.makeUrl(e[c].url)) {
                    d = e[c];
                    break
                }
        return d
    }
    function l(a, b) {
        var c, d, e, f, g = a.getElementsByTagName("source");
        for (c = 0,
        d = g.length; d > c; c++)
            e = g[c],
            e[s.ns] = !0,
            f = e.getAttribute("srcset"),
            f && b.push({
                srcset: f,
                media: e.getAttribute("media"),
                type: e.getAttribute("type"),
                sizes: e.getAttribute("sizes")
            })
    }
    function m(a, b) {
        function c(b) {
            var c, d = b.exec(a.substring(m));
            return d ? (c = d[0],
            m += c.length,
            c) : void 0
        }
        function e() {
            var a, c, d, e, f, i, j, k, l, m = !1, o = {};
            for (e = 0; e < h.length; e++)
                f = h[e],
                i = f[f.length - 1],
                j = f.substring(0, f.length - 1),
                k = parseInt(j, 10),
                l = parseFloat(j),
                X.test(j) && "w" === i ? ((a || c) && (m = !0),
                0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0),
                0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0),
                0 === k ? m = !0 : d = k) : m = !0;
            m || (o.url = g,
            a && (o.w = a),
            c && (o.d = c),
            d && (o.h = d),
            d || c || a || (o.d = 1),
            1 === o.d && (b.has1x = !0),
            o.set = b,
            n.push(o))
        }
        function f() {
            for (c(T),
            i = "",
            j = "in descriptor"; ; ) {
                if (k = a.charAt(m),
                "in descriptor" === j)
                    if (d(k))
                        i && (h.push(i),
                        i = "",
                        j = "after descriptor");
                    else {
                        if ("," === k)
                            return m += 1,
                            i && h.push(i),
                            void e();
                        if ("(" === k)
                            i += k,
                            j = "in parens";
                        else {
                            if ("" === k)
                                return i && h.push(i),
                                void e();
                            i += k
                        }
                    }
                else if ("in parens" === j)
                    if (")" === k)
                        i += k,
                        j = "in descriptor";
                    else {
                        if ("" === k)
                            return h.push(i),
                            void e();
                        i += k
                    }
                else if ("after descriptor" === j)
                    if (d(k))
                        ;
                    else {
                        if ("" === k)
                            return void e();
                        j = "in descriptor",
                        m -= 1
                    }
                m += 1
            }
        }
        for (var g, h, i, j, k, l = a.length, m = 0, n = []; ; ) {
            if (c(U),
            m >= l)
                return n;
            g = c(V),
            h = [],
            "," === g.slice(-1) ? (g = g.replace(W, ""),
            e()) : f()
        }
    }
    function n(a) {
        function b(a) {
            function b() {
                f && (g.push(f),
                f = "")
            }
            function c() {
                g[0] && (h.push(g),
                g = [])
            }
            for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1; ; ) {
                if (e = a.charAt(j),
                "" === e)
                    return b(),
                    c(),
                    h;
                if (k) {
                    if ("*" === e && "/" === a[j + 1]) {
                        k = !1,
                        j += 2,
                        b();
                        continue
                    }
                    j += 1
                } else {
                    if (d(e)) {
                        if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
                            j += 1;
                            continue
                        }
                        if (0 === i) {
                            b(),
                            j += 1;
                            continue
                        }
                        e = " "
                    } else if ("(" === e)
                        i += 1;
                    else if (")" === e)
                        i -= 1;
                    else {
                        if ("," === e) {
                            b(),
                            c(),
                            j += 1;
                            continue
                        }
                        if ("/" === e && "*" === a.charAt(j + 1)) {
                            k = !0,
                            j += 2;
                            continue
                        }
                    }
                    f += e,
                    j += 1
                }
            }
        }
        function c(a) {
            return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1
        }
        var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i, l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (f = b(a),
        g = f.length,
        e = 0; g > e; e++)
            if (h = f[e],
            i = h[h.length - 1],
            c(i)) {
                if (j = i,
                h.pop(),
                0 === h.length)
                    return j;
                if (h = h.join(" "),
                s.matchesMedia(h))
                    return j
            }
        return "100vw"
    }
    b.createElement("picture");
    var o, p, q, r, s = {}, t = !1, u = function() {}, v = b.createElement("img"), w = v.getAttribute, x = v.setAttribute, y = v.removeAttribute, z = b.documentElement, A = {}, B = {
        algorithm: ""
    }, C = "data-pfsrc", D = C + "set", E = navigator.userAgent, F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35, G = "currentSrc", H = /\s+\+?\d+(e\d+)?w/, I = /(\([^)]+\))?\s*(.+)/, J = a.picturefillCFG, K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", L = "font-size:100%!important;", M = !0, N = {}, O = {}, P = a.devicePixelRatio, Q = {
        px: 1,
        "in": 96
    }, R = b.createElement("a"), S = !1, T = /^[ \t\n\r\u000c]+/, U = /^[, \t\n\r\u000c]+/, V = /^[^ \t\n\r\u000c]+/, W = /[,]+$/, X = /^\d+$/, Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, Z = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }, $ = function(a) {
        var b = {};
        return function(c) {
            return c in b || (b[c] = a(c)),
            b[c]
        }
    }, _ = function() {
        var a = /^([\d\.]+)(em|vw|px)$/
          , b = function() {
            for (var a = arguments, b = 0, c = a[0]; ++b in a; )
                c = c.replace(a[b], a[++b]);
            return c
        }
          , c = $(function(a) {
            return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
        });
        return function(b, d) {
            var e;
            if (!(b in N))
                if (N[b] = !1,
                d && (e = b.match(a)))
                    N[b] = e[1] * Q[e[2]];
                else
                    try {
                        N[b] = new Function("e",c(b))(Q)
                    } catch (f) {}
            return N[b]
        }
    }(), aa = function(a, b) {
        return a.w ? (a.cWidth = s.calcListLength(b || "100vw"),
        a.res = a.w / a.cWidth) : a.res = a.d,
        a
    }, ba = function(a) {
        if (t) {
            var c, d, e, f = a || {};
            if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements,
            f.elements = null)),
            c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort),
            e = c.length) {
                for (s.setupRun(f),
                S = !0,
                d = 0; e > d; d++)
                    s.fillImg(c[d], f);
                s.teardownRun(f)
            }
        }
    };
    o = a.console && console.warn ? function(a) {
        console.warn(a)
    }
    : u,
    G in v || (G = "src"),
    A["image/jpeg"] = !0,
    A["image/gif"] = !0,
    A["image/png"] = !0,
    A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"),
    s.ns = ("pf" + (new Date).getTime()).substr(0, 9),
    s.supSrcset = "srcset"in v,
    s.supSizes = "sizes"in v,
    s.supPicture = !!a.HTMLPictureElement,
    s.supSrcset && s.supPicture && !s.supSizes && !function(a) {
        v.srcset = "data:,a",
        a.src = "data:,a",
        s.supSrcset = v.complete === a.complete,
        s.supPicture = s.supSrcset && s.supPicture
    }(b.createElement("img")),
    s.supSrcset && !s.supSizes ? !function() {
        var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw=="
          , c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          , d = b.createElement("img")
          , e = function() {
            var a = d.width;
            2 === a && (s.supSizes = !0),
            q = s.supSrcset && !s.supSizes,
            t = !0,
            setTimeout(ba)
        };
        d.onload = e,
        d.onerror = e,
        d.setAttribute("sizes", "9px"),
        d.srcset = c + " 1w," + a + " 9w",
        d.src = c
    }() : t = !0,
    s.selShort = "picture>img,img[srcset]",
    s.sel = s.selShort,
    s.cfg = B,
    s.DPR = P || 1,
    s.u = Q,
    s.types = A,
    s.setSize = u,
    s.makeUrl = $(function(a) {
        return R.href = a,
        R.href
    }),
    s.qsa = function(a, b) {
        return "querySelector"in a ? a.querySelectorAll(b) : []
    }
    ,
    s.matchesMedia = function() {
        return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function(a) {
            return !a || matchMedia(a).matches
        }
        : s.matchesMedia = s.mMQ,
        s.matchesMedia.apply(this, arguments)
    }
    ,
    s.mMQ = function(a) {
        return a ? _(a) : !0
    }
    ,
    s.calcLength = function(a) {
        var b = _(a, !0) || !1;
        return 0 > b && (b = !1),
        b
    }
    ,
    s.supportsType = function(a) {
        return a ? A[a] : !0
    }
    ,
    s.parseSize = $(function(a) {
        var b = (a || "").match(I);
        return {
            media: b && b[1],
            length: b && b[2]
        }
    }),
    s.parseSet = function(a) {
        return a.cands || (a.cands = m(a.srcset, a)),
        a.cands
    }
    ,
    s.getEmValue = function() {
        var a;
        if (!p && (a = b.body)) {
            var c = b.createElement("div")
              , d = z.style.cssText
              , e = a.style.cssText;
            c.style.cssText = K,
            z.style.cssText = L,
            a.style.cssText = L,
            a.appendChild(c),
            p = c.offsetWidth,
            a.removeChild(c),
            p = parseFloat(p, 10),
            z.style.cssText = d,
            a.style.cssText = e
        }
        return p || 16
    }
    ,
    s.calcListLength = function(a) {
        if (!(a in O) || B.uT) {
            var b = s.calcLength(n(a));
            O[a] = b ? b : Q.width
        }
        return O[a]
    }
    ,
    s.setRes = function(a) {
        var b;
        if (a) {
            b = s.parseSet(a);
            for (var c = 0, d = b.length; d > c; c++)
                aa(b[c], a.sizes)
        }
        return b
    }
    ,
    s.setRes.res = aa,
    s.applySetCandidate = function(a, b) {
        if (a.length) {
            var c, d, e, f, h, k, l, m, n, o = b[s.ns], p = s.DPR;
            if (k = o.curSrc || b[G],
            l = o.curCan || j(b, k, a[0].set),
            l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p,
            n || (l.cached = !0,
            l.res >= p && (h = l))),
            !h)
                for (a.sort(i),
                f = a.length,
                h = a[f - 1],
                d = 0; f > d; d++)
                    if (c = a[d],
                    c.res >= p) {
                        e = d - 1,
                        h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
                        break
                    }
            h && (m = s.makeUrl(h.url),
            o.curSrc = m,
            o.curCan = h,
            m !== k && s.setSrc(b, h),
            s.setSize(b))
        }
    }
    ,
    s.setSrc = function(a, b) {
        var c;
        a.src = b.url,
        "image/svg+xml" === b.set.type && (c = a.style.width,
        a.style.width = a.offsetWidth + 1 + "px",
        a.offsetWidth + 1 && (a.style.width = c))
    }
    ,
    s.getSet = function(a) {
        var b, c, d, e = !1, f = a[s.ns].sets;
        for (b = 0; b < f.length && !e; b++)
            if (c = f[b],
            c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
                "pending" === d && (c = d),
                e = c;
                break
            }
        return e
    }
    ,
    s.parseSets = function(a, b, d) {
        var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(), j = a[s.ns];
        (j.src === c || d.src) && (j.src = w.call(a, "src"),
        j.src ? x.call(a, C, j.src) : y.call(a, C)),
        (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"),
        j.srcset = e,
        h = !0),
        j.sets = [],
        i && (j.pic = !0,
        l(b, j.sets)),
        j.srcset ? (f = {
            srcset: j.srcset,
            sizes: w.call(a, "sizes")
        },
        j.sets.push(f),
        g = (q || j.src) && H.test(j.srcset || ""),
        g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src,
        f.cands.push({
            url: j.src,
            d: 1,
            set: f
        }))) : j.src && j.sets.push({
            srcset: j.src,
            sizes: null
        }),
        j.curCan = null,
        j.curSrc = c,
        j.supported = !(i || f && !s.supSrcset || g && !s.supSizes),
        h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e),
        a.srcset = "") : y.call(a, D)),
        j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src),
        j.parsed = !0
    }
    ,
    s.fillImg = function(a, b) {
        var c, d = b.reselect || b.reevaluate;
        a[s.ns] || (a[s.ns] = {}),
        c = a[s.ns],
        (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b),
        c.supported ? c.evaled = r : h(a))
    }
    ,
    s.setupRun = function() {
        (!S || M || P !== a.devicePixelRatio) && f()
    }
    ,
    s.supPicture ? (ba = u,
    s.fillImg = u) : !function() {
        var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/, e = function() {
            var a = b.readyState || "";
            f = setTimeout(e, "loading" === a ? 200 : 999),
            b.body && (s.fillImgs(),
            c = c || d.test(a),
            c && clearTimeout(f))
        }, f = setTimeout(e, b.body ? 9 : 99), g = function(a, b) {
            var c, d, e = function() {
                var f = new Date - d;
                b > f ? c = setTimeout(e, b - f) : (c = null,
                a())
            };
            return function() {
                d = new Date,
                c || (c = setTimeout(e, b))
            }
        }, h = z.clientHeight, i = function() {
            M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h,
            h = z.clientHeight,
            M && s.fillImgs()
        };
        Z(a, "resize", g(i, 99)),
        Z(b, "readystatechange", e)
    }(),
    s.picturefill = ba,
    s.fillImgs = ba,
    s.teardownRun = u,
    ba._ = s,
    a.picturefillCFG = {
        pf: s,
        push: function(a) {
            var b = a.shift();
            "function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0],
            S && s.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; J && J.length; )
        a.picturefillCFG.push(J.shift());
    a.picturefill = ba,
    "object" == typeof module && "object" == typeof module.exports ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function() {
        return ba
    }),
    s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document);
!function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
}(this, function(t, e, o) {
    "use strict";
    function i(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function n(t) {
        var e = getComputedStyle(t)
          , o = e.position;
        if ("fixed" === o)
            return t;
        for (var i = t; i = i.parentNode; ) {
            var n = void 0;
            try {
                n = getComputedStyle(i)
            } catch (r) {}
            if ("undefined" == typeof n || null === n)
                return i;
            var s = n
              , a = s.overflow
              , f = s.overflowX
              , h = s.overflowY;
            if (/(auto|scroll)/.test(a + h + f) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(n.position) >= 0))
                return i
        }
        return document.body
    }
    function r(t) {
        var e = void 0;
        t === document ? (e = document,
        t = document.documentElement) : e = t.ownerDocument;
        var o = e.documentElement
          , i = {}
          , n = t.getBoundingClientRect();
        for (var r in n)
            i[r] = n[r];
        var s = x(e);
        return i.top -= s.top,
        i.left -= s.left,
        "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right),
        "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom),
        i.top = i.top - o.clientTop,
        i.left = i.left - o.clientLeft,
        i.right = e.body.clientWidth - i.width - i.left,
        i.bottom = e.body.clientHeight - i.height - i.top,
        i
    }
    function s(t) {
        return t.offsetParent || document.documentElement
    }
    function a() {
        var t = document.createElement("div");
        t.style.width = "100%",
        t.style.height = "200px";
        var e = document.createElement("div");
        f(e.style, {
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        }),
        e.appendChild(t),
        document.body.appendChild(e);
        var o = t.offsetWidth;
        e.style.overflow = "scroll";
        var i = t.offsetWidth;
        o === i && (i = e.clientWidth),
        document.body.removeChild(e);
        var n = o - i;
        return {
            width: n,
            height: n
        }
    }
    function f() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
          , e = [];
        return Array.prototype.push.apply(e, arguments),
        e.slice(1).forEach(function(e) {
            if (e)
                for (var o in e)
                    ({}).hasOwnProperty.call(e, o) && (t[o] = e[o])
        }),
        t
    }
    function h(t, e) {
        if ("undefined" != typeof t.classList)
            e.split(" ").forEach(function(e) {
                e.trim() && t.classList.remove(e)
            });
        else {
            var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)","gi")
              , i = u(t).replace(o, " ");
            p(t, i)
        }
    }
    function l(t, e) {
        if ("undefined" != typeof t.classList)
            e.split(" ").forEach(function(e) {
                e.trim() && t.classList.add(e)
            });
        else {
            h(t, e);
            var o = u(t) + (" " + e);
            p(t, o)
        }
    }
    function d(t, e) {
        if ("undefined" != typeof t.classList)
            return t.classList.contains(e);
        var o = u(t);
        return new RegExp("(^| )" + e + "( |$)","gi").test(o)
    }
    function u(t) {
        return t.className instanceof SVGAnimatedString ? t.className.baseVal : t.className
    }
    function p(t, e) {
        t.setAttribute("class", e)
    }
    function c(t, e, o) {
        o.forEach(function(o) {
            -1 === e.indexOf(o) && d(t, o) && h(t, o)
        }),
        e.forEach(function(e) {
            d(t, e) || l(t, e)
        })
    }
    function i(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function g(t, e) {
        var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
        return t + o >= e && e >= t - o
    }
    function m() {
        return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
    }
    function v() {
        for (var t = {
            top: 0,
            left: 0
        }, e = arguments.length, o = Array(e), i = 0; e > i; i++)
            o[i] = arguments[i];
        return o.forEach(function(e) {
            var o = e.top
              , i = e.left;
            "string" == typeof o && (o = parseFloat(o, 10)),
            "string" == typeof i && (i = parseFloat(i, 10)),
            t.top += o,
            t.left += i
        }),
        t
    }
    function y(t, e) {
        return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width),
        "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height),
        t
    }
    function b(t, e) {
        return "scrollParent" === e ? e = t.scrollParent : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]),
        e === document && (e = e.documentElement),
        "undefined" != typeof e.nodeType && !function() {
            var t = r(e)
              , o = t
              , i = getComputedStyle(e);
            e = [o.left, o.top, t.width + o.left, t.height + o.top],
            U.forEach(function(t, o) {
                t = t[0].toUpperCase() + t.substr(1),
                "Top" === t || "Left" === t ? e[o] += parseFloat(i["border" + t + "Width"]) : e[o] -= parseFloat(i["border" + t + "Width"])
            })
        }(),
        e
    }
    var w = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var i = e[o];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, o, i) {
            return o && t(e.prototype, o),
            i && t(e, i),
            e
        }
    }()
      , C = void 0;
    "undefined" == typeof C && (C = {
        modules: []
    });
    var O = function() {
        var t = 0;
        return function() {
            return ++t
        }
    }()
      , E = {}
      , x = function(t) {
        var e = t._tetherZeroElement;
        "undefined" == typeof e && (e = t.createElement("div"),
        e.setAttribute("data-tether-id", O()),
        f(e.style, {
            top: 0,
            left: 0,
            position: "absolute"
        }),
        t.body.appendChild(e),
        t._tetherZeroElement = e);
        var o = e.getAttribute("data-tether-id");
        if ("undefined" == typeof E[o]) {
            E[o] = {};
            var i = e.getBoundingClientRect();
            for (var n in i)
                E[o][n] = i[n];
            T(function() {
                delete E[o]
            })
        }
        return E[o]
    }
      , A = []
      , T = function(t) {
        A.push(t)
    }
      , S = function() {
        for (var t = void 0; t = A.pop(); )
            t()
    }
      , W = function() {
        function t() {
            i(this, t)
        }
        return w(t, [{
            key: "on",
            value: function(t, e, o) {
                var i = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
                "undefined" == typeof this.bindings && (this.bindings = {}),
                "undefined" == typeof this.bindings[t] && (this.bindings[t] = []),
                this.bindings[t].push({
                    handler: e,
                    ctx: o,
                    once: i
                })
            }
        }, {
            key: "once",
            value: function(t, e, o) {
                this.on(t, e, o, !0)
            }
        }, {
            key: "off",
            value: function(t, e) {
                if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[t])
                    if ("undefined" == typeof e)
                        delete this.bindings[t];
                    else
                        for (var o = 0; o < this.bindings[t].length; )
                            this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o
            }
        }, {
            key: "trigger",
            value: function(t) {
                if ("undefined" != typeof this.bindings && this.bindings[t]) {
                    for (var e = 0, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), n = 1; o > n; n++)
                        i[n - 1] = arguments[n];
                    for (; e < this.bindings[t].length; ) {
                        var r = this.bindings[t][e]
                          , s = r.handler
                          , a = r.ctx
                          , f = r.once
                          , h = a;
                        "undefined" == typeof h && (h = this),
                        s.apply(h, i),
                        f ? this.bindings[t].splice(e, 1) : ++e
                    }
                }
            }
        }]),
        t
    }();
    C.Utils = {
        getScrollParent: n,
        getBounds: r,
        getOffsetParent: s,
        extend: f,
        addClass: l,
        removeClass: h,
        hasClass: d,
        updateClasses: c,
        defer: T,
        flush: S,
        uniqueId: O,
        Evented: W,
        getScrollBarSize: a
    };
    var M = function() {
        function t(t, e) {
            var o = []
              , i = !0
              , n = !1
              , r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value),
                !e || o.length !== e); i = !0)
                    ;
            } catch (f) {
                n = !0,
                r = f
            } finally {
                try {
                    !i && a["return"] && a["return"]()
                } finally {
                    if (n)
                        throw r
                }
            }
            return o
        }
        return function(e, o) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return t(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , w = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var i = e[o];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, o, i) {
            return o && t(e.prototype, o),
            i && t(e, i),
            e
        }
    }();
    if ("undefined" == typeof C)
        throw new Error("You must include the utils.js file before tether.js");
    var P = C.Utils
      , n = P.getScrollParent
      , r = P.getBounds
      , s = P.getOffsetParent
      , f = P.extend
      , l = P.addClass
      , h = P.removeClass
      , c = P.updateClasses
      , T = P.defer
      , S = P.flush
      , a = P.getScrollBarSize
      , k = function() {
        if ("undefined" == typeof document)
            return "";
        for (var t = document.createElement("div"), e = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
            var i = e[o];
            if (void 0 !== t.style[i])
                return i
        }
    }()
      , B = []
      , _ = function() {
        B.forEach(function(t) {
            t.position(!1)
        }),
        S()
    };
    !function() {
        var t = null
          , e = null
          , o = null
          , i = function n() {
            return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250),
            void (o = setTimeout(n, 250))) : void ("undefined" != typeof t && m() - t < 10 || ("undefined" != typeof o && (clearTimeout(o),
            o = null),
            t = m(),
            _(),
            e = m() - t))
        };
        "undefined" != typeof window && ["resize", "scroll", "touchmove"].forEach(function(t) {
            window.addEventListener(t, i)
        })
    }();
    var z = {
        center: "center",
        left: "right",
        right: "left"
    }
      , F = {
        middle: "middle",
        top: "bottom",
        bottom: "top"
    }
      , L = {
        top: 0,
        left: 0,
        middle: "50%",
        center: "50%",
        bottom: "100%",
        right: "100%"
    }
      , Y = function(t, e) {
        var o = t.left
          , i = t.top;
        return "auto" === o && (o = z[e.left]),
        "auto" === i && (i = F[e.top]),
        {
            left: o,
            top: i
        }
    }
      , H = function(t) {
        var e = t.left
          , o = t.top;
        return "undefined" != typeof L[t.left] && (e = L[t.left]),
        "undefined" != typeof L[t.top] && (o = L[t.top]),
        {
            left: e,
            top: o
        }
    }
      , X = function(t) {
        var e = t.split(" ")
          , o = M(e, 2)
          , i = o[0]
          , n = o[1];
        return {
            top: i,
            left: n
        }
    }
      , j = X
      , N = function() {
        function t(e) {
            var o = this;
            i(this, t),
            this.position = this.position.bind(this),
            B.push(this),
            this.history = [],
            this.setOptions(e, !1),
            C.modules.forEach(function(t) {
                "undefined" != typeof t.initialize && t.initialize.call(o)
            }),
            this.position()
        }
        return w(t, [{
            key: "getClass",
            value: function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0]
                  , e = this.options.classes;
                return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
            }
        }, {
            key: "setOptions",
            value: function(t) {
                var e = this
                  , o = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1]
                  , i = {
                    offset: "0 0",
                    targetOffset: "0 0",
                    targetAttachment: "auto auto",
                    classPrefix: "tether"
                };
                this.options = f(i, t);
                var r = this.options
                  , s = r.element
                  , a = r.target
                  , h = r.targetModifier;
                if (this.element = s,
                this.target = a,
                this.targetModifier = h,
                "viewport" === this.target ? (this.target = document.body,
                this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body,
                this.targetModifier = "scroll-handle"),
                ["element", "target"].forEach(function(t) {
                    if ("undefined" == typeof e[t])
                        throw new Error("Tether Error: Both element and target must be defined");
                    "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                }),
                l(this.element, this.getClass("element")),
                this.options.addTargetClasses !== !1 && l(this.target, this.getClass("target")),
                !this.options.attachment)
                    throw new Error("Tether Error: You must provide an attachment");
                this.targetAttachment = j(this.options.targetAttachment),
                this.attachment = j(this.options.attachment),
                this.offset = X(this.options.offset),
                this.targetOffset = X(this.options.targetOffset),
                "undefined" != typeof this.scrollParent && this.disable(),
                "scroll-handle" === this.targetModifier ? this.scrollParent = this.target : this.scrollParent = n(this.target),
                this.options.enabled !== !1 && this.enable(o)
            }
        }, {
            key: "getTargetBounds",
            value: function() {
                if ("undefined" == typeof this.targetModifier)
                    return r(this.target);
                if ("visible" === this.targetModifier) {
                    if (this.target === document.body)
                        return {
                            top: pageYOffset,
                            left: pageXOffset,
                            height: innerHeight,
                            width: innerWidth
                        };
                    var t = r(this.target)
                      , e = {
                        height: t.height,
                        width: t.width,
                        top: t.top,
                        left: t.left
                    };
                    return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)),
                    e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))),
                    e.height = Math.min(innerHeight, e.height),
                    e.height -= 2,
                    e.width = Math.min(e.width, t.width - (pageXOffset - t.left)),
                    e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))),
                    e.width = Math.min(innerWidth, e.width),
                    e.width -= 2,
                    e.top < pageYOffset && (e.top = pageYOffset),
                    e.left < pageXOffset && (e.left = pageXOffset),
                    e
                }
                if ("scroll-handle" === this.targetModifier) {
                    var t = void 0
                      , o = this.target;
                    o === document.body ? (o = document.documentElement,
                    t = {
                        left: pageXOffset,
                        top: pageYOffset,
                        height: innerHeight,
                        width: innerWidth
                    }) : t = r(o);
                    var i = getComputedStyle(o)
                      , n = o.scrollWidth > o.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body
                      , s = 0;
                    n && (s = 15);
                    var a = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - s
                      , e = {
                        width: 15,
                        height: .975 * a * (a / o.scrollHeight),
                        left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
                    }
                      , f = 0;
                    408 > a && this.target === document.body && (f = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58),
                    this.target !== document.body && (e.height = Math.max(e.height, 24));
                    var h = this.target.scrollTop / (o.scrollHeight - a);
                    return e.top = h * (a - e.height - f) + t.top + parseFloat(i.borderTopWidth),
                    this.target === document.body && (e.height = Math.max(e.height, 24)),
                    e
                }
            }
        }, {
            key: "clearCache",
            value: function() {
                this._cache = {}
            }
        }, {
            key: "cache",
            value: function(t, e) {
                return "undefined" == typeof this._cache && (this._cache = {}),
                "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)),
                this._cache[t]
            }
        }, {
            key: "enable",
            value: function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                this.options.addTargetClasses !== !1 && l(this.target, this.getClass("enabled")),
                l(this.element, this.getClass("enabled")),
                this.enabled = !0,
                this.scrollParent !== document && this.scrollParent.addEventListener("scroll", this.position),
                t && this.position()
            }
        }, {
            key: "disable",
            value: function() {
                h(this.target, this.getClass("enabled")),
                h(this.element, this.getClass("enabled")),
                this.enabled = !1,
                "undefined" != typeof this.scrollParent && this.scrollParent.removeEventListener("scroll", this.position)
            }
        }, {
            key: "destroy",
            value: function() {
                var t = this;
                this.disable(),
                B.forEach(function(e, o) {
                    return e === t ? void B.splice(o, 1) : void 0
                })
            }
        }, {
            key: "updateAttachClasses",
            value: function(t, e) {
                var o = this;
                t = t || this.attachment,
                e = e || this.targetAttachment;
                var i = ["left", "top", "bottom", "right", "middle", "center"];
                "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length),
                "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                var n = this._addAttachClasses;
                t.top && n.push(this.getClass("element-attached") + "-" + t.top),
                t.left && n.push(this.getClass("element-attached") + "-" + t.left),
                e.top && n.push(this.getClass("target-attached") + "-" + e.top),
                e.left && n.push(this.getClass("target-attached") + "-" + e.left);
                var r = [];
                i.forEach(function(t) {
                    r.push(o.getClass("element-attached") + "-" + t),
                    r.push(o.getClass("target-attached") + "-" + t)
                }),
                T(function() {
                    "undefined" != typeof o._addAttachClasses && (c(o.element, o._addAttachClasses, r),
                    o.options.addTargetClasses !== !1 && c(o.target, o._addAttachClasses, r),
                    delete o._addAttachClasses)
                })
            }
        }, {
            key: "position",
            value: function() {
                var t = this
                  , e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                if (this.enabled) {
                    this.clearCache();
                    var o = Y(this.targetAttachment, this.attachment);
                    this.updateAttachClasses(this.attachment, o);
                    var i = this.cache("element-bounds", function() {
                        return r(t.element)
                    })
                      , n = i.width
                      , f = i.height;
                    if (0 === n && 0 === f && "undefined" != typeof this.lastSize) {
                        var h = this.lastSize;
                        n = h.width,
                        f = h.height
                    } else
                        this.lastSize = {
                            width: n,
                            height: f
                        };
                    var l = this.cache("target-bounds", function() {
                        return t.getTargetBounds()
                    })
                      , d = l
                      , u = y(H(this.attachment), {
                        width: n,
                        height: f
                    })
                      , p = y(H(o), d)
                      , c = y(this.offset, {
                        width: n,
                        height: f
                    })
                      , g = y(this.targetOffset, d);
                    u = v(u, c),
                    p = v(p, g);
                    for (var m = l.left + p.left - u.left, b = l.top + p.top - u.top, w = 0; w < C.modules.length; ++w) {
                        var O = C.modules[w]
                          , E = O.position.call(this, {
                            left: m,
                            top: b,
                            targetAttachment: o,
                            targetPos: l,
                            elementPos: i,
                            offset: u,
                            targetOffset: p,
                            manualOffset: c,
                            manualTargetOffset: g,
                            scrollbarSize: A,
                            attachment: this.attachment
                        });
                        if (E === !1)
                            return !1;
                        "undefined" != typeof E && "object" == typeof E && (b = E.top,
                        m = E.left)
                    }
                    var x = {
                        page: {
                            top: b,
                            left: m
                        },
                        viewport: {
                            top: b - pageYOffset,
                            bottom: pageYOffset - b - f + innerHeight,
                            left: m - pageXOffset,
                            right: pageXOffset - m - n + innerWidth
                        }
                    }
                      , A = void 0;
                    return document.body.scrollWidth > window.innerWidth && (A = this.cache("scrollbar-size", a),
                    x.viewport.bottom -= A.height),
                    document.body.scrollHeight > window.innerHeight && (A = this.cache("scrollbar-size", a),
                    x.viewport.right -= A.width),
                    (-1 === ["", "static"].indexOf(document.body.style.position) || -1 === ["", "static"].indexOf(document.body.parentElement.style.position)) && (x.page.bottom = document.body.scrollHeight - b - f,
                    x.page.right = document.body.scrollWidth - m - n),
                    "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && !function() {
                        var e = t.cache("target-offsetparent", function() {
                            return s(t.target)
                        })
                          , o = t.cache("target-offsetparent-bounds", function() {
                            return r(e)
                        })
                          , i = getComputedStyle(e)
                          , n = o
                          , a = {};
                        if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                            a[t.toLowerCase()] = parseFloat(i["border" + t + "Width"])
                        }),
                        o.right = document.body.scrollWidth - o.left - n.width + a.right,
                        o.bottom = document.body.scrollHeight - o.top - n.height + a.bottom,
                        x.page.top >= o.top + a.top && x.page.bottom >= o.bottom && x.page.left >= o.left + a.left && x.page.right >= o.right) {
                            var f = e.scrollTop
                              , h = e.scrollLeft;
                            x.offset = {
                                top: x.page.top - o.top + f - a.top,
                                left: x.page.left - o.left + h - a.left
                            }
                        }
                    }(),
                    this.move(x),
                    this.history.unshift(x),
                    this.history.length > 3 && this.history.pop(),
                    e && S(),
                    !0
                }
            }
        }, {
            key: "move",
            value: function(t) {
                var e = this;
                if ("undefined" != typeof this.element.parentNode) {
                    var o = {};
                    for (var i in t) {
                        o[i] = {};
                        for (var n in t[i]) {
                            for (var r = !1, a = 0; a < this.history.length; ++a) {
                                var h = this.history[a];
                                if ("undefined" != typeof h[i] && !g(h[i][n], t[i][n])) {
                                    r = !0;
                                    break
                                }
                            }
                            r || (o[i][n] = !0)
                        }
                    }
                    var l = {
                        top: "",
                        left: "",
                        right: "",
                        bottom: ""
                    }
                      , d = function(t, o) {
                        var i = "undefined" != typeof e.options.optimizations
                          , n = i ? e.options.optimizations.gpu : null;
                        if (n !== !1) {
                            var r = void 0
                              , s = void 0;
                            t.top ? (l.top = 0,
                            r = o.top) : (l.bottom = 0,
                            r = -o.bottom),
                            t.left ? (l.left = 0,
                            s = o.left) : (l.right = 0,
                            s = -o.right),
                            l[k] = "translateX(" + Math.round(s) + "px) translateY(" + Math.round(r) + "px)",
                            "msTransform" !== k && (l[k] += " translateZ(0)")
                        } else
                            t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px",
                            t.left ? l.left = o.left + "px" : l.right = o.right + "px"
                    }
                      , u = !1;
                    if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute",
                    d(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed",
                    d(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? !function() {
                        l.position = "absolute";
                        var i = e.cache("target-offsetparent", function() {
                            return s(e.target)
                        });
                        s(e.element) !== i && T(function() {
                            e.element.parentNode.removeChild(e.element),
                            i.appendChild(e.element)
                        }),
                        d(o.offset, t.offset),
                        u = !0
                    }() : (l.position = "absolute",
                    d({
                        top: !0,
                        left: !0
                    }, t.page)),
                    !u) {
                        for (var p = !0, c = this.element.parentNode; c && "BODY" !== c.tagName; ) {
                            if ("static" !== getComputedStyle(c).position) {
                                p = !1;
                                break
                            }
                            c = c.parentNode
                        }
                        p || (this.element.parentNode.removeChild(this.element),
                        document.body.appendChild(this.element))
                    }
                    var m = {}
                      , v = !1;
                    for (var n in l) {
                        var y = l[n]
                          , b = this.element.style[n];
                        "" !== b && "" !== y && ["top", "left", "bottom", "right"].indexOf(n) >= 0 && (b = parseFloat(b),
                        y = parseFloat(y)),
                        b !== y && (v = !0,
                        m[n] = y)
                    }
                    v && T(function() {
                        f(e.element.style, m)
                    })
                }
            }
        }]),
        t
    }();
    N.modules = [],
    C.position = _;
    var R = f(N, C)
      , M = function() {
        function t(t, e) {
            var o = []
              , i = !0
              , n = !1
              , r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value),
                !e || o.length !== e); i = !0)
                    ;
            } catch (f) {
                n = !0,
                r = f
            } finally {
                try {
                    !i && a["return"] && a["return"]()
                } finally {
                    if (n)
                        throw r
                }
            }
            return o
        }
        return function(e, o) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return t(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , P = C.Utils
      , r = P.getBounds
      , f = P.extend
      , c = P.updateClasses
      , T = P.defer
      , U = ["left", "top", "right", "bottom"];
    C.modules.push({
        position: function(t) {
            var e = this
              , o = t.top
              , i = t.left
              , n = t.targetAttachment;
            if (!this.options.constraints)
                return !0;
            var s = this.cache("element-bounds", function() {
                return r(e.element)
            })
              , a = s.height
              , h = s.width;
            if (0 === h && 0 === a && "undefined" != typeof this.lastSize) {
                var l = this.lastSize;
                h = l.width,
                a = l.height
            }
            var d = this.cache("target-bounds", function() {
                return e.getTargetBounds()
            })
              , u = d.height
              , p = d.width
              , g = [this.getClass("pinned"), this.getClass("out-of-bounds")];
            this.options.constraints.forEach(function(t) {
                var e = t.outOfBoundsClass
                  , o = t.pinnedClass;
                e && g.push(e),
                o && g.push(o)
            }),
            g.forEach(function(t) {
                ["left", "top", "right", "bottom"].forEach(function(e) {
                    g.push(t + "-" + e)
                })
            });
            var m = []
              , v = f({}, n)
              , y = f({}, this.attachment);
            return this.options.constraints.forEach(function(t) {
                var r = t.to
                  , s = t.attachment
                  , f = t.pin;
                "undefined" == typeof s && (s = "");
                var l = void 0
                  , d = void 0;
                if (s.indexOf(" ") >= 0) {
                    var c = s.split(" ")
                      , g = M(c, 2);
                    d = g[0],
                    l = g[1]
                } else
                    l = d = s;
                var w = b(e, r);
                ("target" === d || "both" === d) && (o < w[1] && "top" === v.top && (o += u,
                v.top = "bottom"),
                o + a > w[3] && "bottom" === v.top && (o -= u,
                v.top = "top")),
                "together" === d && (o < w[1] && "top" === v.top && ("bottom" === y.top ? (o += u,
                v.top = "bottom",
                o += a,
                y.top = "top") : "top" === y.top && (o += u,
                v.top = "bottom",
                o -= a,
                y.top = "bottom")),
                o + a > w[3] && "bottom" === v.top && ("top" === y.top ? (o -= u,
                v.top = "top",
                o -= a,
                y.top = "bottom") : "bottom" === y.top && (o -= u,
                v.top = "top",
                o += a,
                y.top = "top")),
                "middle" === v.top && (o + a > w[3] && "top" === y.top ? (o -= a,
                y.top = "bottom") : o < w[1] && "bottom" === y.top && (o += a,
                y.top = "top"))),
                ("target" === l || "both" === l) && (i < w[0] && "left" === v.left && (i += p,
                v.left = "right"),
                i + h > w[2] && "right" === v.left && (i -= p,
                v.left = "left")),
                "together" === l && (i < w[0] && "left" === v.left ? "right" === y.left ? (i += p,
                v.left = "right",
                i += h,
                y.left = "left") : "left" === y.left && (i += p,
                v.left = "right",
                i -= h,
                y.left = "right") : i + h > w[2] && "right" === v.left ? "left" === y.left ? (i -= p,
                v.left = "left",
                i -= h,
                y.left = "right") : "right" === y.left && (i -= p,
                v.left = "left",
                i += h,
                y.left = "left") : "center" === v.left && (i + h > w[2] && "left" === y.left ? (i -= h,
                y.left = "right") : i < w[0] && "right" === y.left && (i += h,
                y.left = "left"))),
                ("element" === d || "both" === d) && (o < w[1] && "bottom" === y.top && (o += a,
                y.top = "top"),
                o + a > w[3] && "top" === y.top && (o -= a,
                y.top = "bottom")),
                ("element" === l || "both" === l) && (i < w[0] && "right" === y.left && (i += h,
                y.left = "left"),
                i + h > w[2] && "left" === y.left && (i -= h,
                y.left = "right")),
                "string" == typeof f ? f = f.split(",").map(function(t) {
                    return t.trim()
                }) : f === !0 && (f = ["top", "left", "right", "bottom"]),
                f = f || [];
                var C = []
                  , O = [];
                o < w[1] && (f.indexOf("top") >= 0 ? (o = w[1],
                C.push("top")) : O.push("top")),
                o + a > w[3] && (f.indexOf("bottom") >= 0 ? (o = w[3] - a,
                C.push("bottom")) : O.push("bottom")),
                i < w[0] && (f.indexOf("left") >= 0 ? (i = w[0],
                C.push("left")) : O.push("left")),
                i + h > w[2] && (f.indexOf("right") >= 0 ? (i = w[2] - h,
                C.push("right")) : O.push("right")),
                C.length && !function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"),
                    m.push(t),
                    C.forEach(function(e) {
                        m.push(t + "-" + e)
                    })
                }(),
                O.length && !function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"),
                    m.push(t),
                    O.forEach(function(e) {
                        m.push(t + "-" + e)
                    })
                }(),
                (C.indexOf("left") >= 0 || C.indexOf("right") >= 0) && (y.left = v.left = !1),
                (C.indexOf("top") >= 0 || C.indexOf("bottom") >= 0) && (y.top = v.top = !1),
                (v.top !== n.top || v.left !== n.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && e.updateAttachClasses(y, v)
            }),
            T(function() {
                e.options.addTargetClasses !== !1 && c(e.target, m, g),
                c(e.element, m, g)
            }),
            {
                top: o,
                left: i
            }
        }
    });
    var P = C.Utils
      , r = P.getBounds
      , c = P.updateClasses
      , T = P.defer;
    C.modules.push({
        position: function(t) {
            var e = this
              , o = t.top
              , i = t.left
              , n = this.cache("element-bounds", function() {
                return r(e.element)
            })
              , s = n.height
              , a = n.width
              , f = this.getTargetBounds()
              , h = o + s
              , l = i + a
              , d = [];
            o <= f.bottom && h >= f.top && ["left", "right"].forEach(function(t) {
                var e = f[t];
                (e === i || e === l) && d.push(t)
            }),
            i <= f.right && l >= f.left && ["top", "bottom"].forEach(function(t) {
                var e = f[t];
                (e === o || e === h) && d.push(t)
            });
            var u = []
              , p = []
              , g = ["left", "top", "right", "bottom"];
            return u.push(this.getClass("abutted")),
            g.forEach(function(t) {
                u.push(e.getClass("abutted") + "-" + t)
            }),
            d.length && p.push(this.getClass("abutted")),
            d.forEach(function(t) {
                p.push(e.getClass("abutted") + "-" + t)
            }),
            T(function() {
                e.options.addTargetClasses !== !1 && c(e.target, p, u),
                c(e.element, p, u)
            }),
            !0
        }
    });
    var M = function() {
        function t(t, e) {
            var o = []
              , i = !0
              , n = !1
              , r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value),
                !e || o.length !== e); i = !0)
                    ;
            } catch (f) {
                n = !0,
                r = f
            } finally {
                try {
                    !i && a["return"] && a["return"]()
                } finally {
                    if (n)
                        throw r
                }
            }
            return o
        }
        return function(e, o) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return t(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    return C.modules.push({
        position: function(t) {
            var e = t.top
              , o = t.left;
            if (this.options.shift) {
                var i = this.options.shift;
                "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
                    top: e,
                    left: o
                }));
                var n = void 0
                  , r = void 0;
                if ("string" == typeof i) {
                    i = i.split(" "),
                    i[1] = i[1] || i[0];
                    var s = i
                      , a = M(s, 2);
                    n = a[0],
                    r = a[1],
                    n = parseFloat(n, 10),
                    r = parseFloat(r, 10)
                } else
                    n = i.top,
                    r = i.left;
                return e += n,
                o += r,
                {
                    top: e,
                    left: o
                }
            }
        }
    }),
    R
});

/*!
 * Bootstrap v4.0.0-alpha.4 (http://getbootstrap.com)
 * Copyright 2011-2016 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(a) {
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] >= 4)
        throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery),
+function(a) {
    "use strict";
    function b(a, b) {
        if ("function" != typeof b && null !== b)
            throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    function c(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    var d = function(a, b, c) {
        for (var d = !0; d; ) {
            var e = a
              , f = b
              , g = c;
            d = !1,
            null === e && (e = Function.prototype);
            var h = Object.getOwnPropertyDescriptor(e, f);
            if (void 0 !== h) {
                if ("value"in h)
                    return h.value;
                var i = h.get;
                if (void 0 === i)
                    return;
                return i.call(g)
            }
            var j = Object.getPrototypeOf(e);
            if (null === j)
                return;
            a = j,
            b = f,
            c = g,
            d = !0,
            h = j = void 0
        }
    }
      , e = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1,
                d.configurable = !0,
                "value"in d && (d.writable = !0),
                Object.defineProperty(a, d.key, d)
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c),
            d && a(b, d),
            b
        }
    }()
      , f = function(a) {
        function b(a) {
            return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }
        function c(a) {
            return (a[0] || a).nodeType
        }
        function d() {
            return {
                bindType: h.end,
                delegateType: h.end,
                handle: function(b) {
                    if (a(b.target).is(this))
                        return b.handleObj.handler.apply(this, arguments)
                }
            }
        }
        function e() {
            if (window.QUnit)
                return !1;
            var a = document.createElement("bootstrap");
            for (var b in j)
                if (void 0 !== a.style[b])
                    return {
                        end: j[b]
                    };
            return !1
        }
        function f(b) {
            var c = this
              , d = !1;
            return a(this).one(k.TRANSITION_END, function() {
                d = !0
            }),
            setTimeout(function() {
                d || k.triggerTransitionEnd(c)
            }, b),
            this
        }
        function g() {
            h = e(),
            a.fn.emulateTransitionEnd = f,
            k.supportsTransitionEnd() && (a.event.special[k.TRANSITION_END] = d())
        }
        var h = !1
          , i = 1e6
          , j = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }
          , k = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(a) {
                do
                    a += ~~(Math.random() * i);
                while (document.getElementById(a));return a
            },
            getSelectorFromElement: function(a) {
                var b = a.getAttribute("data-target");
                return b || (b = a.getAttribute("href") || "",
                b = /^#[a-z]/i.test(b) ? b : null),
                b
            },
            reflow: function(a) {
                new Function("bs","return bs")(a.offsetHeight)
            },
            triggerTransitionEnd: function(b) {
                a(b).trigger(h.end)
            },
            supportsTransitionEnd: function() {
                return Boolean(h)
            },
            typeCheckConfig: function(a, d, e) {
                for (var f in e)
                    if (e.hasOwnProperty(f)) {
                        var g = e[f]
                          , h = d[f]
                          , i = void 0;
                        if (i = h && c(h) ? "element" : b(h),
                        !new RegExp(g).test(i))
                            throw new Error(a.toUpperCase() + ": " + ('Option "' + f + '" provided type "' + i + '" ') + ('but expected type "' + g + '".'))
                    }
            }
        };
        return g(),
        k
    }(jQuery)
      , g = (function(a) {
        var b = "alert"
          , d = "4.0.0-alpha.4"
          , g = "bs.alert"
          , h = "." + g
          , i = ".data-api"
          , j = a.fn[b]
          , k = 150
          , l = {
            DISMISS: '[data-dismiss="alert"]'
        }
          , m = {
            CLOSE: "close" + h,
            CLOSED: "closed" + h,
            CLICK_DATA_API: "click" + h + i
        }
          , n = {
            ALERT: "alert",
            FADE: "fade",
            IN: "in"
        }
          , o = function() {
            function b(a) {
                c(this, b),
                this._element = a
            }
            return e(b, [{
                key: "close",
                value: function(a) {
                    a = a || this._element;
                    var b = this._getRootElement(a)
                      , c = this._triggerCloseEvent(b);
                    c.isDefaultPrevented() || this._removeElement(b)
                }
            }, {
                key: "dispose",
                value: function() {
                    a.removeData(this._element, g),
                    this._element = null
                }
            }, {
                key: "_getRootElement",
                value: function(b) {
                    var c = f.getSelectorFromElement(b)
                      , d = !1;
                    return c && (d = a(c)[0]),
                    d || (d = a(b).closest("." + n.ALERT)[0]),
                    d
                }
            }, {
                key: "_triggerCloseEvent",
                value: function(b) {
                    var c = a.Event(m.CLOSE);
                    return a(b).trigger(c),
                    c
                }
            }, {
                key: "_removeElement",
                value: function(b) {
                    return a(b).removeClass(n.IN),
                    f.supportsTransitionEnd() && a(b).hasClass(n.FADE) ? void a(b).one(f.TRANSITION_END, a.proxy(this._destroyElement, this, b)).emulateTransitionEnd(k) : void this._destroyElement(b)
                }
            }, {
                key: "_destroyElement",
                value: function(b) {
                    a(b).detach().trigger(m.CLOSED).remove()
                }
            }], [{
                key: "_jQueryInterface",
                value: function(c) {
                    return this.each(function() {
                        var d = a(this)
                          , e = d.data(g);
                        e || (e = new b(this),
                        d.data(g, e)),
                        "close" === c && e[c](this)
                    })
                }
            }, {
                key: "_handleDismiss",
                value: function(a) {
                    return function(b) {
                        b && b.preventDefault(),
                        a.close(this)
                    }
                }
            }, {
                key: "VERSION",
                get: function() {
                    return d
                }
            }]),
            b
        }();
        return a(document).on(m.CLICK_DATA_API, l.DISMISS, o._handleDismiss(new o)),
        a.fn[b] = o._jQueryInterface,
        a.fn[b].Constructor = o,
        a.fn[b].noConflict = function() {
            return a.fn[b] = j,
            o._jQueryInterface
        }
        ,
        o
    }(jQuery),
    function(a) {
        var b = "button"
          , d = "4.0.0-alpha.4"
          , f = "bs.button"
          , g = "." + f
          , h = ".data-api"
          , i = a.fn[b]
          , j = {
            ACTIVE: "active",
            BUTTON: "btn",
            FOCUS: "focus"
        }
          , k = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: "input",
            ACTIVE: ".active",
            BUTTON: ".btn"
        }
          , l = {
            CLICK_DATA_API: "click" + g + h,
            FOCUS_BLUR_DATA_API: "focus" + g + h + " " + ("blur" + g + h)
        }
          , m = function() {
            function b(a) {
                c(this, b),
                this._element = a
            }
            return e(b, [{
                key: "toggle",
                value: function() {
                    var b = !0
                      , c = a(this._element).closest(k.DATA_TOGGLE)[0];
                    if (c) {
                        var d = a(this._element).find(k.INPUT)[0];
                        if (d) {
                            if ("radio" === d.type)
                                if (d.checked && a(this._element).hasClass(j.ACTIVE))
                                    b = !1;
                                else {
                                    var e = a(c).find(k.ACTIVE)[0];
                                    e && a(e).removeClass(j.ACTIVE)
                                }
                            b && (d.checked = !a(this._element).hasClass(j.ACTIVE),
                            a(this._element).trigger("change")),
                            d.focus()
                        }
                    } else
                        this._element.setAttribute("aria-pressed", !a(this._element).hasClass(j.ACTIVE));
                    b && a(this._element).toggleClass(j.ACTIVE)
                }
            }, {
                key: "dispose",
                value: function() {
                    a.removeData(this._element, f),
                    this._element = null
                }
            }], [{
                key: "_jQueryInterface",
                value: function(c) {
                    return this.each(function() {
                        var d = a(this).data(f);
                        d || (d = new b(this),
                        a(this).data(f, d)),
                        "toggle" === c && d[c]()
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return d
                }
            }]),
            b
        }();
        return a(document).on(l.CLICK_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
            b.preventDefault();
            var c = b.target;
            a(c).hasClass(j.BUTTON) || (c = a(c).closest(k.BUTTON)),
            m._jQueryInterface.call(a(c), "toggle")
        }).on(l.FOCUS_BLUR_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
            var c = a(b.target).closest(k.BUTTON)[0];
            a(c).toggleClass(j.FOCUS, /^focus(in)?$/.test(b.type))
        }),
        a.fn[b] = m._jQueryInterface,
        a.fn[b].Constructor = m,
        a.fn[b].noConflict = function() {
            return a.fn[b] = i,
            m._jQueryInterface
        }
        ,
        m
    }(jQuery),
    function(a) {
        var b = "carousel"
          , d = "4.0.0-alpha.4"
          , g = "bs.carousel"
          , h = "." + g
          , i = ".data-api"
          , j = a.fn[b]
          , k = 600
          , l = 37
          , m = 39
          , n = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }
          , o = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }
          , p = {
            NEXT: "next",
            PREVIOUS: "prev"
        }
          , q = {
            SLIDE: "slide" + h,
            SLID: "slid" + h,
            KEYDOWN: "keydown" + h,
            MOUSEENTER: "mouseenter" + h,
            MOUSELEAVE: "mouseleave" + h,
            LOAD_DATA_API: "load" + h + i,
            CLICK_DATA_API: "click" + h + i
        }
          , r = {
            CAROUSEL: "carousel",
            ACTIVE: "active",
            SLIDE: "slide",
            RIGHT: "right",
            LEFT: "left",
            ITEM: "carousel-item"
        }
          , s = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".next, .prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }
          , t = function() {
            function i(b, d) {
                c(this, i),
                this._items = null,
                this._interval = null,
                this._activeElement = null,
                this._isPaused = !1,
                this._isSliding = !1,
                this._config = this._getConfig(d),
                this._element = a(b)[0],
                this._indicatorsElement = a(this._element).find(s.INDICATORS)[0],
                this._addEventListeners()
            }
            return e(i, [{
                key: "next",
                value: function() {
                    this._isSliding || this._slide(p.NEXT)
                }
            }, {
                key: "nextWhenVisible",
                value: function() {
                    document.hidden || this.next()
                }
            }, {
                key: "prev",
                value: function() {
                    this._isSliding || this._slide(p.PREVIOUS)
                }
            }, {
                key: "pause",
                value: function(b) {
                    b || (this._isPaused = !0),
                    a(this._element).find(s.NEXT_PREV)[0] && f.supportsTransitionEnd() && (f.triggerTransitionEnd(this._element),
                    this.cycle(!0)),
                    clearInterval(this._interval),
                    this._interval = null
                }
            }, {
                key: "cycle",
                value: function(b) {
                    b || (this._isPaused = !1),
                    this._interval && (clearInterval(this._interval),
                    this._interval = null),
                    this._config.interval && !this._isPaused && (this._interval = setInterval(a.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                }
            }, {
                key: "to",
                value: function(b) {
                    var c = this;
                    this._activeElement = a(this._element).find(s.ACTIVE_ITEM)[0];
                    var d = this._getItemIndex(this._activeElement);
                    if (!(b > this._items.length - 1 || b < 0)) {
                        if (this._isSliding)
                            return void a(this._element).one(q.SLID, function() {
                                return c.to(b)
                            });
                        if (d === b)
                            return this.pause(),
                            void this.cycle();
                        var e = b > d ? p.NEXT : p.PREVIOUS;
                        this._slide(e, this._items[b])
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    a(this._element).off(h),
                    a.removeData(this._element, g),
                    this._items = null,
                    this._config = null,
                    this._element = null,
                    this._interval = null,
                    this._isPaused = null,
                    this._isSliding = null,
                    this._activeElement = null,
                    this._indicatorsElement = null
                }
            }, {
                key: "_getConfig",
                value: function(c) {
                    return c = a.extend({}, n, c),
                    f.typeCheckConfig(b, c, o),
                    c
                }
            }, {
                key: "_addEventListeners",
                value: function() {
                    this._config.keyboard && a(this._element).on(q.KEYDOWN, a.proxy(this._keydown, this)),
                    "hover" !== this._config.pause || "ontouchstart"in document.documentElement || a(this._element).on(q.MOUSEENTER, a.proxy(this.pause, this)).on(q.MOUSELEAVE, a.proxy(this.cycle, this))
                }
            }, {
                key: "_keydown",
                value: function(a) {
                    if (a.preventDefault(),
                    !/input|textarea/i.test(a.target.tagName))
                        switch (a.which) {
                        case l:
                            this.prev();
                            break;
                        case m:
                            this.next();
                            break;
                        default:
                            return
                        }
                }
            }, {
                key: "_getItemIndex",
                value: function(b) {
                    return this._items = a.makeArray(a(b).parent().find(s.ITEM)),
                    this._items.indexOf(b)
                }
            }, {
                key: "_getItemByDirection",
                value: function(a, b) {
                    var c = a === p.NEXT
                      , d = a === p.PREVIOUS
                      , e = this._getItemIndex(b)
                      , f = this._items.length - 1
                      , g = d && 0 === e || c && e === f;
                    if (g && !this._config.wrap)
                        return b;
                    var h = a === p.PREVIOUS ? -1 : 1
                      , i = (e + h) % this._items.length;
                    return i === -1 ? this._items[this._items.length - 1] : this._items[i]
                }
            }, {
                key: "_triggerSlideEvent",
                value: function(b, c) {
                    var d = a.Event(q.SLIDE, {
                        relatedTarget: b,
                        direction: c
                    });
                    return a(this._element).trigger(d),
                    d
                }
            }, {
                key: "_setActiveIndicatorElement",
                value: function(b) {
                    if (this._indicatorsElement) {
                        a(this._indicatorsElement).find(s.ACTIVE).removeClass(r.ACTIVE);
                        var c = this._indicatorsElement.children[this._getItemIndex(b)];
                        c && a(c).addClass(r.ACTIVE)
                    }
                }
            }, {
                key: "_slide",
                value: function(b, c) {
                    var d = this
                      , e = a(this._element).find(s.ACTIVE_ITEM)[0]
                      , g = c || e && this._getItemByDirection(b, e)
                      , h = Boolean(this._interval)
                      , i = b === p.NEXT ? r.LEFT : r.RIGHT;
                    if (g && a(g).hasClass(r.ACTIVE))
                        return void (this._isSliding = !1);
                    var j = this._triggerSlideEvent(g, i);
                    if (!j.isDefaultPrevented() && e && g) {
                        this._isSliding = !0,
                        h && this.pause(),
                        this._setActiveIndicatorElement(g);
                        var l = a.Event(q.SLID, {
                            relatedTarget: g,
                            direction: i
                        });
                        f.supportsTransitionEnd() && a(this._element).hasClass(r.SLIDE) ? (a(g).addClass(b),
                        f.reflow(g),
                        a(e).addClass(i),
                        a(g).addClass(i),
                        a(e).one(f.TRANSITION_END, function() {
                            a(g).removeClass(i).removeClass(b),
                            a(g).addClass(r.ACTIVE),
                            a(e).removeClass(r.ACTIVE).removeClass(b).removeClass(i),
                            d._isSliding = !1,
                            setTimeout(function() {
                                return a(d._element).trigger(l)
                            }, 0)
                        }).emulateTransitionEnd(k)) : (a(e).removeClass(r.ACTIVE),
                        a(g).addClass(r.ACTIVE),
                        this._isSliding = !1,
                        a(this._element).trigger(l)),
                        h && this.cycle()
                    }
                }
            }], [{
                key: "_jQueryInterface",
                value: function(b) {
                    return this.each(function() {
                        var c = a(this).data(g)
                          , d = a.extend({}, n, a(this).data());
                        "object" == typeof b && a.extend(d, b);
                        var e = "string" == typeof b ? b : d.slide;
                        if (c || (c = new i(this,d),
                        a(this).data(g, c)),
                        "number" == typeof b)
                            c.to(b);
                        else if ("string" == typeof e) {
                            if (void 0 === c[e])
                                throw new Error('No method named "' + e + '"');
                            c[e]()
                        } else
                            d.interval && (c.pause(),
                            c.cycle())
                    })
                }
            }, {
                key: "_dataApiClickHandler",
                value: function(b) {
                    var c = f.getSelectorFromElement(this);
                    if (c) {
                        var d = a(c)[0];
                        if (d && a(d).hasClass(r.CAROUSEL)) {
                            var e = a.extend({}, a(d).data(), a(this).data())
                              , h = this.getAttribute("data-slide-to");
                            h && (e.interval = !1),
                            i._jQueryInterface.call(a(d), e),
                            h && a(d).data(g).to(h),
                            b.preventDefault()
                        }
                    }
                }
            }, {
                key: "VERSION",
                get: function() {
                    return d
                }
            }, {
                key: "Default",
                get: function() {
                    return n
                }
            }]),
            i
        }();
        return a(document).on(q.CLICK_DATA_API, s.DATA_SLIDE, t._dataApiClickHandler),
        a(window).on(q.LOAD_DATA_API, function() {
            a(s.DATA_RIDE).each(function() {
                var b = a(this);
                t._jQueryInterface.call(b, b.data())
            })
        }),
        a.fn[b] = t._jQueryInterface,
        a.fn[b].Constructor = t,
        a.fn[b].noConflict = function() {
            return a.fn[b] = j,
            t._jQueryInterface
        }
        ,
        t
    }(jQuery),
    function(a) {
        var b = "collapse"
          , d = "4.0.0-alpha.4"
          , g = "bs.collapse"
          , h = "." + g
          , i = ".data-api"
          , j = a.fn[b]
          , k = 600
          , l = {
            toggle: !0,
            parent: ""
        }
          , m = {
            toggle: "boolean",
            parent: "string"
        }
          , n = {
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            CLICK_DATA_API: "click" + h + i
        }
          , o = {
            IN: "in",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed"
        }
          , p = {
            WIDTH: "width",
            HEIGHT: "height"
        }
          , q = {
            ACTIVES: ".panel > .in, .panel > .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }
          , r = function() {
            function h(b, d) {
                c(this, h),
                this._isTransitioning = !1,
                this._element = b,
                this._config = this._getConfig(d),
                this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + b.id + '"],' + ('[data-toggle="collapse"][data-target="#' + b.id + '"]'))),
                this._parent = this._config.parent ? this._getParent() : null,
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                this._config.toggle && this.toggle()
            }
            return e(h, [{
                key: "toggle",
                value: function() {
                    a(this._element).hasClass(o.IN) ? this.hide() : this.show()
                }
            }, {
                key: "show",
                value: function() {
                    var b = this;
                    if (!this._isTransitioning && !a(this._element).hasClass(o.IN)) {
                        var c = void 0
                          , d = void 0;
                        if (this._parent && (c = a.makeArray(a(q.ACTIVES)),
                        c.length || (c = null)),
                        !(c && (d = a(c).data(g),
                        d && d._isTransitioning))) {
                            var e = a.Event(n.SHOW);
                            if (a(this._element).trigger(e),
                            !e.isDefaultPrevented()) {
                                c && (h._jQueryInterface.call(a(c), "hide"),
                                d || a(c).data(g, null));
                                var i = this._getDimension();
                                a(this._element).removeClass(o.COLLAPSE).addClass(o.COLLAPSING),
                                this._element.style[i] = 0,
                                this._element.setAttribute("aria-expanded", !0),
                                this._triggerArray.length && a(this._triggerArray).removeClass(o.COLLAPSED).attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                                var j = function() {
                                    a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).addClass(o.IN),
                                    b._element.style[i] = "",
                                    b.setTransitioning(!1),
                                    a(b._element).trigger(n.SHOWN)
                                };
                                if (!f.supportsTransitionEnd())
                                    return void j();
                                var l = i[0].toUpperCase() + i.slice(1)
                                  , m = "scroll" + l;
                                a(this._element).one(f.TRANSITION_END, j).emulateTransitionEnd(k),
                                this._element.style[i] = this._element[m] + "px"
                            }
                        }
                    }
                }
            }, {
                key: "hide",
                value: function() {
                    var b = this;
                    if (!this._isTransitioning && a(this._element).hasClass(o.IN)) {
                        var c = a.Event(n.HIDE);
                        if (a(this._element).trigger(c),
                        !c.isDefaultPrevented()) {
                            var d = this._getDimension()
                              , e = d === p.WIDTH ? "offsetWidth" : "offsetHeight";
                            this._element.style[d] = this._element[e] + "px",
                            f.reflow(this._element),
                            a(this._element).addClass(o.COLLAPSING).removeClass(o.COLLAPSE).removeClass(o.IN),
                            this._element.setAttribute("aria-expanded", !1),
                            this._triggerArray.length && a(this._triggerArray).addClass(o.COLLAPSED).attr("aria-expanded", !1),
                            this.setTransitioning(!0);
                            var g = function() {
                                b.setTransitioning(!1),
                                a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).trigger(n.HIDDEN)
                            };
                            return this._element.style[d] = 0,
                            f.supportsTransitionEnd() ? void a(this._element).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : void g()
                        }
                    }
                }
            }, {
                key: "setTransitioning",
                value: function(a) {
                    this._isTransitioning = a
                }
            }, {
                key: "dispose",
                value: function() {
                    a.removeData(this._element, g),
                    this._config = null,
                    this._parent = null,
                    this._element = null,
                    this._triggerArray = null,
                    this._isTransitioning = null
                }
            }, {
                key: "_getConfig",
                value: function(c) {
                    return c = a.extend({}, l, c),
                    c.toggle = Boolean(c.toggle),
                    f.typeCheckConfig(b, c, m),
                    c
                }
            }, {
                key: "_getDimension",
                value: function() {
                    var b = a(this._element).hasClass(p.WIDTH);
                    return b ? p.WIDTH : p.HEIGHT
                }
            }, {
                key: "_getParent",
                value: function() {
                    var b = this
                      , c = a(this._config.parent)[0]
                      , d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return a(c).find(d).each(function(a, c) {
                        b._addAriaAndCollapsedClass(h._getTargetFromElement(c), [c])
                    }),
                    c
                }
            }, {
                key: "_addAriaAndCollapsedClass",
                value: function(b, c) {
                    if (b) {
                        var d = a(b).hasClass(o.IN);
                        b.setAttribute("aria-expanded", d),
                        c.length && a(c).toggleClass(o.COLLAPSED, !d).attr("aria-expanded", d)
                    }
                }
            }], [{
                key: "_getTargetFromElement",
                value: function(b) {
                    var c = f.getSelectorFromElement(b);
                    return c ? a(c)[0] : null
                }
            }, {
                key: "_jQueryInterface",
                value: function(b) {
                    return this.each(function() {
                        var c = a(this)
                          , d = c.data(g)
                          , e = a.extend({}, l, c.data(), "object" == typeof b && b);
                        if (!d && e.toggle && /show|hide/.test(b) && (e.toggle = !1),
                        d || (d = new h(this,e),
                        c.data(g, d)),
                        "string" == typeof b) {
                            if (void 0 === d[b])
                                throw new Error('No method named "' + b + '"');
                            d[b]()
                        }
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return d
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }]),
            h
        }();
        return a(document).on(n.CLICK_DATA_API, q.DATA_TOGGLE, function(b) {
            b.preventDefault();
            var c = r._getTargetFromElement(this)
              , d = a(c).data(g)
              , e = d ? "toggle" : a(this).data();
            r._jQueryInterface.call(a(c), e)
        }),
        a.fn[b] = r._jQueryInterface,
        a.fn[b].Constructor = r,
        a.fn[b].noConflict = function() {
            return a.fn[b] = j,
            r._jQueryInterface
        }
        ,
        r
    }(jQuery),
    function(a) {
        var b = "dropdown"
          , d = "4.0.0-alpha.4"
          , g = "bs.dropdown"
          , h = "." + g
          , i = ".data-api"
          , j = a.fn[b]
          , k = 27
          , l = 38
          , m = 40
          , n = 3
          , o = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            CLICK: "click" + h,
            CLICK_DATA_API: "click" + h + i,
            KEYDOWN_DATA_API: "keydown" + h + i
        }
          , p = {
            BACKDROP: "dropdown-backdrop",
            DISABLED: "disabled",
            OPEN: "open"
        }
          , q = {
            BACKDROP: ".dropdown-backdrop",
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            ROLE_MENU: '[role="menu"]',
            ROLE_LISTBOX: '[role="listbox"]',
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
        }
          , r = function() {
            function b(a) {
                c(this, b),
                this._element = a,
                this._addEventListeners()
            }
            return e(b, [{
                key: "toggle",
                value: function() {
                    if (this.disabled || a(this).hasClass(p.DISABLED))
                        return !1;
                    var c = b._getParentFromElement(this)
                      , d = a(c).hasClass(p.OPEN);
                    if (b._clearMenus(),
                    d)
                        return !1;
                    if ("ontouchstart"in document.documentElement && !a(c).closest(q.NAVBAR_NAV).length) {
                        var e = document.createElement("div");
                        e.className = p.BACKDROP,
                        a(e).insertBefore(this),
                        a(e).on("click", b._clearMenus)
                    }
                    var f = {
                        relatedTarget: this
                    }
                      , g = a.Event(o.SHOW, f);
                    return a(c).trigger(g),
                    !g.isDefaultPrevented() && (this.focus(),
                    this.setAttribute("aria-expanded", "true"),
                    a(c).toggleClass(p.OPEN),
                    a(c).trigger(a.Event(o.SHOWN, f)),
                    !1)
                }
            }, {
                key: "dispose",
                value: function() {
                    a.removeData(this._element, g),
                    a(this._element).off(h),
                    this._element = null
                }
            }, {
                key: "_addEventListeners",
                value: function() {
                    a(this._element).on(o.CLICK, this.toggle)
                }
            }], [{
                key: "_jQueryInterface",
                value: function(c) {
                    return this.each(function() {
                        var d = a(this).data(g);
                        if (d || a(this).data(g, d = new b(this)),
                        "string" == typeof c) {
                            if (void 0 === d[c])
                                throw new Error('No method named "' + c + '"');
                            d[c].call(this)
                        }
                    })
                }
            }, {
                key: "_clearMenus",
                value: function(c) {
                    if (!c || c.which !== n) {
                        var d = a(q.BACKDROP)[0];
                        d && d.parentNode.removeChild(d);
                        for (var e = a.makeArray(a(q.DATA_TOGGLE)), f = 0; f < e.length; f++) {
                            var g = b._getParentFromElement(e[f])
                              , h = {
                                relatedTarget: e[f]
                            };
                            if (a(g).hasClass(p.OPEN) && !(c && "click" === c.type && /input|textarea/i.test(c.target.tagName) && a.contains(g, c.target))) {
                                var i = a.Event(o.HIDE, h);
                                a(g).trigger(i),
                                i.isDefaultPrevented() || (e[f].setAttribute("aria-expanded", "false"),
                                a(g).removeClass(p.OPEN).trigger(a.Event(o.HIDDEN, h)))
                            }
                        }
                    }
                }
            }, {
                key: "_getParentFromElement",
                value: function(b) {
                    var c = void 0
                      , d = f.getSelectorFromElement(b);
                    return d && (c = a(d)[0]),
                    c || b.parentNode
                }
            }, {
                key: "_dataApiKeydownHandler",
                value: function(c) {
                    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName) && (c.preventDefault(),
                    c.stopPropagation(),
                    !this.disabled && !a(this).hasClass(p.DISABLED))) {
                        var d = b._getParentFromElement(this)
                          , e = a(d).hasClass(p.OPEN);
                        if (!e && c.which !== k || e && c.which === k) {
                            if (c.which === k) {
                                var f = a(d).find(q.DATA_TOGGLE)[0];
                                a(f).trigger("focus")
                            }
                            return void a(this).trigger("click")
                        }
                        var g = a.makeArray(a(q.VISIBLE_ITEMS));
                        if (g = g.filter(function(a) {
                            return a.offsetWidth || a.offsetHeight
                        }),
                        g.length) {
                            var h = g.indexOf(c.target);
                            c.which === l && h > 0 && h--,
                            c.which === m && h < g.length - 1 && h++,
                            h < 0 && (h = 0),
                            g[h].focus()
                        }
                    }
                }
            }, {
                key: "VERSION",
                get: function() {
                    return d
                }
            }]),
            b
        }();
        return a(document).on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_MENU, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_LISTBOX, r._dataApiKeydownHandler).on(o.CLICK_DATA_API, r._clearMenus).on(o.CLICK_DATA_API, q.DATA_TOGGLE, r.prototype.toggle).on(o.CLICK_DATA_API, q.FORM_CHILD, function(a) {
            a.stopPropagation()
        }),
        a.fn[b] = r._jQueryInterface,
        a.fn[b].Constructor = r,
        a.fn[b].noConflict = function() {
            return a.fn[b] = j,
            r._jQueryInterface
        }
        ,
        r
    }(jQuery),
    function(a) {
        var b = "modal"
          , d = "4.0.0-alpha.4"
          , g = "bs.modal"
          , h = "." + g
          , i = ".data-api"
          , j = a.fn[b]
          , k = 300
          , l = 150
          , m = 27
          , n = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }
          , o = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }
          , p = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            FOCUSIN: "focusin" + h,
            RESIZE: "resize" + h,
            CLICK_DISMISS: "click.dismiss" + h,
            KEYDOWN_DISMISS: "keydown.dismiss" + h,
            MOUSEUP_DISMISS: "mouseup.dismiss" + h,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + h,
            CLICK_DATA_API: "click" + h + i
        }
          , q = {
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            IN: "in"
        }
          , r = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
        }
          , s = function() {
            function i(b, d) {
                c(this, i),
                this._config = this._getConfig(d),
                this._element = b,
                this._dialog = a(b).find(r.DIALOG)[0],
                this._backdrop = null,
                this._isShown = !1,
                this._isBodyOverflowing = !1,
                this._ignoreBackdropClick = !1,
                this._originalBodyPadding = 0,
                this._scrollbarWidth = 0
            }
            return e(i, [{
                key: "toggle",
                value: function(a) {
                    return this._isShown ? this.hide() : this.show(a)
                }
            }, {
                key: "show",
                value: function(b) {
                    var c = this
                      , d = a.Event(p.SHOW, {
                        relatedTarget: b
                    });
                    a(this._element).trigger(d),
                    this._isShown || d.isDefaultPrevented() || (this._isShown = !0,
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    a(document.body).addClass(q.OPEN),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    a(this._element).on(p.CLICK_DISMISS, r.DATA_DISMISS, a.proxy(this.hide, this)),
                    a(this._dialog).on(p.MOUSEDOWN_DISMISS, function() {
                        a(c._element).one(p.MOUSEUP_DISMISS, function(b) {
                            a(b.target).is(c._element) && (c._ignoreBackdropClick = !0)
                        })
                    }),
                    this._showBackdrop(a.proxy(this._showElement, this, b)))
                }
            }, {
                key: "hide",
                value: function(b) {
                    b && b.preventDefault();
                    var c = a.Event(p.HIDE);
                    a(this._element).trigger(c),
                    this._isShown && !c.isDefaultPrevented() && (this._isShown = !1,
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    a(document).off(p.FOCUSIN),
                    a(this._element).removeClass(q.IN),
                    a(this._element).off(p.CLICK_DISMISS),
                    a(this._dialog).off(p.MOUSEDOWN_DISMISS),
                    f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE) ? a(this._element).one(f.TRANSITION_END, a.proxy(this._hideModal, this)).emulateTransitionEnd(k) : this._hideModal())
                }
            }, {
                key: "dispose",
                value: function() {
                    a.removeData(this._element, g),
                    a(window).off(h),
                    a(document).off(h),
                    a(this._element).off(h),
                    a(this._backdrop).off(h),
                    this._config = null,
                    this._element = null,
                    this._dialog = null,
                    this._backdrop = null,
                    this._isShown = null,
                    this._isBodyOverflowing = null,
                    this._ignoreBackdropClick = null,
                    this._originalBodyPadding = null,
                    this._scrollbarWidth = null
                }
            }, {
                key: "_getConfig",
                value: function(c) {
                    return c = a.extend({}, n, c),
                    f.typeCheckConfig(b, c, o),
                    c
                }
            }, {
                key: "_showElement",
                value: function(b) {
                    var c = this
                      , d = f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                    this._element.style.display = "block",
                    this._element.removeAttribute("aria-hidden"),
                    this._element.scrollTop = 0,
                    d && f.reflow(this._element),
                    a(this._element).addClass(q.IN),
                    this._config.focus && this._enforceFocus();
                    var e = a.Event(p.SHOWN, {
                        relatedTarget: b
                    })
                      , g = function() {
                        c._config.focus && c._element.focus(),
                        a(c._element).trigger(e)
                    };
                    d ? a(this._dialog).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : g()
                }
            }, {
                key: "_enforceFocus",
                value: function() {
                    var b = this;
                    a(document).off(p.FOCUSIN).on(p.FOCUSIN, function(c) {
                        document === c.target || b._element === c.target || a(b._element).has(c.target).length || b._element.focus()
                    })
                }
            }, {
                key: "_setEscapeEvent",
                value: function() {
                    var b = this;
                    this._isShown && this._config.keyboard ? a(this._element).on(p.KEYDOWN_DISMISS, function(a) {
                        a.which === m && b.hide()
                    }) : this._isShown || a(this._element).off(p.KEYDOWN_DISMISS)
                }
            }, {
                key: "_setResizeEvent",
                value: function() {
                    this._isShown ? a(window).on(p.RESIZE, a.proxy(this._handleUpdate, this)) : a(window).off(p.RESIZE)
                }
            }, {
                key: "_hideModal",
                value: function() {
                    var b = this;
                    this._element.style.display = "none",
                    this._element.setAttribute("aria-hidden", "true"),
                    this._showBackdrop(function() {
                        a(document.body).removeClass(q.OPEN),
                        b._resetAdjustments(),
                        b._resetScrollbar(),
                        a(b._element).trigger(p.HIDDEN)
                    })
                }
            }, {
                key: "_removeBackdrop",
                value: function() {
                    this._backdrop && (a(this._backdrop).remove(),
                    this._backdrop = null)
                }
            }, {
                key: "_showBackdrop",
                value: function(b) {
                    var c = this
                      , d = a(this._element).hasClass(q.FADE) ? q.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        var e = f.supportsTransitionEnd() && d;
                        if (this._backdrop = document.createElement("div"),
                        this._backdrop.className = q.BACKDROP,
                        d && a(this._backdrop).addClass(d),
                        a(this._backdrop).appendTo(document.body),
                        a(this._element).on(p.CLICK_DISMISS, function(a) {
                            return c._ignoreBackdropClick ? void (c._ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide()))
                        }),
                        e && f.reflow(this._backdrop),
                        a(this._backdrop).addClass(q.IN),
                        !b)
                            return;
                        if (!e)
                            return void b();
                        a(this._backdrop).one(f.TRANSITION_END, b).emulateTransitionEnd(l)
                    } else if (!this._isShown && this._backdrop) {
                        a(this._backdrop).removeClass(q.IN);
                        var g = function() {
                            c._removeBackdrop(),
                            b && b()
                        };
                        f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE) ? a(this._backdrop).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : g()
                    } else
                        b && b()
                }
            }, {
                key: "_handleUpdate",
                value: function() {
                    this._adjustDialog()
                }
            }, {
                key: "_adjustDialog",
                value: function() {
                    var a = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                    this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }
            }, {
                key: "_resetAdjustments",
                value: function() {
                    this._element.style.paddingLeft = "",
                    this._element.style.paddingRight = ""
                }
            }, {
                key: "_checkScrollbar",
                value: function() {
                    this._isBodyOverflowing = document.body.clientWidth < window.innerWidth,
                    this._scrollbarWidth = this._getScrollbarWidth()
                }
            }, {
                key: "_setScrollbar",
                value: function() {
                    var b = parseInt(a(r.FIXED_CONTENT).css("padding-right") || 0, 10);
                    this._originalBodyPadding = document.body.style.paddingRight || "",
                    this._isBodyOverflowing && (document.body.style.paddingRight = b + this._scrollbarWidth + "px")
                }
            }, {
                key: "_resetScrollbar",
                value: function() {
                    document.body.style.paddingRight = this._originalBodyPadding
                }
            }, {
                key: "_getScrollbarWidth",
                value: function() {
                    var a = document.createElement("div");
                    a.className = q.SCROLLBAR_MEASURER,
                    document.body.appendChild(a);
                    var b = a.offsetWidth - a.clientWidth;
                    return document.body.removeChild(a),
                    b
                }
            }], [{
                key: "_jQueryInterface",
                value: function(b, c) {
                    return this.each(function() {
                        var d = a(this).data(g)
                          , e = a.extend({}, i.Default, a(this).data(), "object" == typeof b && b);
                        if (d || (d = new i(this,e),
                        a(this).data(g, d)),
                        "string" == typeof b) {
                            if (void 0 === d[b])
                                throw new Error('No method named "' + b + '"');
                            d[b](c)
                        } else
                            e.show && d.show(c)
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return d
                }
            }, {
                key: "Default",
                get: function() {
                    return n
                }
            }]),
            i
        }();
        return a(document).on(p.CLICK_DATA_API, r.DATA_TOGGLE, function(b) {
            var c = this
              , d = void 0
              , e = f.getSelectorFromElement(this);
            e && (d = a(e)[0]);
            var h = a(d).data(g) ? "toggle" : a.extend({}, a(d).data(), a(this).data());
            "A" === this.tagName && b.preventDefault();
            var i = a(d).one(p.SHOW, function(b) {
                b.isDefaultPrevented() || i.one(p.HIDDEN, function() {
                    a(c).is(":visible") && c.focus()
                })
            });
            s._jQueryInterface.call(a(d), h, this)
        }),
        a.fn[b] = s._jQueryInterface,
        a.fn[b].Constructor = s,
        a.fn[b].noConflict = function() {
            return a.fn[b] = j,
            s._jQueryInterface
        }
        ,
        s
    }(jQuery),
    function(a) {
        var b = "scrollspy"
          , d = "4.0.0-alpha.4"
          , g = "bs.scrollspy"
          , h = "." + g
          , i = ".data-api"
          , j = a.fn[b]
          , k = {
            offset: 10,
            method: "auto",
            target: ""
        }
          , l = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
          , m = {
            ACTIVATE: "activate" + h,
            SCROLL: "scroll" + h,
            LOAD_DATA_API: "load" + h + i
        }
          , n = {
            DROPDOWN_ITEM: "dropdown-item",
            DROPDOWN_MENU: "dropdown-menu",
            NAV_LINK: "nav-link",
            NAV: "nav",
            ACTIVE: "active"
        }
          , o = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            LIST_ITEM: ".list-item",
            LI: "li",
            LI_DROPDOWN: "li.dropdown",
            NAV_LINKS: ".nav-link",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }
          , p = {
            OFFSET: "offset",
            POSITION: "position"
        }
          , q = function() {
            function i(b, d) {
                c(this, i),
                this._element = b,
                this._scrollElement = "BODY" === b.tagName ? window : b,
                this._config = this._getConfig(d),
                this._selector = this._config.target + " " + o.NAV_LINKS + "," + (this._config.target + " " + o.DROPDOWN_ITEMS),
                this._offsets = [],
                this._targets = [],
                this._activeTarget = null,
                this._scrollHeight = 0,
                a(this._scrollElement).on(m.SCROLL, a.proxy(this._process, this)),
                this.refresh(),
                this._process()
            }
            return e(i, [{
                key: "refresh",
                value: function() {
                    var b = this
                      , c = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET
                      , d = "auto" === this._config.method ? c : this._config.method
                      , e = d === p.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [],
                    this._targets = [],
                    this._scrollHeight = this._getScrollHeight();
                    var g = a.makeArray(a(this._selector));
                    g.map(function(b) {
                        var c = void 0
                          , g = f.getSelectorFromElement(b);
                        return g && (c = a(g)[0]),
                        c && (c.offsetWidth || c.offsetHeight) ? [a(c)[d]().top + e, g] : null
                    }).filter(function(a) {
                        return a
                    }).sort(function(a, b) {
                        return a[0] - b[0]
                    }).forEach(function(a) {
                        b._offsets.push(a[0]),
                        b._targets.push(a[1])
                    })
                }
            }, {
                key: "dispose",
                value: function() {
                    a.removeData(this._element, g),
                    a(this._scrollElement).off(h),
                    this._element = null,
                    this._scrollElement = null,
                    this._config = null,
                    this._selector = null,
                    this._offsets = null,
                    this._targets = null,
                    this._activeTarget = null,
                    this._scrollHeight = null
                }
            }, {
                key: "_getConfig",
                value: function(c) {
                    if (c = a.extend({}, k, c),
                    "string" != typeof c.target) {
                        var d = a(c.target).attr("id");
                        d || (d = f.getUID(b),
                        a(c.target).attr("id", d)),
                        c.target = "#" + d
                    }
                    return f.typeCheckConfig(b, c, l),
                    c
                }
            }, {
                key: "_getScrollTop",
                value: function() {
                    return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                }
            }, {
                key: "_getScrollHeight",
                value: function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            }, {
                key: "_process",
                value: function() {
                    var a = this._getScrollTop() + this._config.offset
                      , b = this._getScrollHeight()
                      , c = this._config.offset + b - this._scrollElement.offsetHeight;
                    if (this._scrollHeight !== b && this.refresh(),
                    a >= c) {
                        var d = this._targets[this._targets.length - 1];
                        this._activeTarget !== d && this._activate(d)
                    }
                    if (this._activeTarget && a < this._offsets[0])
                        return this._activeTarget = null,
                        void this._clear();
                    for (var e = this._offsets.length; e--; ) {
                        var f = this._activeTarget !== this._targets[e] && a >= this._offsets[e] && (void 0 === this._offsets[e + 1] || a < this._offsets[e + 1]);
                        f && this._activate(this._targets[e])
                    }
                }
            }, {
                key: "_activate",
                value: function(b) {
                    this._activeTarget = b,
                    this._clear();
                    var c = this._selector.split(",");
                    c = c.map(function(a) {
                        return a + '[data-target="' + b + '"],' + (a + '[href="' + b + '"]')
                    });
                    var d = a(c.join(","));
                    d.hasClass(n.DROPDOWN_ITEM) ? (d.closest(o.DROPDOWN).find(o.DROPDOWN_TOGGLE).addClass(n.ACTIVE),
                    d.addClass(n.ACTIVE)) : d.parents(o.LI).find(o.NAV_LINKS).addClass(n.ACTIVE),
                    a(this._scrollElement).trigger(m.ACTIVATE, {
                        relatedTarget: b
                    })
                }
            }, {
                key: "_clear",
                value: function() {
                    a(this._selector).filter(o.ACTIVE).removeClass(n.ACTIVE)
                }
            }], [{
                key: "_jQueryInterface",
                value: function(b) {
                    return this.each(function() {
                        var c = a(this).data(g)
                          , d = "object" == typeof b && b || null;
                        if (c || (c = new i(this,d),
                        a(this).data(g, c)),
                        "string" == typeof b) {
                            if (void 0 === c[b])
                                throw new Error('No method named "' + b + '"');
                            c[b]()
                        }
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return d
                }
            }, {
                key: "Default",
                get: function() {
                    return k
                }
            }]),
            i
        }();
        return a(window).on(m.LOAD_DATA_API, function() {
            for (var b = a.makeArray(a(o.DATA_SPY)), c = b.length; c--; ) {
                var d = a(b[c]);
                q._jQueryInterface.call(d, d.data())
            }
        }),
        a.fn[b] = q._jQueryInterface,
        a.fn[b].Constructor = q,
        a.fn[b].noConflict = function() {
            return a.fn[b] = j,
            q._jQueryInterface
        }
        ,
        q
    }(jQuery),
    function(a) {
        var b = "tab"
          , d = "4.0.0-alpha.4"
          , g = "bs.tab"
          , h = "." + g
          , i = ".data-api"
          , j = a.fn[b]
          , k = 150
          , l = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            CLICK_DATA_API: "click" + h + i
        }
          , m = {
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
            FADE: "fade",
            IN: "in"
        }
          , n = {
            A: "a",
            LI: "li",
            DROPDOWN: ".dropdown",
            UL: "ul:not(.dropdown-menu)",
            FADE_CHILD: "> .nav-item .fade, > .fade",
            ACTIVE: ".active",
            ACTIVE_CHILD: "> .nav-item > .active, > .active",
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        }
          , o = function() {
            function b(a) {
                c(this, b),
                this._element = a
            }
            return e(b, [{
                key: "show",
                value: function() {
                    var b = this;
                    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !a(this._element).hasClass(m.ACTIVE)) {
                        var c = void 0
                          , d = void 0
                          , e = a(this._element).closest(n.UL)[0]
                          , g = f.getSelectorFromElement(this._element);
                        e && (d = a.makeArray(a(e).find(n.ACTIVE)),
                        d = d[d.length - 1]);
                        var h = a.Event(l.HIDE, {
                            relatedTarget: this._element
                        })
                          , i = a.Event(l.SHOW, {
                            relatedTarget: d
                        });
                        if (d && a(d).trigger(h),
                        a(this._element).trigger(i),
                        !i.isDefaultPrevented() && !h.isDefaultPrevented()) {
                            g && (c = a(g)[0]),
                            this._activate(this._element, e);
                            var j = function() {
                                var c = a.Event(l.HIDDEN, {
                                    relatedTarget: b._element
                                })
                                  , e = a.Event(l.SHOWN, {
                                    relatedTarget: d
                                });
                                a(d).trigger(c),
                                a(b._element).trigger(e)
                            };
                            c ? this._activate(c, c.parentNode, j) : j()
                        }
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    a.removeClass(this._element, g),
                    this._element = null
                }
            }, {
                key: "_activate",
                value: function(b, c, d) {
                    var e = a(c).find(n.ACTIVE_CHILD)[0]
                      , g = d && f.supportsTransitionEnd() && (e && a(e).hasClass(m.FADE) || Boolean(a(c).find(n.FADE_CHILD)[0]))
                      , h = a.proxy(this._transitionComplete, this, b, e, g, d);
                    e && g ? a(e).one(f.TRANSITION_END, h).emulateTransitionEnd(k) : h(),
                    e && a(e).removeClass(m.IN)
                }
            }, {
                key: "_transitionComplete",
                value: function(b, c, d, e) {
                    if (c) {
                        a(c).removeClass(m.ACTIVE);
                        var g = a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];
                        g && a(g).removeClass(m.ACTIVE),
                        c.setAttribute("aria-expanded", !1)
                    }
                    if (a(b).addClass(m.ACTIVE),
                    b.setAttribute("aria-expanded", !0),
                    d ? (f.reflow(b),
                    a(b).addClass(m.IN)) : a(b).removeClass(m.FADE),
                    b.parentNode && a(b.parentNode).hasClass(m.DROPDOWN_MENU)) {
                        var h = a(b).closest(n.DROPDOWN)[0];
                        h && a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE),
                        b.setAttribute("aria-expanded", !0)
                    }
                    e && e()
                }
            }], [{
                key: "_jQueryInterface",
                value: function(c) {
                    return this.each(function() {
                        var d = a(this)
                          , e = d.data(g);
                        if (e || (e = e = new b(this),
                        d.data(g, e)),
                        "string" == typeof c) {
                            if (void 0 === e[c])
                                throw new Error('No method named "' + c + '"');
                            e[c]()
                        }
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return d
                }
            }]),
            b
        }();
        return a(document).on(l.CLICK_DATA_API, n.DATA_TOGGLE, function(b) {
            b.preventDefault(),
            o._jQueryInterface.call(a(this), "show")
        }),
        a.fn[b] = o._jQueryInterface,
        a.fn[b].Constructor = o,
        a.fn[b].noConflict = function() {
            return a.fn[b] = j,
            o._jQueryInterface
        }
        ,
        o
    }(jQuery),
    function(a) {
        if (void 0 === window.Tether)
            throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");
        var b = "tooltip"
          , d = "4.0.0-alpha.4"
          , g = "bs.tooltip"
          , h = "." + g
          , i = a.fn[b]
          , j = 150
          , k = "bs-tether"
          , l = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: "0 0",
            constraints: []
        }
          , m = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "string",
            constraints: "array"
        }
          , n = {
            TOP: "bottom center",
            RIGHT: "middle left",
            BOTTOM: "top center",
            LEFT: "middle right"
        }
          , o = {
            IN: "in",
            OUT: "out"
        }
          , p = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            INSERTED: "inserted" + h,
            CLICK: "click" + h,
            FOCUSIN: "focusin" + h,
            FOCUSOUT: "focusout" + h,
            MOUSEENTER: "mouseenter" + h,
            MOUSELEAVE: "mouseleave" + h
        }
          , q = {
            FADE: "fade",
            IN: "in"
        }
          , r = {
            TOOLTIP: ".tooltip",
            TOOLTIP_INNER: ".tooltip-inner"
        }
          , s = {
            element: !1,
            enabled: !1
        }
          , t = {
            HOVER: "hover",
            FOCUS: "focus",
            CLICK: "click",
            MANUAL: "manual"
        }
          , u = function() {
            function i(a, b) {
                c(this, i),
                this._isEnabled = !0,
                this._timeout = 0,
                this._hoverState = "",
                this._activeTrigger = {},
                this._tether = null,
                this.element = a,
                this.config = this._getConfig(b),
                this.tip = null,
                this._setListeners()
            }
            return e(i, [{
                key: "enable",
                value: function() {
                    this._isEnabled = !0
                }
            }, {
                key: "disable",
                value: function() {
                    this._isEnabled = !1
                }
            }, {
                key: "toggleEnabled",
                value: function() {
                    this._isEnabled = !this._isEnabled
                }
            }, {
                key: "toggle",
                value: function(b) {
                    if (b) {
                        var c = this.constructor.DATA_KEY
                          , d = a(b.currentTarget).data(c);
                        d || (d = new this.constructor(b.currentTarget,this._getDelegateConfig()),
                        a(b.currentTarget).data(c, d)),
                        d._activeTrigger.click = !d._activeTrigger.click,
                        d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d)
                    } else {
                        if (a(this.getTipElement()).hasClass(q.IN))
                            return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    clearTimeout(this._timeout),
                    this.cleanupTether(),
                    a.removeData(this.element, this.constructor.DATA_KEY),
                    a(this.element).off(this.constructor.EVENT_KEY),
                    this.tip && a(this.tip).remove(),
                    this._isEnabled = null,
                    this._timeout = null,
                    this._hoverState = null,
                    this._activeTrigger = null,
                    this._tether = null,
                    this.element = null,
                    this.config = null,
                    this.tip = null
                }
            }, {
                key: "show",
                value: function() {
                    var b = this
                      , c = a.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        a(this.element).trigger(c);
                        var d = a.contains(this.element.ownerDocument.documentElement, this.element);
                        if (c.isDefaultPrevented() || !d)
                            return;
                        var e = this.getTipElement()
                          , g = f.getUID(this.constructor.NAME);
                        e.setAttribute("id", g),
                        this.element.setAttribute("aria-describedby", g),
                        this.setContent(),
                        this.config.animation && a(e).addClass(q.FADE);
                        var h = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement
                          , j = this._getAttachment(h);
                        a(e).data(this.constructor.DATA_KEY, this).appendTo(document.body),
                        a(this.element).trigger(this.constructor.Event.INSERTED),
                        this._tether = new Tether({
                            attachment: j,
                            element: e,
                            target: this.element,
                            classes: s,
                            classPrefix: k,
                            offset: this.config.offset,
                            constraints: this.config.constraints,
                            addTargetClasses: !1
                        }),
                        f.reflow(e),
                        this._tether.position(),
                        a(e).addClass(q.IN);
                        var l = function() {
                            var c = b._hoverState;
                            b._hoverState = null,
                            a(b.element).trigger(b.constructor.Event.SHOWN),
                            c === o.OUT && b._leave(null, b)
                        };
                        if (f.supportsTransitionEnd() && a(this.tip).hasClass(q.FADE))
                            return void a(this.tip).one(f.TRANSITION_END, l).emulateTransitionEnd(i._TRANSITION_DURATION);
                        l()
                    }
                }
            }, {
                key: "hide",
                value: function(b) {
                    var c = this
                      , d = this.getTipElement()
                      , e = a.Event(this.constructor.Event.HIDE)
                      , g = function() {
                        c._hoverState !== o.IN && d.parentNode && d.parentNode.removeChild(d),
                        c.element.removeAttribute("aria-describedby"),
                        a(c.element).trigger(c.constructor.Event.HIDDEN),
                        c.cleanupTether(),
                        b && b()
                    };
                    a(this.element).trigger(e),
                    e.isDefaultPrevented() || (a(d).removeClass(q.IN),
                    f.supportsTransitionEnd() && a(this.tip).hasClass(q.FADE) ? a(d).one(f.TRANSITION_END, g).emulateTransitionEnd(j) : g(),
                    this._hoverState = "")
                }
            }, {
                key: "isWithContent",
                value: function() {
                    return Boolean(this.getTitle())
                }
            }, {
                key: "getTipElement",
                value: function() {
                    return this.tip = this.tip || a(this.config.template)[0]
                }
            }, {
                key: "setContent",
                value: function() {
                    var b = a(this.getTipElement());
                    this.setElementContent(b.find(r.TOOLTIP_INNER), this.getTitle()),
                    b.removeClass(q.FADE).removeClass(q.IN),
                    this.cleanupTether()
                }
            }, {
                key: "setElementContent",
                value: function(b, c) {
                    var d = this.config.html;
                    "object" == typeof c && (c.nodeType || c.jquery) ? d ? a(c).parent().is(b) || b.empty().append(c) : b.text(a(c).text()) : b[d ? "html" : "text"](c)
                }
            }, {
                key: "getTitle",
                value: function() {
                    var a = this.element.getAttribute("data-original-title");
                    return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                    a
                }
            }, {
                key: "cleanupTether",
                value: function() {
                    this._tether && this._tether.destroy()
                }
            }, {
                key: "_getAttachment",
                value: function(a) {
                    return n[a.toUpperCase()]
                }
            }, {
                key: "_setListeners",
                value: function() {
                    var b = this
                      , c = this.config.trigger.split(" ");
                    c.forEach(function(c) {
                        if ("click" === c)
                            a(b.element).on(b.constructor.Event.CLICK, b.config.selector, a.proxy(b.toggle, b));
                        else if (c !== t.MANUAL) {
                            var d = c === t.HOVER ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN
                              , e = c === t.HOVER ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
                            a(b.element).on(d, b.config.selector, a.proxy(b._enter, b)).on(e, b.config.selector, a.proxy(b._leave, b))
                        }
                    }),
                    this.config.selector ? this.config = a.extend({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }
            }, {
                key: "_fixTitle",
                value: function() {
                    var a = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                    this.element.setAttribute("title", ""))
                }
            }, {
                key: "_enter",
                value: function(b, c) {
                    var d = this.constructor.DATA_KEY;
                    return c = c || a(b.currentTarget).data(d),
                    c || (c = new this.constructor(b.currentTarget,this._getDelegateConfig()),
                    a(b.currentTarget).data(d, c)),
                    b && (c._activeTrigger["focusin" === b.type ? t.FOCUS : t.HOVER] = !0),
                    a(c.getTipElement()).hasClass(q.IN) || c._hoverState === o.IN ? void (c._hoverState = o.IN) : (clearTimeout(c._timeout),
                    c._hoverState = o.IN,
                    c.config.delay && c.config.delay.show ? void (c._timeout = setTimeout(function() {
                        c._hoverState === o.IN && c.show()
                    }, c.config.delay.show)) : void c.show())
                }
            }, {
                key: "_leave",
                value: function(b, c) {
                    var d = this.constructor.DATA_KEY;
                    if (c = c || a(b.currentTarget).data(d),
                    c || (c = new this.constructor(b.currentTarget,this._getDelegateConfig()),
                    a(b.currentTarget).data(d, c)),
                    b && (c._activeTrigger["focusout" === b.type ? t.FOCUS : t.HOVER] = !1),
                    !c._isWithActiveTrigger())
                        return clearTimeout(c._timeout),
                        c._hoverState = o.OUT,
                        c.config.delay && c.config.delay.hide ? void (c._timeout = setTimeout(function() {
                            c._hoverState === o.OUT && c.hide()
                        }, c.config.delay.hide)) : void c.hide()
                }
            }, {
                key: "_isWithActiveTrigger",
                value: function() {
                    for (var a in this._activeTrigger)
                        if (this._activeTrigger[a])
                            return !0;
                    return !1
                }
            }, {
                key: "_getConfig",
                value: function(c) {
                    return c = a.extend({}, this.constructor.Default, a(this.element).data(), c),
                    c.delay && "number" == typeof c.delay && (c.delay = {
                        show: c.delay,
                        hide: c.delay
                    }),
                    f.typeCheckConfig(b, c, this.constructor.DefaultType),
                    c
                }
            }, {
                key: "_getDelegateConfig",
                value: function() {
                    var a = {};
                    if (this.config)
                        for (var b in this.config)
                            this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
                    return a
                }
            }], [{
                key: "_jQueryInterface",
                value: function(b) {
                    return this.each(function() {
                        var c = a(this).data(g)
                          , d = "object" == typeof b ? b : null;
                        if ((c || !/destroy|hide/.test(b)) && (c || (c = new i(this,d),
                        a(this).data(g, c)),
                        "string" == typeof b)) {
                            if (void 0 === c[b])
                                throw new Error('No method named "' + b + '"');
                            c[b]()
                        }
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return d
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }, {
                key: "NAME",
                get: function() {
                    return b
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return g
                }
            }, {
                key: "Event",
                get: function() {
                    return p
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return h
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return m
                }
            }]),
            i
        }();
        return a.fn[b] = u._jQueryInterface,
        a.fn[b].Constructor = u,
        a.fn[b].noConflict = function() {
            return a.fn[b] = i,
            u._jQueryInterface
        }
        ,
        u
    }(jQuery));
    (function(a) {
        var f = "popover"
          , h = "4.0.0-alpha.4"
          , i = "bs.popover"
          , j = "." + i
          , k = a.fn[f]
          , l = a.extend({}, g.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        })
          , m = a.extend({}, g.DefaultType, {
            content: "(string|element|function)"
        })
          , n = {
            FADE: "fade",
            IN: "in"
        }
          , o = {
            TITLE: ".popover-title",
            CONTENT: ".popover-content",
            ARROW: ".popover-arrow"
        }
          , p = {
            HIDE: "hide" + j,
            HIDDEN: "hidden" + j,
            SHOW: "show" + j,
            SHOWN: "shown" + j,
            INSERTED: "inserted" + j,
            CLICK: "click" + j,
            FOCUSIN: "focusin" + j,
            FOCUSOUT: "focusout" + j,
            MOUSEENTER: "mouseenter" + j,
            MOUSELEAVE: "mouseleave" + j
        }
          , q = function(g) {
            function k() {
                c(this, k),
                d(Object.getPrototypeOf(k.prototype), "constructor", this).apply(this, arguments)
            }
            return b(k, g),
            e(k, [{
                key: "isWithContent",
                value: function() {
                    return this.getTitle() || this._getContent()
                }
            }, {
                key: "getTipElement",
                value: function() {
                    return this.tip = this.tip || a(this.config.template)[0]
                }
            }, {
                key: "setContent",
                value: function() {
                    var b = a(this.getTipElement());
                    this.setElementContent(b.find(o.TITLE), this.getTitle()),
                    this.setElementContent(b.find(o.CONTENT), this._getContent()),
                    b.removeClass(n.FADE).removeClass(n.IN),
                    this.cleanupTether()
                }
            }, {
                key: "_getContent",
                value: function() {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                }
            }], [{
                key: "_jQueryInterface",
                value: function(b) {
                    return this.each(function() {
                        var c = a(this).data(i)
                          , d = "object" == typeof b ? b : null;
                        if ((c || !/destroy|hide/.test(b)) && (c || (c = new k(this,d),
                        a(this).data(i, c)),
                        "string" == typeof b)) {
                            if (void 0 === c[b])
                                throw new Error('No method named "' + b + '"');
                            c[b]()
                        }
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return h
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }, {
                key: "NAME",
                get: function() {
                    return f
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return i
                }
            }, {
                key: "Event",
                get: function() {
                    return p
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return j
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return m
                }
            }]),
            k
        }(g);
        return a.fn[f] = q._jQueryInterface,
        a.fn[f].Constructor = q,
        a.fn[f].noConflict = function() {
            return a.fn[f] = k,
            q._jQueryInterface
        }
        ,
        q
    })(jQuery)
}(jQuery);
/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event
          , h = i.call(arguments, 1)
          , j = 0
          , l = 0
          , m = 0
          , n = 0
          , o = 0
          , p = 0;
        if (b = a.event.fix(g),
        b.type = "mousewheel",
        "detail"in g && (m = -1 * g.detail),
        "wheelDelta"in g && (m = g.wheelDelta),
        "wheelDeltaY"in g && (m = g.wheelDeltaY),
        "wheelDeltaX"in g && (l = -1 * g.wheelDeltaX),
        "axis"in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m,
        m = 0),
        j = 0 === m ? l : m,
        "deltaY"in g && (m = -1 * g.deltaY,
        j = m),
        "deltaX"in g && (l = g.deltaX,
        0 === m && (j = -1 * l)),
        0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q,
                m *= q,
                l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r,
                m *= r,
                l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)),
            (!f || f > n) && (f = n,
            d(g, n) && (f /= 40)),
            d(g, n) && (j /= 40,
            l /= 40,
            m /= 40),
            j = Math[j >= 1 ? "floor" : "ceil"](j / f),
            l = Math[l >= 1 ? "floor" : "ceil"](l / f),
            m = Math[m >= 1 ? "floor" : "ceil"](m / f),
            k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left,
                p = b.clientY - s.top
            }
            return b.deltaX = l,
            b.deltaY = m,
            b.deltaFactor = f,
            b.offsetX = o,
            b.offsetY = p,
            b.deltaMode = 0,
            h.unshift(b, j, l, m),
            e && clearTimeout(e),
            e = setTimeout(c, 200),
            (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }
    function c() {
        f = null
    }
    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j; )
            a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c; )
                    this.addEventListener(h[--c], b, !1);
            else
                this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
            a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c; )
                    this.removeEventListener(h[--c], b, !1);
            else
                this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"),
            a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b)
              , d = c["offsetParent"in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")),
            parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event
          , h = i.call(arguments, 1)
          , j = 0
          , l = 0
          , m = 0
          , n = 0
          , o = 0
          , p = 0;
        if (b = a.event.fix(g),
        b.type = "mousewheel",
        "detail"in g && (m = -1 * g.detail),
        "wheelDelta"in g && (m = g.wheelDelta),
        "wheelDeltaY"in g && (m = g.wheelDeltaY),
        "wheelDeltaX"in g && (l = -1 * g.wheelDeltaX),
        "axis"in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m,
        m = 0),
        j = 0 === m ? l : m,
        "deltaY"in g && (m = -1 * g.deltaY,
        j = m),
        "deltaX"in g && (l = g.deltaX,
        0 === m && (j = -1 * l)),
        0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q,
                m *= q,
                l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r,
                m *= r,
                l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)),
            (!f || f > n) && (f = n,
            d(g, n) && (f /= 40)),
            d(g, n) && (j /= 40,
            l /= 40,
            m /= 40),
            j = Math[j >= 1 ? "floor" : "ceil"](j / f),
            l = Math[l >= 1 ? "floor" : "ceil"](l / f),
            m = Math[m >= 1 ? "floor" : "ceil"](m / f),
            k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left,
                p = b.clientY - s.top
            }
            return b.deltaX = l,
            b.deltaY = m,
            b.deltaFactor = f,
            b.offsetX = o,
            b.offsetY = p,
            b.deltaMode = 0,
            h.unshift(b, j, l, m),
            e && clearTimeout(e),
            e = setTimeout(c, 200),
            (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }
    function c() {
        f = null
    }
    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j; )
            a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c; )
                    this.addEventListener(h[--c], b, !1);
            else
                this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
            a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c; )
                    this.removeEventListener(h[--c], b, !1);
            else
                this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"),
            a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b)
              , d = c["offsetParent"in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")),
            parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(e) {
    !function(t) {
        var o = "function" == typeof define && define.amd
          , a = "undefined" != typeof module && module.exports
          , n = "https:" == document.location.protocol ? "https:" : "http:"
          , i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))),
        t()
    }(function() {
        var t, o = "mCustomScrollbar", a = "mCS", n = ".mCustomScrollbar", i = {
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            alwaysShowScrollbar: 0,
            snapOffset: 0,
            mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: "auto",
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
            },
            scrollButtons: {
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: !0,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            documentTouchScroll: !0,
            advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: "auto",
                autoUpdateTimeout: 60
            },
            theme: "light",
            callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
            }
        }, r = 0, l = {}, s = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1, d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], u = {
            init: function(t) {
                var t = e.extend(!0, {}, i, t)
                  , o = f.call(this);
                if (t.live) {
                    var s = t.liveSelector || this.selector || n
                      , c = e(s);
                    if ("off" === t.live)
                        return void m(s);
                    l[s] = setTimeout(function() {
                        c.mCustomScrollbar(t),
                        "once" === t.live && c.length && m(s)
                    }, 500)
                } else
                    m(s);
                return t.setWidth = t.set_width ? t.set_width : t.setWidth,
                t.setHeight = t.set_height ? t.set_height : t.setHeight,
                t.axis = t.horizontalScroll ? "x" : p(t.axis),
                t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia,
                "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                }),
                t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount,
                t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta,
                t.scrollButtons.scrollType = g(t.scrollButtons.scrollType),
                h(t),
                e(o).each(function() {
                    var o = e(this);
                    if (!o.data(a)) {
                        o.data(a, {
                            idx: ++r,
                            opt: t,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            contentReset: {
                                y: null,
                                x: null
                            },
                            bindEvents: !1,
                            tweenRunning: !1,
                            sequential: {},
                            langDir: o.css("direction"),
                            cbOffsets: null,
                            trigger: null,
                            poll: {
                                size: {
                                    o: 0,
                                    n: 0
                                },
                                img: {
                                    o: 0,
                                    n: 0
                                },
                                change: {
                                    o: 0,
                                    n: 0
                                }
                            }
                        });
                        var n = o.data(a)
                          , i = n.opt
                          , l = o.data("mcs-axis")
                          , s = o.data("mcs-scrollbar-position")
                          , c = o.data("mcs-theme");
                        l && (i.axis = l),
                        s && (i.scrollbarPosition = s),
                        c && (i.theme = c,
                        h(i)),
                        v.call(this),
                        n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this),
                        e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]),
                        u.update.call(null, o)
                    }
                })
            },
            update: function(t, o) {
                var n = t || f.call(this);
                return e(n).each(function() {
                    var t = e(this);
                    if (t.data(a)) {
                        var n = t.data(a)
                          , i = n.opt
                          , r = e("#mCSB_" + n.idx + "_container")
                          , l = e("#mCSB_" + n.idx)
                          , s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                        if (!r.length)
                            return;
                        n.tweenRunning && Q(t),
                        o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this),
                        t.hasClass(d[3]) && t.removeClass(d[3]),
                        t.hasClass(d[4]) && t.removeClass(d[4]),
                        l.css("max-height", "none"),
                        l.height() !== t.height() && l.css("max-height", t.height()),
                        _.call(this),
                        "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)),
                        n.overflowed = y.call(this),
                        M.call(this),
                        i.autoDraggerLength && S.call(this),
                        b.call(this),
                        T.call(this);
                        var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                        "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }),
                        n.contentReset.y = null) : (B.call(this),
                        "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }))),
                        "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }),
                        n.contentReset.x = null) : (B.call(this),
                        "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }))),
                        o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)),
                        N.call(this)
                    }
                })
            },
            scrollTo: function(t, o) {
                if ("undefined" != typeof t && null != t) {
                    var n = f.call(this);
                    return e(n).each(function() {
                        var n = e(this);
                        if (n.data(a)) {
                            var i = n.data(a)
                              , r = i.opt
                              , l = {
                                trigger: "external",
                                scrollInertia: r.scrollInertia,
                                scrollEasing: "mcsEaseInOut",
                                moveDragger: !1,
                                timeout: 60,
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            }
                              , s = e.extend(!0, {}, l, o)
                              , c = Y.call(this, t)
                              , d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                            c[0] = X.call(this, c[0], "y"),
                            c[1] = X.call(this, c[1], "x"),
                            s.moveDragger && (c[0] *= i.scrollRatio.y,
                            c[1] *= i.scrollRatio.x),
                            s.dur = ne() ? 0 : d,
                            setTimeout(function() {
                                null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y",
                                s.overwrite = "all",
                                G(n, c[0].toString(), s)),
                                null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x",
                                s.overwrite = "none",
                                G(n, c[1].toString(), s))
                            }, s.timeout)
                        }
                    })
                }
            },
            stop: function() {
                var t = f.call(this);
                return e(t).each(function() {
                    var t = e(this);
                    t.data(a) && Q(t)
                })
            },
            disable: function(t) {
                var o = f.call(this);
                return e(o).each(function() {
                    var o = e(this);
                    if (o.data(a)) {
                        o.data(a);
                        N.call(this, "remove"),
                        k.call(this),
                        t && B.call(this),
                        M.call(this, !0),
                        o.addClass(d[3])
                    }
                })
            },
            destroy: function() {
                var t = f.call(this);
                return e(t).each(function() {
                    var n = e(this);
                    if (n.data(a)) {
                        var i = n.data(a)
                          , r = i.opt
                          , l = e("#mCSB_" + i.idx)
                          , s = e("#mCSB_" + i.idx + "_container")
                          , c = e(".mCSB_" + i.idx + "_scrollbar");
                        r.live && m(r.liveSelector || e(t).selector),
                        N.call(this, "remove"),
                        k.call(this),
                        B.call(this),
                        n.removeData(a),
                        $(this, "mcs"),
                        c.remove(),
                        s.find("img." + d[2]).removeClass(d[2]),
                        l.replaceWith(s.contents()),
                        n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                    }
                })
            }
        }, f = function() {
            return "object" != typeof e(this) || e(this).length < 1 ? n : this
        }, h = function(t) {
            var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]
              , a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]
              , n = ["minimal", "minimal-dark"]
              , i = ["minimal", "minimal-dark"]
              , r = ["minimal", "minimal-dark"];
            t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength,
            t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar,
            t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable,
            t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar,
            t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
        }, m = function(e) {
            l[e] && (clearTimeout(l[e]),
            $(l, e))
        }, p = function(e) {
            return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
        }, g = function(e) {
            return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
        }, v = function() {
            var t = e(this)
              , n = t.data(a)
              , i = n.opt
              , r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : ""
              , l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"]
              , s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical"
              , c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0]
              , u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : ""
              , f = i.autoHideScrollbar ? " " + d[6] : ""
              , h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
            i.setWidth && t.css("width", i.setWidth),
            i.setHeight && t.css("height", i.setHeight),
            i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft,
            t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
            var m = e("#mCSB_" + n.idx)
              , p = e("#mCSB_" + n.idx + "_container");
            "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)),
            "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"),
            t.css("overflow", "visible"),
            m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c),
            p.wrap(u)),
            w.call(this);
            var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
            g[0].css("min-height", g[0].height()),
            g[1].css("min-width", g[1].width())
        }, x = function(t) {
            var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                return e(this).outerWidth(!0)
            }).get())]
              , a = t.parent().width();
            return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
        }, _ = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e("#mCSB_" + o.idx + "_container");
            if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                i.css({
                    width: "auto",
                    "min-width": 0,
                    "overflow-x": "scroll"
                });
                var r = Math.ceil(i[0].scrollWidth);
                3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
                    width: r,
                    "min-width": "100%",
                    "overflow-x": "inherit"
                }) : i.css({
                    "overflow-x": "inherit",
                    position: "absolute"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                    "min-width": "100%",
                    position: "relative"
                }).unwrap()
            }
        }, w = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e(".mCSB_" + o.idx + "_scrollbar:first")
              , r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : ""
              , l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"]
              , s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
            n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
        }, S = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]
              , l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)]
              , c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())]
              , d = s && c[1] < c[0] ? c[0] : c[1]
              , u = s && c[3] < c[2] ? c[2] : c[3];
            r[0].css({
                height: d,
                "max-height": r[0].parent().height() - 10
            }).find(".mCSB_dragger_bar").css({
                "line-height": c[0] + "px"
            }),
            r[1].css({
                width: u,
                "max-width": r[1].parent().width() - 10
            })
        }, b = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]
              , l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()]
              , s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
            o.scrollRatio = {
                y: s[0],
                x: s[1]
            }
        }, C = function(e, t, o) {
            var a = o ? d[0] + "_expanded" : ""
              , n = e.closest(".mCSB_scrollTools");
            "active" === t ? (e.toggleClass(d[0] + " " + a),
            n.toggleClass(d[1]),
            e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]),
            n.removeClass(d[1])) : (e.addClass(d[0]),
            n.addClass(d[1])))
        }, y = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = null == o.overflowed ? i.height() : i.outerHeight(!1)
              , l = null == o.overflowed ? i.width() : i.outerWidth(!1)
              , s = i[0].scrollHeight
              , c = i[0].scrollWidth;
            return s > r && (r = s),
            c > l && (l = c),
            [r > n.height(), l > n.width()]
        }, B = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e("#mCSB_" + o.idx)
              , r = e("#mCSB_" + o.idx + "_container")
              , l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
            if (Q(t),
            ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0),
            G(t, "_resetY")),
            "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                var s = dx = 0;
                "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1),
                dx = Math.abs(s / o.scrollRatio.x)),
                r.css("left", s),
                l[1].css("left", dx),
                G(t, "_resetX")
            }
        }, T = function() {
            function t() {
                r = setTimeout(function() {
                    e.event.special.mousewheel ? (clearTimeout(r),
                    W.call(o[0])) : t()
                }, 100)
            }
            var o = e(this)
              , n = o.data(a)
              , i = n.opt;
            if (!n.bindEvents) {
                if (I.call(this),
                i.contentTouchScroll && D.call(this),
                E.call(this),
                i.mouseWheel.enable) {
                    var r;
                    t()
                }
                P.call(this),
                U.call(this),
                i.advanced.autoScrollOnFocus && H.call(this),
                i.scrollButtons.enable && F.call(this),
                i.keyboard.enable && q.call(this),
                n.bindEvents = !0
            }
        }, k = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = a + "_" + o.idx
              , r = ".mCSB_" + o.idx + "_scrollbar"
              , l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a")
              , s = e("#mCSB_" + o.idx + "_container");
            n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)),
            n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)),
            o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i),
            l.each(function() {
                e(this).unbind("." + i)
            }),
            clearTimeout(t[0]._focusTimeout),
            $(t[0], "_focusTimeout"),
            clearTimeout(o.sequential.step),
            $(o.sequential, "step"),
            clearTimeout(s[0].onCompleteTimeout),
            $(s[0], "onCompleteTimeout"),
            o.bindEvents = !1)
        }, M = function(t) {
            var o = e(this)
              , n = o.data(a)
              , i = n.opt
              , r = e("#mCSB_" + n.idx + "_container_wrapper")
              , l = r.length ? r : e("#mCSB_" + n.idx + "_container")
              , s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")]
              , c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
            "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"),
            l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"),
            l.removeClass(d[10])) : (s[0].css("display", "none"),
            l.addClass(d[10])),
            l.addClass(d[8]))),
            "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"),
            l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"),
            l.removeClass(d[11])) : (s[1].css("display", "none"),
            l.addClass(d[11])),
            l.addClass(d[9]))),
            n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
        }, O = function(t) {
            var o = t.type
              , a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null
              , n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
            switch (o) {
            case "pointerdown":
            case "MSPointerDown":
            case "pointermove":
            case "MSPointerMove":
            case "pointerup":
            case "MSPointerUp":
                return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
            case "touchstart":
            case "touchmove":
            case "touchend":
                var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]
                  , r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
            default:
                return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1]
            }
        }, I = function() {
            function t(e, t, a, n) {
                if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0,
                o.attr("id") === f[1])
                    var i = "x"
                      , s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;
                else
                    var i = "y"
                      , s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
                G(r, s.toString(), {
                    dir: i,
                    drag: !0
                })
            }
            var o, n, i, r = e(this), l = r.data(a), d = l.opt, u = a + "_" + l.idx, f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"], h = e("#mCSB_" + l.idx + "_container"), m = e("#" + f[0] + ",#" + f[1]), p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m, g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
            m.bind("contextmenu." + u, function(e) {
                e.preventDefault()
            }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(t) {
                if (t.stopImmediatePropagation(),
                t.preventDefault(),
                ee(t)) {
                    c = !0,
                    s && (document.onselectstart = function() {
                        return !1
                    }
                    ),
                    L.call(h, !1),
                    Q(r),
                    o = e(this);
                    var a = o.offset()
                      , l = O(t)[0] - a.top
                      , u = O(t)[1] - a.left
                      , f = o.height() + a.top
                      , m = o.width() + a.left;
                    f > l && l > 0 && m > u && u > 0 && (n = l,
                    i = u),
                    C(o, "active", d.autoExpandScrollbar)
                }
            }).bind("touchmove." + u, function(e) {
                e.stopImmediatePropagation(),
                e.preventDefault();
                var a = o.offset()
                  , r = O(e)[0] - a.top
                  , l = O(e)[1] - a.left;
                t(n, i, r, l)
            }),
            e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(e) {
                if (o) {
                    var a = o.offset()
                      , r = O(e)[0] - a.top
                      , l = O(e)[1] - a.left;
                    if (n === r && i === l)
                        return;
                    t(n, i, r, l)
                }
            }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function() {
                o && (C(o, "active", d.autoExpandScrollbar),
                o = null),
                c = !1,
                s && (document.onselectstart = null),
                L.call(h, !0)
            })
        }, D = function() {
            function o(e) {
                if (!te(e) || c || O(e)[2])
                    return void (t = 0);
                t = 1,
                b = 0,
                C = 0,
                d = 1,
                y.removeClass("mCS_touch_action");
                var o = I.offset();
                u = O(e)[0] - o.top,
                f = O(e)[1] - o.left,
                z = [O(e)[0], O(e)[1]]
            }
            function n(e) {
                if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(),
                e.stopImmediatePropagation(),
                (!C || b) && d)) {
                    g = K();
                    var t = M.offset()
                      , o = O(e)[0] - t.top
                      , a = O(e)[1] - t.left
                      , n = "mcsLinearOut";
                    if (E.push(o),
                    W.push(a),
                    z[2] = Math.abs(O(e)[0] - z[0]),
                    z[3] = Math.abs(O(e)[1] - z[1]),
                    B.overflowed[0])
                        var i = D[0].parent().height() - D[0].height()
                          , r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
                    if (B.overflowed[1])
                        var l = D[1].parent().width() - D[1].width()
                          , h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
                    r || h ? (U || e.preventDefault(),
                    b = 1) : (C = 1,
                    y.addClass("mCS_touch_action")),
                    U && e.preventDefault(),
                    w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null],
                    I[0].idleTimer = 250,
                    B.overflowed[0] && s(w[0], R, n, "y", "all", !0),
                    B.overflowed[1] && s(w[1], R, n, "x", L, !0)
                }
            }
            function i(e) {
                if (!te(e) || c || O(e)[2])
                    return void (t = 0);
                t = 1,
                e.stopImmediatePropagation(),
                Q(y),
                p = K();
                var o = M.offset();
                h = O(e)[0] - o.top,
                m = O(e)[1] - o.left,
                E = [],
                W = []
            }
            function r(e) {
                if (te(e) && !c && !O(e)[2]) {
                    d = 0,
                    e.stopImmediatePropagation(),
                    b = 0,
                    C = 0,
                    v = K();
                    var t = M.offset()
                      , o = O(e)[0] - t.top
                      , a = O(e)[1] - t.left;
                    if (!(v - g > 30)) {
                        _ = 1e3 / (v - p);
                        var n = "mcsEaseOut"
                          , i = 2.5 > _
                          , r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
                        x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
                        var u = [Math.abs(x[0]), Math.abs(x[1])];
                        _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
                        var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                        w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null],
                        S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                        var y = parseInt(T.contentTouchScroll) || 0;
                        w[0] = u[0] > y ? w[0] : 0,
                        w[1] = u[1] > y ? w[1] : 0,
                        B.overflowed[0] && s(w[0], S[0], n, "y", L, !1),
                        B.overflowed[1] && s(w[1], S[1], n, "x", L, !1)
                    }
                }
            }
            function l(e, t) {
                var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
            }
            function s(e, t, o, a, n, i) {
                e && G(y, e.toString(), {
                    dur: t,
                    scrollEasing: o,
                    dir: a,
                    overwrite: n,
                    drag: i
                })
            }
            var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this), B = y.data(a), T = B.opt, k = a + "_" + B.idx, M = e("#mCSB_" + B.idx), I = e("#mCSB_" + B.idx + "_container"), D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")], E = [], W = [], R = 0, L = "yx" === T.axis ? "none" : "all", z = [], P = I.find("iframe"), H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k], U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
            I.bind(H[0], function(e) {
                o(e)
            }).bind(H[1], function(e) {
                n(e)
            }),
            M.bind(H[0], function(e) {
                i(e)
            }).bind(H[2], function(e) {
                r(e)
            }),
            P.length && P.each(function() {
                e(this).bind("load", function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function(e) {
                        o(e),
                        i(e)
                    }).bind(H[1], function(e) {
                        n(e)
                    }).bind(H[2], function(e) {
                        r(e)
                    })
                })
            })
        }, E = function() {
            function o() {
                return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
            }
            function n(e, t, o) {
                d.type = o && i ? "stepped" : "stepless",
                d.scrollAmount = 10,
                j(r, e, t, "mcsLinearOut", o ? 60 : null)
            }
            var i, r = e(this), l = r.data(a), s = l.opt, d = l.sequential, u = a + "_" + l.idx, f = e("#mCSB_" + l.idx + "_container"), h = f.parent();
            f.bind("mousedown." + u, function() {
                t || i || (i = 1,
                c = !0)
            }).add(document).bind("mousemove." + u, function(e) {
                if (!t && i && o()) {
                    var a = f.offset()
                      , r = O(e)[0] - a.top + f[0].offsetTop
                      , c = O(e)[1] - a.left + f[0].offsetLeft;
                    r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)),
                    "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)))
                }
            }).bind("mouseup." + u + " dragend." + u, function() {
                t || (i && (i = 0,
                n("off", null)),
                c = !1)
            })
        }, W = function() {
            function t(t, a) {
                if (Q(o),
                !z(o, t.target)) {
                    var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100
                      , d = i.scrollInertia;
                    if ("x" === i.axis || "x" === i.mouseWheel.axis)
                        var u = "x"
                          , f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)]
                          , h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0]
                          , m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft)
                          , p = c[1][0].offsetLeft
                          , g = c[1].parent().width() - c[1].width()
                          , v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;
                    else
                        var u = "y"
                          , f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)]
                          , h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0]
                          , m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop)
                          , p = c[0][0].offsetTop
                          , g = c[0].parent().height() - c[0].height()
                          , v = t.deltaY || a;
                    "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v),
                    i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1),
                    (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(),
                    t.preventDefault()),
                    t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor,
                    d = 17),
                    G(o, (m - v * h).toString(), {
                        dir: u,
                        dur: d
                    }))
                }
            }
            if (e(this).data(a)) {
                var o = e(this)
                  , n = o.data(a)
                  , i = n.opt
                  , r = a + "_" + n.idx
                  , l = e("#mCSB_" + n.idx)
                  , c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")]
                  , d = e("#mCSB_" + n.idx + "_container").find("iframe");
                d.length && d.each(function() {
                    e(this).bind("load", function() {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) {
                            t(e, o)
                        })
                    })
                }),
                l.bind("mousewheel." + r, function(e, o) {
                    t(e, o)
                })
            }
        }, R = new Object, A = function(t) {
            var o = !1
              , a = !1
              , n = null;
            if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")),
            a !== !1 && void 0 !== R[a])
                return R[a];
            if (t) {
                try {
                    var i = t.contentDocument || t.contentWindow.document;
                    n = i.body.innerHTML
                } catch (r) {}
                o = null !== n
            } else {
                try {
                    var i = top.document;
                    n = i.body.innerHTML
                } catch (r) {}
                o = null !== n
            }
            return a !== !1 && (R[a] = o),
            o
        }, L = function(e) {
            var t = this.find("iframe");
            if (t.length) {
                var o = e ? "auto" : "none";
                t.css("pointer-events", o)
            }
        }, z = function(t, o) {
            var n = o.nodeName.toLowerCase()
              , i = t.data(a).opt.mouseWheel.disableOver
              , r = ["select", "textarea"];
            return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
        }, P = function() {
            var t, o = e(this), n = o.data(a), i = a + "_" + n.idx, r = e("#mCSB_" + n.idx + "_container"), l = r.parent(), s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
            s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function(o) {
                c = !0,
                e(o.target).hasClass("mCSB_dragger") || (t = 1)
            }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function() {
                c = !1
            }).bind("click." + i, function(a) {
                if (t && (t = 0,
                e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
                    Q(o);
                    var i = e(this)
                      , s = i.find(".mCSB_dragger");
                    if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                        if (!n.overflowed[1])
                            return;
                        var c = "x"
                          , u = a.pageX > s.offset().left ? -1 : 1
                          , f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width())
                    } else {
                        if (!n.overflowed[0])
                            return;
                        var c = "y"
                          , u = a.pageY > s.offset().top ? -1 : 1
                          , f = Math.abs(r[0].offsetTop) - u * (.9 * l.height())
                    }
                    G(o, f.toString(), {
                        dir: c,
                        scrollEasing: "mcsEaseInOut"
                    })
                }
            })
        }, H = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = a + "_" + o.idx
              , r = e("#mCSB_" + o.idx + "_container")
              , l = r.parent();
            r.bind("focusin." + i, function() {
                var o = e(document.activeElement)
                  , a = r.find(".mCustomScrollBox").length
                  , i = 0;
                o.is(n.advanced.autoScrollOnFocus) && (Q(t),
                clearTimeout(t[0]._focusTimeout),
                t[0]._focusTimer = a ? (i + 17) * a : 0,
                t[0]._focusTimeout = setTimeout(function() {
                    var e = [ae(o)[0], ae(o)[1]]
                      , a = [r[0].offsetTop, r[0].offsetLeft]
                      , s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)]
                      , c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
                    "x" === n.axis || s[0] || G(t, e[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: i
                    }),
                    "y" === n.axis || s[1] || G(t, e[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: i
                    })
                }, t[0]._focusTimer))
            })
        }, U = function() {
            var t = e(this)
              , o = t.data(a)
              , n = a + "_" + o.idx
              , i = e("#mCSB_" + o.idx + "_container").parent();
            i.bind("scroll." + n, function() {
                0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
            })
        }, F = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = o.sequential
              , r = a + "_" + o.idx
              , l = ".mCSB_" + o.idx + "_scrollbar"
              , s = e(l + ">a");
            s.bind("contextmenu." + r, function(e) {
                e.preventDefault()
            }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) {
                function r(e, o) {
                    i.scrollAmount = n.scrollButtons.scrollAmount,
                    j(t, e, o)
                }
                if (a.preventDefault(),
                ee(a)) {
                    var l = e(this).attr("class");
                    switch (i.type = n.scrollButtons.scrollType,
                    a.type) {
                    case "mousedown":
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                        if ("stepped" === i.type)
                            return;
                        c = !0,
                        o.tweenRunning = !1,
                        r("on", l);
                        break;
                    case "mouseup":
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                        if ("stepped" === i.type)
                            return;
                        c = !1,
                        i.dir && r("off", l);
                        break;
                    case "click":
                        if ("stepped" !== i.type || o.tweenRunning)
                            return;
                        r("on", l)
                    }
                }
            })
        }, q = function() {
            function t(t) {
                function a(e, t) {
                    r.type = i.keyboard.scrollType,
                    r.scrollAmount = i.keyboard.scrollAmount,
                    "stepped" === r.type && n.tweenRunning || j(o, e, t)
                }
                switch (t.type) {
                case "blur":
                    n.tweenRunning && r.dir && a("off", null);
                    break;
                case "keydown":
                case "keyup":
                    var l = t.keyCode ? t.keyCode : t.which
                      , s = "on";
                    if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                        if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1])
                            return;
                        "keyup" === t.type && (s = "off"),
                        e(document.activeElement).is(u) || (t.preventDefault(),
                        t.stopImmediatePropagation(),
                        a(s, l))
                    } else if (33 === l || 34 === l) {
                        if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(),
                        t.stopImmediatePropagation()),
                        "keyup" === t.type) {
                            Q(o);
                            var f = 34 === l ? -1 : 1;
                            if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
                                var h = "x"
                                  , m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());
                            else
                                var h = "y"
                                  , m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                            G(o, m.toString(), {
                                dir: h,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(),
                    t.stopImmediatePropagation()),
                    "keyup" === t.type)) {
                        if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
                            var h = "x"
                              , m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                        else
                            var h = "y"
                              , m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                        G(o, m.toString(), {
                            dir: h,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                }
            }
            var o = e(this)
              , n = o.data(a)
              , i = n.opt
              , r = n.sequential
              , l = a + "_" + n.idx
              , s = e("#mCSB_" + n.idx)
              , c = e("#mCSB_" + n.idx + "_container")
              , d = c.parent()
              , u = "input,textarea,select,datalist,keygen,[contenteditable='true']"
              , f = c.find("iframe")
              , h = ["blur." + l + " keydown." + l + " keyup." + l];
            f.length && f.each(function() {
                e(this).bind("load", function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) {
                        t(e)
                    })
                })
            }),
            s.attr("tabindex", "0").bind(h[0], function(e) {
                t(e)
            })
        }, j = function(t, o, n, i, r) {
            function l(e) {
                u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                var o = "stepped" !== f.type
                  , a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60
                  , n = e ? o ? 7.5 : 40 : 2.5
                  , s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)]
                  , d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x]
                  , m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n)
                  , v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount)
                  , x = "auto" !== f.scrollAmount ? v : m
                  , _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"
                  , w = !!e;
                return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]),
                G(t, x.toString(), {
                    dir: f.dir[0],
                    scrollEasing: _,
                    dur: a,
                    onComplete: w
                }),
                e ? void (f.dir = !1) : (clearTimeout(f.step),
                void (f.step = setTimeout(function() {
                    l()
                }, a)))
            }
            function s() {
                clearTimeout(f.step),
                $(f, "step"),
                Q(t)
            }
            var c = t.data(a)
              , u = c.opt
              , f = c.sequential
              , h = e("#mCSB_" + c.idx + "_container")
              , m = "stepped" === f.type
              , p = u.scrollInertia < 26 ? 26 : u.scrollInertia
              , g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
            switch (o) {
            case "on":
                if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1],
                Q(t),
                oe(n) && "stepped" === f.type)
                    return;
                l(m);
                break;
            case "off":
                s(),
                (m || c.tweenRunning && f.dir) && l(!0)
            }
        }, Y = function(t) {
            var o = e(this).data(a).opt
              , n = [];
            return "function" == typeof t && (t = t()),
            t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t,
            n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t),
            "function" == typeof n[0] && (n[0] = n[0]()),
            "function" == typeof n[1] && (n[1] = n[1]()),
            n
        }, X = function(t, o) {
            if (null != t && "undefined" != typeof t) {
                var n = e(this)
                  , i = n.data(a)
                  , r = i.opt
                  , l = e("#mCSB_" + i.idx + "_container")
                  , s = l.parent()
                  , c = typeof t;
                o || (o = "x" === r.axis ? "x" : "y");
                var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height()
                  , f = "x" === o ? l[0].offsetLeft : l[0].offsetTop
                  , h = "x" === o ? "left" : "top";
                switch (c) {
                case "function":
                    return t();
                case "object":
                    var m = t.jquery ? t : e(t);
                    if (!m.length)
                        return;
                    return "x" === o ? ae(m)[1] : ae(m)[0];
                case "string":
                case "number":
                    if (oe(t))
                        return Math.abs(t);
                    if (-1 !== t.indexOf("%"))
                        return Math.abs(d * parseInt(t) / 100);
                    if (-1 !== t.indexOf("-="))
                        return Math.abs(f - parseInt(t.split("-=")[1]));
                    if (-1 !== t.indexOf("+=")) {
                        var p = f + parseInt(t.split("+=")[1]);
                        return p >= 0 ? 0 : Math.abs(p)
                    }
                    if (-1 !== t.indexOf("px") && oe(t.split("px")[0]))
                        return Math.abs(t.split("px")[0]);
                    if ("top" === t || "left" === t)
                        return 0;
                    if ("bottom" === t)
                        return Math.abs(s.height() - l.outerHeight(!1));
                    if ("right" === t)
                        return Math.abs(s.width() - l.outerWidth(!1));
                    if ("first" === t || "last" === t) {
                        var m = l.find(":" + t);
                        return "x" === o ? ae(m)[1] : ae(m)[0]
                    }
                    return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t),
                    void u.update.call(null, n[0]))
                }
            }
        }, N = function(t) {
            function o() {
                return clearTimeout(f[0].autoUpdate),
                0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function() {
                    return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(),
                    s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n,
                    void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth,
                    s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n,
                    void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length,
                    s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n,
                    void f.find("img").each(function() {
                        n(this)
                    }))
                }, c.advanced.autoUpdateTimeout))
            }
            function n(t) {
                function o(e, t) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                function a() {
                    this.onload = null,
                    e(t).addClass(d[2]),
                    r(2)
                }
                if (e(t).hasClass(d[2]))
                    return void r();
                var n = new Image;
                n.onload = o(n, a),
                n.src = t.src
            }
            function i() {
                c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                var e = 0
                  , t = f.find(c.advanced.updateOnSelectorChange);
                return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
                    e += this.offsetHeight + this.offsetWidth
                }),
                e
            }
            function r(e) {
                clearTimeout(f[0].autoUpdate),
                u.update.call(null, l[0], e)
            }
            var l = e(this)
              , s = l.data(a)
              , c = s.opt
              , f = e("#mCSB_" + s.idx + "_container");
            return t ? (clearTimeout(f[0].autoUpdate),
            void $(f[0], "autoUpdate")) : void o()
        }, V = function(e, t, o) {
            return Math.round(e / t) * t - o
        }, Q = function(t) {
            var o = t.data(a)
              , n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
            n.each(function() {
                Z.call(this)
            })
        }, G = function(t, o, n) {
            function i(e) {
                return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
            }
            function r() {
                return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w]
            }
            function l() {
                var e = [h[0].offsetTop, h[0].offsetLeft]
                  , o = [x[0].offsetTop, x[0].offsetLeft]
                  , a = [h.outerHeight(!1), h.outerWidth(!1)]
                  , i = [f.height(), f.width()];
                t[0].mcs = {
                    content: h,
                    top: e[0],
                    left: e[1],
                    draggerTop: o[0],
                    draggerLeft: o[1],
                    topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                    leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                    direction: n.dir
                }
            }
            var s = t.data(a)
              , c = s.opt
              , d = {
                trigger: "internal",
                dir: "y",
                scrollEasing: "mcsEaseOut",
                drag: !1,
                dur: c.scrollInertia,
                overwrite: "all",
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
            }
              , n = e.extend(d, n)
              , u = [n.dur, n.drag ? 0 : n.dur]
              , f = e("#mCSB_" + s.idx)
              , h = e("#mCSB_" + s.idx + "_container")
              , m = h.parent()
              , p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0]
              , g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
            if (s.trigger = n.trigger,
            0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"),
            m.scrollTop(0).scrollLeft(0)),
            "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]),
            s.contentReset.y = 1),
            "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]),
            s.contentReset.x = 1),
            "_resetY" !== o && "_resetX" !== o) {
                if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]),
                s.contentReset.x = null),
                !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]),
                s.contentReset.x = null),
                c.snapAmount) {
                    var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                    o = V(o, v, c.snapOffset)
                }
                switch (n.dir) {
                case "x":
                    var x = e("#mCSB_" + s.idx + "_dragger_horizontal")
                      , _ = "left"
                      , w = h[0].offsetLeft
                      , S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()]
                      , b = [o, 0 === o ? 0 : o / s.scrollRatio.x]
                      , y = p[1]
                      , B = g[1]
                      , T = y > 0 ? y / s.scrollRatio.x : 0
                      , k = B > 0 ? B / s.scrollRatio.x : 0;
                    break;
                case "y":
                    var x = e("#mCSB_" + s.idx + "_dragger_vertical")
                      , _ = "top"
                      , w = h[0].offsetTop
                      , S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()]
                      , b = [o, 0 === o ? 0 : o / s.scrollRatio.y]
                      , y = p[0]
                      , B = g[0]
                      , T = y > 0 ? y / s.scrollRatio.y : 0
                      , k = B > 0 ? B / s.scrollRatio.y : 0
                }
                b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0],
                t[0].mcs || (l(),
                i("onInit") && c.callbacks.onInit.call(t[0])),
                clearTimeout(h[0].onCompleteTimeout),
                J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing),
                !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
                    onStart: function() {
                        n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(),
                        c.callbacks.onScrollStart.call(t[0])),
                        s.tweenRunning = !0,
                        C(x),
                        s.cbOffsets = r())
                    },
                    onUpdate: function() {
                        n.callbacks && n.onUpdate && i("whileScrolling") && (l(),
                        c.callbacks.whileScrolling.call(t[0]))
                    },
                    onComplete: function() {
                        if (n.callbacks && n.onComplete) {
                            "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                            var e = h[0].idleTimer || 0;
                            h[0].onCompleteTimeout = setTimeout(function() {
                                i("onScroll") && (l(),
                                c.callbacks.onScroll.call(t[0])),
                                i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(),
                                c.callbacks.onTotalScroll.call(t[0])),
                                i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(),
                                c.callbacks.onTotalScrollBack.call(t[0])),
                                s.tweenRunning = !1,
                                h[0].idleTimer = 0,
                                C(x, "hide")
                            }, e)
                        }
                    }
                })
            }
        }, J = function(e, t, o, a, n, i, r) {
            function l() {
                S.stop || (x || m.call(),
                x = K() - v,
                s(),
                x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1,
                S.time < x + 1 && (S.time = x + 1)),
                S.time < a ? S.id = h(l) : g.call())
            }
            function s() {
                a > 0 ? (S.currVal = u(S.time, _, b, a, n),
                w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px",
                p.call()
            }
            function c() {
                f = 1e3 / 60,
                S.time = x + f,
                h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                    return s(),
                    setTimeout(e, .01)
                }
                ,
                S.id = h(l)
            }
            function d() {
                null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id),
                S.id = null)
            }
            function u(e, t, o, a, n) {
                switch (n) {
                case "linear":
                case "mcsLinear":
                    return o * e / a + t;
                case "mcsLinearOut":
                    return e /= a,
                    e--,
                    o * Math.sqrt(1 - e * e) + t;
                case "easeInOutSmooth":
                    return e /= a / 2,
                    1 > e ? o / 2 * e * e + t : (e--,
                    -o / 2 * (e * (e - 2) - 1) + t);
                case "easeInOutStrong":
                    return e /= a / 2,
                    1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--,
                    o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                case "easeInOut":
                case "mcsEaseInOut":
                    return e /= a / 2,
                    1 > e ? o / 2 * e * e * e + t : (e -= 2,
                    o / 2 * (e * e * e + 2) + t);
                case "easeOutSmooth":
                    return e /= a,
                    e--,
                    -o * (e * e * e * e - 1) + t;
                case "easeOutStrong":
                    return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                case "easeOut":
                case "mcsEaseOut":
                default:
                    var i = (e /= a) * e
                      , r = i * e;
                    return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
                }
            }
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            var f, h, r = r || {}, m = r.onStart || function() {}
            , p = r.onUpdate || function() {}
            , g = r.onComplete || function() {}
            , v = K(), x = 0, _ = e.offsetTop, w = e.style, S = e._mTween[t];
            "left" === t && (_ = e.offsetLeft);
            var b = o - _;
            S.stop = 0,
            "none" !== i && d(),
            c()
        }, K = function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
        }, Z = function() {
            var e = this;
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                var a = t[o];
                e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id),
                e._mTween[a].id = null,
                e._mTween[a].stop = 1)
            }
        }, $ = function(e, t) {
            try {
                delete e[t]
            } catch (o) {
                e[t] = null
            }
        }, ee = function(e) {
            return !(e.which && 1 !== e.which)
        }, te = function(e) {
            var t = e.originalEvent.pointerType;
            return !(t && "touch" !== t && 2 !== t)
        }, oe = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, ae = function(e) {
            var t = e.parents(".mCSB_container");
            return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
        }, ne = function() {
            function e() {
                var e = ["webkit", "moz", "ms", "o"];
                if ("hidden"in document)
                    return "hidden";
                for (var t = 0; t < e.length; t++)
                    if (e[t] + "Hidden"in document)
                        return e[t] + "Hidden";
                return null
            }
            var t = e();
            return t ? document[t] : !1
        };
        e.fn[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }
        ,
        e[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }
        ,
        e[o].defaults = i,
        window[o] = !0,
        e(window).bind("load", function() {
            e(n)[o](),
            e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function(t) {
                    var o, a, n = e(t), i = n.parents(".mCSB_container");
                    if (i.length)
                        return o = i.parent(),
                        a = [i[0].offsetTop, i[0].offsetLeft],
                        a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1)
                }
                ,
                mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) {
                    var n, i, r, l, s = e(t), c = s.parents(".mCSB_container"), d = "exact" === a[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                    if (c.length)
                        return n = [s.outerHeight(!1), s.outerWidth(!1)],
                        r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]],
                        i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth],
                        l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]],
                        r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0
                }
                ,
                mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                    var o = e(t).data(a);
                    if (o)
                        return o.overflowed[0] || o.overflowed[1]
                }
            })
        })
    })
});
var objectFitVideos = function() {
    "use strict";
    function t(t) {
        for (var e = getComputedStyle(t).fontFamily, o = null, n = {}; null !== (o = a.exec(e)); )
            n[o[1]] = o[2];
        return n["object-position"] ? i(n) : n
    }
    function e() {
        for (var e = document.querySelectorAll("video"), i = -1; e[++i]; ) {
            var n = t(e[i]);
            (n["object-fit"] || n["object-position"]) && (n["object-fit"] = n["object-fit"] || "fill",
            o(e[i], n))
        }
    }
    function o(t, e) {
        function o() {
            var o = t.videoWidth
              , n = t.videoHeight
              , d = o / n
              , c = r.clientWidth
              , a = r.clientHeight
              , p = c / a
              , l = 0
              , s = 0;
            i.marginLeft = i.marginTop = 0,
            (d < p ? "contain" === e["object-fit"] : "cover" === e["object-fit"]) ? (l = a * d,
            s = c / d,
            i.width = Math.round(l) + "px",
            i.height = a + "px",
            "left" === e["object-position-x"] ? i.marginLeft = 0 : "right" === e["object-position-x"] ? i.marginLeft = Math.round(c - l) + "px" : i.marginLeft = Math.round((c - l) / 2) + "px") : (s = c / d,
            i.width = c + "px",
            i.height = Math.round(s) + "px",
            "top" === e["object-position-y"] ? i.marginTop = 0 : "bottom" === e["object-position-y"] ? i.marginTop = Math.round(a - s) + "px" : i.marginTop = Math.round((a - s) / 2) + "px")
        }
        if ("fill" !== e["object-fit"]) {
            var i = t.style
              , n = window.getComputedStyle(t)
              , r = document.createElement("object-fit");
            r.appendChild(t.parentNode.replaceChild(r, t));
            var d = {
                height: "100%",
                width: "100%",
                boxSizing: "content-box",
                display: "inline-block",
                overflow: "hidden"
            };
            "backgroundColor backgroundImage borderColor borderStyle borderWidth bottom fontSize lineHeight left opacity margin position right top visibility".replace(/\w+/g, function(t) {
                d[t] = n[t]
            });
            for (var c in d)
                r.style[c] = d[c];
            i.border = i.margin = i.padding = 0,
            i.display = "block",
            i.opacity = 1,
            t.addEventListener("loadedmetadata", o),
            window.addEventListener("optimizedResize", o),
            t.readyState >= 1 && (t.removeEventListener("loadedmetadata", o),
            o())
        }
    }
    function i(t) {
        return ~t["object-position"].indexOf("left") ? t["object-position-x"] = "left" : ~t["object-position"].indexOf("right") ? t["object-position-x"] = "right" : t["object-position-x"] = "center",
        ~t["object-position"].indexOf("top") ? t["object-position-y"] = "top" : ~t["object-position"].indexOf("bottom") ? t["object-position-y"] = "bottom" : t["object-position-y"] = "center",
        t
    }
    function n(t, e, o) {
        o = o || window;
        var i = !1
          , n = null;
        try {
            n = new CustomEvent(e)
        } catch (t) {
            n = document.createEvent("Event"),
            n.initEvent(e, !0, !0)
        }
        var r = function() {
            i || (i = !0,
            requestAnimationFrame(function() {
                o.dispatchEvent(n),
                i = !1
            }))
        };
        o.addEventListener(t, r)
    }
    var r = new Image
      , d = "object-fit"in r.style
      , c = "object-position"in r.style
      , a = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;
    d && c || (e(),
    n("resize", "optimizedResize"))
};
"undefined" != typeof module && "undefined" != typeof module.exports && (module.exports = objectFitVideos);
