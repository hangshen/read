var curArr, newArr, curCon = $id("cur-con"), newCon = $id("new-con"), nin = $id("nn"), gdt = $id$cls("gd", "gradio"),
    introarea = $id("intro-area"), rt = $id("writed"), photoBox = $id("photoshow");
var setHighlight = function () {
    var b = $id$cls("profile", "ipttxt");
    for (var a = 0; a < b.length; a++) {
        evton(b[a], "focus", function (c) {
            addClass(target(c), "focus")
        });
        evton(b[a], "blur", function (c) {
            delClass(target(c), "focus")
        })
    }
};
var controlWords = function (a) {
    if (trim(introarea.value).length > 0) {
        rt.innerHTML = trim(introarea.value).length
    } else {
        rt.innerHTML = 0
    }
    evton(introarea, "keyup", function (b) {
        if (trim(introarea.value).length > a) {
            introarea.value = trim(introarea.value).substring(0, a)
        }
        rt.innerHTML = trim(introarea.value).length
    })
};
var switchEdit = function () {
    var b = $id$cls("profile", "edit1"), h = $id$cls("profile", "edit2"), f = $id("btnA"), c = $id("btnB"),
        g = $id("btnC"), a = $id("btnD"), d = $id$cls("profile", "pra2")[0], e = $id$cls("profile", "pra3")[0];
    evton(f, "click", function (j) {
        if (a.value.length > 0) {
            j.preventDefault();
            var i = new FormData($id("edit1Form"));
            $.ajax({
                url: "/upload.do",
                type: "POST",
                data: i,
                processData: false,
                contentType: false,
                success: function (k) {
                    edit1Callback(k)
                },
                error: function (k) {
                }
            });
            showTip(e, "hide");
            showTip(d, "show")
        }
    });
    evton(g, "click", function (i) {
        jQuery("img#profile-image").imgAreaSelect({remove: true});
        addClass(h[0], "hidden");
        delClass(b[0], "hidden")
    })
};
var showTip = function (b, a) {
    if (a === "show") {
        delClass(b, "hidden")
    } else {
        addClass(b, "hidden")
    }
};
var showErrorTip = function (c, b, a) {
    if (b === "show") {
        jQuery(c).text(a || "网络出错导致上传失败，请重试。");
        delClass(c, "hidden")
    } else {
        addClass(c, "hidden")
    }
};
var generateTags = function (c, a, e) {
    var d = c, b = a, h = e;
    d.innerHTML = "";
    for (var g = 0; g < b.length; g++) {
        var f = document.createElement("li");
        if (h == "cur") {
            jQuery(f).empty().append(jQuery('<a class="cur" href="javascript:void(0);"></a>').attr("value", a[g]).text(b[g]))
        } else {
            if (h == "new") {
                jQuery(f).empty().append(jQuery('<a class="new" href="javascript:void(0);"></a>').attr("value", a[g]).text(b[g]))
            }
        }
        d.appendChild(f)
    }
};
var delData = function (b) {
    for (var a = curTags.length; a >= 0; a--) {
        if (b == curTags[a]) {
            curTags.splice(a, 1)
        }
    }
};
var delTags = function (a, c) {
    if (a.length > 0) {
        for (var b = 0; b < a.length; b++) {
            if (a[b].className.indexOf("added") < 0) {
                addClass(a[b], "added");
                evton(a[b], "click", function (d) {
                    if (c && $id$cls("cur-con", "cur").length == 5) {
                        return
                    }
                    if (!c) {
                        delData(target(d).getAttribute("value"))
                    }
                    target(d).parentNode.parentNode.removeChild(target(d).parentNode)
                })
            }
            if (c) {
                evton(a[b], "click", function (f) {
                    var d = target(f).getAttribute("value");
                    addTags(d)
                })
            }
        }
    }
};
var addTags = function (e) {
    if (e.length === 0) {
        closeAlert("noept");
        return
    }
    curArr = $id$cls("profile", "cur");
    var d = false;
    if (curArr.length <= 4) {
        for (var c = 0; c < curTags.length; c++) {
            if (curTags[c] == e) {
                d = true;
                break
            }
        }
        if (!d) {
            var b = document.createElement("li");
            jQuery(b).empty().append(jQuery('<a class="cur" href="javascript:void(0);"></a>').attr("value", e).text(e));
            addDelay = setTimeout(function () {
                curCon.appendChild(b);
                curTags.push(e);
                updateTags()
            }, 100);
            var a = $id("tag-input");
            a.value = ""
        } else {
            closeAlert("oup")
        }
    } else {
        closeAlert("lmt")
    }
};
var updateTags = function () {
    curArr = $id$cls("profile", "cur");
    delTags(curArr)
};
var closeAlert = function (a) {
    var b = $id$cls("profile", "alert");
    if (a == "lmt") {
        b[0].innerHTML = "您最多设置5个标签"
    }
    if (a == "oup") {
        b[0].innerHTML = "您已经有了这个标签！"
    }
    if (a == "noept") {
        b[0].innerHTML = "标签内容不能为空"
    }
    b[0].style.display = "block";
    closeUp = setTimeout(function () {
        b[0].style.display = "none"
    }, 2500)
};
var ajaxPush = function (a) {
    generateTags(newCon, a, "new");
    newArr = $id$cls("new-con", "new");
    delTags(newArr, true)
};
var ajaxChange = function () {
    var a = $id("change-tags");
    evton(a, "click", function (b) {
        querySysLabels(ajaxPush)
    })
};
var curTags = [];
var loadData = function (a, b) {
    curTags = a.userLabels;
    if (a.imageUrl) {
        photoBox.src = a.imageUrl;
        $id("imageUrl").value = a.imageUrl
    } else {
        photoBox.src = "../images/tx.png"
    }
    nin.value = a.nickName || "";
    if (a.gender === 0) {
        gdt[0].checked = false;
        gdt[1].checked = true
    } else {
        gdt[0].checked = true;
        gdt[1].checked = false
    }
    introarea.value = a.introduction || "";
    controlWords(120);
    setHighlight();
    switchEdit();
    generateTags(curCon, curTags, "cur");
    curArr = $id$cls("cur-con", "cur");
    delTags(curArr);
    ajaxChange();
    openUserLayer(b);
    querySysLabels(function (c) {
        ajaxPush(c)
    })
};
document.domain = "163.com";
var g_UploaderWebJsCallback;

