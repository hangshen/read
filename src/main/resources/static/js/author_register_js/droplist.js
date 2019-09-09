var f = function() {
  var _  = NEJ.P,
      _p = _('nej.ui');

  /**
   * 具有上下文提示的输入框对象
   * @constructor
   * @class   具有上下文提示的输入框对象
   * @param  {String|Node} oParent  控件所在的父节点ID或者对象
   * @param  {Object}      oOptions 可选配置参数，已处理的参数列表
   * 								  inputId   [String]   - 输入框id
   * 								  className [String]   - 控件关联样式
   *                                onchange  [Function] - 输入框内容发生改变时的回调函数
   *                                onsuccess [Function] - 选中用户名的回调函数
   * 
   * 控件初始化函数
   * @param {String|Node} oParent		父节点id或者对象
   * @param {Object} 		oOptions	可选配置参数
   */
  var CxtInput = function(oParent, oOptions){
    var oParent = $('#' + oParent);
    if(!oParent.length) return;

    oOptions       = oOptions || {};
    this.input     = $('#' + oOptions.inputId)
    this.context   = $('<dl>').addClass('drop-list').html('<dt>请选择或继续输入...</dt><dd></dd>').appendTo('body');

    var offset = this.input.offset();
    this.context.css({
      left: offset.left + 'px',
      top: (offset.top + this.input.outerHeight() + 2) + 'px'
    });

    this.cbChange  = oOptions.onchange || new Function();
    this.cbSuccess = oOptions.onsuccess;

    oParent.addClass(oOptions.className);

    var bind = function(func, context) {
        var bound, 
          args, 
          nativeBind = Function.prototype.bind, 
          slice = Array.prototype.slice,
          ctor = function(){};

        if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));

        if (!func.toString() === '[object Function]') throw new TypeError;

        args = slice.call(arguments, 2);
        return bound = function() {
            if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
            ctor.prototype = func.prototype;
            var self = new ctor;
            var result = func.apply(self, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return self;
        };
    };

    this.onChange     = bind(this.onChange, this);
    this.onClick      = bind(this.onClick, this);
    this.onKeyPress   = bind(this.onKeyPress, this);
    this.onListChange = bind(this.onListChange, this);

    var self = this;
    this.input
      .bind('blur', function(e){
        self.onClick();
      })
      .bind('keypress', function(ev){
        if(ev.keyCode == 9 || ev.keyCode == 13){
          self.select(self.context.curIndex);
          ev.stopPropagation();
        }
      })
      .bind('keyup', function(ev){
        self.onKeyPress(ev);
      });
    
    this.context
      .bind('mousedown', function(ev){
        self.select($(this).find('li').index(ev.target));
      });
  };
  /**
   * 输入框输入的消息响应函数
   */
  CxtInput.prototype.onChange = function(){
    if(this.input.val() == '' || this.input.val() == this.input[0].defaultValue){
      this.contextHide();
      return;
    }
    var self = this;
    this.cbChange(this.input.val(), this.onListChange);
  };
  /**
   * 上下文列表变化的回调函数
   * @param {Array} list	上下文列表
   */
  CxtInput.prototype.onListChange = function(list){
    if(!list||!list.length) {
      this.resetList([]);
      this.contextHide();
    } else {
      this.resetList(list);
      this.contextShow();
    }
  };
  /**
   * 在输入框中输入的消息响应函数
   * @param {Object} event	事件对象
   * 
   */
  CxtInput.prototype.onKeyPress = function(ev){
    switch(ev.keyCode){
      case 9:
      case 13:
        ev.stopPropagation();
      break;
      case 38:
        if(this.context.curIndex > 0){
          this.context.find('li').eq(this.context.curIndex).removeClass('cur');
          this.context.curIndex--;
          this.context.find('li').eq(this.context.curIndex).addClass('cur');
        }
      break;
      case 40:
        if(this.context.curIndex < this.list.length - 1){
          this.context.find('li').eq(this.context.curIndex).removeClass('cur');
          this.context.curIndex++;
          this.context.find('li').eq(this.context.curIndex).addClass('cur');
        }
      break;
      default:
        this.onChange();
      break;

    }
  };

  CxtInput.prototype.contextShow = function(){
	this.__active = true;
    this.context.slideDown(100);
  };

  CxtInput.prototype.contextHide = function(){
	this.__active = false;
    this.context.slideUp(100);
  };

  /**
   * 渲染下拉列表
   * @param {Array}	list	上下文列表
   */
  CxtInput.prototype.resetList = function(list){
    if(!list||!list.length) list = [];
    this.list = list;

    this.context.find('dd').html('');

    var ulEl = document.createElement('ul'),
      liEl = document.createElement('li'),
      item;

    for(var i=0,l=list.length; i<l; i++){
      item = liEl.cloneNode(false);
      item.innerText = item.textContent = list[i];
      if(i == 0){
        item.className = 'cur';
        this.context.curIndex = i;  
      }
      ulEl.appendChild(item);
    }
    this.context.find('dd').append(ulEl);
  };

  /**
   * 鼠标点击的消息响应函数
   */
  CxtInput.prototype.onClick = function(){
    if(this.context.curIndex != undefined&&this.__active) {
      this.select(this.context.curIndex);
    }
  };
  /**
   * 选中上下文列表中的一项
   * @param {Number} index	索引值
   */
  CxtInput.prototype.select = function(index){
    if (this.list && this.list.length > 0) {
      this.input.val(this.list[index])
    }
    this.contextHide();
    this.cbSuccess&&this.cbSuccess();
  };

  _p.CxtInput = CxtInput;

};

define(['{lib}base/global.js'], f);
