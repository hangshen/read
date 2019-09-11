var $id = function (a) {
    return "string" == typeof a ? document.getElementById(a) : a
};
var $id$cls = function (e, a) {
    var b = [];
    var c = $id(e).getElementsByTagName("*");
    for (var d = 0; d < c.length; d++) {
        if ((" " + c[d].className + " ").indexOf(" " + a + " ") != -1) {
            b.push(c[d])
        }
    }
    return b
};
var Class = {
    create: function () {
        return function () {
            this.initialize.apply(this, arguments)
        }
    }
};
var trim = function (a) {
    return a.replace(/^\s+|\s+$/g, "")
};
var target = function (a) {
    a = window.event || a;
    return a.srcElement || a.target
};
var evton = function (c, a, b) {
    if (document.all) {
        c.attachEvent("on" + a, b)
    } else {
        c.addEventListener(a, b, false)
    }
};
var evtdel = function (c, a, b) {
    if (document.all) {
        c.detachEvent("on" + a, b)
    } else {
        c.removeEventListener(a, b, false)
    }
};
Object.extend = function (a, c) {
    for (var b in c) {
        a[b] = c[b]
    }
    return a
};

function stopDefault(a) {
    if (a && a.preventDefault) {
        a.preventDefault()
    } else {
        window.event.returnValue = false
    }
    return false
}

function addClass(a, b) {
    if ((" " + a.className + " ").indexOf(" " + b + " ") == -1) {
        a.className = a.className + (" " + b)
    }
}

function delClass(a, b) {
    if ((" " + a.className + " ").indexOf(" " + b + " ") != -1) {
        a.className = a.className.replace(new RegExp("(?:^|\\s)" + b + "(?=\\s|$)", "g"), " ")
    }
}

var TransformView = Class.create();
TransformView.prototype = {
    initialize: function (e, f, d, b) {
        if (f <= 0 || d <= 0) {
            return
        }
        var a = $id(e), c = this;
        this.Index = 0;
        this._timer = null;
        this._slider = a;
        this._parameter = f;
        this._count = d || 0;
        this._target = 0;
        this.SetOptions(b);
        this.Itms = this.oOptions.Itms;
        this.Up = !!this.oOptions.Up;
        this.Step = Math.abs(this.oOptions.Step);
        this.Time = Math.abs(this.oOptions.Time);
        this.Auto = !!this.oOptions.Auto;
        this.Pause = Math.abs(this.oOptions.Pause);
        this.onStart = this.oOptions.onStart;
        this.onFinish = this.oOptions.onFinish;
        a.style.position = "absolute";
        a.style.top = a.style.left = 0
    }, SetOptions: function (a) {
        this.oOptions = {
            Up: true, Step: 6, Time: 35, Auto: true, Pause: 5000, onStart: function () {
            }, onFinish: function () {
            }
        };
        Object.extend(this.oOptions, a || {})
    }, Start: function () {
        if (this.Index < 0) {
            this.Index = this._count - 1
        } else {
            if (this.Index >= this._count) {
                this.Index = 0
            }
        }
        this._target = -1 * this._parameter * this.Index;
        this.onStart();
        if (this.Show) {
            this.fnShow()
        } else {
            this.Move()
        }
    }, Move: function () {
        clearTimeout(this._timer);
        var b = this, c = this.Up ? "top" : "left", a = parseInt(this._slider.style[c]) || 0,
            d = this.GetStep(this._target, a);
        if (d != 0) {
            this._slider.style[c] = (a + d) + "px";
            this._timer = setTimeout(function () {
                b.Move()
            }, this.Time)
        } else {
            this._slider.style[c] = this._target + "px";
            this.onFinish();
            if (this.Auto) {
                var e = this.Pause;
                if (this.One) {
                    if (this._target == 0 || this._target == (-(this._count - 1) * this._parameter)) {
                        e = (this.One - 1) * e
                    }
                }
                this._timer = setTimeout(function () {
                    b.Index++;
                    b.Start()
                }, e)
            }
        }
    }, fnShow: function () {
        clearTimeout(this._timer);
        var a = this;
        if (this.GetCrt() != a.Index) {
            this.Itms[this.GetCrt()].style.zIndex = this.Itms.length - 1;
            this.Itms[a.Index].style.zIndex = this.Itms.length - 2;
            if (this.isFilter) {
                this.Itms[a.Index].filters[0].Opacity = 100;
                this.Itms[this.GetCrt()].filters[0].Opacity = this.Itms[this.GetCrt()].filters[0].Opacity - 20;
                if (this.Itms[this.GetCrt()].filters[0].Opacity <= 0) {
                    this.Itms[this.GetCrt()].filters[0].Opacity = 0;
                    this.Itms[this.GetCrt()].style.zIndex = this.Itms.length - 2;
                    this.Itms[a.Index].style.zIndex = this.Itms.length - 1
                }
            } else {
                this.Itms[a.Index].style.opacity = 1;
                this.Itms[this.GetCrt()].style.opacity = this.Itms[this.GetCrt()].style.opacity - 0.25;
                if (this.Itms[this.GetCrt()].style.opacity <= 0) {
                    this.Itms[this.GetCrt()].style.opacity = 0;
                    this.Itms[this.GetCrt()].style.zIndex = this.Itms.length - 2;
                    this.Itms[a.Index].style.zIndex = this.Itms.length - 1
                }
            }
            this._timer = setTimeout(function () {
                a.fnShow()
            }, this.Time)
        } else {
            if (this.isFilter) {
                this.Itms[a.Index].filters[0].Opacity = 100
            } else {
                this.Itms[a.Index].style.opacity = 1
            }
            this.Itms[a.Index].style.zIndex = this.Itms.length - 1;
            this.onFinish();
            if (this.Auto) {
                this._timer = setTimeout(function () {
                    a.Index++;
                    a.Start()
                }, this.Pause)
            }
        }
    }, GetStep: function (c, a) {
        var b = (c - a) / this.Step;
        if (b == 0) {
            return 0
        }
        if (Math.abs(b) < 1) {
            return (b > 0 ? 1 : -1)
        }
        return b
    }, GetCrt: function () {
        var a = 0;
        for (var b = 0; b < this.Itms.length; b++) {
            if (this.Itms[b].style.zIndex == this.Itms.length - 1) {
                a = b
            }
        }
        return a
    }, Stop: function (b, a) {
        clearTimeout(this._timer);
        this._slider.style[this.Up ? "top" : "left"] = this._target + "px"
    }
};

