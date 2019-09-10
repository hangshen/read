/***************
 * Popover settings
 ***************/

$.fn.popover.defaults.template = '<div class="popover"><div class="arrow"></div><div class="popover-content"></div></div>';
$.fn.popover.defaults.trigger = 'hover';
$.fn.popover.defaults.container = 'body';
$('[data-toggle="popover"]').popover();

jQuery.ajaxPrefilter('*', function(s, originalSettings, jqXHR) {
  if (s.url == '/weMediaCommentCountReset.do') {
    s.data += '&csrf_token=' + CONF.csrf_token;
  }
});

var YD = {};

YD.popTip = function(text) {
  noty({
    text: text,
    layout: 'topCenter',
    type: 'warning',
    timeout: 3000
  });
};

YD.popTipLoading = function(text) {
  noty({
    text: text || '载入中...',
    layout: 'topCenter',
    type: 'warning',
    timeout: false
  });
};

var messages = {
  'weMediaBookCreate_article': '保存书籍信息出错了，请稍后再试',
  'weMediaBookArticle_reChapter': '新建卷出错了，请稍后再试',
  'weMediaBookArticle_addChapter': '新建卷出错了，请稍后再试',
  'weMediaBookArticle_delChapter': '删除卷出错了，请稍后再试',
  'weMediaBookArticle_addDelArticles': '出错了，请稍后再试',
  'weMediaBookArticle_updateArticle': '出错了，请稍后再试',
  'weMediaBookCreate_basic': '保存书籍基本信息出错了，请稍后再试'
}

$.ajaxPrefilter('*', function(s, originalSettings, jqXHR) {
  var dtd = $.Deferred();
  var getMessage = function() {
    var key = originalSettings.url.match(/^\/([a-zA-Z]+)/)[1]
      , data = originalSettings.data
      , operation

    if (data && data.operation) {
      operation = data.operation
    } else {
      operation = originalSettings.url.match(/operation=([a-zA-Z]+)/)[1]
    }

    if (operation) {
      key += '_' + operation
    }

    return messages[key]
  }

  jqXHR.
    then(function(data, status, jqXHR) {

      if (jqXHR.getResponseHeader('Content-Type') && jqXHR.getResponseHeader('Content-Type').indexOf('application/json') == 0 &&
        typeof data == 'object' && typeof data.ResultCode !== 'undefined' && data.ResultCode !== 0 &&
        data.ResultCode !== 200) {

        var message = getMessage();
        if (message) {
          alert(message)
          dtd.rejectWith(this, arguments);
        } else {
          dtd.resolveWith(this, arguments);
        }
      } else {
        dtd.resolveWith(this, arguments);
      }
    }, function() {
      var message = getMessage() || '网络出错了，请稍后再试';
      alert(message)
      dtd.rejectWith(this, arguments);
    });
  jqXHR = dtd.promise(jqXHR);
  jqXHR.success = jqXHR.done;
  jqXHR.error = jqXHR.fail;
});