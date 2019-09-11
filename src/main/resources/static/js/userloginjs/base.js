var ResultCode = {
    ERROR_NOT_LOGGED_IN: -999,
    ERROR_MAILBOX_FORMAT_ERROR: -979,
    ERROR_REPEAT_ACTION: -799,
    ERROR_MISS_PARAMETER: -789,
    ERROR_HTTP_POST_REQUIRED: -779,
    ERROR_ALREADY_IN_SHOPPING_CART: -699,
    ERROR_ALREADY_IN_ORDER: -698,
    ERROR_NO_ITEMS_LEFT: -697,
    ERROR_BOOK_ALREADY_PAID: -696,
    ERROR_BOOK_ALREADY_IN_CART: -695,
    ERROR_PARTIAL_FAILURE: -2,
    ERROR_UNKNOWN: -1,
    SUCCESS: 0
};
var MailMap = {
    asIs: {}, mailDots: {}, others: {}, init: function () {
        this.asIs["mails.thu.edu.cn"] = 1;
        this.asIs["gmail.com"] = 1;
        this.asIs["hotmail.co.uk"] = 1;
        this.asIs["vip.tom.com"] = 1;
        this.asIs["vip.km169.net"] = 1;
        this.asIs["vip.sina.com"] = 1;
        this.asIs["vip.sohu.com"] = 1;
        this.asIs["vip.126.com"] = 1;
        this.asIs["vip.163.com"] = 1;
        this.asIs["hotmail.com"] = 1;
        this.asIs["rocketmail.com"] = 1;
        this.asIs["live.ca"] = 1;
        this.asIs["live.cl"] = 1;
        this.asIs["mails.tsinghua.edu.cn"] = 1;
        this.asIs["live.com.sg"] = 1;
        this.asIs["hotmail.fr"] = 1;
        this.asIs["ymail.com"] = 1;
        this.asIs["live.ie"] = 1;
        this.mailDots["188.com"] = 1;
        this.mailDots["eval.cn"] = 1;
        this.mailDots["domobile.com"] = 1;
        this.mailDots["yahoo.com"] = 1;
        this.mailDots["lut.cn"] = 1;
        this.mailDots["139.com"] = 1;
        this.mailDots["zoho.com"] = 1;
        this.mailDots["deruntex.com"] = 1;
        this.mailDots["moooco.com"] = 1;
        this.mailDots["yahoo.com.tw"] = 1;
        this.mailDots["hz.cn"] = 1;
        this.mailDots["jiamei93.com"] = 1;
        this.mailDots["dl.cn"] = 1;
        this.mailDots["fudan.edu.cn"] = 1;
        this.mailDots["huanqiu.com"] = 1;
        this.mailDots["msn.com"] = 1;
        this.mailDots["paidai.com"] = 1;
        this.mailDots["chaio.com"] = 1;
        this.mailDots["yahoo.com.sg"] = 1;
        this.mailDots["tianzili.net"] = 1;
        this.mailDots["yahoo.com.cn"] = 1;
        this.mailDots["ulike-furniture.com"] = 1;
        this.mailDots["google.com"] = 1;
        this.mailDots["chinaren.com"] = 1;
        this.mailDots["netease.com"] = 1;
        this.mailDots["sh163.net"] = 1;
        this.mailDots["tom.com"] = 1;
        this.mailDots["zju.edu.cn"] = 1;
        this.mailDots["020178.com"] = 1;
        this.mailDots["fei.im"] = 1;
        this.mailDots["sogou.com"] = 1;
        this.mailDots["sina.com.cn"] = 1;
        this.mailDots["live.com"] = 1;
        this.mailDots["cqjtu.edu.cn"] = 1;
        this.mailDots["foxmail.com"] = 1;
        this.mailDots["aol.com"] = 1;
        this.mailDots["sjtu.edu.cn"] = 1;
        this.mailDots["sohu.com"] = 1;
        this.mailDots["ttigroup.com"] = 1;
        this.mailDots["xmlb.com"] = 1;
        this.mailDots["08158.com"] = 1;
        this.mailDots["netease.com"] = 1;
        this.mailDots["sina.cn"] = 1;
        this.mailDots["henhen.cn"] = 1;
        this.mailDots["nankai.edu.cn"] = 1;
        this.mailDots["yahoo.co.jp"] = 1;
        this.mailDots["bit.edu.cn"] = 1;
        this.mailDots["dingzai.com"] = 1;
        this.mailDots["greens-shazhou.com"] = 1;
        this.mailDots["sitoy.com"] = 1;
        this.mailDots["yjk.cn"] = 1;
        this.mailDots["21cn.com"] = 1;
        this.mailDots["live.cn"] = 1;
        this.mailDots["yahoo.com.hk"] = 1;
        this.mailDots["263.net"] = 1;
        this.mailDots["126.com"] = 1;
        this.mailDots["qq.com"] = 1;
        this.mailDots["timud.com"] = 1;
        this.mailDots["bestdong.com"] = 1;
        this.mailDots["chongtang.me"] = 1;
        this.mailDots["ruomu.net"] = 1;
        this.mailDots["yeah.net"] = 1;
        this.mailDots["cnbeta.com"] = 1;
        this.mailDots["znuel.net"] = 1;
        this.mailDots["wo.com.cn"] = 1;
        this.mailDots["163.net"] = 1;
        this.mailDots["eyou.com"] = 1;
        this.mailDots["trident.com.cn"] = 1;
        this.mailDots["gwmail.gwu.edu"] = 1;
        this.mailDots["yahoo.cn"] = 1;
        this.mailDots["sina.com"] = 1;
        this.mailDots["midea.com.cn"] = 1;
        this.mailDots["drc.gov.cn"] = 1;
        this.mailDots["163.com"] = 1;
        this.mailDots["naver.com"] = 1;
        this.mailDots["secogroup.net"] = 1;
        this.mailDots["vip.qq.com"] = 1;
        this.mailDots["me.com"] = 1;
        this.mailDots["2008.sina.com"] = 1;
        this.mailDots["x2q.us"] = 1;
        this.mailDots["mail.ru"] = 1;
        this.mailDots["cnr.cn"] = 1;
        this.mailDots["189.cn"] = 1;
        this.mailDots["liang-xiaoxuan.net"] = 1;
        this.others["pchome.com.tw"] = "https://member.pchome.com.tw/login.html?ref=http%3A%2F%2Fmail.pchome.com.tw%2F";
        this.others["w.cn"] = "http://www.hotmail.com";
        this.others["corp.netease.com"] = "http://corp.netease.com/coremail/"
    }, getLoginPage: function (a) {
        var b = a.indexOf("@");
        var c = a.substring(b + 1);
        if (this.asIs[c]) {
            return "http://" + c
        } else {
            if (this.mailDots[c]) {
                return "http://mail." + c
            } else {
                if (this.others[c]) {
                    return this.others[c]
                } else {
                    return null
                }
            }
        }
    }
};
var openTip = function () {
    layerOpen("sucTip")
};
MailMap.init();
if (BaseBean == null) {
    var BaseBean = {}
}
BaseBean._path = "/dwr";

