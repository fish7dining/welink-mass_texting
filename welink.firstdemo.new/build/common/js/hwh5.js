(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("hwh5", [], factory);
	else if(typeof exports === 'object')
		exports["hwh5"] = factory();
	else
		root["hwh5"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// import {Base64} from 'js-base64';

var _getUID = function _getUID() {
  return new Date() - 0 + '' + Math.floor(Math.random() * 10000);
};
var _cbNative = {};

var callbackNative = function callbackNative(payload) {
  payload = JSON.parse(payload);
  _cbNative[payload.callbackId](payload);
};

var callNativeFunction = function callNativeFunction(func, opt) {
  var _id = 'cb' + _getUID();

  return new Promise(function (resolve, reject) {
    _cbNative[_id] = function (payload) {
      // Base64(payload.data)
      payload.data && typeof payload.data === 'string' ? payload.data = decodeURIComponent(escape(atob(payload.data))) : '';
      if (payload.type === 'error') {
        var _hwaOpt = {
          eventId: 'WELINK_JSAPI_HWA',
          eventLabel: 'WeLink JSAPI HWA',
          extendData: JSON.stringify({
            payload: payload
          })
        };
        HWH5.hwa(_hwaOpt);
        if (opt.funcName === 'getCache') {
          resolve(null);
          return;
        }
        reject(payload.data);
      } else {
        if (opt.funcName === 'fetch') {
          resolve({
            text: function text() {
              return new Promise(function (_resolve, _reject) {
                _resolve(payload.data);
              });
            },
            json: function json() {
              return new Promise(function (_resolve, _reject) {
                try {
                  payload.data = JSON.parse(payload.data);
                } catch (error) {
                  payload.data = error;
                }
                _resolve(payload.data);
              });
            }
          });
        } else if (opt.funcName === 'fetchInternet') {
          var _JSON$parse = JSON.parse(payload.data),
              statusCode = _JSON$parse.statusCode,
              header = _JSON$parse.header,
              body = _JSON$parse.body;

          resolve({
            status: statusCode,
            headers: header,
            text: function text() {
              return new Promise(function (_resolve, _reject) {
                _resolve(body);
              });
            },
            json: function json() {
              return new Promise(function (_resolve, _reject) {
                _resolve(body);
              });
            }
          });
        } else if (opt.funcName === 'getCache' && typeof payload.data === 'string' && payload.data === 'undefine') {
          resolve(null);
        } else {
          if (typeof payload.data === 'string') {
            try {
              payload.data = JSON.parse(payload.data);
            } catch (error) {
              // console.log(error);
            }
          }
          resolve(payload.data);
        }
      }
    };
    func(_id);
  });
};

exports.callbackNative = callbackNative;
exports.callNativeFunction = callNativeFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{ apiName: 'deviceInfo', nativeName: 'getDeviceInfo' }, { apiName: 'appInfo', nativeName: 'getAppInfo' }, { apiName: 'userInfo', nativeName: 'getUserInfo' }, { apiName: 'fetch', nativeName: 'fetch' }, { apiName: 'fetchInternet', nativeName: 'fetchInternet' }, { apiName: 'networkStatus', nativeName: 'getNetworkStatus' }, { apiName: 'navTitle', nativeName: 'setNavTitle' }, { apiName: 'goBack', nativeName: 'goBack' }, { apiName: 'close', nativeName: 'close' }, { apiName: 'imagePicker', nativeName: 'imagePicker' }, { apiName: 'hwa', nativeName: 'hwa' }, { apiName: 'selectContact', nativeName: 'selectContact' }, { apiName: 'cache', nativeName: 'cache' }, { apiName: 'showNavBar', nativeName: 'showNavBar' }, { apiName: 'log', nativeName: 'log' }, { apiName: 'downloadToMDM', nativeName: 'downloadToMDM' }, { apiName: 'existInMDM', nativeName: 'existInMDM' }, { apiName: 'openFileInMDM', nativeName: 'openFileInMDM' }, { apiName: 'preventScreenshots', nativeName: 'preventScreenshots' }, { apiName: 'emitEvent', nativeName: 'emitEvent' }, { apiName: 'encryptFile', nativeName: 'encryptFile' }, { apiName: 'getMDMRootPath', nativeName: 'getMDMRootPath' }, { apiName: 'filePicker', nativeName: 'filePicker' }, { apiName: 'zipsFiles', nativeName: 'zipsFiles' }, { apiName: 'compressImage', nativeName: 'compressImage' }, { apiName: 'uploadFile', nativeName: 'uploadFile' }, { apiName: 'uploadImage', nativeName: 'uploadFile' }, { apiName: 'scanQR', nativeName: 'scanQR' }, { apiName: 'location', nativeName: 'location'
  // { apiName: 'playMedia', nativeName: 'playMedia'},
  // { apiName: 'previewImg ', nativeName: 'previewImg '},
  // { apiName: 'openDocument ', nativeName: 'openDocument '},
  // { apiName: 'onPause ', nativeName: 'onPause '},
  // { apiName: 'onResume ', nativeName: 'onResume '}
}];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
  apiName: 'viewContactInfo',
  schema: 'ui://welink.contacts/userDetailController'
}, { apiName: 'openEmail', schema: 'ui://welink.mail/newMail' }, { apiName: 'openWebview', schema: '' }, {
  apiName: 'contactInfo',
  schema: 'method://welink.contacts/getUserDetail'
}, {
  apiName: 'refreshTodo',
  schema: 'method://welink.todo/h5RefreshTodo'
}, {
  apiName: 'getIMGroupList',
  schema: 'method://welink.im/getGroupDetailList'
}, {
  apiName: 'createIMGroupChat',
  schema: 'ui://welink.im/imCreateGroupChat'
}, {
  apiName: 'sendIMCard',
  schema: 'ui://welink.im/shareCardMessage'
}, {
  apiName: 'openIMChat',
  schema: 'ui://welink.im/gotoChatController'
}];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{ apiName: 'toast' }, { apiName: 'loading' }, { apiName: 'exceptionTip' }, { apiName: 'addEventListener' }, { apiName: 'removeEventListener' }, { apiName: 'getEventListeners' }];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _init = __webpack_require__(6);

