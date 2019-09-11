DomainMap = {
    cookieDomain: ".163.com",
    serverHostName: "blog.163.com",
    serverDomain: ".blog.163.com",
    getParentDomain: function (a) {
        if (a.indexOf("@") != -1 || a.indexOf("_") != -1 || a.indexOf("..") != -1 || a.charAt(a.length - 1) == ".") {
            return this.serverHostName + "/" + a
        }
        return a + this.serverDomain
    }
};
var hexcase = 0;
var b64pad = "";
var chrsz = 8;

function hex_md5(a) {
    return binl2hex(core_md5(str2binl(a), a.length * chrsz))
}

function b64_md5(a) {
    return binl2b64(core_md5(str2binl(a), a.length * chrsz))
}

function str_md5(a) {
    return binl2str(core_md5(str2binl(a), a.length * chrsz))
}

function hex_hmac_md5(a, b) {
    return binl2hex(core_hmac_md5(a, b))
}

function b64_hmac_md5(a, b) {
    return binl2b64(core_hmac_md5(a, b))
}

function str_hmac_md5(a, b) {
    return binl2str(core_hmac_md5(a, b))
}

function md5_vm_test() {
    return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"
}

function core_md5(r, l) {
    r[l >> 5] |= 128 << ((l) % 32);
    r[(((l + 64) >>> 9) << 4) + 14] = l;
    var q = 1732584193;
    var o = -271733879;
    var n = -1732584194;
    var m = 271733878;
    for (var g = 0; g < r.length; g += 16) {
        var j = q;
        var h = o;
        var f = n;
        var e = m;
        q = md5_ff(q, o, n, m, r[g + 0], 7, -680876936);
        m = md5_ff(m, q, o, n, r[g + 1], 12, -389564586);
        n = md5_ff(n, m, q, o, r[g + 2], 17, 606105819);
        o = md5_ff(o, n, m, q, r[g + 3], 22, -1044525330);
        q = md5_ff(q, o, n, m, r[g + 4], 7, -176418897);
        m = md5_ff(m, q, o, n, r[g + 5], 12, 1200080426);
        n = md5_ff(n, m, q, o, r[g + 6], 17, -1473231341);
        o = md5_ff(o, n, m, q, r[g + 7], 22, -45705983);
        q = md5_ff(q, o, n, m, r[g + 8], 7, 1770035416);
        m = md5_ff(m, q, o, n, r[g + 9], 12, -1958414417);
        n = md5_ff(n, m, q, o, r[g + 10], 17, -42063);
        o = md5_ff(o, n, m, q, r[g + 11], 22, -1990404162);
        q = md5_ff(q, o, n, m, r[g + 12], 7, 1804603682);
        m = md5_ff(m, q, o, n, r[g + 13], 12, -40341101);
        n = md5_ff(n, m, q, o, r[g + 14], 17, -1502002290);
        o = md5_ff(o, n, m, q, r[g + 15], 22, 1236535329);
        q = md5_gg(q, o, n, m, r[g + 1], 5, -165796510);
        m = md5_gg(m, q, o, n, r[g + 6], 9, -1069501632);
        n = md5_gg(n, m, q, o, r[g + 11], 14, 643717713);
        o = md5_gg(o, n, m, q, r[g + 0], 20, -373897302);
        q = md5_gg(q, o, n, m, r[g + 5], 5, -701558691);
        m = md5_gg(m, q, o, n, r[g + 10], 9, 38016083);
        n = md5_gg(n, m, q, o, r[g + 15], 14, -660478335);
        o = md5_gg(o, n, m, q, r[g + 4], 20, -405537848);
        q = md5_gg(q, o, n, m, r[g + 9], 5, 568446438);
        m = md5_gg(m, q, o, n, r[g + 14], 9, -1019803690);
        n = md5_gg(n, m, q, o, r[g + 3], 14, -187363961);
        o = md5_gg(o, n, m, q, r[g + 8], 20, 1163531501);
        q = md5_gg(q, o, n, m, r[g + 13], 5, -1444681467);
        m = md5_gg(m, q, o, n, r[g + 2], 9, -51403784);
        n = md5_gg(n, m, q, o, r[g + 7], 14, 1735328473);
        o = md5_gg(o, n, m, q, r[g + 12], 20, -1926607734);
        q = md5_hh(q, o, n, m, r[g + 5], 4, -378558);
        m = md5_hh(m, q, o, n, r[g + 8], 11, -2022574463);
        n = md5_hh(n, m, q, o, r[g + 11], 16, 1839030562);
        o = md5_hh(o, n, m, q, r[g + 14], 23, -35309556);
        q = md5_hh(q, o, n, m, r[g + 1], 4, -1530992060);
        m = md5_hh(m, q, o, n, r[g + 4], 11, 1272893353);
        n = md5_hh(n, m, q, o, r[g + 7], 16, -155497632);
        o = md5_hh(o, n, m, q, r[g + 10], 23, -1094730640);
        q = md5_hh(q, o, n, m, r[g + 13], 4, 681279174);
        m = md5_hh(m, q, o, n, r[g + 0], 11, -358537222);
        n = md5_hh(n, m, q, o, r[g + 3], 16, -722521979);
        o = md5_hh(o, n, m, q, r[g + 6], 23, 76029189);
        q = md5_hh(q, o, n, m, r[g + 9], 4, -640364487);
        m = md5_hh(m, q, o, n, r[g + 12], 11, -421815835);
        n = md5_hh(n, m, q, o, r[g + 15], 16, 530742520);
        o = md5_hh(o, n, m, q, r[g + 2], 23, -995338651);
        q = md5_ii(q, o, n, m, r[g + 0], 6, -198630844);
        m = md5_ii(m, q, o, n, r[g + 7], 10, 1126891415);
        n = md5_ii(n, m, q, o, r[g + 14], 15, -1416354905);
        o = md5_ii(o, n, m, q, r[g + 5], 21, -57434055);
        q = md5_ii(q, o, n, m, r[g + 12], 6, 1700485571);
        m = md5_ii(m, q, o, n, r[g + 3], 10, -1894986606);
        n = md5_ii(n, m, q, o, r[g + 10], 15, -1051523);
        o = md5_ii(o, n, m, q, r[g + 1], 21, -2054922799);
        q = md5_ii(q, o, n, m, r[g + 8], 6, 1873313359);
        m = md5_ii(m, q, o, n, r[g + 15], 10, -30611744);
        n = md5_ii(n, m, q, o, r[g + 6], 15, -1560198380);
        o = md5_ii(o, n, m, q, r[g + 13], 21, 1309151649);
        q = md5_ii(q, o, n, m, r[g + 4], 6, -145523070);
        m = md5_ii(m, q, o, n, r[g + 11], 10, -1120210379);
        n = md5_ii(n, m, q, o, r[g + 2], 15, 718787259);
        o = md5_ii(o, n, m, q, r[g + 9], 21, -343485551);
        q = safe_add(q, j);
        o = safe_add(o, h);
        n = safe_add(n, f);
        m = safe_add(m, e)
    }
    return Array(q, o, n, m)
}

function md5_cmn(h, e, d, c, g, f) {
    return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
}

function md5_ff(g, f, m, l, e, j, h) {
    return md5_cmn((f & m) | ((~f) & l), g, f, e, j, h)
}

function md5_gg(g, f, m, l, e, j, h) {
    return md5_cmn((f & l) | (m & (~l)), g, f, e, j, h)
}

function md5_hh(g, f, m, l, e, j, h) {
    return md5_cmn(f ^ m ^ l, g, f, e, j, h)
}

function md5_ii(g, f, m, l, e, j, h) {
    return md5_cmn(m ^ (f | (~l)), g, f, e, j, h)
}

function core_hmac_md5(c, f) {
    var e = str2binl(c);
    if (e.length > 16) {
        e = core_md5(e, c.length * chrsz)
    }
    var a = Array(16), d = Array(16);
    for (var b = 0; b < 16; b++) {
        a[b] = e[b] ^ 909522486;
        d[b] = e[b] ^ 1549556828
    }
    var g = core_md5(a.concat(str2binl(f)), 512 + f.length * chrsz);
    return core_md5(d.concat(g), 512 + 128)
}

function safe_add(a, d) {
    var c = (a & 65535) + (d & 65535);
    var b = (a >> 16) + (d >> 16) + (c >> 16);
    return (b << 16) | (c & 65535)
}

function bit_rol(a, b) {
    return (a << b) | (a >>> (32 - b))
}

function str2binl(d) {
    var c = Array();
    var a = (1 << chrsz) - 1;
    for (var b = 0; b < d.length * chrsz; b += chrsz) {
        c[b >> 5] |= (d.charCodeAt(b / chrsz) & a) << (b % 32)
    }
    return c
}

function binl2str(c) {
    var d = "";
    var a = (1 << chrsz) - 1;
    for (var b = 0; b < c.length * 32; b += chrsz) {
        d += String.fromCharCode((c[b >> 5] >>> (b % 32)) & a)
    }
    return d
}

function binl2hex(c) {
    var b = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var d = "";
    for (var a = 0; a < c.length * 4; a++) {
        d += b.charAt((c[a >> 2] >> ((a % 4) * 8 + 4)) & 15) + b.charAt((c[a >> 2] >> ((a % 4) * 8)) & 15)
    }
    return d
}

function binl2b64(d) {
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var f = "";
    for (var b = 0; b < d.length * 4; b += 3) {
        var e = (((d[b >> 2] >> 8 * (b % 4)) & 255) << 16) | (((d[b + 1 >> 2] >> 8 * ((b + 1) % 4)) & 255) << 8) | ((d[b + 2 >> 2] >> 8 * ((b + 2) % 4)) & 255);
        for (var a = 0; a < 4; a++) {
            if (b * 8 + a * 6 > d.length * 32) {
                f += b64pad
            } else {
                f += c.charAt((e >> 6 * (3 - a)) & 63)
            }
        }
    }
    return f
}

var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
var isFirefox = (navigator.userAgent.indexOf("Firefox") != -1) ? true : false;
var IEVer = getIEVer();

function getIEVer() {
    var b = 0;
    var a = navigator.userAgent;
    if (a.indexOf("MSIE") > -1) {
        var c = a.split(";")[1];
        c = c.replace("MSIE", "");
        b = parseFloat(c)
    }
    return b
}

function getShortDateTime(h) {
    var g = new Date(h);
    var c = g.getMonth() + 1;
    var e = c.toString();
    if (e.length < 2) {
        e = "0" + e
    }
    var b = g.getDate().toString();
    if (b.length < 2) {
        b = "0" + b
    }
    var a = g.getHours().toString();
    if (a.length < 2) {
        a = "0" + a
    }
    var f = g.getMinutes().toString();
    if (f.length < 2) {
        f = "0" + f
    }
    return e + "月" + b + "日 " + a + ":" + f
}

function getLongDateTime(h) {
    var f = new Date(h);
    var j = f.getFullYear().toString();
    var g = f.getMonth() + 1;
    var e = g.toString();
    if (e.length < 2) {
        e = "0" + e
    }
    var l = f.getDate().toString();
    if (l.length < 2) {
        l = "0" + l
    }
    var c = f.getHours().toString();
    if (c.length < 2) {
        c = "0" + c
    }
    var b = f.getMinutes().toString();
    if (b.length < 2) {
        b = "0" + b
    }
    var a = f.getSeconds().toString();
    if (a.length < 2) {
        a = "0" + a
    }
    return j + "年" + e + "月" + l + "日 " + c + ":" + b + ":" + a
}

function getLongDate(g) {
    var f = new Date(g);
    var b = f.getFullYear().toString();
    var c = f.getMonth() + 1;
    var e = c.toString();
    if (e.length < 2) {
        e = "0" + e
    }
    var a = f.getDate().toString();
    if (a.length < 2) {
        a = "0" + a
    }
    return b + "年" + e + "月" + a + "日"
}

function getMediumDate(g) {
    var f = new Date(g);
    var b = f.getFullYear().toString();
    var c = f.getMonth() + 1;
    var e = c.toString();
    if (e.length < 2) {
        e = "0" + e
    }
    var a = f.getDate().toString();
    if (a.length < 2) {
        a = "0" + a
    }
    return b + "-" + e + "-" + a
}

function getShortDate(f) {
    var e = new Date(f);
    var b = e.getMonth() + 1;
    var c = b.toString();
    if (c.length < 2) {
        c = "0" + c
    }
    var a = e.getDate().toString();
    if (a.length < 2) {
        a = "0" + a
    }
    return c + "月" + a + "日"
}

function getShortTime(e) {
    var c = new Date(e);
    var a = c.getHours().toString();
    if (a.length < 2) {
        a = "0" + a
    }
    var b = c.getMinutes().toString();
    if (b.length < 2) {
        b = "0" + b
    }
    return a + ":" + b
}

function getDateForMysql(h) {
    var f = new Date(h);
    var j = f.getFullYear().toString();
    var g = f.getMonth() + 1;
    var e = g.toString();
    if (e.length < 2) {
        e = "0" + e
    }
    var l = f.getDate().toString();
    if (l.length < 2) {
        l = "0" + l
    }
    var c = f.getHours().toString();
    if (c.length < 2) {
        c = "0" + c
    }
    var b = f.getMinutes().toString();
    if (b.length < 2) {
        b = "0" + b
    }
    var a = f.getSeconds().toString();
    if (a.length < 2) {
        a = "0" + a
    }
    return j + "-" + e + "-" + l + " " + c + ":" + b + ":" + a
}

function Trim(a) {
    if (a.length < 1) {
        return ""
    }
    a = RTrim(a);
    a = LTrim(a);
    if (a == "") {
        return ""
    } else {
        return a
    }
}

function RTrim(c) {
    var d = String.fromCharCode(32);
    var e = c.length;
    var b = "";
    if (e < 0) {
        return ""
    }
    var a = e - 1;
    while (a > -1) {
        if (c.charAt(a) == d) {
        } else {
            b = c.substring(0, a + 1);
            break
        }
        a = a - 1
    }
    return b
}

function LTrim(c) {
    var d = String.fromCharCode(32);
    if (e < 1) {
        return ""
    }
    var e = c.length;
    var b = "";
    var a = 0;
    while (a < e) {
        if (c.charAt(a) == d) {
        } else {
            b = c.substring(a, e);
            break
        }
        a = a + 1
    }
    return b
}

function isEmptyDiv(c) {
    var a = Trim(c);
    if (a == "") {
        return true
    }
    var b = /^<DIV>(&nbsp;<\/DIV><DIV>)*(&nbsp;)*<\/DIV>$/i;
    if (b.test(a)) {
        return true
    } else {
        return false
    }
}

function _ge(a) {
    return document.getElementById(a)
}

function removeAllChild(b) {
    var c = b.firstChild;
    var a = c;
    while (a != null) {
        b.removeChild(a);
        a = a.nextSibling
    }
}

function insertAfter(b, c, a) {
    b.insertBefore(c, a.nextSibling)
}

function containsIllegalChar(b) {
    var a = /^(.*)['"‘“\/\\<>](.*)$/;
    if (a.test(b)) {
        return true
    } else {
        return false
    }
}

function testUrl(b) {
    var a = /^(.*)['"‘“<>](.*)$/;
    if (a.test(b)) {
        return false
    } else {
        return true
    }
}

function checkUserName(b) {
    var a = /^(.*)[<>](.*)$/;
    if (a.test(b)) {
        return false
    } else {
        return true
    }
}

function checkMail(c) {
    var a = /^(.+)@(.+)\.(.+)$/;
    if (!a.test(c)) {
        return false
    }
    if (c.indexOf("@") != c.lastIndexOf("@")) {
        return false
    }
    var b = /^(.*)['"‘“\/\\<>](.*)$/;
    if (b.test(c)) {
        return false
    } else {
        return true
    }
}

function checkDateFormat(b) {
    var a = /^\d{4}\-\d{2}\-\d{2}$/;
    if (a.test(b)) {
        return true
    } else {
        return false
    }
}

function checkBirthday(d) {
    var b = new Date();
    var a = d.split(new RegExp("-", "g"));
    var c = new Date(a[0], a[1] - 1, a[2]);
    if (parseInt(a[0]) < 1900) {
        return -1
    }
    if (c.getTime() > b.getTime()) {
        return 1
    } else {
        if (c.getFullYear() < 1900) {
            return -1
        } else {
            return 0
        }
    }
}

function extractHtmlText(b) {
    var c = new String("<[^<>]*>");
    var a = new RegExp(c, "ig");
    if (a.test(b)) {
        b = b.replace(a, "")
    }
    c = new String("(&nbsp;)|(&lt;)|(&gt;)|(&amp;)|(&quot;)");
    a = new RegExp(c, "ig");
    if (a.test(b)) {
        b = b.replace(a, "")
    }
    return b
}

function convertStr(a) {
    if (a == null) {
        return "&nbsp;"
    }
    a = Trim(a);
    if (a == "") {
        a = "&nbsp;"
    }
    return a
}

function replaceLineBreak(a) {
    return a.replace("\n", "<br>")
}

function textareaLimit(b, a) {
    if (b.value.length > a) {
        b.value = b.value.substring(0, a);
        alert("超过最大字数限制" + a + "个! ")
    }
}

function textLimit(b, a) {
    if (b.length > a) {
        b = b.substring(0, a);
        alert("超过最大字数限制" + a + "个! ")
    }
}

String.prototype.nlToBr = function () {
    return this.trim().nl2br()
};
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
};
String.prototype.nl2br = function () {
    return this.split("\n").join("<br />\n")
};
String.prototype.trimSQ = function () {
    return this.replace("&#39;", "\\'")
};
String.prototype.escape = function () {
    return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&#34;").replace(/'/g, "&#39;")
};
String.prototype.escape_freemark = function () {
    return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
};
String.prototype.unescape_freemark = function () {
    return this.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
};

function searchList(b, c) {
    var a = 0;
    for (a = 0; a < c.length; a++) {
        if (b == c[a]) {
            return true
        }
    }
    return false
}

function removeSameEl(e) {
    var c = new Array();
    var a;
    var b;
    for (a = 0; a < e.length; a++) {
        b = e[a];
        if (b != null) {
            var d;
            if (!searchList(b, c)) {
                c.push(b)
            }
        }
    }
    return c
}

function insertShiftAt(e, d, a) {
    if (a < 0) {
        a = 0
    } else {
        if (a > e.length) {
            positon = e.length
        }
    }
    var c;
    var b;
    for (i = e.length; i > a; i--) {
        e[i] = e[i - 1]
    }
    e[a] = d
}

var _get_event_src = function (a) {
    if (a) {
        return a.target
    }
    if (window.event) {
        return window.event.srcElement
    }
    return null
};

function appendCss(a, b) {
    $id(a).className += " " + b
}

function removeLastCss(a, b) {
    $id(a).className = $id(a).className.replace(new RegExp(" " + b + "\\b"), "")
}

function attachFocusEvent(a, b) {
    a.each(function (c) {
        if ($id(c)) {
            $id(c).onfocus = function () {
                this.className += " " + b
            };
            $id(c).onblur = function () {
                this.className = this.className.replace(new RegExp(" *" + b + "\\b"), "")
            }
        }
    })
}

function attachOverEvent(a, b) {
    a.each(function (c) {
        if ($id(c)) {
            $id(c).onmouseover = function () {
                this.className += " " + b
            };
            $id(c).onmouseout = function () {
                this.className = this.className.replace(new RegExp(" *" + b + "\\b"), "")
            }
        }
    })
}

var lastSelectId = "";

function applySelectCss(a) {
    if ($id(lastSelectId)) {
        $id(lastSelectId).className = $id(lastSelectId).className.replace(new RegExp(" *selectItem\\b"), "")
    }
    $id(a).className += " selectItem";
    lastSelectId = a
}

function attachFocusEvent2(b, c, d, a) {
    b.each(function (e) {
        if ($id(e)) {
            $id(e).onfocus = function () {
                this.className += " " + c;
                if (d != null) {
                    d($id(e))
                }
            };
            $id(e).onblur = function () {
                this.className = this.className.replace(new RegExp(" " + c + "\\b"), "");
                if (a != null) {
                    a($id(e))
                }
            }
        }
    })
}

function focusEvent(b, a) {
    b.className += " " + a
}

function blurEvent(b, a) {
    b.className = b.className.replace(new RegExp(" " + a + "\\b"), "")
}

function disable(a) {
    $id(a).disabled = true
}

function enable(a) {
    $id(a).disabled = false
}

function getFloat(c, a) {
    var d = c.toString();
    var b = d.indexOf(".");
    if (b == -1) {
        return parseFloat(d)
    }
    if (a == 0) {
        return parseFloat(d.substr(0, b))
    } else {
        return parseFloat(d.substr(0, b + a + 1))
    }
}

function copyText(b) {
    ie = (document.all) ? true : false;
    if (ie) {
        var a = document.body.createTextRange();
        a.moveToElementText($id(b));
        a.scrollIntoView();
        a.select();
        a.execCommand("Copy");
        a.collapse(false);
        return true
    } else {
        alert("你的浏览器安全设置不允许自动执行复制操作，请选中文本使用键盘(Ctrl+C)复制！");
        return false
    }
}

function detectFlash() {
    var c = 7;
    var b = 0;
    var a = 0;
    reqVer = parseFloat(c + "." + a);
    if (isIE && isWin && !isOpera) {
        versionStr = VBGetSwfVer()
    } else {
        versionStr = JSGetSwfVer()
    }
    if (versionStr == -1) {
        return false
    } else {
        if (versionStr != 0) {
            if (isIE && isWin && !isOpera) {
                tempArray = versionStr.split(" ");
                tempString = tempArray[1];
                versionArray = tempString.split(",")
            } else {
                versionArray = versionStr.split(".")
            }
            versionMajor = versionArray[0];
            versionMinor = versionArray[1];
            versionRevision = versionArray[2];
            if (versionRevision <= 0 && versionArray.length > 3) {
                versionRevision = versionArray[3]
            }
            versionString = versionMajor + "." + versionRevision;
            versionNum = parseFloat(versionString);
            if ((versionMajor > c) && (versionNum >= reqVer)) {
                return true
            } else {
                return ((versionNum >= reqVer && versionMinor >= b) ? true : false)
            }
        }
    }
}

function JSGetSwfVer() {
    if (navigator.plugins != null && navigator.plugins.length > 0) {
        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
            var b = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
            var a = navigator.plugins["Shockwave Flash" + b].description;
            descArray = a.split(" ");
            tempArrayMajor = descArray[2].split(".");
            versionMajor = tempArrayMajor[0];
            versionMinor = tempArrayMajor[1];
            if (descArray[3] != "") {
                tempArrayMinor = descArray[3].split(/\D/)
            } else {
                tempArrayMinor = descArray[4].split(/\D/)
            }
            versionRevision = tempArrayMinor[1] > 0 ? tempArrayMinor[1] : 0;
            flashVer = versionMajor + "." + versionMinor + "." + versionRevision
        } else {
            flashVer = -1
        }
    } else {
        if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) {
            flashVer = 4
        } else {
            if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) {
                flashVer = 3
            } else {
                if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) {
                    flashVer = 2
                } else {
                    flashVer = -1
                }
            }
        }
    }
    return flashVer
}

function MM_swapImgRestore() {
    var d, b, c = document.MM_sr;
    for (d = 0; c && d < c.length && (b = c[d]) && b.oSrc; d++) {
        b.src = b.oSrc
    }
}

function MM_preloadImages() {
    var f = document;
    if (f.images) {
        if (!f.MM_p) {
            f.MM_p = new Array()
        }
        var e, c = f.MM_p.length, b = MM_preloadImages.arguments;
        for (e = 0; e < b.length; e++) {
            if (b[e].indexOf("#") != 0) {
                f.MM_p[c] = new Image;
                f.MM_p[c++].src = b[e]
            }
        }
    }
}

function MM_findObj(f, e) {
    var c, b, a;
    if (!e) {
        e = document
    }
    if ((c = f.indexOf("?")) > 0 && parent.frames.length) {
        e = parent.frames[f.substring(c + 1)].document;
        f = f.substring(0, c)
    }
    if (!(a = e[f]) && e.all) {
        a = e.all[f]
    }
    for (b = 0; !a && b < e.forms.length; b++) {
        a = e.forms[b][f]
    }
    for (b = 0; !a && e.layers && b < e.layers.length; b++) {
        a = MM_findObj(f, e.layers[b].document)
    }
    if (!a && e.getElementById) {
        a = e.getElementById(f)
    }
    return a
}

function MM_swapImage() {
    var e, d = 0, b, c = MM_swapImage.arguments;
    document.MM_sr = new Array;
    for (e = 0; e < (c.length - 2); e += 3) {
        if ((b = MM_findObj(c[e])) != null) {
            document.MM_sr[d++] = b;
            if (!b.oSrc) {
                b.oSrc = b.src
            }
            b.src = c[e + 2]
        }
    }
}

function getBrowserPositionX(b) {
    var a = b.offsetWidth + 5;
    while (b != null) {
        a += b.offsetLeft;
        b = b.offsetParent
    }
    return a
}

function getBrowserPositionY(b) {
    var a = 0;
    while (b != null) {
        a += b.offsetTop;
        b = b.offsetParent
    }
    return a
}

function processTagString(a) {
    a = a.replace(/，/gi, ",").replace(/“/g, '"').replace(/”/g, '"');
    a = a.toLowerCase();
    var c = a.split(",");
    for (var b = 0; b < c.length; b++) {
        c[b] = Trim(c[b])
    }
    c = removeSameEl(c);
    a = "";
    for (var b = 0; b < c.length; b++) {
        if (c[b] != "") {
            if (a != "") {
                a += ","
            }
            a += c[b].substring(0, 36)
        }
    }
    return a
}

function getTagObjByTagname(b, c, d) {
    for (var a = 0; c && a < d.length; a++) {
        if (d[a].id == c) {
            return d[a]
        }
    }
    for (var a = 0; b && a < d.length; a++) {
        if (d[a].tagName == b || d[a].tagName == b.toLowerCase() || d[a].tagName == b.escape() || d[a].tagName == b.escape_freemark()) {
            return d[a]
        }
    }
    return null
}

function formatnumber(h, f) {
    var e, d, j, g;
    e = h.toString();
    d = e.indexOf(".");
    j = e.length;
    if (f == 0) {
        if (d != -1) {
            e = e.substring(0, d)
        }
    } else {
        if (d == -1) {
            e = e + ".";
            for (g = 1; g <= f; g++) {
                e = e + "0"
            }
        } else {
            e = e.substring(0, d + f + 1);
            for (g = j; g <= d + f; g++) {
                e = e + "0"
            }
        }
    }
    return e
}

function createJST(c, a) {
    var b = document.createElement("textarea");
    b.value = a;
    b.id = c;
    b.style.display = "none";
    document.body.appendChild(b)
}

function createJSTAndParse(b, a) {
    createJST(b, a);
    return TrimPath.parseDOMTemplate(b)
}