function Each(d, b) {
    for (var c = 0, a = d.length; c < a; c++) {
        b(d[c], c)
    }
}

var slidePlayer = function (j) {
    var k = j.controls, h = j.sliders, l = h[0].clientWidth, g = h[0].clientHeight, e = j.sliders.length,
        a = j.crt || "j-crt", b = j.up || false, i = j.auto == false ? false : true, f = j.show || false,
        d = j.pause || 5000;
    _one = j.one || 0;
    if (e < 2) {
        return
    }
    if (b) {
        j.wrap.style.height = g * e + "px"
    } else {
        if (!f) {
            j.wrap.style.width = l * e + "px"
        }
    }
    var c = new TransformView(j.wrap, b ? g : l, _one ? e - _one + 1 : e, {
        onStart: k ? function () {
            Each(k, function (n, m) {
                n.className = c.Index == m ? a : ""
            })
        } : function () {
        }, Up: b, Pause: d, Itms: h
    });
    c.isFilter = h[0].filters ? true : false;
    c.Show = f;
    c.Auto = i;
    c.One = _one;
    c.Start();
    if (k) {
        Each(k, function (n, m) {
            n.onmouseover = function () {
                n.className = a;
                c.Auto = false;
                c.Index = m;
                c.Start()
            };
            n.onmouseout = function () {
                n.className = "";
                c.Auto = i;
                c.Start()
            }
        })
    }
    if (j.prv) {
        j.prv.onclick = function () {
            c.Index--;
            c.Start()
        }
    }
    if (j.nxt) {
        j.nxt.onclick = function () {
            c.Index++;
            c.Start()
        }
    }
};

function layerOpen(k, p, h) {
    var g = 20;
    var a = $id(k);
    a.style.display = "";
    a.style.overflow = "hidden";
    var c = document.documentElement.clientHeight;
    if (typeof pageYOffset != "undefined") {
        var l = pageYOffset
    } else {
        var e = document.body;
        var b = document.documentElement;
        b = (b.clientHeight) ? b : e;
        var l = b.scrollTop
    }
    var n = a.clientWidth;
    var i = a.clientHeight;
    var f = i % g;
    var d = i - f;
    var j = d / g;
    var m = (100 - (100 % j)) / j;
    if (c > i) {
        a.style.top = l + ((c - i) / 2) + "px"
    } else {
        a.style.top = l + ((i - c) / 2) + "px"
    }
    a.style.left = "50%";
    a.style.marginLeft = -(n / 2) + "px";
    a.style.height = "0px";
    a.style.opacity = 0;
    a.style.filter = "alpha(opacity=0)";
    a.opa = 0;
    Each($id$cls(k, "j-close"), function (q, o) {
        q.onclick = function (r) {
            layerClose(a);
            stopDefault(r)
        }
    });
    if (p) {
        h.focus()
    }
    fnlayerOpen(a, d, f)
}