function subscribeSource(a, b, c) {
    dwr.engine._executeSingleWithBIParams(BaseBean._path, "BaseBean", "addSub", {sourceUuid: a}, a, b, false, c)
}

function unsubscribeSource(a, b, c) {
    dwr.engine._executeSingleWithBIParams(BaseBean._path, "BaseBean", "delSub", {sourceUuid: a}, a, b, false, c)
}

function cancelSubscribeTip(a) {
    dwr.engine._execute(BaseBean._path, "BaseBean", "cancelSubscribeTip", false, a)
}

function getLoginType(a) {
    dwr.engine._execute(BaseBean._path, "BaseBean", "getLoginType", false, a)
}

function openSubscribeTipLayer(k, a, m, j, g, f) {
    var b = jQuery("#layer4");
    var l = b.find(".m-inf .w-img img");
    l.attr("src", g);
    var h = b.find(".m-inf .txt");
    h.find(".has:eq(0) span").text(m);
    if (k.length > 8) {
        k = k.substring(0, 8) + "..."
    }
    h.find("h4").text(k);
    var e = "";
    for (var c = 1; c <= 5; c++) {
        if (c <= a) {
            e += "<span>&nbsp;</span>"
        } else {
            e += '<span class="no">&nbsp;</span>'
        }
    }
    h.find(".w-star").html(e);
    var d = $id("layer4");
    layerOpen("layer4");
    showMask(true);
    b.find(".lyclose").unbind("click").bind("click", function (n) {
        n.preventDefault();
        var i = jQuery(this);
        cancelSubscribeTip(function (o) {
            if (o) {
                if (f) {
                    refreshPage()
                } else {
                    layerClose(d);
                    showMask(false)
                }
            } else {
                layerClose(d);
                showError("出错了，请刷新页面后再试一次。")
            }
        })
    })
}