function reduceSizePreservingAspectRatio(g, f, e, d) {
    var c = g, a = f, b = 1;
    if (c > e) {
        c = e;
        b = c / g;
        a = Math.ceil(f * b)
    }
    if (a > d) {
        a = d;
        b = a / f;
        c = Math.ceil(g * b)
    }
    return {originalWidth: g, originalHeight: f, width: c, height: a, ratio: b}
}

function edit1Callback(a) {
    var g = $id$cls("profile", "pra2")[0], j = $id$cls("profile", "pra3")[0];
    if (a.resultCode === 0) {
        var f = a.url;
        var d = $id$cls("profile", "edit1"), b = $id$cls("profile", "edit2"), i = $id("btnD");
        var c = jQuery("img#profile-image");
        var e = jQuery("div#preview img");
        var h = new Image();
        jQuery(h).one("load", function () {
            e.attr("src", f);
            showTip(g, "hide");
            showTip(j, "hide");
            addClass(d[0], "hidden");
            delClass(b[0], "hidden");
            var l = reduceSizePreservingAspectRatio(this.width, this.height, 152, 152);
            c.data("metrics", l);
            c.attr("src", f);
            c.css({width: l.width, height: l.height});
            $id$cls("profile", "img-wrap")[0].style.width = l.width + "px";
            $id$cls("profile", "img-wrap")[0].style.height = l.height + "px";
            $id("profile-image").style.left = Math.round(-l.width / 2) + "px";
            $id("profile-image").style.top = Math.round(-l.height / 2) + "px";
            if (this.width > 0 && this.height > 0) {
                var k = Math.min(this.width, this.height);
                var n = Math.floor((this.width - k) / 2);
                var m = Math.floor((this.height - k) / 2);
                c.imgAreaSelect({
                    x1: n,
                    y1: m,
                    x2: k + n,
                    y2: k + m,
                    imageWidth: this.width,
                    imageHeight: this.height,
                    minWidth: 1,
                    minHeight: 1,
                    aspectRatio: "1:1",
                    handles: true,
                    fadeSpeed: 200,
                    onSelectChange: updateSelection,
                    parent: "div#profile"
                });
                updateSelection(c[0], {x1: n, y1: m, width: k, height: k})
            }
            jQuery("#edit2ImageUrl").val(f);
            jQuery("#imageUrl").val(f)
        });
        h.src = f;
        i.value = ""
    } else {
        showTip(g, "hide");
        showErrorTip(j, "show", albumErrCodeToMsg(a.resultCode))
    }
}

