var encodeUtils = {};
encodeUtils.jsEncode = function (c) {
    if (stringUtils.isEmpty(c)) {
        return c
    }
    var a = "";
    for (var b = 0; b < c.length; b = b + 1) {
        if (stringUtils.isLetterOrDigit(c[b])) {
            a += c[b]
        } else {
            if (stringUtils.isWhitespace(c[b])) {
                a += c[b]
            } else {
                if (stringUtils.isVisible(c[b])) {
                    a += "\\" + c[b]
                } else {
                    a += c[b]
                }
            }
        }
    }
    return a
};
encodeUtils.htmlEntityEncode = function (c) {
    if (stringUtils.isEmpty(c)) {
        return c
    }
    var a = "";
    for (var b = 0; b < c.length; b = b + 1) {
        if (stringUtils.isLetterOrDigit(c[b])) {
            a += c[b]
        } else {
            if (stringUtils.isWhitespace(c[b])) {
                a += c[b]
            } else {
                if (stringUtils.isVisible(c[b])) {
                    a += "&#" + c[b].charCodeAt(0) + ";"
                } else {
                    a += c[b]
                }
            }
        }
    }
    return a
};
encodeUtils.htmlEncode = function (b) {
    if (stringUtils.isEmpty(b)) {
        return ""
    }
    var c = document.createElement("div");
    var a = document.createTextNode("text");
    a.data = b;
    c.appendChild(a);
    return c.innerHTML
};
var stringUtils = {};
stringUtils.isEmpty = function (a) {
    if (a == null || a == undefined || a == "") {
        return true
    }
    return false
};
stringUtils.isLetterOrDigit = function (a) {
    if (a == null || a == undefined) {
        return false
    }
    return /^[0-9a-zA-Z]*$/.test(a)
};
stringUtils.isWhitespace = function (a) {
    if (a == null || a == undefined) {
        return false
    }
    return /^[\t\r\t\v\e ]*$/.test(a)
};
stringUtils.isVisible = function (b) {
    if (b == null || b == undefined) {
        return false
    }
    for (var a = 0; a < b.length; a = a + 1) {
        if (b[a].charCodeAt(0) >= 32 && b[a].charCodeAt(0) <= 126) {
        } else {
            return false
        }
    }
    return true
};
;!function (b) {
    function a(e) {
        if (c[e]) {
            return c[e].exports
        }
        var d = c[e] = {exports: {}, id: e, loaded: !1};
        return b[e].call(d.exports, d, d.exports, a), d.loaded = !0, d.exports
    }

    var c = {};
    a.m = b, a.c = c, a.p = "", a(0)
}([function (c, a, f) {
    var d = f(1), b = function (g) {
        return g && g.__esModule ? g : {"default": g}
    }(d);
    (function (h) {
        var g = document.createElement("b");
        return g.innerHTML = "\x3c!--[if lte IE " + h + "]><i></i><![endif]--\x3e", 1 === g.getElementsByTagName("i").length
    })(8) && new b["default"]
}, function (h, d, k) {
    function j(i, a) {
        if (!(i instanceof a)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    Object.defineProperty(d, "__esModule", {value: !0});
    var g = function () {
        function a(l, i) {
            for (var p = 0; p < i.length; p++) {
                var m = i[p];
                m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(l, m.key, m)
            }
        }

        return function (e, l, i) {
            return l && a(e.prototype, l), i && a(e, i), e
        }
    }();
    k(2);
    var c = k(6), b = function (a) {
        return a && a.__esModule ? a : {"default": a}
    }(c), f = function () {
        function a() {
            j(this, a), this.layerHTML = '\t          <div id="J_IE6Unsupport"  class="m-newlayer m-newlayer-s2" style="display:none;">\t            <h2><span>Hi，你的浏览器版本过低</span><a href="javascript:void(0)" class="j-close"></a></h2>\t            <div class="inner">\t              <div class="content">\t                <p>为了正常使用网易云阅读的多数功能，强烈建议换用以下现代浏览器。如果你使用的是遨游2、360安全、腾讯TT、世界之窗 等浏览器，只需升级到最新的“双核”版本，并启用“高速渲染模式”即可。</p>\t                <ul class="m-browsers">\t                  <li><a class="chrome" href="http://www.google.cn/chrome/" target="_blank"><em>chrome</em></a></li>\t                  <li><a class="firefox" href="http://firefox.com.cn/" target="_blank"><em>Firefox</em></a></li>\t                  <li><a class="safari" href="http://www.apple.com.cn/safari/" target="_blank"><em>Safari</em></a></li>\t                  <li><a class="ie" href="https://support.microsoft.com/en-us/help/17621/internet-explorer-downloads" target="_blank"><em>IE9+</em></a></li>\t                </ul>\t                <div class="button">\t                  <a class="cc j-close" style="color:#666">知道了</a>\t                </div>\t              </div>\t            </div>\t          </div>', this.init()
        }

        return g(a, [{
            key: "init", value: function () {
                var i = JSON.parse($.cookie("YD_DATA"));
                i && 1 == i.IEAlert || this.renderLayer()
            }
        }, {
            key: "renderLayer", value: function () {
                $($.parseHTML(this.layerHTML)).appendTo(document.body), new b["default"]("#J_IE6Unsupport"), $.cookie("YD_DATA", JSON.stringify({IEAlert: !0}), {expires: 365})
            }
        }]), a
    }();
    d["default"] = f
}, function (b, a, d) {
    var c = d(3);
    "string" == typeof c && (c = [[b.id, c, ""]]), d(5)(c, {}), c.locals && (b.exports = c.locals)
}, function (b, a, c) {
    a = b.exports = c(4)(), a.push([b.id, ".clear-float,.m-browsers,.m-newlayer .inner .button{zoom:1}.clear-float:after,.m-browsers:after,.m-newlayer .inner .button:after{clear:both;content:'.';display:block;height:0;visibility:hidden}.m-newlayer{position:absolute;background-color:#fff;border:1px solid #dedede;box-shadow:1px 1px 2px #aaa;z-index:6000}.m-newlayer h2{position:relative;padding-left:20px;height:36px;line-height:36px;color:#333;font-size:1pc;font-weight:400;border-bottom:1px solid #dedede;background-color:#f9f9f9;background-image:-webkit-gradient(linear,0 0,0 100%,from(#fff),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#fff,#f1f1f1);background-image:linear-gradient(to bottom,#fff,#f1f1f1)}.m-newlayer h2 span{display:inline-block;width:80%;height:36px;overflow:hidden}.m-newlayer .inner{padding:20px}.m-newlayer .inner p{font-size:14px;line-height:28px;color:#666;word-break:break-all}.m-newlayer .inner .button{margin-top:1pc}.m-newlayer .inner .button a{display:block;height:24px;margin-left:13px;line-height:24px;padding:0 20px;float:right;text-align:center}.m-newlayer .inner .button a.cc{background-color:#f8f8f8;border:1px solid #bfbfbf;color:#999}.m-newlayer .inner h3 em,.m-newlayer .inner p em{color:#d24130}.m-newlayer-s2{width:450px}.m-browsers{margin:20px 0 10px 30px}.m-browsers li{float:left;margin:0 25px 0 0}.m-browsers a{display:block;width:4pc;padding-top:68px;text-align:center;background:url(https://easyreadfs.nosdn.127.net/web/trunk/1480315800903/icon-explorer.jpg) no-repeat;color:#333}.m-browsers .chrome{background-position:0 0}.m-browsers .firefox{background-position:-4pc 0}.m-browsers .safari{background-position:-8pc 0}.m-browsers .ie{background-position:-2in 0}.m-browsers em{font-weight:400}", ""])
}, function (b, a) {
    b.exports = function () {
        var c = [];
        return c.toString = function () {
            for (var f = [], d = 0; d < this.length; d++) {
                var g = this[d];
                g[2] ? f.push("@media " + g[2] + "{" + g[1] + "}") : f.push(g[1])
            }
            return f.join("")
        }, c.i = function (f, j) {
            "string" == typeof f && (f = [[null, f, ""]]);
            for (var h = {}, g = 0; g < this.length; g++) {
                var e = this[g][0];
                "number" == typeof e && (h[e] = !0)
            }
            for (g = 0; g < f.length; g++) {
                var d = f[g];
                "number" == typeof d[0] && h[d[0]] || (j && !d[2] ? d[2] = j : j && (d[2] = "(" + d[2] + ") and (" + j + ")"), c.push(d))
            }
        }, c
    }
}, function (G, j, y) {
    function x(h, f) {
        for (var m = 0; m < h.length; m++) {
            var l = h[m], g = I[l.id];
            if (g) {
                g.refs++;
                for (var d = 0; d < g.parts.length; d++) {
                    g.parts[d](l.parts[d])
                }
                for (; d < l.parts.length; d++) {
                    g.parts.push(k(l.parts[d], f))
                }
            } else {
                for (var c = [], d = 0; d < l.parts.length; d++) {
                    c.push(k(l.parts[d], f))
                }
                I[l.id] = {id: l.id, refs: 1, parts: c}
            }
        }
    }

    function q(p) {
        for (var K = [], g = {}, f = 0; f < p.length; f++) {
            var c = p[f], m = c[0], u = c[1], L = c[2], h = c[3], d = {css: u, media: L, sourceMap: h};
            g[m] ? g[m].parts.push(d) : K.push(g[m] = {id: m, parts: [d]})
        }
        return K
    }

    function C() {
        var c = document.createElement("style"), a = D();
        return c.type = "text/css", a.appendChild(c), c
    }

    function J() {
        var c = document.createElement("link"), a = D();
        return c.rel = "stylesheet", a.appendChild(c), c
    }

    function k(f, a) {
        var h, g, d;
        if (a.singleton) {
            var c = E++;
            h = F || (F = C()), g = B.bind(null, h, c, !1), d = B.bind(null, h, c, !0)
        } else {
            f.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (h = J(), g = w.bind(null, h), d = function () {
                h.parentNode.removeChild(h), h.href && URL.revokeObjectURL(h.href)
            }) : (h = C(), g = v.bind(null, h), d = function () {
                h.parentNode.removeChild(h)
            })
        }
        return g(f), function (e) {
            if (e) {
                if (e.css === f.css && e.media === f.media && e.sourceMap === f.sourceMap) {
                    return
                }
                g(f = e)
            } else {
                d()
            }
        }
    }

    function B(h, f, m, l) {
        var g = m ? "" : l.css;
        if (h.styleSheet) {
            h.styleSheet.cssText = z(f, g)
        } else {
            var d = document.createTextNode(g), c = h.childNodes;
            c[f] && h.removeChild(c[f]), c.length ? h.insertBefore(d, c[f]) : h.appendChild(d)
        }
    }

    function v(c, a) {
        var f = a.css, d = a.media;
        if (a.sourceMap, d && c.setAttribute("media", d), c.styleSheet) {
            c.styleSheet.cssText = f
        } else {
            for (; c.firstChild;) {
                c.removeChild(c.firstChild)
            }
            c.appendChild(document.createTextNode(f))
        }
    }

    function w(f, c) {
        var h = c.css, g = (c.media, c.sourceMap);
        g && (h += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(g)))) + " */");
        var d = new Blob([h], {type: "text/css"}), a = f.href;
        f.href = URL.createObjectURL(d), a && URL.revokeObjectURL(a)
    }

    var I = {}, H = function (c) {
        var a;
        return function () {
            return void 0 === a && (a = c.apply(this, arguments)), a
        }
    }, b = H(function () {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    }), D = H(function () {
        return document.head || document.getElementsByTagName("head")[0]
    }), F = null, E = 0;
    G.exports = function (c, a) {
        a = a || {}, "undefined" == typeof a.singleton && (a.singleton = b());
        var d = q(c);
        return x(d, a), function (o) {
            for (var m = [], h = 0; h < d.length; h++) {
                var n = d[h], g = I[n.id];
                g.refs--, m.push(g)
            }
            if (o) {
                x(q(o), a)
            }
            for (var h = 0; h < m.length; h++) {
                var g = m[h];
                if (0 === g.refs) {
                    for (var f = 0; f < g.parts.length; f++) {
                        g.parts[f]()
                    }
                    delete I[g.id]
                }
            }
        }
    };
    var z = function () {
        var a = [];
        return function (c, d) {
            return a[c] = d, a.filter(Boolean).join("\n")
        }
    }()
}, function (c, a) {
    function f(h, g) {
        if (!(h instanceof g)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var d = function () {
        function g(i, h) {
            for (var k = 0; k < h.length; k++) {
                var j = h[k];
                j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(i, j.key, j)
            }
        }

        return function (e, i, h) {
            return i && g(e.prototype, i), h && g(e, h), e
        }
    }(), b = function () {
        function g(e, h) {
            f(this, g), this.$ele = $(e), this.maskSwitch = "off" == h ? "off" : "on", this.init()
        }

        return d(g, [{
            key: "init", value: function () {
                var h = this;
                setTimeout(function () {
                    "on" == h.maskSwitch && h.createMask()
                }, 60), this.openLayer()
            }
        }, {
            key: "createMask", value: function () {
                if (0 === $(".m-mask").length) {
                    $("body").append('<div class="m-mask" style="display:block;"></div>')
                } else {
                    $(".m-mask").eq(0).show()
                }
            }
        }, {
            key: "openLayer", value: function () {
                var p = this, k = this.$ele.width(), u = this.$ele.height(), q = $(window).width(),
                    m = $(window).height(), j = $(document).scrollTop(), h = (m - u) / 2 + j, l = (q - k) / 2;
                this.$ele.css({
                    top: h,
                    left: l,
                    "z-index": 9999
                }).show(), $(".j-close", this.$ele).unbind().click(function (e) {
                    e.preventDefault(), p.$ele.hide(), 0 !== $(".m-mask").length && $(".m-mask").hide()
                })
            }
        }]), g
    }();
    a["default"] = b
}]), function (b) {
    function a(e) {
        if (c[e]) {
            return c[e].exports
        }
        var d = c[e] = {i: e, l: !1, exports: {}};
        return b[e].call(d.exports, d, d.exports, a), d.l = !0, d.exports
    }

    var c = {};
    a.m = b, a.c = c, a.i = function (d) {
        return d
    }, a.d = function (d, g, f) {
        a.o(d, g) || Object.defineProperty(d, g, {configurable: !1, enumerable: !0, get: f})
    }, a.n = function (d) {
        var f = d && d.__esModule ? function () {
            return d["default"]
        } : function () {
            return d
        };
        return a.d(f, "a", f), f
    }, a.o = function (f, d) {
        return Object.prototype.hasOwnProperty.call(f, d)
    }, a.p = "/build/", a(a.s = 4)
}([function (b, a, c) {
    (function (d) {
        function f() {
            var e = d.createClass({
                displayName: "LoginDrop", render: function () {
                    return this.props.isHover ? this.props.isLogin ? d.createElement("div", {
                        className: "submenu",
                        style: {left: this.props.position + "px"},
                        onMouseEnter: this.props.dropHover.bind(null, !0),
                        onMouseLeave: this.props.dropHover.bind(null, !1)
                    }, d.createElement("ul", {className: "openbox"}, d.createElement("b", null), this.props.userInfo.isProvider ? d.createElement("li", {className: "wdzy"}, d.createElement("a", {
                        href: "http://open.yuedu.163.com/weMediaList.do",
                        target: "_blank",
                        title: "我的自媒体"
                    }, "我的自媒体")) : "", this.props.userInfo.isAuthor ? d.createElement("li", {className: "wdzy"}, d.createElement("a", {
                        href: "http://zz.yc.163.com/bookList.do",
                        target: "_blank",
                        title: "我的原创作品"
                    }, "我的原创作品")) : "", d.createElement("li", {className: "grzx"}, d.createElement("a", {
                        href: "/myinfor",
                        title: "我的账号"
                    }, "我的帐号")), d.createElement("li", {className: "sub yecx"}, d.createElement("a", {
                        href: "/recharge.do?operation=balance",
                        title: "余额查询"
                    }, "余额查询")), d.createElement("li", {className: "sub xfjl"}, d.createElement("a", {
                        href: "/trade.do?operation=list",
                        title: "消费记录"
                    }, "消费记录")), d.createElement("li", {className: "sub tcdl"}, d.createElement("a", {
                        href: "javascript:new YueduLogin().logout(location.href);",
                        title: "登出"
                    }, "登出")))) : d.createElement("div", {
                        className: "m-loginops f-db1",
                        style: {left: this.props.position + "px"},
                        onMouseEnter: this.props.dropHover.bind(null, !0),
                        onMouseLeave: this.props.dropHover.bind(null, !1)
                    }, d.createElement("b", null), d.createElement("ul", null, d.createElement("li", {className: "wy"}, d.createElement("a", {
                        title: "网易邮箱登录",
                        onClick: this.props.goLogin
                    }, d.createElement("span", {className: "tiny-logo"}), "网易邮箱登录")), d.createElement("li", {className: "xl xllogin"}, d.createElement("a", {
                        title: "新浪微博登录",
                        onClick: function () {
                            (new YueduLogin).sinaLogin()
                        }
                    }, d.createElement("span", {className: "tiny-logo"}), "新浪微博登录")), d.createElement("li", {className: "sj"}, d.createElement("a", {
                        title: "手机号登录",
                        onClick: function () {
                            (new YueduLogin).showMobileLogin()
                        }
                    }, d.createElement("span", {className: "tiny-logo"}), "手机号登录")), d.createElement("li", {className: "wx wxlogin ll"}, d.createElement("a", {
                        title: "微信登录",
                        onClick: function () {
                            (new YueduLogin).weixinLogin()
                        }
                    }, d.createElement("span", {className: "tiny-logo"}), "微信登录")))) : null
                }
            }), i = d.createClass({
                displayName: "LoginSection", getInitialState: function () {
                    return {toggle: !1, isHover: !1}
                }, goLogin: function () {
                    (new YueduLogin).showEmailLogin()
                }, goOnHover: function () {
                    this.setState({isHover: !0})
                }, goUnHover: function () {
                    setTimeout(function () {
                        this.state.toggle || this.setState({isHover: !1})
                    }.bind(this), 300)
                }, goRegister: function (j) {
                    window.location.href = "https://zc.reg.163.com/regInitialized?pd=yyd&pkid=DkElgsB&pkht=yuedu.163.com"
                }, dropHover: function (k, j) {
                    k ? this.setState({toggle: !0}) : (this.setState({toggle: !1}), this.goUnHover())
                }, componentDidMount: function () {
                    this.refs.username && (this.namePositon = this.refs.username.offsetLeft)
                }, render: function () {
                    return this.props.isLogin ? d.createElement("div", null, d.createElement("div", {
                        ref: "username",
                        className: "ulink"
                    }, d.createElement("a", {
                        className: "name",
                        href: "/myinfor",
                        title: this.props.userInfo.nickName,
                        onMouseEnter: this.goOnHover,
                        onMouseLeave: this.goUnHover
                    }, d.createElement("span", null, this.props.userInfo.nickName)), d.createElement("span", {className: "sep"}, "|"), d.createElement("a", {
                        className: "chong",
                        href: "/report.do",
                        target: "_blank",
                        title: "举报"
                    }, "举报")), d.createElement(e, {
                        isLogin: !0,
                        isHover: this.state.isHover,
                        dropHover: this.dropHover,
                        position: this.namePositon - 37,
                        userInfo: this.props.userInfo
                    })) : d.createElement("div", null, d.createElement("div", {
                        ref: "username",
                        className: "ulink j-ulink"
                    }, d.createElement("a", {
                        onClick: this.goLogin,
                        onMouseEnter: this.goOnHover,
                        onMouseLeave: this.goUnHover,
                        hideFocus: "hidefocus",
                        className: "login",
                        title: "登录"
                    }, "登录"), d.createElement("span", {className: "sep"}, "|"), d.createElement("a", {
                        onClick: this.goRegister,
                        target: "_blank",
                        hidefocus: "hidefocus",
                        title: "注册"
                    }, "注册"), d.createElement("span", {className: "sep"}, "|"), d.createElement("a", {
                        className: "chong",
                        href: "/report.do",
                        target: "_blank",
                        title: "举报"
                    }, "举报")), d.createElement(e, {
                        isLogin: !1,
                        isHover: this.state.isHover,
                        dropHover: this.dropHover,
                        position: this.namePositon - 57,
                        goLogin: this.goLogin
                    }))
                }
            }), h = d.createClass({
                displayName: "MessageSection", getInitialState: function () {
                    return {toggle: !1, privateMessage: 0, comment: 0, follower: 0}
                }, goOnHover: function () {
                    var j = this.refs.msgentry.offsetLeft - 50;
                    this.refs.message.style.display = "block", this.refs.message.style.left = j + "px"
                }, goUnHover: function () {
                    setTimeout(function () {
                        this.state.toggle || (this.refs.message.style.display = "none")
                    }.bind(this), 300)
                }, showCode: function () {
                    var j = this.refs.codeentry.offsetLeft + this.refs.codeentry.clientWidth - 100;
                    this.refs.codelayer.style.display = "block", this.refs.codelayer.style.left = j + "px"
                }, hideCode: function () {
                    setTimeout(function () {
                        this.state.toggle || (this.refs.codelayer.style.display = "none")
                    }.bind(this), 300)
                }, dropHover: function (j) {
                    j ? this.setState({toggle: !0}) : (this.setState({toggle: !1}), this.goUnHover(), this.hideCode())
                }, componentDidMount: function () {
                    var j = this;
                    $.ajax({
                        type: "GET",
                        url: "/snsRemind.do?operation=remindUnread",
                        dataType: "json",
                        success: function (k) {
                            if (0 === k.resultCode) {
                                var l = k.follower + k.comment + k.privateMessage;
                                l > 0 && (l > 99 && (l = "99+"), j.refs.dot.innerHTML = l, j.refs.dot.style.display = "block"), k.privateMessage && j.setState({privateMessage: k.privateMessage}), k.comment && j.setState({comment: k.comment}), k.follower && j.setState({follower: k.follower})
                            }
                        }
                    })
                }, render: function () {
                    return this.props.isLogin ? d.createElement("div", null, d.createElement("ul", {className: "sns f-cb"}, d.createElement("li", null, d.createElement("a", {
                        href: "//yuedu.163.com/",
                        title: "网易云阅读"
                    }, "网易云阅读")), d.createElement("li", null, d.createElement("span", {className: "sep"}, "|")), d.createElement("li", null, d.createElement("a", {
                        href: "/yc",
                        title: "国风中文网"
                    }, "国风中文网")), d.createElement("li", null, d.createElement("span", {className: "sep"}, "|")), d.createElement("li", null, d.createElement("a", {
                        href: "/ycmm",
                        title: "采薇书院"
                    }, "采薇书院")), d.createElement("li", null, d.createElement("span", {className: "sep"}, "|")), d.createElement("li", {ref: "msgentry"}, d.createElement("a", {
                        href: "/snsMessage.do",
                        title: "消息",
                        onMouseEnter: this.goOnHover,
                        onMouseLeave: this.goUnHover
                    }, "消息", d.createElement("span", {
                        ref: "dot",
                        className: "dot",
                        style: {display: "none"}
                    }))), d.createElement("li", null, d.createElement("span", {className: "sep"}, "|")), d.createElement("li", null, d.createElement("a", {
                        href: "/myspace.do?operation=list",
                        title: "从电脑上导入书籍"
                    }, "从电脑上导入书籍")), d.createElement("li", null, d.createElement("span", {className: "sep"}, "|")), d.createElement("li", {ref: "codeentry"}, d.createElement("a", {
                        href: "javascript:;",
                        title: "公众号",
                        onMouseEnter: this.showCode,
                        onMouseLeave: this.hideCode
                    }, "公众号")), d.createElement("li", null, d.createElement("span", {className: "sep"}, "|")), d.createElement("li", null, d.createElement("a", {
                        href: "//bi.yuedu.163.com/spa/goReg",
                        title: "渠道推广平台",
                        target: "_blank"
                    }, "渠道推广平台"))), d.createElement("div", {
                        ref: "message",
                        className: "m-snsbox m-snsbox-1",
                        style: {display: "none"},
                        onMouseEnter: this.dropHover.bind(null, !0),
                        onMouseLeave: this.dropHover.bind(null, !1)
                    }, d.createElement("ul", null, d.createElement("b", null), d.createElement("li", null, d.createElement("a", {
                        href: "/snsMessage.do",
                        title: "查看私信"
                    }, "查看私信", d.createElement("em", null, 0 == this.state.privateMessage ? "" : this.state.privateMessage))), d.createElement("li", {className: "ll"}, d.createElement("a", {
                        href: "/sns/comment",
                        title: "查看评论"
                    }, "查看评论", d.createElement("em", null, 0 == this.state.comment ? "" : this.state.comment))))), d.createElement("div", {
                        ref: "codelayer",
                        className: "m-codelayer",
                        style: {display: "none"},
                        onMouseEnter: this.dropHover.bind(null, !0),
                        onMouseLeave: this.dropHover.bind(null, !1)
                    }, d.createElement("img", {src: "https://easyreadfs.nosdn.127.net/web/trunk/1488264973044/code-gzh.png"}))) : d.createElement("div", null, d.createElement("ul", {className: "sns f-cb"}, d.createElement("li", null, d.createElement("a", {
                        href: "//yuedu.163.com/",
                        title: "网易云阅读"
                    }, "网易云阅读")), d.createElement("li", null, d.createElement("span", {className: "sep"}, "|")), d.createElement("li", null, d.createElement("a", {
                        href: "/yc",
                        title: "国风中文网"
                    }, "国风中文网")), d.createElement("li", null, d.createElement("span", {className: "sep"}, "|")), d.createElement("li", null, d.createElement("a", {
                        href: "/ycmm",
                        title: "采薇书院"
                    }, "采薇书院")), d.createElement("li", null, d.createElement("span", {className: "sep"}, "|")), d.createElement("li", null, d.createElement("a", {
                        href: "/myspace.do?operation=list",
                        title: "从电脑上导入书籍"
                    }, "从电脑上导入书籍")), d.createElement("li", null, d.createElement("span", {className: "sep"}, "|")), d.createElement("li", {ref: "codeentry"}, d.createElement("a", {
                        href: "javascript:;",
                        title: "公众号",
                        onMouseEnter: this.showCode,
                        onMouseLeave: this.hideCode
                    }, "公众号")), d.createElement("li", null, d.createElement("span", {className: "sep"}, "|")), d.createElement("li", null, d.createElement("a", {
                        href: "//bi.yuedu.163.com/spa/goReg",
                        title: "渠道推广平台",
                        target: "_blank"
                    }, "渠道推广平台"))), d.createElement("div", {
                        ref: "codelayer",
                        className: "m-codelayer",
                        style: {display: "none"},
                        onMouseEnter: this.dropHover.bind(null, !0),
                        onMouseLeave: this.dropHover.bind(null, !1)
                    }, d.createElement("img", {src: "https://easyreadfs.nosdn.127.net/web/trunk/1488264973044/code-gzh.png"})))
                }
            }), g = d.createClass({
                displayName: "WrapItem", render: function () {
                    return d.createElement("div", {className: "inner f-cb"}, d.createElement(h, {
                        isLogin: this.props.isLogin,
                        userInfo: this.props.dataU
                    }), d.createElement(i, {isLogin: this.props.isLogin, userInfo: this.props.dataU}))
                }
            });
            !function () {
                var j = window.location.search, k = "/loginContext.do";
                "" == j || -1 === j.indexOf("_tdchannel") ? k += "?module=header&url=" + encodeURIComponent(location.href) : k += j + "&module=header&url=" + encodeURIComponent(location.href), $.ajax({
                    type: "GET",
                    url: k,
                    dataType: "json",
                    success: function (l) {
                        if (0 === l.resultCode) {
                            var m;
                            m = l.html.indexOf("J_NickName") > 0, ReactDOM.render(d.createElement(g, {
                                dataU: l.user2,
                                isLogin: m
                            }), document.querySelector(".m-topbar"))
                        }
                    },
                    error: function () {
                    }
                })
            }()
        }

        Object.defineProperty(a, "__esModule", {value: !0}), a["default"] = f
    }).call(a, c(6))
}, function (b, a, d) {
    var c = d(2);
    "string" == typeof c && (c = [[b.i, c, ""]]), d(5)(c, {}), c.locals && (b.exports = c.locals)
}, function (b, a, c) {
    a = b.exports = c(3)(), a.push([b.i, "@charset \"UTF-8\";\n.clear-float, .m-topbar .inner, .m-topbar .inner .sns {\n  zoom: 1; }\n  .clear-float:after, .m-topbar .inner:after, .m-topbar .inner .sns:after {\n    clear: both;\n    content: '.';\n    display: block;\n    height: 0;\n    visibility: hidden; }\n\n.bg-header, .m-topbar .inner .ulink .invite, .m-topbar .inner .ulink .login, .m-topbar .inner .ulink a.name span {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAGuCAYAAADCoNmkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTIyMEEwMUI4RkRDMTFFNDg0RTJBQTkzOTFCMEZCNTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTIyMEEwMUM4RkRDMTFFNDg0RTJBQTkzOTFCMEZCNTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MjIwQTAxOThGREMxMUU0ODRFMkFBOTM5MUIwRkI1NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MjIwQTAxQThGREMxMUU0ODRFMkFBOTM5MUIwRkI1NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsYTI9cAADDOSURBVHja7J0HfFRV9sfPlPRCEoIQOgEUBMSCIIKCu+rqLpZFEfUPCoqKFXBtiKvSRNRVFF0FaXZBRIoKu4qKIgoqUkV6CSShpZI+5X/OmzPhMcwkkwKyk9/38zmf93Jfnfvu795zzn0zsaxJjN5GRIl0InGb1i0V7pndOaugDQFwkrE73XQaL+NOxMkt3OjdThc5C4rJYiOyxkQfK4rjCcMjAX8EVrayE3Vyl8NJtvgEajx+PCUPvo2cOYUshAqVUIZHAv6QEeGEekSlJRTR9nRq8ujjLAoHyy6MDr05hdwuHi34yhabnazhYeS2WPAkwB8tBPeJOzs3eFtMjGfosdsp5Z9PUUyv3lT47TIq3b2LSvdnUPGWTexCWSsNHvy7XhDQSWso4RFS2WPZJIa7xVFaUnoSr5vE1ztcxeOG8+Iltlw+NqHS/d3SWoPu4t3klp7dIj16YHde7txVXEJOcXQiI8vj5dKDhyiq41nUoP+NHp2UOWjn0CGU9e5bZI2OqG5FteZFB3XzaotMtpVcge5Krn0GL0awNap5l0Fr2F7gaxaeolp4mG2UrifxZ7/We6+8nsyLntU8rwjqWz7XET/1K/HrTLZzef1K3mfNCRNclcYD7oFtDfmZO51UlrmfrFEBGi/38FFnn0euEifFdjm/vDjmrE6GINwqFgv7SOGprVlflmqNS1w59/Di1WoNJ5XzKZ//Gq58V4Brc/hPS9ha1tL1/s5Wn21YBZ9XrrXzBDb2S/jzfhNgm9TzFbIP22VsC/h+/qYjQ0e2T2pw3X18ru58rjSf8v5sf9X1ZbxPH97nuz80RnAVlFDC1ddQy6kzyF1URGkPDafDCz4hW4TPKVwucttt1HL62xTdvn25+2JRczhdVHIgg3I/W0QH35xGhRvWkDUmvLr3P8EkAmmw+TWsD1F2pK73YbuYLVDDaGISwVds1X1Acv93sKXUoFc94UjvL72ydBBsl6q9yXZrLZxe6vJutsd9rjmZrymp/dFs8Wz/4b//4hUDr8+v4JytdRldyX7CncELwck9etcLKDwpyfi7zQcfkav/9ZT9yTyOA8KPGTVchcXc2DMp5swzjdZp9lkKf1xBW6+7hhyHssjC3pU1MqImFRjv7S3YpPfOraE/KrcqvuW/tKgi39L8sSbztefX4LottEHZKtn1gI4cJ4oNlYihhO9Vrr+CrRPbER0ZxWVpVcGhF4irSccGpHLc9WzP6t+NA1xzDF+jHq8+yBalI/WlXP6TPPMgPlNYEPsNt7uCdEoskTbK/WYpOY/kkz0unqz14ql4905yh3HDN5/DQsbf+556gqJmvkuRqa2O8VyyP19EJfuzjKyR1W4ll8VdG/H6BzUVgVa6iyv5LZMQguUqdVuqy5nB9sq8mE8nEf5csToKGO4R38NcLpMG3I3tQ+04pCcfyNs+93P8n+T5qHju4H1+M22eyNsf4mVyEPFJKtu12vk9qiIaXYn4/sJWYhJbIHKCEwL78BTOQvj6S8pe8mV5s7ZEW4z0p+85LJFhdGTlD7She1dqPW0aJV11bXlwfJhHEGt8FCVcejkV/raWSvfuJYvNYlyiBnTkCt2l6+K3bjQ9iMnSULU3LWZrrsHZLaZ9xB1ar73HrGpc/7bQzixSL12fr4LcwostXG/iCvSV4Jntff77At72u08cNUn/7KyBsS8FlQlBO6j/UzF9p6ODlD9dSdZIhFBc0X5HP2RQvbGn17ZEhHFM4JtIcvvZ222IoezAYSrdv/+oe8WxxWmDhlBin6sMtynztcm0a9gD5I61Uw2VIL3MEPXvJbjaaHoQN+uD+lJSaWwXsV3H24aYUoC9NS0oLK/G9eV6h2pw/+3YGv6vKUTqT7JH6vbI0P8l/30xl+/QXe5TF0q4n8u31TBG6cHLghOk9tpPuLg5YHaVOgyNWW1HwxB7fBw1feRRj7P79tuU9vyz5JY+pYwDECu73DZbdS9ZpFmLm9huYHteyy9UEQgfazAtvUm0BsJfmrITgjyon6tx/SdqGCPMqqWg848Qw0G+/8s1qWDTzNcOLmvPy2d0t494v5m1cK0CrS+J3bKDPKwe7++vu+dGR7vFPePzTg06RggaF48G7GnEdDiDos86m+pd8bdjx8GNG2nXqEfo0ILPySoeV0oi2WJjyZGXR2WHauTmT1UhdOEPfqb6on10W55mdmRmYy9bUx3SpQeLVn9TeLea1+5ucs2qigTd7f8nfSZP+vouaWzetiqNnsvNiQyJay7gsh0aVN/LzyYjiHP3PtYloXV8XHYt3r5N444pfK0NtTezrC6Ss9BJrSc+SylD7zlm5rckPYPSJo6j9Ff/LW9aUOKfelHK/fdTfNduRuLTWVhIe8b8syZ3IJmjrWxt2e7RYdmbLVgoGQ+t4A80+Po7r9+vIojV/d6pwvUOaiAmT/0RtZqyM0Cj6HWCs0XH1SXX1yeVNFRxeV4L8nzRumylwhgQxDFf+/wtGSqZ55ARWybfLjFtk/hDRqW3NBY0k6oZqWLTaC+dz9mmpMhF9qrKwM0uj7PU49KLJ2ON8mjJxe6NNdxu6KEsK8sQgcQP+St/pH2v/5sOL5hHtqhoSn3hBUru158imzalw0s+p6133UVl+zOow+KldMY7H9Zk2HRzRb2mwdkgbfBn6Ob3Tbu+p0KQ2eArVTDCUvFtddgNapjmfSX/L3MZTWo6jrL9WoGYzqEKJtpOEJVNkJ1tWn9Akw0VpTCf02M6BHn93bqMU/dWOqt/yKjPde9QV8zrJsnzlXmYP7O9zjaW98nS7ddq3W3hshdM5/+Kt41VkYbZ3e7KpSCN2uV0kvOIm4Pc1hR7zrnkLnNQaWY65a9ayeLglvDYI1Syexcd/GAO7Zv0LBVs3kAlO7ZT7ve/UFRqU0p9diIl3zSQwuvVo+yvl9Lm2wdRHi9L2VlpPHgA2RPrGS/f1TBiET90nFbaWC07bIoFpAGv5QpYq72IpO68U9+vVydty+adDXXzuZedoEYpo8/aANtamdwQ2S+9Fq63L0jXwlunk4NwdRaqECxBdjQt9TgJMr8V91N7d9/9cniffrz6gqZMJVt0K5dJpujfPnGk+X7qm0aqI/ZgkjVOFqDVHkbNHx9BjUc8TJHJnmxX6aGDtLrb2WRNTKCWo8dRxtTX6QALwVFcSOnvzKGo5Hhq/a/nqeGgwRSeVJ8K0/bQ1nvvov3vzTZqQ64d3/lMajV+IsfKVio5fJgi6tevyaiQxx9wuvYAF5sCNd/Xu2WfV0z7iM+6oBqXHKDiIz3+hAiB7/89Hcn8uSfr9E/5jGfzvul0auKu5md38Of8SYUQ4fP5L9E48AVNjAxQj0BGEJk7+KyCU6eaRp39dpe/EUHKDP/eTc58N/fWcdT2tSnU6MabjvlE4ckNKKpdO4o7vxvZWCgRLVLlDQtyszeWclM/Sh09nqLatvV0y0sWU/GuPRR/XhdK7Hkxpb36EjmLyuj0qTMoMsUzqbjnmTHU9l8v17TCJ5Jnut473T3Lzz7v6FDtfZ1img63VQkUE01ZESNBptmfaj1vHVn+w/fxYxWOe9S0/vYfJQL+3HF87cpeb6lfmyLia8oss7zi0Vpjwin6PNpr7PI939N23s8rnmIfgYm4WprSp75+kGfUc+bxKMCnSOjdm1o+/RQlXdy7XB/eQaQ4I5PyVv1MyX37eYSRlESRrVpSiyefoCaDbi//BLsnjOOllVqOfLz82LDUVIpolELxZ3U2/s5cNJ/2vfpKjYUgGQn+8HvIMy8gKbKNAYZT2ed0U9xQlQcvbsEM9Uu9tXZVLbSpp/nc4u/Ka87OSu5BXsu40dRQnj/J7T/LtL6+kqxZmLotRDV/H4x8PvPDKgbxAgara3yzyQuICua6x2WN3CU8ZoyfQLbYOIru1IESuvc8OpPs40YdnDuHig/lyZt0xt8xZ3akzt9+SzFNm5Xvs+e1yVScmUENBw6mfa+9Sk3v9cSmDS6/onyfnJ9W0pbBt9bKi9T8QJqblC4NVl4dHumzTysff1Ma1Oggz29X3/Nak18+l46dNW1mSonKTOse0zaZPGtuynSVatnlWiYTgIuDSOU+ZPLT5/GD31yNupIn6p01lvf2f63C4ZKO3q6NsIVaMMyoJXexWFOf09UlGqtp8YkaU6zUXSODEoJvsOzk0zuKCqn5gw8dHysUF5GjoIDC63tihAPz5xgyKsvP85ysXrxh3pGj9PAhDqRL6fSXX6Nd48dR0qWXHZsqKS6m7OXf0W+DB1JZXh7Zo2qlp/injnRl2hM9yJUlrs920z6TdR/vO4EjeJ+XZaSopOG01QbaVYtkTuIS84wp75OkGSBp7PK9htu859WRZKsGuJIXv9t0nKTyHtQ/z6tICPr+/+0+7mB1M21vaHYtm9cbVDYSmY6VdOa55HkLVYL1J1QU32gaU4R9kyYrHtK6XivJilqOn8StnMX3MkfroYzLVpp28Y76aRWdxyqZGrOJfjLemUWOI8fOZOdv3EA/9bqYMufMMUaIkox9VPi7x+uISGnik2XyLDM/+JASevY0WlrLxx6net26HbOfvH5xcOECKuGlJVJe3rPUdDToYWog4jNu0VhhmvZ+so/0Hn/zmTeopw+rMnqYRCCvYpzvI4JwHR28Pf7dPuIaSkff0pxWQbqysu9uP2Aa8peqv1tdluhSYp5zq5qcYJunn9nbCN7iMomVVnkzMvI329uasbuE7SV5L6kGz7knW47ZNFs2UDoeU3mupp6FO32PMdtxzoiVH2Xxjp20YeBNlPPDD1S0ew9tH/MU/XLJRZT/888U0/5MHQ3mU2F6DkU2a0CJf7r0uJsty8mhjPdnccyQ6vkijs16TDOXbsfWoAG1e+VVjimeImeBu6YikGHxQ/XXpRcaQ57XFqQn6i0uB+9zFi/f0EO2aVC9UP8eztuDed8nV3vu3vxgM03Xj9QG4Z3omWR+7UJdtnGmlO5Mf9GZklnB55TU8L01HQ38CIFM7llVuVldEHmI/61k32RNcb5Yk8etnVdlFm86JrKife1OP1ktS5SFDny6iA4v/Yxs0bFUwnGAzAZbouxGGlU+74F5HxktLGXQECPrU5qdzW5RPSMNKmwd9Sjl/vgLret3LZ3x7zcpvv3RN42L9uymjUMGU8sRD1PylVdSYvcetJMPc7qrLQaZVFmhPqJwj7wDI/47NxwZsrM1zSgPPUZzyv15nyLeLpNYf9Xy56jiiSsZBVr5TvWrgEQE3i/WLDSPMPoaxzw6+v2Gp/18NdH8BmZF2Z/b6ej7U6v5PF/UUAjLNKMiDUV81/HV6IC8czaLTJmrEl1GBMgeHa7BPcv3JiqbaQ/XFHlDTZMOr0xZfsJxN1mj5ctmLnIdySMbNxEXh3RRzZtQQtfzqSg9nfJ+/dlwgerru0RZy76hvVPfoCR2n45s2kAHPvyQyrhdW6OjKabF0TiqKH0frbywK0W3SaWk3r09o0NujvHLFjXwjOI1QBVkVnGOafiewA/rOkmnkWeWskxFsFq3b5b4gDyzlrdoSi6QK7DNT0PoqzGH94sl8/X8TpMI5qrfTypYf5N35h8221NBcPuAqejZGoqAtDMQMcgryxfyekywb3jqPIZ8ttM0BTzKtNn7PlEj3k+yOV9re/NmujbV4J4PUQXfy9B6mqEicGsgL/MNw/19NzqgEMpHBrPjJL9IER1DlvBwKtq6lUoOF1DTuwZT4gXdPeIpLKCDi/9rmNxFWIM4OvOxp6jxLbeQPdrzSxbFe9LIUVJIcV260BkvvUrWKI+be/jrrzxCqOEzlVQaf9BJfrZdpSIQt+ZG3meJz/Yn2a7TTMimIBqABL1Xaq/fy7RJAt5HTSJoQJ63Xi8yuTz9AwSk5ndntge49JmmbFcx1d6XdDarEGS4l4mpLyqaMyDPRKS4Q/1Nmauh/LnM33CThp+jo+CMSlyy2pzTsOk8wiBvapftLB1J/yyvxfB9fnl8sOz2zJ9VZi5VhjTy/HW/GjJrNvR+LvKoxeVyGtvsXE0y/xDWIIVaPfgPikhu4BEKjy5bRz9puFrnzv+MYlq10hEinTI/mUvWyMp++6tCpMI7BRCBF/nw5/gRgfebX/JNqiFUyQwoV+Rl2tstMolAMhLyhaCHTCKQ/PBqkwjktYXLePteP+c0p0/38z77A1y+rY/P20djk+o2Gou+Ln2FT3q3IuSLMZ+qEKTRyUtuffmep/vUqXQ612ss5jv/IPX0lSnFXVsiaKOd2V1a5B2JH9awVNLqX/B+i+QN5WPTp1WYvnC5PS9tH/56KccD4RTZtPlRRUVEGa9MyHaXWx0sJ4tDv2Ow//PPqOhgJkWlpBzjAR1YOJ+K9x0yBFSDcDnP/M0oP0jgvNP351n0K4eSWfqdt+3UMvP3W0v8nEuyIw1Mfq5M7082vSsvQ+TjdPQVcEFShuJCXaYB+y6NW6QRd9QRydsg/lPB5/AdKebpNWuzUw12dnqrZr6mBko7c/lSH/H6Ntz2FOC7yr65F12m6ByQZLeyvWLSOr1be33v7wzJe2CDNL36Au8jHaFkszrrs/mbplzHyCv7wX8xh7vr8AYNqWjvPjq0dCk1H3ovRSbXL/9pFhvHAt5Tye+cyhxCzsofKf6ccznYPkQHv/gvdXj5tfIRxGi969fRzucmkC2S6MT8Ikv5A9kRYNMTWjFSmYWaYYo1JbYC5bzX6HA/0+xz8jnm+QRxLo0fHpMJIN5+t/d6ASioKFjlc8gM7vPqkp2ICltiyqIF4kntOLZUsbeeosG4CO2QdgI96eg0al4Fh3tHFYlFvM9S5n46aszU2rRvtrrIviPUGt5fXrCUGd2nNFskrt0N8jXQoEcEJ+sqtkMnch7JNX7PqOXwh4/J+Ynr4/3NIrJbyJGfTT/1+TPZk5pQk5tupA7/esn4tTtpGa7SMvrtvqG09+23yM2exNHR4AT+6l7lRB87/tGoAO/uvKt5cn+Yf8lBvsj+eBUmkOSLRHdU1sB4+yP84GRm+886OiXV8HPLzLZk2OQdp+WV/agZb19YzetEaP0E+rWLzys49iMVYGNThyEu2Q0mERzU2ODlCkYoGVlkDuNdDezvUkE2tLuDbHyGy8MxgrO4hOK696CIRo1MWyxUmp1lvHBn9ZbxqOAsLaHC7TsofvNGQwRGF1lcTDtf+hfFdjyLWj5wP+X+sIKyVq1icbjJHlPlyh1t6qGrw93qE9fXkaBE/f0ffGaizZXpqCSt95W6C/5eebhWG0KKpvfCtSdcb/7BgSBGOHGtpp+kDsKtSYZArmKw/KSfu74phXpQXaxZFaWB5bsFmqHqrvHZOn0rtY+6h/Ku2GfeL18FUX9y3eE6my/ZwiOWxXGGn1tpr+LIZ+mNGkkt7r2PSg8coHqdzz5mbF57zxBKe2M62WNNfkExUUybttTp7fcpsUsXY/8ju3bSim5dqOO0GdT4qmuMuOPwl0spY/b7lDFvdtZfsgrrEwAnGXuwP2IhP8YlqdLolMaGmTm08gfa9/77HCeYRg8evNw2O7VjlyiJReDWYCJt+lQqPpBFq/tdR9a586hRn6upwWWXGRbbqROeCPhDsHL7DPP69oFM/Hr5Ia/IZk2PdzBzcmjTww+SM7+I3Fbdlx2k+PPOpS4LFlDDKz0TbjL5lvf7Jtr52isewbidtHbwrbT/i6NJkqiWLfCPQsAfNiIcoEpe8jJ+3brITelzP6KEzudwLOCmkowMyvl5FW17fjz7+T+TLVbnARzyU/DRdM6cjym2ZcvyEeIIi2B1/+s42C40skRGZikvh37uew21fvBBimjajLaNG5Odcs11eCrgpGNxu92oBQDXCFUAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAQHWxrLyip/lLy/LjSSmn2D3KPd3edfF3i/G4wMkaEVJOwXuUe5qORwXgGp2aAgUQAgAQAgAQAgAQAgAQAgAQAgAQAgChjr3GJ4ivR4369qeEbj0oqonnf34Xpe2mnB+XU+aCueTIy0Utg9AWQlLPXtRq+EiyxRz7z8+iU9sY1vDafrTzpQmUtXwZahqEpmskImjz+NjjRGDGFh1j7CP7AhByI4K9XgK1GjHS8/+gmOJ9eylt5huU9+vPxt/x53ShZoOHUmSTpsY+sm/+hnVUlpONGgehMyI0uvo6o7c3RLB3D20cdgdlf7+MnIUFhsm6lMk278ggbhIAISWEhAt6lq+nzZpKzoIjx+0jZbKt/BgOpgEIKSFENWtRvu51h/yRt3rV0WOaNkNtg9ALlssJ8p8RusocqG0QWkKQeQIvEhgHIv6c88vXSzLTUdsgtIQgk2Vemg26k2wxscftI2WyrfyYVStQ2yC0hLB/0TwjOyREcrzQYdIUSuzRi2xR0YbJupRFmmKJ/HW/orbBKYvvl/eDxjuh5p1LqAxHfh79PnI4FW7fWq0b7br4OwseFzjlgmV5bWLbM0+Ss6gw4D6yzXEk31i3x8VTuwmTKLp1W9Q6CJ0RwYv3pbvEbj0osmlzcjscVLwvzYgJMud/RBGnNaQznnnJEIIxMuTm0Lo7B1T5ZTyMCHWTVVde5F29kO02NimI0rIiNglYZ+pS2kn12nFNb1Qa9N5ZUw0LtH3z4yPKxSCvZ0Q0bIS3UkGw2NimsKWyvcg2nM07gytZmt5so9l2sg2VJndSXaOqULBtixEf5Kz8ntJnv0MFWzfj8YJgkUYuL6n9me1TkwhI16XsUt1ndLU9m5P1aSRI3vL0Y3isoKoMYDudrSIXXraNYtusy1NzRADgJOGs7oEQAjjVeZdtPFtFyRKL7jMbQgChirytmcj2DVs/DZDJFCzfoNuSqAY/DWpHPYNTnPZsN2kjH8Q2ji3aG3qSJ20qcYH8avoHEAIIVSR1OpftLrYhAfbpqvu8DCGAUEV6+6vZnmNLYJMZsz26rTl5JthkUmog2ydssyAEEIr8lzzzBH9V9+gCtia67Ue2SeoWDWP7KtRHhEy0hzrLg+TJHMkrFpPZFtHR2WNpv93VJZL1AbUlBGlwjU6xitjHdifaQ51FAuK+5JlZlnYwjY7OF8jrF6s0jlhak4tY3G43qhrUeTCPAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAMBJxnJnv35X8nI6ef6ZczDIP3e+fcqcOYtRfSCURoSqiIB03+moOhBqQkipxnEpqDpQV2KE29iGoopAXRbCWra32Kax/YZqAnVNCNextWbrwuZic7J1ZmvD1h/VBeqKEC5m28XmMJU5tKw3qgvUFSEMYxvrZ7+JbHejukBdihFKgiwDIKSFkMvWne1TtgVs3dgOoqpAKGP3UzbJ5++rUU2gLo4IAEAIAEAIR1nGdonaMlQTqGtC8AqgN9s3ar0hCFBXhOArAF8gCBDSWNxuN2oBYERAFQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQBwcrHc2a/flbyczpZSxWMz2G6fMmfOYlQjCIURoToiID1mOqoQhIoQUmpwfAqqENSVGCEV1QQgBKKdqCZQV4Wwm62dn/JBqDJQl4TwCNtNfsrfQpWBUMTup2w5249sM1E9oK6OCC62EWzPsEWjekBdFcI7OkrcjKoBddU1OsI2im0umwVVA+rqiDCRrTfbBagWUJeFIK9LvKejgdnIz3oLVB0IVdcoHdUB6vKIkFGD4zNRhSBUhDCkmg16H9vtqEIQCljcbjdqAWBEQBUAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAcGpjWXlFj4q2f6fLiwLt0HXxctQi+J/HXsn2nqgiANcIAAgBAAgBAAgBgLoohO/oaHZIeJPNrebF+/ebpjLf4wD4n0WyRr6ZoXvZOrB19yn/Qbd5QUYJhLRrVMp2PVu6qSxDy0pRZaAuxQjppobvTxgAhJxrFAhxhe7T9RWoKlBXhUA+wTEAdc41AqDOCSFX191VNDIdC8D/vBDW1+D4DahCEApY3G43agFgREAVAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAHDKY584ceIsXt7qU/7Wo48+OgjVA0KNQO1dRoR72H4zFf6mZQCEIn7buwihkK2fLs3rAIQiftu73aSKu9ksPmoBIBQ5rr1b3G43qgXUeZA1AgBCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAKC2sKxJjF7E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) -9999px -9999px no-repeat; }\n\n.sec-header, .m-topbar .inner .submenu b, .m-loginops li.wy a span.tiny-logo, .m-loginops li.xl a span.tiny-logo, .m-loginops li.tx a span.tiny-logo, .m-loginops li.sj a span.tiny-logo, .m-loginops li.wx a span.tiny-logo, .m-loginops b, .m-snsbox b {\n  background: url(https://easyreadfs.nosdn.127.net/web/trunk/1479954847357/sec-header.png) no-repeat 9999px 9999px; }\n\n.bg-icons, .m-topbar .inner ul.openbox li.tcdl a, .m-topbar .inner ul.openbox li.yecx a, .m-topbar .inner ul.openbox li.xfjl a {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAALQCAYAAADVQj9BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplNDZjNjc5NC02Njg2LTg3NDYtOWVmYi03MTI5NDJmNTRhNDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCMTU1QjcxQjFBMTFFNUEzRDBBMkEyNDU3NUQyODYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCMTU1QjYxQjFBMTFFNUEzRDBBMkEyNDU3NUQyODYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZCMDYyMDM1RjhFQTExRTJBNEE0QTFENjlCQzk4QzZEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZCMDYyMDM2RjhFQTExRTJBNEE0QTFENjlCQzk4QzZEIi8+IDwvcmRmOkRlc2Ny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) no-repeat 9999px 9999px; }\n\n/* 头部导航样式 */\n.m-topbar {\n  min-width: 980px;\n  position: relative;\n  height: 35px;\n  border-bottom: 1px solid #dcdcdc;\n  background: #fafafa;\n  z-index: 99; }\n  .m-topbar .inner {\n    position: relative;\n    width: 980px;\n    margin: 0 auto; }\n    .m-topbar .inner .sns {\n      float: left; }\n      .m-topbar .inner .sns li {\n        float: left; }\n        .m-topbar .inner .sns li .sep {\n          padding: 0 12px; }\n      .m-topbar .inner .sns a {\n        position: relative;\n        display: block; }\n        .m-topbar .inner .sns a .dot {\n          position: absolute;\n          width: 17px;\n          height: 17px;\n          line-height: 17px;\n          text-align: center;\n          top: 0px;\n          right: -12px;\n          color: #fff;\n          font-size: 10px;\n          background-color: #c8483d;\n          border-radius: 50%; }\n\n.m-topbar .inner a, .m-topbar .inner span {\n  color: #888888;\n  font-size: 12px;\n  line-height: 35px; }\n\n.m-topbar .inner a:hover, .m-topbar .inner a:hover span, .m-topbar .inner .ulink .name:hover span {\n  color: #c9483c; }\n\n/* 顶部链接未登录 */\n.m-topbar .inner .ulink {\n  position: relative;\n  float: right;\n  height: 35px;\n  font-size: 0; }\n  .m-topbar .inner .ulink .sep {\n    padding: 0 12px; }\n  .m-topbar .inner .ulink .invite {\n    color: #c9483c;\n    padding-left: 16px;\n    background-position: -168px -79px; }\n  .m-topbar .inner .ulink .login {\n    padding-right: 12px;\n    background-position: 28px -318px; }\n  .m-topbar .inner .ulink a.name span {\n    padding-right: 12px;\n    background-position: right -318px; }\n  .m-topbar .inner .ulink .name {\n    max-width: 74px;\n    text-align: center;\n    overflow: hidden;\n    padding: 0 0px 0 3px; }\n    .m-topbar .inner .ulink .name img {\n      float: left;\n      margin-top: 3px; }\n\n.m-topbar .inner .submenu {\n  width: 110px;\n  position: absolute;\n  top: 43px;\n  border: #cdcdcd solid 1px;\n  border-radius: 6px;\n  background-color: #fff; }\n  .m-topbar .inner .submenu b {\n    width: 14px;\n    height: 7px;\n    position: absolute;\n    top: -7px;\n    left: 50px;\n    background-position: -286px -326px; }\n\n.m-topbar .inner ul.openbox li {\n  height: 35px;\n  border-bottom: #dedede solid 1px; }\n  .m-topbar .inner ul.openbox li.sub {\n    margin-left: 20px; }\n    .m-topbar .inner ul.openbox li.sub a {\n      padding-left: 25px; }\n  .m-topbar .inner ul.openbox li a {\n    display: block;\n    height: 100%;\n    padding-left: 48px;\n    line-height: 35px;\n    color: #666; }\n    .m-topbar .inner ul.openbox li a:hover {\n      color: #c9483c; }\n  .m-topbar .inner ul.openbox li.grzx {\n    border-bottom: #dedede solid 1px; }\n    .m-topbar .inner ul.openbox li.grzx a span {\n      display: block;\n      float: left; }\n      .m-topbar .inner ul.openbox li.grzx a span.g1 {\n        padding: 10px 10px 0 0;\n        height: 39px; }\n  .m-topbar .inner ul.openbox li.tcdl {\n    border-bottom: none; }\n    .m-topbar .inner ul.openbox li.tcdl a {\n      background-position: 0 -566px; }\n      .m-topbar .inner ul.openbox li.tcdl a:hover {\n        background-position: -185px -566px; }\n  .m-topbar .inner ul.openbox li.yecx a {\n    background-position: 0 -175px; }\n    .m-topbar .inner ul.openbox li.yecx a:hover {\n      background-position: -185px -176px; }\n  .m-topbar .inner ul.openbox li.xfjl a {\n    background-position: 0 -52px; }\n    .m-topbar .inner ul.openbox li.xfjl a:hover {\n      background-position: -184px -52px; }\n\n.m-topbar .inner ul.openbox li.grzx a, .m-topbar .inner ul.openbox li.wdzy a {\n  padding-left: 22px; }\n\n.m-topbar .inner ul.openbox li.grzx a, .m-ulink ul.openbox li.wdzy a {\n  padding-left: 22px; }\n\n.m-loginops {\n  position: absolute;\n  top: 42px;\n  left: 650px;\n  padding: 0 10px;\n  border: #cdcdcd solid 1px;\n  border-radius: 3px;\n  background-color: #fff !important; }\n  .m-loginops li {\n    position: relative;\n    width: 137px;\n    height: 39px;\n    line-height: 39px;\n    border-bottom: #cdcdcd dotted 1px; }\n    .m-loginops li.ll {\n      border-bottom: none; }\n    .m-loginops li a {\n      display: block;\n      height: 39px;\n      line-height: 39px;\n      color: #222;\n      padding: 0 0 0 40px; }\n      .m-loginops li a:hover {\n        color: #1b77ba !important; }\n      .m-loginops li a span.tiny-logo {\n        width: 20px;\n        height: 20px;\n        position: absolute;\n        top: 13px;\n        left: 7px; }\n    .m-loginops li.wy a span.tiny-logo {\n      background-position: -192px -304px; }\n    .m-loginops li.xl a span.tiny-logo {\n      background-position: -192px -324px; }\n    .m-loginops li.tx a span.tiny-logo {\n      background-position: -192px -344px; }\n    .m-loginops li.sj a span.tiny-logo {\n      background-position: -192px -365px; }\n    .m-loginops li.wx a span.tiny-logo {\n      background-position: -192px -424px; }\n  .m-loginops b {\n    width: 14px;\n    height: 7px;\n    position: absolute;\n    top: -7px;\n    left: 73px;\n    background-position: -286px -326px; }\n\n.m-topbar .inner .m-loginops li a {\n  line-height: 43px; }\n\n.m-snsbox {\n  position: absolute;\n  top: 43px;\n  right: 53px;\n  border: #cdcdcd solid 1px;\n  border-radius: 6px;\n  background-color: #fff !important;\n  width: 125px; }\n  .m-snsbox b {\n    width: 14px;\n    height: 7px;\n    position: absolute;\n    top: -7px;\n    left: 51px;\n    background-position: -286px -326px; }\n  .m-snsbox li {\n    position: relative;\n    line-height: 38px;\n    height: 38px;\n    padding: 0 15px 0 0;\n    border-bottom: #dedede solid 1px; }\n    .m-snsbox li.ll {\n      border-bottom: none; }\n    .m-snsbox li a {\n      color: #333; }\n      .m-snsbox li a:hover {\n        color: #1b77ba !important; }\n      .m-snsbox li a.light {\n        color: #1b77ba; }\n      .m-snsbox li a em {\n        padding: 0 3px;\n        color: #d80000; }\n      .m-snsbox li a.close {\n        position: absolute;\n        width: 9px;\n        height: 9px;\n        padding: 0;\n        top: 15px;\n        right: 5px;\n        background-position: -291px -430px; }\n    .m-snsbox li img {\n      float: left;\n      margin: 10px 0 0 0; }\n\n.m-snsbox-1 li {\n  padding: 0 0 0 20px; }\n\n.m-codelayer {\n  position: absolute;\n  top: 30px; }\n  .m-codelayer img {\n    width: 100px; }\n", ""])
}, function (b, a) {
    b.exports = function () {
        var c = [];
        return c.toString = function () {
            for (var f = [], d = 0; d < this.length; d++) {
                var g = this[d];
                g[2] ? f.push("@media " + g[2] + "{" + g[1] + "}") : f.push(g[1])
            }
            return f.join("")
        }, c.i = function (f, j) {
            "string" == typeof f && (f = [[null, f, ""]]);
            for (var h = {}, g = 0; g < this.length; g++) {
                var e = this[g][0];
                "number" == typeof e && (h[e] = !0)
            }
            for (g = 0; g < f.length; g++) {
                var d = f[g];
                "number" == typeof d[0] && h[d[0]] || (j && !d[2] ? d[2] = j : j && (d[2] = "(" + d[2] + ") and (" + j + ")"), c.push(d))
            }
        }, c
    }
}, function (b, a, d) {
    d(1);
    var c = d(0);
    new (function (f) {
        return f && f.__esModule ? f : {"default": f}
    }(c)["default"])
}, function (B, G) {
    function q(g, c) {
        for (var l = 0; l < g.length; l++) {
            var h = g[l], f = j[h.id];
            if (f) {
                f.refs++;
                for (var a = 0; a < f.parts.length; a++) {
                    f.parts[a](h.parts[a])
                }
                for (; a < h.parts.length; a++) {
                    f.parts.push(E(h.parts[a], c))
                }
            } else {
                for (var d = [], a = 0; a < h.parts.length; a++) {
                    d.push(E(h.parts[a], c))
                }
                j[h.id] = {id: h.id, refs: 1, parts: d}
            }
        }
    }

    function m(u) {
        for (var J = [], g = {}, f = 0; f < u.length; f++) {
            var c = u[f], p = c[0], I = c[1], K = c[2], h = c[3], d = {css: I, media: K, sourceMap: h};
            g[p] ? g[p].parts.push(d) : J.push(g[p] = {id: p, parts: [d]})
        }
        return J
    }

    function b() {
        var c = document.createElement("style"), a = F();
        return c.type = "text/css", a.appendChild(c), c
    }

    function w() {
        var c = document.createElement("link"), a = F();
        return c.rel = "stylesheet", a.appendChild(c), c
    }

    function E(g, d) {
        var i, h, c;
        if (d.singleton) {
            var f = z++;
            i = x || (x = b()), h = H.bind(null, i, f, !1), c = H.bind(null, i, f, !0)
        } else {
            g.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = w(), h = k.bind(null, i), c = function () {
                i.parentNode.removeChild(i), i.href && URL.revokeObjectURL(i.href)
            }) : (i = b(), h = v.bind(null, i), c = function () {
                i.parentNode.removeChild(i)
            })
        }
        return h(g), function (a) {
            if (a) {
                if (a.css === g.css && a.media === g.media && a.sourceMap === g.sourceMap) {
                    return
                }
                h(g = a)
            } else {
                c()
            }
        }
    }

    function H(h, f, p, l) {
        var g = p ? "" : l.css;
        if (h.styleSheet) {
            h.styleSheet.cssText = y(f, g)
        } else {
            var d = document.createTextNode(g), c = h.childNodes;
            c[f] && h.removeChild(c[f]), c.length ? h.insertBefore(d, c[f]) : h.appendChild(d)
        }
    }

    function v(c, a) {
        var f = a.css, d = a.media;
        if (a.sourceMap, d && c.setAttribute("media", d), c.styleSheet) {
            c.styleSheet.cssText = f
        } else {
            for (; c.firstChild;) {
                c.removeChild(c.firstChild)
            }
            c.appendChild(document.createTextNode(f))
        }
    }

    function k(f, c) {
        var h = c.css, g = (c.media, c.sourceMap);
        g && (h += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(g)))) + " */");
        var d = new Blob([h], {type: "text/css"}), a = f.href;
        f.href = URL.createObjectURL(d), a && URL.revokeObjectURL(a)
    }

    var j = {}, D = function (c) {
        var a;
        return function () {
            return void 0 === a && (a = c.apply(this, arguments)), a
        }
    }, C = D(function () {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    }), F = D(function () {
        return document.head || document.getElementsByTagName("head")[0]
    }), x = null, z = 0;
    B.exports = function (d, a) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) {
            throw new Error("The style-loader cannot be used in a non-browser environment")
        }
        a = a || {}, "undefined" == typeof a.singleton && (a.singleton = C());
        var c = m(d);
        return q(c, a), function (p) {
            for (var n = [], h = 0; h < c.length; h++) {
                var o = c[h], g = j[o.id];
                g.refs--, n.push(g)
            }
            p && q(m(p), a);
            for (var h = 0; h < n.length; h++) {
                var g = n[h];
                if (0 === g.refs) {
                    for (var f = 0; f < g.parts.length; f++) {
                        g.parts[f]()
                    }
                    delete j[g.id]
                }
            }
        }
    };
    var y = function () {
        var a = [];
        return function (c, d) {
            return a[c] = d, a.filter(Boolean).join("\n")
        }
    }()
}, function (b, a) {
    b.exports = React
}]), function (b) {
    function a(e) {
        if (c[e]) {
            return c[e].exports
        }
        var d = c[e] = {exports: {}, id: e, loaded: !1};
        return b[e].call(d.exports, d, d.exports, a), d.loaded = !0, d.exports
    }

    var c = {};
    a.m = b, a.c = c, a.p = "", a(0)
}([function (j, m, f) {
    function d(a) {
        return a && a.__esModule ? a : {"default": a}
    }

    f(1);
    var b = f(5), h = d(b), k = f(6), p = d(k), g = f(8), c = d(g);
    new h["default"], new p["default"], new c["default"]
}, function (b, a, d) {
    var c = d(2);
    "string" == typeof c && (c = [[b.id, c, ""]]), d(4)(c, {}), c.locals && (b.exports = c.locals)
}, function (b, a, c) {
    a = b.exports = c(3)(), a.push([b.id, ".m-page-side-banner{position:fixed;bottom:20px;z-index:99}.m-page-side-banner img{width:110px}.m-gotop,.m-qr,.m-qr-hover,.m-qr-icon,.m-report{display:block;width:50px;height:50px;position:fixed;z-index:5000;background:url(https://easyreadfs.nosdn.127.net/fle/a0df1d4009c7a2ec5fee/1563441552796/top.png);right:60px}.m-gotop{bottom:30px;background-position:0 0}.m-gotop:hover{background-position:0 -50px}.m-report{bottom:92px;background-position:0 -200px}.m-report:hover{background-position:0 -250px}.m-qr{bottom:30px;right:30px;width:157px;height:202px;background-position:-50px -360px}.m-qr:hover{background-position:-50px -562px}.m-qr img,.m-qr-hover img{position:absolute;top:43px;left:21px;width:87pt;height:87pt}.m-qr-icon{bottom:154px;background-position:0 -75pt}.m-qr-icon:hover{background-position:0 -150px}.m-qr-hover{display:none;bottom:154px;width:170px;height:180px;background-position:-50px 0}.m-qr-hover:hover{background-position:-50px -180px}.m-qr-hover img{top:21px}.m-bonus-pack{display:block;width:5pc;height:78px;position:fixed;bottom:30px;right:60px;z-index:5001;cursor:pointer}.m-bonus-pack .icon{width:5pc;height:78px;background:url(data:image/png;base64,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) 0 0 no-repeat}.m-bonus-pack .layer{position:absolute;width:194px;height:62px;padding:14px 18px;border:1px solid #cdcdcd;background-color:#fff}.m-bonus-pack .layer p{font-size:1pc;color:#3b1717}.m-bonus-pack .layer p em{color:#ed6460}.m-bonus-pack .layer a{display:block;width:88px;height:30px;line-height:30px;margin:5px auto 0;background-color:#ed6460;border-radius:5px;color:#fff;text-align:center;font-size:1pc}.m-bonus-pack .layer.layer-r{top:-10px;right:-250px}.m-bonus-pack .layer.layer-r b{position:absolute;left:-6px;top:40px;width:7px;height:9pt;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2QUMzMUFFOUMxRDkxMUU2QkNDRDgyNzk2MzU2RUNFRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2QUMzMUFFQUMxRDkxMUU2QkNDRDgyNzk2MzU2RUNFRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZBQzMxQUU3QzFEOTExRTZCQ0NEODI3OTYzNTZFQ0VGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZBQzMxQUU4QzFEOTExRTZCQ0NEODI3OTYzNTZFQ0VGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/97uqgAAAJJJREFUeNpsjrEKxCAQRFcP8gc2WoT8/9eohVhYCGITCAFTpDhuDnMY0MvAsMWb3R0CQKOttcDnDU6DnHMQQhCxF3Ub3nuklNB0b4YQME0TKaXuKxeMMaLOeZ67FzznjPM8aVkWYoz1cF1XklIS53/dfoW01jiOA6PupjVQSnmGLbDv+zNsgW3bnmG1Mea68BVgAIU3vWVzkcS1AAAAAElFTkSuQmCC) 0 0 no-repeat}.m-bonus-pack .layer.layer-t{top:-105px;right:-73px}.m-bonus-pack .layer.layer-t b{position:absolute;left:110px;bottom:-6px;width:9pt;height:7px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NjNGMzc4MkMxREExMUU2QTU1Q0RGQTQ1QUJGQUU3RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NjNGMzc4M0MxREExMUU2QTU1Q0RGQTQ1QUJGQUU3RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk2M0YzNzgwQzFEQTExRTZBNTVDREZBNDVBQkZBRTdGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk2M0YzNzgxQzFEQTExRTZBNTVDREZBNDVBQkZBRTdGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BCsxfwAAAH9JREFUeNqMi8sKwyAQRSf0///NB4gBQRcKrkSTLKu3nSwKkpT2woGBOWfBeIKWB/2z1hqR1ho5Z/xaKQVKKdD7JmMMYoxf5VorpJR80hkw67rCe48xxiTv+/6Rp4BxzoHpvZ/ycRyTfAmYEAKstdi27SLfBkxKCUII3P1eAgwA3kX/ZaEPjWQAAAAASUVORK5CYII=) 0 0 no-repeat}.m-bonus-success{display:none;position:fixed;top:50%;left:50%;width:362px;height:329px;z-index:9999;background:url(https://easyreadfs.nosdn.127.net/web/trunk/1483410187066/x.png) 0 0 no-repeat}.m-bonus-success .inner{width:100%;height:100%}", ""])
}, function (b, a) {
    b.exports = function () {
        var c = [];
        return c.toString = function () {
            for (var f = [], d = 0; d < this.length; d++) {
                var g = this[d];
                g[2] ? f.push("@media " + g[2] + "{" + g[1] + "}") : f.push(g[1])
            }
            return f.join("")
        }, c.i = function (f, j) {
            "string" == typeof f && (f = [[null, f, ""]]);
            for (var h = {}, g = 0; g < this.length; g++) {
                var e = this[g][0];
                "number" == typeof e && (h[e] = !0)
            }
            for (g = 0; g < f.length; g++) {
                var d = f[g];
                "number" == typeof d[0] && h[d[0]] || (j && !d[2] ? d[2] = j : j && (d[2] = "(" + d[2] + ") and (" + j + ")"), c.push(d))
            }
        }, c
    }
}, function (G, j, y) {
    function x(h, f) {
        for (var m = 0; m < h.length; m++) {
            var l = h[m], g = I[l.id];
            if (g) {
                g.refs++;
                for (var d = 0; d < g.parts.length; d++) {
                    g.parts[d](l.parts[d])
                }
                for (; d < l.parts.length; d++) {
                    g.parts.push(k(l.parts[d], f))
                }
            } else {
                for (var c = [], d = 0; d < l.parts.length; d++) {
                    c.push(k(l.parts[d], f))
                }
                I[l.id] = {id: l.id, refs: 1, parts: c}
            }
        }
    }

    function q(p) {
        for (var K = [], g = {}, f = 0; f < p.length; f++) {
            var c = p[f], m = c[0], u = c[1], L = c[2], h = c[3], d = {css: u, media: L, sourceMap: h};
            g[m] ? g[m].parts.push(d) : K.push(g[m] = {id: m, parts: [d]})
        }
        return K
    }

    function C() {
        var c = document.createElement("style"), a = D();
        return c.type = "text/css", a.appendChild(c), c
    }

    function J() {
        var c = document.createElement("link"), a = D();
        return c.rel = "stylesheet", a.appendChild(c), c
    }

    function k(f, a) {
        var h, g, d;
        if (a.singleton) {
            var c = E++;
            h = F || (F = C()), g = B.bind(null, h, c, !1), d = B.bind(null, h, c, !0)
        } else {
            f.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (h = J(), g = w.bind(null, h), d = function () {
                h.parentNode.removeChild(h), h.href && URL.revokeObjectURL(h.href)
            }) : (h = C(), g = v.bind(null, h), d = function () {
                h.parentNode.removeChild(h)
            })
        }
        return g(f), function (e) {
            if (e) {
                if (e.css === f.css && e.media === f.media && e.sourceMap === f.sourceMap) {
                    return
                }
                g(f = e)
            } else {
                d()
            }
        }
    }

    function B(h, f, m, l) {
        var g = m ? "" : l.css;
        if (h.styleSheet) {
            h.styleSheet.cssText = z(f, g)
        } else {
            var d = document.createTextNode(g), c = h.childNodes;
            c[f] && h.removeChild(c[f]), c.length ? h.insertBefore(d, c[f]) : h.appendChild(d)
        }
    }

    function v(c, a) {
        var f = a.css, d = a.media;
        if (a.sourceMap, d && c.setAttribute("media", d), c.styleSheet) {
            c.styleSheet.cssText = f
        } else {
            for (; c.firstChild;) {
                c.removeChild(c.firstChild)
            }
            c.appendChild(document.createTextNode(f))
        }
    }

    function w(f, c) {
        var h = c.css, g = (c.media, c.sourceMap);
        g && (h += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(g)))) + " */");
        var d = new Blob([h], {type: "text/css"}), a = f.href;
        f.href = URL.createObjectURL(d), a && URL.revokeObjectURL(a)
    }

    var I = {}, H = function (c) {
        var a;
        return function () {
            return void 0 === a && (a = c.apply(this, arguments)), a
        }
    }, b = H(function () {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    }), D = H(function () {
        return document.head || document.getElementsByTagName("head")[0]
    }), F = null, E = 0;
    G.exports = function (c, a) {
        a = a || {}, "undefined" == typeof a.singleton && (a.singleton = b());
        var d = q(c);
        return x(d, a), function (o) {
            for (var m = [], h = 0; h < d.length; h++) {
                var n = d[h], g = I[n.id];
                g.refs--, m.push(g)
            }
            if (o) {
                x(q(o), a)
            }
            for (var h = 0; h < m.length; h++) {
                var g = m[h];
                if (0 === g.refs) {
                    for (var f = 0; f < g.parts.length; f++) {
                        g.parts[f]()
                    }
                    delete I[g.id]
                }
            }
        }
    };
    var z = function () {
        var a = [];
        return function (c, d) {
            return a[c] = d, a.filter(Boolean).join("\n")
        }
    }()
}, function (b, a) {
    function c() {
        this.sideInfo = null, this.sideHTML = "", $(window).resize($.proxy(this.setPosition, this)), this.init()
    }

    Object.defineProperty(a, "__esModule", {value: !0}), c.prototype.init = function () {
        this.getSideBanner()
    }, c.prototype.getSideBanner = function () {
        var d = this;
        $.ajax({
            type: "GET", url: "/assist.do?operation=sidead", dataType: "json", success: function (e) {
                0 === e.resultCode && (d.sideInfo = e.data, d.sideInfo && d.setSideBanner())
            }, error: function () {
            }
        })
    }, c.prototype.setSideBanner = function () {
        var f = this.sideInfo.targetUrl ? this.sideInfo.targetUrl : "/";
        this.sideHTML = '<a href="' + f + '" target="_blank" class="m-page-side-banner"><img src="' + this.sideInfo.imageUrl + '" alt="' + this.sideInfo.description + '"></a>';
        var d = ($(window).width() - 960) / 2 - 110 - 20;
        $(this.sideHTML).css("left", d).appendTo(document.body)
    }, c.prototype.setPosition = function () {
        var d = ($(window).width() - 960) / 2 - 110 - 20;
        $(".m-page-side-banner").css("left", d)
    }, a["default"] = c
}, function (b, a, c) {
    (function (d) {
        function f() {
            var e = d.createClass({
                displayName: "GoTop", getInitialState: function () {
                    return {st: $(document).scrollTop()}
                }, componentDidMount: function () {
                    var j = this;
                    $(window).on("scroll", function () {
                        j.setShow()
                    })
                }, setShow: function () {
                    this.setState({st: $(document).scrollTop()})
                }, backToTop: function () {
                    $("html, body").animate({scrollTop: 0}, 300)
                }, render: function () {
                    return d.createElement("a", {
                        href: "javascript:;",
                        className: "m-gotop",
                        style: {display: this.state.st > 0 ? "block" : "none", right: this.props.right + "px"},
                        title: "回到顶部",
                        onClick: this.backToTop
                    })
                }
            }), i = d.createClass({
                displayName: "Report", render: function () {
                    return d.createElement("a", {
                        href: "/report.do",
                        target: "_blank",
                        style: {right: this.props.right + "px"},
                        title: "举报中心",
                        className: "m-report"
                    })
                }
            }), h = d.createClass({
                displayName: "Qr", getInitialState: function () {
                    return {isShow: !1, isHoverShow: !1}
                }, componentDidMount: function () {
                    var j = this;
                    j.setShow(), $(window).on("resize", function () {
                        j.setShow()
                    })
                }, setShow: function () {
                    var k = $(window).width(), j = k > 1512;
                    this.setState({isShow: j})
                }, handlerHover: function () {
                    var j = this.state.isHoverShow;
                    this.setState({isHoverShow: !j})
                }, render: function () {
                    return d.createElement("div", null, d.createElement("a", {
                        className: "m-qr",
                        target: "_blank",
                        href: "/download?act=rdpages_20130925_02",
                        style: {display: this.state.isShow ? "block" : "none"}
                    }, d.createElement("img", {src: "https://yuedu.163.com/images/down/QR_All.png"})), d.createElement("div", {
                        className: "m-qr-icon",
                        href: "javascript:;",
                        style: {display: this.state.isShow ? "none" : "block", right: this.props.right + "px"},
                        onMouseEnter: this.handlerHover,
                        onMouseLeave: this.handlerHover
                    }, d.createElement("a", {
                        className: "m-qr-hover",
                        href: "/download?act=rdpages_20130925_02",
                        style: {display: this.state.isHoverShow ? "block" : "none", right: this.props.right + 50 + "px"}
                    }, d.createElement("img", {src: "https://yuedu.163.com/images/down/QR_All.png"}))))
                }
            }), g = d.createClass({
                displayName: "SideBar", getInitialState: function () {
                    return {right: 0}
                }, componentDidMount: function () {
                    var j = this;
                    j.setPosition(), $(window).on("resize", function () {
                        j.setPosition()
                    })
                }, setPosition: function () {
                    var j = $(".g-bd").offset().left;
                    this.setState({right: j - 80})
                }, render: function () {
                    return d.createElement("div", null, d.createElement(e, {right: this.state.right}), d.createElement(h, {right: this.state.right}), d.createElement(i, {right: this.state.right}))
                }
            });
            ReactDOM.render(d.createElement(g, null), document.querySelector("#J_rightsidebar"))
        }

        Object.defineProperty(a, "__esModule", {value: !0}), a["default"] = f
    }).call(a, c(7))
}, function (b, a) {
    b.exports = React
}, function (b, a, c) {
    (function (f) {
        function g() {
            var e = f.createClass({
                displayName: "BonusSuccess", goClose: function () {
                    $(".m-bonus-success").fadeOut(300).remove(), $("#J_BonusPack").fadeOut(300).remove(), $(".m-mask").fadeOut(300)
                }, render: function () {
                    return f.createElement("div", {className: "inner", onClick: this.goClose})
                }
            }), h = f.createClass({
                displayName: "BonusPack", getInitialState: function () {
                    return {toggle: !1, right: 0, isTop: !1, isHover: !1}
                }, componentDidMount: function () {
                    var i = this;
                    this.setPosition(), $(window).on("resize", function () {
                        i.setPosition()
                    })
                }, setPosition: function () {
                    var j = $(".g-bd").offset().left, i = $(window).width(), k = !(i > 1512);
                    this.setState({isTop: k, right: j + 5})
                }, goOnHover: function () {
                    this.setState({isHover: !0})
                }, goUnHover: function () {
                    setTimeout(function () {
                        this.state.toggle || this.setState({isHover: !1})
                    }.bind(this), 300)
                }, layerHover: function (i) {
                    i ? this.setState({toggle: !0}) : (this.setState({toggle: !1}), this.goUnHover())
                }, openLayer: function (j) {
                    var i = $(j), k = $(".m-mask");
                    i.css({"margin-left": -i.width() / 2, "margin-top": -i.height() / 2}), i.fadeIn(300), k.fadeIn(300)
                }, getBonus: function () {
                    this.goUnHover(), $.ajax({
                        type: "GET",
                        url: "/quan.do?operation=grantHongBaoToUser&desc=moreFlow",
                        dataType: "json",
                        success: function (i) {
                            0 === i.resultCode ? this.openLayer(".m-bonus-success") : -104 === i.resultCode ? (0, d.popTip)("红包已领取") : -999 === i.resultCode ? ((0, d.popTip)("请登录后领取红包"), setTimeout(function () {
                                var j = location.href;
                                location.href = "//yuedu.163.com/loginForm.do?targetUrl=" + encodeURIComponent(j)
                            }, 1000)) : (0, d.popTip)("出错了，请稍后再试")
                        }.bind(this),
                        error: function () {
                        }
                    })
                }, render: function () {
                    return f.createElement("div", {
                        className: "m-bonus-pack",
                        style: {right: this.state.right}
                    }, f.createElement("div", {
                        className: "icon",
                        onMouseEnter: this.goOnHover,
                        onMouseLeave: this.goUnHover
                    }), f.createElement("div", {
                        className: this.state.isTop ? "layer layer-t" : "layer layer-r",
                        style: {display: this.state.isHover ? "block" : "none"},
                        onMouseEnter: this.layerHover.bind(null, !0),
                        onMouseLeave: this.layerHover.bind(null, !1)
                    }, f.createElement("p", null, "送", f.createElement("em", null, "500"), "阅点，请你免费看书"), f.createElement("a", {onClick: this.getBonus}, "立即领取"), f.createElement("b", null)))
                }
            });
            !function () {
                $.ajax({
                    type: "GET",
                    url: "/quan.do?operation=determineUserHongBao&desc=moreFlow",
                    dataType: "json",
                    success: function (i) {
                        0 === i.resultCode && document.querySelector("#J_BonusPack") && (ReactDOM.render(f.createElement(h, null), document.querySelector("#J_BonusPack")), ReactDOM.render(f.createElement(e, null), document.querySelector(".m-bonus-success")))
                    },
                    error: function () {
                    }
                })
            }()
        }

        Object.defineProperty(a, "__esModule", {value: !0}), a["default"] = g;
        var d = c(9)
    }).call(a, c(7))
}, function (d, b, g) {
    Object.defineProperty(b, "__esModule", {value: !0}), b.localParam = b.popTip = void 0;
    var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (h) {
        return typeof h
    } : function (h) {
        return h && "function" == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h
    };
    g(10);
    var c = function (i) {
        0 == $("#J_FIXED").length && $("body").prepend('<div id="J_FIXED" class="m-tipss" style="display:none;"><div id="J_TIPS" class="inner"></div></div>');
        var h = i, j = $("#J_TIPS");
        j.empty().html(h), j.parent().fadeIn(300).delay(3000).fadeOut(300)
    }, a = function () {
        var i = window.location.search, h = new RegExp("([^?=&]+)(=([^&]*))?", "g");
        if (i) {
            var j = function () {
                var e = {};
                return i.replace(h, function (m, k, n, l) {
                    e[k] = l
                }), {v: e}
            }();
            if ("object" === (void 0 === j ? "undefined" : f(j))) {
                return j.v
            }
        }
    };
    b.popTip = c, b.localParam = a
}, function (b, a, d) {
    var c = d(11);
    "string" == typeof c && (c = [[b.id, c, ""]]), d(4)(c, {}), c.locals && (b.exports = c.locals)
}, function (b, a, c) {
    a = b.exports = c(3)(), a.push([b.id, ".m-tipss{position:fixed;top:75pt;left:0;width:100%;z-index:99999}.m-tipss,.m-tipss .inner{height:38px;text-align:center}.m-tipss .inner{position:relative;display:inline-block;margin:0 auto;background-color:#ffc;border-radius:3px 3px 3px 3px;box-shadow:0 0 2px hsla(0,0%,39%,.3);line-height:38px;padding:0 20px;border:1px solid #fc9;white-space:nowrap}", ""])
}]), function (b) {
    function a(e) {
        if (c[e]) {
            return c[e].exports
        }
        var d = c[e] = {i: e, l: !1, exports: {}};
        return b[e].call(d.exports, d, d.exports, a), d.l = !0, d.exports
    }

    var c = {};
    a.m = b, a.c = c, a.i = function (d) {
        return d
    }, a.d = function (d, g, f) {
        a.o(d, g) || Object.defineProperty(d, g, {configurable: !1, enumerable: !0, get: f})
    }, a.n = function (d) {
        var f = d && d.__esModule ? function () {
            return d["default"]
        } : function () {
            return d
        };
        return a.d(f, "a", f), f
    }, a.o = function (f, d) {
        return Object.prototype.hasOwnProperty.call(f, d)
    }, a.p = "/build/", a(a.s = 7)
}([function (b, a, d) {
    var c = d(5);
    "string" == typeof c && (c = [[b.i, c, ""]]), d(3)(c, {}), c.locals && (b.exports = c.locals)
}, function (b, a) {
    b.exports = React
}, function (b, a) {
    b.exports = function () {
        var c = [];
        return c.toString = function () {
            for (var f = [], d = 0; d < this.length; d++) {
                var g = this[d];
                g[2] ? f.push("@media " + g[2] + "{" + g[1] + "}") : f.push(g[1])
            }
            return f.join("")
        }, c.i = function (f, j) {
            "string" == typeof f && (f = [[null, f, ""]]);
            for (var h = {}, g = 0; g < this.length; g++) {
                var e = this[g][0];
                "number" == typeof e && (h[e] = !0)
            }
            for (g = 0; g < f.length; g++) {
                var d = f[g];
                "number" == typeof d[0] && h[d[0]] || (j && !d[2] ? d[2] = j : j && (d[2] = "(" + d[2] + ") and (" + j + ")"), c.push(d))
            }
        }, c
    }
}, function (B, G) {
    function q(g, c) {
        for (var l = 0; l < g.length; l++) {
            var h = g[l], f = j[h.id];
            if (f) {
                f.refs++;
                for (var a = 0; a < f.parts.length; a++) {
                    f.parts[a](h.parts[a])
                }
                for (; a < h.parts.length; a++) {
                    f.parts.push(E(h.parts[a], c))
                }
            } else {
                for (var d = [], a = 0; a < h.parts.length; a++) {
                    d.push(E(h.parts[a], c))
                }
                j[h.id] = {id: h.id, refs: 1, parts: d}
            }
        }
    }

    function m(u) {
        for (var J = [], g = {}, f = 0; f < u.length; f++) {
            var c = u[f], p = c[0], I = c[1], K = c[2], h = c[3], d = {css: I, media: K, sourceMap: h};
            g[p] ? g[p].parts.push(d) : J.push(g[p] = {id: p, parts: [d]})
        }
        return J
    }

    function b() {
        var c = document.createElement("style"), a = F();
        return c.type = "text/css", a.appendChild(c), c
    }

    function w() {
        var c = document.createElement("link"), a = F();
        return c.rel = "stylesheet", a.appendChild(c), c
    }

    function E(g, d) {
        var i, h, c;
        if (d.singleton) {
            var f = z++;
            i = x || (x = b()), h = H.bind(null, i, f, !1), c = H.bind(null, i, f, !0)
        } else {
            g.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = w(), h = k.bind(null, i), c = function () {
                i.parentNode.removeChild(i), i.href && URL.revokeObjectURL(i.href)
            }) : (i = b(), h = v.bind(null, i), c = function () {
                i.parentNode.removeChild(i)
            })
        }
        return h(g), function (a) {
            if (a) {
                if (a.css === g.css && a.media === g.media && a.sourceMap === g.sourceMap) {
                    return
                }
                h(g = a)
            } else {
                c()
            }
        }
    }

    function H(h, f, p, l) {
        var g = p ? "" : l.css;
        if (h.styleSheet) {
            h.styleSheet.cssText = y(f, g)
        } else {
            var d = document.createTextNode(g), c = h.childNodes;
            c[f] && h.removeChild(c[f]), c.length ? h.insertBefore(d, c[f]) : h.appendChild(d)
        }
    }

    function v(c, a) {
        var f = a.css, d = a.media;
        if (a.sourceMap, d && c.setAttribute("media", d), c.styleSheet) {
            c.styleSheet.cssText = f
        } else {
            for (; c.firstChild;) {
                c.removeChild(c.firstChild)
            }
            c.appendChild(document.createTextNode(f))
        }
    }

    function k(f, c) {
        var h = c.css, g = (c.media, c.sourceMap);
        g && (h += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(g)))) + " */");
        var d = new Blob([h], {type: "text/css"}), a = f.href;
        f.href = URL.createObjectURL(d), a && URL.revokeObjectURL(a)
    }

    var j = {}, D = function (c) {
        var a;
        return function () {
            return void 0 === a && (a = c.apply(this, arguments)), a
        }
    }, C = D(function () {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    }), F = D(function () {
        return document.head || document.getElementsByTagName("head")[0]
    }), x = null, z = 0;
    B.exports = function (d, a) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) {
            throw new Error("The style-loader cannot be used in a non-browser environment")
        }
        a = a || {}, "undefined" == typeof a.singleton && (a.singleton = C());
        var c = m(d);
        return q(c, a), function (p) {
            for (var n = [], h = 0; h < c.length; h++) {
                var o = c[h], g = j[o.id];
                g.refs--, n.push(g)
            }
            p && q(m(p), a);
            for (var h = 0; h < n.length; h++) {
                var g = n[h];
                if (0 === g.refs) {
                    for (var f = 0; f < g.parts.length; f++) {
                        g.parts[f]()
                    }
                    delete j[g.id]
                }
            }
        }
    };
    var y = function () {
        var a = [];
        return function (c, d) {
            return a[c] = d, a.filter(Boolean).join("\n")
        }
    }()
}, function (m, v, h) {
    function g(c, a) {
        if (!(c instanceof a)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    function b(c, a) {
        if (!c) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return !a || "object" != typeof a && "function" != typeof a ? c : a
    }

    function k(c, a) {
        if ("function" != typeof a && null !== a) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof a)
        }
        c.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: c,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(c, a) : c.__proto__ = a)
    }

    Object.defineProperty(v, "__esModule", {value: !0});
    var u = function () {
        function a(i, c) {
            for (var p = 0; p < c.length; p++) {
                var l = c[p];
                l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(i, l.key, l)
            }
        }

        return function (c, i, e) {
            return i && a(c.prototype, i), e && a(c, e), c
        }
    }();
    h(0);
    var w = h(1), j = function (a) {
        return a && a.__esModule ? a : {"default": a}
    }(w), f = h(8), d = function (c) {
        function a(i) {
            g(this, a);
            var l = b(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, i));
            return l.setDelay, l.storeText, l.typedWord, l.hintLastest = !1, l.listSize = 0, l.keyArr = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 8, 186, 187, 188, 189, 190, 191, 32, 108, 13], l.isTheKey, l.hintData = {}, l.defaultPlaceholder = l.props.data.placeholder, l.placeholder = l.props.data.placeholder, l.hasKeyword = "" !== l.props.data.keyword, l.className = l.hasKeyword ? "" : "s-placeholder", l.state = {
                showOps: !1,
                crtPosition: 0
            }, l
        }

        return k(a, c), u(a, [{
            key: "filterKey", value: function (l) {
                for (var i = 0; i < this.keyArr.length; i++) {
                    if (l == this.keyArr[i]) {
                        this.isTheKey = !0;
                        break
                    }
                }
            }
        }, {
            key: "sendReq", value: function (l) {
                var i = this;
                l.trim().length > 0 && $.ajax({
                    type: "GET",
                    url: "/querySearchHints.do",
                    data: {keyword: l},
                    dataType: "json",
                    success: function (n) {
                        n ? (i.hintData = n, n.book = n.book || [], n.source = n.source || [], n.user = n.user || [], i.listSize = n.book.length + n.source.length + n.user.length + 3, !i.hintLastest && i.refs.key.value && (i.setState({
                            showOps: !0,
                            crtPosition: 0
                        }), i.typedWord == n.keyword && (i.hintLastest = !0))) : (0, f.popTip)("出错了，请稍候再试")
                    },
                    error: function () {
                    }
                })
            }
        }, {
            key: "handleKeyUp", value: function (x) {
                var p = this, z = x.target;
                if (z.value.length > 0) {
                    if (this.isTheKey = !1, this.filterKey(x.keyCode), this.isTheKey) {
                        var y = x.keyCode;
                        this.setDelay = setTimeout(function () {
                            var n = z.value, i = n.trim();
                            p.typedWord = i, p.hintLastest = !1, 13 === y || 108 === y || 32 === y ? p.typedWord !== p.storeText && p.sendReq(i) : p.sendReq(i)
                        }, 200)
                    }
                    if (40 === x.keyCode && this.listSize > 0) {
                        var s = this.state.crtPosition;
                        s++, s > this.listSize && (s = 1), this.setState({crtPosition: s})
                    }
                    if (38 === x.keyCode && this.listSize > 0) {
                        var l = this.state.crtPosition;
                        l--, l <= 0 && (l = this.listSize), this.setState({crtPosition: l})
                    }
                    27 === x.keyCode && this.setState({showOps: !1})
                } else {
                    0 == z.value.length && this.setState({showOps: !1})
                }
            }
        }, {
            key: "handleKeyDown", value: function (l) {
                for (var i = !1, o = 0; o < this.keyArr.length; o++) {
                    if (l.keyCode === this.keyArr[o]) {
                        i = !0, this.storeText = l.target.value.trim();
                        break
                    }
                }
                i && this.setDelay && clearTimeout(this.setDelay)
            }
        }, {
            key: "searchValueSet", value: function (l, i) {
                this.refs.key.value = l, this.refs.type.value = i
            }
        }, {
            key: "handleFocus", value: function () {
                var i = this.refs.key;
                i.value == this.placeholder && "s-placeholder" == i.className && (i.value = "", i.className = "")
            }
        }, {
            key: "handleBlur", value: function () {
                var i = this.refs.key;
                "" == i.value && (i.value = this.placeholder, i.className = "s-placeholder")
            }
        }, {
            key: "componentDidMount", value: function () {
                var i = this;
                $.ajax({
                    type: "GET", url: "/service/configuration.do", dataType: "json", success: function (e) {
                        0 === e.resultCode && e.searchTip && "" != e.searchTip && (i.placeholder = e.searchTip), i.hasKeyword || (i.refs.key.defaultValue = i.placeholder)
                    }, error: function () {
                        i.hasKeyword || (i.refs.key.defaultValue = i.placeholder)
                    }
                }), $("body").on("click", function (e) {
                    e.target != i.refs.key && e.target != i.refs.type && i.setState({showOps: !1})
                })
            }
        }, {
            key: "searchFilter", value: function (i) {
                this.refs.key.value == this.defaultPlaceholder || "" == this.refs.key.value ? (i.preventDefault(), (0, f.popTip)("搜索内容不能为空")) : this.refs.key.value = this.refs.key.value.trim()
            }
        }, {
            key: "render", value: function () {
                return j["default"].createElement("div", null, j["default"].createElement("form", {
                    className: "J_Form",
                    action: "/search.do"
                }, j["default"].createElement("input", {
                    ref: "key",
                    type: "text",
                    className: this.className,
                    name: "key",
                    onFocus: this.handleFocus.bind(this),
                    defaultValue: this.props.data.keyword,
                    onBlur: this.handleBlur.bind(this),
                    onKeyUp: this.handleKeyUp.bind(this),
                    onKeyDown: this.handleKeyDown.bind(this),
                    autoComplete: "off"
                }), j["default"].createElement("input", {
                    ref: "type",
                    type: "hidden",
                    name: "type",
                    defaultValue: this.props.data.type
                }), j["default"].createElement("button", {
                    type: "submit",
                    onClick: this.searchFilter.bind(this)
                }, j["default"].createElement("span", null, "    "))), this.state.showOps ? j["default"].createElement(q, {
                    hintData: this.hintData,
                    crtPosition: this.state.crtPosition,
                    searchValueSet: this.searchValueSet.bind(this)
                }) : "")
            }
        }]), a
    }(w.Component);
    v["default"] = d;
    var q = function (c) {
        function a(i) {
            g(this, a);
            var l = b(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, i));
            return l.keyword = "", l.data = {}, l.listSize = 0, l.defaultHeadUrl = "https://yuedust.yuedu.126.net/images/txdefault.png", l.state = {}, l
        }

        return k(a, c), u(a, [{
            key: "setStringHighLight", value: function (A) {
                var x = A, C = this.keyword, B = C.length;
                if (x.indexOf(C) >= 0) {
                    var z = x.indexOf(C), p = x.slice(0, z), l = x.slice(z, z + B), y = x.slice(z + B);
                    return j["default"].createElement("span", null, p, j["default"].createElement("em", null, l), y)
                }
                return x
            }
        }, {
            key: "getStyle", value: function (p, i, x, s) {
                var l = p;
                return i && (l += " children-last"), this.listSize++, this.listSize == this.props.crtPosition && (l += " crt", this.props.searchValueSet(x, s)), l
            }
        }, {
            key: "renderBooks", value: function (y) {
                var s = this, A = this.getStyle("parent topli", !1, this.keyword, 4),
                    z = "/search.do?key=" + this.keyword + "&type=4", x = j["default"].createElement("li", {
                        key: "bp",
                        className: A
                    }, j["default"].createElement("b", {className: "book"}), j["default"].createElement("a", {href: z}, '搜"', j["default"].createElement("em", null, this.keyword), '"书籍')),
                    p = y.length, l = y.map(function (o, t) {
                        var i = s.getStyle("children", t == p - 1, o.name, 4);
                        return z = "/search.do?key=" + o.name + "&type=4", j["default"].createElement("li", {
                            key: "b_" + t,
                            className: i
                        }, j["default"].createElement("a", {href: z}, s.setStringHighLight(o.name)))
                    });
                return l.unshift(x), l
            }
        }, {
            key: "renderSources", value: function (y) {
                var s = this, A = this.getStyle("parent", !1, this.keyword, 0),
                    z = "/search.do?key=" + this.keyword + "&type=0", x = j["default"].createElement("li", {
                        key: "sp",
                        className: A
                    }, j["default"].createElement("b", {className: "info"}), j["default"].createElement("a", {href: z}, '搜"', j["default"].createElement("em", null, this.keyword), '"资讯源')),
                    p = y.length, l = y.map(function (o, t) {
                        var i = s.getStyle("children", t == p - 1, o.name, 0);
                        return z = "/search.do?key=" + o.name + "&type=0", j["default"].createElement("li", {
                            key: "s_" + t,
                            className: i
                        }, j["default"].createElement("a", {href: z}, s.setStringHighLight(o.name)))
                    });
                return l.unshift(x), l
            }
        }, {
            key: "renderUsers", value: function (y) {
                var s = this;
                if (0 !== y.length) {
                    var A = this.getStyle("parent", !1, this.keyword, 5),
                        z = "/search.do?key=" + this.keyword + "&type=5", x = j["default"].createElement("li", {
                            key: "up",
                            className: A
                        }, j["default"].createElement("b", {className: "user"}), j["default"].createElement("a", {href: z}, '搜"', j["default"].createElement("em", null, this.keyword), '"用户')),
                        p = y.length, l = y.map(function (o, t) {
                            var i = s.getStyle("children children-u", t == p - 1, o.name, 5);
                            return z = "/search.do?key=" + o.name + "&type=5", j["default"].createElement("li", {
                                key: "u_" + t,
                                className: i
                            }, j["default"].createElement("a", {href: z}, j["default"].createElement("img", {
                                width: "30",
                                height: "30",
                                src: o.icon ? o.icon : s.defaultHeadUrl
                            }), s.setStringHighLight(o.name)))
                        });
                    return l.unshift(x), l
                }
            }
        }, {
            key: "render", value: function () {
                return this.listSize = 0, this.data = this.props.hintData, this.keyword = this.data.keyword, j["default"].createElement("ul", {className: "J_SearchOps"}, this.renderBooks(this.data.book), this.renderUsers(this.data.user))
            }
        }]), a
    }(w.Component)
}, function (b, a, c) {
    a = b.exports = c(2)(), a.push([b.i, "/*\r\n* @Author: hzwushuoshuo\r\n* @Date:   2016-11-30 15:34:05\r\n* @Last Modified by:   hzwushuoshuo\r\n* @Last Modified time: 2017-01-16 15:55:39\r\n*/\n.bg-header, .m-sch button {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAGuCAYAAADCoNmkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTIyMEEwMUI4RkRDMTFFNDg0RTJBQTkzOTFCMEZCNTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTIyMEEwMUM4RkRDMTFFNDg0RTJBQTkzOTFCMEZCNTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MjIwQTAxOThGREMxMUU0ODRFMkFBOTM5MUIwRkI1NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MjIwQTAxQThGREMxMUU0ODRFMkFBOTM5MUIwRkI1NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsYTI9cAADDOSURBVHja7J0HfFRV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IQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQAAIQBwcrHc2a/flbyczpZSxWMz2G6fMmfOYlQjCIURoToiID1mOqoQhIoQUmpwfAqqENSVGCEV1QQgBKKdqCZQV4Wwm62dn/JBqDJQl4TwCNtNfsrfQpWBUMTup2w5249sM1E9oK6OCC62EWzPsEWjekBdFcI7OkrcjKoBddU1OsI2im0umwVVA+rqiDCRrTfbBagWUJeFIK9LvKejgdnIz3oLVB0IVdcoHdUB6vKIkFGD4zNRhSBUhDCkmg16H9vtqEIQCljcbjdqAWBEQBUAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAACEAcGpjWXlFj4q2f6fLiwLt0HXxctQi+J/HXsn2nqgiANcIAAgBAAgBAAgBgLoohO/oaHZIeJPNrebF+/ebpjLf4wD4n0WyRr6ZoXvZOrB19yn/Qbd5QUYJhLRrVMp2PVu6qSxDy0pRZaAuxQjppobvTxgAhJxrFAhxhe7T9RWoKlBXhUA+wTEAdc41AqDOCSFX191VNDIdC8D/vBDW1+D4DahCEApY3G43agFgREAVAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAAAhAHDKY584ceIsXt7qU/7Wo48+OgjVA0KNQO1dRoR72H4zFf6mZQCEIn7buwihkK2fLs3rAIQiftu73aSKu9ksPmoBIBQ5rr1b3G43qgXUeZA1AgBCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAKC2sKxJjF7E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) -9999px -9999px no-repeat; }\n\n.sec-header, .m-sch ul li.parent b {\n  background: url(https://easyreadfs.nosdn.127.net/web/trunk/1479954847357/sec-header.png) no-repeat 9999px 9999px; }\n\n.m-sch {\n  float: left;\n  width: 400px;\n  height: 36px;\n  margin: 40px 0 0 88px; }\n  .m-sch input {\n    float: left;\n    width: 336px;\n    height: 14px;\n    line-height: 14px;\n    padding: 10px;\n    border: #c9483c 1px solid;\n    background: #fff;\n    font-size: 14px; }\n    .m-sch input.s-placeholder {\n      color: #868686;\n      font-size: 14px;\n      line-height: 14px; }\n  .m-sch button {\n    float: left;\n    display: block;\n    width: 42px;\n    height: 36px;\n    border: none;\n    background-position: -2px -56px;\n    cursor: pointer; }\n  .m-sch ul {\n    width: 396px;\n    clear: both;\n    border-bottom: #c9483c solid 1px;\n    border-left: #c9483c solid 1px;\n    border-right: #c9483c solid 1px;\n    background-color: #fff; }\n    .m-sch ul li {\n      height: 38px;\n      line-height: 40px;\n      overflow: hidden; }\n      .m-sch ul li.parent {\n        border-top: #d9d9d9 solid 1px;\n        position: relative; }\n        .m-sch ul li.parent b {\n          position: absolute;\n          width: 12px;\n          height: 13px;\n          top: 13px;\n          left: 20px; }\n          .m-sch ul li.parent b.book {\n            background-position: -194px -403px; }\n          .m-sch ul li.parent b.info {\n            background-position: -206px -403px; }\n          .m-sch ul li.parent b.user {\n            background-position: -218px -403px; }\n        .m-sch ul li.parent a {\n          padding-left: 39px;\n          color: #333;\n          font-weight: bold; }\n      .m-sch ul li.children {\n        height: 24px;\n        line-height: 24px; }\n        .m-sch ul li.children img {\n          float: left;\n          margin: 0 10px 0 0; }\n        .m-sch ul li.children a {\n          padding: 0 20px 0 40px; }\n      .m-sch ul li.children-last {\n        margin: 0 0 10px 0; }\n      .m-sch ul li.children-u {\n        height: 30px;\n        line-height: 30px;\n        margin: 0 0 10px; }\n      .m-sch ul li a {\n        display: block;\n        padding-left: 10px;\n        height: 100%;\n        color: #333;\n        position: relative; }\n        .m-sch ul li a em {\n          color: #bf6261; }\n        .m-sch ul li a .v {\n          background: url(https://easyreadfs.nosdn.127.net/web/trunk/1479955042067/snswidget.png) 9999px 9999px no-repeat;\n          position: absolute;\n          width: 15px;\n          height: 15px;\n          left: 55px;\n          top: 15px;\n          background-position: -125px -66px; }\n        .m-sch ul li a:hover {\n          background-color: #ececec; }\n      .m-sch ul li.topli {\n        border-top: none; }\n      .m-sch ul li.crt {\n        background-color: #ececec; }\n", ""])
}, function (b, a, c) {
    a = b.exports = c(2)(), a.push([b.i, "/* 提示 */\r\n.m-tipss {\r\n    position: fixed;\r\n    top: 100px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 38px;\r\n    text-align: center;\r\n    z-index: 99999;\r\n}\r\n.m-tipss .inner {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin: 0 auto;\r\n    background-color: #ffc;\r\n    border-radius: 3px 3px 3px 3px;\r\n    box-shadow: 0 0 2px rgba(100,100,100,0.3);\r\n    height: 38px;\r\n    line-height: 38px;\r\n    padding: 0 20px;\r\n    text-align: center;\r\n    border: #fc9 solid 1px;\r\n    white-space: nowrap;\r\n}", ""])
}, function (h, k, d) {
    function c(a) {
        return a && a.__esModule ? a : {"default": a}
    }

    function b(i) {
        var a = {keyword: "", type: 4, placeholder: "搜索60万精品好书"}, l = $.extend({}, a, i);
        [].slice.call($(".m-sch")).forEach(function (n) {
            ReactDOM.render(j["default"].createElement(f["default"], {data: l}), n)
        })
    }

    d(0);
    var g = d(1), j = c(g), m = d(4), f = c(m);
    window.SearchWidget = b
}, function (c, a, f) {
    Object.defineProperty(a, "__esModule", {value: !0}), a.localParam = a.popTip = undefined, f(9);
    var d = function (h) {
        0 == $("#J_FIXED").length && $("body").prepend('<div id="J_FIXED" class="m-tipss" style="display:none;"><div id="J_TIPS" class="inner"></div></div>');
        var g = h, i = $("#J_TIPS");
        i.empty().html(g), i.parent().fadeIn(300).delay(3000).fadeOut(300)
    }, b = function () {
        var h = window.location.search, g = new RegExp("([^?=&]+)(=([^&]*))?", "g");
        if (h) {
            var i = {};
            return h.replace(g, function (l, j, m, k) {
                i[j] = k
            }), i
        }
    };
    a.popTip = d, a.localParam = b
}, function (b, a, d) {
    var c = d(6);
    "string" == typeof c && (c = [[b.i, c, ""]]), d(3)(c, {}), c.locals && (b.exports = c.locals)
}]);
;!function (b) {
    function a(e) {
        if (c[e]) {
            return c[e].exports
        }
        var d = c[e] = {exports: {}, id: e, loaded: !1};
        return b[e].call(d.exports, d, d.exports, a), d.loaded = !0, d.exports
    }

    var c = {};
    return a.m = b, a.c = c, a.p = "", a(0)
}([function (h, d, j) {
    function k(a) {
        return a && a.__esModule ? a : {"default": a}
    }

    var g = j(1), c = k(g), b = j(2), f = k(b);
    $(function () {
        (0, c["default"])(), new f["default"](".j-wxwx", {popSelector: "#J_WXM"}), new f["default"](".j-yxyx", {popSelector: "#J_YXM"}), new f["default"](".j-wbwb", {popSelector: "#J_WBM"}), new f["default"]("#J_Service", {popSelector: "#J_ServiceNum"})
    })
}, function (b, a) {
    Object.defineProperty(a, "__esModule", {value: !0});
    var c = function () {
        var f = function () {
            var h = void 0;
            $(".j-show-moremenu").mouseenter(function () {
                $(".j-show-moremenu").hide(), $(".j-headermenu-more").show(), $(".j-sch").hide()
            }), $(".j-headermenu-more").mouseleave(function () {
                h = setTimeout(function () {
                    h && ($(".j-headermenu-more").hide(), $(".j-sch").show(), $(".j-show-moremenu").show())
                }, 200)
            }), $(".j-headermenu-more").mouseenter(function () {
                h && clearTimeout(h), $(".j-show-moremenu").hide(), $(".j-headermenu-more").show(), $(".j-sch").hide()
            })
        }, d = function () {
            $(window).height();
            $(window).scroll(function (i) {
                var h = $(window).scrollTop();
                window.ActiveXObject && !window.XMLHttpRequest ? h > $("#J_Header").height() + 10 ? $(".m-headerfix").show() : $(".m-headerfix").hide() : h > $("#J_Header").height() + 10 ? $(".m-headerfix").addClass("m-headerfix-scrolling") : ($(".m-headerfix-scrolling .J_SearchOps").hide(), $(".m-headerfix").removeClass("m-headerfix-scrolling"))
            })
        }, g = function () {
            var h = [".m-bonus-success"];
            $("body").on("click", function (e) {
                $.each(h, function (i, j) {
                    document.querySelector(j) && e.target !== document.querySelector(j) && ($(j).fadeOut(300), $(".m-mask").fadeOut(300))
                })
            })
        };
        $().ready(function () {
            d(), f(), g()
        }), "undefined" != typeof YD && (void 0 == YD.Header && (YD.Header = {}), YD.Header.toggleMoreHeaderMenu = f, YD.Header.toggleFixHeader = d)
    };
    a["default"] = c, b.exports = a["default"]
}, function (c, a) {
    function d(h, g) {
        if (!(h instanceof g)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var f = function () {
        function g(i, h) {
            for (var j = 0; j < h.length; j++) {
                var k = h[j];
                k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(i, k.key, k)
            }
        }

        return function (e, h, i) {
            return h && g(e.prototype, h), i && g(e, i), e
        }
    }(), b = function () {
        function g(e, i) {
            d(this, g);
            var h = {popSelector: "#J_WXM", time: 300};
            this.settings = $.extend({}, h, i), this.$ele = $(e), this.$popLayer = $(this.settings.popSelector), this.$ele.on("click", this.openPopLayer.bind(this)), this.$ele.on("click", ".close", this.closePopLayer.bind(this)), this.init()
        }

        return f(g, [{
            key: "init", value: function () {
                var h = this;
                $(document).click(function (e) {
                    ~h.$ele.toArray().indexOf(e.target) || h.closePopLayer()
                })
            }
        }, {
            key: "openPopLayer", value: function (m) {
                m.preventDefault();
                var k = $(m.target), p = k.offset().left, q = k.offset().top, l = k.width();
                this.type = k.data("type");
                var j = this.$popLayer.width(), h = this.$popLayer.height();
                this.$popLayer.addClass(this.type).css({
                    left: p - (j - l) / 2,
                    top: q - h - 25
                }).fadeIn(this.settings.time)
            }
        }, {
            key: "closePopLayer", value: function () {
                var h = this;
                this.$popLayer.fadeOut(this.settings.time, function () {
                    h.type && h.$popLayer.removeClass(h.type), h.hasOpen = !1
                })
            }
        }]), g
    }();
    a["default"] = b, c.exports = a["default"]
}]);
;(function (f) {
    (function (o, m, n) {
        if (!m) {
            m = {};
            if (!o) {
                n.fieldSelection = m
            }
        }
        if (o) {
            o.fn.fieldSelection = function () {
                var q;
                var p = arguments;
                this.each(function () {
                    if (p.length == 0) {
                        q = m.get(this)
                    } else {
                        if (p.length == 1 && typeof p[0] == "string") {
                            q = m.replace(this, p[0])
                        } else {
                            if (p.length == 2 && typeof p[0] == "number" && typeof p[1] == "number") {
                                q = m.set(this, p[0], p[1])
                            }
                        }
                    }
                });
                return q || this
            }
        }
        m.get = function (s) {
            var t = {start: 0, end: s.value.length, length: 0}, q, r, p;
            if (s.selectionStart >= 0) {
                t.start = s.selectionStart;
                t.end = s.selectionEnd;
                t.length = t.end - t.start;
                t.text = s.value.substr(t.start, t.length)
            } else {
                if (s.ownerDocument.selection) {
                    q = s.ownerDocument.selection.createRange();
                    if (!q) {
                        return t
                    }
                    r = s.createTextRange(), p = r.duplicate();
                    r.moveToBookmark(q.getBookmark());
                    p.setEndPoint("EndToStart", r);
                    t.start = p.text.length;
                    t.end = p.text.length + q.text.length;
                    t.text = q.text;
                    t.length = q.text.length
                }
            }
            return t
        };
        m.set = function (r, q, p) {
            n.setTimeout(function () {
                r.focus();
                if (r.setSelectionRange) {
                    r.setSelectionRange(q, p)
                } else {
                    if (r.ownerDocument.selection) {
                        var s = r.createTextRange();
                        s.collapse(true);
                        s.moveEnd("character", -1 * r.value.length);
                        s.moveEnd("character", p);
                        s.moveStart("character", q);
                        s.select()
                    }
                }
            }, 500)
        };
        m.replace = function (r, u) {
            var w, p, v, s, t, q;
            r.focus();
            if (r.selectionStart >= 0) {
                w = r.selectionStart;
                p = r.selectionEnd;
                s = r.scrollTop;
                t = r.scrollLeft;
                r.value = r.value.substr(0, w) + u + r.value.substr(p);
                v = w + u.length;
                r.selectionStart = v;
                r.selectionEnd = v;
                r.scrollTop = s;
                r.scrollLeft = t
            } else {
                if (r.ownerDocument.selection) {
                    q = r.ownerDocument.selection.createRange();
                    q.text = u;
                    q.move("character", 0);
                    q.select()
                } else {
                    r.value += u;
                    r.scrollTop = 100000
                }
            }
        }
    }(typeof jQuery != "undefined" ? jQuery : null, typeof exports != "undefined" ? exports : null, window));

    function i(m) {
        if (!m) {
            return
        }
        if (m.indexOf(".css") != -1) {
            var n = document.createElement("link");
            n.type = "text/css";
            n.rel = "stylesheet";
            n.href = m
        }
        if (m.indexOf(".js") != -1) {
            var n = document.createElement("script");
            n.type = "text/javascript";
            n.src = m
        }
        document.getElementsByTagName("head")[0].appendChild(n)
    }

    i("/css/sns-plugin.css");
    if (typeof template == "undefined") {
        i("/js/art-template.js")
    }

    function j(m) {
        if (!m) {
            return ""
        }
        return m.replace(/</igm, "&lt;").replace(/>/igm, "&gt;").replace(/\'/igm, "\\'").replace(/"/igm, '\\"')
    }

    var g = {};
    var a = document.createDocumentFragment();
    g.inherits = function (n, m) {
        var o = function () {
        };
        o.prototype = m.prototype;
        n.prototype = new o();
        n.constructor = n
    };
    g.removeByEC = function (m) {
        a.appendChild(m)
    };

    function e(m) {
        this.config = m || {};
        if (!this.config.triggerClass) {
            return
        }
        this.wrapEl = f("<ul>").addClass("sns-droplist").css("display", "none").appendTo("body");
        this.plugins = [];
        f("body").delegate("." + this.config.triggerClass, "click", f.proxy(this.toggle, this));
        this.wrapEl.delegate("a", "click", f.proxy(this.itemClickHandler, this));
        f("html").click(f.proxy(this.unRender, this))
    }

    e.prototype.addPlugin = function (m) {
        if (!m || !m.title) {
        } else {
            this.plugins.push(m);
            m.host = this
        }
        return this
    };
    e.prototype.render = function () {
        if (!this.wrapEl.html()) {
            var n = '<% for(var i = 0; i < list.length; i++){ %><li class="<%= list[i].itemClass %>" data-index="<%= i %>"><a href="javascript:void(0)"><i></i><span><%= list[i].title %></span></a></li><% } %>';
            var p = template.compile(n);
            var q = {list: this.plugins};
            var o = p(q);
            this.wrapEl.html(o)
        }
        var r = f.proxy(function () {
            for (var y = 0; y < this.plugins.length; y++) {
                this.plugins[y].hide && this.plugins[y].hide()
            }
            if (this.config.shareContentInfo.shareType == 2 || this.config.shareContentInfo.shareType == 1 || this.config.shareContentInfo.custom) {
                this.wrapEl.find("[data-index=9]").hide()
            } else {
                this.wrapEl.find("[data-index=9]").show()
            }
            if (this.config.shareContentInfo.custom) {
                this.wrapEl.find("[data-index=2]").hide();
                this.wrapEl.find("[data-index=3]").hide()
            } else {
                this.wrapEl.find("[data-index=2]").show();
                this.wrapEl.find("[data-index=3]").show()
            }
            if (this.config.logInfo.loggedIn) {
                if (this.config.logInfo.accountType == 2 || this.config.logInfo.accountType == 3) {
                    this.wrapEl.find("[data-index=0]").hide()
                }
            }
            if (this.config.shareContentInfo.customTypes) {
                var v = this.config.shareContentInfo.customTypes;
                this.wrapEl.find("li").each(function (F) {
                    if (f.inArray(F, v) == -1) {
                        f(this).hide()
                    }
                })
            } else {
                this.wrapEl.find("[data-index=10]").hide()
            }
            if (this.config.shareContentInfo.customRemoteUrls) {
                var x = this.config.shareContentInfo.customRemoteUrls;
                var E = this.wrapEl;
                f.each(x, function (F, G) {
                    E.find("[data-index=" + F + "] a").attr("href", G).attr("target", "_blank")
                })
            }
            var u = this.config.shareContentInfo.exclusion;
            if (u && u.length) {
                for (var y = 0; y < u.length; y++) {
                    for (var w = 0; w < this.plugins.length; w++) {
                        if (this.plugins[w].siteType == u[y]) {
                            this.wrapEl.find("li").eq(w).hide()
                        }
                    }
                }
            }
            this.wrapEl.show();
            var C = this.triggerEl.offset();
            var t = this.wrapEl.height();
            var s = this.wrapEl.width();
            var z = this.triggerEl.height();
            var B = this.triggerEl.width();
            var D, A;
            if (f("body").height() - C.top - z < t) {
                D = C.top - t - 5
            } else {
                D = C.top + z + 5
            }
            if (f("body").width() - C.left < s) {
                A = C.left - s + B
            } else {
                A = C.left
            }
            this.wrapEl.css({top: D, left: A, position: "absolute", width: this.wrapEl.width()})
        }, this);
        var m = this;
        f.ajax({
            url: "/login.do?operation=check&_jq_filter=0", error: function () {
                YD.popTip("出错了，请稍后重试")
            }
        }).done(function (s) {
            m.config.logInfo = s;
            if (!m.config.shareContentInfo.sourceTitle) {
                f.ajax({
                    url: "/getSourceTitle.do?_jq_filter=0",
                    data: {source_uuid: m.config.shareContentInfo.sourceUuid},
                    success: function (t) {
                        if (t.ResultCode == 0) {
                            m.config.shareContentInfo.sourceTitle = t.sourceTitle;
                            r()
                        }
                    },
                    error: function () {
                        YD.popTip("出错了，请稍后重试")
                    }
                })
            } else {
                r()
            }
        })
    };
    e.prototype.unRender = function () {
        this.wrapEl.hide()
    };
    e.prototype.toggle = function (o) {
        o && o.preventDefault();
        o && o.stopPropagation();
        this.triggerEl = f(o.target);
        if (!this.triggerEl.hasClass(this.config.triggerClass)) {
            this.triggerEl = this.triggerEl.parents("." + this.config.triggerClass)
        }
        this.config.shareContentInfo = this.triggerEl.data("contentinfo");
        if (this.config.shareContentInfo.initType) {
            for (var m = 0, n = this.plugins.length; m < n; m++) {
                if (this.plugins[m].title == this.config.shareContentInfo.initType) {
                    this.plugins[m].toggle();
                    break
                }
            }
        } else {
            this[this.wrapEl.css("display") == "none" ? "render" : "unRender"]()
        }
    };
    e.prototype.itemClickHandler = function (o) {
        o && o.stopPropagation();
        var n = f(o.target).parents("li");
        if (n.find("a").attr("href") == "javascript:void(0)") {
            var m = n.data("read.html");
            this.plugins[m].toggle();
            this.unRender()
        }
    };

    function k() {
        this.wrapEl = f("<div>").addClass("sns-overlay");
        this.wrapEl.data("rendered", false);
        this.wrapEl.data("shown", false);
        this.wrapEl.delegate(".J_Close", "click", f.proxy(this.toggle, this))
    }

    k.prototype.show = function () {
        var m = this;
        if (this.siteType === 11) {
            m.openLayer({})
        } else {
            f.ajax({
                url: "/login.do?operation=check&_jq_filter=0", error: function () {
                    YD.popTip("出错了，请稍后重试")
                }
            }).done(function (n) {
                if (n.loggedIn) {
                    m.openLayer(n)
                } else {
                    if (typeof yueduLoginModule == "undefined") {
                        login163()
                    } else {
                        yueduLoginModule.open()
                    }
                }
            })
        }
    };
    k.prototype.openLayer = function (m) {
        var q, o = this;
        if ((!o.wrapEl.data("rendered") && o.render) || o.forceFresh) {
            q = o.render(m)
        }
        if (q !== false) {
            o.wrapEl.appendTo("body");
            var n = parseInt((f(window).height() - o.wrapEl.outerHeight(true)) / 2);
            var p = parseInt((f(window).width() - o.wrapEl.outerWidth(true)) / 2);
            n += document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
            o.wrapEl.show().css({top: n < 0 ? 0 : n, left: p < 0 ? 0 : p});
            o.wrapEl.data("rendered", true);
            o.wrapEl.data("shown", true)
        }
    };
    k.prototype.hide = function () {
        this.wrapEl.data("shown", false);
        g.removeByEC(this.wrapEl[0])
    };
    k.prototype.toggle = function (m) {
        m && m.preventDefault();
        this[this.wrapEl.data("shown") ? "hide" : "show"]()
    };

    function c() {
        k.call(this);
        this.title = "微信";
        this.forceFresh = true;
        this.itemClass = "weixin";
        this.siteType = 11;
        this.contentUrl = "";
        this.crtUrl = ""
    }

    g.inherits(c, k);
    c.prototype.render = function () {
        var n = "";
        if (this.host.config.shareContentInfo.shareType == 0) {
            n = "utm_source=newsdetailshare&utm_medium=weixin"
        } else {
            if (this.host.config.shareContentInfo.shareType == 1) {
                n = "utm_source=newssourceshare&utm_medium=weixin"
            } else {
                if (this.host.config.shareContentInfo.shareType == 2) {
                    n = "utm_source=bookshare&utm_medium=2code&utm_campaign=position_all"
                }
            }
        }
        this.crtUrl = this.host.config.shareContentInfo.url;
        if (n != "") {
            if (this.crtUrl.indexOf("?") >= 0) {
                this.crtUrl += "&"
            } else {
                this.crtUrl += "?"
            }
            this.crtUrl += n
        }
        this.contentUrl = "/qr.do?content=" + encodeURIComponent(this.crtUrl) + "&width=180&height=180";
        var m = '   <div class="hd"><h4 class="t-weixin"><i></i>分享到' + this.title + '</h4><a href="#" class="close J_Close">关闭</a></div><div class="bd"><div class="wxqr"><img src="' + this.contentUrl + '"/></div><p class="wxtip">用微信“扫一扫”，打开网页后点击屏幕右上角“...”</p><p class="wxtip">发送给朋友或分享到朋友圈</p></div>';
        this.wrapEl.html(m).appendTo("body")
    };

    function b() {
        k.call(this);
        this.title = "阅读圈";
        this.forceFresh = true;
        this.itemClass = "yuedu-circle";
        this.shareUrl = "/snsFeed.do?_jq_filter=0";
        this.siteType = 8;
        this.wrapEl.delegate(".J_Send", "click", f.proxy(this.sendHandler, this)).delegate("textarea", "keyup", f.proxy(this.textareaInputHandler, this))
    }

    g.inherits(b, k);
    b.prototype.render = function () {
        if (typeof _gaq != "undefined" && _gaq.push) {
            if (this.host.config.shareContentInfo.origin && this.host.config.shareContentInfo.origin.length) {
                var n = this.host.config.shareContentInfo.origin;
                if (n[0] === "booksource" || n[0] === "bookshelf" || n[0] === "tradedetail") {
                    _gaq.push(["_trackEvent", n[0], "source_share_yueduquan", this.host.config.shareContentInfo.sourceUuid])
                } else {
                    if (n[0] === "newsreader") {
                        var q, o;
                        switch (n[1]) {
                            case 0:
                                q = "news";
                                o = this.host.config.shareContentInfo.articleUuid;
                                break;
                            case 1:
                                q = "news_bottom";
                                o = this.host.config.shareContentInfo.articleUuid;
                                break;
                            case 2:
                                q = "source";
                                o = this.host.config.shareContentInfo.sourceUuid;
                                break
                        }
                        _gaq.push(["_trackEvent", n[0], q + "_share_yueduquan", o])
                    }
                }
            } else {
                if (this.host.config.shareContentInfo.shareType == 0) {
                    _gaq.push(["_trackEvent", "newsreader", "news_share", "newsreader_home", "yueduquan"])
                } else {
                    if (this.host.config.shareContentInfo.shareType == 1) {
                        _gaq.push(["_trackEvent", "newsreader", "source_share", "newsreader_detail", "yueduquan"])
                    }
                }
            }
        }
        var p = this.host.config.shareContentInfo.articleUuid || this.host.config.shareContentInfo.sourceUuid;
        var m = '   <div class="hd"><h4 class="t-yuedu-circle"><i></i>分享到' + this.title + '</h4><a href="#" class="close J_Close">关闭</a></div><div class="bd"><form><div class="yuedu-circle-box"><textarea name="comment"></textarea><label>点击发送，直接分享</label></div><input type="hidden" name="operation" value="forward" /><input type="hidden" name="shareType" value="' + this.host.config.shareContentInfo.shareType + '" /><input type="hidden" name="subjectId" value="' + p + '" /></form></div><div class="ft"><p>还可输入<span>500</span>字</p><a href="#" class="btn J_Send">发送</a></div>';
        this.wrapEl.html(m).appendTo("body");
        this.tipLabel = this.wrapEl.find("label");
        this.wordCount = this.wrapEl.find("span");
        this.wrapEl.find("textarea").fieldSelection(0, 0)
    };
    b.prototype.textareaInputHandler = function (m) {
        var o = m.target;
        if (o.value.length) {
            this.tipLabel.fadeOut(100)
        } else {
            this.tipLabel.fadeIn(100)
        }
        var n = 500 - o.value.length;
        if (n >= 0) {
            this.wordCount.css("color", "#999");
            this.wordCountOver = false
        } else {
            this.wordCount.css("color", "#f00");
            this.wordCountOver = true
        }
        this.wordCount.text(n)
    };
    b.prototype.sendHandler = function (o) {
        o && o.preventDefault();
        var n = this;
        var m = f(o.target);
        if (this.isBlocking) {
            return
        }
        if (this.wordCountOver) {
            YD.popTip("字数超过限制");
            return
        }
        this.isBlocking = true;
        m.addClass("dis-btn").text("发送中");
        f.ajax({
            url: this.shareUrl,
            type: "POST",
            dataType: "json",
            data: this.wrapEl.find("form").serializeArray(),
            success: function (p) {
                if (p.resultCode == 0) {
                    YD.popTip("分享成功");
                    n.isBlocking = false;
                    n.hide();
                    n.wrapEl.find("textarea").val("").trigger("keyup");
                    m.removeClass("dis-btn").text("发送")
                }
            },
            error: function () {
                YD.popTip("出错了，请稍后重试");
                n.isBlocking = false;
                m.removeClass("dis-btn").text("发送")
            }
        })
    };

    function h() {
        k.call(this);
        this.title = "私信";
        this.itemClass = "i-message";
        this.friendsUrl = "/snsRelation.do?_jq_filter=0";
        this.shareUrl = "/snsMessage.do?_jq_filter=0";
        this.friendsCheckedLength = 0;
        this.forceFresh = true;
        this.siteType = 9;
        var m = this;
        this.wrapEl.delegate(".J_FriendsList li", "click", f.proxy(this.checkPretty, this)).delegate(".J_FriendsResult i", "click", f.proxy(this.deleteFriendsItem, this)).delegate(".J_FriendsFilterInput", "keyup", f.proxy(this.friendsFilterHandler, this)).delegate(".J_NextStep", "click", f.proxy(this.renderToSecondStep, this)).delegate(".J_BackToStepOne", "click", f.proxy(this.renderBackToFristStep, this)).delegate(".J_ContentArea", "keyup", f.proxy(this.textareaInputHandler, this)).delegate(".J_Send", "click", f.proxy(this.doneHandler, this))
    }

    g.inherits(h, k);
    h.prototype.render = function () {
        if (typeof _gaq != "undefined" && _gaq.push) {
            if (this.host.config.shareContentInfo.origin && this.host.config.shareContentInfo.origin.length) {
                var n = this.host.config.shareContentInfo.origin;
                if (n[0] === "booksource" || n[0] === "bookshelf" || n[0] === "tradedetail") {
                    _gaq.push(["_trackEvent", n[0], "source_share_sixin", this.host.config.shareContentInfo.sourceUuid])
                } else {
                    if (n[0] === "newsreader") {
                        var p, o;
                        switch (n[1]) {
                            case 0:
                                p = "news";
                                o = this.host.config.shareContentInfo.articleUuid;
                                break;
                            case 1:
                                p = "news_bottom";
                                o = this.host.config.shareContentInfo.articleUuid;
                                break;
                            case 2:
                                p = "source";
                                o = this.host.config.shareContentInfo.sourceUuid;
                                break
                        }
                        _gaq.push(["_trackEvent", n[0], p + "_share_sixin", o])
                    }
                }
            } else {
                if (this.host.config.shareContentInfo.shareType == 0) {
                    _gaq.push(["_trackEvent", "newsreader", "news_share", "newsreader_home", "sixin"])
                } else {
                    if (this.host.config.shareContentInfo.shareType == 1) {
                        _gaq.push(["_trackEvent", "newsreader", "source_share", "newsreader_detail", "sixin"])
                    }
                }
            }
        }
        if (this.stepThreeEl) {
            this.stepThreeEl.hide();
            if (this.stepTwoEl.css("display") == "none") {
                this.stepOneEl.show()
            }
            return
        }
        if (!this.stepOneEl) {
            var m = '<div class="hd"><h4 class="t-i-message"><i></i>' + this.title + '分享</h4><a href="#" class="close J_Close">关闭</a></div><div class="bd"><dl class="friends"><dt>选择好友</dt><dd><div class="friends-filter-input"><input type="text" class="J_FriendsFilterInput" value="" /><label>输入昵称筛选好友</label></div><ul class="friends-list J_FriendsList"></ul><ul class="friends-result J_FriendsResult"></ul></dd></dl></div><div class="ft"><p class="J_MaxFriendsLengthTip">最多可同时分享10个好友</p><a href="#" class="btn J_NextStep">下一步</a></div>';
            this.stepOneEl = f("<div>").addClass("J_FriendsStepOne").html(m);
            this.wrapEl.empty().append(this.stepOneEl).appendTo("body");
            this.friendsListEl = this.wrapEl.find(".J_FriendsList");
            this.friendsReusltEl = this.wrapEl.find(".J_FriendsResult");
            this.maxFriendsLengthTip = this.wrapEl.find(".J_MaxFriendsLengthTip");
            this.renderFriendsList()
        }
    };
    h.prototype.renderFriendsList = function () {
        var m = this;
        f.ajax({
            url: this.friendsUrl, data: {operation: "getFriends"}, dataType: "json", success: function (n) {
                if (n.resultCode == 0) {
                    var o = '<% for(var i = 0; i < friends.length; i++){ %><% if(!friends[i].isFiltered){ %><li class="<% if(i%2==1){ %>eq<% } %>"><input data-nickname="<%= friends[i].nickName %>" name="userid" value="<%= friends[i].userId %>" type="checkbox" /><%= friends[i].nickName %></li><% } %><% } %>';
                    var q = template.compile(o);
                    var p = q(n);
                    m.friendsListEl.html(p)
                }
            }, error: function () {
                YD.popTip("获取好友列表失败，请稍后重试");
                m.hide();
                m.stepOneEl.remove()
            }
        })
    };
    h.prototype.checkPretty = function (r) {
        var s = r.target;
        var p;
        if (s.nodeName == "LI") {
            p = f(s).find("input")
        } else {
            p = f(s).parents("li").find("input")
        }
        var o = !p.prop("checked");
        o = s.nodeName == "INPUT" ? !o : o;
        if (o) {
            if (this.friendsCheckedLength >= 10) {
                r.preventDefault();
                this.maxFriendsLengthTip.css("color", "#c00")
            } else {
                p.prop("checked", o);
                var q = f("<li>").html("<span></span><i></i>").attr("data-userid", p.val()).attr("data-nickname", p.data("nickname"));
                var m = document.createTextNode("");
                var n = p.data("nickname");
                m.nodeValue = n.length < 15 ? n : n.substring(0, 15) + "...";
                q.find("span").append(m);
                this.friendsReusltEl.append(q);
                this.friendsCheckedLength++
            }
        } else {
            this.maxFriendsLengthTip.css("color", "#666");
            p.prop("checked", o);
            this.friendsReusltEl.find("li[data-userid=" + p.val() + "]").remove();
            this.friendsCheckedLength--
        }
    };
    h.prototype.deleteFriendsItem = function (o) {
        o && o.preventDefault();
        var n = f(o.target).parents("li");
        var m = n.data("userid");
        n.remove();
        this.friendsListEl.find("input[value=" + m + "]").prop("checked", false);
        this.friendsCheckedLength--
    };
    h.prototype.friendsFilterHandler = function (o) {
        var p = f(o.target);
        var n = f.trim(p.val());
        var m = this;
        if (n.length) {
            p.next().fadeOut(100);
            this.filterTimer && window.clearTimeout(this.filterTimer);
            this.filterTimer = window.setTimeout(function () {
                m.friendsListEl.find("input").each(function () {
                    if (f(this).data("nickname").toString().indexOf(n) == -1) {
                        f(this).parent().hide()
                    } else {
                        f(this).parent().show()
                    }
                })
            }, 200)
        } else {
            p.next().fadeIn(100);
            this.friendsListEl.find("li").show()
        }
    };
    h.prototype.renderToSecondStep = function (q) {
        q && q.preventDefault();
        var r = [];
        this.friendsReusltEl.find("li").each(function () {
            r.push({userid: f(this).data("userid"), nickname: f(this).data("nickname")})
        });
        if (!r.length) {
            YD.popTip("没有选择好友");
            return
        }
        this.stepOneEl.hide();
        if (this.stepTwoEl) {
            this.stepTwoEl.appendTo(this.wrapEl).show()
        } else {
            var m = '<div class="hd"><h4 class="t-i-message"><i></i>' + this.title + '分享</h4><a href="#" class="close J_Close">关闭</a></div><div class="bd"><dl class="friends"><dt>分享好友<a href="#" class="J_BackToStepOne">重新选择好友&gt;</a></dt><dd><form><div class="friends-to-share J_FriendsToShare"></div><div class="textarea-box"><textarea class="J_ContentArea" name="content"></textarea><label>说点什么...</label></div><input type="hidden" name="operation" value="sendb" /><input type="hidden" name="targets" value="" /><input type="hidden" name="type" /><input type="hidden" name="subjectId" /></form></dd></dl></div><div class="ft"><p>还可输入<span>500</span>字</p><a href="#" class="btn J_Send">确认</a></div>';
            this.stepTwoEl = f("<div>").addClass("J_FriendsStepTwo").html(m);
            this.wrapEl.append(this.stepTwoEl);
            this.tipLabel = this.stepTwoEl.find("label");
            this.wordCount = this.stepTwoEl.find("span")
        }
        var s = "";
        var p = "{";
        for (var o = 0; o < r.length; o++) {
            s += (r[o].nickname + ";");
            p += ('"' + r[o].userid + '":');
            var n = r[o].nickname.replace('"', '\\"');
            n = n.replace(":", "\\:");
            n = n.replace(",", "\\,");
            p += ('"' + n + '",')
        }
        p = p.substring(0, p.length - 1) + "}";
        this.wrapEl.find(".J_FriendsToShare").text(s);
        this.wrapEl.find("input[name=targets]").val(p)
    };
    h.prototype.textareaInputHandler = function (m) {
        var o = m.target;
        if (o.value.length) {
            this.tipLabel.fadeOut(100)
        } else {
            this.tipLabel.fadeIn(100)
        }
        var n = 500 - o.value.length;
        if (n >= 0) {
            this.wordCount.css("color", "#999");
            this.wordCountOver = false
        } else {
            this.wordCount.css("color", "#f00");
            this.wordCountOver = true
        }
        this.wordCount.text(n)
    };
    h.prototype.renderBackToFristStep = function (m) {
        m && m.preventDefault();
        this.stepTwoEl.hide();
        this.stepOneEl.show()
    };
    h.prototype.resetUserData = function () {
        this.stepOneEl.find(".J_FriendsList input").prop("checked", false);
        this.stepOneEl.find(".J_FriendsResult").html("");
        this.stepTwoEl.find(".J_FriendsToShare").html("")
    };
    h.prototype.doneHandler = function (p) {
        p && p.preventDefault();
        var n = this;
        var m = f(p.target);
        if (this.isBlocking) {
            return
        }
        if (this.wordCountOver) {
            YD.popTip("字数超过限制");
            return
        }
        this.isBlocking = true;
        m.addClass("dis-btn").text("发送中");
        var o = this.wrapEl.find("form");
        o.find("[name=type]").val(this.host.config.shareContentInfo.shareType);
        o.find("[name=subjectId]").val(this.host.config.shareContentInfo.articleUuid || this.host.config.shareContentInfo.sourceUuid);
        f.ajax({
            url: this.shareUrl,
            type: "POST",
            dataType: "json",
            data: this.wrapEl.find("form").serializeArray(),
            success: function (q) {
                var t = "<ul><li>• 对方设置隐私，人家不鸟你。</li><li>• 用户被外星人劫持了。</li><li>• 系统扑街了。 </li></ul>";
                n.stepTwoEl.hide();
                if (n.stepThreeEl) {
                    n.stepThreeEl.show()
                } else {
                    var r = '<div class="hd"><h4 class="t-i-message"><i></i>' + n.title + '分享</h4><a href="#" class="close J_Close">关闭</a></div><div class="bd"></div><div class="ft"><a href="#" class="btn J_Close">我知道了</a></div>';
                    n.stepThreeEl = f("<div>").addClass("J_FriendsStepThree").html(r).appendTo(n.wrapEl)
                }
                switch (q.resultCode) {
                    case 0:
                        if (!q.failNum) {
                            YD.popTip("私信分享成功");
                            n.hide();
                            n.wrapEl.find(".J_ContentArea").val("").trigger("keyup")
                        } else {
                            var u = [];
                            for (var s in q.failReason) {
                                u.push(j(s))
                            }
                            var r = '<div class="success-tip">部分好友私信分享成功</div><div class="fail-tip"><p>' + u.join("、") + "无法接受您的私信分享,可能原因：</p>" + t + "</div>";
                            n.stepThreeEl.find(".bd").html(r)
                        }
                        break;
                    default:
                        var r = '<div class="fail-tip"><p>私信分享失败，可能原因：</p>' + t + "</div>";
                        n.stepThreeEl.find(".bd").html(r);
                        break
                }
                n.isBlocking = false;
                m.removeClass("dis-btn").text("发送");
                n.resetUserData()
            },
            error: function () {
                YD.popTip("网络出错了，请稍后重试");
                n.isBlocking = false;
                m.removeClass("dis-btn").text("发送")
            }
        })
    };

    function l(m) {
        this.wrapEl = f("<div>").addClass("sns-overlay");
        this.title = m.title || "新浪微博";
        this.itemClass = m.itemClass || "sina-weibo";
        this.getFriendsUrl = m.getFriendsUrl || "/getFriendsUrl.do?_jq_filter=0";
        this.forceFresh = m.forceFresh || true;
        this.maxWordCount = m.maxWordCount || 140;
        this.atFriends = m.atFriends;
        this.shareUrl = m.shareUrl || "/weibo.do?_jq_filter=0";
        this.siteType = m.siteType || "1";
        this.imgSupport = m.imgSupport || false;
        this.friendsCheckedLength = 0;
        this.imageUrlInput;
        this.imageUrlTick;
        this.imageUrlShow = 1;
        this.wrapEl.data("rendered", false).data("shown", false).delegate(".J_Close", "click", f.proxy(this.toggle, this)).delegate(".J_CancelToStepOne", "click", f.proxy(this.friendsSelectedCancelHandler, this)).delegate(".J_FriendsList li", "click", f.proxy(this.checkPretty, this)).delegate(".J_FriendsResult i", "click", f.proxy(this.deleteFriendsItem, this)).delegate(".J_FriendsFilterInput", "keyup", f.proxy(this.friendsFilterHandler, this)).delegate(".J_ContentArea", "keyup", f.proxy(this.textareaInputHandler, this)).delegate(".J_ToAtFriends", "click", f.proxy(this.renderToFriendsList, this)).delegate(".J_FriendsSelectedOk", "click", f.proxy(this.friendsSelectedOkHandler, this)).delegate(".J_Send", "click", f.proxy(this.sendHandler, this)).delegate(".J_GoAuth", "click", f.proxy(this.authorizeHandler, this)).delegate(".J_GoBindCellPhone", "click", f.proxy(this.cellPhoneBindingHandler, this)).delegate(".J_ImgShareBtn", "click", f.proxy(this.controlImageShareBtn, this))
    }

    l.prototype.errorMsg = ["重复发表相同内容", "网络连接问题", "操作频率太快", "敏感字符", "认证失败", "其他复杂原因"];
    l.prototype.show = function () {
        ((!this.wrapEl.data("rendered") && this.render) || this.forceFresh) && this.render();
        if (typeof _gaq != "undefined" && _gaq.push) {
            function s(y, x, w, v) {
                switch (y) {
                    case 1:
                        _gaq.push(["_trackEvent", x, w + "_share_sinaweb", v]);
                        break;
                    case 2:
                        _gaq.push(["_trackEvent", x, w + "_share_163web", v]);
                        break;
                    case 3:
                        _gaq.push(["_trackEvent", x, w + "_share_sohuweb", v]);
                        break;
                    case 4:
                        _gaq.push(["_trackEvent", x, w + "_share_qqweb", v]);
                        break;
                    case 6:
                        _gaq.push(["_trackEvent", x, w + "_share_renren", v]);
                        break
                }
            }

            if (this.host.config.shareContentInfo.origin && this.host.config.shareContentInfo.origin.length) {
                var t = this.host.config.shareContentInfo.origin;
                if (t[0] === "booksource" || t[0] === "bookshelf" || t[0] === "tradedetail") {
                    s(this.siteType, t[0], "source", this.shareContentInfo.sourceUuid)
                } else {
                    if (t[0] === "newsreader") {
                        var r, m;
                        switch (t[1]) {
                            case 0:
                                r = "news";
                                m = this.shareContentInfo.articleUuid;
                                break;
                            case 1:
                                r = "news_bottom";
                                m = this.shareContentInfo.articleUuid;
                                break;
                            case 2:
                                r = "source";
                                m = this.shareContentInfo.sourceUuid;
                                break
                        }
                        s(this.siteType, t[0], r, m)
                    }
                }
            } else {
                var q = "", o = "";
                if (this.host.config.shareContentInfo.shareType == 0) {
                    q = "news_share";
                    o = "newsreader_home"
                } else {
                    if (this.host.config.shareContentInfo.shareType == 1) {
                        q = "source_share";
                        o = "newsreader_detail"
                    }
                }
                if (q && o) {
                    switch (this.siteType) {
                        case 1:
                            _gaq.push(["_trackEvent", "newsreader", q, o, "sinaweb"]);
                            break;
                        case 2:
                            _gaq.push(["_trackEvent", "newsreader", q, o, "163web"]);
                            break;
                        case 3:
                            _gaq.push(["_trackEvent", "newsreader", q, o, "sohuweb"]);
                            break;
                        case 4:
                            _gaq.push(["_trackEvent", "newsreader", q, o, "qqweb"]);
                            break;
                        case 6:
                            _gaq.push(["_trackEvent", "newsreader", q, o, "renren"]);
                            break
                    }
                }
            }
        }
        var p = parseInt((f(window).height() - this.wrapEl.outerHeight(true)) / 2);
        var n = parseInt((f(window).width() - this.wrapEl.outerWidth(true)) / 2);
        p += document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
        this.wrapEl.show().css({top: p < 0 ? 0 : p, left: n < 0 ? 0 : n});
        var u = this.wrapEl.find(".J_ImgShareBtn");
        this.imgProcess(u);
        this.wrapEl.data("rendered", true);
        this.wrapEl.data("shown", true)
    };
    l.prototype.hide = function () {
        this.wrapEl.hide();
        this.wrapEl.data("shown", false)
    };
    l.prototype.toggle = function (o) {
        o && o.preventDefault();
        var n = this;
        if (this.wrapEl.data("shown")) {
            this.hide()
        } else {
            if (this.siteType == 7) {
                f.ajax({
                    url: "/login.do?operation=check&_jq_filter=0", error: function () {
                        YD.popTip("出错了，请稍后重试")
                    }
                }).done(function (q) {
                    if (q.loggedIn) {
                        n.shareContentInfo = n.host.config.shareContentInfo || {};
                        n.shareContentInfo.shortUrl = n.shareContentInfo.url;
                        n.shareContentInfo.selfUserName = q.userName;
                        n.shareContentInfo.cellphoneNumber = q.phone;
                        if (q.accountType == 0) {
                            if (q.phoneMailBinded) {
                                n.checkAppInstalledForYixin()
                            } else {
                                n.show();
                                n.wrapEl.find(".bd").empty().html('<p class="need-auth">您的网易邮箱还没绑定手机号，请先去绑定</p>');
                                n.wrapEl.find(".ft").empty().html('<a class="J_Close dis-btn">取消</a><a class="J_GoBindCellPhone btn">绑定</a>')
                            }
                        } else {
                            if (q.accountType == 1) {
                                n.checkAppInstalledForYixin()
                            }
                        }
                    } else {
                        if (typeof yueduLoginModule == "undefined") {
                            login163()
                        } else {
                            yueduLoginModule.open("", [null, false, true])
                        }
                    }
                })
            } else {
                var m = {
                    operation: "checkAuthorization",
                    site: this.siteType,
                    getShortLink: this.host.config.shareContentInfo.textType == -1 ? "false" : "true",
                    url: this.host.config.shareContentInfo.url,
                    getSource: this.host.config.shareContentInfo.textType == -1 ? "false" : "true",
                    sourceUuid: this.host.config.shareContentInfo.sourceUuid
                };
                var p = this.host.config.shareContentInfo.textType;
                if (p == 6 || p == 7) {
                    m.url += "?apresent=1"
                }
                f.ajax({
                    url: this.shareUrl, data: m, type: "POST", dataType: "json", success: function (q) {
                        switch (q.resultCode) {
                            case 0:
                                if (q.isAuthorized) {
                                    n.shareContentInfo = n.host.config.shareContentInfo || {};
                                    n.shareContentInfo.shortUrl = q.shortUrl || "";
                                    n.shareContentInfo.sourceTitle = q.sourceTitle;
                                    n.shareContentInfo.selfUserName = q.userName;
                                    n.show()
                                } else {
                                    n.show();
                                    n.wrapEl.find(".bd").empty().html('<p class="need-auth">您还没有绑定' + n.title + "，请先去绑定</p>");
                                    n.wrapEl.find(".ft").empty().html('<a class="J_Close dis-btn">取消</a><a class="J_GoAuth btn">绑定</a>')
                                }
                                break;
                            case -999:
                                if (typeof yueduLoginModule == "undefined") {
                                    login163()
                                } else {
                                    yueduLoginModule.open()
                                }
                                break;
                            default:
                                YD.popTip("网络出错了，请稍后重试");
                                break
                        }
                    }, error: function () {
                        YD.popTip("网络出错了，请稍后重试")
                    }
                })
            }
        }
    };
    l.prototype.imgProcess = function (o) {
        var m = 75, q = 75;
        var p = o, n = p.width(), r = p.height(), s = n && n / r;
        if (s < 1) {
            p.height(105);
            p.width(105 * n / r);
            this.sendBoxEl.find(".J_ContentArea").width(320)
        } else {
            if (s > 1) {
                p.width(100);
                p.height(100 * r / n);
                this.sendBoxEl.find(".J_ContentArea").width(350)
            } else {
                p.width(75);
                p.height(75);
                this.sendBoxEl.find(".J_ContentArea").width(370)
            }
        }
    };
    l.prototype.controlImageShare = function () {
        this.imageUrlInput = this.sendBoxEl.find('input[name="imageUrl"]');
        this.imageUrlTick = this.sendBoxEl.find(".img-box b")
    };
    l.prototype.controlImageShareBtn = function () {
        if (this.imageUrlShow) {
            YD.popTip("再次点击，加入图片分享");
            this.imageUrlShow = 0
        }
        if (this.imageUrlInput.val().length) {
            this.imageUrlInput.val("")
        } else {
            this.imageUrlInput.val(this.shareContentInfo.imageUrl)
        }
        this.imageUrlTick.toggle()
    };
    l.prototype.render = function () {
        this.sendBoxEl && this.sendBoxEl.remove();
        this.atFriendsEl && this.atFriendsEl.hide();
        var w = this;
        var n = "";
        this.shareContentInfo = this.shareContentInfo || this.host.config.shareContentInfo || {};
        var t = this.shareContentInfo.textType || 0;
        var p = this.shareContentInfo.articleTitle || this.shareContentInfo.sourceTitle;
        var u = this.shareContentInfo.subjectId || this.shareContentInfo.articleUuid || this.shareContentInfo.sourceUuid;
        var m = this.shareContentInfo.sourceUuid;
        var r = this.shareContentInfo.shortUrl || this.shareContentInfo.url || "";
        var v = this.shareContentInfo.imageUrl || "";
        var o = this.shareContentInfo.imageDescription || "";
        var q = this.shareContentInfo.cellphoneNumber || "";
        var s = '<div class="hd"><h4 class="t-' + this.itemClass + '"><i></i>' + this.title + '分享</h4><a href="#" class="close J_Close">关闭</a></div><div class="bd"><form><div class="textarea-box"><textarea class="J_ContentArea" name="message"></textarea><div class="img-box"><img class="J_ImgShareBtn" src="' + v + '" /><b></b></div><a href="#" class="at-friends J_ToAtFriends" style="display:none;">@' + this.title + '好友</a></div><input type="hidden" name="site" value="' + this.siteType + '" /><input type="hidden" name="sourceUuid" value="' + m + '" /><input type="hidden" name="subjectId" value="' + u + '"/><input type="hidden" name="title" value="' + j(p) + '"/><input type="hidden" name="shareType" value="' + this.shareContentInfo.shareType + '" /><input type="hidden" name="url" value="' + r + '" /><input type="hidden" name="imageUrl" value="' + v + '" /><input type="hidden" name="imageDescription" value="' + o + '" /><input type="hidden" name="operation" value="publishSingle" /></form></div><div class="ft"><p>还可输入<span class="J_WordCount">' + this.maxWordCount + '</span>字</p><a href="#" class="btn J_Send">发送</a></div>';
        this.sendBoxEl = f("<div>").addClass("J_SendBox").html(s);
        this.wrapEl.append(this.sendBoxEl).appendTo("body");
        if (v.length > 0 && this.imgSupport) {
            this.controlImageShare()
        } else {
            this.sendBoxEl.find(".img-box").hide()
        }
        this.wordCount = this.sendBoxEl.find(".J_WordCount");
        this.contentArea = this.sendBoxEl.find(".J_ContentArea");
        if (this.atFriends) {
            this.sendBoxEl.find(".J_ToAtFriends").show()
        }
        if (this.siteType == 7) {
            f('<span class="cellphone-yixin">绑定的手机尾号：<strong>' + q.substr(-3) + '</strong>|<a href="#" class="J_GoBindCellPhone">我要修改</a></span>').appendTo(this.wrapEl.find(".ft p"));
            f('<label class="J_TipLabel">点击发送，直接分享</label>').insertAfter(this.wrapEl.find(".J_ContentArea"))
        } else {
            if (this.shareContentInfo.custom) {
                n = "//“" + this.shareContentInfo.articleTitle + "”。网易云阅读支持rss等个性订阅， 强烈推荐~"
            } else {
                switch (t) {
                    case 0:
                        n = "//正在看《" + this.shareContentInfo.sourceTitle + "》的“" + this.shareContentInfo.articleTitle + "”。来自网易云阅读";
                        break;
                    case 1:
                        n = "//正在看《" + this.shareContentInfo.sourceTitle + "》。来自网易云阅读";
                        break;
                    case 2:
                        n = "//正在看《" + this.shareContentInfo.sourceTitle + "》。来自网易云阅读";
                        break;
                    case 3:
                        n = "//我打赏了作品《" + this.shareContentInfo.sourceTitle + "》，好书需要分享，阅读丰富生活。";
                        break;
                    case 4:
                        n = "//我给作品《" + this.shareContentInfo.sourceTitle + "》投了一张月票，好书需要分享，阅读丰富生活。";
                        break;
                    case 5:
                        n = "//我正在 @网易云阅读 看《" + this.shareContentInfo.sourceTitle + "》，现在读可以免费哦。";
                        break;
                    case 6:
                        n = "//我在 @网易云阅读 看到《" + this.shareContentInfo.sourceTitle + "》写的不错，免费送一些写的VIP章节给大家，快来领取跟我一起看吧。";
                        break;
                    case 7:
                        n = "//我在 @网易云阅读 看到《" + this.shareContentInfo.sourceTitle + "》写的不错，有读者免费赠送了VIP章节给大家，快来领取一起看吧。";
                        break;
                    case -1:
                        n = this.shareContentInfo.textCustomTemplate;
                    default:
                        break
                }
            }
            if (t != -1) {
                n += this.shareContentInfo.shortUrl
            }
            this.contentArea.val(n);
            this.defaultContentStr = n
        }
        this.contentArea.fieldSelection(0, 0);
        this.refreshWordCount();
        this.clearFriendsCheckedResult()
    };
    l.prototype.renderToFriendsList = function (n) {
        n && n.preventDefault();
        this.sendBoxEl.hide();
        if (this.atFriendsEl) {
            this.atFriendsEl.show()
        } else {
            var m = '<div class="hd"><h4 class="t-' + this.itemClass + '"><i></i>@' + this.title + '好友</h4><a href="#" class="close J_CancelToStepOne">关闭</a></div><div class="bd"><div class="friends"><div class="friends-filter-input"><input type="text" class="J_FriendsFilterInput" value="" /><label>输入昵称筛选好友</label></div><ul class="friends-list J_FriendsList"></ul><ul class="friends-result J_FriendsResult"></ul></div></div><div class="ft"><p>已选择好友<span class="J_FriendsSelectedCount">0</span>位</p><a href="#" class="btn J_FriendsSelectedOk">确定</a></div>';
            this.atFriendsEl = f("<div>").addClass("J_AtFriends").html(m);
            this.friendsListEl = this.atFriendsEl.find(".J_FriendsList");
            this.friendsReusltEl = this.atFriendsEl.find(".J_FriendsResult");
            this.friendsSelectedCountEl = this.atFriendsEl.find(".J_FriendsSelectedCount");
            this.wrapEl.append(this.atFriendsEl);
            this.renderFriendsList()
        }
    };
    l.prototype.renderFriendsList = function () {
        var m = this;
        f.ajax({
            url: this.shareUrl,
            data: {operation: "friends", site: this.siteType},
            dataType: "json",
            success: function (n) {
                if (n.resultCode == 0 && n.data.successful) {
                    var o = '<% for(var i = 0; i < friends.length; i++){ %><% if(!friends[i].isFiltered){ %><li class="<% if(i%2==1){ %>eq<% } %>"><input data-symbolicname="<%= friends[i].symbolicName %>" data-nickname="<%= friends[i].nickName %>" name="userid" value="<%= friends[i].userId %>" type="checkbox" /><%= friends[i].nickName %></li><% } %><% } %>';
                    var q = template.compile(o);
                    var p = q(n.data);
                    m.friendsListEl.html(p)
                }
            },
            error: function () {
                YD.popTip("出错了，请稍后重试");
                m.atFriendsEl.remove();
                m.sendBoxEl.show()
            }
        })
    };
    l.prototype.checkPretty = function (r) {
        var s = r.target;
        var p;
        if (s.nodeName == "LI") {
            p = f(s).find("input")
        } else {
            p = f(s).parents("li").find("input")
        }
        var o = !p.prop("checked");
        o = s.nodeName == "INPUT" ? !o : o;
        if (o) {
            p.prop("checked", o);
            var q = f("<li>").html("<span></span><i></i>").attr("data-userid", p.val()).attr("data-nickname", p.data("nickname")).attr("data-symbolicname", p.data("symbolicname"));
            var m = document.createTextNode("");
            var n = p.data("nickname");
            m.nodeValue = n.length < 15 ? n : n.substring(0, 15) + "...";
            q.find("span").append(m);
            this.friendsReusltEl.append(q);
            this.friendsCheckedLength++
        } else {
            p.prop("checked", o);
            this.friendsReusltEl.find("li[data-userid=" + p.val() + "]").remove();
            this.friendsCheckedLength--
        }
        this.friendsSelectedCountEl.text(this.friendsCheckedLength)
    };
    l.prototype.deleteFriendsItem = function (o) {
        o && o.preventDefault();
        var n = f(o.target).parents("li");
        var m = n.data("userid");
        n.remove();
        this.friendsListEl.find("input[value=" + m + "]").prop("checked", false);
        this.friendsCheckedLength--;
        this.friendsSelectedCountEl.text(this.friendsCheckedLength)
    };
    l.prototype.clearFriendsCheckedResult = function () {
        this.friendsListEl && this.friendsListEl.find("input").prop("checked", false);
        this.friendsReusltEl && this.friendsReusltEl.empty();
        this.friendsSelectedCountEl && this.friendsSelectedCountEl.text(0);
        this.friendsCheckedLength && (this.friendsCheckedLength = 0)
    };
    l.prototype.authorizeHandler = function (m) {
        m && m.preventDefault();
        this.hide();
        window.open(this.shareUrl + "&operation=authorize&site=" + this.siteType)
    };
    l.prototype.cellPhoneBindingHandler = function (m) {
        m && m.preventDefault();
        this.hide();
        window.open("https://reg.163.com/mobilealias/replaceAliasIndex.do?noheader=0")
    };
    l.prototype.friendsFilterHandler = function (o) {
        var p = f(o.target);
        var n = f.trim(p.val());
        var m = this;
        if (n.length) {
            p.next().fadeOut(100);
            this.filterTimer && window.clearTimeout(this.filterTimer);
            this.filterTimer = window.setTimeout(function () {
                m.friendsListEl.find("input").each(function () {
                    if (f(this).data("nickname").indexOf(n) == -1) {
                        f(this).parent().hide()
                    } else {
                        f(this).parent().show()
                    }
                })
            }, 200)
        } else {
            p.next().fadeIn(100);
            this.friendsListEl.find("li").show()
        }
    };
    l.prototype.textareaInputHandler = function (m) {
        if (this.contentArea.val().length) {
            this.wrapEl.find(".J_TipLabel").fadeOut(100)
        } else {
            this.wrapEl.find(".J_TipLabel").fadeIn(100)
        }
        this.refreshWordCount()
    };
    l.prototype.refreshWordCount = function () {
        var m = this.maxWordCount - this.contentArea.val().length;
        this.wordCount.text(m);
        if (m < 0) {
            this.wordCount.css("color", "#c00")
        } else {
            this.wordCount.css("color", "#666")
        }
    };
    l.prototype.friendsSelectedOkHandler = function (n) {
        n && n.preventDefault();
        var p = [];
        var m = this.friendsReusltEl.find("li");
        m.each(function () {
            var q = f(this).data("symbolicname") || f(this).data("nickname");
            p.push("@" + q)
        });
        this.atFriendsEl.hide();
        this.clearFriendsCheckedResult();
        this.sendBoxEl.show();
        var o = p.length ? p.join(" ") + " " : "";
        this.contentArea.fieldSelection(o);
        this.refreshWordCount()
    };
    l.prototype.friendsSelectedCancelHandler = function (m) {
        m && m.preventDefault();
        this.clearFriendsCheckedResult();
        this.friendsSelectedOkHandler()
    };
    l.prototype.sendHandler = function (o) {
        o && o.preventDefault();
        if (this.contentArea.val().length > this.maxWordCount) {
            return
        }
        var n = this;
        var m = f(o.target);
        if (this.isBlocking) {
            return
        }
        this.isBlocking = true;
        m.addClass("dis-btn").text("发送中");
        f.ajax({
            url: this.shareUrl,
            type: "POST",
            dataType: "json",
            data: this.wrapEl.find("form").serializeArray(),
            success: function (p) {
                switch (p.resultCode) {
                    case 0:
                        YD.popTip("分享成功");
                        n.toggle();
                        break;
                    case -999:
                        if (typeof yueduLoginModule == "undefined") {
                            login163()
                        } else {
                            yueduLoginModule.open()
                        }
                        break;
                    case -1:
                        if (p.data && typeof(p.data.error) == "number" && p.data.error > 0) {
                            YD.popTip(n.errorMsg[p.data.error - 1])
                        } else {
                            YD.popTip("出错了，请稍后重试")
                        }
                        break;
                    default:
                        break
                }
                n.isBlocking = false;
                m.removeClass("dis-btn").text("发送")
            },
            error: function () {
                YD.popTip("出错了，请稍后重试");
                n.isBlocking = false;
                m.removeClass("dis-btn").text("发送")
            }
        })
    };
    l.prototype.checkAppInstalledForYixin = function () {
        var m = this;
        f.ajax({
            url: "/yiXin.do?operation=verifyUser", error: function () {
                YD.popTip("网络出错了，请稍后重试")
            }
        }).done(function (n) {
            if (!n.verified) {
                m.show();
                m.wrapEl.find(".bd").empty().html('<div class="install-yixin"><div class="text-tip">您绑定的号（' + m.shareContentInfo.cellphoneNumber + '<a href="#" class="J_GoBindCellPhone">修改</a>）未开通易信，可扫描二维码安装注册</div><div class="code"></div></div>');
                m.wrapEl.find(".ft").remove()
            } else {
                m.show()
            }
        })
    };

    function d() {
        k.call(this);
        this.title = "邮件分享";
        this.itemClass = "email";
        this.yueduCheckLoginUrl = "/login.do?operation=check&_jq_filter=0";
        this.yueduContactGetUrl = "/shareByMailForm.do?_jq_filter=0";
        this.mail163ContactIframeUrl = "/getMatil.html";
        this.sendMailUrl = "/shareByMail.do?_jq_filter=0";
        this.checkCodeUrl = "/capthca.do";
        this.forceFresh = true;
        this.siteType = 10;
        this.reciverArray = [];
        this.wrapEl.delegate(".J_ContactToggler", "click", f.proxy(this.contactBookToggleHandler, this)).delegate(".J_ContactList input", "click", f.proxy(this.contactCheckHandler, this)).delegate(".J_Addme", "click", f.proxy(this.addMeHandler, this)).delegate(".J_ReciverInput", "keyup", f.proxy(this.reciverInputHandler, this)).delegate(".J_Ok", "click", f.proxy(this.sendMailHandler, this)).delegate(".J_ChangeCheckCode", "click", f.proxy(this.checkCodeChangeHandler, this))
    }

    g.inherits(d, k);
    d.prototype.render = function (m) {
        if (typeof _gaq != "undefined" && _gaq.push) {
            if (this.host.config.shareContentInfo.origin && this.host.config.shareContentInfo.origin.length) {
                var o = this.host.config.shareContentInfo.origin;
                if (o[0] === "booksource" || o[0] === "bookshelf" || o[0] === "tradedetail") {
                    _gaq.push(["_trackEvent", o[0], "source_share_mail", this.host.config.shareContentInfo.sourceUuid])
                } else {
                    if (o[0] === "newsreader") {
                        var t, s;
                        switch (o[1]) {
                            case 0:
                                t = "news";
                                s = this.host.config.shareContentInfo.articleUuid;
                                break;
                            case 1:
                                t = "news_bottom";
                                s = this.host.config.shareContentInfo.articleUuid;
                                break;
                            case 2:
                                t = "source";
                                s = this.host.config.shareContentInfo.sourceUuid;
                                break
                        }
                        _gaq.push(["_trackEvent", o[0], t + "_share_mail", s])
                    }
                }
            } else {
                if (this.host.config.shareContentInfo.shareType == 0) {
                    _gaq.push(["_trackEvent", "newsreader", "news_share", "newsreader_home", "mail"])
                } else {
                    if (this.host.config.shareContentInfo.shareType == 1) {
                        _gaq.push(["_trackEvent", "newsreader", "source_share", "newsreader_detail", "mail"])
                    }
                }
            }
        }
        if (m.foreign) {
            YD.popTip("您登录的帐号不是网易邮箱账号，不能使用邮件分享功能");
            return false
        }
        var n = '<div class="hd"><h4 class="t-email"><i></i>' + this.title + '</h4><a href="#" class="close J_Close">关闭</a></div><div class="bd"><dl class="email-body"><dt>收件人<span class="J_ReciverCountTip">（用分号分隔多个邮箱地址，最多支持10个地址）</span></dt><dd><div><input type="text" name="" class="text J_ReciverInput" /></div><div class="add-me"><label><input type="checkbox" class="J_Addme" />将我加入收件人列表</label></div></dd><dt>标题</dt><dd><input type="text" name="title" value="【分享文章】<%= emailShareTitle %>" class="text" disabled="disabled" /></dd><dt>附加评论</dt><dd><textarea disabled="disabled" name="message">好文分享：“<%= emailShareTitle %>”。网易云阅读的订阅源《<%= sourceTitle %>》不错， 值得一看~</textarea></dd><dt class="J_CheckCode" style="display:none;">验证码</dt><dd class="verification J_CheckCode" style="display:none;"><input type="text" class="text J_CheckCodeInput" /><img src="" /><a href="#" class="J_ChangeCheckCode">看不清？换一张</a></dd></dl><div class="contact-book J_ContactBook"><div class="contact-book-tab"><a href="#" data-target="J_RecentList" class="on J_ContactToggler">最近使用</a><a href="#" data-target="J_163MailList" class="J_ContactToggler">163邮箱通讯录</a></div><div class="contact-book-content J_ContactList"><ul class="J_RecentList"></ul><ul class="J_163MailList" style="display:none;"></ul></div></div></div><div class="ft"><a href="#" class="ok J_Ok">发送</a><a href="#" class="cacel J_Close">取消</a></div>';
        var r = this.host.config.shareContentInfo || {};
        r.emailShareTitle = this.host.config.shareContentInfo.articleTitle || this.host.config.shareContentInfo.sourceTitle;
        var q = template.compile(n);
        var p = q(r);
        this.wrapEl.addClass("email-overlay").html(p).appendTo("body");
        this.reciverArray = [];
        this.needCheckCode = false;
        this.contactBookEl = this.wrapEl.find(".J_ContactBook");
        this.reciverInputEl = this.wrapEl.find(".J_ReciverInput");
        this.reciverCountTip = this.wrapEl.find(".J_ReciverCountTip");
        this.checkCodeInput = this.wrapEl.find(".J_CheckCodeInput");
        this.renderContactBook()
    };
    d.prototype.renderContactBook = function () {
        var m = this;
        f("<iframe>").attr("src", this.mail163ContactIframeUrl).css({
            height: 0,
            width: 0,
            visibility: "hidden"
        }).appendTo("body");
        window.MC = window.MC || {};
        var n = MC.mailCall;
        MC.mailCall = function (r) {
            var q = '<% for(var i=0; i<list.length; i++){ if(list[i]){ %><li><label><input type="checkbox" value="<%= list[i] %>" /><%= list[i] %></label></li><% }} %>';
            var p = template.compile(q);
            var o = p({list: r});
            m.contactBookEl.find(".J_163MailList").html(o);
            MC.mailCall = n
        };
        f.ajax({
            url: this.yueduCheckLoginUrl, dataType: "json", success: function (o) {
                if (o.state == "login") {
                    f.ajax({
                        url: m.yueduContactGetUrl, dataType: "json", success: function (p) {
                            if (p.resultCode == 0) {
                                var s = '<% for(var i=0; i<list.length; i++){ if(list[i].contactAddr){ %><li><label><input type="checkbox" value="<%= list[i].contactAddr %>" /><%= list[i].contactAddr %></label></li><% }} %>';
                                var r = template.compile(s);
                                var q = r({list: p.contacts});
                                m.contactBookEl.find(".J_RecentList").html(q);
                                m.host.config.shareContentInfo.userName = p.userName;
                                if (p.checkCode) {
                                    m.needCheckCode = true;
                                    m.wrapEl.find(".J_CheckCode").show().find("img").attr("src", m.checkCodeUrl + "?" + (new Date).getTime())
                                }
                            }
                        }, error: function () {
                            YD.popTip("获取邮箱通讯录出错，请刷新重试")
                        }
                    })
                }
            }
        })
    };
    d.prototype.contactBookToggleHandler = function (m) {
        m && m.preventDefault();
        var n = f(m.target);
        this.contactBookEl.find(".J_ContactToggler").removeClass("on");
        n.addClass("on");
        this.contactBookEl.find("ul").hide();
        this.contactBookEl.find("." + n.data("target")).show()
    };
    d.prototype.updateReciver = function (m) {
        if (f.inArray(m, this.reciverArray) == -1) {
            if (this.reciverArray.length < 10) {
                this.reciverArray.push(m)
            } else {
                this.reciverCountTip.css("color", "#c00")
            }
        } else {
            for (var n = 0; n < this.reciverArray.length; n++) {
                if (this.reciverArray[n] == m) {
                    this.reciverArray.splice(n, 1)
                }
            }
            this.reciverCountTip.css("color", "#999")
        }
        this.reciverInputEl.val(this.reciverArray.join(";"))
    };
    d.prototype.contactCheckHandler = function (m) {
        if (this.reciverArray.length >= 10) {
            m && m.preventDefault()
        }
        this.updateReciver(f(m.target).val())
    };
    d.prototype.checkCodeChangeHandler = function (m) {
        m && m.preventDefault();
        this.wrapEl.find(".J_CheckCodeInput").next().attr("src", this.checkCodeUrl + "?" + (new Date).getTime())
    };
    d.prototype.addMeHandler = function (m) {
        this.updateReciver(this.host.config.shareContentInfo.userName)
    };
    d.prototype.reciverInputHandler = function (n) {
        this.inputTimer && window.clearTimeout(this.inputTimer);
        var m = this;
        var o = n.target;
        this.inputTimer = window.setTimeout(function () {
            var p = o.value.split(";")
        }, 300)
    };
    d.prototype.sendMailHandler = function (r) {
        r && r.preventDefault();
        var n = f(r.target);
        if (this.isBlocking) {
            return
        }
        this.isBlocking = true;
        n.text("发送中");
        var u = this;
        var m = f.trim(this.reciverInputEl.val());
        var o = this.host.config.shareContentInfo || {};
        var q = f.trim(this.wrapEl.find("input[name=title]").val());
        var s = f.trim(this.wrapEl.find("textarea[name=message]").val());
        var p = f.trim(this.checkCodeInput.val());
        if (!m || !q || !s) {
            YD.popTip("信息填写不完整，请检查");
            this.isBlocking = false;
            return
        }
        if (this.reciverArray.length > 10) {
            YD.popTip("收件人不能超过10个");
            this.isBlocking = false;
            return
        }
        if (this.needCheckCode && !p) {
            YD.popTip("请输入验证码");
            this.isBlocking = false;
            return
        }
        var t = {
            receivers: m,
            title: s,
            content: q,
            sourceUuid: o.sourceUuid,
            entryID: o.articleUuid,
            posttime: o.posttime,
            url: o.url,
            code: this.checkCodeInput.val()
        };
        if (o.custom) {
            t.content = o.contentForEmailShare
        }
        f.ajax({
            url: this.sendMailUrl, type: "POST", data: t, dataType: "json", success: function (v) {
                switch (v.resultCode) {
                    case 0:
                        YD.popTip("发送成功");
                        u.toggle();
                        break;
                    case -1:
                        YD.popTip("验证码错误！");
                        u.checkCodeChangeHandler();
                        break;
                    case -2:
                        YD.popTip("每天最多100封");
                        break;
                    case -3:
                        YD.popTip("接收人无效");
                        break;
                    case -6:
                        YD.popTip("非网易邮箱账号，不能使用邮件分享功能");
                        break;
                    default:
                        YD.popTip("发送失败，未知错误");
                        break
                }
                u.isBlocking = false;
                n.text("发送")
            }, error: function () {
                YD.popTip("出错了，请稍后重试");
                u.isBlocking = false;
                n.text("发送")
            }
        })
    };
    window.ydSns = {};
    window.ydSns.init = function (y) {
        this.yueduSnsInstance = new e({triggerClass: y.selector});
        var o = new c();
        var x = new b();
        var v = new h();
        var q = {};
        var r = new l({
            title: "易信朋友圈",
            itemClass: "yixin",
            getFriendsUrl: "",
            forceFresh: true,
            siteType: 7,
            atFriends: false,
            maxWordCount: 150,
            imgSupport: false,
            shareUrl: "/yiXin.do?operation=addFeed"
        });
        var s = new l({
            title: "新浪微博",
            itemClass: "sina-weibo",
            getFriendsUrl: "",
            forceFresh: true,
            siteType: 1,
            atFriends: true,
            imgSupport: true,
            maxWordCount: 140
        });
        var n = new l({
            title: "腾讯微博",
            itemClass: "qq-weibo",
            getFriendsUrl: "",
            forceFresh: true,
            siteType: 4,
            atFriends: true,
            imgSupport: true,
            maxWordCount: 140
        });
        var t = new l({
            title: "网易微博",
            itemClass: "netease-weibo",
            getFriendsUrl: "",
            forceFresh: true,
            siteType: 2,
            atFriends: false,
            imgSupport: true,
            maxWordCount: 163
        });
        var m = new l({
            title: "搜狐微博",
            itemClass: "sohu-weibo",
            getFriendsUrl: "",
            forceFresh: true,
            siteType: 3,
            atFriends: false,
            imgSupport: false,
            maxWordCount: 1000
        });
        var p = new l({
            title: "人人网",
            itemClass: "renren",
            getFriendsUrl: "",
            forceFresh: true,
            siteType: 6,
            atFriends: false,
            imgSupport: true,
            maxWordCount: 200
        });
        var u = new d();
        var w = new l({
            title: "QQ空间",
            itemClass: "qzone",
            getFriendsUrl: "",
            forceFresh: true,
            siteType: 6,
            atFriends: false,
            imgSupport: false,
            maxWordCount: 200
        });
        this.yueduSnsInstance.addPlugin(o).addPlugin(r).addPlugin(x).addPlugin(v).addPlugin(s).addPlugin(n).addPlugin(t).addPlugin(m).addPlugin(p).addPlugin(u).addPlugin(w)
    };
    window.ydSns.getInstance = function () {
        return this.yueduSnsInstance
    };
    f(function () {
        var m = "J_YueduSNS";
        window.ydSns.init({selector: m})
    })
})(jQuery);