function fnlayerOpen(c, a, b) {
    c.style.height = a + b + "px";
    c.style.opacity = 1;
    c.style.filter = "alpha(opacity=100)";
    c.opa = 100
}

function layerClose(a) {
    if (!a) {
        return
    }
    a.style.opacity = 0;
    a.style.filter = "alpha(opacity=0)";
    a.opa = 0;
    a.style.height = "auto";
    a.style.display = "none"
}

function starsAll(e) {
    var d = $id$cls(e, "sc");
    var c = $id$cls(e, "sm");
    var b = 1;
    var a = 1;
    Each(c, function (g, f) {
        b = b + parseInt(c[f].innerHTML);
        if (a < parseInt(c[f].innerHTML)) {
            a = parseInt(c[f].innerHTML)
        }
    });
    Each(d, function (g, f) {
        d[f].style.width = ((parseInt(c[f].innerHTML) / b) * 170) / (a / b) + "px"
    })
}

function stars(b) {
    var a = $id(b).getElementsByTagName("span");
    a[0].title = "真差劲";
    a[1].title = "不如意";
    a[2].title = "一般般";
    a[3].title = "挺好的";
    a[4].title = "棒极了";
    Each(a, function (d, c) {
        d.onmouseover = function () {
            if ($id(b).yes) {
                return
            }
            for (var e = 0; e <= c; e++) {
                delClass(a[e], "no")
            }
            for (var f = c + 1; f < a.length; f++) {
                addClass(a[f], "no")
            }
        };
        d.onclick = function () {
            if (!$id(b).yes) {
            }
        }
    })
}

function msgInput(c, b, a) {
    if ($id(c).value == a) {
        addClass($id(c), b)
    }
    if ($id(c).value == "") {
        addClass($id(c), b);
        $id(c).value = a
    }
    $id(c).onfocus = function () {
        if ($id(c).value == a) {
            $id(c).value = "";
            delClass($id(c), b)
        }
    };
    $id(c).onblur = function () {
        if ($id(c).value == "") {
            addClass($id(c), b);
            $id(c).value = a
        }
    }
}

function testEpt(b) {
    var c = $id(b);
    var a = function () {
        var d = arguments[0];
        if (d.keyCode === 13 && c.value.length === 0) {
            stopDefault(d);
            layerOpen("eptTip")
        }
    };
    evton(c, "focus", function () {
        evton(document, "keydown", a)
    });
    evton(c, "blur", function () {
        evtdel(document, "keydown", a)
    })
}

function taber(a) {
    var f = a.ctrl, d = a.content, e = a.current || 0;
    if (f.length < 2 || f.length != d.length) {
        return
    }
    var b = f.length;
    for (var c = 0; c < b; c++) {
        delClass(f[c], "j-crt");
        d[c].style.display = "none"
    }
    addClass(f[e], "j-crt");
    d[e].style.display = "block";
    Each(f, function (h, g) {
        h.onclick = function () {
            for (var i = 0; i < b; i++) {
                delClass(f[i], "j-crt");
                d[i].style.display = "none"
            }
            addClass(f[g], "j-crt");
            d[g].style.display = "block"
        }
    })
}

function hoverShow(a) {
    var d = a.ctrl, c = a.content;
    if (d.length < 1 || d.length != c.length) {
        return
    }
    var b = d.length;
    Each(d, function (f, e) {
        f.onmouseover = function () {
            for (var g = 0; g < b; g++) {
                c[g].style.display = "none"
            }
            c[e].style.display = "block"
        };
        f.onmouseout = function () {
            for (var g = 0; g < b; g++) {
                c[g].style.display = "none"
            }
        }
    })
}

function searchSource() {
    var a = document.getElementById("topsearch").value;
    if (a) {
        return true
    } else {
        alert("请输入关键字");
        return false
    }
};