function updateSelection(b, e) {
    if (!e.width || !e.height) {
        return
    }
    var d = jQuery(b).data("metrics");
    var c = 100 / e.width;
    var a = 100 / e.height;
    var f = jQuery("div#preview img");
    f.css({
        width: Math.round(c * d.originalWidth),
        height: Math.round(a * d.originalHeight),
        marginLeft: -Math.round(c * e.x1),
        marginTop: -Math.round(a * e.y1)
    });
    jQuery("#edit2ImageRect").val("?imageView&crop=" + e.x1 + "_" + e.y1 + "_" + e.width + "_" + e.height)
}

var photoUploadWrapper = null;

function edit2Callback(d) {
    if (d.resultcode == 999) {
        var g = d.userDef1Url;
        var a = $id$cls("profile", "edit1"), f = $id$cls("profile", "edit2");
        var e = jQuery("img#photoshow");
        var c = jQuery("img#profile-image");
        var b = new Image();
        jQuery(b).one("load", function () {
            e.attr("src", g);
            c.imgAreaSelect({remove: true});
            addClass(f[0], "hidden");
            delClass(a[0], "hidden");
            photoUploadWrapper = d;
            jQuery("#imageUrl").val(g)
        });
        b.src = g
    } else {
        showError(albumErrCodeToMsg(d.resultcode))
    }
}

function albumErrCodeToMsg(a) {
    if (a == 0) {
        return "图片大小超过上限(15M)，请选择其它图片或裁剪后上传。"
    } else {
        if (a == 2) {
            return "网络超时，请稍后再试。"
        } else {
            if (a == 12) {
                return "您选择的不是支持的图片格式(JPG, BMP, PNG)，无法上传。"
            } else {
                if (a == 7 || a == 22 || a == 23) {
                    return "相册容量超出限制！"
                } else {
                    if (a == 24) {
                        return "上传受到限制，您可能在博客或相册中发布了违规内容。"
                    } else {
                        if (a == 401) {
                            return "相册维护中，请稍后再试。"
                        } else {
                            if (a == 506) {
                                return "您还没有登录，请刷新页面后再试一次。"
                            } else {
                                return "上传头像失败，请稍后再试。"
                            }
                        }
                    }
                }
            }
        }
    }
}

function updateUser() {
    var a = jQuery.trim(jQuery("#nn").val());
    if (a.length < 2 || a.length > 15) {
        jQuery(".nicktip").css({color: "#D24130"});
        return
    } else {
        jQuery(".nicktip").css({color: "#999"})
    }
    updateUserInfo($id("imageUrl").value + $id("edit2ImageRect").value, nin.value, gdt[0].checked ? 1 : 0, introarea.value, curTags, updateUserCallback);
    photoUploadWrapper = null
}

function updateUserCallback(a) {
    if (a) {
        refreshPage()
    } else {
        showError("更新用户资料失败，请稍后再试。")
    }
}

function openUserLayer(a) {
    jQuery("#profile").removeClass("f-dn");
    if (a) {
        switch (a.id) {
            case"editNickName":
                $id("nn").focus();
                break;
            case"editIntroduction":
                $id("intro-area").focus();
                break
        }
    }
}

function closeUserLayer() {
    jQuery("#profile").addClass("f-dn");
    jQuery(".m-mask").addClass("f-dn")
};