function openSubscribeBookTipLayer(k, b, h, d, a) {
    var c = jQuery("#J_Success");
    var l = c.find(".w-bimg img");
    l.attr("src", h);
    l.attr("title", k);
    var j = c.find(".t-info");
    j.find("h3").text(k);
    var m = d;
    if (!m) {
        m = a
    } else {
        if (a) {
            m += "/" + a
        }
    }
    j.find("p").text(m);
    var g = "";
    for (var e = 1; e <= 5; e++) {
        if (e <= b) {
            g += "<span>&nbsp;</span>"
        } else {
            g += '<span class="no">&nbsp;</span>'
        }
    }
    j.find(".w-star").html(g);
    var f = $id("J_Success");
    layerOpen("J_Success");
    showMask(true);
    c.find(".lyclose").unbind("click").bind("click", function (n) {
        n.preventDefault();
        var i = jQuery(this);
        cancelSubscribeTip(function (o) {
            layerClose(f);
            if (o) {
                showMask(false)
            } else {
                showError("出错了，请刷新页面后再试一次。")
            }
        })
    })
}

function externalAddSub(a) {
    dwr.engine._execute(BaseBean._path, "BaseBean", "getUserName", false, function (b) {
        var d = "http://" + window.location.host + "/externalSubscribe.do?uuid=" + a;
        if (b) {
            try {
                if (typeof _gaq != "undefined") {
                    _gaq.push(["_trackEvent", "yuedu", "contentcenter", "add_subs_succed"])
                }
            } catch (c) {
            }
            location.href = d + "&username=" + b
        } else {
            login163(d, true)
        }
    });
    if (_gaq) {
        _gaq.push(["_trackEvent", "yuedu", "contentcenter", "add_subs"])
    }
}

function getSubErrorMsg(a) {
    switch (a) {
        case 101:
            return "您已经订阅了这个源，请刷新页面。";
        case -201:
            return "源已过期或不可订阅，请移步至资讯选阅其他内容";
        case ResultCode.ERROR_MISS_PARAMETER:
            return "缺少参数";
        default:
            return "暂时无法订阅，请稍后再试。"
    }
}

function getSubBookErrorMsg(a) {
    switch (a) {
        case 101:
            return "已加入书架，请刷新页面。";
        case ResultCode.ERROR_MISS_PARAMETER:
            return "缺少参数";
        default:
            return "暂时无法加入书架，请稍后再试。"
    }
}

function getUnsubErrorMsg(a) {
    switch (a) {
        case 102:
            return "您没有订阅这个源，请刷新页面。";
        default:
            return "出错了，请刷新页面后再试一次。"
    }
}

function getUnsubBookErrorMsg(a) {
    switch (a) {
        default:
            return "出错了，请刷新页面后再试一次。"
    }
}

function getUserInfo(a) {
    dwr.engine._execute(BaseBean._path, "BaseBean", "getUserInfo", false, a)
}

function onUpdateSubscribeOrder(a) {
    updateSubscribeOrder(a, function (b) {
        if (b.flag == ResultCode.SUCCESS) {
            openTip()
        } else {
            showError("保存资讯源顺序出错！")
        }
    })
}

function updateSubscribeOrder(a, b) {
    dwr.engine._execute(BaseBean._path, "BaseBean", "updateSubscribeOrder", a, false, b)
}

function updateUserInfo(c, f, d, e, b, g) {
    var a = {imageUrl: c, nickName: f, gender: d, introduction: e, userLabels: b};
    dwr.engine._execute(BaseBean._path, "BaseBean", "updateUserInfo", a, false, g)
}

function querySysLabels(a) {
    dwr.engine._execute(BaseBean._path, "BaseBean", "querySysLabels", false, a)
}

function hasSubscribedSource(a, b) {
    dwr.engine._execute(BaseBean._path, "BaseBean", "hasSubscribedSource", a, false, b)
}