var _init2 = _interopRequireDefault(_init);

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

var _nativeMock = __webpack_require__(16);

var _nativeMock2 = _interopRequireDefault(_nativeMock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// HWH5.callMethod 有值则是安卓端，反之iOS
if (!_global2.default.HWH5) _global2.default.HWH5 = {};
HWH5.callMethod = function () {};
(0, _init2.default)();

_extends(HWH5, _nativeMock2.default);

// 如果需要本地模拟iOS，在init之前把HWH5.callMethod=null，而且在合并nativeMock之后，调用window._HWH5Init函数
// window._HWH5Init();
module.exports = HWH5;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

var _methods = __webpack_require__(2);

var _methods2 = _interopRequireDefault(_methods);

var _schemas = __webpack_require__(3);

var _schemas2 = _interopRequireDefault(_schemas);

var _h5apis = __webpack_require__(4);

var _h5apis2 = _interopRequireDefault(_h5apis);

var _pubsub = __webpack_require__(8);

var _pubsub2 = _interopRequireDefault(_pubsub);

var _schema = __webpack_require__(9);

var _schema2 = _interopRequireDefault(_schema);

var _method = __webpack_require__(14);

var _method2 = _interopRequireDefault(_method);

var _h = __webpack_require__(15);

var _h2 = _interopRequireDefault(_h);

var _callbackNative = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _mockApis = function _mockApis(apis, scope) {
  var _loop = function _loop(i) {
    var apiName = apis[i].apiName;
    scope[apiName] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        var _sub = _pubsub2.default.subscribe('hwh5ready', function () {
          HWH5[apiName].apply(_global2.default, args).then(function (ret) {
            resolve(ret);
          }).catch(function (e) {
            reject(e);
          });
          _sub.remove();
        });
      });
    };
  };

  for (var i = 0; i < apis.length; i++) {
    _loop(i);
  }
}; // patch for ios js inject problem

var _initApis = function _initApis() {
  (0, _schema2.default)();
  (0, _method2.default)();
  (0, _h2.default)();
  _global2.default.HWH5.callbackNative = _callbackNative.callbackNative;
};
var _init = function _init() {
  if (typeof HWH5 === 'undefined' || !HWH5.callMethod) {
    _global2.default.HWH5 = {};
    _mockApis(_methods2.default, _global2.default.HWH5);
    _mockApis(_schemas2.default, _global2.default.HWH5);
    _mockApis(_h5apis2.default, _global2.default.HWH5);
    _global2.default._HWH5Init = function () {
      console.log('IOS 原生调用 _HWH5Init 函数�?');
      _initApis();
      _pubsub2.default.publish('hwh5ready');
    };
  } else {
    _initApis();
  }
};

