(function (a) {
    a.fn.goSlider = function (f) {
        var B = {};
        var q = {
            sliderWrap: "ul.j-slider",
            sliderItem: "ul.j-slider li",
            animation: "fade",
            switchMotion: "on",
            animationDuration: 400,
            autoDuration: 5000,
            automatic: true,
            hoverPause: true,
            showControl: true,
            controlWrap: "ol.j-control",
            controlItem: "ol.j-control li",
            controlLeft: ".j-cl",
            controlRight: ".j-cr",
            orientation: "horizontal",
            multipleShow: false,
            action: "hover",
            stopClass: [],
            callBackEvent: function () {
                a.noop()
            }
        };
        B = a.extend({}, q, f);
        var r = this, i = this.find(B.sliderWrap), y = this.find(B.sliderItem), v = y.length, c = y.outerWidth(),
            t = y.outerHeight(), s = false, C = false, j = 0, w = 0, F = 1, h = y.eq(0), k, p = "forward",
            m = "backward", l = this.find(B.controlWrap), A = l.children(), e = this.find(B.controlLeft),
            g = this.find(B.controlRight), o;
        var E = function () {
            if (v <= 1) {
                return
            }
            if (B.animation === "fade") {
                y.not(":first").hide();
                y.css({position: "absolute", top: "0", left: 0})
            } else {
                if (B.animation === "slide") {
                    var H = y.eq(0), G = y.eq(v - 1);
                    H.clone().addClass("clone").appendTo(i);
                    G.clone().addClass("clone").prependTo(i);
                    if (B.multipleShow) {
                        var I = y.eq(v - 2);
                        I.clone().addClass("clone").prependTo(i)
                    }
                    y = i.children();
                    v = y.length;
                    if (B.orientation === "horizontal") {
                        i.css({width: c * v, left: -c});
                        y.css({"float": "left", position: "relative", display: "inline"})
                    }
                    if (B.orientation === "vertical") {
                        i.css({top: -t});
                        y.css({position: "relative", display: "block"})
                    }
                }
            }
            if (A.length > 0 && B.showControl) {
                A.eq(0).addClass("j-crt")
            }
        };
        var u = function (G) {
            if (B.animation === "fade") {
                if (G === p) {
                    h.next().length ? w++ : w = 0
                } else {
                    if (G === m) {
                        h.prev().length ? w-- : w = v - 1
                    }
                }
            }
            if (B.animation === "slide") {
                if (G === p) {
                    w = F + 1
                } else {
                    if (G === m) {
                        w = F - 1
                    }
                }
            }
            return w
        };
        var d = function () {
            if (B.switchMotion === "on") {
                o = setInterval(function () {
                    D(p)
                }, B.autoDuration)
            }
        };
        var n = function () {
            if (B.hoverPause && B.automatic && B.switchMotion === "on") {
                r.hover(function () {
                    if (!C) {
                        clearInterval(o);
                        C = true
                    }
                }, function () {
                    if (C) {
                        o = setInterval(function () {
                            D(p)
                        }, B.autoDuration);
                        C = false
                    }
                })
            }
        };
        var z = function () {
            if (B.stopClass && B.stopClass.length > 0) {
                for (var H = 0, G = B.stopClass.length; H < G; H++) {
                    a(B.stopClass[H]).click(function () {
                        if (!C) {
                            clearInterval(o);
                            C = true
                        } else {
                            o = setInterval(function () {
                                D(p)
                            }, B.autoDuration);
                            C = false
                        }
                    })
                }
            }
        };
        var b = function () {
            if (A.length > 0 && B.showControl) {
                if (B.action && B.action == "click") {
                    A.click(function () {
                        if (!a(this).hasClass("j-crt") && !s) {
                            var G = a(this).find("span").text() * 1;
                            D(false, G)
                        }
                    })
                } else {
                    A.hover(function () {
                        if (!a(this).hasClass("j-crt") && !s) {
                            var G = a(this).find("span").text() * 1;
                            D(false, G)
                        }
                    }, function () {
                    })
                }
            }
            if (e.length > 0 || g.length > 0) {
                e.click(function (G) {
                    G.preventDefault();
                    if (!s) {
                        D(m, false)
                    }
                });
                g.click(function (G) {
                    G.preventDefault();
                    if (!s) {
                        D(p, false)
                    }
                })
            }
        };
        var D = function (G, H) {
            if (!s) {
                if (G) {
                    w = u(G)
                } else {
                    if (H && B.animation == "fade") {
                        w = H - 1
                    } else {
                        w = H
                    }
                }
                s = true;
                if (B.animation === "fade") {
                    if (A.length > 0 && B.showControl) {
                        A.eq(j).removeClass("j-crt");
                        A.eq(w).addClass("j-crt")
                    }
                    k = y.eq(w);
                    h.fadeOut(B.animationDuration);
                    k.fadeIn(B.animationDuration, function () {
                        h.hide();
                        j = w;
                        h = k;
                        s = false
                    });
                    a.crtNum = w
                } else {
                    if (B.animation === "slide") {
                        if (A.length > 0 && B.showControl) {
                            A.eq(F - 1).removeClass("j-crt");
                            if (w === v - 1) {
                                A.eq(0).addClass("j-crt")
                            } else {
                                if (w === 0) {
                                    A.eq(v - 3).addClass("j-crt")
                                } else {
                                    A.eq(w - 1).addClass("j-crt")
                                }
                            }
                        }
                        if (B.orientation === "horizontal") {
                            i.animate({left: -w * c}, B.animationDuration, function () {
                                if (w === 0) {
                                    F = v - 2;
                                    i.css({left: -F * c})
                                } else {
                                    if (w === v - 1) {
                                        F = 1;
                                        i.css({left: -c})
                                    } else {
                                        F = w
                                    }
                                }
                                s = false
                            })
                        } else {
                            if (B.orientation === "vertical" && !B.multipleShow) {
                                i.animate({top: -w * t}, B.animationDuration, function () {
                                    if (w === 0) {
                                        F = v - 2;
                                        i.css({top: -F * t})
                                    } else {
                                        if (w === v - 1) {
                                            F = 1;
                                            i.css({top: -t})
                                        } else {
                                            F = w
                                        }
                                    }
                                    s = false
                                })
                            } else {
                                if (B.orientation === "vertical" && B.multipleShow) {
                                    i.animate({top: -w * t}, B.animationDuration, function () {
                                        if (w === 0) {
                                            F = v - 2;
                                            i.css({top: -F * t})
                                        } else {
                                            if (w === v - 3) {
                                                F = 0;
                                                i.css({top: 0})
                                            } else {
                                                F = w
                                            }
                                        }
                                        s = false
                                    })
                                }
                            }
                        }
                    }
                }
                B.callBackEvent && B.callBackEvent()
            }
        };
        var x = function () {
            E();
            d();
            n();
            b();
            z()
        };
        x();
        return this
    }
})(jQuery);
;(function () {
    var c = function () {
        var h = $(".m-bookdetail");
        var k = $(".j-desc");
        var i = h.height();
        var j = 110;
        var l = k.height();
        var m = (l > 154) ? 154 : l;
        k.height(j).show();
        if (l > j) {
            $(".j-desc-unfold").show()
        }
        $(".j-desc-unfold").click(function () {
            k.height(m);
            h.height(i + m - j);
            $(".j-desc-unfold").hide();
            $(".j-desc-fold").show()
        });
        $(".j-desc-fold").click(function () {
            k.height(j);
            h.height(i);
            $(".j-desc-unfold").show();
            $(".j-desc-fold").hide()
        })
    };
    var g = function () {
        var h = $("input[name=articleContent]").val();
        if (h) {
            h += "</p>";
            var l = $(h).find("p");
            var k = l.length;
            var m = "";
            for (var j = 0; j < k; j++) {
                var n = $.trim($(l[j]).text());
                if (n) {
                    m += n;
                    m += "</br>"
                }
            }
            $("#J_latestUpdate").html(m)
        }
    };
    var b = function () {
        if ($("#J_endTime").length == 0) {
            return
        }
        var t = $("#J_TimeLeft"), l = $("#J_endTime").data("date"), k = new Date(l * 1), j, h, u, p, i, r, m, s;
        var q = function (w) {
            for (var x = 0; x < w.length; x++) {
                if (w[x] < 10) {
                    w[x] = "0" + w[x]
                }
            }
        };
        var o = function () {
            j = new Date();
            h = parseInt((k - j) / 1000), u = parseInt(h / 3600 / 24), p = parseInt((h / 3600) % 24), i = parseInt((h / 60) % 60), r = parseInt(h % 60), s = [p, i, r];
            q(s);
            m = "<span>" + u + "</span>天<span>" + s[0] + "</span>时<span>" + s[1] + "</span>分<span>" + s[2] + "</span>秒";
            t.empty().append(m);
            if (h <= 0) {
                clearInterval(n)
            }
        };
        var n = setInterval(function () {
            o()
        }, 1000);
        var v = function () {
            o()
        };
        v()
    };
    var a = function () {
        $("#J_getFree").click(function (i) {
            i.preventDefault();
            var j = $(this).data("id");
            var h = $(this).data("paytype");
            $.ajax({
                type: "POST",
                url: "/trade.do",
                data: {operation: "purchase", pay_type: h, source_uuid: j, for_free: "true"},
                dataType: "json",
                success: function (k) {
                    if (k.resultCode === -999) {
                        login163()
                    } else {
                        if (k.resultCode === 0) {
                            YD.popTip("领取成功，已放入书架");
                            $("#J_getFree").hide();
                            $("#J_readNow").show()
                        } else {
                            if (k.resultCode === -691) {
                                YD.popTip("领取失败，免费领取已过期！")
                            } else {
                                YD.popTip("领取失败，请稍后再试！")
                            }
                        }
                    }
                }
            })
        })
    };
    var f = function () {
        $(".j-addSub").click(function (i) {
            i.preventDefault();
            var h = $(this);
            if (h.hasClass("disabled") || h.hasClass("adding")) {
                return
            }
            h.addClass("adding");
            var k = $(this).data("id");
            var j = $(this).data("imgsrc");
            $.ajax({
                type: "POST",
                url: "/subscribe.do",
                data: {operation: "addSub", id: k},
                dataType: "json",
                success: function (m) {
                    if (m.resultCode === -999) {
                        login163()
                    } else {
                        if (m.resultCode === 0) {
                            if (j) {
                                var n = $(".m-cloudsj").offset();
                                var l = $('<img src="' + j + '" width="35" height="50" class="m-fly"/>');
                                l.appendTo(h.parent());
                                var o = l.offset();
                                l.animate({
                                    left: n.left - o.left + 180 + "px",
                                    top: n.top - o.top - 60 + "px",
                                    opacity: 0
                                }, 800, "linear", function () {
                                    l.remove()
                                })
                            }
                            h.html("已在书架").addClass("disabled")
                        } else {
                            YD.popTip("放入书架失败，请稍后再试！")
                        }
                    }
                    h.removeClass("adding")
                },
                error: function () {
                    h.removeClass("adding")
                }
            })
        })
    };
    var d = function () {
        if ($("#J_workSlider").find("li").length > 1) {
            $("#J_workSlider").goSlider({animation: "slide"})
        }
    };
    var e = function () {
        $(".j-brief-1").click(function () {
            $(this).parents(".txt").hide();
            $(this).parents(".txt").next().show()
        });
        $(".j-brief-2").click(function () {
            $(this).parents(".txt").hide();
            $(this).parents(".txt").prev().show()
        })
    };
    c();
    g();
    a();
    f();
    b();
    d();
    e()
})();
;(function () {
    var a = {};
    a.addYqdLayer = function () {
        function d() {
            var e = window.location.search;
            var f = new RegExp("([^?=&]+)(=([^&]*))?", "g");
            if (e) {
                var g = {};
                e.replace(f, function (i, h, k, j) {
                    g[h] = j
                });
                return g
            }
        }

        var c = d() ? d()["yqdActivity"] : false;
        if (c === "subway2") {
            var b = $("#J_readNow").attr("href");
            $("#J_readNow").attr("href", b + "?yqdActivity=subway2");
            $('<div class="m-ad-banner" style="margin-top:38px;width:720px;"><a href="//m.yuedu.163.com/special/002164I9/yqd4_drift_web.html"><img src="https://easyreadfs.nosdn.127.net/web/trunk/1495012944504/banner.jpg" width="100%"/></a></div>').insertAfter(".m-bookdetail")
        }
    };
    a.init = function () {
        this.addYqdLayer()
    };
    a.init()
})();