function refreshPage() {
    try {
        var g = [];
        for (var b = 0; b < window.frames.length; b++) {
            g.push(window.frames[b].frameElement)
        }
        for (var b = 0; b < g.length; b++) {
            var c = g[b];
            c.parentNode.removeChild(c)
        }
        window.location.reload()
    } catch (f) {
        var a = window.location.href;
        var d = window.location.hash;
        if (d) {
            a = a.substring(0, a.length - d.length)
        }
        window.location.href = a
    }
}

function showError(a) {
    jQuery("#eroTip").css("z-index", 10001);
    jQuery("#eroTip .m-actip h3").text(a);
    layerOpen("eroTip")
}

function showInfoTip(a) {
    jQuery("#infoTip").css("z-index", 10001);
    jQuery("#infoTip .lyct h3").html(a);
    layerOpen("infoTip")
}

function showMask(b) {
    var a = jQuery(".m-mask");
    if (b) {
        a.height(jQuery(document).height());
        a.removeClass("f-dn")
    } else {
        a.addClass("f-dn")
    }
}

function shouClientUserFirstLoginLayer() {
    var b = jQuery("#openFirst");
    b.toggleClass("f-dn");
    var d = jQuery(window).height();
    var c = jQuery(document).scrollTop();
    var a = b.height(), e = b.width();
    if (d > a) {
        b.css("top", (c + ((d - a) / 2) + "px"))
    } else {
        b.css("top", (c + ((a - d) / 2) + "px"))
    }
    b.css("left", "50%");
    b.css("margin-left", -(e / 2) + "px");
    showMask(true)
}

function hideClientUserFirstLoginLayer() {
    var a = jQuery("#openFirst");
    a.addClass("f-dn");
    showMask(false)
}

function subscribeBook(e, h, c, k) {
    if (subscribeBook.ongoing) {
        return
    }
    subscribeBook.ongoing = true;
    subscribeBook.timer = setTimeout(function () {
        subscribeBook.ongoing = false
    }, 500);
    var j = e.siblings("input:hidden");
    var b = j[0].value;
    var i = j[1].value;
    var d = j[2].value;
    var g = j[3].value;
    var f = j[4].value;
    var a = j[5].value;
    if (e.hasClass(c)) {
        return;
        unsubscribeSource(b, i, function (l) {
            if (l.flag == ResultCode.SUCCESS || l.flag == 102) {
                e.text("放入书架");
                if (h) {
                    e.addClass(h)
                }
                e.removeClass(c)
            } else {
                if (l.flag == ResultCode.ERROR_NOT_LOGGED_IN) {
                    login163()
                } else {
                    msg = getUnsubBookErrorMsg(l.flag);
                    showError(msg)
                }
            }
        });
        if (typeof(_gaq) != "undefined") {
        }
    } else {
        subscribeSource(b, i, function (l) {
            if (l.flag == ResultCode.SUCCESS || l.flag == 101) {
                e.text("已在书架");
                e.addClass(c);
                if (h) {
                    e.removeClass(h)
                }
                if (k) {
                    k()
                }
                if (l.showSubscribeTip) {
                    openSubscribeBookTipLayer(i, d, g, f, a)
                }
            } else {
                if (l.flag == ResultCode.ERROR_NOT_LOGGED_IN) {
                    login163()
                } else {
                    msg = getSubBookErrorMsg(l.flag);
                    showError(msg)
                }
            }
        });
        if (typeof(_gaq) != "undefined") {
            _gaq.push(["_trackEvent", "yuedu", "book", "add_bookrack"])
        }
    }
}

