(function() {
  var bacon = {};
  var cache = {};
  
  bacon.conf = function(key, value) {
    cache[key] = value;
  };
  
  bacon.getConf = function(key) {
    var value = cache[key];
    if (typeof value == 'undefined') value = null;
    return value;
  };
  
  window.bacon = bacon;
}());