function getInputCharsFromDisplayHTML(b) {
    var a = b;
    a = a.replace(/<br>/ig, (Browser.isFirefox() ? "\n" : "\r\n"));
    a = a.replace(/&lt;/g, "<");
    a = a.replace(/&gt;/g, ">");
    a = a.replace(/&quot;/g, '"');
    a = a.replace(/&#039;/g, "'");
    a = a.replace(/&amp;/g, "&");
    a = a.replace(/&nbsp;/g, " ");
    return a
}

function toHtmlStr(b) {
    var a = b;
    a = a.replace(/&/g, "&amp;");
    a = a.replace(/</g, "&lt;");
    a = a.replace(/>/g, "&gt;");
    a = a.replace(/"/g, "&quot;");
    a = a.replace(/'/g, "&#039;");
    a = a.replace(/ /g, "&nbsp;");
    a = a.replace(/\n/g, "<br>");
    return a
}

function formatImageUrl(a) {
    if (a != null && a != "-1000") {
        return a
    }
    return "/style/common/user_default.gif"
}

function showKeywordHint(b, a) {
    var c = $id("$$_pagehint");
    if (c != null) {
        if (b == 1) {
            c.innerHTML = "你输入的" + a + "含有非法字符，不允许发布，我们将记录你的IP地址和ID资料备案。";
            c.style.display = "block"
        } else {
            if (b == 2) {
                c.innerHTML = "你输入的" + a + "含有非法字符，我们将记录你的IP地址和ID资料备案。是否继续发布？";
                c.style.display = "block"
            }
        }
    }
}

function showPageHint(b) {
    var a = $id("$$_pagehint");
    if (a != null) {
        a.innerHTML = b;
        a.style.display = "block"
    }
}

function filterWarning(b, a) {
    if (b == undefined || b == null || b.type != "KeyWordRuntimeException") {
        return 0
    }
    if (a == undefined || a == false) {
        alert("你发表的内容包含敏感关键字，不允许发布！");
        return -1
    }
    return -1
}

function captchaWarning(b, a) {
    if (b == undefined || b == null || b.type != "CaptchaException") {
        return false
    }
    showInfo(a, "验证码不正确", "error");
    return true
}

function checkOtherSiteUrl(f) {
    var d = false;
    var c = 0;
    while ((c = f.indexOf("http://")) != -1) {
        var b = f.substring(c + 7);
        var g = b.indexOf("163.com");
        if (g > -1) {
            var a = c;
            while (a < g) {
                var e = b.charAt(a);
                if (!((e >= "0" && e <= "9") || (e >= "a" && e <= "z") || (e >= "A" && e <= "Z") || e == ".")) {
                    d = true;
                    break
                }
                a++
            }
            if (g > 0 && b.charAt(g - 1) != ".") {
                d = true;
                break
            }
            f = b
        } else {
            d = true;
            break
        }
        if (d == true) {
            break
        }
    }
    return d
}

function showInfo(d, c, b) {
    var a = document.getElementById(d);
    if (a == null) {
        alert(c);
        return false
    }
    a.style.display = "inline";
    if (b == "ok") {
        a.innerHTML = '<img src="/style/common/ico_alert.gif"/>' + c
    } else {
        if (b == "info") {
            a.innerHTML = '<img src="/style/common/ico_alert.gif"/>' + c
        } else {
            if (b == "error") {
                a.innerHTML = '<img src="/style/common/ico_alert.gif"/>' + c
            } else {
                a.innerHTML = '<img src="/style/common/ico_alert.gif"/>' + c
            }
        }
    }
    window.setTimeout(function () {
        fadeInfo(d)
    }, 5000)
}

function fadeInfo(a) {
    document.getElementById(a).style.display = "none"
}

function stripData(j, h) {
    var g = ["head", "script", "style", "object", "applet", "noscript", "frameset", "noframes"];
    var l = ["form", "meta", "body", "html", "label", "select", "optgroup", "option", "textarea", "title", "script", "xmp", "applet", "embed", "head", "frameset", "iframe", "noframes", "noscript", "object", "style", "input", "base", "basefont", "isindex", "link", "frame", "param", "xml", "xss", "st1:chsdate"];
    var m = ["onabort", "onblur", "onchange", "onclick", "ondblclick", "ondragdrop", "onerror", "onfocus", "onkeydown", "onkeypress", "onkeyup", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmove", "onreset", "onresize", "onselect", "onsubmit", "onunload", "allowScriptAccess", "disabled", "id", "name", "class"];
    var b = ["position", "javascript", "vbscript", "actionscript", "xmp", "activex"];
    var c = false;
    var a;
    var d = new RegExp("(&#)|(&%)", "ig");
    if (d.test(j)) {
        j = j.replace(d, "&")
    }
    delete d;
    d = new RegExp("(\t)", "ig");
    if (d.test(j)) {
        j = j.replace(d, " ")
    }
    delete d;
    a = "(<[^<>]*)(\r|\n)([^>]*>)";
    d = new RegExp(a, "ig");
    while (d.test(j)) {
        j = j.replace(d, "$1 $3");
        delete d;
        d = new RegExp(a, "ig")
    }
    delete d;
    a = "(<[^<>]*)(\\\\|/\\*.*\\*/)([^>]*>)";
    d = new RegExp(a, "ig");
    while (d.test(j)) {
        j = j.replace(d, "$1$3");
        delete d;
        d = new RegExp(a, "ig")
    }
    delete d;
    for (var f = 0; f < g.length; f++) {
        if (findNoStripTag(g[f], h)) {
            continue
        }
        a = "<\\s*" + g[f] + "[^>]*>[\\s\\S]*?<\\s*/\\s*" + g[f] + "[^>]*>";
        d = new RegExp(a, "ig");
        while (d.test(j)) {
            c = true;
            j = j.replace(d, "");
            delete d;
            d = new RegExp(a, "ig")
        }
        delete d
    }
    for (var f = 0; f < l.length; f++) {
        if (findNoStripTag(l[f], h)) {
            continue
        }
        a = "<\\s*[/?]?\\s*" + l[f] + "[^>]*>";
        d = new RegExp(a, "ig");
        while (d.test(j)) {
            c = true;
            j = j.replace(d, "");
            delete d;
            d = new RegExp(a, "ig")
        }
        delete d
    }
    for (var f = 0; f < m.length; f++) {
        if (findNoStripTag(m[f], h)) {
            continue
        }
        a = "(<[^<]*[\\s'\"])" + m[f] + "\\s*=\\s*['\"]?[^\\s'\">]*[\\s'\"]?([^>]*>)";
        d = new RegExp(a, "ig");
        while (d.test(j)) {
            if (m[f] != "allowScriptAccess") {
                c = true
            }
            j = j.replace(d, "$1$2");
            delete d;
            d = new RegExp(a, "ig")
        }
        delete d
    }
    d = new RegExp("(<\\s*embed)([^>]*>)", "ig");
    if (d.test(j)) {
        j = j.replace(d, '$1 allowScriptAccess="never" $2')
    }
    delete d;
    for (var f = 0; f < b.length; f++) {
        if (findNoStripTag(b[f], h)) {
            continue
        }
        a = "(<[^<]*)" + b[f] + '\\s*:\\s*[^\\s;">]*([^>]*>)';
        d = new RegExp(a, "ig");
        while (d.test(j)) {
            c = true;
            j = j.replace(d, "$1$2");
            delete d;
            d = new RegExp(a, "ig")
        }
        delete d
    }
    a = "(<[^<]*)expression\\s*\\([^\\)]*\\)([^>]*>)";
    d = new RegExp(a, "ig");
    while (d.test(j)) {
        c = true;
        j = j.replace(d, "$1$2");
        delete d;
        d = new RegExp(a, "ig")
    }
    delete d;
    a = "(<[^<]*)url\\s*\\([^\\)]*\\.(js|do)\\s*\\)([^>]*>)";
    d = new RegExp(a, "ig");
    while (d.test(j)) {
        c = true;
        j = j.replace(d, "$1$3");
        delete d;
        d = new RegExp(a, "ig")
    }
    delete d;
    a = "(<[^<]*[\\s'\"])src\\s*=\\s*['\"]?.*?\\.(js|do)(>)";
    d = new RegExp(a, "ig");
    while (d.test(j)) {
        c = true;
        j = j.replace(d, "$1$3");
        delete d;
        d = new RegExp(a, "ig")
    }
    delete d;
    a = "(<[^<]*[\\s'\"])src\\s*=\\s*['\"]?.*?\\.(js|do)[\\s'\"]([^>]*>)";
    d = new RegExp(a, "ig");
    while (d.test(j)) {
        c = true;
        j = j.replace(d, "$1$3");
        delete d;
        d = new RegExp(a, "ig")
    }
    delete d;
    var e = {};
    e.content = j;
    e.isHarm = c;
    return e
}

function findNoStripTag(a, b) {
    if (b == null || b == "") {
        return false
    }
    for (var c = 0; c < b.length; c++) {
        if (b[c] == a) {
            return true
        }
    }
    return false
}

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

function base64encode(g) {
    var c, e, a;
    var f, d, b;
    a = g.length;
    e = 0;
    c = "";
    while (e < a) {
        f = g.charCodeAt(e++) & 255;
        if (e == a) {
            c += base64EncodeChars.charAt(f >> 2);
            c += base64EncodeChars.charAt((f & 3) << 4);
            c += "==";
            break
        }
        d = g.charCodeAt(e++);
        if (e == a) {
            c += base64EncodeChars.charAt(f >> 2);
            c += base64EncodeChars.charAt(((f & 3) << 4) | ((d & 240) >> 4));
            c += base64EncodeChars.charAt((d & 15) << 2);
            c += "=";
            break
        }
        b = g.charCodeAt(e++);
        c += base64EncodeChars.charAt(f >> 2);
        c += base64EncodeChars.charAt(((f & 3) << 4) | ((d & 240) >> 4));
        c += base64EncodeChars.charAt(((d & 15) << 2) | ((b & 192) >> 6));
        c += base64EncodeChars.charAt(b & 63)
    }
    return c
}

function base64decode(h) {
    var g, f, d, b;
    var e, a, c;
    a = h.length;
    e = 0;
    c = "";
    while (e < a) {
        do {
            g = base64DecodeChars[h.charCodeAt(e++) & 255]
        } while (e < a && g == -1);
        if (g == -1) {
            break
        }
        do {
            f = base64DecodeChars[h.charCodeAt(e++) & 255]
        } while (e < a && f == -1);
        if (f == -1) {
            break
        }
        c += String.fromCharCode((g << 2) | ((f & 48) >> 4));
        do {
            d = h.charCodeAt(e++) & 255;
            if (d == 61) {
                return c
            }
            d = base64DecodeChars[d]
        } while (e < a && d == -1);
        if (d == -1) {
            break
        }
        c += String.fromCharCode(((f & 15) << 4) | ((d & 60) >> 2));
        do {
            b = h.charCodeAt(e++) & 255;
            if (b == 61) {
                return c
            }
            b = base64DecodeChars[b]
        } while (e < a && b == -1);
        if (b == -1) {
            break
        }
        c += String.fromCharCode(((d & 3) << 6) | b)
    }
    return c
}

function utf16to8(e) {
    var b, d, a, f;
    b = "";
    a = e.length;
    for (d = 0; d < a; d++) {
        f = e.charCodeAt(d);
        if ((f >= 1) && (f <= 127)) {
            b += e.charAt(d)
        } else {
            if (f > 2047) {
                b += String.fromCharCode(224 | ((f >> 12) & 15));
                b += String.fromCharCode(128 | ((f >> 6) & 63));
                b += String.fromCharCode(128 | ((f >> 0) & 63))
            } else {
                b += String.fromCharCode(192 | ((f >> 6) & 31));
                b += String.fromCharCode(128 | ((f >> 0) & 63))
            }
        }
    }
    return b
}

function setHomePageUtil(a) {
    if (document.all) {
        document.body.style.behavior = "url(#default#homepage)";
        document.body.setHomePage(a)
    } else {
        alert("浏览器不支持，请手动设置为首页")
    }
    return false
}

function addFavoriteUtil(a, c, b) {
    if (c == null || c == "") {
        c = b
    }
    if (document.all && window.external) {
        window.external.AddFavorite(a, c + "的网易博客")
    } else {
        if (window.sidebar) {
            window.sidebar.addPanel(c + "的网易博客", a, "")
        } else {
            alert("浏览器不支持，请手动加入收藏夹")
        }
    }
}

function toDHTML(a) {
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/ /g, "&nbsp;").replace(/\n/g, "<br>")
}

var Prototype = {
    Version: "1.4.0",
    ScriptFragment: "(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)",
    emptyFunction: function () {
    },
    K: function (a) {
        return a
    }
};
var Class = {
    create: function () {
        return function () {
            this.initialize.apply(this, arguments)
        }
    }
};
var Abstract = new Object();
Object.extend = function (a, b) {
    for (property in b) {
        a[property] = b[property]
    }
    return a
};
Object.inspect = function (a) {
    try {
        if (a == undefined) {
            return "undefined"
        }
        if (a == null) {
            return "null"
        }
        return a.inspect ? a.inspect() : a.toString()
    } catch (b) {
        if (b instanceof RangeError) {
            return "..."
        }
        throw b
    }
};
Function.prototype.bind = function () {
    var a = this, c = $A(arguments), b = c.shift();
    return function () {
        return a.apply(b, c.concat($A(arguments)))
    }
};
Function.prototype.bindAsEventListener = function (b) {
    var a = this;
    return function (c) {
        return a.call(b, c || window.event)
    }
};
Function.prototype.bindEventWithArgs = function () {
    var a = this, c = $A(arguments), b = c.shift();
    return function (d) {
        return a.apply(b, c.concat($A(arguments)).concat(d || window.event))
    }
};
Object.extend(Number.prototype, {
    toColorPart: function () {
        var a = this.toString(16);
        if (this < 16) {
            return "0" + a
        }
        return a
    }, succ: function () {
        return this + 1
    }, times: function (a) {
        $R(0, this, true).each(a);
        return this
    }
});
var Try = {
    these: function () {
        var c;
        for (var b = 0; b < arguments.length; b++) {
            var a = arguments[b];
            try {
                c = a();
                break
            } catch (d) {
            }
        }
        return c
    }
};
var PeriodicalExecuter = Class.create();
PeriodicalExecuter.prototype = {
    initialize: function (b, a) {
        this.callback = b;
        this.frequency = a;
        this.currentlyExecuting = false;
        this.registerCallback()
    }, registerCallback: function () {
        setInterval(this.onTimerEvent.bind(this), this.frequency * 1000)
    }, onTimerEvent: function () {
        if (!this.currentlyExecuting) {
            try {
                this.currentlyExecuting = true;
                this.callback()
            } finally {
                this.currentlyExecuting = false
            }
        }
    }
};

function $id() {
    var c = new Array();
    for (var b = 0; b < arguments.length; b++) {
        var a = arguments[b];
        if (typeof a == "string") {
            a = document.getElementById(a)
        }
        if (arguments.length == 1) {
            return a
        }
        c.push(a)
    }
    return c
}

Object.extend(String.prototype, {
    stripTags: function () {
        return this.replace(/<\/?[^>]+>/gi, "")
    }, stripScripts: function () {
        return this.replace(new RegExp(Prototype.ScriptFragment, "img"), "")
    }, extractScripts: function () {
        var b = new RegExp(Prototype.ScriptFragment, "img");
        var a = new RegExp(Prototype.ScriptFragment, "im");
        return (this.match(b) || []).map(function (c) {
            return (c.match(a) || ["", ""])[1]
        })
    }, evalScripts: function () {
        return this.extractScripts().map(eval)
    }, escapeHTML: function () {
        var b = document.createElement("div");
        var a = document.createTextNode(this);
        b.appendChild(a);
        return b.innerHTML
    }, unescapeHTML: function () {
        var a = document.createElement("div");
        a.innerHTML = this.stripTags();
        return a.childNodes[0] ? a.childNodes[0].nodeValue : ""
    }, toQueryParams: function () {
        var a = this.match(/^\??(.*)$/)[1].split("&");
        return a.inject({}, function (d, b) {
            var c = b.split("=");
            d[c[0]] = c[1];
            return d
        })
    }, toArray: function () {
        return this.split("")
    }, camelize: function () {
        var d = this.split("-");
        if (d.length == 1) {
            return d[0]
        }
        var b = this.indexOf("-") == 0 ? d[0].charAt(0).toUpperCase() + d[0].substring(1) : d[0];
        for (var c = 1, a = d.length; c < a; c++) {
            var e = d[c];
            b += e.charAt(0).toUpperCase() + e.substring(1)
        }
        return b
    }, inspect: function () {
        return "'" + this.replace("\\", "\\\\").replace("'", "\\'") + "'"
    }
});
String.prototype.parseQuery = String.prototype.toQueryParams;
var $break = new Object();
var $continue = new Object();
var Enumerable = {
    each: function (b) {
        var a = 0;
        try {
            this._each(function (d) {
                try {
                    b(d, a++)
                } catch (f) {
                    if (f != $continue) {
                        throw f
                    }
                }
            })
        } catch (c) {
            if (c != $break) {
                throw c
            }
        }
    }, all: function (b) {
        var a = true;
        this.each(function (d, c) {
            a = a && !!(b || Prototype.K)(d, c);
            if (!a) {
                throw $break
            }
        });
        return a
    }, any: function (b) {
        var a = true;
        this.each(function (d, c) {
            if (a = !!(b || Prototype.K)(d, c)) {
                throw $break
            }
        });
        return a
    }, collect: function (b) {
        var a = [];
        this.each(function (d, c) {
            a.push(b(d, c))
        });
        return a
    }, detect: function (b) {
        var a;
        this.each(function (d, c) {
            if (b(d, c)) {
                a = d;
                throw $break
            }
        });
        return a
    }, findAll: function (b) {
        var a = [];
        this.each(function (d, c) {
            if (b(d, c)) {
                a.push(d)
            }
        });
        return a
    }, grep: function (c, b) {
        var a = [];
        this.each(function (f, e) {
            var d = f.toString();
            if (d.match(c)) {
                a.push((b || Prototype.K)(f, e))
            }
        });
        return a
    }, include: function (a) {
        var b = false;
        this.each(function (c) {
            if (c == a) {
                b = true;
                throw $break
            }
        });
        return b
    }, inject: function (a, b) {
        this.each(function (d, c) {
            a = b(a, d, c)
        });
        return a
    }, invoke: function (b) {
        var a = $A(arguments).slice(1);
        return this.collect(function (c) {
            return c[b].apply(c, a)
        })
    }, max: function (b) {
        var a;
        this.each(function (d, c) {
            d = (b || Prototype.K)(d, c);
            if (d >= (a || d)) {
                a = d
            }
        });
        return a
    }, min: function (b) {
        var a;
        this.each(function (d, c) {
            d = (b || Prototype.K)(d, c);
            if (d <= (a || d)) {
                a = d
            }
        });
        return a
    }, partition: function (c) {
        var b = [], a = [];
        this.each(function (e, d) {
            ((c || Prototype.K)(e, d) ? b : a).push(e)
        });
        return [b, a]
    }, pluck: function (b) {
        var a = [];
        this.each(function (d, c) {
            a.push(d[b])
        });
        return a
    }, reject: function (b) {
        var a = [];
        this.each(function (d, c) {
            if (!b(d, c)) {
                a.push(d)
            }
        });
        return a
    }, sortBy: function (a) {
        return this.collect(function (c, b) {
            return {value: c, criteria: a(c, b)}
        }).sort(function (f, e) {
            var d = f.criteria, c = e.criteria;
            return d < c ? -1 : d > c ? 1 : 0
        }).pluck("value")
    }, toArray: function () {
        return this.collect(Prototype.K)
    }, zip: function () {
        var b = Prototype.K, a = $A(arguments);
        if (typeof a.last() == "function") {
            b = a.pop()
        }
        var c = [this].concat(a).map($A);
        return this.map(function (e, d) {
            b(e = c.pluck(d));
            return e
        })
    }, inspect: function () {
        return "#<Enumerable:" + this.toArray().inspect() + ">"
    }
};
Object.extend(Enumerable, {
    map: Enumerable.collect,
    find: Enumerable.detect,
    select: Enumerable.findAll,
    member: Enumerable.include,
    entries: Enumerable.toArray
});
var $A = Array.from = function (c) {
    if (!c) {
        return []
    }
    if (c.toArray) {
        return c.toArray()
    } else {
        var b = [];
        for (var a = 0; a < c.length; a++) {
            b.push(c[a])
        }
        return b
    }
};
Object.extend(Array.prototype, Enumerable);
Array.prototype._reverse = Array.prototype.reverse;
Object.extend(Array.prototype, {
    _each: function (b) {
        for (var a = 0; a < this.length; a++) {
            b(this[a])
        }
    }, clear: function () {
        this.length = 0;
        return this
    }, first: function () {
        return this[0]
    }, last: function () {
        return this[this.length - 1]
    }, compact: function () {
        return this.select(function (a) {
            return a != undefined || a != null
        })
    }, flatten: function () {
        return this.inject([], function (b, a) {
            return b.concat(a.constructor == Array ? a.flatten() : [a])
        })
    }, without: function () {
        var a = $A(arguments);
        return this.select(function (b) {
            return !a.include(b)
        })
    }, indexOf: function (a) {
        for (var b = 0; b < this.length; b++) {
            if (this[b] == a) {
                return b
            }
        }
        return -1
    }, reverse: function (a) {
        return (a !== false ? this : this.toArray())._reverse()
    }, shift: function () {
        var a = this[0];
        for (var b = 0; b < this.length - 1; b++) {
            this[b] = this[b + 1]
        }
        if (this.length > 0) {
            this.length--
        }
        return a
    }, inspect: function () {
        return "[" + this.map(Object.inspect).join(", ") + "]"
    }
});
var Hash = {
    _each: function (a) {
        for (key in this) {
            var b = this[key];
            if (typeof b == "function") {
                continue
            }
            var c = [key, b];
            c.key = key;
            c.value = b;
            a(c)
        }
    }, keys: function () {
        return this.pluck("key")
    }, values: function () {
        return this.pluck("value")
    }, merge: function (a) {
        return $H(a).inject($H(this), function (b, c) {
            b[c.key] = c.value;
            return b
        })
    }, toQueryString: function () {
        return this.map(function (a) {
            return a.map(encodeURIComponent).join("=")
        }).join("&")
    }, inspect: function () {
        return "#<Hash:{" + this.map(function (a) {
            return a.map(Object.inspect).join(": ")
        }).join(", ") + "}>"
    }
};

function $H(a) {
    var b = Object.extend({}, a || {});
    Object.extend(b, Enumerable);
    Object.extend(b, Hash);
    return b
}

ObjectRange = Class.create();
Object.extend(ObjectRange.prototype, Enumerable);
Object.extend(ObjectRange.prototype, {
    initialize: function (c, a, b) {
        this.start = c;
        this.end = a;
        this.exclusive = b
    }, _each: function (a) {
        var b = this.start;
        do {
            a(b);
            b = b.succ()
        } while (this.include(b))
    }, include: function (a) {
        if (a < this.start) {
            return false
        }
        if (this.exclusive) {
            return a < this.end
        }
        return a <= this.end
    }
});
var $R = function (c, a, b) {
    return new ObjectRange(c, a, b)
};
var Ajax = {
    getTransport: function () {
        return Try.these(function () {
            return new ActiveXObject("Msxml2.XMLHTTP")
        }, function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }, function () {
            return new XMLHttpRequest()
        }) || false
    }, activeRequestCount: 0
};
Ajax.Responders = {
    responders: [], _each: function (a) {
        this.responders._each(a)
    }, register: function (a) {
        if (!this.include(a)) {
            this.responders.push(a)
        }
    }, unregister: function (a) {
        this.responders = this.responders.without(a)
    }, dispatch: function (d, b, c, a) {
        this.each(function (f) {
            if (f[d] && typeof f[d] == "function") {
                try {
                    f[d].apply(f, [b, c, a])
                } catch (g) {
                }
            }
        })
    }
};
Object.extend(Ajax.Responders, Enumerable);
Ajax.Responders.register({
    onCreate: function () {
        Ajax.activeRequestCount++
    }, onComplete: function () {
        Ajax.activeRequestCount--
    }
});
Ajax.Base = function () {
};
Ajax.Base.prototype = {
    setOptions: function (a) {
        this.options = {method: "post", asynchronous: true, parameters: ""};
        Object.extend(this.options, a || {})
    }, responseIsSuccess: function () {
        return this.transport.status == undefined || this.transport.status == 0 || (this.transport.status >= 200 && this.transport.status < 300)
    }, responseIsFailure: function () {
        return !this.responseIsSuccess()
    }
};
Ajax.Request = Class.create();
Ajax.Request.Events = ["Uninitialized", "Loading", "Loaded", "Interactive", "Complete"];
Ajax.Request.prototype = Object.extend(new Ajax.Base(), {
    initialize: function (b, a) {
        this.transport = Ajax.getTransport();
        this.setOptions(a);
        this.request(b)
    }, request: function (b) {
        var c = this.options.parameters || "";
        if (c.length > 0) {
            c += "&_="
        }
        try {
            this.url = b;
            if (this.options.method == "get" && c.length > 0) {
                this.url += (this.url.match(/\?/) ? "&" : "?") + c
            }
            Ajax.Responders.dispatch("onCreate", this, this.transport);
            this.transport.open(this.options.method, this.url, this.options.asynchronous);
            if (this.options.asynchronous) {
                this.transport.onreadystatechange = this.onStateChange.bind(this);
                setTimeout((function () {
                    this.respondToReadyState(1)
                }).bind(this), 10)
            }
            this.setRequestHeaders();
            var a = this.options.postBody ? this.options.postBody : c;
            this.transport.send(this.options.method == "post" ? a : null)
        } catch (d) {
            this.dispatchException(d)
        }
    }, setRequestHeaders: function () {
        var b = ["X-Requested-With", "XMLHttpRequest", "X-Prototype-Version", Prototype.Version];
        if (this.options.method == "post") {
            b.push("Content-type", "application/x-www-form-urlencoded");
            if (this.transport.overrideMimeType) {
                b.push("Connection", "close")
            }
        }
        if (this.options.requestHeaders) {
            b.push.apply(b, this.options.requestHeaders)
        }
        for (var a = 0; a < b.length; a += 2) {
            this.transport.setRequestHeader(b[a], b[a + 1])
        }
    }, onStateChange: function () {
        var a = this.transport.readyState;
        if (a != 1) {
            this.respondToReadyState(this.transport.readyState)
        }
    }, header: function (a) {
        try {
            return this.transport.getResponseHeader(a)
        } catch (b) {
        }
    }, evalJSON: function () {
        try {
            return eval(this.header("X-JSON"))
        } catch (e) {
        }
    }, evalResponse: function () {
        try {
            return eval(this.transport.responseText)
        } catch (e) {
            this.dispatchException(e)
        }
    }, respondToReadyState: function (a) {
        var c = Ajax.Request.Events[a];
        var f = this.transport, b = this.evalJSON();
        if (c == "Complete") {
            try {
                (this.options["on" + this.transport.status] || this.options["on" + (this.responseIsSuccess() ? "Success" : "Failure")] || Prototype.emptyFunction)(f, b)
            } catch (d) {
                this.dispatchException(d)
            }
            if ((this.header("Content-type") || "").match(/^text\/javascript/i)) {
                this.evalResponse()
            }
        }
        try {
            (this.options["on" + c] || Prototype.emptyFunction)(f, b);
            Ajax.Responders.dispatch("on" + c, this, f, b)
        } catch (d) {
            this.dispatchException(d)
        }
        if (c == "Complete") {
            this.transport.onreadystatechange = Prototype.emptyFunction
        }
    }, dispatchException: function (a) {
        (this.options.onException || Prototype.emptyFunction)(this, a);
        Ajax.Responders.dispatch("onException", this, a)
    }
});
Ajax.Updater = Class.create();
Object.extend(Object.extend(Ajax.Updater.prototype, Ajax.Request.prototype), {
    initialize: function (a, c, b) {
        this.containers = {
            success: a.success ? $id(a.success) : $id(a),
            failure: a.failure ? $id(a.failure) : (a.success ? null : $id(a))
        };
        this.transport = Ajax.getTransport();
        this.setOptions(b);
        var d = this.options.onComplete || Prototype.emptyFunction;
        this.options.onComplete = (function (f, e) {
            this.updateContent();
            d(f, e)
        }).bind(this);
        this.request(c)
    }, updateContent: function () {
        var b = this.responseIsSuccess() ? this.containers.success : this.containers.failure;
        var a = this.transport.responseText;
        if (!this.options.evalScripts) {
            a = a.stripScripts()
        }
        if (b) {
            if (this.options.insertion) {
                new this.options.insertion(b, a)
            } else {
                Element.update(b, a)
            }
        }
        if (this.responseIsSuccess()) {
            if (this.onComplete) {
                setTimeout(this.onComplete.bind(this), 10)
            }
        }
    }
});
Ajax.PeriodicalUpdater = Class.create();
Ajax.PeriodicalUpdater.prototype = Object.extend(new Ajax.Base(), {
    initialize: function (a, c, b) {
        this.setOptions(b);
        this.onComplete = this.options.onComplete;
        this.frequency = (this.options.frequency || 2);
        this.decay = (this.options.decay || 1);
        this.updater = {};
        this.container = a;
        this.url = c;
        this.start()
    }, start: function () {
        this.options.onComplete = this.updateComplete.bind(this);
        this.onTimerEvent()
    }, stop: function () {
        this.updater.onComplete = undefined;
        clearTimeout(this.timer);
        (this.onComplete || Prototype.emptyFunction).apply(this, arguments)
    }, updateComplete: function (a) {
        if (this.options.decay) {
            this.decay = (a.responseText == this.lastText ? this.decay * this.options.decay : 1);
            this.lastText = a.responseText
        }
        this.timer = setTimeout(this.onTimerEvent.bind(this), this.decay * this.frequency * 1000)
    }, onTimerEvent: function () {
        this.updater = new Ajax.Updater(this.container, this.url, this.options)
    }
});
document.getElementsByClassName = function (c, a) {
    var b = ($id(a) || document.body).getElementsByTagName("*");
    return $A(b).inject([], function (d, e) {
        if (e.className && e.className.match && e.className.match(new RegExp("(^|\\s)" + c + "(\\s|$)"))) {
            d.push(e)
        }
        return d
    })
};
if (!window.Element) {
    var Element = new Object()
}
Object.extend(Element, {
    visible: function (a) {
        return $id(a).style.display != "none"
    }, toggle: function () {
        for (var b = 0; b < arguments.length; b++) {
            var a = $id(arguments[b]);
            Element[Element.visible(a) ? "hide" : "show"](a)
        }
    }, hide: function () {
        for (var b = 0; b < arguments.length; b++) {
            var a = $id(arguments[b]);
            a.style.display = "none"
        }
    }, show: function () {
        for (var b = 0; b < arguments.length; b++) {
            var a = $id(arguments[b]);
            a.style.display = ""
        }
    }, remove: function (a) {
        a = $id(a);
        a.parentNode.removeChild(a)
    }, update: function (b, a) {
        $id(b).innerHTML = a.stripScripts();
        setTimeout(function () {
            a.evalScripts()
        }, 10)
    }, getHeight: function (a) {
        a = $id(a);
        return a.offsetHeight
    }, classNames: function (a) {
        return new Element.ClassNames(a)
    }, hasClassName: function (a, b) {
        if (!(a = $id(a))) {
            return
        }
        return Element.classNames(a).include(b)
    }, addClassName: function (a, b) {
        if (!(a = $id(a))) {
            return
        }
        return Element.classNames(a).add(b)
    }, removeClassName: function (a, b) {
        if (!(a = $id(a))) {
            return
        }
        return Element.classNames(a).remove(b)
    }, cleanWhitespace: function (b) {
        b = $id(b);
        for (var a = 0; a < b.childNodes.length; a++) {
            var c = b.childNodes[a];
            if (c.nodeType == 3 && !/\S/.test(c.nodeValue)) {
                Element.remove(c)
            }
        }
    }, empty: function (a) {
        return $id(a).innerHTML.match(/^\s*$/)
    }, scrollTo: function (b) {
        b = $id(b);
        var a = b.x ? b.x : b.offsetLeft, c = b.y ? b.y : b.offsetTop;
        window.scrollTo(a, c)
    }, getStyle: function (b, c) {
        b = $id(b);
        var d = b.style[c.camelize()];
        if (!d) {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var a = document.defaultView.getComputedStyle(b, null);
                d = a ? a.getPropertyValue(c) : null
            } else {
                if (b.currentStyle) {
                    d = b.currentStyle[c.camelize()]
                }
            }
        }
        if (window.opera && ["left", "top", "right", "bottom"].include(c)) {
            if (Element.getStyle(b, "position") == "static") {
                d = "auto"
            }
        }
        return d == "auto" ? null : d
    }, setStyle: function (a, b) {
        a = $id(a);
        for (name in b) {
            a.style[name.camelize()] = b[name]
        }
    }, getDimensions: function (b) {
        b = $id(b);
        if (Element.getStyle(b, "display") != "none") {
            return {width: b.offsetWidth, height: b.offsetHeight}
        }
        var a = b.style;
        var e = a.visibility;
        var c = a.position;
        a.visibility = "hidden";
        a.position = "absolute";
        a.display = "";
        var f = b.clientWidth;
        var d = b.clientHeight;
        a.display = "none";
        a.position = c;
        a.visibility = e;
        return {width: f, height: d}
    }, makePositioned: function (a) {
        a = $id(a);
        var b = Element.getStyle(a, "position");
        if (b == "static" || !b) {
            a._madePositioned = true;
            a.style.position = "relative";
            if (window.opera) {
                a.style.top = 0;
                a.style.left = 0
            }
        }
    }, undoPositioned: function (a) {
        a = $id(a);
        if (a._madePositioned) {
            a._madePositioned = undefined;
            a.style.position = a.style.top = a.style.left = a.style.bottom = a.style.right = ""
        }
    }, makeClipping: function (a) {
        a = $id(a);
        if (a._overflow) {
            return
        }
        a._overflow = a.style.overflow;
        if ((Element.getStyle(a, "overflow") || "visible") != "hidden") {
            a.style.overflow = "hidden"
        }
    }, undoClipping: function (a) {
        a = $id(a);
        if (a._overflow) {
            return
        }
        a.style.overflow = a._overflow;
        a._overflow = undefined
    }
});
var Toggle = new Object();
Toggle.display = Element.toggle;
Abstract.Insertion = function (a) {
    this.adjacency = a
};
Abstract.Insertion.prototype = {
    initialize: function (a, b) {
        this.element = $id(a);
        this.content = b.stripScripts();
        if (this.adjacency && this.element.insertAdjacentHTML) {
            try {
                this.element.insertAdjacentHTML(this.adjacency, this.content)
            } catch (c) {
                if (this.element.tagName.toLowerCase() == "tbody") {
                    this.insertContent(this.contentFromAnonymousTable())
                } else {
                    throw c
                }
            }
        } else {
            this.range = this.element.ownerDocument.createRange();
            if (this.initializeRange) {
                this.initializeRange()
            }
            this.insertContent([this.range.createContextualFragment(this.content)])
        }
        setTimeout(function () {
            b.evalScripts()
        }, 10)
    }, contentFromAnonymousTable: function () {
        var a = document.createElement("div");
        a.innerHTML = "<table><tbody>" + this.content + "</tbody></table>";
        return $A(a.childNodes[0].childNodes[0].childNodes)
    }
};
var Insertion = new Object();
Insertion.Before = Class.create();
Insertion.Before.prototype = Object.extend(new Abstract.Insertion("beforeBegin"), {
    initializeRange: function () {
        this.range.setStartBefore(this.element)
    }, insertContent: function (a) {
        a.each((function (b) {
            this.element.parentNode.insertBefore(b, this.element)
        }).bind(this))
    }
});
Insertion.Top = Class.create();
Insertion.Top.prototype = Object.extend(new Abstract.Insertion("afterBegin"), {
    initializeRange: function () {
        this.range.selectNodeContents(this.element);
        this.range.collapse(true)
    }, insertContent: function (a) {
        a.reverse(false).each((function (b) {
            this.element.insertBefore(b, this.element.firstChild)
        }).bind(this))
    }
});
Insertion.Bottom = Class.create();
Insertion.Bottom.prototype = Object.extend(new Abstract.Insertion("beforeEnd"), {
    initializeRange: function () {
        this.range.selectNodeContents(this.element);
        this.range.collapse(this.element)
    }, insertContent: function (a) {
        a.each((function (b) {
            this.element.appendChild(b)
        }).bind(this))
    }
});
Insertion.After = Class.create();
Insertion.After.prototype = Object.extend(new Abstract.Insertion("afterEnd"), {
    initializeRange: function () {
        this.range.setStartAfter(this.element)
    }, insertContent: function (a) {
        a.each((function (b) {
            this.element.parentNode.insertBefore(b, this.element.nextSibling)
        }).bind(this))
    }
});
Element.ClassNames = Class.create();
Element.ClassNames.prototype = {
    initialize: function (a) {
        this.element = $id(a)
    }, _each: function (a) {
        this.element.className.split(/\s+/).select(function (b) {
            return b.length > 0
        })._each(a)
    }, set: function (a) {
        this.element.className = a
    }, add: function (a) {
        if (this.include(a)) {
            return
        }
        this.set(this.toArray().concat(a).join(" "))
    }, remove: function (a) {
        if (!this.include(a)) {
            return
        }
        this.set(this.select(function (b) {
            return b != a
        }).join(" "))
    }, toString: function () {
        return this.toArray().join(" ")
    }
};
Object.extend(Element.ClassNames.prototype, Enumerable);
var Field = {
    clear: function () {
        for (var a = 0; a < arguments.length; a++) {
            $id(arguments[a]).value = ""
        }
    }, focus: function (a) {
        $id(a).focus()
    }, present: function () {
        for (var a = 0; a < arguments.length; a++) {
            if ($id(arguments[a]).value == "") {
                return false
            }
        }
        return true
    }, select: function (a) {
        $id(a).select()
    }, activate: function (a) {
        a = $id(a);
        a.focus();
        if (a.select) {
            a.select()
        }
    }
};
var Form = {
    serialize: function (d) {
        var e = Form.getElements($id(d));
        var c = new Array();
        for (var b = 0; b < e.length; b++) {
            var a = Form.Element.serialize(e[b]);
            if (a) {
                c.push(a)
            }
        }
        return c.join("&")
    }, getElements: function (b) {
        b = $id(b);
        var c = new Array();
        for (tagName in Form.Element.Serializers) {
            var d = b.getElementsByTagName(tagName);
            for (var a = 0; a < d.length; a++) {
                c.push(d[a])
            }
        }
        return c
    }, getInputs: function (f, c, d) {
        f = $id(f);
        var a = f.getElementsByTagName("input");
        if (!c && !d) {
            return a
        }
        var g = new Array();
        for (var e = 0; e < a.length; e++) {
            var b = a[e];
            if ((c && b.type != c) || (d && b.name != d)) {
                continue
            }
            g.push(b)
        }
        return g
    }, disable: function (c) {
        var d = Form.getElements(c);
        for (var b = 0; b < d.length; b++) {
            var a = d[b];
            a.blur();
            a.disabled = "true"
        }
    }, enable: function (c) {
        var d = Form.getElements(c);
        for (var b = 0; b < d.length; b++) {
            var a = d[b];
            a.disabled = ""
        }
    }, findFirstElement: function (a) {
        return Form.getElements(a).find(function (b) {
            return b.type != "hidden" && !b.disabled && ["input", "select", "textarea"].include(b.tagName.toLowerCase())
        })
    }, focusFirstElement: function (a) {
        Field.activate(Form.findFirstElement(a))
    }, reset: function (a) {
        $id(a).reset()
    }
};
Form.Element = {
    serialize: function (b) {
        b = $id(b);
        var d = b.tagName.toLowerCase();
        var c = Form.Element.Serializers[d](b);
        if (c) {
            var a = encodeURIComponent(c[0]);
            if (a.length == 0) {
                return
            }
            if (c[1].constructor != Array) {
                c[1] = [c[1]]
            }
            return c[1].map(function (e) {
                return a + "=" + encodeURIComponent(e)
            }).join("&")
        }
    }, getValue: function (a) {
        a = $id(a);
        var c = a.tagName.toLowerCase();
        var b = Form.Element.Serializers[c](a);
        if (b) {
            return b[1]
        }
    }
};
Form.Element.Serializers = {
    input: function (a) {
        switch (a.type.toLowerCase()) {
            case"submit":
            case"hidden":
            case"password":
            case"text":
                return Form.Element.Serializers.textarea(a);
            case"checkbox":
            case"radio":
                return Form.Element.Serializers.inputSelector(a)
        }
        return false
    }, inputSelector: function (a) {
        if (a.checked) {
            return [a.name, a.value]
        }
    }, textarea: function (a) {
        return [a.name, a.value]
    }, select: function (a) {
        return Form.Element.Serializers[a.type == "select-one" ? "selectOne" : "selectMany"](a)
    }, selectOne: function (c) {
        var d = "", b, a = c.selectedIndex;
        if (a >= 0) {
            b = c.options[a];
            d = b.value;
            if (!d && !("value" in b)) {
                d = b.text
            }
        }
        return [c.name, d]
    }, selectMany: function (c) {
        var d = new Array();
        for (var b = 0; b < c.length; b++) {
            var a = c.options[b];
            if (a.selected) {
                var e = a.value;
                if (!e && !("value" in a)) {
                    e = a.text
                }
                d.push(e)
            }
        }
        return [c.name, d]
    }
};
var $F = Form.Element.getValue;
Abstract.TimedObserver = function () {
};
Abstract.TimedObserver.prototype = {
    initialize: function (a, b, c) {
        this.frequency = b;
        this.element = $id(a);
        this.callback = c;
        this.lastValue = this.getValue();
        this.registerCallback()
    }, registerCallback: function () {
        setInterval(this.onTimerEvent.bind(this), this.frequency * 1000)
    }, onTimerEvent: function () {
        var a = this.getValue();
        if (this.lastValue != a) {
            this.callback(this.element, a);
            this.lastValue = a
        }
    }
};
Form.Element.Observer = Class.create();
Form.Element.Observer.prototype = Object.extend(new Abstract.TimedObserver(), {
    getValue: function () {
        return Form.Element.getValue(this.element)
    }
});
Form.Observer = Class.create();
Form.Observer.prototype = Object.extend(new Abstract.TimedObserver(), {
    getValue: function () {
        return Form.serialize(this.element)
    }
});
Abstract.EventObserver = function () {
};
Abstract.EventObserver.prototype = {
    initialize: function (a, b) {
        this.element = $id(a);
        this.callback = b;
        this.lastValue = this.getValue();
        if (this.element.tagName.toLowerCase() == "form") {
            this.registerFormCallbacks()
        } else {
            this.registerCallback(this.element)
        }
    }, onElementEvent: function () {
        var a = this.getValue();
        if (this.lastValue != a) {
            this.callback(this.element, a);
            this.lastValue = a
        }
    }, registerFormCallbacks: function () {
        var b = Form.getElements(this.element);
        for (var a = 0; a < b.length; a++) {
            this.registerCallback(b[a])
        }
    }, registerCallback: function (a) {
        if (a.type) {
            switch (a.type.toLowerCase()) {
                case"checkbox":
                case"radio":
                    Event.observe(a, "click", this.onElementEvent.bind(this));
                    break;
                case"password":
                case"text":
                case"textarea":
                case"select-one":
                case"select-multiple":
                    Event.observe(a, "change", this.onElementEvent.bind(this));
                    break
            }
        }
    }
};
Form.Element.EventObserver = Class.create();
Form.Element.EventObserver.prototype = Object.extend(new Abstract.EventObserver(), {
    getValue: function () {
        return Form.Element.getValue(this.element)
    }
});
Form.EventObserver = Class.create();
Form.EventObserver.prototype = Object.extend(new Abstract.EventObserver(), {
    getValue: function () {
        return Form.serialize(this.element)
    }
});
if (!window.Event) {
    var Event = new Object()
}
Object.extend(Event, {
    KEY_BACKSPACE: 8,
    KEY_TAB: 9,
    KEY_RETURN: 13,
    KEY_ESC: 27,
    KEY_LEFT: 37,
    KEY_UP: 38,
    KEY_RIGHT: 39,
    KEY_DOWN: 40,
    KEY_DELETE: 46,
    element: function (a) {
        return a.target || a.srcElement
    },
    isLeftClick: function (a) {
        return (((a.which) && (a.which == 1)) || ((a.button) && (a.button == 1)))
    },
    pointerX: function (a) {
        return a.pageX || (a.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft))
    },
    pointerY: function (a) {
        return a.pageY || (a.clientY + (document.documentElement.scrollTop || document.body.scrollTop))
    },
    stop: function (a) {
        if (a.preventDefault) {
            a.preventDefault();
            a.stopPropagation()
        } else {
            a.returnValue = false;
            a.cancelBubble = true
        }
    },
    findElement: function (c, b) {
        var a = Event.element(c);
        while (a.parentNode && (!a.tagName || (a.tagName.toUpperCase() != b.toUpperCase()))) {
            a = a.parentNode
        }
        return a
    },
    observers: false,
    _observeAndCache: function (d, c, b, a) {
        if (!this.observers) {
            this.observers = []
        }
        if (d.addEventListener) {
            this.observers.push([d, c, b, a]);
            d.addEventListener(c, b, a)
        } else {
            if (d.attachEvent) {
                this.observers.push([d, c, b, a]);
                d.attachEvent("on" + c, b)
            }
        }
    },
    unloadCache: function () {
        if (!Event.observers) {
            return
        }
        for (var a = 0; a < Event.observers.length; a++) {
            Event.stopObserving.apply(this, Event.observers[a]);
            Event.observers[a][0] = null
        }
        Event.observers = false
    },
    observe: function (d, c, b, a) {
        var d = $id(d);
        a = a || false;
        if (c == "keypress" && (navigator.appVersion.match(/Konqueror|Safari|KHTML/) || d.attachEvent)) {
            c = "keydown"
        }
        this._observeAndCache(d, c, b, a)
    },
    stopObserving: function (d, c, b, a) {
        var d = $id(d);
        a = a || false;
        if (c == "keypress" && (navigator.appVersion.match(/Konqueror|Safari|KHTML/) || d.detachEvent)) {
            c = "keydown"
        }
        if (d.removeEventListener) {
            d.removeEventListener(c, b, a)
        } else {
            if (d.detachEvent) {
                d.detachEvent("on" + c, b)
            }
        }
    }
});
Event.observe(window, "unload", Event.unloadCache, false);
var Position = {
    includeScrollOffsets: false, prepare: function () {
        this.deltaX = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        this.deltaY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    }, realOffset: function (b) {
        var a = 0, c = 0;
        do {
            a += b.scrollTop || 0;
            c += b.scrollLeft || 0;
            b = b.parentNode
        } while (b);
        return [c, a]
    }, cumulativeOffset: function (b) {
        var a = 0, c = 0;
        do {
            a += b.offsetTop || 0;
            c += b.offsetLeft || 0;
            b = b.offsetParent
        } while (b);
        return [c, a]
    }, positionedOffset: function (b) {
        var a = 0, c = 0;
        do {
            a += b.offsetTop || 0;
            c += b.offsetLeft || 0;
            b = b.offsetParent;
            if (b) {
                p = Element.getStyle(b, "position");
                if (p == "relative" || p == "absolute") {
                    break
                }
            }
        } while (b);
        return [c, a]
    }, offsetParent: function (a) {
        if (a.offsetParent) {
            return a.offsetParent
        }
        if (a == document.body) {
            return a
        }
        while ((a = a.parentNode) && a != document.body) {
            if (Element.getStyle(a, "position") != "static") {
                return a
            }
        }
        return document.body
    }, within: function (b, a, c) {
        if (this.includeScrollOffsets) {
            return this.withinIncludingScrolloffsets(b, a, c)
        }
        this.xcomp = a;
        this.ycomp = c;
        this.offset = this.cumulativeOffset(b);
        return (c >= this.offset[1] && c < this.offset[1] + b.offsetHeight && a >= this.offset[0] && a < this.offset[0] + b.offsetWidth)
    }, withinIncludingScrolloffsets: function (b, a, d) {
        var c = this.realOffset(b);
        this.xcomp = a + c[0] - this.deltaX;
        this.ycomp = d + c[1] - this.deltaY;
        this.offset = this.cumulativeOffset(b);
        return (this.ycomp >= this.offset[1] && this.ycomp < this.offset[1] + b.offsetHeight && this.xcomp >= this.offset[0] && this.xcomp < this.offset[0] + b.offsetWidth)
    }, overlap: function (b, a) {
        if (!b) {
            return 0
        }
        if (b == "vertical") {
            return ((this.offset[1] + a.offsetHeight) - this.ycomp) / a.offsetHeight
        }
        if (b == "horizontal") {
            return ((this.offset[0] + a.offsetWidth) - this.xcomp) / a.offsetWidth
        }
    }, clone: function (b, c) {
        b = $id(b);
        c = $id(c);
        c.style.position = "absolute";
        var a = this.cumulativeOffset(b);
        c.style.top = a[1] + "px";
        c.style.left = a[0] + "px";
        c.style.width = b.offsetWidth + "px";
        c.style.height = b.offsetHeight + "px"
    }, page: function (d) {
        var a = 0, c = 0;
        var b = d;
        do {
            a += b.offsetTop || 0;
            c += b.offsetLeft || 0;
            if (b.offsetParent == document.body) {
                if (Element.getStyle(b, "position") == "absolute") {
                    break
                }
            }
        } while (b = b.offsetParent);
        b = d;
        do {
            a -= b.scrollTop || 0;
            c -= b.scrollLeft || 0
        } while (b = b.parentNode);
        return [c, a]
    }, clone: function (c, e) {
        var a = Object.extend({
            setLeft: true,
            setTop: true,
            setWidth: true,
            setHeight: true,
            offsetTop: 0,
            offsetLeft: 0
        }, arguments[2] || {});
        c = $id(c);
        var d = Position.page(c);
        e = $id(e);
        var f = [0, 0];
        var b = null;
        if (Element.getStyle(e, "position") == "absolute") {
            b = Position.offsetParent(e);
            f = Position.page(b)
        }
        if (b == document.body) {
            f[0] -= document.body.offsetLeft;
            f[1] -= document.body.offsetTop
        }
        if (a.setLeft) {
            e.style.left = (d[0] - f[0] + a.offsetLeft) + "px"
        }
        if (a.setTop) {
            e.style.top = (d[1] - f[1] + a.offsetTop) + "px"
        }
        if (a.setWidth) {
            e.style.width = c.offsetWidth + "px"
        }
        if (a.setHeight) {
            e.style.height = c.offsetHeight + "px"
        }
    }, absolutize: function (b) {
        b = $id(b);
        if (b.style.position == "absolute") {
            return
        }
        Position.prepare();
        var d = Position.positionedOffset(b);
        var f = d[1];
        var e = d[0];
        var c = b.clientWidth;
        var a = b.clientHeight;
        b._originalLeft = e - parseFloat(b.style.left || 0);
        b._originalTop = f - parseFloat(b.style.top || 0);
        b._originalWidth = b.style.width;
        b._originalHeight = b.style.height;
        b.style.position = "absolute";
        b.style.top = f + "px";
        b.style.left = e + "px";
        b.style.width = c + "px";
        b.style.height = a + "px"
    }, relativize: function (a) {
        a = $id(a);
        if (a.style.position == "relative") {
            return
        }
        Position.prepare();
        a.style.position = "relative";
        var c = parseFloat(a.style.top || 0) - (a._originalTop || 0);
        var b = parseFloat(a.style.left || 0) - (a._originalLeft || 0);
        a.style.top = c + "px";
        a.style.left = b + "px";
        a.style.height = a._originalHeight;
        a.style.width = a._originalWidth
    }
};
if (/Konqueror|Safari|KHTML/.test(navigator.userAgent)) {
    Position.cumulativeOffset = function (b) {
        var a = 0, c = 0;
        do {
            a += b.offsetTop || 0;
            c += b.offsetLeft || 0;
            if (b.offsetParent == document.body) {
                if (Element.getStyle(b, "position") == "absolute") {
                    break
                }
            }
            b = b.offsetParent
        } while (b);
        return [c, a]
    }
}
Element.getOpacity = function (b) {
    var a;
    if (a = Element.getStyle(b, "opacity")) {
        return parseFloat(a)
    }
    if (a = (Element.getStyle(b, "filter") || "").match(/alpha\(opacity=(.*)\)/)) {
        if (a[1]) {
            return parseFloat(a[1]) / 100
        }
    }
    return 1
};
Element.setOpacity = function (b, c) {
    b = $id(b);
    var a = b.style;
    if (c == 1) {
        a.opacity = "0.999999";
        if (/MSIE/.test(navigator.userAgent)) {
            a.filter = Element.getStyle(b, "filter").replace(/alpha\([^\)]*\)/gi, "") + "alpha(opacity=100)"
        }
    } else {
        if (c < 0.00001) {
            c = 0
        }
        a.opacity = c;
        if (/MSIE/.test(navigator.userAgent)) {
            a.filter = Element.getStyle(b, "filter").replace(/alpha\([^\)]*\)/gi, "") + "alpha(opacity=" + c * 100 + ")"
        }
    }
};
Element.getInlineOpacity = function (a) {
    a = $id(a);
    var b;
    b = a.style.opacity;
    if (typeof b != "undefined" && b != "") {
        return b
    }
    return ""
};
Element.setInlineOpacity = function (b, c) {
    b = $id(b);
    var a = b.style;
    a.opacity = c
};
Element.setStyle = function (a, b) {
    a = $id(a);
    for (k in b) {
        a.style[k.camelize()] = b[k]
    }
};
Element.childrenWithClassName = function (a, b) {
    return $A($id(a).getElementsByTagName("*")).select(function (d) {
        return Element.hasClassName(d, b)
    })
};
var Effect = {
    tagifyText: function (a) {
        var b = "position:relative";
        if (/MSIE/.test(navigator.userAgent)) {
            b += ";zoom:1"
        }
        a = $id(a);
        $A(a.childNodes).each(function (c) {
            if (c.nodeType == 3) {
                c.nodeValue.toArray().each(function (d) {
                    a.insertBefore(Builder.node("span", {style: b}, d == " " ? String.fromCharCode(160) : d), c)
                });
                Element.remove(c)
            }
        })
    }, multiple: function (c, d) {
        var f;
        if (((typeof c == "object") || (typeof c == "function")) && (c.length)) {
            f = c
        } else {
            f = $id(c).childNodes
        }
        var b = Object.extend({speed: 0.1, delay: 0}, arguments[2] || {});
        var e = b.speed;
        var a = b.delay;
        $A(f).each(function (h, g) {
            new d(h, Object.extend(b, {delay: a + g * e}))
        })
    }
};
var Effect2 = Effect;
Effect.Transitions = {};
Effect.Transitions.linear = function (a) {
    return a
};
Effect.Transitions.sinoidal = function (a) {
    return (-Math.cos(a * Math.PI) / 2) + 0.5
};
Effect.Transitions.reverse = function (a) {
    return 1 - a
};
Effect.Transitions.flicker = function (a) {
    return ((-Math.cos(a * Math.PI) / 4) + 0.75) + Math.random() / 4
};
Effect.Transitions.wobble = function (a) {
    return (-Math.cos(a * Math.PI * (9 * a)) / 2) + 0.5
};
Effect.Transitions.pulse = function (a) {
    return (Math.floor(a * 10) % 2 == 0 ? (a * 10 - Math.floor(a * 10)) : 1 - (a * 10 - Math.floor(a * 10)))
};
Effect.Transitions.none = function (a) {
    return 0
};
Effect.Transitions.full = function (a) {
    return 1
};
Effect.Queue = {
    effects: [], _each: function (a) {
        this.effects._each(a)
    }, interval: null, add: function (a) {
        var b = new Date().getTime();
        switch (a.options.queue) {
            case"front":
                this.effects.findAll(function (c) {
                    return c.state == "idle"
                }).each(function (c) {
                    c.startOn += a.finishOn;
                    c.finishOn += a.finishOn
                });
                break;
            case"end":
                b = this.effects.pluck("finishOn").max() || b;
                break
        }
        a.startOn += b;
        a.finishOn += b;
        this.effects.push(a);
        if (!this.interval) {
            this.interval = setInterval(this.loop.bind(this), 40)
        }
    }, remove: function (a) {
        this.effects = this.effects.reject(function (b) {
            return b == a
        });
        if (this.effects.length == 0) {
            clearInterval(this.interval);
            this.interval = null
        }
    }, loop: function () {
        var a = new Date().getTime();
        this.effects.invoke("loop", a)
    }
};
Object.extend(Effect.Queue, Enumerable);
Effect.Base = function () {
};
Effect.Base.prototype = {
    position: null, setOptions: function (a) {
        this.options = Object.extend({
            transition: Effect.Transitions.sinoidal,
            duration: 1,
            fps: 25,
            sync: false,
            from: 0,
            to: 1,
            delay: 0,
            queue: "parallel"
        }, a || {})
    }, start: function (a) {
        this.setOptions(a || {});
        this.currentFrame = 0;
        this.state = "idle";
        this.startOn = this.options.delay * 1000;
        this.finishOn = this.startOn + (this.options.duration * 1000);
        this.event("beforeStart");
        var b = true;
        if (this.options.stateId) {
            b = this.startState();
            if (typeof this.options.succObj == "object") {
                this.options.succObj.success = b
            }
        }
        if (!this.options.sync && b) {
            Effect.Queue.add(this)
        }
    }, loop: function (c) {
        if (c >= this.startOn) {
            if (c >= this.finishOn) {
                this.render(1);
                this.cancel();
                this.event("beforeFinish");
                if (this.finish) {
                    this.finish()
                }
                this.event("afterFinish");
                if (this.options.stateId) {
                    this.finishState()
                }
                if (this.options.userCallBack) {
                    this.options.userCallBack()
                }
                return
            }
            var b = (c - this.startOn) / (this.finishOn - this.startOn);
            var a = Math.round(b * this.options.fps * this.options.duration);
            if (a > this.currentFrame) {
                this.render(b);
                this.currentFrame = a
            }
        }
    }, render: function (a) {
        if (this.state == "idle") {
            this.state = "running";
            this.event("beforeSetup");
            if (this.setup) {
                this.setup()
            }
            this.event("afterSetup")
        }
        if (this.options.transition) {
            a = this.options.transition(a)
        }
        a *= (this.options.to - this.options.from);
        a += this.options.from;
        this.position = a;
        this.event("beforeUpdate");
        if (this.update) {
            this.update(a)
        }
        this.event("afterUpdate")
    }, cancel: function () {
        if (!this.options.sync) {
            Effect.Queue.remove(this)
        }
        this.state = "finished"
    }, event: function (a) {
        if (this.options[a + "Internal"]) {
            this.options[a + "Internal"](this)
        }
        if (this.options[a]) {
            this.options[a](this)
        }
    }, startState: function () {
        if (!this.element._state) {
            this.element._state = "running";
            return true
        } else {
            if (this.element._state == "running") {
                return false
            } else {
                this.element._state = "running";
                return true
            }
        }
    }, finishState: function () {
        this.element._state = "finished"
    }
};
Effect.Opacity = Class.create();
Object.extend(Object.extend(Effect.Opacity.prototype, Effect.Base.prototype), {
    initialize: function (b) {
        this.element = $id(b);
        if (/MSIE/.test(navigator.userAgent) && (!this.element.hasLayout)) {
            this.element.style.zoom = 1
        }
        var a = Object.extend({from: Element.getOpacity(this.element) || 0, to: 1}, arguments[1] || {});
        this.start(a)
    }, update: function (a) {
        Element.setOpacity(this.element, a)
    }
});
Effect.Move = Class.create();
Object.extend(Object.extend(Effect.Move.prototype, Effect.Base.prototype), {
    initialize: function (b) {
        this.element = $id(b);
        var a = Object.extend({x: 0, y: 0, mode: "relative"}, arguments[1] || {});
        this.start(a)
    }, setup: function () {
        Element.makePositioned(this.element);
        this.originalLeft = parseFloat(Element.getStyle(this.element, "left") || "0");
        this.originalTop = parseFloat(Element.getStyle(this.element, "top") || "0");
        if (this.options.mode == "absolute") {
            this.options.x = this.options.x - this.originalLeft;
            this.options.y = this.options.y - this.originalTop
        }
    }, update: function (a) {
        Element.setStyle(this.element, {
            left: this.options.x * a + this.originalLeft + "px",
            top: this.options.y * a + this.originalTop + "px"
        })
    }
});
Effect.MoveBy = Class.create();
Object.extend(Object.extend(Effect.MoveBy.prototype, Effect.Base.prototype), {
    initialize: function (b, a, c) {
        this.element = $id(b);
        this.toTop = a;
        this.toLeft = c;
        this.start(arguments[3])
    }, setup: function () {
        Element.makePositioned(this.element);
        this.originalTop = parseFloat(Element.getStyle(this.element, "top") || "0");
        this.originalLeft = parseFloat(Element.getStyle(this.element, "left") || "0")
    }, update: function (a) {
        var c = this.toTop * a + this.originalTop;
        var b = this.toLeft * a + this.originalLeft;
        this.setPosition(c, b)
    }, setPosition: function (b, a) {
        this.element.style.top = b + "px";
        this.element.style.left = a + "px"
    }
});
Effect.Scale = Class.create();
Object.extend(Object.extend(Effect.Scale.prototype, Effect.Base.prototype), {
    initialize: function (b, c) {
        this.element = $id(b);
        var a = Object.extend({
            scaleX: true,
            scaleY: true,
            scaleContent: true,
            scaleFromCenter: false,
            scaleMode: "box",
            scaleFrom: 100,
            scaleTo: c
        }, arguments[2] || {});
        this.start(a)
    }, setup: function () {
        var c = this;
        this.restoreAfterFinish = this.options.restoreAfterFinish || false;
        this.elementPositioning = Element.getStyle(this.element, "position");
        c.originalStyle = {};
        ["top", "left", "width", "height", "fontSize"].each(function (e) {
            c.originalStyle[e] = c.element.style[e]
        });
        this.originalTop = this.element.offsetTop;
        this.originalLeft = this.element.offsetLeft;
        var d = Element.getStyle(this.element, "font-size") || "100%";
        ["em", "px", "%"].each(function (e) {
            if (d.indexOf(e) > 0) {
                c.fontSize = parseFloat(d);
                c.fontSizeType = e
            }
        });
        this.factor = (this.options.scaleTo - this.options.scaleFrom) / 100;
        this.dims = null;
        if (this.options.scaleMode == "box") {
            if (/MSIE/.test(navigator.userAgent)) {
                var b = (this.element.clientWidth == "") ? this.element.scrollHeight : this.element.clientWidth;
                var a = (this.element.clientHeight == "") ? this.element.scrollHeight : this.element.clientHeight;
                this.dims = [a, b]
            } else {
                this.dims = [this.element.clientHeight, this.element.clientWidth]
            }
        }
        if (/^content/.test(this.options.scaleMode)) {
            this.dims = [this.element.scrollHeight, this.element.scrollWidth]
        }
        if (!this.dims) {
            this.dims = [this.options.scaleMode.originalHeight, this.options.scaleMode.originalWidth]
        }
    }, update: function (a) {
        var b = (this.options.scaleFrom / 100) + (this.factor * a);
        if (this.options.scaleContent && this.fontSize) {
            this.element.style.fontSize = this.fontSize * b + this.fontSizeType
        }
        this.setDimensions(this.dims[0] * b, this.dims[1] * b)
    }, finish: function (a) {
        if (this.restoreAfterFinish) {
            var b = this;
            ["top", "left", "width", "height", "fontSize"].each(function (c) {
                b.element.style[c] = b.originalStyle[c]
            })
        }
    }, setDimensions: function (a, e) {
        var d = this.element.style;
        if (this.options.scaleX) {
            d.width = e + "px"
        }
        if (this.options.scaleY) {
            if (/MSIE/.test(navigator.userAgent)) {
                if (a < 1) {
                    a = 1
                }
            }
            d.height = a + "px"
        }
        if (this.options.scaleFromCenter) {
            var c = (a - this.dims[0]) / 2;
            var b = (e - this.dims[1]) / 2;
            if (this.elementPositioning == "absolute") {
                if (this.options.scaleY) {
                    d.top = this.originalTop - c + "px"
                }
                if (this.options.scaleX) {
                    d.left = this.originalLeft - b + "px"
                }
            } else {
                if (this.options.scaleY) {
                    d.top = -c + "px"
                }
                if (this.options.scaleX) {
                    d.left = -b + "px"
                }
            }
        }
    }
});
Effect.ScrollTo = Class.create();
Object.extend(Object.extend(Effect.ScrollTo.prototype, Effect.Base.prototype), {
    initialize: function (a) {
        this.element = $id(a);
        this.start(arguments[1] || {})
    }, setup: function () {
        Position.prepare();
        var b = Position.cumulativeOffset(this.element);
        var a = window.innerHeight ? window.height - window.innerHeight : document.body.scrollHeight - (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight);
        this.scrollStart = Position.deltaY;
        this.delta = (b[1] > a ? a : b[1]) - this.scrollStart
    }, update: function (a) {
        Position.prepare();
        window.scrollTo(Position.deltaX, this.scrollStart + (a * this.delta))
    }
});
Effect.Fade = function (c) {
    var a = Element.getInlineOpacity(c);
    var b = Object.extend({
        from: Element.getOpacity(c) || 1, to: 0, afterFinishInternal: function (d) {
            if (d.options.to == 0) {
                Element.hide(d.element);
                Element.setInlineOpacity(d.element, a)
            }
        }
    }, arguments[1] || {});
    return new Effect.Opacity(c, b)
};
Effect.Appear = function (b) {
    var a = Object.extend({
        from: (Element.getStyle(b, "display") == "none" ? 0 : Element.getOpacity(b) || 0),
        to: 1,
        beforeSetup: function (c) {
            Element.setOpacity(c.element, c.options.from);
            Element.show(c.element)
        }
    }, arguments[1] || {});
    return new Effect.Opacity(b, a)
};
Effect.BlindUp = function (a) {
    a = $id(a);
    Element.makeClipping(a);
    return new Effect.Scale(a, 0, Object.extend({
        scaleContent: false,
        scaleX: false,
        restoreAfterFinish: true,
        afterFinishInternal: function (b) {
            Element.hide(b.element);
            Element.undoClipping(b.element)
        }
    }, arguments[1] || {}))
};
Effect.BlindDown = function (b) {
    b = $id(b);
    var c = b.style.height;
    var a = Element.getDimensions(b);
    return new Effect.Scale(b, 100, Object.extend({
        scaleContent: false,
        scaleX: false,
        scaleFrom: 0,
        scaleMode: {originalHeight: a.height, originalWidth: a.width},
        restoreAfterFinish: true,
        afterSetup: function (d) {
            Element.makeClipping(d.element);
            if (/MSIE/.test(navigator.userAgent)) {
                d.element.style.height = "1px"
            } else {
                d.element.style.height = "0px"
            }
            Element.show(d.element)
        },
        afterFinishInternal: function (d) {
            Element.undoClipping(d.element);
            d.element.style.height = c
        }
    }, arguments[1] || {}))
};
Effect.SlideDown = function (c) {
    c = $id(c);
    Element.cleanWhitespace(c);
    var a = c.firstChild.style.bottom;
    var b = Element.getDimensions(c);
    return new Effect.Scale(c, 100, Object.extend({
        scaleContent: false,
        scaleX: false,
        scaleFrom: 0,
        scaleMode: {originalHeight: b.height, originalWidth: b.width},
        restoreAfterFinish: true,
        afterSetup: function (d) {
            Element.makePositioned(d.element.firstChild);
            if (window.opera) {
                d.element.firstChild.style.top = ""
            }
            Element.makeClipping(d.element);
            c.style.height = "0";
            Element.show(c)
        },
        afterUpdateInternal: function (d) {
            d.element.firstChild.style.bottom = (d.dims[0] - d.element.clientHeight) + "px"
        },
        afterFinishInternal: function (d) {
            Element.undoClipping(d.element);
            Element.undoPositioned(d.element.firstChild);
            d.element.firstChild.style.bottom = a
        }
    }, arguments[1] || {}))
};
Effect.SlideUp = function (b) {
    b = $id(b);
    Element.cleanWhitespace(b);
    var a = b.firstChild.style.bottom;
    return new Effect.Scale(b, 0, Object.extend({
        scaleContent: false,
        scaleX: false,
        scaleMode: "box",
        scaleFrom: 100,
        restoreAfterFinish: true,
        beforeStartInternal: function (c) {
            Element.makePositioned(c.element.firstChild);
            if (window.opera) {
                c.element.firstChild.style.top = ""
            }
            Element.makeClipping(c.element);
            Element.show(b)
        },
        afterUpdateInternal: function (c) {
            c.element.firstChild.style.bottom = (c.dims[0] - c.element.clientHeight) + "px"
        },
        afterFinishInternal: function (c) {
            Element.hide(c.element);
            Element.undoClipping(c.element);
            Element.undoPositioned(c.element.firstChild);
            c.element.firstChild.style.bottom = a
        }
    }, arguments[1] || {}))
};
Effect.SlideRight = function (c) {
    c = $id(c);
    Element.cleanWhitespace(c);
    var a = c.firstChild.style.right;
    var b = Element.getDimensions(c);
    return new Effect.Scale(c, 100, Object.extend({
        scaleContent: false,
        scaleY: false,
        scaleFrom: 0,
        scaleMode: {originalHeight: b.height, originalWidth: b.width},
        restoreAfterFinish: true,
        afterSetup: function (d) {
            Element.makePositioned(d.element.firstChild);
            if (window.opera) {
                d.element.firstChild.style.top = ""
            }
            Element.makeClipping(d.element);
            Element.show(c)
        },
        afterUpdateInternal: function (d) {
            d.element.firstChild.style.right = (d.dims[1] - d.element.clientWidth) + "px"
        },
        afterFinishInternal: function (d) {
            Element.undoClipping(d.element);
            Element.undoPositioned(d.element.firstChild);
            d.element.firstChild.style.right = a
        }
    }, arguments[1] || {}))
};
Effect.SlideLeft = function (b) {
    b = $id(b);
    Element.cleanWhitespace(b);
    var a = b.firstChild.style.right;
    return new Effect.Scale(b, 0, Object.extend({
        scaleContent: false,
        scaleY: false,
        scaleMode: "box",
        scaleFrom: 100,
        restoreAfterFinish: true,
        beforeStartInternal: function (c) {
            Element.makePositioned(c.element.firstChild);
            if (window.opera) {
                c.element.firstChild.style.top = ""
            }
            Element.makeClipping(c.element);
            Element.show(b)
        },
        afterUpdateInternal: function (c) {
            c.element.firstChild.style.right = (c.dims[1] - c.element.clientWidth) + "px"
        },
        afterFinishInternal: function (c) {
            Element.hide(c.element);
            Element.undoClipping(c.element);
            Element.undoPositioned(c.element.firstChild);
            c.element.firstChild.style.right = a
        }
    }, arguments[1] || {}))
};
if (dwr == null) {
    var dwr = {}
}
if (dwr.engine == null) {
    dwr.engine = {}
}
if (DWREngine == null) {
    var DWREngine = dwr.engine
}
dwr.engine.setErrorHandler = function (a) {
    dwr.engine._errorHandler = a
};
dwr.engine.setWarningHandler = function (a) {
    dwr.engine._warningHandler = a
};
dwr.engine.setTextHtmlHandler = function (a) {
    dwr.engine._textHtmlHandler = a
};
dwr.engine.setTimeout = function (a) {
    dwr.engine._timeout = a
};
dwr.engine.setPreHook = function (a) {
    dwr.engine._preHook = a
};
dwr.engine.setPostHook = function (a) {
    dwr.engine._postHook = a
};
dwr.engine.setHeaders = function (a) {
    dwr.engine._headers = a
};
dwr.engine.setParameters = function (a) {
    dwr.engine._parameters = a
};
dwr.engine.XMLHttpRequest = 1;
dwr.engine.IFrame = 2;
dwr.engine.ScriptTag = 3;
dwr.engine.setRpcType = function (a) {
    if (a != dwr.engine.XMLHttpRequest && a != dwr.engine.IFrame && a != dwr.engine.ScriptTag) {
        dwr.engine._handleError(null, {
            name: "dwr.engine.invalidRpcType",
            message: "RpcType must be one of dwr.engine.XMLHttpRequest or dwr.engine.IFrame or dwr.engine.ScriptTag"
        });
        return
    }
    dwr.engine._rpcType = a
};
dwr.engine.setHttpMethod = function (a) {
    if (a != "GET" && a != "POST") {
        dwr.engine._handleError(null, {
            name: "dwr.engine.invalidHttpMethod",
            message: "Remoting method must be one of GET or POST"
        });
        return
    }
    dwr.engine._httpMethod = a
};
dwr.engine.setOrdered = function (a) {
    dwr.engine._ordered = a
};
dwr.engine.setAsync = function (a) {
    dwr.engine._async = a
};
dwr.engine.setActiveReverseAjax = function (a) {
    if (a) {
        if (dwr.engine._activeReverseAjax) {
            return
        }
        dwr.engine._activeReverseAjax = true;
        dwr.engine._poll()
    } else {
        if (dwr.engine._activeReverseAjax && dwr.engine._pollReq) {
            dwr.engine._pollReq.abort()
        }
        dwr.engine._activeReverseAjax = false
    }
};
dwr.engine.setPollType = function (a) {
    if (a != dwr.engine.XMLHttpRequest && a != dwr.engine.IFrame) {
        dwr.engine._handleError(null, {
            name: "dwr.engine.invalidPollType",
            message: "PollType must be one of dwr.engine.XMLHttpRequest or dwr.engine.IFrame"
        });
        return
    }
    dwr.engine._pollType = a
};
dwr.engine.defaultErrorHandler = function (b, a) {
    dwr.engine._debug("Error: " + a.name + ", " + a.message, true);
    if (b == null || b == "") {
        alert("A server error has occured. More information may be available in the console.")
    } else {
        if (b.indexOf("0x80040111") != -1) {
            dwr.engine._debug(b)
        } else {
        }
    }
};
dwr.engine.defaultWarningHandler = function (b, a) {
    dwr.engine._debug(b)
};
dwr.engine.beginBatch = function () {
    if (dwr.engine._batch) {
        dwr.engine._handleError(null, {name: "dwr.engine.batchBegun", message: "Batch already begun"});
        return
    }
    dwr.engine._batch = dwr.engine._createBatch()
};
dwr.engine.endBatch = function (b) {
    var a = dwr.engine._batch;
    if (a == null) {
        dwr.engine._handleError(null, {name: "dwr.engine.batchNotBegun", message: "No batch in progress"});
        return
    }
    dwr.engine._batch = null;
    if (a.map.callCount == 0) {
        return
    }
    if (b) {
        dwr.engine._mergeBatch(a, b)
    }
    if (dwr.engine._ordered && dwr.engine._batchesLength != 0) {
        dwr.engine._batchQueue[dwr.engine._batchQueue.length] = a
    } else {
        dwr.engine._sendData(a)
    }
};
dwr.engine.setPollMethod = function (a) {
    dwr.engine.setPollType(a)
};
dwr.engine.setMethod = function (a) {
    dwr.engine.setRpcType(a)
};
dwr.engine.setVerb = function (a) {
    dwr.engine.setHttpMethod(a)
};
dwr.engine._origScriptSessionId = "4FC528EBDD341FE22046F074D587F373";
dwr.engine._sessionCookieName = "JSESSIONID";
dwr.engine._allowGetForSafariButMakeForgeryEasier = "false";
dwr.engine._scriptTagProtection = "throw 'allowScriptTagRemoting is false.';";
dwr.engine._defaultPath = "/dwr";
dwr.engine._scriptSessionId = null;
dwr.engine._getScriptSessionId = function () {
    if (dwr.engine._scriptSessionId == null) {
        dwr.engine._scriptSessionId = dwr.engine._origScriptSessionId + Math.floor(Math.random() * 1000)
    }
    return dwr.engine._scriptSessionId
};
dwr.engine._errorHandler = dwr.engine.defaultErrorHandler;
dwr.engine._warningHandler = dwr.engine.defaultWarningHandler;
dwr.engine._preHook = null;
dwr.engine._postHook = null;
dwr.engine._batches = {};
dwr.engine._batchesLength = 0;
dwr.engine._batchQueue = [];
dwr.engine._rpcType = dwr.engine.XMLHttpRequest;
dwr.engine._httpMethod = "POST";
dwr.engine._ordered = false;
dwr.engine._async = true;
dwr.engine._batch = null;
dwr.engine._timeout = 0;
dwr.engine._DOMDocument = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.5.0", "Msxml2.DOMDocument.4.0", "Msxml2.DOMDocument.3.0", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"];
dwr.engine._XMLHTTP = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
dwr.engine._activeReverseAjax = false;
dwr.engine._pollType = dwr.engine.XMLHttpRequest;
dwr.engine._outstandingIFrames = [];
dwr.engine._pollReq = null;
dwr.engine._pollCometInterval = 200;
dwr.engine._pollRetries = 0;
dwr.engine._maxPollRetries = 0;
dwr.engine._textHtmlHandler = null;
dwr.engine._headers = null;
dwr.engine._parameters = null;
dwr.engine._postSeperator = "\n";
dwr.engine._defaultInterceptor = function (a) {
    return a
};
dwr.engine._urlRewriteHandler = dwr.engine._defaultInterceptor;
dwr.engine._contentRewriteHandler = dwr.engine._defaultInterceptor;
dwr.engine._replyRewriteHandler = dwr.engine._defaultInterceptor;
dwr.engine._nextBatchId = 0;
dwr.engine._propnames = ["rpcType", "httpMethod", "async", "timeout", "errorHandler", "warningHandler", "textHtmlHandler"];
dwr.engine._partialResponseNo = 0;
dwr.engine._partialResponseYes = 1;
dwr.engine._partialResponseFlush = 2;
dwr.engine._execute = function (m, b, j, h) {
    var e = false;
    if (dwr.engine._batch == null) {
        dwr.engine.beginBatch();
        e = true
    }
    var d = dwr.engine._batch;
    var g = [];
    for (var c = 0; c < arguments.length - 3; c++) {
        g[c] = arguments[c + 3]
    }
    if (d.path == null) {
        d.path = m
    } else {
        if (d.path != m) {
            dwr.engine._handleError(d, {
                name: "dwr.engine.multipleServlets",
                message: "Can't batch requests to multiple DWR Servlets."
            });
            return
        }
    }
    var a;
    var l = g[g.length - 1];
    if (typeof l == "function" || l == null) {
        a = {callback: g.pop()}
    } else {
        a = g.pop()
    }
    dwr.engine._mergeBatch(d, a);
    d.handlers[d.map.callCount] = {exceptionHandler: a.exceptionHandler, callback: a.callback};
    var f = "c" + d.map.callCount + "-";
    d.map[f + "scriptName"] = b;
    d.map[f + "methodName"] = j;
    d.map[f + "id"] = d.map.callCount;
    for (c = 0; c < g.length; c++) {
        dwr.engine._serializeAll(d, [], g[c], f + "param" + c)
    }
    d.map.callCount++;
    if (e) {
        dwr.engine.endBatch()
    }
};
dwr.engine._executeSingleWithBIParams = function (g, f, a, d, e) {
    if (dwr.engine._batch != null) {
        dwr.engine.endBatch()
    }
    dwr.engine.beginBatch();
    var c = dwr.engine._batch;
    c.biParams = d;
    var b = Array.prototype.slice.call(arguments, 0);
    b.splice(3, 1);
    dwr.engine._execute.apply(null, b);
    dwr.engine.endBatch()
};
dwr.engine._poll = function (b) {
    if (!dwr.engine._activeReverseAjax) {
        return
    }
    var a = dwr.engine._createBatch();
    a.map.id = 0;
    a.map.callCount = 1;
    a.isPoll = true;
    if (navigator.userAgent.indexOf("Gecko/") != -1) {
        a.rpcType = dwr.engine._pollType;
        a.map.partialResponse = dwr.engine._partialResponseYes
    } else {
        if (document.all) {
            a.rpcType = dwr.engine.IFrame;
            a.map.partialResponse = dwr.engine._partialResponseFlush
        } else {
            a.rpcType = dwr.engine._pollType;
            a.map.partialResponse = dwr.engine._partialResponseNo
        }
    }
    a.httpMethod = "POST";
    a.async = true;
    a.timeout = 0;
    a.path = (b) ? b : dwr.engine._defaultPath;
    a.preHooks = [];
    a.postHooks = [];
    a.errorHandler = dwr.engine._pollErrorHandler;
    a.warningHandler = dwr.engine._pollErrorHandler;
    a.handlers[0] = {
        callback: function (c) {
            dwr.engine._pollRetries = 0;
            setTimeout("dwr.engine._poll()", c)
        }
    };
    dwr.engine._sendData(a);
    if (a.rpcType == dwr.engine.XMLHttpRequest) {
        dwr.engine._checkCometPoll()
    }
};
dwr.engine._pollErrorHandler = function (b, a) {
    dwr.engine._pollRetries++;
    dwr.engine._debug("Reverse Ajax poll failed (pollRetries=" + dwr.engine._pollRetries + "): " + a.name + " : " + a.message);
    if (dwr.engine._pollRetries < dwr.engine._maxPollRetries) {
        setTimeout("dwr.engine._poll()", 10000)
    } else {
        dwr.engine._debug("Giving up.")
    }
};
dwr.engine._createBatch = function () {
    var a = {
        map: {
            callCount: 0,
            page: window.location.pathname + window.location.search,
            httpSessionId: dwr.engine._getJSessionId(),
            scriptSessionId: dwr.engine._getScriptSessionId()
        },
        charsProcessed: 0,
        paramCount: 0,
        headers: [],
        parameters: [],
        isPoll: false,
        headers: {},
        handlers: {},
        preHooks: [],
        postHooks: [],
        rpcType: dwr.engine._rpcType,
        httpMethod: dwr.engine._httpMethod,
        async: dwr.engine._async,
        timeout: dwr.engine._timeout,
        errorHandler: dwr.engine._errorHandler,
        warningHandler: dwr.engine._warningHandler,
        textHtmlHandler: dwr.engine._textHtmlHandler
    };
    if (dwr.engine._preHook) {
        a.preHooks.push(dwr.engine._preHook)
    }
    if (dwr.engine._postHook) {
        a.postHooks.push(dwr.engine._postHook)
    }
    var c, b;
    if (dwr.engine._headers) {
        for (c in dwr.engine._headers) {
            b = dwr.engine._headers[c];
            if (typeof b != "function") {
                a.headers[c] = b
            }
        }
    }
    if (dwr.engine._parameters) {
        for (c in dwr.engine._parameters) {
            b = dwr.engine._parameters[c];
            if (typeof b != "function") {
                a.parameters[c] = b
            }
        }
    }
    return a
};
dwr.engine._mergeBatch = function (a, d) {
    var e, c;
    for (var b = 0; b < dwr.engine._propnames.length; b++) {
        e = dwr.engine._propnames[b];
        if (d[e] != null) {
            a[e] = d[e]
        }
    }
    if (d.preHook != null) {
        a.preHooks.unshift(d.preHook)
    }
    if (d.postHook != null) {
        a.postHooks.push(d.postHook)
    }
    if (d.headers) {
        for (e in d.headers) {
            c = d.headers[e];
            if (typeof c != "function") {
                a.headers[e] = c
            }
        }
    }
    if (d.parameters) {
        for (e in d.parameters) {
            c = d.parameters[e];
            if (typeof c != "function") {
                a.map["p-" + e] = "" + c
            }
        }
    }
};
dwr.engine._getJSessionId = function () {
    var c = document.cookie.split(";");
    for (var b = 0; b < c.length; b++) {
        var a = c[b];
        while (a.charAt(0) == " ") {
            a = a.substring(1, a.length)
        }
        if (a.indexOf(dwr.engine._sessionCookieName + "=") == 0) {
            return a.substring(11, a.length)
        }
    }
    return ""
};
dwr.engine._checkCometPoll = function () {
    for (var b = 0; b < dwr.engine._outstandingIFrames.length; b++) {
        var e = "";
        var c = dwr.engine._outstandingIFrames[b];
        try {
            e = dwr.engine._getTextFromCometIFrame(c)
        } catch (a) {
            dwr.engine._handleWarning(c.batch, a)
        }
        if (e != "") {
            dwr.engine._processCometResponse(e, c.batch)
        }
    }
    if (dwr.engine._pollReq) {
        var d = dwr.engine._pollReq;
        var e = d.responseText;
        dwr.engine._processCometResponse(e, d.batch)
    }
    if (dwr.engine._outstandingIFrames.length > 0 || dwr.engine._pollReq) {
        setTimeout("dwr.engine._checkCometPoll()", dwr.engine._pollCometInterval)
    }
};
dwr.engine._getTextFromCometIFrame = function (b) {
    var a = b.contentWindow.document.body;
    if (a == null) {
        return ""
    }
    var c = a.innerHTML;
    if (c.indexOf("<PRE>") == 0 || c.indexOf("<pre>") == 0) {
        c = c.substring(5, c.length - 7)
    }
    return c
};
dwr.engine._processCometResponse = function (d, e) {
    if (e.charsProcessed == d.length) {
        return
    }
    if (d.length == 0) {
        e.charsProcessed = 0;
        return
    }
    var b = d.indexOf("//#DWR-START#", e.charsProcessed);
    if (b == -1) {
        e.charsProcessed = d.length;
        return
    }
    var a = d.lastIndexOf("//#DWR-END#");
    if (a == -1) {
        return
    }
    if (d.charCodeAt(a + 11) == 13 && d.charCodeAt(a + 12) == 10) {
        e.charsProcessed = a + 13
    } else {
        e.charsProcessed = a + 11
    }
    var c = d.substring(b + 13, a);
    dwr.engine._receivedBatch = e;
    dwr.engine._eval(c);
    dwr.engine._receivedBatch = null
};
dwr.engine._sendData = function (e) {
    e.map.batchId = dwr.engine._nextBatchId++;
    dwr.engine._batches[e.map.batchId] = e;
    dwr.engine._batchesLength++;
    e.completed = false;
    for (var d = 0; d < e.preHooks.length; d++) {
        e.preHooks[d]()
    }
    e.preHooks = null;
    if (e.timeout && e.timeout != 0) {
        e.interval = setInterval(function () {
            dwr.engine._abortRequest(e)
        }, e.timeout)
    }
    if (e.rpcType == dwr.engine.XMLHttpRequest) {
        if (window.XMLHttpRequest) {
            e.req = new XMLHttpRequest()
        } else {
            if (window.ActiveXObject && !(navigator.userAgent.indexOf("Mac") >= 0 && navigator.userAgent.indexOf("MSIE") >= 0)) {
                e.req = dwr.engine._newActiveXObject(dwr.engine._XMLHTTP)
            }
        }
    }
    var a, c;
    if (e.req) {
        if (e.async) {
            e.req.onreadystatechange = function () {
                dwr.engine._stateChange(e)
            }
        }
        if (e.isPoll) {
            dwr.engine._pollReq = e.req;
            e.req.batch = e
        }
        var b = navigator.userAgent.indexOf("Safari/");
        if (b >= 0) {
            var g = navigator.userAgent.substring(b + 7);
            if (parseInt(g, 10) < 400) {
                if (dwr.engine._allowGetForSafariButMakeForgeryEasier == "true") {
                    e.httpMethod = "GET"
                } else {
                    dwr.engine._handleWarning(e, {
                        name: "dwr.engine.oldSafari",
                        message: "Safari GET support disabled. See getahead.org/dwr/server/servlet and allowGetForSafariButMakeForgeryEasier."
                    })
                }
            }
        }
        e.mode = e.isPoll ? dwr.engine._ModePlainPoll : dwr.engine._ModePlainCall;
        c = dwr.engine._constructRequest(e);
        try {
            e.req.open(e.httpMethod, c.url, e.async);
            try {
                for (a in e.headers) {
                    var j = e.headers[a];
                    if (typeof j == "string") {
                        e.req.setRequestHeader(a, j)
                    }
                }
                if (!e.headers["Content-Type"]) {
                    e.req.setRequestHeader("Content-Type", "text/plain")
                }
            } catch (h) {
                dwr.engine._handleWarning(e, h)
            }
            e.req.send(c.body);
            if (!e.async) {
                dwr.engine._stateChange(e)
            }
        } catch (h) {
            dwr.engine._handleError(e, h)
        }
    } else {
        if (e.rpcType != dwr.engine.ScriptTag) {
            var f = e.isPoll ? "dwr-if-poll-" + e.map.batchId : "dwr-if-" + e.map["c0-id"];
            e.div = document.createElement("div");
            e.div.innerHTML = "<iframe src='javascript:void(0)' frameborder='0' style='width:0px;height:0px;border:0;' id='" + f + "' name='" + f + "'></iframe>";
            document.body.appendChild(e.div);
            e.iframe = document.getElementById(f);
            e.iframe.batch = e;
            e.mode = e.isPoll ? dwr.engine._ModeHtmlPoll : dwr.engine._ModeHtmlCall;
            if (e.isPoll) {
                dwr.engine._outstandingIFrames.push(e.iframe)
            }
            c = dwr.engine._constructRequest(e);
            if (e.httpMethod == "GET") {
                e.iframe.setAttribute("src", c.url)
            } else {
                e.form = document.createElement("form");
                e.form.setAttribute("id", "dwr-form");
                e.form.setAttribute("action", c.url);
                e.form.setAttribute("target", f);
                e.form.target = f;
                e.form.setAttribute("method", e.httpMethod);
                for (a in e.map) {
                    var j = e.map[a];
                    if (typeof j != "function") {
                        var l = document.createElement("input");
                        l.setAttribute("type", "hidden");
                        l.setAttribute("name", a);
                        l.setAttribute("value", j);
                        e.form.appendChild(l)
                    }
                }
                document.body.appendChild(e.form);
                e.form.submit()
            }
        } else {
            e.httpMethod = "GET";
            e.mode = e.isPoll ? dwr.engine._ModePlainPoll : dwr.engine._ModePlainCall;
            c = dwr.engine._constructRequest(e);
            e.script = document.createElement("script");
            e.script.id = "dwr-st-" + e.map["c0-id"];
            e.script.src = c.url;
            document.body.appendChild(e.script)
        }
    }
};
dwr.engine._ModePlainCall = "/call/plaincall/";
dwr.engine._ModeHtmlCall = "/call/htmlcall/";
dwr.engine._ModePlainPoll = "/call/plainpoll/";
dwr.engine._ModeHtmlPoll = "/call/htmlpoll/";
dwr.engine._constructRequest = function (b) {
    var d = {url: b.path + b.mode, body: null};
    if (b.isPoll == true) {
        d.url += "ReverseAjax.dwr"
    } else {
        if (b.map.callCount == 1) {
            d.url += b.map["c0-scriptName"] + "." + b.map["c0-methodName"] + ".dwr"
        } else {
            d.url += "Multiple." + b.map.callCount + ".dwr"
        }
    }
    var f = location.href.match(/jsessionid=([^?]+)/);
    if (f != null) {
        d.url += ";jsessionid=" + f[1]
    }
    var e;
    if (b.httpMethod == "GET") {
        b.map.callCount = "" + b.map.callCount;
        d.url += "?";
        for (e in b.map) {
            if (typeof b.map[e] != "function") {
                d.url += encodeURIComponent(e) + "=" + encodeURIComponent(b.map[e]) + "&"
            }
        }
        d.url = d.url.substring(0, d.url.length - 1)
    } else {
        d.body = "";
        for (e in b.map) {
            if (typeof b.map[e] != "function") {
                d.body += e + "=" + b.map[e] + dwr.engine._postSeperator
            }
        }
        d.body = dwr.engine._contentRewriteHandler(d.body)
    }
    if (b.biParams) {
        var c = b.biParams;
        var a = d.url.indexOf("?") == -1 ? "?" : "&";
        for (biParamName in c) {
            d.url += a + encodeURIComponent(biParamName) + "=" + encodeURIComponent(c[biParamName]);
            a = "&"
        }
    }
    d.url = dwr.engine._urlRewriteHandler(d.url);
    return d
};
dwr.engine._stateChange = function (c) {
    var b;
    if (c.completed) {
        dwr.engine._debug("Error: _stateChange() with batch.completed");
        return
    }
    var f = c.req;
    try {
        if (f.readyState != 4) {
            return
        }
    } catch (d) {
        dwr.engine._handleWarning(c, d);
        dwr.engine._clearUp(c);
        return
    }
    try {
        var e = f.responseText;
        e = dwr.engine._replyRewriteHandler(e);
        var a = f.status;
        if (e == null || e == "") {
            dwr.engine._handleWarning(c, {name: "dwr.engine.missingData", message: "No data received from server"})
        } else {
            if (a != 200) {
                dwr.engine._handleError(c, {name: "dwr.engine.http." + a, message: f.statusText})
            } else {
                var g = f.getResponseHeader("Content-Type");
                if (!g.match(/^text\/plain/) && !g.match(/^text\/javascript/)) {
                    if (g.match(/^text\/html/) && typeof c.textHtmlHandler == "function") {
                        c.textHtmlHandler()
                    } else {
                        dwr.engine._handleWarning(c, {
                            name: "dwr.engine.invalidMimeType",
                            message: "Invalid content type: '" + g + "'"
                        })
                    }
                } else {
                    if (c.isPoll && c.map.partialResponse == dwr.engine._partialResponseYes) {
                        dwr.engine._processCometResponse(e, c)
                    } else {
                        if (e.search("//#DWR") == -1) {
                            dwr.engine._handleWarning(c, {
                                name: "dwr.engine.invalidReply",
                                message: "Invalid reply from server"
                            })
                        } else {
                            b = e
                        }
                    }
                }
            }
        }
    } catch (d) {
        dwr.engine._handleWarning(c, d)
    }
    dwr.engine._callPostHooks(c);
    dwr.engine._receivedBatch = c;
    if (b != null) {
        b = b.replace(dwr.engine._scriptTagProtection, "")
    }
    dwr.engine._eval(b);
    dwr.engine._receivedBatch = null;
    dwr.engine._clearUp(c)
};
dwr.engine._remoteHandleCallback = function (a, f, e) {
    var c = dwr.engine._batches[a];
    if (c == null) {
        dwr.engine._debug("Warning: batch == null in remoteHandleCallback for batchId=" + a, true);
        return
    }
    try {
        var b = c.handlers[f];
        if (!b) {
            dwr.engine._debug("Warning: Missing handlers. callId=" + f, true)
        } else {
            if (typeof b.callback == "function") {
                b.callback(e)
            }
        }
    } catch (d) {
        dwr.engine._handleError(c, d)
    }
};
dwr.engine._remoteHandleException = function (a, e, d) {
    var c = dwr.engine._batches[a];
    if (c == null) {
        dwr.engine._debug("Warning: null batch in remoteHandleException", true);
        return
    }
    var b = c.handlers[e];
    if (b == null) {
        dwr.engine._debug("Warning: null handlers in remoteHandleException", true);
        return
    }
    if (d.message == undefined) {
        d.message = ""
    }
    if (typeof b.exceptionHandler == "function") {
        b.exceptionHandler(d.message, d)
    } else {
        if (typeof c.errorHandler == "function") {
            c.errorHandler(d.message, d)
        }
    }
};
dwr.engine._remoteHandleBatchException = function (c, a) {
    var b = (dwr.engine._receivedBatch == null && a != null);
    if (b) {
        dwr.engine._receivedBatch = dwr.engine._batches[a]
    }
    if (c.message == undefined) {
        c.message = ""
    }
    dwr.engine._handleError(dwr.engine._receivedBatch, c);
    if (b) {
        dwr.engine._receivedBatch = null;
        dwr.engine._clearUp(dwr.engine._batches[a])
    }
};
dwr.engine._remotePollCometDisabled = function (c, a) {
    dwr.engine.setActiveReverseAjax(false);
    var b = (dwr.engine._receivedBatch == null && a != null);
    if (b) {
        dwr.engine._receivedBatch = dwr.engine._batches[a]
    }
    if (c.message == undefined) {
        c.message = ""
    }
    dwr.engine._handleError(dwr.engine._receivedBatch, c);
    if (b) {
        dwr.engine._receivedBatch = null;
        dwr.engine._clearUp(dwr.engine._batches[a])
    }
};
dwr.engine._remoteBeginIFrameResponse = function (b, a) {
    if (b != null) {
        dwr.engine._receivedBatch = b.batch
    }
    dwr.engine._callPostHooks(dwr.engine._receivedBatch)
};
dwr.engine._remoteEndIFrameResponse = function (a) {
    dwr.engine._clearUp(dwr.engine._receivedBatch);
    dwr.engine._receivedBatch = null
};
dwr.engine._eval = function (script) {
    if (script == null) {
        return null
    }
    if (script == "") {
        dwr.engine._debug("Warning: blank script", true);
        return null
    }
    return eval(script)
};
dwr.engine._abortRequest = function (a) {
    if (a && !a.completed) {
        clearInterval(a.interval);
        dwr.engine._clearUp(a);
        if (a.req) {
            a.req.abort()
        }
        dwr.engine._handleError(a, {name: "dwr.engine.timeout", message: "Timeout"})
    }
};
dwr.engine._callPostHooks = function (a) {
    if (a.postHooks) {
        for (var b = 0; b < a.postHooks.length; b++) {
            a.postHooks[b]()
        }
        a.postHooks = null
    }
};
dwr.engine._clearUp = function (b) {
    if (!b) {
        dwr.engine._debug("Warning: null batch in dwr.engine._clearUp()", true);
        return
    }
    if (b.completed == "true") {
        dwr.engine._debug("Warning: Double complete", true);
        return
    }
    if (b.div) {
        b.div.parentNode.removeChild(b.div)
    }
    if (b.iframe) {
        for (var c = 0; c < dwr.engine._outstandingIFrames.length; c++) {
            if (dwr.engine._outstandingIFrames[c] == b.iframe) {
                dwr.engine._outstandingIFrames.splice(c, 1)
            }
        }
        b.iframe.parentNode.removeChild(b.iframe)
    }
    if (b.form) {
        b.form.parentNode.removeChild(b.form)
    }
    if (b.req) {
        if (b.req == dwr.engine._pollReq) {
            dwr.engine._pollReq = null
        }
        delete b.req
    }
    if (b.map && b.map.batchId) {
        delete dwr.engine._batches[b.map.batchId];
        dwr.engine._batchesLength--
    }
    b.completed = true;
    if (dwr.engine._batchQueue.length != 0) {
        var a = dwr.engine._batchQueue.shift();
        dwr.engine._sendData(a)
    }
};
dwr.engine._handleError = function (a, b) {
    if (typeof b == "string") {
        b = {name: "unknown", message: b}
    }
    if (b.message == null) {
        b.message = ""
    }
    if (b.name == null) {
        b.name = "unknown"
    }
    if (a && typeof a.errorHandler == "function") {
        a.errorHandler(b.message, b)
    } else {
        if (dwr.engine._errorHandler) {
            dwr.engine._errorHandler(b.message, b)
        }
    }
    dwr.engine._clearUp(a)
};
dwr.engine._handleWarning = function (a, b) {
    if (typeof b == "string") {
        b = {name: "unknown", message: b}
    }
    if (b.message == null) {
        b.message = ""
    }
    if (b.name == null) {
        b.name = "unknown"
    }
    if (a && typeof a.warningHandler == "function") {
        a.warningHandler(b.message, b)
    } else {
        if (dwr.engine._warningHandler) {
            dwr.engine._warningHandler(b.message, b)
        }
    }
    dwr.engine._clearUp(a)
};
dwr.engine._serializeAll = function (b, d, c, a) {
    if (c == null) {
        b.map[a] = "null:null";
        return
    }
    switch (typeof c) {
        case"boolean":
            b.map[a] = "boolean:" + c;
            break;
        case"number":
            b.map[a] = "number:" + c;
            break;
        case"string":
            b.map[a] = "string:" + encodeURIComponent(c);
            break;
        case"object":
            if (c instanceof String) {
                b.map[a] = "String:" + encodeURIComponent(c)
            } else {
                if (c instanceof Boolean) {
                    b.map[a] = "Boolean:" + c
                } else {
                    if (c instanceof Number) {
                        b.map[a] = "Number:" + c
                    } else {
                        if (c instanceof Date) {
                            b.map[a] = "Date:" + c.getTime()
                        } else {
                            if (c && c.join) {
                                b.map[a] = dwr.engine._serializeArray(b, d, c, a)
                            } else {
                                b.map[a] = dwr.engine._serializeObject(b, d, c, a)
                            }
                        }
                    }
                }
            }
            break;
        case"function":
            break;
        default:
            dwr.engine._handleWarning(null, {
                name: "dwr.engine.unexpectedType",
                message: "Unexpected type: " + typeof c + ", attempting default converter."
            });
            b.map[a] = "default:" + c;
            break
    }
};
dwr.engine._lookup = function (e, c, a) {
    var d;
    for (var b = 0; b < e.length; b++) {
        if (e[b].data == c) {
            d = e[b];
            break
        }
    }
    if (d) {
        return "reference:" + d.name
    }
    e.push({data: c, name: a});
    return null
};
dwr.engine._serializeObject = function (c, h, g, b) {
    var f = dwr.engine._lookup(h, g, b);
    if (f) {
        return f
    }
    if (g.nodeName && g.nodeType) {
        return dwr.engine._serializeXml(c, h, g, b)
    }
    var e = "Object_" + dwr.engine._getObjectClassName(g) + ":{";
    var d;
    for (d in g) {
        if (typeof g[d] != "function") {
            c.paramCount++;
            var a = "c" + dwr.engine._batch.map.callCount + "-e" + c.paramCount;
            dwr.engine._serializeAll(c, h, g[d], a);
            e += encodeURIComponent(d) + ":reference:" + a + ", "
        }
    }
    if (e.substring(e.length - 2) == ", ") {
        e = e.substring(0, e.length - 2)
    }
    e += "}";
    return e
};
dwr.engine._errorClasses = {
    Error: Error,
    EvalError: EvalError,
    RangeError: RangeError,
    ReferenceError: ReferenceError,
    SyntaxError: SyntaxError,
    TypeError: TypeError,
    URIError: URIError
};
dwr.engine._getObjectClassName = function (c) {
    if (c && c.constructor && c.constructor.toString) {
        var d = c.constructor.toString();
        var a = d.match(/function\s+(\w+)/);
        if (a && a.length == 2) {
            return a[1]
        }
    }
    if (c && c.constructor) {
        for (var b in dwr.engine._errorClasses) {
            if (c.constructor == dwr.engine._errorClasses[b]) {
                return b
            }
        }
    }
    if (c) {
        var d = Object.prototype.toString.call(c);
        var a = d.match(/\[object\s+(\w+)/);
        if (a && a.length == 2) {
            return a[1]
        }
    }
    return "Object"
};
dwr.engine._serializeXml = function (c, f, e, b) {
    var d = dwr.engine._lookup(f, e, b);
    if (d) {
        return d
    }
    var a;
    if (window.XMLSerializer) {
        a = new XMLSerializer().serializeToString(e)
    } else {
        if (e.toXml) {
            a = e.toXml
        } else {
            a = e.innerHTML
        }
    }
    return "XML:" + encodeURIComponent(a)
};
dwr.engine._serializeArray = function (c, h, g, b) {
    var f = dwr.engine._lookup(h, g, b);
    if (f) {
        return f
    }
    var e = "Array:[";
    for (var d = 0; d < g.length; d++) {
        if (d != 0) {
            e += ","
        }
        c.paramCount++;
        var a = "c" + dwr.engine._batch.map.callCount + "-e" + c.paramCount;
        dwr.engine._serializeAll(c, h, g[d], a);
        e += "reference:";
        e += a
    }
    e += "]";
    return e
};
dwr.engine._unserializeDocument = function (a) {
    var c;
    if (window.DOMParser) {
        var e = new DOMParser();
        c = e.parseFromString(a, "text/xml");
        if (!c.documentElement || c.documentElement.tagName == "parsererror") {
            var b = c.documentElement.firstChild.data;
            b += "\n" + c.documentElement.firstChild.nextSibling.firstChild.data;
            throw b
        }
        return c
    } else {
        if (window.ActiveXObject) {
            c = dwr.engine._newActiveXObject(dwr.engine._DOMDocument);
            c.loadXML(a);
            return c
        } else {
            var d = document.createElement("div");
            d.innerHTML = a;
            return d
        }
    }
};
dwr.engine._newActiveXObject = function (a) {
    var d;
    for (var c = 0; c < a.length; c++) {
        try {
            d = new ActiveXObject(a[c]);
            break
        } catch (b) {
        }
    }
    return d
};
dwr.engine._debug = function (f, d) {
    var a = false;
    try {
        if (window.console) {
            if (d && window.console.trace) {
                window.console.trace()
            }
            window.console.log(f);
            a = true
        } else {
            if (window.opera && window.opera.postError) {
                window.opera.postError(f);
                a = true
            }
        }
    } catch (c) {
    }
    if (!a) {
        var b = document.getElementById("dwr-debug");
        if (b) {
            var e = f + "<br/>" + b.innerHTML;
            if (e.length > 2048) {
                e = e.substring(0, 2048)
            }
            b.innerHTML = e
        }
    }
};
var TrimPath;
(function () {
    if (TrimPath == null) {
        TrimPath = new Object()
    }
    if (TrimPath.evalEx == null) {
        TrimPath.evalEx = function (src) {
            return eval(src)
        }
    }
    var UNDEFINED;
    if (Array.prototype.pop == null) {
        Array.prototype.pop = function () {
            if (this.length === 0) {
                return UNDEFINED
            }
            return this[--this.length]
        }
    }
    if (Array.prototype.push == null) {
        Array.prototype.push = function () {
            for (var i = 0; i < arguments.length; ++i) {
                this[this.length] = arguments[i]
            }
            return this.length
        }
    }
    TrimPath.parseTemplate = function (tmplContent, optTmplName, optEtc) {
        if (optEtc == null) {
            optEtc = TrimPath.parseTemplate_etc
        }
        var funcSrc = parse(tmplContent, optTmplName, optEtc);
        var func = TrimPath.evalEx(funcSrc, optTmplName, 1);
        if (func != null) {
            return new optEtc.Template(optTmplName, tmplContent, funcSrc, func, optEtc)
        }
        return null
    };
    try {
        String.prototype.process = function (context, optFlags) {
            var template = TrimPath.parseTemplate(this, null);
            if (template != null) {
                return template.process(context, optFlags)
            }
            return this
        }
    } catch (e) {
    }
    TrimPath.parseTemplate_etc = {};
    TrimPath.parseTemplate_etc.statementTag = "forelse|for|if|elseif|else|var|macro";
    TrimPath.parseTemplate_etc.statementDef = {
        "if": {delta: 1, prefix: "if (", suffix: ") {", paramMin: 1},
        "else": {delta: 0, prefix: "} else {"},
        elseif: {delta: 0, prefix: "} else if (", suffix: ") {", paramDefault: "true"},
        "/if": {delta: -1, prefix: "}"},
        "for": {
            delta: 1, paramMin: 3, prefixFunc: function (stmtParts, state, tmplName, etc) {
                if (stmtParts[2] != "in") {
                    throw new etc.ParseError(tmplName, state.line, "bad for loop statement: " + stmtParts.join(" "))
                }
                var iterVar = stmtParts[1];
                var listVar = "__LIST__" + iterVar;
                return ["var ", listVar, " = ", stmtParts[3], ";", "var __LENGTH_STACK__;", "if (typeof(__LENGTH_STACK__) == 'undefined' || !__LENGTH_STACK__.length) __LENGTH_STACK__ = new Array();", "__LENGTH_STACK__[__LENGTH_STACK__.length] = 0;", "if ((", listVar, ") != null) { ", "var ", iterVar, "_ct = 0;", "for (var ", iterVar, "_index in ", listVar, ") { ", iterVar, "_ct++;", "if (typeof(", listVar, "[", iterVar, "_index]) == 'function') {continue;}", "__LENGTH_STACK__[__LENGTH_STACK__.length - 1]++;", "var ", iterVar, " = ", listVar, "[", iterVar, "_index];"].join("")
            }
        },
        forelse: {
            delta: 0,
            prefix: "} } if (__LENGTH_STACK__[__LENGTH_STACK__.length - 1] == 0) { if (",
            suffix: ") {",
            paramDefault: "true"
        },
        "/for": {delta: -1, prefix: "} }; delete __LENGTH_STACK__[__LENGTH_STACK__.length - 1];"},
        "var": {delta: 0, prefix: "var ", suffix: ";"},
        macro: {
            delta: 1, prefixFunc: function (stmtParts, state, tmplName, etc) {
                var macroName = stmtParts[1].split("(")[0];
                return ["var ", macroName, " = function", stmtParts.slice(1).join(" ").substring(macroName.length), "{ var _OUT_arr = []; var _OUT = { write: function(m) { if (m) _OUT_arr.push(m); } }; "].join("")
            }
        },
        "/macro": {delta: -1, prefix: " return _OUT_arr.join(''); };"}
    };
    TrimPath.parseTemplate_etc.modifierDef = {
        eat: function (v) {
            return ""
        }, escape: function (s) {
            return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }, capitalize: function (s) {
            return String(s).toUpperCase()
        }, "default": function (s, d) {
            return s != null ? s : d
        }
    };
    TrimPath.parseTemplate_etc.modifierDef.h = TrimPath.parseTemplate_etc.modifierDef.escape;
    TrimPath.parseTemplate_etc.Template = function (tmplName, tmplContent, funcSrc, func, etc) {
        this.process = function (context, flags) {
            if (context == null) {
                context = {}
            }
            if (context._MODIFIERS == null) {
                context._MODIFIERS = {}
            }
            if (context.defined == null) {
                context.defined = function (str) {
                    return (context[str] != undefined)
                }
            }
            for (var k in etc.modifierDef) {
                if (context._MODIFIERS[k] == null) {
                    context._MODIFIERS[k] = etc.modifierDef[k]
                }
            }
            if (flags == null) {
                flags = {}
            }
            var resultArr = [];
            var resultOut = {
                write: function (m) {
                    resultArr.push(m)
                }
            };
            try {
                func(resultOut, context, flags)
            } catch (e) {
                if (flags.throwExceptions == true) {
                    throw e
                }
                var result = new String(resultArr.join("") + "[ERROR: " + e.toString() + (e.message ? "; " + e.message : "") + "]");
                result.exception = e;
                return result
            }
            return resultArr.join("")
        };
        this.name = tmplName;
        this.source = tmplContent;
        this.sourceFunc = funcSrc;
        this.toString = function () {
            return "TrimPath.Template [" + tmplName + "]"
        }
    };
    TrimPath.parseTemplate_etc.ParseError = function (name, line, message) {
        this.name = name;
        this.line = line;
        this.message = message
    };
    TrimPath.parseTemplate_etc.ParseError.prototype.toString = function () {
        return ("TrimPath template ParseError in " + this.name + ": line " + this.line + ", " + this.message)
    };
    var parse = function (body, tmplName, etc) {
        body = cleanWhiteSpace(body);
        var funcText = ["var TrimPath_Template_TEMP = function(_OUT, _CONTEXT, _FLAGS) { with (_CONTEXT) {"];
        var state = {stack: [], line: 1};
        var endStmtPrev = -1;
        while (endStmtPrev + 1 < body.length) {
            var begStmt = endStmtPrev;
            begStmt = body.indexOf("{", begStmt + 1);
            while (begStmt >= 0) {
                var endStmt = body.indexOf("}", begStmt + 1);
                var stmt = body.substring(begStmt, endStmt);
                var blockrx = stmt.match(/^\{(cdata|minify|eval)/);
                if (blockrx) {
                    var blockType = blockrx[1];
                    var blockMarkerBeg = begStmt + blockType.length + 1;
                    var blockMarkerEnd = body.indexOf("}", blockMarkerBeg);
                    if (blockMarkerEnd >= 0) {
                        var blockMarker;
                        if (blockMarkerEnd - blockMarkerBeg <= 0) {
                            blockMarker = "{/" + blockType + "}"
                        } else {
                            blockMarker = body.substring(blockMarkerBeg + 1, blockMarkerEnd)
                        }
                        var blockEnd = body.indexOf(blockMarker, blockMarkerEnd + 1);
                        if (blockEnd >= 0) {
                            emitSectionText(body.substring(endStmtPrev + 1, begStmt), funcText);
                            var blockText = body.substring(blockMarkerEnd + 1, blockEnd);
                            if (blockType == "cdata") {
                                emitText(blockText, funcText)
                            } else {
                                if (blockType == "minify") {
                                    emitText(scrubWhiteSpace(blockText), funcText)
                                } else {
                                    if (blockType == "eval") {
                                        if (blockText != null && blockText.length > 0) {
                                            funcText.push("_OUT.write( (function() { " + blockText + " })() );")
                                        }
                                    }
                                }
                            }
                            begStmt = endStmtPrev = blockEnd + blockMarker.length - 1
                        }
                    }
                } else {
                    if (body.charAt(begStmt - 1) != "$" && body.charAt(begStmt - 1) != "\\") {
                        var offset = (body.charAt(begStmt + 1) == "/" ? 2 : 1);
                        if (body.substring(begStmt + offset, begStmt + 10 + offset).search(TrimPath.parseTemplate_etc.statementTag) == 0) {
                            break
                        }
                    }
                }
                begStmt = body.indexOf("{", begStmt + 1)
            }
            if (begStmt < 0) {
                break
            }
            var endStmt = body.indexOf("}", begStmt + 1);
            if (endStmt < 0) {
                break
            }
            emitSectionText(body.substring(endStmtPrev + 1, begStmt), funcText);
            emitStatement(body.substring(begStmt, endStmt + 1), state, funcText, tmplName, etc);
            endStmtPrev = endStmt
        }
        emitSectionText(body.substring(endStmtPrev + 1), funcText);
        if (state.stack.length != 0) {
            throw new etc.ParseError(tmplName, state.line, "unclosed, unmatched statement(s): " + state.stack.join(","))
        }
        funcText.push("}}; TrimPath_Template_TEMP");
        return funcText.join("")
    };
    var emitStatement = function (stmtStr, state, funcText, tmplName, etc) {
        var parts = stmtStr.slice(1, -1).split(" ");
        var stmt = etc.statementDef[parts[0]];
        if (stmt == null) {
            emitSectionText(stmtStr, funcText);
            return
        }
        if (stmt.delta < 0) {
            if (state.stack.length <= 0) {
                throw new etc.ParseError(tmplName, state.line, "close tag does not match any previous statement: " + stmtStr)
            }
            state.stack.pop()
        }
        if (stmt.delta > 0) {
            state.stack.push(stmtStr)
        }
        if (stmt.paramMin != null && stmt.paramMin >= parts.length) {
            throw new etc.ParseError(tmplName, state.line, "statement needs more parameters: " + stmtStr)
        }
        if (stmt.prefixFunc != null) {
            funcText.push(stmt.prefixFunc(parts, state, tmplName, etc))
        } else {
            funcText.push(stmt.prefix)
        }
        if (stmt.suffix != null) {
            if (parts.length <= 1) {
                if (stmt.paramDefault != null) {
                    funcText.push(stmt.paramDefault)
                }
            } else {
                for (var i = 1; i < parts.length; i++) {
                    if (i > 1) {
                        funcText.push(" ")
                    }
                    funcText.push(parts[i])
                }
            }
            funcText.push(stmt.suffix)
        }
    };
    var emitSectionText = function (text, funcText) {
        if (text.length <= 0) {
            return
        }
        var nlPrefix = 0;
        var nlSuffix = text.length - 1;
        while (nlPrefix < text.length && (text.charAt(nlPrefix) == "\n")) {
            nlPrefix++
        }
        while (nlSuffix >= 0 && (text.charAt(nlSuffix) == " " || text.charAt(nlSuffix) == "\t")) {
            nlSuffix--
        }
        if (nlSuffix < nlPrefix) {
            nlSuffix = nlPrefix
        }
        if (nlPrefix > 0) {
            funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
            var s = text.substring(0, nlPrefix).replace("\n", "\\n");
            if (s.charAt(s.length - 1) == "\n") {
                s = s.substring(0, s.length - 1)
            }
            funcText.push(s);
            funcText.push('");')
        }
        var lines = text.substring(nlPrefix, nlSuffix + 1).split("\n");
        for (var i = 0; i < lines.length; i++) {
            emitSectionTextLine(lines[i], funcText);
            if (i < lines.length - 1) {
                funcText.push('_OUT.write("\\n");\n')
            }
        }
        if (nlSuffix + 1 < text.length) {
            funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
            var s = text.substring(nlSuffix + 1).replace("\n", "\\n");
            if (s.charAt(s.length - 1) == "\n") {
                s = s.substring(0, s.length - 1)
            }
            funcText.push(s);
            funcText.push('");')
        }
    };
    var emitSectionTextLine = function (line, funcText) {
        var endMarkPrev = "}";
        var endExprPrev = -1;
        while (endExprPrev + endMarkPrev.length < line.length) {
            var begMark = "${", endMark = "}";
            var begExpr = line.indexOf(begMark, endExprPrev + endMarkPrev.length);
            if (begExpr < 0) {
                break
            }
            if (line.charAt(begExpr + 2) == "%") {
                begMark = "${%";
                endMark = "%}"
            }
            var endExpr = line.indexOf(endMark, begExpr + begMark.length);
            if (endExpr < 0) {
                break
            }
            emitText(line.substring(endExprPrev + endMarkPrev.length, begExpr), funcText);
            var exprArr = line.substring(begExpr + begMark.length, endExpr).replace(/\|\|/g, "#@@#").split("|");
            for (var k in exprArr) {
                if (exprArr[k].replace) {
                    exprArr[k] = exprArr[k].replace(/#@@#/g, "||")
                }
            }
            funcText.push("_OUT.write(");
            emitExpression(exprArr, exprArr.length - 1, funcText);
            funcText.push(");");
            endExprPrev = endExpr;
            endMarkPrev = endMark
        }
        emitText(line.substring(endExprPrev + endMarkPrev.length), funcText)
    };
    var emitText = function (text, funcText) {
        if (text == null || text.length <= 0) {
            return
        }
        text = text.replace(/\\/g, "\\\\");
        text = text.replace(/\n/g, "\\n");
        text = text.replace(/"/g, '\\"');
        funcText.push('_OUT.write("');
        funcText.push(text);
        funcText.push('");')
    };
    var emitExpression = function (exprArr, index, funcText) {
        var expr = exprArr[index];
        if (index <= 0) {
            funcText.push(expr);
            return
        }
        var parts = expr.split(":");
        funcText.push('_MODIFIERS["');
        funcText.push(parts[0]);
        funcText.push('"](');
        emitExpression(exprArr, index - 1, funcText);
        if (parts.length > 1) {
            funcText.push(",");
            funcText.push(parts[1])
        }
        funcText.push(")")
    };
    var cleanWhiteSpace = function (result) {
        result = result.replace(/\t/g, "    ");
        result = result.replace(/\r\n/g, "\n");
        result = result.replace(/\r/g, "\n");
        result = result.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1");
        return result
    };
    var scrubWhiteSpace = function (result) {
        result = result.replace(/^\s+/g, "");
        result = result.replace(/\s+$/g, "");
        result = result.replace(/\s+/g, " ");
        result = result.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1");
        return result
    };
    TrimPath.parseDOMTemplate = function (elementId, optDocument, optEtc) {
        if (optDocument == null) {
            optDocument = document
        }
        var element = optDocument.getElementById(elementId);
        var content = element.value;
        if (content == null) {
            content = element.innerHTML
        }
        content = content.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        return TrimPath.parseTemplate(content, elementId, optEtc)
    };
    TrimPath.processDOMTemplate = function (elementId, context, optFlags, optDocument, optEtc) {
        return TrimPath.parseDOMTemplate(elementId, optDocument, optEtc).process(context, optFlags)
    }
})();
TrimPath.parseTemplate_etc.modifierDef.escape = function (a) {
    return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
};
TrimPath.parseTemplate_etc.modifierDef.js_string = function (a) {
    return String(a).replace(/\\/g, "\\\\").replace(/'/g, "\\&#39;").replace(/"/g, "\\&#34;")
};
TrimPath.parseTemplate_etc.modifierDef.substring = function (c, b, a) {
    return String(c).substr(b, a)
};
TrimPath.parseTemplate_etc.modifierDef.replace = function (c, b, a) {
    return String(c).replace(b, a)
};
TrimPath.parseTemplate_etc.modifierDef.parentDomain = function (a) {
    return DomainMap.getParentDomain(a)
};
TrimPath.parseTemplate_etc.modifierDef.to_url = function (b) {
    if (b == null) {
        return "#"
    }
    var a = /^(.+):\/\/(.*)$/;
    if (!a.test(b)) {
        b = "http://" + b
    }
    return b
};
TrimPath.parseTemplate_etc.modifierDef.showBr = function (a) {
    return String(a).replace(/\n/g, "<br>")
};
TrimPath.parseTemplate_etc.modifierDef.erase = function (b, a) {
    b = b + "";
    if (b.length <= a) {
        return b
    }
    return b.substr(0, a) + "..."
};
if (NetEase == undefined) {
    var NetEase = {}
}
NetEase.SimpleDragDrop = Class.create();
NetEase.SimpleDragDrop.prototype = {
    initialize: function () {
        this.drags = [];
        this.options = Object.extend({top: -1, left: 0, width: 0, height: 0, constraint: "all"}, arguments[0] || {});
        this.options.top = parseInt(this.options.top || "0");
        this.options.left = parseInt(this.options.left || "0");
        this.options.width = parseInt(this.options.width || "0");
        this.options.height = parseInt(this.options.height || "0")
    }, addDraggable: function (a) {
        new NetEase.Draggable(a, this, Object.extend(this.options, arguments[1] || {}))
    }, removeDraggable: function (a) {
        a = $id(a);
        this.drags.select(function (b) {
            return b.getElement() == a
        }).each(function (b) {
            b.destroy()
        })
    }, register: function (a) {
        if (this.drags.length == 0) {
            this.eventMouseUp = this.endDrag.bindAsEventListener(this);
            this.eventMouseMove = this.updateDrag.bindAsEventListener(this);
            this.eventKeypress = this.keyPress.bindAsEventListener(this);
            Event.observe(document, "mouseup", this.eventMouseUp);
            Event.observe(document, "mousemove", this.eventMouseMove);
            Event.observe(document, "keypress", this.eventKeypress)
        }
        this.drags.push(a)
    }, unregister: function (a) {
        this.drags = this.drags.reject(function (b) {
            return b == a
        });
        if (this.drags.length == 0) {
            Event.stopObserving(document, "mouseup", this.eventMouseUp);
            Event.stopObserving(document, "mousemove", this.eventMouseMove);
            Event.stopObserving(document, "keypress", this.eventKeypress)
        }
    }, activate: function (a) {
        window.focus();
        this.activeDraggable = a
    }, deactivate: function () {
        this.activeDraggable = null
    }, updateDrag: function (a) {
        if (!this.activeDraggable) {
            return
        }
        var b = [Event.pointerX(a), Event.pointerY(a)];
        if (this._lastPointer && (this._lastPointer.inspect() == b.inspect())) {
            return
        }
        this._lastPointer = b;
        this.activeDraggable.updateDrag(a, b)
    }, endDrag: function (a) {
        if (!this.activeDraggable) {
            return
        }
        this._lastPointer = null;
        this.activeDraggable.endDrag(a);
        this.activeDraggable = null
    }, keyPress: function (a) {
        if (this.activeDraggable) {
            this.activeDraggable.keyPress(a)
        }
    }
};
NetEase.Draggable = Class.create();
NetEase.Draggable.prototype = {
    initialize: function (c, a) {
        var b = Object.extend({
            handle: false, starteffect: function (d) {
                new Effect.Opacity(d, {duration: 0.2, from: 1, to: 0.7})
            }, endeffect: function (d) {
                new Effect.Opacity(d, {duration: 0.2, from: 0.7, to: 1})
            }, zindex: 1000, onDrag: Prototype.emptyFunction
        }, arguments[2] || {});
        this.element = $id(c);
        if (b.handle && (typeof b.handle == "string")) {
            this.handle = this._childrenWithClassName(this.element, b.handle)[0]
        }
        if (!this.handle) {
            this.handle = $id(b.handle)
        }
        if (!this.handle) {
            this.handle = this.element
        }
        Element.makePositioned(this.element);
        this.delta = this.currentDelta();
        this.options = b;
        this.dragging = false;
        this.eventMouseDown = this.initDrag.bindAsEventListener(this);
        Event.observe(this.handle, "mousedown", this.eventMouseDown);
        this.draggables = a;
        this.draggables.register(this)
    }, getElement: function () {
        return this.element
    }, destroy: function () {
        Event.stopObserving(this.handle, "mousedown", this.eventMouseDown);
        this.draggables.unregister(this)
    }, currentDelta: function () {
        return ([parseInt(Element.getStyle(this.element, "left") || "0"), parseInt(Element.getStyle(this.element, "top") || "0")])
    }, initDrag: function (a) {
        if (Event.isLeftClick(a)) {
            var c = Event.element(a);
            if (c.tagName && (c.tagName == "INPUT" || c.tagName == "SELECT" || c.tagName == "OPTION" || c.tagName == "BUTTON" || c.tagName == "TEXTAREA")) {
                return
            }
            var b = [Event.pointerX(a), Event.pointerY(a)];
            var d = Position.cumulativeOffset(this.element);
            this.offset = [0, 1].map(function (e) {
                return (b[e] - d[e])
            });
            this.draggables.activate(this);
            Event.stop(a)
        }
    }, startDrag: function (a) {
        this.dragging = true;
        if (this.options.zindex) {
            this.originalZ = parseInt(Element.getStyle(this.element, "z-index") || 0);
            this.element.style.zIndex = this.options.zindex
        }
        if (this.options.starteffect) {
            this.options.starteffect(this.element)
        }
    }, updateDrag: function (a, b) {
        if (!this.dragging) {
            this.startDrag(a)
        }
        Position.prepare();
        this.draw(b);
        if (navigator.appVersion.indexOf("AppleWebKit") > 0) {
            window.scrollBy(0, 0)
        }
        this.options.onDrag();
        Event.stop(a)
    }, finishDrag: function (a, b) {
        this.dragging = false;
        this.delta = this.currentDelta();
        this.element.style.zIndex = this.originalZ;
        if (this.options.endeffect) {
            this.options.endeffect(this.element)
        }
        this.draggables.deactivate(this)
    }, keyPress: function (a) {
        if (a.keyCode != Event.KEY_ESC) {
            return
        }
        this.finishDrag(a, false);
        Event.stop(a)
    }, endDrag: function (a) {
        if (!this.dragging) {
            return
        }
        this.finishDrag(a, true);
        Event.stop(a)
    }, draw: function (a) {
        var e = Position.cumulativeOffset(this.element);
        var c = this.currentDelta();
        e[0] -= c[0];
        e[1] -= c[1];
        var b = [0, 1].map(function (d) {
            return (a[d] - e[d] - this.offset[d])
        }.bind(this));
        if (this.options.left != 0) {
            if ((this.options.width != 0) && (b[0] > this.options.left + this.options.width)) {
                b[0] = this.options.left + this.options.width
            } else {
                if (b[0] < this.options.left) {
                    b[0] = this.options.left
                }
            }
        }
        if (this.options.top != 0) {
            if ((this.options.height != 0) && (b[1] > this.options.top + this.options.height)) {
                b[1] = this.options.top + this.options.height
            } else {
                if (b[1] < this.options.top) {
                    b[1] = this.options.top
                }
            }
        }
        if (this.options.constraint == "horizontal") {
            Element.setStyle(this.element, {left: b[0] + "px"})
        } else {
            if (this.options.constraint == "vertical") {
                Element.setStyle(this.element, {top: b[1] + "px"})
            } else {
                Element.setStyle(this.element, {left: b[0] + "px", top: b[1] + "px"})
            }
        }
        if (Element.getStyle(this.element, "visibility") == "hidden") {
            Element.setStyle(this.element, {visibility: ""})
        }
    }, _childrenWithClassName: function (a, b) {
        return $A($id(a).getElementsByTagName("*")).select(function (d) {
            return Element.hasClassName(d, b)
        })
    }
};
Element.removeChild = Element.remove;
if (NetEase == undefined) {
    var NetEase = {}
}
NetEase.JSWindowManager = Class.create();
NetEase.JSWindowManager.prototype = {
    initialize: function () {
        this.options = Object.extend({
            prefix: "$_",
            systemBarPostfix: "_system_bar",
            panelPostfix: "_panel",
            titlePostfix: "_title",
            closePostfix: "_close",
            allowDrag: true,
            useDragOpacity: true,
            simpleDrag: false
        }, arguments[0] || {});
        this.jsWindowList = [];
        this.baseIndex = 10000;
        this.indexAdd = 0;
        this.topIndex = 99999;
        if (this.options.allowDrag) {
            this.simpleDragDrop = new NetEase.SimpleDragDrop({
                useDragOpacity: this.options.useDragOpacity,
                simpleDrag: this.options.simpleDrag
            })
        }
        this.curWindow = null;
        Event.observe(document, "keyup", this._closeCurrentWindow.bindAsEventListener(this))
    }, _closeCurrentWindow: function (a) {
        return;
        if (this.curWindow && a.keyCode == Event.KEY_ESC) {
            this.curWindow.hiddenWindow()
        }
    }, existWindow: function (b) {
        var a = this.jsWindowList.detect(this._detectIter.bind(this, b));
        return a ? true : false
    }, getWindow: function (a) {
        return this.jsWindowList.detect(this._detectIter.bind(this, a))
    }, createWindow: function (d, c) {
        if ($id(d) != null) {
            alert("该窗口已经存在!");
            return
        }
        var b = Object.extend({
            className: false,
            width: 531,
            height: 294,
            left: false,
            top: false,
            allowDrag: true,
            notKeepPos: true,
            onTop: false,
            hasSystemBar: true,
            systemBarClassName: "titlebar",
            handleClass: "$$_handle_class",
            titleId: false,
            title: "JSWindow",
            hasCloseId: true,
            closeId: false,
            hiddenOnClose: true,
            panelClassName: "content",
            useShadow: true,
            needCover: false,
            allowScroll: false,
            opacity: 0.25,
            beforShowFunc: Prototype.emptyFunction,
            afterShowFunc: Prototype.emptyFunction,
            beforeHiddenFunc: Prototype.emptyFunction,
            afterHiddenFunc: Prototype.emptyFunction,
            beforeCloseFunc: Prototype.emptyFunction,
            afterCloseFunc: Prototype.emptyFunction
        }, c || {});
        if (!this.options.allowDrag) {
            b.allowDrag = false
        }
        this._buildPos(b);
        if (b.onTop) {
            b.zIndex = this.topIndex
        } else {
            b.zIndex = this.baseIndex + (this.indexAdd++)
        }
        if (b.titleId == false) {
            b.titleId = this.options.prefix + d + this.options.systemBarPostfix + this.options.titlePostfix
        }
        if (b.hasSystemBar && b.hasCloseId && b.closeId == false) {
            b.closeId = this.options.prefix + d + this.options.systemBarPostfix + this.options.closePostfix
        }
        var a = this._createJSWindow(d, b);
        a.windowHtml = this._createWindowHtml(d, b);
        if (b.hasSystemBar) {
            a.systemBar = this._createSystemBar(a.windowHtml, d, b)
        }
        a.panel = this._createPanel(a.windowHtml, d, b);
        this.jsWindowList.push(a);
        return a
    }, _getContainer: function (b) {
        var a = (b.notKeepPos) ? UD.layer : UD.body;
        if (a == null) {
            a = document.body
        }
        return a
    }, _getLeft: function (a) {
        var b = (document.documentElement.clientWidth - a) / 2;
        if (b < 10) {
            b = 10
        }
        return b
    }, _getTop: function (a, b) {
        var c = 0;
        if (b == UD.layer || b == document.body) {
            c = document.documentElement.scrollTop + (document.documentElement.clientHeight - a) / 2
        } else {
            c = UD.body.parentNode.scrollTop + (document.documentElement.clientHeight - a) / 2
        }
        if (c < 10) {
            c = 10
        }
        return c
    }, _buildPos: function (a) {
        if (!a.left) {
            a.left = this._getLeft(a.width);
            a._caluLeft = true
        }
        if (!a.top) {
            a.top = this._getTop(a.height, this._getContainer(a));
            a._caluTop = true
        }
    }, setPos: function (c, b) {
        var a = this.jsWindowList.detect(this._detectIter.bind(this, c));
        this._setPos(a, b);
        return a
    }, _setPos: function (a, b) {
        if (a) {
            Object.extend(a.options, b);
            a.options.notKeepPos = true;
            this._buildPos(a.options)
        }
    }, showWindow: function (b) {
        var a = this.jsWindowList.detect(this._detectIter.bind(this, b));
        this._showWindow(a);
        return a
    }, _showWindow: function (a) {
        if (a) {
            this._showMode(a, true);
            a.options.beforShowFunc(a);
            if (a.options.notKeepPos) {
                if (a.options._caluLeft) {
                    a.options.left = this._getLeft(a.options.width)
                }
                a.windowHtml.style.left = a.options.left + "px";
                if (a.options._caluTop) {
                    a.options.top = this._getTop(a.options.height, a.containerDiv)
                }
                a.windowHtml.style.top = a.options.top + "px"
            }
            a.windowHtml.style.display = "";
            this._hideSelect(true);
            a.options.afterShowFunc(a);
            this.curWindow = a
        }
    }, _showMode: function (c, a) {
        if (!c.options.needCover) {
            return
        }
        var b = c.containerDiv;
        if (c.options.allowScroll) {
            b = UD.layer
        }
        var d = $id(b.id + "_gap");
        if (!d) {
            d = document.createElement("div");
            d.id = b.id + "_gap";
            d.style.position = "fixed";
            d.style.display = "none";
            d.style.left = "0px";
            d.style.top = "0px";
            d.style.backgroundColor = "#ffffff";
            d.style.MozOpacity = "" + c.options.opacity;
            d.style.filter = "alpha(opacity=" + c.options.opacity * 100 + ")";
            d.style.width = b.parentNode.scrollWidth + "px";
            d.style.height = b.parentNode.scrollHeight + "px";
            d.style.zIndex = this.baseIndex - 1;
            b.parentNode.appendChild(d)
        }
        d.style.display = a ? "block" : "none"
    }, updateTitle: function (c, b) {
        var a = this.jsWindowList.detect(this._detectIter.bind(this, c));
        this._updateTitle(a, b);
        return a
    }, _updateTitle: function (a, b) {
        if (a) {
            a.options.title = b;
            $id(a.options.titleId).innerHTML = b
        }
    }, hiddenWindow: function (b) {
        var a = this.jsWindowList.detect(this._detectIter.bind(this, b));
        this._hiddenWindow(a);
        return a
    }, _hiddenWindow: function (a) {
        if (a) {
            this._showMode(a, false);
            a.options.beforeHiddenFunc(a);
            a.windowHtml.style.display = "none";
            this._hideSelect(false);
            a.options.afterHiddenFunc(a);
            if (this.curWindow == a) {
                this.curWindow = null
            }
        }
    }, closeWindow: function (b) {
        var a = this.jsWindowList.detect(this._detectIter.bind(this, b));
        return this._closeWindow(a)
    }, _closeWindow: function (a) {
        if (a) {
            this._showMode(a, false);
            a.options.beforeCloseFunc(a);
            a.windowHtml.style.display = "none";
            this._hideSelect(false);
            if (a.options.allowDrag) {
                this.simpleDragDrop.removeDraggable(a.windowHtml.id)
            }
            if (a.options.hasSystemBar) {
                Element.removeChild(a.systemBar);
                a.systemBar = null
            }
            Element.removeChild(a.panel);
            a.panel = null;
            Element.removeChild(a.windowHtml);
            a.windowHtml = null;
            this.jsWindowList = this.jsWindowList.reject(this._detectIter.bind(this, a.id));
            a.options.afterCloseFunc();
            if (this.curWindow == a) {
                this.curWindow = null
            }
        }
    }, focusWindow: function (a) {
        if (a) {
            this._focusWindow(a.id)
        }
    }, _focusWindow: function (c) {
        var b = -1;
        this.indexAdd = 0;
        for (var a = 0; a < this.jsWindowList.length; a++) {
            if (this.jsWindowList[a].id != c) {
                if (!this.jsWindowList[a].options.onTop) {
                    this.jsWindowList[a].options.zIndex = this.baseIndex + (this.indexAdd++);
                    this.jsWindowList[a].windowHtml.style.zIndex = this.jsWindowList[a].options.zIndex
                }
            } else {
                b = a
            }
        }
        if (b > -1) {
            this.jsWindowList[b].options.zIndex = this.baseIndex + (this.indexAdd++);
            this.jsWindowList[b].windowHtml.style.zIndex = this.jsWindowList[b].options.zIndex;
            this.curWindow = this.jsWindowList[b]
        }
    }, _detectIter: function (b, a) {
        if (b == a.id) {
            return true
        }
        return false
    }, _createWindowHtml: function (c, b) {
        var a = document.createElement("div");
        a.id = this.options.prefix + c;
        a.className = b.useGlay ? "g_lay_com " : "" + (b.className ? b.className : "") + (b.useShadow ? " g_f_shw" : "");
        a.style.display = "none";
        a.style.position = "fixed";
        a.style.left = b.left + "px";
        a.style.top = b.top + "px";
        a.style.width = b.width ? b.width + "px" : "auto";
        if (!b.notKeepPos) {
            a.container = "in"
        }
        if (b.height != "auto") {
            if (isIE) {
                if (IEVer == 7) {
                    a.style.minHeight = b.height + "px";
                    a.style.height = "auto"
                } else {
                    a.style.height = b.height + "px"
                }
            } else {
                a.style.minHeight = b.height + "px";
                a.style.height = "auto"
            }
        }
        a.style.zIndex = b.zIndex;
        this._getContainer(b).appendChild(a);
        Event.observe(a.id, "click", this._focusWindow.bind(this, c));
        return a
    }, _createSystemBar: function (b, e, a) {
        var d = document.createElement("div");
        d.id = this.options.prefix + e + this.options.systemBarPostfix;
        d.className = "lytt yy";
        var c = "";
        if (a.hasCloseId) {
            c += '<a id ="' + a.closeId + '" class="lyclose j-close">关闭</a>'
        }
        c += '<h4 id="' + a.titleId + '">' + a.title + "</h4>";
        d.innerHTML = c;
        b.appendChild(d);
        if (a.hasCloseId) {
            if (a.hiddenOnClose) {
                Event.observe(a.closeId, "click", this.hiddenWindow.bind(this, e))
            } else {
                Event.observe(a.closeId, "click", this.closeWindow.bind(this, e))
            }
        }
        if (a.allowDrag) {
            this.simpleDragDrop.removeDraggable(b.id);
            this.simpleDragDrop.addDraggable(b.id, {handle: "$$_handle_class", zindex: this.topIndex - 1})
        }
        return d
    }, _createPanel: function (c, d, b) {
        var a = document.createElement("div");
        a.id = this.options.prefix + d + this.options.panelPostfix;
        if (b.panelClassName) {
            a.className = b.panelClassName
        }
        c.appendChild(a);
        return a
    }, _hideSelect: function (b) {
        if (isIE && IEVer < 7) {
            var c = document.getElementsByTagName("select");
            if (c) {
                for (var a = 0; a < c.length; a++) {
                    if (c[a].getAttribute("nohide") != "true") {
                        c[a].style.visibility = (b == true) ? "hidden" : "inherit"
                    }
                }
            }
        }
    }, _createJSWindow: function (c, b) {
        var a = {};
        a.id = c;
        a.options = b;
        a.containerDiv = this._getContainer(b);
        a.setPos = function (d) {
            this._setPos(a, d)
        }.bind(this);
        a.showWindow = function () {
            this._showWindow(a)
        }.bind(this);
        a.updateTitle = function (d) {
            this._updateTitle(a, d)
        }.bind(this);
        a.hiddenWindow = function () {
            this._hiddenWindow(a)
        }.bind(this);
        a.closeWindow = function () {
            this._closeWindow(a)
        }.bind(this);
        a.focusWindow = function () {
            this.focusWindow(a)
        }.bind(this);
        return a
    }
};
if (NetEase == undefined) {
    var NetEase = {}
}
NetEase.quickLoginTemplate = null;
NetEase.indexLoginTemplate = null;
var type163 = 0;
var typePopo = 1;
var type126 = 2;
var type188 = 3;
var typeVip = 4;
var typeYeah = 5;
var ckLoginInfoKey = "NEBLOG_LOGIN";
var ckLoginInfo = {type: null, name: null, pass: null};
var ckPath = "/";
var ckDomain = DomainMap.cookieDomain;
var errInfo = ["用户名或密码不正确，请重新输入", "该网易博客用户名不存在", "超时退出或无权限访问，请重新登录"];
NetEase.QuickLogin = Class.create();
NetEase.QuickLogin.prototype = {
    initialize: function (b, c, a) {
        this.options = Object.extend({err: false, jsWindowManager: null}, arguments[3] || {});
        this.presentShowId = b;
        this.serverName = c;
        this.bFromIndex = a;
        this.err = false;
        this.jsWindowManager = this.options.jsWindowManager;
        this.objUsername;
        this.objPassword;
        this.objSetCkCheck;
        this.frmLogin;
        this.divNotice;
        this.btn_login;
        this.btn_reg;
        this.curUserType = 0;
        this.noticeInit = "请输入用户名和密码登录";
        this.noticeAccount = "请输入网易邮箱用户名";
        this.noticePassword = "请完整填写登录信息，密码不能为空";
        this.isPwdFromCk = false;
        this.pwdFromCk;
        this.pwdFromCkTrim;
        this.strUsername;
        this.strPassword;
        this.qLoginZone = null;
        this._load()
    }, _load: function () {
        getLoginCookie();
        this.curUserType = ckLoginInfo.type;
        if (this.curUserType == null) {
            this.curUserType = type163
        } else {
            this.curUserType = parseInt(this.curUserType)
        }
        if (!this.bFromIndex || this.presentShowId == "qIndexLoginDiv") {
            if (NetEase.quickLoginTemplate == null) {
                NetEase.quickLoginTemplate = quicklogin_jst
            }
            var c = {err: false};
            var a = NetEase.quickLoginTemplate;
            if (this.presentShowId) {
                this.qLoginZone = this.jsWindowManager.createWindow(this.presentShowId, {
                    className: "g_lay_com g_win_4 g_f_shw",
                    width: 500,
                    height: 250,
                    hideFlash: true,
                    title: "登录网易博客",
                    onTop: true,
                    notKeepPos: true
                });
                this.qLoginZone.panel.innerHTML = a;
                this.qLoginZone.showWindow()
            }
        } else {
            if (NetEase.indexLoginTemplate == null) {
                NetEase.indexLoginTemplate = indexlogin_jst
            }
            var c = {err: false};
            var a = NetEase.indexLoginTemplate;
            $id("outLoginDiv").innerHTML = a
        }
        this.frmLogin = $id("frmLogin");
        this.divNotice = $id("notice_bar");
        this.objUsername = $id("in_username");
        this.objPassword = $id("in_password");
        this.objSetCkCheck = $id("setCookieCheck");
        if (document.all) {
            this.objUsername.attachEvent("onblur", this.checkUsername.bind(this));
            this.objPassword.attachEvent("onfocus", this.fnPassOnFocus.bind(this));
            this.objPassword.attachEvent("onblur", this.checkPassword.bind(this));
            if (!this.bFromIndex) {
                for (var b = 0; b < 6; b++) {
                    if ($id("tab_a_" + b)) {
                        $id("tab_a_" + b).attachEvent("onclick", this.selectUserType.bind(this, b))
                    } else {
                        $id("tab_" + b).attachEvent("onclick", this.selectUserType.bind(this, b))
                    }
                }
            }
            $id("qLoginButt").attachEvent("onclick", this.dologin.bind(this));
            this.frmLogin.attachEvent("onkeypress", this.frmDologinIE.bind(this));
            this.objSetCkCheck.attachEvent("onclick", this.changeCookieCheck.bind(this))
        } else {
            this.objUsername.addEventListener("blur", this.checkUsername.bind(this), true);
            this.objPassword.addEventListener("focus", this.fnPassOnFocus.bind(this), true);
            this.objPassword.addEventListener("blur", this.checkPassword.bind(this), true);
            if (!this.bFromIndex) {
                for (var b = 0; b < 6; b++) {
                    if ($id("tab_a_" + b)) {
                        $id("tab_a_" + b).onclick = this.selectUserType.bind(this, b)
                    } else {
                        $id("tab_" + b).onclick = this.selectUserType.bind(this, b)
                    }
                }
            }
            $id("qLoginButt").onclick = this.dologin.bind(this);
            this.frmLogin.onkeypress = this.frmDologin.bind(this);
            this.objSetCkCheck.onclick = this.changeCookieCheck.bind(this)
        }
        if (this.bFromIndex) {
            showLoginType(this.curUserType)
        }
        this.selectUserType(this.curUserType)
    }, showWindow: function (a) {
        if (a) {
            this.loginTarget = a
        }
        this.qLoginZone.showWindow()
    }, frmDologinIE: function () {
        if (event.keyCode == 13) {
            this.dologin()
        }
    }, frmDologin: function (a) {
        if (a.keyCode == 13) {
            this.dologin()
        }
    }, changeCookieCheck: function () {
        if (!this.objSetCkCheck.checked) {
            clearLoginCookie()
        }
    }, checkUsername: function () {
        var a = this.objUsername.value;
        if (a.length > 0) {
            this.divNotice.innerHTML = this.noticeAccount
        } else {
            this.divNotice.innerHTML = this.noticeInit
        }
        return true
    }, checkPasswordFocus: function () {
        var b = this.objPassword.value;
        if (b == "") {
            var a = this.objUsername.value + getNameSuffix(this.curUserType);
            b = ckLoginInfo.pass;
            if (null != b) {
                this.pwdFromCk = b;
                this.pwdFromCkTrim = b.substring(0, 11);
                this.isPwdFromCk = true;
                this.objPassword.value = b.substring(0, 11)
            }
        }
        this.checkPassword()
    }, fnPassOnFocus: function () {
        this.objPassword.select();
        this.checkPassword()
    }, checkPassword: function () {
        var b = this.objPassword.value;
        if (null == b || b == "") {
            this.isPwdFromCk = false
        }
        var a = /^[\s]*$/g;
        if (b.match(a) != null) {
            this.divNotice.innerHTML = this.noticePassword;
            return false
        } else {
            this.divNotice.innerHTML = this.noticeInit;
            return true
        }
    }, dologin: function () {
        if (this.checkUsername() && this.checkPassword()) {
            this.divNotice.innerHTML = "正在登录，请稍候...";
            this.objUsername.disabled = true;
            this.objPassword.disabled = true;
            if (document.all) {
                this.objUsername.detachEvent("onblur", this.checkUsername);
                this.objPassword.detachEvent("onfocus", this.checkPassword);
                this.objPassword.detachEvent("onblur", this.checkPassword);
                $id("frmLogin").detachEvent("onkeypress", this.frmDologinIE);
                $id("qLoginButt").detachEvent("onclick", this.dologin);
                this.objSetCkCheck.detachEvent("onclick", this.changeCookieCheck)
            } else {
                this.objUsername.removeEventListener("blur", this.checkUsername, true);
                this.objPassword.removeEventListener("focus", this.checkPassword, true);
                this.objPassword.removeEventListener("blur", this.checkPassword, true)
            }
            var d = this.objPassword.value;
            var b;
            if (!this.isPwdFromCk || d != this.pwdFromCkTrim) {
                if (this.curUserType == type163 || this.curUserType == typeVip) {
                    d = this.pwd_js_string(d)
                }
                if (this.curUserType == type163 || this.curUserType == typeVip) {
                    d = d.substring(0, 16)
                } else {
                    if (this.curUserType == typePopo) {
                        d = d.substring(0, 21)
                    }
                }
                b = d;
                d = hex_md5(d)
            } else {
                d = this.pwdFromCk;
                b = d
            }
            var c = Trim(this.objUsername.value);
            var a = c;
            c += getNameSuffix(this.curUserType);
            if (this.curUserType == type126 || this.curUserType == type188 || this.curUserType == typeYeah) {
                d = b
            }
            if (this.objSetCkCheck.checked) {
                clearLoginCookie();
                setLoginCookie(1, a);
                setLoginCookie(2, d)
            } else {
                clearLoginCookie()
            }
            setLoginCookie(0, this.curUserType);
            this.strUsername = c;
            this.strPassword = d;
            if (this.bFromIndex || this.presentShowId == "qIndexLoginDiv") {
                loginFromIndex(c, d)
            } else {
                UserBean.check(c, d, this.dologinCb.bind(this))
            }
        }
        return false
    }, dologinCb: function (a) {
        if (a != null) {
            if (a == "not reg!!") {
                window.open("http://blog.163.com/passportIn.do?in_username=" + this.strUsername + "&in_password=" + this.strPassword)
            } else {
                if (this.loginTarget == null) {
                    if ($id("$_oppoPageUrlForLogin") && (UD.hostName == this.strUsername)) {
                        if (UD.hostPath == "") {
                            this.loginTarget = "http://" + DomainMap.getParentDomain(this.strUsername) + $id("$_oppoPageUrlForLogin").value
                        } else {
                            this.loginTarget = $id("$_oppoPageUrlForLogin").value
                        }
                    } else {
                        this.loginTarget = window.location.href
                    }
                }
                this.loginTarget = this.loginTarget.replace("{username}", this.strUsername);
                location.href = "http://blog.163.com/loginGate.do?username=" + this.strUsername + "&target=" + encodeURIComponent(this.loginTarget)
            }
        } else {
            this.objPassword.value = "";
            this.objUsername.disabled = false;
            this.objPassword.disabled = false;
            this.divNotice.innerHTML = "<span class='clr03'>用户名或密码不正确，请重新输入。</span>";
            $id("in_username").focus()
        }
        return false
    }, pwd_js_string: function (a) {
        return String(a).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"')
    }, updateSuffix: function (b) {
        var a = $id("account_suffix");
        a.innerHTML = b
    }, selectUserType: function (m) {
        if (!this.bFromIndex) {
            for (var f = 0; f < 6; f++) {
                if ($id("tab_" + f)) {
                    if (m == f) {
                        if (!this.bFromIndex) {
                            $id("tab_" + f).className = "g_f_hov selected"
                        }
                    } else {
                        if (!this.bFromIndex) {
                            $id("tab_" + f).className = "g_f_hov"
                        }
                    }
                }
            }
        }
        var d = $id("reg_add");
        var g = $id("getPass_add");
        var h = $id("innerLoginDiv");
        var b = "bg_taglog";
        if (!this.bFromIndex) {
            b = "bg_menu"
        }
        if (!this.bFromIndex && h) {
            h.style.backgroundImage = "url(http://b.bst.126.net/style/common/index/" + b + m + ".gif)"
        }
        if (this.bFromIndex) {
            this.noticeInit = "已开通网易博客的＂" + getShowLogName(m) + "＂用户直接登录";
            this.noticeAccount = "请输入" + getShowLogName(m) + "用户名"
        } else {
            this.noticeInit = "请输入" + getShowLogName(m) + "用户名和密码登录";
            this.noticeAccount = "请输入" + getShowLogName(m) + "用户名"
        }
        if (m == type163) {
            this.updateSuffix("@163.com");
            d.href = "http://reg.163.com/reg/reg0.jsp?url=http://blog.163.com/ntesRegBlank.html";
            g.setAttribute("href", "http://reg.163.com/RecoverPasswd1.shtml")
        } else {
            if (m == type126) {
                this.updateSuffix("@126.com");
                g.setAttribute("href", "http://reg.126.com/recoverpass/")
            } else {
                if (m == typePopo) {
                    this.updateSuffix(".popo&nbsp;&nbsp;&nbsp;");
                    d.href = "http://reg.popo.163.com/";
                    g.setAttribute("href", "http://popo.163.com/prtpass/getpass.sp");
                    g.href = "http://popo.163.com/prtpass/getpass.sp"
                } else {
                    if (m == type188) {
                        this.updateSuffix("@188.com");
                        d.href = "http://reg.mail.188.com/index.jsp?from=";
                        g.setAttribute("href", "http://reg.mail.188.com/rstpsw/rpsel.htm")
                    } else {
                        if (m == typeVip) {
                            this.updateSuffix("@vip.163.com");
                            d.href = "http://vip.163.com/register.m";
                            g.setAttribute("href", "http://vip.163.com/PwdRepair/index.htm")
                        } else {
                            if (m == typeYeah) {
                                this.updateSuffix("@yeah.net");
                                d.href = "http://reg.mail.yeah.net/reg/reg1.jsp";
                                g.setAttribute("href", "http://reg.mail.yeah.net/reg/recoverpass/")
                            }
                        }
                    }
                }
            }
        }
        $id("reg_add").innerHTML = "注册" + getShowRegName(m) + " -->";
        this.curUserType = m;
        this.objUsername.value = "";
        this.objPassword.value = "";
        var o = ckLoginInfo.name;
        if (o && ckLoginInfo.type == m) {
            this.objUsername.value = o;
            this.checkPasswordFocus();
            this.objSetCkCheck.checked = true;
            this.noticeAccount = "请点击登录按钮";
            this.noticeInit = "请点击登录按钮"
        } else {
            this.objSetCkCheck.checked = false
        }
        var j = window.location.href;
        var f = j.indexOf("err=");
        if (f != -1) {
            var a = j.charAt(f + 4);
            if (a == "1" || a == "2" || a == "3" || a == "4") {
                var c = parseInt(a);
                if (c > 3) {
                    c = 1
                }
                this.noticeInit = this.noticeAccount = "<span class='cr'>" + errInfo[c - 1] + "</span>"
            }
        }
        this.checkUsername();
        if ($id("in_username")) {
            try {
                Field.activate("in_username")
            } catch (l) {
            }
        }
        if (this.bFromIndex) {
            showLoginType(m)
        }
        return false
    }
};

function closeLogin() {
    $id("loginNewDiv").style.display = "none"
}

function getLogStr(a) {
    if (a == type163) {
        return "163"
    } else {
        if (a == typePopo) {
            return "POPO"
        } else {
            if (a == type126) {
                return "126"
            } else {
                if (a == type188) {
                    return "188"
                } else {
                    if (a == typeVip) {
                        return "VIP"
                    } else {
                        if (a == typeYeah) {
                            return "YEAH"
                        }
                    }
                }
            }
        }
    }
}

function getNameSuffix(a) {
    if (a == type163) {
        return ""
    } else {
        if (a == typePopo) {
            return ".popo"
        } else {
            if (a == type126) {
                return "@126"
            } else {
                if (a == type188) {
                    return "@188"
                } else {
                    if (a == typeVip) {
                        return ".vip"
                    } else {
                        if (a == typeYeah) {
                            return "@yeah"
                        }
                    }
                }
            }
        }
    }
}

function getShowLogName(a) {
    if (a == type163) {
        return "网易邮箱"
    } else {
        if (a == typePopo) {
            return "POPO"
        } else {
            if (a == type126) {
                return "126邮箱"
            } else {
                if (a == type188) {
                    return "188邮箱"
                } else {
                    if (a == typeVip) {
                        return "VIP邮箱"
                    } else {
                        if (a == typeYeah) {
                            return "YEAH邮箱"
                        }
                    }
                }
            }
        }
    }
}

function getShowRegName(a) {
    if (a == type163) {
        return "通行证"
    } else {
        if (a == typePopo) {
            return "POPO"
        } else {
            if (a == type126) {
                return "126邮箱"
            } else {
                if (a == type188) {
                    return "188邮箱"
                } else {
                    if (a == typeVip) {
                        return "VIP邮箱"
                    } else {
                        if (a == typeYeah) {
                            return "YEAH邮箱"
                        }
                    }
                }
            }
        }
    }
}

function getLoginCookie() {
    var b;
    var c = Cookie.get(ckLoginInfoKey);
    if (c) {
        b = c.split("|");
        var d = null;
        if (b[0]) {
            ckLoginInfo.type = parseInt(b[0])
        }
        if (ckLoginInfo.type == null || ckLoginInfo.type == undefined || ckLoginInfo.type < 0 || ckLoginInfo.type > 4) {
            ckLoginInfo.type = null;
            return
        }
        if (b[1] != null && b[1] != undefined && b[1] != "null" && b[2] != null && b[2] != undefined) {
            ckLoginInfo.name = b[1];
            var e = c.indexOf("|", 2);
            ckLoginInfo.pass = c.substring(e + 1)
        }
    }
}

function setLoginCookie(b, a) {
    getLoginCookie();
    if (b == 0) {
        ckLoginInfo.type = a
    } else {
        if (b == 1) {
            ckLoginInfo.name = a
        } else {
            if (b == 2) {
                ckLoginInfo.pass = a
            }
        }
    }
    Cookie.clear(ckLoginInfoKey, ckPath);
    Cookie.set(ckLoginInfoKey, ckLoginInfo.type + "|" + ckLoginInfo.name + "|" + ckLoginInfo.pass, 30, ckPath, ckDomain)
}

function clearLoginCookie() {
    ckLoginInfo.name = null;
    ckLoginInfo.pass = null;
    Cookie.clear(ckLoginInfoKey, ckPath);
    if (ckLoginInfo.type != null && ckLoginInfo.type != undefined && ckLoginInfo.type != "null") {
        Cookie.set(ckLoginInfoKey, ckLoginInfo.type, 30, ckPath, ckDomain)
    }
}

var Cookie = {
    set: function (c, f, b, g, e) {
        var d = escape(c) + "=" + escape(f);
        if (b) {
            var a = new Date();
            a.setDate(a.getDate() + b);
            d += "; expires=" + a.toGMTString()
        }
        if (g) {
            d += ";path=" + g
        }
        if (e) {
            d += ";domain=" + e
        }
        document.cookie = d;
        if (f && (b == undefined || b > 0) && !this.get(c)) {
            return false
        }
    }, clear: function (a, b) {
        this.set(a, "", -1, b, ckDomain)
    }, get: function (b) {
        var c = "(^|;)\\s*" + escape(b) + "=([^;]+)";
        var a = document.cookie.match(c);
        if (a && a[2]) {
            return unescape(a[2])
        } else {
            return null
        }
    }
};
var quicklogin_jst = '<div>   <form name="frmLogin"  id="frmLogin"  method="post">      <div class="g_tab_btn03">        <div class="g_f_hov"  id="tab_0">网易邮箱</div>       <div class="g_f_hov" id="tab_2">126邮箱</div>       <div class="g_f_hov" id="tab_1">POPO</div>       <div class="g_f_hov" id="tab_3">188邮箱</div>       <div class="g_f_hov" id="tab_4">VIP邮箱</div>       <div class="g_f_hov" id="tab_5">YEAH邮箱</div>      </div>      <!-- 通行证 -->      <div class="case">       <div class="mgntxt clr02" id="notice_bar" style="display-left:0px;"></div>          <div class="input"><label for="text0">用户名：</label><input class="g_h_ipt" type="text" name="in_username" id="in_username"/>&nbsp;<span id="account_suffix">@163.com</span></div>       <div class="input"><label for="text1">密　码：</label><input class="g_h_ipt" type="password" name="in_password" id="in_password"/>&nbsp;<a class="a_a d_d" href="http://reg.163.com/RecoverPasswd1.shtml" target="_blank" id="getPass_add">忘记密码了?</a></div>       <div class="btnbar"><input type="checkbox"  name="setCookieCheck" id="setCookieCheck" ><label for="setCookieCheck">自动登录</label>&nbsp;<input type="button" class="btncm btnok" value="登录网易博客"  id="qLoginButt"/></div>         </div>      <div class="bottom">        <span>还没有网易博客?</span>&nbsp;<input type="button" class="btncm btncc" id="regBtn" value="立即注册" onclick="window.open(\'http://reg.163.com/reg/reg0.jsp?url=http://blog.163.com/ntesRegBlank.html\');" />      </div>   </form><span id="reg_add" style="display:none;" href="#">ww</span></div>';
if (UserBean == null) {
    var UserBean = {}
}
UserBean._path = "/dwr";
UserBean.clearSession = function (a) {
    DWREngine._execute(UserBean._path, "UserBean", "clearSession", false, a)
};
UserBean.check = function (c, a, b) {
    DWREngine._execute(UserBean._path, "UserBean", "check", c, a, false, false, false, b)
};
UserBean.getProvinceAndCity = function (a) {
    DWREngine._execute(UserBean._path, "UserBean", "getProvinceAndCity", false, false, a)
};
NetEase.QuickLoginOther = NetEase.QuickLogin;
NetEase.QuickLoginOther.prototype.showWindow = function () {
    var a = document.documentElement.clientHeight;
    var f = document.documentElement.scrollTop;
    if (this != top) {
        try {
            f = top.document.documentElement.scrollTop;
            a = top.document.documentElement.clientHeight
        } catch (d) {
        }
    }
    var b = f + (a - 400) / 2;
    if (b < 10) {
        b = 10
    }
    var c = (document.documentElement.clientWidth - 600) / 2;
    if (c < 10) {
        c = 10
    }
    $id("$_qLoginDiv").style.left = c + "px";
    $id("$_qLoginDiv").style.top = b + "px";
    $id("$_qLoginDiv").style.display = ""
};

function fnLoadInitOther() {
    new NetEase.QuickLoginOther(null, null, true, {err: false})
}

if (UD == null) {
    var UD = {}
}
UD.body = $id("_$$_inner_layer");
UD.layer = $id("_$$_outer_layer");
UD.window = $id("blog-163-com-body");
UD.bar = $id("theme_selector_pointer");
if (NetEase == undefined) {
    var NetEase = {}
}
NetEase.DwrLogger = Class.create();
NetEase.DwrLogger.prototype = {
    initialize: function () {
        this.options = Object.extend({
            fade: true,
            style: "http://b.bst.126.net/style/common",
            relativeId: false,
            width: 200,
            opacity: 0.8,
            timeout: 3000,
            delay: 1500
        }, arguments[0] || {});
        this._init();
        this.loggerIndex = -1;
        this.cacheLogger = []
    }, _init: function () {
        this.loggerZone = $id("$_loggerZone");
        if (!this.loggerZone) {
            this.loggerZone = document.createElement("div");
            this.loggerZone.setAttribute("id", "$_loggerZone");
            this.loggerZone.style.position = "absolute";
            this.loggerZone.style.zIndex = "100019";
            var a = 0;
            if (this.options.relativeId && $id(this.options.relativeId)) {
                a = $id(this.options.relativeId).offsetLeft
            }
            this.loggerZone.style.left = document.documentElement.scrollLeft + document.documentElement.clientWidth - this.options.width - a - 20 + "px";
            this.loggerZone.style.top = document.documentElement.scrollTop + 25 + "px";
            document.body.appendChild(this.loggerZone);
            var b = this._onResizeOb.bind(this);
            if (window.attachEvent) {
                window.attachEvent("onresize", b);
                window.attachEvent("onscroll", b)
            } else {
                window.addEventListener("resize", b, false);
                window.addEventListener("scroll", b, false)
            }
        }
    }, _onResizeOb: function () {
        if (this.loggerZone) {
            var a = 0;
            if (this.options.relativeId && $id(this.options.relativeId)) {
                a = $id(this.options.relativeId).offsetLeft
            }
            this.loggerZone.style.left = document.documentElement.scrollLeft + document.documentElement.clientWidth - this.options.width - a - 20 + "px";
            this.loggerZone.style.top = document.documentElement.scrollTop + 25 + "px"
        }
    }, appendMsg: function (d, c) {
        this.loggerIndex++;
        var b = {};
        b.id = "$_loggerMsg" + this.loggerIndex;
        b.msg = d;
        b.type = c;
        var a = document.createElement("div");
        a.setAttribute("id", b.id);
        if (b.type == "info") {
            a.innerHTML = '<img src="' + this.options.style + '/ico_info.gif"/>&nbsp;' + d
        } else {
            if (b.type == "ok") {
                a.innerHTML = '<img src="' + this.options.style + '/ico_confirm.gif"/>&nbsp;' + d
            } else {
                if (b.type == "error") {
                    a.innerHTML = '<img src="' + this.options.style + '/ico_error.gif"/>&nbsp;' + d
                } else {
                    a.innerHTML = '<img src="' + this.options.style + '/ico_info.gif"/>&nbsp;' + d
                }
            }
        }
        a.style.display = "block";
        a.style.backgroundColor = "#ffffff";
        a.style.margin = "5px";
        a.style.padding = "2px";
        a.style.textAlign = "left";
        a.style.MozOpacity = this.options.opacity + "";
        a.style.filter = "alpha(opacity=" + this.options.opacity * 100 + ")";
        a.style.width = this.options.width + "px";
        this.loggerZone.insertBefore(a, this.loggerZone.firstChild);
        this.cacheLogger.push(b);
        if (!this.toFadeCheck) {
            this.toFadeCheck = window.setTimeout(this._clean.bind(this, b), this.options.timeout)
        }
    }, _clean: function (a) {
        if (this.options.fade) {
            if ($id(a.id)) {
                Effect.Fade(a.id, {duration: 0.5, userCallBack: this._remove.bind(this, a)})
            }
        } else {
            this._remove(a)
        }
    }, _remove: function (a) {
        if ($id(a.id)) {
            $id(a.id).innerHTML = "";
            $id(a.id).style.display = "none";
            this.loggerZone.removeChild($id(a.id));
            this.cacheLogger.shift(a);
            if (this.cacheLogger.length > 0) {
                a = this.cacheLogger[0];
                this.toFadeCheck = window.setTimeout(this._clean.bind(this, a), this.options.delay)
            } else {
                this.toFadeCheck = null
            }
        }
    }
};
NetEase.DwrLogger.TYPE_INFO = "info";
NetEase.DwrLogger.TYPE_OK = "ok";
NetEase.DwrLogger.TYPE_ERROR = "error";
if (NetEase == undefined) {
    var NetEase = {}
}
NetEase.CachePage = Class.create();
NetEase.CachePage.prototype = {
    initialize: function () {
        this.options = Object.extend({
            loadFunc: Prototype.emptyFunction,
            loadParam: {},
            presentFunc: Prototype.emptyFunction,
            presentSlideFunc: Prototype.emptyFunction,
            filterFunc: Prototype.emptyFunction,
            organizeFunc: function (a) {
                return a
            },
            userPresentFuncParam: {},
            pageSize: 0,
            prefetchMulti: 1,
            prefetch: false,
            markID: "",
            customPageIds: false,
            totalSize: -1,
            styleDir: null,
            onlyLoadOnce: false,
            beforeID: "",
            beforePrev: Prototype.emptyFunction,
            beforeNext: Prototype.emptyFunction,
            detSlideIterator: Prototype.emptyFunction,
            delIterator: Prototype.emptyFunction,
            updateIterator: Prototype.emptyFunction,
            needRefreshAfterUpdate: true,
            RefreshAfterAdd: true,
            initData: false
        }, arguments[0] || {});
        this.cacheData = [];
        this.markIDArray = [];
        this._initial();
        this.bMarkFirst = true
    }, setUserPresetFuncParam: function (a) {
        this.options.userPresentFuncParam = a
    }, reset: function () {
        this.cacheData = [];
        if (this.options.totalSize != -1) {
            this.lastPage = 1
        } else {
            this.lastPage = 0
        }
        this.curPage = 0;
        this.canNext = false;
        this.canPrev = false;
        this.getState = 1;
        this.isEnd = true;
        this.loadCount = 0;
        this._generateMark()
    }, _loadMoreDataFunc: function (a) {
        if (this.curPage < 0) {
            this.curPage = 0
        }
        this.options.loadParam.offset = this.cacheData.length - ((this.options.initData) ? this.options.initData.length : 0);
        this.options.loadParam.limit = ((this.options.prefetch) ? this.options.prefetchMulti : 0) * this.options.pageSize + ((this.curPage + 1) * this.options.pageSize - this.cacheData.length);
        if (a == 0) {
            this.options.loadFunc(this.options.loadParam, this._mergeDataFunc.bind(this))
        } else {
            this.options.loadFunc(this.options.loadParam, this._mergeMoreDataFunc.bind(this))
        }
    }, _mergeDataFunc: function (a) {
        a = this.options.organizeFunc(a);
        if (a == null || a.length == 0) {
            this.canNext = false;
            this.getState = 0;
            if (this.isEnd == true) {
                this._generateMark();
                return false
            }
        } else {
            if (a.length < ((this.curPage + 1) * this.options.pageSize - this.cacheData.length)) {
                this.canNext = false;
                this.getState = 0
            } else {
                if (a.length < this.options.loadParam.limit) {
                    this.canNext = true;
                    this.getState = 0
                } else {
                    this.canNext = true;
                    this.getState = 1
                }
            }
        }
        this.curPage++;
        if (this.lastPage && this.curPage > this.lastPage) {
            this.lastPage = this.curPage
        }
        this.options.filterFunc(a);
        a.each(this._iterator.bind(this));
        this._generateMark();
        this._presentTemplate()
    }, _mergeMoreDataFunc: function (a) {
        a = this.options.organizeFunc(a);
        if (a == null || a.length <= this.curPage * this.options.pageSize - this.cacheData.length) {
            this.canNext = false;
            this.getState = 0
        } else {
            if (a.length < ((this.curPage + 1) * this.options.pageSize - this.cacheData.length)) {
                this.canNext = true;
                this.getState = 0
            } else {
                if (a.length < this.options.loadParam.limit) {
                    this.canNext = true;
                    this.getState = 0
                } else {
                    this.canNext = true;
                    this.getState = 1
                }
            }
        }
        this.options.filterFunc(a);
        a.each(this._iterator.bind(this));
        this._generateMark();
        this._presentTemplate()
    }, _iterator: function (a) {
        this.cacheData.push(a)
    }, nextPage: function () {
        if (!this.canNext) {
            return false
        }
        this.canNext = false;
        var a = true;
        if (this.options.onlyLoadOnce && this.loadCount >= 1) {
            a = false
        }
        if ((this.curPage + 1) * this.options.pageSize > this.cacheData.length && this.getState == 1 && a) {
            this.loadCount++;
            this._loadMoreDataFunc(0)
        } else {
            if (this.curPage * this.options.pageSize < this.cacheData.length) {
                this.canNext = true;
                if (this.getState == 0 && (this.curPage + 1) * this.options.pageSize >= this.cacheData.length) {
                    this.canNext = false
                }
                this.curPage++
            }
            this._generateMark();
            this._presentTemplate()
        }
    }, prevPage: function () {
        if (!this.canPrev) {
            return false
        }
        this.canPrev = false;
        this.curPage--;
        if (this.curPage <= 1) {
            this.curPage = 1
        }
        this.canNext = true;
        this._generateMark();
        this._presentTemplate()
    }, refreshCurPage: function (a) {
        this._setSlideMode(false);
        if (a == true) {
            this.is_first_load = null
        }
        this._generateMark();
        this._presentTemplate()
    }, selectPage: function (a) {
        if (a < 1) {
            a = 1
        }
        if (a > this.curPage) {
            this._setSlideMode(false);
            this.nextPage();
            return
        }
        if (a < this.curPage) {
            if (a > 1) {
                this.canPrev = true
            } else {
                this.canPrev = false
            }
            this.canNext = true;
            this.curPage = a
        }
        this.refreshCurPage()
    }, _generateMark: function () {
        this._generateMarkData();
        this._generateMarkHTML();
        this._registerCachePageEvent()
    }, _presentTemplate: function () {
        if (this.slideMode == true) {
            this.options.presentSlideFunc(this.cacheData[this.curDataIndex], this.options.userPresentFuncParam)
        } else {
            this.options.presentFunc(this._prepareForPresent(), this.options.userPresentFuncParam)
        }
    }, _prepareForPresent: function () {
        var a = [];
        if (this.cacheData.length <= (this.curPage - 1) * this.options.pageSize) {
            if (this.curPage > 1) {
                this.curPage--;
                this._generateMark()
            }
        }
        var b = 0;
        for (b = (this.curPage - 1) * this.options.pageSize; b < this.curPage * this.options.pageSize && b < this.cacheData.length; b++) {
            a.push(this.cacheData[b])
        }
        if (b == this.cacheData.length) {
            this.isEnd = true
        } else {
            this.isEnd = false
        }
        return a
    }, _clickPrev: function (a) {
        if (a != null && this.beforeIDArray != null) {
            for (var b = 0; b < this.beforeIDArray.length; b++) {
                if (this.beforeIDArray[b] == a) {
                    this.options.beforePrev()
                }
            }
        }
        this.op = "prev";
        this.prevPage();
        return false
    }, _clickNext: function (a) {
        if (a != null && this.beforeIDArray != null) {
            for (var b = 0; b < this.beforeIDArray.length; b++) {
                if (this.beforeIDArray[b] == a) {
                    this.options.beforeNext()
                }
            }
        }
        this.op = "next";
        this.nextPage();
        return false
    }, removeOne: function (b, a) {
        var c = this.cacheData.select(this._rejectIter.bind(this, b));
        this._removeItem(b);
        this._afterRemove(1, a);
        return c
    }, removeItems: function (a, b) {
        a.each(this._removeItem.bind(this));
        this._afterRemove(a.length, b)
    }, _removeItem: function (a) {
        this.cacheData = this.cacheData.reject(this._rejectIter.bind(this, a))
    }, _afterRemove: function (b, a) {
        if (this.curPage > 1 && this.cacheData.length % this.options.pageSize == 0) {
            this.curPage--
        }
        if (this.options.totalSize > (-1) * b) {
            this.options.totalSize -= b;
            this.lastPage = this._getTotalSize()
        }
        if (this.canNext) {
            if (this.isEnd && this.getState == 1) {
                this._loadMoreDataFunc(1)
            } else {
                if (a != true) {
                    this._generateMark();
                    this._presentTemplate()
                }
            }
        } else {
            if (a != true) {
                this._generateMark();
                this._presentTemplate()
            }
        }
    }, _rejectIter: function (a, b) {
        return this.options.delIterator(a, b)
    }, getSelectSlide: function () {
        return this.cacheData[this.curDataIndex]
    }, changeToSlideMode: function (a) {
        var b = this.cacheData.detect(this._detectItr.bind(this, a));
        if (b) {
            this._setSlideMode(true);
            this._generateMark();
            this._presentTemplate()
        }
    }, _detectItr: function (b, d, a) {
        var c = this.options.detSlideIterator(b, d);
        if (c) {
            this.curDataIndex = a;
            return true
        }
        return false
    }, _slideNext: function () {
        if (!this.canNextSlide) {
            return false
        }
        this.canNextSlide = false;
        if (this.options.totalSize > -1) {
            if (this.curDataIndex >= (this.options.totalSize - 1)) {
                this._generateMark();
                return false
            }
        }
        this.curDataIndex++;
        this._setSlideMode(true);
        if (this.curDataIndex % this.options.pageSize == 0) {
            this.nextPage()
        } else {
            this._generateMark();
            this._presentTemplate()
        }
        return false
    }, _slidePrev: function () {
        if (!this.canPrevSlide) {
            return false
        }
        this.canPrevSlide = false;
        if (this.curDataIndex <= 0) {
            this._generateMark();
            return false
        }
        this.curDataIndex--;
        this._setSlideMode(true);
        if (this.curDataIndex % this.options.pageSize == (this.options.pageSize - 1)) {
            this.prevPage()
        } else {
            this._generateMark();
            this._presentTemplate()
        }
        return false
    }, _setSlideMode: function (a) {
        if (a == true) {
            this.slideMode = true
        } else {
            this.slideMode = false
        }
    }, addOne: function (d, b, c) {
        if (b) {
            var a = [];
            a.push(d);
            this.options.filterFunc(a);
            this.cacheData.unshift(d)
        } else {
            var a = [];
            a.push(d);
            this.options.filterFunc(a);
            this.cacheData.push(d)
        }
        if (this.cacheData.length > this.curPage * this.options.pageSize) {
            if (!this.canNext) {
                this.canNext = true
            }
        }
        if (this.options.totalSize > -1) {
            this.options.totalSize++;
            this.lastPage = this._getTotalSize()
        }
        if (this.options.RefreshAfterAdd) {
            if (c != true) {
                this._generateMark();
                this._presentTemplate()
            }
        }
    }, getAllCachedData: function () {
        return this.cacheData
    }, updateOne: function (b, a) {
        this.cacheData.each(this._updateIter.bind(this, b));
        if (a != true) {
            this._generateMark();
            if (this.options.needRefreshAfterUpdate) {
                this._presentTemplate()
            }
        }
    }, _updateIter: function (b, c, a) {
        if (this.options.updateIterator(b, c)) {
            Object.extend(this.cacheData[a], b)
        }
    }, getCurPage: function () {
        return this.curPage
    }, getPageSize: function () {
        return this.options.pageSize
    }, getTotalSize: function () {
        return this.options.totalSize
    }, _getTotalSize: function () {
        var b = (this.options.totalSize % this.options.pageSize == 0) ? 0 : 1;
        var a = parseInt(this.options.totalSize / this.options.pageSize + b + "");
        if (a < 1) {
            a = 1
        }
        return a
    }, _initial: function () {
        if (this.options.totalSize > -1) {
            this.lastPage = this._getTotalSize()
        }
        this.curPage = 0;
        this.canNext = true;
        this.canPrev = false;
        this.getState = 1;
        this.isEnd = false;
        this.loadCount = 0;
        if (this.options.markID) {
            this.markIDArray = this.options.markID.split(":")
        }
        if (this.options.beforeID) {
            this.beforeIDArray = this.options.beforeID.split(":")
        }
        if (this.options.initData) {
            this.options.initData.each(this._iterator.bind(this))
        }
    }, initCacheData: function (a, b) {
        a = this.options.organizeFunc(a);
        if (a == null || a.length == 0) {
            this.canNext = false;
            this.getState = 0
        } else {
            if (a.length < ((this.curPage + 1) * this.options.pageSize - this.cacheData.length)) {
                this.canNext = false;
                this.getState = 0
            } else {
                this.canNext = true;
                if (b) {
                    this.getState = 0
                } else {
                    this.getState = 1
                }
            }
        }
        this.curPage++;
        if (this.lastPage && this.curPage > this.lastPage) {
            this.lastPage = this.curPage
        }
        this.options.filterFunc(a);
        a.each(this._iterator.bind(this));
        this._generateMark();
        this._presentTemplate()
    }, _generateMarkData: function () {
        if (this.curPage > 1) {
            this.canPrev = true
        } else {
            this.canPrev = false
        }
        if (this.curPage < 1) {
            this.curPage = 1
        }
        if (this.lastPage && this.curPage > this.lastPage) {
            this.curPage = this.lastPage
        }
        if (this.lastPage) {
            if (!this.canNext) {
                this.lastPage = this.curPage
            }
            if (this.curPage == this.lastPage) {
                this.canNext = false
            }
        }
        if (this.slideMode == true) {
            if (this.canNext) {
                this.canNextSlide = true
            } else {
                if (this.cacheData[this.curDataIndex + 1] == null) {
                    this.canNextSlide = false
                } else {
                    this.canNextSlide = true
                }
            }
            if (this.canPrev) {
                this.canPrevSlide = true
            } else {
                if (this.cacheData[this.curDataIndex - 1] == null) {
                    this.canPrevSlide = false
                } else {
                    this.canPrevSlide = true
                }
            }
        }
    }, _generateMarkHTML: function () {
        if (this.options.customPageIds) {
            if (this.slideMode == true) {
                if (this.canPrevSlide) {
                    $id(this.options.customPageIds[0]).style.visibility = "visible"
                } else {
                    $id(this.options.customPageIds[0]).style.visibility = "hidden"
                }
                if (this.canNextSlide) {
                    $id(this.options.customPageIds[1]).style.visibility = "visible"
                } else {
                    $id(this.options.customPageIds[1]).style.visibility = "hidden"
                }
            } else {
                if (this.canPrev) {
                    $id(this.options.customPageIds[0]).style.visibility = "visible"
                } else {
                    $id(this.options.customPageIds[0]).style.visibility = "hidden"
                }
                if (this.canNext) {
                    $id(this.options.customPageIds[1]).style.visibility = "visible"
                } else {
                    $id(this.options.customPageIds[1]).style.visibility = "hidden"
                }
            }
        }
        if (this.options.markID) {
            if (this.is_first_load == null) {
                this.markIDArray.each((function (b) {
                    return function (a) {
                        if ($id(a)) {
                            var c = '<span id="$$_prev_img_' + a + '" style="cursor:pointer">上页</span><span id="$$_num' + a + '">&nbsp;' + b.curPage;
                            if (b.lastPage) {
                                c += "/" + b.lastPage
                            }
                            c += '&nbsp;</span><span id="$$_next_img_' + a + '" style="cursor:pointer">下页</span>';
                            $id(a).innerHTML = c
                        }
                    }
                })(this));
                this.is_first_load = true
            } else {
                this.markIDArray.each((function (b) {
                    return function (a) {
                        if ($id(a)) {
                            var c = "&nbsp;" + b.curPage;
                            if (b.lastPage) {
                                c += "/" + b.lastPage
                            }
                            c += "&nbsp;";
                            $id("$$_num" + a).innerHTML = c
                        }
                    }
                })(this))
            }
            this._adjustStyle()
        }
    }, _adjustStyle: function () {
        this.markIDArray.each((function (b) {
            return function (a) {
                if ($id(a)) {
                    $id("$$_prev_img_" + a).style.cursor = (b.canPrev) ? "pointer" : "";
                    $id("$$_next_img_" + a).style.cursor = (b.canNext) ? "pointer" : ""
                }
            }
        })(this))
    }, _registerCachePageEvent: function () {
        if (this.slideMode == true) {
            if (this.options.customPageIds) {
                if (this.register_custom_event_is != "slideevent") {
                    $id(this.options.customPageIds[0]).onclick = this._slidePrev.bind(this);
                    $id(this.options.customPageIds[1]).onclick = this._slideNext.bind(this);
                    this.register_custom_event_is = "slideevent"
                }
            }
            if (this.options.markID) {
                if (this.register_mark_event_is != "slideevent") {
                    this.markIDArray.each((function (b) {
                        return function (a) {
                            if ($id(a)) {
                                $id("$$_prev_img_" + a).onclick = b._slidePrev.bind(b, a);
                                $id("$$_next_img_" + a).onclick = b._slideNext.bind(b, a);
                                this.register_mark_event_is = "slideevent"
                            }
                        }
                    })(this))
                }
            }
        } else {
            if (this.options.customPageIds) {
                if (this.register_custom_event_is != "notslideevent") {
                    $id(this.options.customPageIds[0]).onclick = this._clickPrev.bind(this);
                    $id(this.options.customPageIds[1]).onclick = this._clickNext.bind(this);
                    this.register_custom_event_is = "notslideevent"
                }
            }
            if (this.options.markID) {
                if (this.register_mark_event_is != "notslideevent") {
                    this.markIDArray.each((function (b) {
                        return function (a) {
                            if ($id(a)) {
                                $id("$$_prev_img_" + a).onclick = b._clickPrev.bind(b, a);
                                $id("$$_next_img_" + a).onclick = b._clickNext.bind(b, a);
                                this.register_mark_event_is = "notslideevent"
                            }
                        }
                    })(this))
                }
            }
        }
    }, resetCachePageEvent: function () {
        this.register_mark_event_is = null;
        this.register_custom_event_is = null
    }
};
if (typeof Array.prototype.splice === "undefined") {
    Array.prototype.splice = function (c, b) {
        if (arguments.length == 0) {
            return c
        }
        if (typeof c != "number") {
            c = 0
        }
        if (c < 0) {
            c = Math.max(0, this.length + c)
        }
        if (c > this.length) {
            if (arguments.length > 2) {
                c = this.length
            } else {
                return []
            }
        }
        if (arguments.length < 2) {
            b = this.length - c
        }
        b = (typeof b == "number") ? Math.max(0, b) : 0;
        removeArray = this.slice(c, c + b);
        endArray = this.slice(c + b);
        this.length = c;
        for (var a = 2; a < arguments.length; a++) {
            this[this.length] = arguments[a]
        }
        for (a = 0; a < endArray.length; a++) {
            this[this.length] = endArray[a]
        }
        return removeArray
    }
}
if (typeof Array.prototype.shift === "undefined") {
    Array.prototype.shift = function (c) {
        var b = this[0];
        for (var a = 1; a < this.length; ++a) {
            this[a - 1] = this[a]
        }
        this.length--;
        return b
    }
}
if (typeof Array.prototype.unshift === "undefined") {
    Array.prototype.unshift = function () {
        var b = unshift.arguments.length;
        for (var a = this.length - 1; a >= 0; --a) {
            this[a + b] = this[a]
        }
        for (a = 0; a < b; ++a) {
            this[a] = unshift.arguments[a]
        }
    }
}
if (typeof Array.prototype.push === "undefined") {
    Array.prototype.push = function () {
        var b = this.length;
        for (var a = 0; a < push.arguments.length; ++a) {
            this[b] = push.arguments[a];
            b++
        }
    }
}
if (typeof Array.prototype.pop === "undefined") {
    Array.prototype.pop = function () {
        var a = this[this.length - 1];
        this.length--;
        return a
    }
}
if (NetEase == undefined) {
    var NetEase = {}
}
NetEase.PageNumber = Class.create();
NetEase.PageNumber.prototype = {
    initialize: function () {
        this.options = Object.extend({
            loadFunc: Prototype.emptyFunction,
            loadParam: {},
            presentFunc: Prototype.emptyFunction,
            filterFunc: Prototype.emptyFunction,
            userPresentFuncParam: {},
            pageSize: 0,
            prefetchMulti: 1,
            markID: "",
            totalSize: -1,
            beforeID: "",
            beforePrev: Prototype.emptyFunction,
            beforeNext: Prototype.emptyFunction,
            beforeChange: Prototype.emptyFunction,
            delIterator: Prototype.emptyFunction,
            updateIterator: Prototype.emptyFunction,
            needRefreshAfterUpdate: true,
            RefreshAfterAdd: true,
            RefreshAfterDel: true,
            useCache: true,
            isDiv: false
        }, arguments[0] || {});
        this.totalPages = 0;
        this.curPage;
        this.cacheData = [];
        this.markIDArray = [];
        this.beforeIDArray = [];
        this._iTextSpanWidth;
        this._init()
    }, _init: function () {
        if (this.options.totalSize > -1) {
            this.totalPages = this._getTotalPages()
        }
        this.curPage = 1;
        if (this.options.markID) {
            this.markIDArray = this.options.markID.split(":")
        }
        if (this.options.beforeID) {
            this.beforeIDArray = this.options.beforeID.split(":")
        }
    }, reset: function () {
        this.cacheData = [];
        this.curPage = 1;
        this.options.totalSize = 0;
        this.totalPages = 1;
        this._generateMarks()
    }, initCacheData: function (b) {
        this.options.filterFunc(b);
        if (this.options.useCache) {
            for (var a = 0; a < b.length; a++) {
                this.cacheData[a] = b[a]
            }
        }
    }, getAllCachedData: function () {
        var a = [];
        this.cacheData.each(function (b) {
            if (b != null) {
                a.push(b)
            }
        });
        return a
    }, getTotalPages: function () {
        return this.totalPages
    }, getCurPageNum: function () {
        return this.curPage
    }, getCurOffset: function () {
        return this.options.pageSize * (this.curPage - 1)
    }, getTotalSize: function () {
        return this.options.totalSize
    }, refreshCurPage: function () {
        this.show()
    }, nextPage: function () {
        this.curPage++;
        if (this.curPage > this.totalPages) {
            this.curPage = this.totalPages
        }
        this.show();
        return false
    }, prevPage: function () {
        this.curPage--;
        if (this.curPage < 1) {
            this.curPage = 1
        }
        this.show();
        return false
    }, setPageSize: function (a) {
        this.options.pageSize = a
    }, show: function () {
        var a = this.options.pageSize * (this.curPage - 1);
        var c = this.options.pageSize;
        if (this.options.useCache) {
            var b = this._hasFullData(a, c);
            if (b != null) {
                this._display(b)
            } else {
                this.options.loadParam.offset = a;
                this.options.loadParam.limit = c * (this.options.prefetchMulti ? this.options.prefetchMulti : 1);
                this.options.loadFunc(this.options.loadParam, this._display.bind(this))
            }
        } else {
            this.options.loadParam.offset = a;
            this.options.loadParam.limit = c;
            this.options.loadFunc(this.options.loadParam, this._display.bind(this))
        }
    }, _display: function (c) {
        if (c == null || c.length == 0) {
            if (this.curPage > 1) {
                this.curPage--;
                this.options.totalSize = this.curPage * this.options.pageSize;
                this.totalPages = this._getTotalPages();
                this.cacheData = [];
                this.show();
                return false
            }
        }
        this.options.filterFunc(c);
        if (this.options.useCache) {
            var b = this.options.pageSize * (this.curPage - 1);
            for (var a = 0; a < c.length; a++) {
                this.cacheData[b + a] = c[a]
            }
        }
        this.options.presentFunc(c.slice(0, this.options.pageSize), this.options.userPresentFuncParam);
        this._generateMarks()
    }, _hasFullData: function (e, a) {
        var d = [];
        var f = e + a > this.options.totalSize ? this.options.totalSize - e : a;
        for (var b = 0; b < f; b++) {
            var c = this.cacheData[e + b];
            if (c == undefined || c == null) {
                return null
            }
            d[b] = c
        }
        return d
    }, _generateMarks: function () {
        var b = this.markIDArray.length;
        for (var c = 0; c < b; c++) {
            var a = this.markIDArray[c];
            var d = $id(a);
            if (d) {
                d.innerHTML = this._generateHTML(a);
                this._setUIEvent(a)
            }
        }
        return false
    }, _getTotalPages: function () {
        if (this.options.pageSize == 0) {
            return 1
        }
        var a = (this.options.totalSize % this.options.pageSize == 0) ? 0 : 1;
        var b = parseInt(this.options.totalSize / this.options.pageSize + a + "");
        if (b < 1) {
            b = 1
        }
        return b
    }, goToPage: function (a) {
        if (a > this.totalPages || a < 1) {
            return
        }
        this.curPage = a;
        this.show()
    }, addOne: function (c, a, b) {
        if (this.options.totalSize > -1) {
            this.options.totalSize++;
            this.totalPages = this._getTotalPages()
        }
        if (this.options.useCache) {
            if (a) {
                this.cacheData.unshift(c)
            } else {
                this.cacheDate[this.options.totalSize - 1] = c
            }
        }
        if (this.options.RefreshAfterAdd && b != true) {
            this.show()
        }
    }, removeOne: function (b, a) {
        var c = null;
        if (this.options.useCache) {
            c = this._removeItem(b)
        }
        this._afterRemove(1, a);
        return c
    }, removeItems: function (a, b) {
        if (this.options.useCache) {
            a.each(this._removeItem.bind(this))
        }
        this._afterRemove(a.length, b)
    }, _removeItem: function (c) {
        var a = -1;
        for (var b = 0; b < this.options.totalSize; b++) {
            if (this.cacheData[b] == undefined || this.cacheData[b] == null) {
                continue
            }
            if (this.options.delIterator(c, this.cacheData[b])) {
                a = b;
                break
            }
        }
        if (a == -1) {
            return null
        }
        var d = this.cacheData[a];
        if (a + 1 < this.options.totalSize) {
            this.cacheData[a] = this.cacheData[a + 1];
            this.cacheData[a + 1] = null
        } else {
            this.cacheData[a] = null
        }
        for (++a; a < this.options.totalSize - 1; a++) {
            if (this.cacheData[a + 1] != undefined && this.cacheData[a + 1] != null) {
                this.cacheData[a] = this.cacheData[a + 1];
                this.cacheData[a + 1] = null
            }
        }
        return d
    }, _afterRemove: function (a, b) {
        if (this.options.totalSize > -1) {
            this.options.totalSize -= a;
            this.totalPages = this._getTotalPages()
        }
        if (this.curPage == this.totalPages + 1 && this.options.totalSize % this.options.pageSize == 0) {
            this.curPage--
        }
        if (this.options.RefreshAfterDel && b != true) {
            this.show()
        }
    }, updateOne: function (e, d) {
        if (this.options.useCache) {
            var c = this.options.pageSize * (this.curPage - 1);
            var a = -1;
            for (var b = 0; b < this.options.pageSize; b++) {
                if (this.options.updateIterator(e, this.cacheData[b + c])) {
                    a = b + c;
                    break
                }
            }
            if (a == -1) {
                this.cacheData = [];
                return
            }
            Object.extend(this.cacheData[a], e)
        }
        if (d != true && this.options.needRefreshAfterUpdate) {
            this.show()
        }
    }, _generateHTML: function (c) {
        var b = [];
        if (this.totalPages == this.curPage) {
            b.push('<div class="updownPageNolink c09"><span>下页</span></div>')
        } else {
            if (this.options.isDiv == false) {
                b.push('<div style="float:right;" class="c06"><a href="#" class="updownPage" id="$$_next_' + c + '">下页</a></div>')
            } else {
                b.push('<div style="float:right;" class="divTxtColr"><a href="#" class="updownPage" id="$$_next_' + c + '">下页</a></div>')
            }
        }
        b.push('<div class="pageSelect floatRight">');
        b.push('<div id="$$_textBorder_' + c + '" class="textBorder">');
        if (this.options.isDiv == false) {
            b.push('<span id="$$_pageText_' + c + '" class="pageText c06">' + this.curPage + "/" + this.totalPages + "</span>")
        } else {
            b.push('<span id="$$_pageText_' + c + '" class="pageText divTxtColr">' + this.curPage + "/" + this.totalPages + "</span>")
        }
        b.push("</div>");
        b.push('<div id="$$_opt_' + c + '" class="opt" style="display:none;">');
        for (var a = 1; a <= this.totalPages; a++) {
            b.push('<a href="#">');
            b.push(a);
            b.push("</a>")
        }
        b.push("</div></div>");
        if (this.curPage == 1) {
            b.push('<div class="updownPageNolink c09"><span>上页</span></div>')
        } else {
            if (this.options.isDiv == false) {
                b.push('<div style="float:right;" class="c06"><a href="#" class="updownPage" id="$$_prev_' + c + '">上页</a><div>')
            } else {
                b.push('<div style="float:right;" class="divTxtColr"><a href="#" class="updownPage" id="$$_prev_' + c + '">上页</a><div>')
            }
        }
        return b.join("")
    }, _setUIEvent: function (c) {
        if (this.curPage != 1) {
            var b = $id("$$_prev_" + c);
            b.onclick = this._clickPrev.bind(this, c);
            b.onmouseover = this.updownPageMouseOvr.bind(this, b);
            b.onmouseout = this.updownPageMouseOut.bind(this, b)
        }
        if (this.totalPages != this.curPage) {
            var e = $id("$$_next_" + c);
            e.onclick = this._clickNext.bind(this, c);
            e.onmouseover = this.updownPageMouseOvr.bind(this, e);
            e.onmouseout = this.updownPageMouseOut.bind(this, e)
        }
        var a = $id("$$_textBorder_" + c);
        var f = $id("$$_pageText_" + c);
        var d = $id("$$_opt_" + c);
        var j = d.getElementsByTagName("a");
        this._iTextSpanWidth = f.offsetWidth;
        a.style.width = this._iTextSpanWidth + 18 + "px";
        d.style.width = this._iTextSpanWidth + 18 + "px";
        d.onmouseover = function () {
            var l = j[this.curPage - 1];
            l.className = ""
        }.bind(this);
        if (isIE) {
            a.attachEvent("onclick", function () {
                if (d.style.display == "none") {
                    this.closeAllPopup();
                    var r = document.body.childNodes;
                    var t = r.length;
                    var l = null;
                    for (var o = t - 1; o >= 0; o--) {
                        if ("$$_opt_" + c == r[o].id) {
                            l = r[o];
                            break
                        }
                    }
                    if (l != null) {
                        document.body.removeChild(l)
                    }
                    document.body.appendChild(d);
                    d.style.display = "block";
                    d.scrollTop = (this.curPage - 1) * 14;
                    var q = j[this.curPage - 1];
                    q.className = "ttt";
                    var n = Position.cumulativeOffset(a);
                    var s = n[1] - document.documentElement.scrollTop;
                    var u = document.documentElement.clientHeight - s;
                    if (d.offsetHeight > u) {
                        d.style.left = n[0] + "px";
                        d.style.top = n[1] - d.offsetHeight + "px"
                    } else {
                        d.style.left = n[0] + "px";
                        d.style.top = n[1] + 18 + "px"
                    }
                    window.event.cancelBubble = true
                } else {
                    d.style.display = "none"
                }
                return false
            }.bind(this));
            a.attachEvent("onmouseover", this.textBorderMouseOvr.bind(this, a));
            a.attachEvent("onmouseout", this.textBorderMouseOut.bind(this, a, c));
            for (var g = 0, h; h = j[g]; g++) {
                h.onclick = this.clickPageNumber.bind(this, c, h.innerHTML, d, a)
            }
            window.document.attachEvent("onclick", function () {
                d.style.display = "none";
                a.className = "textBorder";
                a.style.width = this._iTextSpanWidth + 18 + "px"
            }.bind(this))
        } else {
            a.addEventListener("click", function (u) {
                if (d.style.display == "none") {
                    this.closeAllPopup();
                    var v = document.body.childNodes;
                    var l = v.length;
                    var q = null;
                    for (var r = l - 1; r >= 0; r--) {
                        if ("$$_opt_" + c == v[r].id) {
                            q = v[r];
                            break
                        }
                    }
                    if (q != null) {
                        document.body.removeChild(q)
                    }
                    document.body.appendChild(d);
                    d.style.display = "block";
                    d.scrollTop = (this.curPage - 1) * 14;
                    var n = j[this.curPage - 1];
                    n.className = "ttt";
                    var s = Position.cumulativeOffset(a);
                    var o = s[1] - document.documentElement.scrollTop;
                    var t = document.documentElement.clientHeight - o;
                    if (d.offsetHeight > t) {
                        d.style.left = s[0] + "px";
                        d.style.top = s[1] - d.offsetHeight + "px"
                    } else {
                        d.style.left = s[0] + "px";
                        d.style.top = s[1] + 18 + "px"
                    }
                    u.stopPropagation()
                } else {
                    d.style.display = "none"
                }
                return false
            }.bind(this), false);
            a.addEventListener("mouseover", this.textBorderMouseOvr.bind(this, a), false);
            a.addEventListener("mouseout", this.textBorderMouseOut.bind(this, a, c), false);
            for (var g = 0, h; h = j[g]; g++) {
                h.onclick = this.clickPageNumber.bind(this, c, h.innerHTML, d, a)
            }
            window.document.addEventListener("click", function () {
                d.style.display = "none";
                a.className = "textBorder";
                a.style.width = this._iTextSpanWidth + 18 + "px"
            }.bind(this), false)
        }
        return false
    }, _clickPrev: function (b) {
        window.location.hash = "pn" + (this.curPage - 1);
        if (b != null && this.beforeIDArray != null) {
            for (var a = 0; a < this.beforeIDArray.length; a++) {
                if (this.beforeIDArray[a] == b) {
                    this.options.beforePrev()
                }
            }
        }
        this.closeAllPopup();
        this.prevPage();
        return false
    }, _clickNext: function (b) {
        window.location.hash = "pn" + (this.curPage + 1);
        if (b != null && this.beforeIDArray != null) {
            for (var a = 0; a < this.beforeIDArray.length; a++) {
                if (this.beforeIDArray[a] == b) {
                    this.options.beforeNext()
                }
            }
        }
        this.closeAllPopup();
        this.nextPage();
        return false
    }, closeAllPopup: function () {
        var b = this.markIDArray.length;
        for (var c = 0; c < b; c++) {
            var a = this.markIDArray[c];
            var d = $id("$$_opt_" + a);
            d.style.display = "none"
        }
    }, clickPageNumber: function (d, c, e, a) {
        window.location.hash = "pn" + c;
        e.style.display = "none";
        a.className = "textBorder";
        if (c == this.curPage) {
            return false
        }
        if (d != null && this.beforeIDArray != null) {
            for (var b = 0; b < this.beforeIDArray.length; b++) {
                if (this.beforeIDArray[b] == d) {
                    this.options.beforeChange()
                }
            }
        }
        this.goToPage(c);
        return false
    }, textBorderMouseOvr: function (a) {
        a.className = "textBorderMouseOvr";
        a.style.width = this._iTextSpanWidth + 16 + "px"
    }, textBorderMouseOut: function (c, b) {
        var a = $id("$$_opt_" + b);
        if (a.style.display == "none") {
            c.className = "textBorder";
            c.style.width = this._iTextSpanWidth + 18 + "px"
        }
    }, updownPageMouseOvr: function (a) {
        a.className = "updownPageMouseOvr"
    }, updownPageMouseOut: function (a) {
        a.className = "updownPage"
    }, pirntData: function () {
        var b = [];
        b += this.options.totalSize + "-------------\n";
        for (var a = 0; a < this.options.totalSize; a++) {
            if ((a + 1) % 9 == 0 && a != 0) {
                b += "\n"
            }
            if (undefined == this.cacheData[a] || null == this.cacheData[a]) {
                b += "[" + a + "]- # "
            } else {
                b += "<" + a + ">- " + this.cacheData[a].title + " "
            }
        }
        alert(b)
    }
};
var $_dwrInfo = null;

function dwrInfo(c, b) {
    try {
        if (!$_dwrInfo) {
            $_dwrInfo = new NetEase.DwrLogger({relativeId: "page"})
        }
        $_dwrInfo.appendMsg(c, b)
    } catch (a) {
        alert(c)
    }
}

function autoSize() {
    try {
        if (top != this) {
            top.document.getElementById("lpStarFace").style.height = document.documentElement.scrollHeight + 100 + "px"
        }
    } catch (c) {
        var b = 1
    }
}

function isValidInput(a, d, c, b) {
    if (c > 0 && a == "") {
        dwrInfo(d + "必填", "error");
        return false
    }
    if (a.length > b) {
        dwrInfo(d + "不能超过" + b + "个字", "error");
        return false
    }
    if (a.length < c) {
        dwrInfo(d + "必须超过" + c + "个字", "error");
        return false
    }
    return true
}

function isValidUrl(a, d, c, b) {
    if (isValidInput(a, d, c, b)) {
        if (a.indexOf("http://") < 0) {
            dwrInfo("照片地址不正确！", "error");
            return false
        }
        return true
    } else {
        return false
    }
}

function getTrimValue(a) {
    if ($id(a)) {
        return Trim($F(a))
    } else {
        return ""
    }
}

var $_dwrProcessing;
var jsWindowManager;
var g_quickLoginCon;

function showLoginDlg(b, a) {
    showLoginDlg_New(b, a)
}

function setCookie(b, d, a, f, c, e) {
    document.cookie = b + "=" + escape(d) + ((a) ? "; expires=" + a.toGMTString() : "") + ((f) ? "; path=" + f : "") + ((c) ? "; domain=" + c : "") + ((e) ? "; secure" : "")
}

function getCookie(c) {
    var b = document.cookie;
    var e = c + "=";
    var d = b.indexOf("; " + e);
    if (d == -1) {
        d = b.indexOf(e);
        if (d != 0) {
            return null
        }
    } else {
        d += 2
    }
    var a = document.cookie.indexOf(";", d);
    if (a == -1) {
        a = b.length
    }
    return unescape(b.substring(d + e.length, a))
}

function copyToClipboard(b) {
    if (window.clipboardData) {
        window.clipboardData.clearData();
        window.clipboardData.setData("Text", b)
    } else {
        if (navigator.userAgent.indexOf("Opera") != -1) {
            window.location = b
        } else {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
                } catch (g) {
                    alert('您的firefox安全限制限制您进行剪贴板操作，请打开"about:config"将"signed.applets.codebase_principal_support"设置为"true"之后重试。');
                    return false
                }
                var d = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
                if (!d) {
                    return
                }
                var c = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
                if (!c) {
                    return
                }
                c.addDataFlavor("text/unicode");
                var h = new Object();
                var a = new Object();
                var h = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
                var j = b;
                h.data = j;
                c.setTransferData("text/unicode", h, j.length * 2);
                var f = Components.interfaces.nsIClipboard;
                if (!d) {
                    return false
                }
                d.setData(c, null, f.kGlobalClipboard)
            }
        }
    }
    return true
};