function onSubOrUnsubSource(d, k, g, c) {
    if (onSubOrUnsubSource.ongoing) {
        return
    }
    onSubOrUnsubSource.ongoing = true;
    onSubOrUnsubSource.timer = setTimeout(function () {
        onSubOrUnsubSource.ongoing = false
    }, 500);
    var e = parseInt(k.text()) || 0;
    var l = d.siblings("input:hidden");
    var a = l[0].value;
    var i = l[1].value;
    var b = l[2].value;
    var h = l[3].value;
    var f = l[4].value;
    var j = l[5].value;
    if (d.hasClass(c)) {
        unsubscribeSource(a, i, function (m) {
            if (m.flag == ResultCode.SUCCESS) {
                if (j == "mysubs") {
                    refreshPage()
                } else {
                    d.text("订阅");
                    if (e > 0) {
                        k.text(e - 1)
                    }
                    if (g) {
                        d.addClass(g)
                    }
                    d.removeClass(c)
                }
            } else {
                if (m.flag == ResultCode.ERROR_NOT_LOGGED_IN) {
                    login163()
                } else {
                    msg = getUnsubErrorMsg(m.flag);
                    showError(msg)
                }
            }
        });
        if (_gaq) {
            _gaq.push(["_trackEvent", "yuedu", "contentcenter", "del_subs"])
        }
    } else {
        subscribeSource(a, i, function (m) {
            if (m.flag == ResultCode.SUCCESS) {
                d.text("已经订阅");
                k.text(e + 1);
                d.addClass(c);
                if (g) {
                    d.removeClass(g)
                }
                if (m.showSubscribeTip) {
                    openSubscribeTipLayer(i, b, e + 1, h, f, false)
                }
                if (_gaq) {
                    _gaq.push(["_trackEvent", "yuedu", "contentcenter", "add_subs_succed"])
                }
            } else {
                if (m.flag == ResultCode.ERROR_NOT_LOGGED_IN) {
                    login163()
                } else {
                    msg = getSubErrorMsg(m.flag);
                    showError(msg)
                }
            }
        });
        if (_gaq) {
            _gaq.push(["_trackEvent", "yuedu", "contentcenter", "add_subs"])
        }
    }
}

function logRequest(a) {
    jQuery.ajax({
        url: location.protocol + "//" + location.host + "/log.html?op=" + a + "&t=" + new Date().getTime(),
        success: function () {
        }
    })
}

function logRequestWithParams(b, a) {
    jQuery.ajax({
        url: location.protocol + "//" + location.host + "/log.html?op=" + b + "&t=" + new Date().getTime(),
        data: a,
        success: function () {
        }
    })
}

function youdaoLog(g, e, b, a, f, d) {
    var c = "";
    if (e == 0) {
        c = g + "&userId=" + d + "&t=" + new Date().getTime()
    } else {
        if (e == 1) {
            c = g + "&result=" + b + "&successdata=" + a + "&faildata=" + f + "&userId=" + d + "&t=" + new Date().getTime()
        } else {
            if (e == 2) {
                c = g + "&subscribednum=" + a + "&userId=" + d + "&t=" + new Date().getTime()
            }
        }
    }
    jQuery.ajax({
        url: location.protocol + "//" + location.host + "/log.html?op=" + c, success: function () {
        }
    })
}

function createPlayer(a, g, c) {
    var f = /\((iPhone|iPad|iPod)/ig;
    var d = "";
    if (f.test(navigator.userAgent)) {
        d = "<video class='video' src='" + g + "' autobuffer='true' autoplay='1' controls='1' onclick='this.play()' id='space' tabindex='1'>Your browser does not support the video tag.</video>"
    } else {
        var e = "FPlayer";
        d = '<object type="application/x-shockwave-flash"  classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" class="video" id="' + e + '" align="middle"><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="movie" value="' + c + '" /><param name="quality" value="high" />';
        d = d + '<embed src="' + c + '" id="' + e + '" quality="high" class="video" name="FPlayer" align="middle" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>'
    }
    var b = jQuery("#" + a + " .vplay");
    $(".video-holder div").css({"background-color": "#000", "text-align": "center"});
    if (b.length == 0) {
        b = jQuery("#" + a + " .video-holder div:first")
    }
    b.html(d)
}

function showServerError() {
    showError("出错了，请稍后再试。")
}

function popServerError(a) {
    YD.popTip("出错了，请稍后再试。")
}

if (typeof console == "undefined") {
    console = {
        log: function () {
        }
    }
}

function ifLogin(a) {
    $.get("/login.do?operation=check", {}, function (c) {
        var b = c.state;
        if (b === "logout") {
            login163()
        } else {
            if (b === "login") {
                a && a()
            }
        }
    }, ["json"]).fail(function (b) {
        if (b.status != 0) {
            showServerError()
        }
    })
}

function googleAdwords(a, c) {
    var b = new Image(1, 1);
    b.src = "http://www.googleadservices.com/pagead/conversion/" + a + "/?label=" + c + "&script=0"
}

function getQueryStringByName(b) {
    var a = location.search.match(new RegExp("[?&]" + b + "=([^&]+)", "i"));
    if (a == null || a.length < 1) {
        return ""
    }
    return a[1]
};