var YD = {};
YD.starsAll = function (f) {
    var d = $(f), e = $(".sc", d), b = $(".sm", d), g = 1, a = 1, h = [], c = 125;
    b.each(function () {
        var i = parseInt($(this).text());
        g = g + i;
        if (a < i) {
            a = i
        }
        h.push(i)
    });
    e.each(function (i) {
        $(this).width((h[i] / g) * c / (a / g))
    })
};
YD.stars = function (b) {
    var a = $((b + " span")), c = ["真差劲", "不如意", "一般般", "挺好的", "棒极了"];
    a.each(function (d) {
        $(this).attr("title", c[d]);
        $(this).mouseover(function () {
            for (var e = 0; e <= d; e++) {
                $(a[e]).removeClass("no")
            }
            for (var f = d + 1; f < c.length; f++) {
                $(a[f]).addClass("no")
            }
        })
    })
};
YD.setFixed = function (b) {
    var e = $(b), a = 95, f, c;
    setTimeout(function () {
        f = $(window).scrollTop();
        d()
    }, 100);

    function d() {
        if (f > a) {
            e.animate({top: (f - a)})
        }
        if (f <= a) {
            e.animate({top: 0})
        }
    }

    $(window).scroll(function () {
        setTimeout(function () {
            f = $(document).scrollTop();
            d()
        }, 100)
    })
};
YD.heightCal = function (d) {
    var c = $(d).offset().top, b = $(window).height(), a = 12;
    $(d).height(b - c - a)
};
YD.popTip = function (d) {
    var a = '<div id="J_FIXED" class="m-tipss" style="display:none;"><div id="J_TIPS" class="inner"></div></div>';
    if ($("#J_FIXED").length == 0) {
        $("body").prepend(a)
    }
    var c = d, b = $("#J_TIPS");
    b.empty().html(c);
    b.parent().fadeIn(300).delay(3000).fadeOut(300)
};
YD.yuedian = function () {
    var a = '<div class="m-yuedian"><p>网易云阅读虚拟币正式从丁丁币改为<em>阅点</em></p></div>';
    $(".m-logo").after(a);
    $(".m-yuedian").click(function () {
        $(this).fadeOut(300)
    })
};
YD.popTipClose = function (f, c, b) {
    if (c && $.cookie(b) === "showed") {
        return
    }
    var e = $("#J_FIXED_X");
    if (e.length == 0) {
        var a = '<div id="J_FIXED_X" class="m-tipss" style="display:none;"><div id="J_TIPS_X" class="inner"><p></p></div></div>';
        e = $(a).appendTo($("body"))
    }
    var d = $("#J_TIPS_X p");
    d.empty().html(f);
    d.append('<a class="close" href="javascript:;"></a>');
    $(".close", e).click(function () {
        if (c) {
            $.cookie(b, "showed", {path: "/", domain: "yuedu.163.com", expires: 365})
        }
        e.fadeOut(300)
    });
    $(".link", e).click(function () {
        if (c) {
            $.cookie(b, "showed", {path: "/", domain: "yuedu.163.com", expires: 365})
        }
        e.fadeOut(300)
    });
    e.fadeIn(500)
};
YD.popTipLayer = function (d) {
    var a = '<div class="m-layer m-layer-2 m-layer-4" id="infoTip">		    <div class="lytt yy"><h4>提示</h4><a class="lyclose j-close" href="#">关闭</a></div>		    <div class="lyct">		        <div class="m-removeyuan">					<h3 style="line-height:26px;height:71px;"></h3>					<div class="bt">						<button class="j-close">知道了</button>					</div>		        </div>		    </div>		</div>';
    if ($("#infoTip").length == 0) {
        $("body").append(a)
    }
    var c = d, b = $("#infoTip");
    $("#infoTip").css("z-index", 10001);
    $("#infoTip .lyct h3").html(c);
    YD.openLayer("#infoTip")
};
YD.createLayer = function (b) {
    var c = {};
    var d = {id: 1, size: 1, type: 1, title: "", content: "", openby: "screen", callback: null};
    c = $.extend({}, d, b);
    if ($("#" + c.id).length == 0) {
        var a = '<div id="J_NY1" class="m-newlayer m-newlayer-s1" style="display:none;">			<h2><span>这里是标题</span><a href="javascript:void(0)" class="j-close"></a></h2>			<div class="inner">				<div class="content">					<p>sdfdfas</p>				</div>				<div class="button">					<a class="cc j-close">取&nbsp;&nbsp;消</a>					<a class="ok">确&nbsp;&nbsp;定</a>				</div>			</div>		</div>';
        $(".g-doc").append(a)
    }
    YD.openLayer("#J_NY1")
};
YD.openLayer = function (g, k) {
    var f = $(g), j = f.width(), c = f.height(), d = $(window).width(), e = $(window).height();
    var b = k == "off" ? "off" : "on";
    setTimeout(function () {
        if (b == "on") {
            YD.createMask()
        }
    }, 60);
    var i = $(document).scrollTop(), h = (e - c) / 2 + i, a = (d - j) / 2;
    f.css({top: h, left: a, "z-index": 8999}).show();
    $(".j-close", f).unbind().click(function (l) {
        l.preventDefault();
        f.trigger("hide");
        f.hide();
        if ($(".m-mask").length !== 0) {
            $(".m-mask").hide()
        }
    })
};
YD.createMask = function () {
    if ($(".m-mask").length === 0) {
        var a = $('<div class="m-mask" style="display:block;"></div>');
        a.height($(document).height());
        a.insertAfter($(".g-doc"))
    } else {
        $(".m-mask").eq(0).height($(document).height()).show()
    }
};
YD.backToTop = function (e, b) {
    var f;
    switch (b) {
        case"green":
            f = "m-backandback-g";
            break;
        case"blue":
            f = "m-backandback-b";
            break;
        case"orange":
            f = "m-backandback-o";
            break;
        case"red":
            f = "m-backandback-r";
            break;
        case"pink":
            f = "m-backandback-p";
            break
    }
    var d = $(e).offset().left;
    var g = '<div class="m-backandback ' + f + '"><a id="J_GoBack" title="回到顶部" href="javascript:;" class="up"></a><a title="反馈意见" target="_blank" href="http://fankui.163.com/ft/comment.fb?pid=11001" class="down"></a></div>';
    var a = $(g).appendTo($(".g-doc")).css({right: 0});
    $("#J_GoBack").click(function () {
        $("html, body").animate({scrollTop: 0}, 300)
    });
    $(window).resize(function () {
        d = $(e).offset().left;
        a.css({right: 0})
    });
    var c = function () {
        var h = $(document).scrollTop(), i = $(window).height();
        (h > 0) ? $("#J_GoBack").show() : $("#J_GoBack").hide();
        if (!window.XMLHttpRequest) {
            a.css("top", h + i - 166)
        }
    };
    $(window).bind("scroll", c);
    $(function () {
        c()
    })
};
YD.drag = function (d) {
    var b = false;
    var c, a;
    $(d).click(function () {
    })
};
YD.generator = function () {
    var a = function (l, f) {
        var d, e, m, j, g, n, h = [], o = [];
        f = f || 0;
        g = f;
        if (l.substr(f, 1) !== "{") {
            l = "{ " + l
        }
        d = l.indexOf("{", g + 1);
        e = l.indexOf("}", g + 1);
        if (d < e) {
            while (d > -1) {
                e = l.indexOf("}", g);
                if (e === -1) {
                    e = l.length
                }
                if (d < e) {
                    (d > g) && h.push(l.substring(g, d));
                    m = a(l, d);
                    g = m.end + 1;
                    h.push(m.data);
                    d = l.indexOf("{", g)
                } else {
                    d = -1
                }
            }
        }
        e = l.indexOf("}", g);
        if (e === -1) {
            e = l.length
        }
        h.push(l.substring(g, e));
        m = {data: "", end: e};
        var k = h[0], i;
        if (k && k.substr && k.substr(0, 1) === "{") {
            i = k.indexOf(" ");
            if (i > 0) {
                n = k.substring(1, i);
                h[0] = k.substr(i + 1);
                m.data = {key: n, parts: h}
            } else {
                n = k.substr(1);
                m.data = "{" + n + "}"
            }
        }
        return m
    };
    var b = function (e, h) {
        var m = function (i) {
            return i instanceof Array
        }, n = function n(j, i) {
            if (!(Object.prototype.toString.call(j) === "[object String]")) {
                return ""
            }
            if (!(Object.prototype.toString.call(i) === "[object Object]" && "isPrototypeOf" in i)) {
                return j
            }
            return j.replace(/\{([^{}]+)\}/g, function (q, r) {
                var s = i[r];
                return (s !== undefined) ? "" + s : ""
            })
        }, l = [], g = e.parts, d, k, f, p = [], o;
        if (!h) {
            return ""
        }
        if (m(h)) {
            for (k = 0; k < h.length; ++k) {
                l.push(b(e, h[k]))
            }
        } else {
            for (k = 0; k < g.length; ++k) {
                d = g[k];
                if (typeof d === "string") {
                    p.push(d)
                } else {
                    if (p.length > 0) {
                        l.push(n(p.splice(0, p.length).join(""), h))
                    }
                    l.push(b(d, d.key ? h[d.key] : h))
                }
            }
            if (p.length > 0) {
                l.push(n(p.splice(0, p.length).join(""), h))
            }
        }
        return l.join("")
    };
    var c = function (e, g) {
        var f, d;
        if (typeof e === "string") {
            f = a("{root " + e + "}");
            d = f.data
        } else {
            if (e.key && e.parts) {
                d = e
            }
        }
        return b(d, g)
    };
    return {
        parse: function (d) {
            return a("{root " + d + "}").data
        }, process: c
    }
}();