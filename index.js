// polyfill customEvent pour IE
;(function() {
  if (typeof window.CustomEvent === "function")
    return false;

  function CustomEvent (event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

// throttle events with requestAnimationFrame
(function() {
  var throttle = function(type, name) {
    var running = false;
    var func = function() {
      if (running)
        return;

      running = true;
      window.requestAnimationFrame(function() {
        window.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    window.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "ab-resize");
  throttle("scroll", "ab-scroll");
  throttle("keyup", "ab-keyup");
})();

// deep extend function
var extend = function() {
  var extended = {};
  var deep = false;
  var i = 0;
  var length = arguments.length;

  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]'){
    deep = arguments[0];
    i++;
  }

  var merge = function(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = extend(true, extended[prop], obj[prop]);
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  };

  for (; i < length; i++) {
    merge(arguments[i]);
  }

  return extended;
};

// test if a string is a JSON
var isJson = function(str) {
  try {
    JSON.parse(str);
  } catch(e) {
    return false;
  }
  return true;
};


window.AB = {
  runUpdaters: function(plugin) {
    if (this.options[plugin]) {
      this.plugins[plugin](this.options[plugin]);
    } else {
      for(var options in AB.options){
        if(this.options.hasOwnProperty(options)) {
          this.plugins[options](this.options[options]);
        }
      }
    }
  },
  plugins: {},
  options: {}
};


module.exports = {
  extend: extend,
  isJson: isJson,
  AB: window.AB
};