module.exports = _init;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var events = function () {
  var topics = {};
  var hOP = topics.hasOwnProperty;

  return {
    subscribe: function subscribe(topic, listener) {
      // Create the topic's object if not yet created
      if (!hOP.call(topics, topic)) topics[topic] = [];

      // Add the listener to queue
      var index = topics[topic].push(listener) - 1;

      // Provide handle back for removal of topic
      return {
        remove: function remove() {
          delete topics[topic][index];
        }
      };
    },
    publish: function publish(topic, info) {
      // If the topic doesn't exist, or there's no listeners in queue, just leave
      if (!hOP.call(topics, topic)) return;

      // Cycle through topics queue, fire!
      topics[topic].forEach(function (item) {
        item(info !== undefined ? info : {});
      });
    }
  };
}();

module.exports = events;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _callbackNative = __webpack_require__(1);

var _queryString = __webpack_require__(10);

var _queryString2 = _interopRequireDefault(_queryString);

var _schemas = __webpack_require__(3);

var _schemas2 = _interopRequireDefault(_schemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _openURI = function _openURI(opt) {
  return (0, _callbackNative.callNativeFunction)(function (id) {
    var _str = JSON.stringify({
      url: opt.uri || opt.url || opt.schema + (opt.data ? '?' + _queryString2.default.stringify(opt.data) : ''),
      callbackId: id
    });
    HWH5.openURI(_str);
  }, opt);
};

var _params = {
  viewContactInfo: ['w3account', 'employeeNumber', 'personMail'],
  contactInfo: ['w3accounts', 'employeeNumbers', 'personMails'],
  refreshTodo: [{ name: 'isRefresh', default: 1 }, 'reserve1', 'reserve2']
};

var _makeSchemaAPI = function _makeSchemaAPI(apiName, schema) {
  HWH5[apiName] = function (data, opt) {
    if (apiName === 'openWebview') {
      schema = data.url || data.uri;
      data = null;
    } else if (apiName in _params) {
      var _obj = _params[apiName];
      for (var i = 0; i < _obj.length; i++) {
        var _name = _obj[i];
        if (typeof _name === 'string') {
          data[_name] = data[_name] || '';
        } else {
          data[_name.name] = data[_name.name] || _name.default;
        }
      }
    }
    return _openURI({
      schema: schema,
      data: data
    });
  };
};

var _init = function _init() {
  for (var i = 0; i < _schemas2.default.length; i++) {
    var _api = _schemas2.default[i];
    _makeSchemaAPI(_api.apiName, _api.schema);
  }
};

module.exports = _init;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(11);
var objectAssign = __webpack_require__(12);
var decodeComponent = __webpack_require__(13);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _callbackNative = __webpack_require__(1);

var _methods = __webpack_require__(2);

var _methods2 = _interopRequireDefault(_methods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _callNative = function _callNative(opt) {
  return (0, _callbackNative.callNativeFunction)(function (id) {
    var _str = JSON.stringify({
      funcName: opt.funcName,
      data: opt.data,
      callbackId: id
    });
    HWH5.callMethod(_str);
  }, opt);
};

var _makeMethodAPI = function _makeMethodAPI(apiName, nativeName) {
  HWH5[apiName] = function (data, opt) {
    if (apiName === 'fetch' || apiName === 'fetchInternet') {
      data = {
        url: data,
        method: opt && opt.method || 'get'
      };
      data = _extends(data, opt);
    }
    if (apiName === 'cache') {
      nativeName = data && data.key ? 'setCache' : 'getCache';
    }
    return _callNative({
      funcName: nativeName,
      data: data
    });
  };
};
var _init = function _init() {
  for (var i = 0; i < _methods2.default.length; i++) {
    var _api = _methods2.default[i];
    _makeMethodAPI(_api.apiName, _api.nativeName);
  }
};

module.exports = _init;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _h5apis = __webpack_require__(4);

var _h5apis2 = _interopRequireDefault(_h5apis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _makeAPI = function _makeAPI(func) {
  return function (data) {
    return new Promise(function (resolve, reject) {
      func(data, resolve, reject);
    });
  };
};
var _toast = void 0;
var _createToast = function _createToast(data) {
  if (!_toast) {
    var _doc = document,
        _time = data.time || 2000,
        _div = _doc.createElement('div'),
        _txt = _doc.createElement('span');
    _div.className = 'weui-toast';
    _txt.className = 'txt';
    _div.insertAdjacentHTML('beforeend', '<div class="weui-toast-wrapper"><span class="icon"></span></div>');
    _div.querySelector('.weui-toast-wrapper').insertAdjacentElement('beforeend', _txt);
    _doc.body.appendChild(_div);
    _toast = {
      show: function show(_msg) {
        if (!_toast.isshowing) {
          _toast.isshowing = true;
          _txt.innerText = _msg;
          setTimeout(function () {
            _div.classList.add('show');
            setTimeout(function () {
              _div.classList.remove('show');
              _toast.isshowing = false;
            }, _time);
          }, 200);
        }
      },
      destroy: function destroy() {
        _toast = null;
        _doc.body.removeChild(_div);
      }
    };
  }
  return _toast;
};
var _scope = {};
_scope.toast = _makeAPI(function (data, resolve, reject) {
  if (data && data !== 'undefined') {
    var instance = _createToast(data);
    instance.show(data.msg);
    typeof data.msg !== 'undefined' ? resolve() : reject();
  }
});

var _loading = void 0;
var _getLoading = function _getLoading() {
  if (!_loading) {
    var _doc = document,
        _div = _doc.createElement('div');
    _div.className = 'h5-page-loadding';
    _div.insertAdjacentHTML('beforeend', '<div class="loadding-wrapper"><div class="loadding-logo"></div><div class="loadding-logo-turn"></div></div>');
    _doc.body.appendChild(_div);
    _loading = {
      show: function show() {
        _div.style.display = 'block';
      },
      close: function close() {
        _div.style.display = 'none';
      },
      destroy: function destroy() {
        _doc.body.removeChild(_div);
      }
    };
  }
  return _loading;
};

_scope.loading = _makeAPI(function (data, resolve, reject) {
  if (data && data !== 'undefined') {
    var instance = _getLoading();

    if (data.status) {
      instance.show();
    } else {
      instance.close();
    }

    typeof data.status !== 'undefined' ? resolve() : reject();
  }
});

_scope.exceptionTip = _makeAPI(function (data, resolve, reject) {
  if (data && data !== 'undefined') {
    if (data instanceof String) {
      try {
        data = JSON.parse(data);
      } catch (error) {
        console.log('data error: ', error);
      }
    }
    var BOXS = ['noresource', 'nopermission', 'nopermission', 'noresource', 'noresource', 'noresource', 'noresource', 'resourcedelete'];
    var _doc = document,
        _div = _doc.createElement('div'),
        icon = 'icon-big icon-big-' + BOXS[data.flag],
        _dom = void 0;
    _div.className = 'weui-popedom-box';
    _div.insertAdjacentHTML('beforeend', '<div class="con"><i class="' + icon + '"></i><p class="tip guide">' + data.msg + '</p></div>');
    if (data.dom) {
      _dom = data.dom;
      _dom.appendChild(_div);
    } else {
      _doc.body.appendChild(_div);
    }

    _doc.body.style.height = window.innerHeight || screen.height + 'px';
    _doc.body.style.overflow = 'hidden';

    typeof data.flag !== 'undefined' && typeof data.msg !== 'undefined' ? resolve(true) : reject(false);
  }
});

var _eventListener = {};
_scope.addEventListener = _makeAPI(function (data, resolve, reject) {
  if (data && data !== 'undefined' && data.type !== 'undefined' && data.func !== 'undefined') {
    _eventListener[data.type] || (_eventListener[data.type] = []);
    _eventListener[data.type].push(data.func);
    HWH5.eventListener[data.type] || (HWH5.eventListener[data.type] = function () {
      var _result = void 0;
      for (var i = 0; i < _eventListener[data.type].length; i++) {
        _result = _eventListener[data.type][i]();
        if (_result === false) {
          break;
        }
      }
      return _result;
    });
    resolve();
  } else {
    reject();
  }
});
// 删除监听函数
_scope.removeEventListener = function (data) {
  var type = data.type,
      func = data.func;
  if (_eventListener[type]) {
    for (var i = 0; i < _eventListener[type].length; i++) {
      if (_eventListener[type][i] === func) {
        _eventListener[type].splice(i, 1);
      }
    }
  }
};

// 获取监听函数
_scope.getEventListeners = _makeAPI(function (type, resolve, reject) {
  if (type === null) reject([]);
  resolve(_eventListener[type] || []);
});

var _init = function _init() {
  for (var i = 0; i < _h5apis2.default.length; i++) {
    var _apiName = _h5apis2.default[i].apiName;
    HWH5[_apiName] = _scope[_apiName];
  };
  HWH5.eventListener = [];
};
module.exports = _init;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HWH5 = {
  fetch: function fetch(url, opt) {
    if (typeof window === 'undefined') {
      return new Promise(function (resolve, reject) {
        resolve({
          json: function json() {
            return new Promise(function (resolve, reject) {
              resolve({
                url: url
              });
            });
          }
        });
      });
    }
    opt = opt || {};
    opt.credentials = 'include';
    opt.headers = opt.headers || {
      Accepts: 'application/json',
      'Content-Type': 'application/json'
    };
    return _global2.default.fetch.call(_global2.default, url, opt);
  },
  fetchInternet: function fetchInternet(url, opt) {
    if (typeof window === 'undefined') {
      return new Promise(function (resolve, reject) {
        resolve({
          json: function json() {
            return new Promise(function (resolve, reject) {
              resolve({
                url: url
              });
            });
          }
        });
      });
    }
    opt = opt || {};
    opt.credentials = 'include';
    opt.headers = opt.headers || {
      Accepts: 'application/json',
      'Content-Type': 'application/json'
    };
    return _global2.default.fetch.call(_global2.default, url, opt);
  },
  openWebview: function openWebview(payload) {
    var uri = payload.uri;

    console.log('openWebview:', uri);
    // 本地调试判断是否是以h5://开头的，如果是，需要切换为本地调试地址
    if (uri && uri.indexOf('h5://') >= 0) {
      if (uri.match(/welink.(\w+)/) === null) {
        console.log('输入地址有误，请检查地址的正确性，是否�?h5://welink.xx"开头�?);
        return;
      }
      // 入参别名
      var packageAlias = uri.match(/welink.(\w+)/)[0];
      // 当前项目地址
      var currentUrl = _global2.default.location.href;
      var path = currentUrl.substring(currentUrl.indexOf('apps') + 'apps'.length + 1);
      // 当前项目别名
      var cuurentPackageAlias = path.split('/')[0];
      // 判断打开不同应用，直接打开
      if (packageAlias !== cuurentPackageAlias) {
        _global2.default.location.href = uri;
      } else {
        // 按规则替换本地地址，打开
        var base = _global2.default.location.href.substring(0, _global2.default.location.href.indexOf(packageAlias) + packageAlias.length);
        var versionCode = path.split('/')[1];
        var htmlUri = uri.replace('h5://' + packageAlias, '');
        _global2.default.location.href = base + '/' + versionCode + htmlUri;
      }
    } else {
      // 非h5://地址开头，直接打开
      _global2.default.location.href = uri;
    }
  },
  goBack: function goBack() {
    if (_global2.default.history) {
      _global2.default.history.back();
    }
  },
  close: function close() {
    _global2.default.close();
  },
  navTitle: function navTitle(payload) {
    return new Promise(function (resolve, reject) {
      if (_global2.default.document) {
        var title = payload.title;

        _global2.default.document.title = title;
      }
      resolve({ status: true });
    });
  },
  callMethod: function callMethod(payload) {
    payload = JSON.parse(payload);
    var _payload = payload,
        funcName = _payload.funcName,
        callbackId = _payload.callbackId,
        data = _payload.data;

    if (callbackId) {
      var _data = {};
      var _localStorage = void 0;
      if (funcName === 'setCache' || funcName === 'getCache') {
        if ((typeof localStorage === 'undefined' ? 'undefined' : _typeof(localStorage)) === 'object') {
          _localStorage = localStorage;
        } else {
          throw new Error('Local Storage not available');
        }
      }
      if (funcName === 'fetch') {
        console.log(data);
      } else if (funcName === 'getAppInfo') {
        _data = {
          versionCode: '18',
          versionName: '1.0.18',
          environment: 'PRODUCTION',
          appName: 'WeLink',
          language: 'zh',
          fontSize: 17
        };
      } else if (payload.funcName === 'fetch') {
        _data = data;
      } else if (funcName === 'getUserInfo') {
        _data = {
          userType: 'HWE',
          employeeNumber: '00288308',
          uid: 'l00288308',
          userNameEN: 'luoyiming',
          userNameZH: '罗一�?
        };
      } else if (funcName === 'getNetworkStatus') {
        _data = {
          status: true,
          type: 1
        };
      } else if (funcName === 'setNavTitle') {
        _data = { status: true };
      } else if (funcName === 'goBack') {
        _data = { status: true };
      } else if (funcName === 'imagePicker') {
        if (data.flag === 1) {
          _data = {
            url: '本地上传后的临时路径'
          };
        } else if (data.flag === 2) {
          _data = {
            url: '拍照上传后的临时路径'
          };
        } else {
          _data = {
            info: '未定�?
          };
        }
      } else if (funcName === 'hwa') {
        _data = { status: true };
      } else if (funcName === 'log') {
        _data = { status: true };
      } else if (funcName === 'setCache') {
        data.data = btoa(unescape(encodeURIComponent(data.data)));
        _localStorage.setItem(data.key, data.data);
      } else if (funcName === 'getCache') {
        _data = _localStorage.getItem(data);
      } else if (funcName === 'downloadToMDM') {
        _data = { status: 1 };
      } else if (funcName === 'existInMDM') {
        _data = { status: 1 };
      } else if (funcName === 'openFileInMDM') {
        _data = { status: 1 };
      } else if (funcName === 'preventScreenshots') {
        _data = { status: 1 };
      } else if (funcName === 'emitEvent') {
        _data = { status: 1 };
      } else if (funcName === 'encryptFile') {
        _data = { filePath: 'xxx.yyy' };
      } else if (funcName === 'getMDMRootPath') {
        _data = { rootPath: '/welink/data/' };
      } else if (funcName === 'getDeviceInfo') {
        _data = {
          deviceID: '123456',
          deviceName: '414',
          osType: 'ios',
          osVersion: 'ios 11'
        };
      } else if (funcName === 'filePicker') {
        _data = { msg: 'success' };
      } else if (funcName === 'uploadFile') {
        _data = { docId: 'R3S128D09806809620171221173331966168409' };
      } else if (funcName === 'scanQRCode') {
        if (data.needResult === 1) {
          _data = { content: 'http://w3.huawei.com/m/xx/yy/zz' };
        }
      } else if (funcName === 'location') {
        _data = {
          latitude: 113.46,
          longitude: 22.27
        };
      } else if (funcName === 'zipsFiles') {
        _data = {
          tempFilePath: 'yyy.xlsx'
        };
      } else if (funcName === 'compressImage') {
        _data = {
          tempFilePath: 'image.png'
        };
      }
      _global2.default.HWH5.callbackNative(JSON.stringify({
        callbackId: callbackId,
        type: 'ok',
        data: _data
      }));
    }
  },
  openURI: function openURI(payload) {
    payload = JSON.parse(payload);
    if (payload.callbackId) {
      var _result = void 0;
      if (payload.url) {
        if (payload.url.indexOf('method://welink.contacts/getPersonInfo') > -1 || payload.url.indexOf('method://welink.contacts/getUserDetail') > -1) {
          _result = {
            w3id: 'l00288308'
          };
        } else if (payload.url.indexOf('method://welink.im/getGroupDetailList') > -1) {
          _result = {
            data: [{
              groupID: '10010',
              groupName: '华为第一群组',
              groupState: 1,
              groupType: 0,
              lastMessage: {
                body: '我是中国人我爱中�?,
                timeStamp: '1511429272522',
                senderid: 'l00288308'
              },
              headPath: '/welink/xx/xx',
              headMembers: '00288308,00172071,00209912'
            }, {
              groupID: '10011',
              groupName: '华为第二群组',
              groupState: 1,
              groupType: 0,
              lastMessage: {
                body: '我是华为人我爱华�?,
                timeStamp: '1511429272522',
                senderid: 'l00288308'
              },
              headPath: '/welink/xx/xx',
              headMembers: '00288308,00172071,00209912'
            }]
          };
        } else if (payload.url.indexOf('ui://welink.im/imCreateGroupChat') > -1) {
          _result = {
            status: 1
          };
        } else if (payload.url.indexOf('ui://welink.im/shareCardMessage') > -1) {
          _result = {
            status: 1
          };
        } else if (payload.url.indexOf('ui://welink.im/gotoChatController') > -1) {
          _result = {
            status: 1
          };
        }
      }

      _global2.default.HWH5.callbackNative(JSON.stringify({
        callbackId: payload.callbackId,
        type: 'ok',
        data: _result
      }));
    }
  }
};

module.exports = HWH5;

/***/ })
/******/ ]);
});
//# sourceMappingURL=hwh5.js.map
