var f = function() {

  var _  = NEJ.P,
      _p = _('nej.ui');

  // var neteaselogin_posts = ['@163.com','@126.com','@yeah.net','@vip.163.com','@vip.126.com','@popo.163.com','@188.com','@qq.com','@yahoo.com','@sina.com'];

  new _p.CxtInput('username-control-group', {
      inputId   : 'username-input',
      className : 'username-w',
      onchange  : function (value, cb){
              if(value == undefined || value == '' || !cb) return;
              var arr   = value
                list  = [],
                pre   = arr[1],
                post  = arr[2];

              for(var i = 0, length = neteaselogin_posts.length; i < length; i++){
                if(neteaselogin_posts[i].indexOf(post)!=-1){
                  list.push(pre+neteaselogin_posts[i]);
                }
              }
              cb(list);
            },
      onsuccess : function(){
        setTimeout(function() {
          $('#password-input').focus();
        }, 0)
      }
    });

  var requiredInputIds = ['username-input', 'password-input'];

  $('.unlogin-form').submit(function() {
    var id
      , elm
      , val;

    for (var i = 0, l = requiredInputIds.length; i < l; ++i) {
      id = requiredInputIds[i];
      elm = document.getElementById(id);
      val = $.trim(elm.value);
      if (!val) {
        $(elm).focus();
        return false;
      }
    }
  });
};

define(['../../js/author_register_js/droplist.js',
        '../../js/author_register_js/global.js'], f);
