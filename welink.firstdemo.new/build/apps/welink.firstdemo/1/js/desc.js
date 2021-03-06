webpackJsonp([0],{

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactWeui = __webpack_require__(256);

__webpack_require__(257);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Desc = function (_React$Component) {
  _inherits(Desc, _React$Component);

  function Desc() {
    _classCallCheck(this, Desc);

    return _possibleConstructorReturn(this, (Desc.__proto__ || Object.getPrototypeOf(Desc)).apply(this, arguments));
  }

  _createClass(Desc, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.HWH5.navTitle({ title: '框架说明' });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactWeui.Article,
          null,
          _react2.default.createElement(
            'h1',
            null,
            '\u6846\u67B6\u8BF4\u660E'
          ),
          _react2.default.createElement(
            'h2',
            null,
            '\u4E00\u5957 weui \u8BBE\u8BA1\u8BED\u8A00(\u9002\u914Dwelink\u98CE\u683C)\u548C React \u5B9E\u73B0\uFF1A'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'advantage' },
            _react2.default.createElement(
              'li',
              null,
              ' - \u9002\u914DWeLink\u4EA4\u4E92\u8BED\u8A00\u548C\u89C6\u89C9\u98CE\u683C\u3002'
            ),
            _react2.default.createElement(
              'li',
              null,
              ' - \u5F00\u7BB1\u5373\u7528\u7684\u9AD8\u8D28\u91CF React \u7EC4\u4EF6\u3002'
            ),
            _react2.default.createElement(
              'li',
              null,
              '- \u672C\u5730\u5F00\u53D1\u81EA\u52A8\u68C0\u6D4BWelink JSAPI\u65B0\u7248\u672C\u5E76\u96C6\u6210\u5230\u5F00\u53D1\u73AF\u5883\u3002'
            ),
            _react2.default.createElement(
              'li',
              null,
              ' - \u4F7F\u7528 eslint\uFF0C\u6309\u7167\u89C4\u5219\u7ED9\u51FA\u62A5\u544A\u7684\u4EE3\u7801\u68C0\u6D4B\u5DE5\u5177,\u907F\u514D\u4F4E\u7EA7\u9519\u8BEF\u548C\u7EDF\u4E00\u4EE3\u7801\u7684\u98CE\u683C\u3002'
            ),
            _react2.default.createElement(
              'li',
              null,
              ' - \u57FA\u4E8E npm + webpack + react + redux + less + jsapi + weui\uFF08mit license\uFF09\uFF0C \u9002\u914DWeLink\u98CE\u683C \u7684\u5FEB\u901F\u5F00\u53D1\u672C\u5730\u5316\u7684\u6846\u67B6\u3002'
            )
          )
        )
      );
    }
  }]);

  return Desc;
}(_react2.default.Component);

exports.default = Desc;
;

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(0), __webpack_require__(50)) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
	(global.WeUI = factory(global.React,global.ReactDOM));
}(this, (function (React,ReactDOM) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
ReactDOM = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;

var version = '1.1.2';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

{
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

{
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

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

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

{
  var invariant$1 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant_1(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning_1(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
      return emptyFunction_1.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunction_1.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning_1(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction_1.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
}
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames

  with fix with es6 export default
*/

var hasOwn = {}.hasOwnProperty;

function classNames() {
	var classes = [];

	for (var i = 0; i < arguments.length; i++) {
		var arg = arguments[i];
		if (!arg) continue;

		var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

		if (argType === 'string' || argType === 'number') {
			classes.push(arg);
		} else if (Array.isArray(arg)) {
			classes.push(classNames.apply(null, arg));
		} else if (argType === 'object') {
			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes.push(key);
				}
			}
		}
	}

	return classes.join(' ');
}

/**
 *  Button usage：OK(primary)、Cancel(default)、Warn(warn).
 *
 */

var Button = function (_React$Component) {
    inherits(Button, _React$Component);

    function Button() {
        classCallCheck(this, Button);
        return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    createClass(Button, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                component = _props.component,
                type = _props.type,
                size = _props.size,
                plain = _props.plain,
                className = _props.className,
                children = _props.children,
                others = objectWithoutProperties(_props, ['component', 'type', 'size', 'plain', 'className', 'children']);

            var Component$$1 = component ? component : this.props.href || type === 'vcode' ? 'a' : 'button';
            var cls = type === 'vcode' ? classNames('weui-vcode-btn', defineProperty({}, className, className)) : classNames(defineProperty({
                'weui-btn': true,
                'weui-btn_mini': size === 'small',
                'weui-btn_primary': type === 'primary' && !plain,
                'weui-btn_default': type === 'default' && !plain,
                'weui-btn_warn': type === 'warn',
                'weui-btn_plain-primary': type === 'primary' && plain,
                'weui-btn_plain-default': type === 'default' && plain,
                'weui-btn_disabled': this.props.disabled && !plain,
                'weui-btn_plain-disabled': this.props.disabled && plain
            }, className, className));

            return React__default.createElement(
                Component$$1,
                _extends({}, others, { className: cls }),
                children
            );
        }
    }]);
    return Button;
}(React__default.Component);

Button.propTypes = {
    disabled: propTypes.bool,
    /**
     * Options: primary, default, warn, vcode
     *
     */
    type: propTypes.string,
    /**
     * Options: normal, small
     *
     */
    size: propTypes.string
};
Button.defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal'
};

var ButtonArea = function (_Component) {
    inherits(ButtonArea, _Component);

    function ButtonArea() {
        classCallCheck(this, ButtonArea);
        return possibleConstructorReturn(this, (ButtonArea.__proto__ || Object.getPrototypeOf(ButtonArea)).apply(this, arguments));
    }

    createClass(ButtonArea, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                direction = _props.direction,
                children = _props.children,
                className = _props.className;

            var cls = classNames(defineProperty({
                'weui-btn-area': true,
                'weui-btn-area_inline': direction === 'horizontal'
            }, className, className));

            return React__default.createElement(
                'div',
                { className: cls },
                children
            );
        }
    }]);
    return ButtonArea;
}(React.Component);

ButtonArea.propTypes = {
    /**
     * Direction of Button Layout inside, Options: veritical, horizontal
     *
     */
    direction: propTypes.string
};
ButtonArea.defaultProps = {
    direction: 'vertical'
};

var PreviewButton = function PreviewButton(props) {
    var className = props.className,
        primary = props.primary,
        children = props.children,
        others = objectWithoutProperties(props, ['className', 'primary', 'children']);

    var cls = classNames(defineProperty({
        'weui-form-preview__btn': true,
        'weui-form-preview__btn_default': !primary,
        'weui-form-preview__btn_primary': primary
    }, className, className));

    return React__default.createElement(
        'a',
        _extends({ className: cls }, others),
        children
    );
};

PreviewButton.propTypes = {
    /**
     * Primary style of button
     *
     */
    primary: propTypes.bool
};

PreviewButton.defaultProps = {
    primary: false
};

/**
 * Created by jf on 15/10/27.
 */

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
var __DEV__ = "development" !== 'production';

var warning$2 = function warning() {};

if (__DEV__) {
  warning$2 = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

var warned = {};

function deprecationWarning(oldname, newname, link) {
  //avoid test warnings
  if (typeof global.it === 'function') {
    return;
  }

  var warnKey = oldname + '\n' + newname;
  if (warned[warnKey]) {
    return;
  }

  var message = '[React-WeUI] ' + oldname + ' is deprecated. Use ' + newname + ' instead. ' + oldname + ' will be remove in the next major version.';

  if (link) {
    message += '\nYou can read more about it at \n' + link;
  }

  warning$2(false, message);
  warned[warnKey] = true;
}

/**
 * Wrapper for `Cell`
 *
 */
var Cells = function Cells(props) {
    var children = props.children,
        className = props.className,
        access = props.access,
        others = objectWithoutProperties(props, ['children', 'className', 'access']);


    if (access) {
        deprecationWarning('Cells Access', 'Cell Access', 'https://github.com/weui/weui/wiki/%E5%9C%A81.0.0%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E4%B8%8A%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E6%94%B9%E5%8F%98#%E5%B8%A6%E7%AE%AD%E5%A4%B4%E7%9A%84%E5%88%97%E8%A1%A8%E7%94%B1%E4%B9%8B%E5%89%8D%E7%9A%84weui_cells_access%E6%94%B9%E4%B8%BA%E5%8D%95%E7%8B%AC%E6%8E%A7%E5%88%B6%E7%9A%84weui-cell_access');
    }

    var cls = classNames(defineProperty({
        'weui-cells': true
    }, className, className));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        children
    );
};

Cells.propTypes = {};

Cells.defaultProps = {};

/**
 * Cell consist of `CellBody`, `CellHeader` and `CellFooter` for flexible reason
 *
 */
var Cell = function Cell(props) {
    var className = props.className,
        children = props.children,
        access = props.access,
        href = props.href,
        link = props.link,
        component = props.component,
        htmlFor = props.htmlFor,
        others = objectWithoutProperties(props, ['className', 'children', 'access', 'href', 'link', 'component', 'htmlFor']);

    var DefaultComponent = href ? 'a' : htmlFor ? 'label' : 'div';
    var CellComponent = component ? component : DefaultComponent;

    var cls = classNames(defineProperty({
        'weui-cell': true,
        'weui-cell_access': access,
        'weui-cell_link': link
    }, className, className));

    return React__default.createElement(
        CellComponent,
        _extends({
            className: cls,
            href: href,
            htmlFor: htmlFor
        }, others),
        children
    );
};

Cell.propTypes = {
    /**
     * if cell should have arrow or link
     *
     */
    access: propTypes.bool,
    /**
     * if this cell body is link
     *
     */
    link: propTypes.bool,
    /**
     * pass in an component to replace Cell but apply same style
     *
     */
    component: propTypes.func
};

Cell.defaultProps = {
    access: false,
    link: false
};

/**
 * Heading for `Cells`
 *
 */
var CellsTitle = function CellsTitle(props) {
    var className = props.className,
        children = props.children,
        others = objectWithoutProperties(props, ['className', 'children']);

    var cls = classNames(defineProperty({
        'weui-cells__title': true
    }, className, className));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        children
    );
};

/**
 * Footer Information for `Cells`
 *
 */
var CellsTips = function CellsTips(props) {
    var className = props.className,
        children = props.children,
        others = objectWithoutProperties(props, ['className', 'children']);

    var cls = classNames(defineProperty({
        'weui-cells__tips': true
    }, className, className));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        children
    );
};

/**
 * Header of `Cell`
 *
 */
var CellHeader = function CellHeader(props) {
    var className = props.className,
        children = props.children,
        primary = props.primary,
        others = objectWithoutProperties(props, ['className', 'children', 'primary']);

    var cls = classNames(defineProperty({
        'weui-cell__hd': true,
        'weui-cell_primary': primary
    }, className, className));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        children
    );
};

CellHeader.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: propTypes.bool
};

CellHeader.defaultProps = {
    primary: false
};

/**
 * Content of `Cell`
 *
 */
var CellBody = function CellBody(props) {
    var className = props.className,
        children = props.children,
        primary = props.primary,
        others = objectWithoutProperties(props, ['className', 'children', 'primary']);

    var cls = classNames(defineProperty({
        'weui-cell__bd': true,
        'weui-cell_primary': primary
    }, className, className));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        children
    );
};

CellBody.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: propTypes.bool
};

CellBody.defaultProps = {
    primary: false
};

/**
 * Footer of `Cell`
 *
 */
var CellFooter = function CellFooter(props) {
    var className = props.className,
        children = props.children,
        primary = props.primary,
        others = objectWithoutProperties(props, ['className', 'children', 'primary']);

    var cls = classNames(defineProperty({
        'weui-cell__ft': true,
        'weui-cell_primary': primary
    }, className, className));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        children
    );
};

CellFooter.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: propTypes.bool
};

CellFooter.defaultProps = {
    primary: false
};

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */

var Mask$1 = function (_React$Component) {
    inherits(Mask, _React$Component);

    function Mask() {
        classCallCheck(this, Mask);
        return possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).apply(this, arguments));
    }

    createClass(Mask, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                transparent = _props.transparent,
                className = _props.className,
                others = objectWithoutProperties(_props, ['transparent', 'className']);

            var clz = classNames({
                'weui-mask': !transparent,
                'weui-mask_transparent': transparent
            }, className);

            return React__default.createElement('div', _extends({ className: clz }, others));
        }
    }]);
    return Mask;
}(React__default.Component);

Mask$1.propTypes = {
    /**
     * Whather mask should be transparent (no color)
     *
     */
    transparent: propTypes.bool
};
Mask$1.defaultProps = {
    transparent: false
};

/**
 * Created by jf on 15/10/27.
 */

/**
 * weui wrapper for form
 *
 */

var Form = function (_Component) {
    inherits(Form, _Component);

    function Form() {
        classCallCheck(this, Form);
        return possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    createClass(Form, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                radio = _props.radio,
                checkbox = _props.checkbox,
                others = objectWithoutProperties(_props, ['children', 'className', 'radio', 'checkbox']);

            var cls = classNames(defineProperty({
                'weui-cells': true,
                'weui-cells_form': !radio && !checkbox,
                'weui-cells_radio': radio,
                'weui-cells_checkbox': checkbox
            }, className, className));

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return Form;
}(React.Component);

Form.propTypes = {
    /**
     * if this form is use for radios
     *
     */
    radio: propTypes.bool,
    /**
     * if this form is use for checkbox
     *
     */
    checkbox: propTypes.bool
};
Form.defaultProps = {
    radio: false,
    checkbox: false
};

/**
 * form wrapper for `Cell`
 *
 */

var FormCell = function (_Component) {
    inherits(FormCell, _Component);

    function FormCell() {
        classCallCheck(this, FormCell);
        return possibleConstructorReturn(this, (FormCell.__proto__ || Object.getPrototypeOf(FormCell)).apply(this, arguments));
    }

    createClass(FormCell, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                radio = _props.radio,
                checkbox = _props.checkbox,
                vcode = _props.vcode,
                warn = _props.warn,
                select = _props.select,
                selectPos = _props.selectPos,
                others = objectWithoutProperties(_props, ['className', 'children', 'radio', 'checkbox', 'vcode', 'warn', 'select', 'selectPos']);

            var cellDomProps = Object.assign({}, others);
            delete cellDomProps.switch;
            var cls = classNames(defineProperty({
                'weui-cell': true,
                'weui-cell_vcode': vcode,
                'weui-cell_warn': warn,
                'weui-cell_switch': this.props.switch,
                'weui-cell_select': select,
                'weui-cell_select-before': selectPos === 'before',
                'weui-cell_select-after': selectPos === 'after',
                'weui-check__label': radio || checkbox
            }, className, className));

            if (radio || checkbox) {
                return React__default.createElement(
                    'label',
                    _extends({ className: cls }, cellDomProps),
                    children
                );
            } else {
                return React__default.createElement(
                    'div',
                    _extends({ className: cls }, cellDomProps),
                    children
                );
            }
        }
    }]);
    return FormCell;
}(React.Component);

FormCell.propTypes = {
    /**
     * if cell use for vcode
     *
     */
    vcode: propTypes.bool,
    /**
     * display warn style of cell
     *
     */
    warn: propTypes.bool,
    /**
     * if cell use for radio
     *
     */
    radio: propTypes.bool,
    /**
     * if cell use for checkbox
     *
     */
    checkbox: propTypes.bool,
    /**
     * if cell use for switch checkbox
     *
     */
    'switch': propTypes.bool,
    /**
     * if cell use for select
     *
     */
    select: propTypes.bool,
    /**
     * select position, options: before, after
     *
     */
    selectPos: propTypes.string
};
FormCell.defaultProps = {
    vcode: false,
    warn: false,
    radio: false,
    checkbox: false,
    select: false,
    'switch': false,
    selectPos: undefined
};

/**
 * weui wrapper for textarea
 *
 */

var TextArea = function (_Component) {
    inherits(TextArea, _Component);

    function TextArea() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, TextArea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            textCounter: _this.props.defaultValue ? _this.props.defaultValue.length : 0
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(TextArea, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ textCounter: e.target.value.length });

            //forward event to props if any
            if (this.props.onChange) this.props.onChange(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                showCounter = _props.showCounter,
                maxLength = _props.maxLength,
                onChange = _props.onChange,
                others = objectWithoutProperties(_props, ['className', 'children', 'showCounter', 'maxLength', 'onChange']);

            var cls = classNames(defineProperty({
                'weui-textarea': true
            }, className, className));

            return React__default.createElement(
                'div',
                null,
                React__default.createElement(
                    'textarea',
                    _extends({
                        className: cls,
                        maxLength: maxLength,
                        onChange: this.handleChange.bind(this)
                    }, others),
                    children
                ),
                showCounter ? React__default.createElement(
                    'div',
                    { className: 'weui-textarea-counter' },
                    React__default.createElement(
                        'span',
                        null,
                        this.state.textCounter
                    ),
                    maxLength ? '/' + maxLength : false
                ) : false
            );
        }
    }]);
    return TextArea;
}(React.Component);

TextArea.propTypes = {
    /**
     * display word counter
     *
     */
    showCounter: propTypes.bool,
    /**
     * max character allow for textarea
     *
     */
    maxLength: propTypes.number,
    defaultValue: propTypes.string
};
TextArea.defaultProps = {
    showCounter: true,
    defaultValue: undefined
};

/**
 * WeUI Input wrapper for `input`
 *
 */
var Input = function Input(props) {
    var className = props.className,
        others = objectWithoutProperties(props, ['className']);

    var cls = classNames(defineProperty({
        'weui-input': true
    }, className, className));

    return React__default.createElement(
        'div',
        null,
        React__default.createElement('input', _extends({ className: cls }, others)),
        React__default.createElement('span', { className: 'weui-icon-checked' })
    );
};

Input.propTypes = {
    defaultValue: propTypes.string
};

Input.defaultProps = {
    defaultValue: undefined
};

/**
 * weui switch style for checkbox
 *
 */
var Switch = function Switch(props) {
    var className = props.className,
        others = objectWithoutProperties(props, ['className']);

    var cls = classNames(defineProperty({
        'weui-switch': true
    }, className, className));

    return React__default.createElement(
        'div',
        null,
        React__default.createElement('input', _extends({ className: cls, type: 'checkbox' }, others)),
        React__default.createElement('span', { className: 'weui-icon-checked' })
    );
};

/**
 * weui wrapper for radio
 *
 */
var Radio = function Radio(props) {
    var className = props.className,
        others = objectWithoutProperties(props, ['className']);

    var cls = classNames(defineProperty({
        'weui-check': true
    }, className, className));

    return React__default.createElement(
        'div',
        null,
        React__default.createElement('input', _extends({ className: cls, type: 'radio' }, others)),
        React__default.createElement('span', { className: 'weui-icon-checked' })
    );
};

/**
 * weui wrapper for checkbox
 *
 */
var Checkbox = function Checkbox(props) {
    var className = props.className,
        others = objectWithoutProperties(props, ['className']);

    var cls = classNames(defineProperty({
        'weui-check': true
    }, className, className));

    return React__default.createElement(
        'div',
        null,
        React__default.createElement('input', _extends({ className: cls, type: 'checkbox' }, others)),
        React__default.createElement('span', { className: 'weui-icon-checked' })
    );
};

/**
 * weui wrapper for select
 *
 */

var Select = function (_Component) {
    inherits(Select, _Component);

    function Select() {
        classCallCheck(this, Select);
        return possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
    }

    createClass(Select, [{
        key: 'renderData',
        value: function renderData(data) {
            return data.map(function (item, i) {
                return React__default.createElement(
                    'option',
                    _extends({
                        key: i,
                        value: item.value
                    }, item),
                    item.label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                data = _props.data,
                children = _props.children,
                others = objectWithoutProperties(_props, ['className', 'data', 'children']);

            var cls = classNames(defineProperty({
                'weui-select': true
            }, className, className));

            return React__default.createElement(
                'select',
                _extends({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);
    return Select;
}(React.Component);

Select.propTypes = {
    /**
     * object arrays of options, `value` and `label` properties is required
     *
     */
    data: propTypes.array
};
Select.defaultProps = {
    data: []
};

var deprecateValue = {
    'safe_success': 'safe-success',
    'safe_warn': 'safe-warn',
    'success_circle': 'success-circle',
    'success_no_circle': 'success-no-circle',
    'waiting_circle': 'waiting-circle',
    'info_circle': 'info-circle'
};

/**
 * WeUI Icons
 *
 */

var Icon$1 = function (_React$Component) {
    inherits(Icon, _React$Component);

    function Icon() {
        classCallCheck(this, Icon);
        return possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    createClass(Icon, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                value = _props.value,
                size = _props.size,
                className = _props.className,
                primary = _props.primary,
                others = objectWithoutProperties(_props, ['value', 'size', 'className', 'primary']);


            if (Object.keys(deprecateValue).indexOf(value) !== -1) {
                deprecationWarning('Icon ' + value, 'Icon ' + deprecateValue[value]);
            }

            var cls = classNames((_classNames = {}, defineProperty(_classNames, 'weui-icon-' + value, value !== 'loading'), defineProperty(_classNames, 'weui-icon_msg', size === 'large' && !primary), defineProperty(_classNames, 'weui-icon_msg-primary', size === 'large' && primary), defineProperty(_classNames, 'weui-loading', value === 'loading'), defineProperty(_classNames, className, className), _classNames));

            return React__default.createElement('i', _extends({}, others, { className: cls }));
        }
    }]);
    return Icon;
}(React__default.Component);

Icon$1.propTypes = {
    /**
     * types of [weui icons](https://github.com/weui/weui/wiki/Icon)
     *
     */
    value: propTypes.string,
    /**
     * size of icon, options: small/large
     *
     */
    size: propTypes.string
};
Icon$1.defaultProps = {
    value: 'success',
    size: 'small'
};

/**
 * Created by jf on 15/11/3.
 */

/**
 * weui style uploader
 *
 */

var Uploader = function (_Component) {
    inherits(Uploader, _Component);

    function Uploader() {
        classCallCheck(this, Uploader);
        return possibleConstructorReturn(this, (Uploader.__proto__ || Object.getPrototypeOf(Uploader)).apply(this, arguments));
    }

    createClass(Uploader, [{
        key: 'detectVerticalSquash',


        /**
         * Detecting vertical squash in loaded image.
         * Fixes a bug which squash image vertically while drawing into canvas for some images.
         * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
         * With react fix by n7best
         */
        value: function detectVerticalSquash(img) {
            var data = void 0;
            var ih = img.naturalHeight;
            var canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = ih;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            try {
                // Prevent cross origin error
                data = ctx.getImageData(0, 0, 1, ih).data;
            } catch (err) {
                // hopeless, assume the image is well and good.
                console.log('Cannot check verticalSquash: CORS?');
                return 1;
            }
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                } else {
                    sy = py;
                }
                py = ey + sy >> 1;
            }
            var ratio = py / ih;
            return ratio === 0 ? 1 : ratio;
        }
    }, {
        key: 'handleFile',
        value: function handleFile(file, cb) {
            var _this2 = this,
                _arguments = arguments;

            var reader = void 0;
            if (typeof FileReader !== 'undefined') {
                reader = new FileReader();
            } else {
                if (window.FileReader) reader = new window.FileReader();
            }

            reader.onload = function (e) {
                var img = void 0;
                if (typeof Image !== 'undefined') {
                    img = new Image();
                } else {
                    if (window.Image) img = new window.Image();
                }
                img.onload = function () {
                    var w = Math.min(_this2.props.maxWidth, img.width);
                    var h = img.height * (w / img.width);
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');

                    //check canvas support, for test
                    if (ctx) {
                        //patch subsampling bug
                        //http://jsfiddle.net/gWY2a/24/
                        var drawImage = ctx.drawImage;
                        ctx.drawImage = function (_img, sx, sy, sw, sh, dx, dy, dw, dh) {
                            var vertSquashRatio = 1;
                            // Detect if img param is indeed image
                            if (!!_img && _img.nodeName === 'IMG') {
                                vertSquashRatio = _this2.detectVerticalSquash(_img);
                                if (typeof sw === 'undefined') sw = _img.naturalWidth;
                                if (typeof sh === 'undefined') sh = _img.naturalHeight;
                            }

                            // Execute several cases (Firefox does not handle undefined as no param)
                            // by call (apply is bad performance)
                            if (_arguments.length === 9) drawImage.call(ctx, _img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);else if (typeof sw !== 'undefined') drawImage.call(ctx, _img, sx, sy, sw, sh / vertSquashRatio);else drawImage.call(ctx, _img, sx, sy);
                        };

                        canvas.width = w;
                        canvas.height = h;
                        ctx.drawImage(img, 0, 0, w, h);

                        var base64 = canvas.toDataURL('image/png');

                        cb({
                            nativeFile: file,
                            lastModified: file.lastModified,
                            lastModifiedDate: file.lastModifiedDate,
                            name: file.name,
                            size: file.size,
                            type: file.type,
                            data: base64
                        }, e);
                    } else {
                        cb(file, e);
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            var _this3 = this;

            var langs = this.props.lang;
            var _files = e.target.files;

            if (_files.length === 0) return;

            if (this.props.files.length >= this.props.maxCount) {
                this.props.onError(langs.maxError(this.props.maxCount));
                return;
            }

            for (var key in _files) {
                if (!_files.hasOwnProperty(key)) continue;
                var file = _files[key];

                this.handleFile(file, function (_file, _e) {
                    if (_this3.props.onChange) _this3.props.onChange(_file, _e);
                    ReactDOM.findDOMNode(_this3.refs.uploader).value = '';
                }, e);
            }
        }
    }, {
        key: 'renderFiles',
        value: function renderFiles() {
            var _this4 = this;

            return this.props.files.map(function (file, idx) {
                var url = file.url,
                    error = file.error,
                    status = file.status,
                    onClick = file.onClick,
                    others = objectWithoutProperties(file, ['url', 'error', 'status', 'onClick']);

                var fileStyle = {
                    backgroundImage: 'url(' + url + ')'
                };
                var cls = classNames({
                    'weui-uploader__file': true,
                    'weui-uploader__file_status': error || status
                });

                if (onClick) {
                    deprecationWarning('File onClick', 'Uploader onFileClick');
                }

                var handleFileClick = onClick ? onClick : function (e) {
                    if (_this4.props.onFileClick) _this4.props.onFileClick(e, file, idx);
                };

                return React__default.createElement(
                    'li',
                    _extends({ className: cls, key: idx, style: fileStyle, onClick: handleFileClick }, others),
                    error || status ? React__default.createElement(
                        'div',
                        { className: 'weui-uploader__file-content' },
                        error ? React__default.createElement(Icon$1, { value: 'warn' }) : status
                    ) : false
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                title = _props.title,
                maxCount = _props.maxCount,
                files = _props.files,
                onChange = _props.onChange,
                onFileClick = _props.onFileClick,
                others = objectWithoutProperties(_props, ['className', 'title', 'maxCount', 'files', 'onChange', 'onFileClick']);

            var inputProps = Object.assign({}, others);
            delete inputProps.lang;
            delete inputProps.onError;
            delete inputProps.maxWidth;

            var cls = classNames(defineProperty({
                'weui-uploader': true
            }, className, className));

            return React__default.createElement(
                'div',
                { className: cls },
                React__default.createElement(
                    'div',
                    { className: 'weui-uploader__hd' },
                    React__default.createElement(
                        'p',
                        { className: 'weui-uploader__title' },
                        title
                    ),
                    React__default.createElement(
                        'div',
                        { className: 'weui-uploader__info' },
                        files.length,
                        '/',
                        maxCount
                    )
                ),
                React__default.createElement(
                    'div',
                    { className: 'weui-uploader__bd' },
                    React__default.createElement(
                        'ul',
                        { className: 'weui-uploader__files' },
                        this.renderFiles()
                    ),
                    React__default.createElement(
                        'div',
                        { className: 'weui-uploader__input-box' },
                        React__default.createElement('input', _extends({
                            ref: 'uploader' //let react to reset after onchange
                            , className: 'weui-uploader__input',
                            type: 'file',
                            accept: 'image/*',
                            capture: 'camera',
                            onChange: this.handleChange.bind(this)
                        }, inputProps))
                    )
                )
            );
        }
    }]);
    return Uploader;
}(React.Component);

Uploader.propTypes = {
    /**
     * title of uploader
     *
     */
    title: propTypes.string,
    /**
     * max amount of allow file
     *
     */
    maxCount: propTypes.number,
    /**
     * maxWidth of image for uploader to compress
     *
     */
    maxWidth: propTypes.number,
    /**
     * when file change, pass property `(event, file)`
     *
     */
    onChange: propTypes.func,
    /**
     * when there is error, pass property `msg`
     *
     */
    onError: propTypes.func,
    /**
     * array of photos thumbnails to indicator status, include property `url`, `status`, `error`
     *
     */
    files: propTypes.array,
    /**
     * languages object, with property `maxError`
     *
     */
    lang: propTypes.object
};
Uploader.defaultProps = {
    title: '图片上传',
    maxCount: 4,
    maxWidth: 500,
    files: [],
    onChange: undefined,
    onError: undefined,
    lang: { maxError: function maxError(maxCount) {
            return '\u6700\u591A\u53EA\u80FD\u4E0A\u4F20' + maxCount + '\u5F20\u56FE\u7247';
        } }
};

/**
 * image wrapper for vcode
 *
 */
var VCode = function VCode(props) {
    var className = props.className,
        others = objectWithoutProperties(props, ['className']);

    var cls = classNames(defineProperty({
        'weui-vcode-img': true
    }, className, className));

    return React__default.createElement(
        'div',
        null,
        React__default.createElement('img', _extends({ className: cls }, others))
    );
};

/**
 * Agreement style checkbox
 *
 */
var Agreement = function Agreement(props) {
    var className = props.className,
        children = props.children,
        id = props.id,
        others = objectWithoutProperties(props, ['className', 'children', 'id']);

    var cls = classNames(defineProperty({
        'weui-agree': true
    }, className, className));

    return React__default.createElement(
        'label',
        { className: cls, htmlFor: id },
        React__default.createElement('input', _extends({ id: id, type: 'checkbox', className: 'weui-agree__checkbox' }, others)),
        React__default.createElement(
            'span',
            { className: 'weui-agree__text' },
            children
        )
    );
};

//1.0.0 components

/**
 * Preview Wrapper consists of `PreviewHeader`, `PreviewBody`, `PreviewFooter`, `PreviewItem`
 *
 */
var Preview = function Preview(props) {
    var className = props.className,
        children = props.children,
        others = objectWithoutProperties(props, ['className', 'children']);

    var cls = classNames(defineProperty({
        'weui-form-preview': true
    }, className, className));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        children
    );
};

//1.0.0 components

var PreviewHeader = function PreviewHeader(props) {
    var className = props.className,
        children = props.children,
        others = objectWithoutProperties(props, ['className', 'children']);

    var cls = classNames(defineProperty({
        'weui-form-preview__hd': true
    }, className, className));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        children
    );
};

//1.0.0 components

/**
 * Content of Preview
 *
 */
var PreviewBody = function PreviewBody(props) {
    var className = props.className,
        children = props.children,
        others = objectWithoutProperties(props, ['className', 'children']);

    var cls = classNames(defineProperty({
        'weui-form-preview__bd': true
    }, className, className));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        children
    );
};

//1.0.0 components

/**
 * Footer of Preview, consists of actions
 *
 */
var PreviewFooter = function PreviewFooter(props) {
    var className = props.className,
        children = props.children,
        others = objectWithoutProperties(props, ['className', 'children']);

    var cls = classNames(defineProperty({
        'weui-form-preview__ft': true
    }, className, className));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        children
    );
};

//1.0.0 components

/**
 * Preview Item for all purpose usage
 *
 */
var PreviewItem = function PreviewItem(props) {
    var className = props.className,
        label = props.label,
        value = props.value,
        others = objectWithoutProperties(props, ['className', 'label', 'value']);

    var cls = classNames(defineProperty({
        'weui-form-preview__item': true
    }, className, className));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        React__default.createElement(
            'label',
            { className: 'weui-form-preview__label' },
            label
        ),
        React__default.createElement(
            'em',
            { className: 'weui-form-preview__value' },
            value
        )
    );
};

PreviewItem.propTypes = {
    /**
     * The label of item
     *
     */
    label: propTypes.string,
    /**
     * Value of the label
     *
     */
    value: propTypes.string

};

PreviewItem.defaultProps = {
    label: false,
    value: false
};

/**
 *  A Slider is an element used to set a value, good choice when users think it as relative quantity rather than value
 *
 */

var Slider = function (_Component) {
    inherits(Slider, _Component);

    function Slider(props) {
        classCallCheck(this, Slider);

        var _this = possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        _this.state = {
            value: _this.props.value ? _this.props.value : _this.props.defaultValue ? _this.props.defaultValue : 0,
            controlled: typeof _this.props.value !== 'undefined',
            totalWidth: 0,

            touching: false,
            ogX: 0,
            touchID: undefined,
            percent: _this.props.value ? parseInt(_this.props.value / (_this.props.max - _this.props.min) * 100) : _this.props.defaultValue ? parseInt(_this.props.defaultValue / (_this.props.max - _this.props.min) * 100) : 0,
            animating: false
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.updateValue = _this.updateValue.bind(_this);
        return _this;
    }

    createClass(Slider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.state.value === 0) this.updateValue();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.state.controlled) {
                if (nextProps.value <= this.props.max && nextProps.value >= this.props.min) {
                    var percent = parseInt(nextProps.value / (this.props.max - this.props.min) * 100);
                    this.setState({ value: nextProps.value, percent: percent });
                }
            }
        }
    }, {
        key: 'updateValue',
        value: function updateValue() {
            var _this2 = this;

            var snap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var value = 0;
            var percent = this.state.percent,
                _props = this.props,
                min = _props.min,
                max = _props.max,
                step = _props.step,
                onChange = _props.onChange,
                steps = parseInt((max - min) / step),
                perPercent = parseInt(100 / steps);


            if (percent === 100) {
                value = max;
            } else if (percent === 0) {
                value = min;
            } else {
                for (var i = 0; i < steps; i++) {
                    //over 50 margin than next
                    if (percent > i * perPercent && percent <= (i + 1) * perPercent) {
                        value = percent - i * perPercent > perPercent / 2 ? (i + 1) * step + min : i * step + min;
                    }
                }
            }

            if (value !== this.state.value) {
                this.setState({ value: value });
                if (onChange) onChange(value);
            }

            if (snap) {
                this.setState({
                    percent: value === min ? 0 : value === max ? 100 : (value - min) / step * perPercent,
                    animating: true
                }, function () {
                    return _this2.setState({ animating: false });
                });
            }
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.props.disabled) return;
            var barDOM = ReactDOM.findDOMNode(this.refs.bar);
            this.setState({
                touching: true,
                touchId: e.targetTouches[0].identifier,
                totalWidth: barDOM.clientWidth,
                ogX: e.targetTouches[0].pageX,
                ogPercent: this.state.percent
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            var _this3 = this;

            if (!this.state.touching || this.props.disabled) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            //prevent move background
            e.preventDefault();

            var pageX = e.targetTouches[0].pageX;
            var diffX = pageX - this.state.ogX;

            var percent = parseInt(diffX / this.state.totalWidth * 100) + this.state.ogPercent;
            percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;

            this.setState({
                percent: percent
            }, function () {
                return _this3.updateValue();
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            if (!this.state.touching || this.props.disabled) return;

            if (this.props.snapToValue) {
                this.updateValue(true);
            }

            this.setState({
                touching: false,
                ogX: 0,
                touchId: undefined,
                ogPercent: 0
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                max = _props2.max,
                min = _props2.min,
                step = _props2.step,
                showValue = _props2.showValue,
                value = _props2.value,
                disabled = _props2.disabled,
                defaultValue = _props2.defaultValue,
                onChange = _props2.onChange,
                snapToValue = _props2.snapToValue,
                domProps = objectWithoutProperties(_props2, ['className', 'max', 'min', 'step', 'showValue', 'value', 'disabled', 'defaultValue', 'onChange', 'snapToValue']);


            var cls = classNames('weui-slider-box', className);

            var trackStyles = {
                width: this.state.percent + '%'
            };

            var handlerStyles = {
                left: this.state.percent + '%',
                transition: this.state.animating ? 'transform .3s' : 'none'
            };

            return React__default.createElement(
                'div',
                { className: cls },
                React__default.createElement(
                    'div',
                    _extends({ className: 'weui-slider' }, domProps),
                    React__default.createElement(
                        'div',
                        { className: 'weui-slider__inner', ref: 'bar' },
                        React__default.createElement('div', {
                            style: trackStyles,
                            className: 'weui-slider__track' }),
                        React__default.createElement('div', {
                            style: handlerStyles,
                            onTouchStart: this.handleTouchStart,
                            onTouchMove: this.handleTouchMove,
                            onTouchEnd: this.handleTouchEnd,
                            className: 'weui-slider__handler' })
                    )
                ),
                showValue ? React__default.createElement(
                    'div',
                    { className: 'weui-slider-box__value' },
                    this.state.value
                ) : false
            );
        }
    }]);
    return Slider;
}(React.Component);

Slider.propTypes = {
    /**
     * max value of the slider
     *
     */
    max: propTypes.number,
    /**
     * min value of the slider
     *
     */
    min: propTypes.number,
    /**
     * the offset between two number in the slider
     *
     */
    step: propTypes.number,
    /**
     * display the value indicator
     *
     */
    showValue: propTypes.bool,
    /**
     * whether input is disabled
     *
     */
    disabled: propTypes.bool,
    /**
     * slider value when use as controll element
     *
     */
    value: propTypes.number,
    /**
     * slider value when use as non-controll element, use with onChange
     *
     */
    defaultValue: propTypes.number,
    /**
     * callback when slider value change, pass value and event instance
     *
     */
    onChange: propTypes.func,
    /**
     * callback when slider value change, pass value and event instance
     *
     */
    snapToValue: propTypes.bool
};
Slider.defaultProps = {
    max: 100,
    min: 0,
    step: 1,
    showValue: true,
    disabled: false,
    defaultValue: 0,
    snapToValue: true
};

/**
 * WeUI Label Wrapper
 *
 */
var Label$1 = function Label(props) {
    var className = props.className,
        others = objectWithoutProperties(props, ['className']);

    var cls = classNames(defineProperty({
        'weui-label': true
    }, className, className));

    return React__default.createElement(
        'div',
        null,
        React__default.createElement('label', _extends({ className: cls }, others))
    );
};

/**
 * Created by yjcxy12 on 16/1/22.
 */

/**
 *  pop out indicator to inform users
 *
 */

var Toast$1 = function (_Component) {
    inherits(Toast, _Component);

    function Toast() {
        classCallCheck(this, Toast);
        return possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));
    }

    createClass(Toast, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                icon = _props.icon,
                show = _props.show,
                children = _props.children,
                iconSize = _props.iconSize,
                others = objectWithoutProperties(_props, ['className', 'icon', 'show', 'children', 'iconSize']);

            var cls = classNames('weui-toast', defineProperty({}, className, className));
            return React__default.createElement(
                'div',
                { style: { display: show ? 'block' : 'none' } },
                React__default.createElement(Mask$1, { transparent: true }),
                React__default.createElement(
                    'div',
                    _extends({ className: cls }, others),
                    React__default.createElement(Icon$1, { value: icon, size: iconSize, className: 'weui-icon_toast' }),
                    React__default.createElement(
                        'p',
                        { className: 'weui-toast_content' },
                        children
                    )
                )
            );
        }
    }]);
    return Toast;
}(React.Component);

Toast$1.propTypes = {
    /**
     * Icon Value
     *
     */
    icon: propTypes.string,
    /**
     * Icon Size
     *
     */
    iconSize: propTypes.string,
    /**
     * display toast
     *
     */
    show: propTypes.bool
};
Toast$1.defaultProps = {
    icon: 'toast',
    show: false
};

/**
 *  progress bar
 *
 */
var Progress$1 = function Progress(props) {
    var className = props.className,
        showCancel = props.showCancel,
        value = props.value,
        _onClick = props.onClick,
        others = objectWithoutProperties(props, ['className', 'showCancel', 'value', 'onClick']);

    var cls = classNames(defineProperty({
        'weui-progress': true
    }, className, className));

    var pgWdith = value > 100 ? 100 : value < 0 ? 0 : value;

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        React__default.createElement(
            'div',
            { className: 'weui-progress__bar' },
            React__default.createElement('div', { className: 'weui-progress__inner-bar', style: { width: pgWdith + '%' } })
        ),
        showCancel ? React__default.createElement(
            'a',
            { href: 'javascript:;', className: 'weui-progress__opr', onClick: function onClick(e) {
                    if (_onClick) _onClick(e);
                } },
            React__default.createElement(Icon$1, { value: 'cancel' })
        ) : false
    );
};

Progress$1.propTypes = {
    /**
     * value of the bar
     *
     */
    value: propTypes.number,
    /**
     * enable cancel button
     *
     */
    showCancel: propTypes.bool
};

Progress$1.defaultProps = {
    value: 0,
    showCancel: true
};

/**
 * Used to display a collection of actions that contain a set of interactivity, including descriptions, links, and so on. Popup from the bottom, generally used to respond to user clicks on the page.
 */

var ActionSheet$1 = function (_Component) {
    inherits(ActionSheet, _Component);

    function ActionSheet(props) {
        classCallCheck(this, ActionSheet);

        var _this = possibleConstructorReturn(this, (ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).call(this, props));

        _this.handleMaskClick = _this.handleMaskClick.bind(_this);
        return _this;
    }

    createClass(ActionSheet, [{
        key: 'renderMenuItem',
        value: function renderMenuItem() {
            return this.props.menus.map(function (menu, idx) {
                var label = menu.label,
                    className = menu.className,
                    others = objectWithoutProperties(menu, ['label', 'className']);

                var cls = classNames(defineProperty({
                    'weui-actionsheet__cell': true
                }, className, className));

                return React__default.createElement(
                    'div',
                    _extends({ key: idx }, others, { className: cls }),
                    label
                );
            });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            return this.props.actions.map(function (action, idx) {
                var label = action.label,
                    className = action.className,
                    others = objectWithoutProperties(action, ['label', 'className']);

                var cls = classNames(defineProperty({
                    'weui-actionsheet__cell': true
                }, className, className));

                return React__default.createElement(
                    'div',
                    _extends({ key: idx }, others, { className: cls }),
                    label
                );
            });
        }
    }, {
        key: 'handleMaskClick',
        value: function handleMaskClick(e) {
            if (this.props.onRequestClose) this.props.onRequestClose(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                show = _props.show,
                type = _props.type,
                onRequestClose = _props.onRequestClose,
                menus = _props.menus,
                actions = _props.actions,
                others = objectWithoutProperties(_props, ['show', 'type', 'onRequestClose', 'menus', 'actions']);

            var cls = classNames({
                'weui-actionsheet': true,
                'weui-actionsheet_toggle': show
            });

            var styleType = type ? type : 'ios';

            return React__default.createElement(
                'div',
                {
                    className: styleType === 'android' ? 'weui-skin_android' : ''
                },
                React__default.createElement(Mask$1, { style: { display: show ? 'block' : 'none' }, onClick: this.handleMaskClick }),
                React__default.createElement(
                    'div',
                    _extends({ className: cls }, others),
                    React__default.createElement(
                        'div',
                        { className: 'weui-actionsheet__menu' },
                        this.renderMenuItem()
                    ),
                    React__default.createElement(
                        'div',
                        { className: 'weui-actionsheet__action' },
                        this.renderActions()
                    )
                )
            );
        }
    }]);
    return ActionSheet;
}(React.Component);

ActionSheet$1.propTypes = {
    /**
     * Array of Objects for menus, `label` property is Required
     *
     */
    menus: propTypes.array,
    /**
     * Array of Objects for actions, `label` property is Required
     *
     */
    actions: propTypes.array,
    /**
     * To display ActionSheet
     *
     */
    show: propTypes.bool,
    /**
     * Function triggers when user click on the mask
     *
     */
    onRequestClose: propTypes.func,
    /**
     * style: ios/android
     */
    type: propTypes.string
};
ActionSheet$1.defaultProps = {
    type: '',
    menus: [],
    actions: [],
    show: false
};

/**
 * Created by jf on 15/11/26.
 */

/**
 * Modals provide feedback to user
 *
 */

var Dialog$1 = function (_Component) {
    inherits(Dialog, _Component);

    function Dialog(props) {
        classCallCheck(this, Dialog);

        var _this = possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

        _this.state = {
            isAndroid: ''
        };
        return _this;
    }

    createClass(Dialog, [{
        key: 'renderButtons',
        value: function renderButtons() {
            return this.props.buttons.map(function (action, idx) {
                var type = action.type,
                    label = action.label,
                    others = objectWithoutProperties(action, ['type', 'label']);

                var className = classNames({
                    'weui-dialog__btn': true,
                    'weui-dialog__btn_default': type === 'default',
                    'weui-dialog__btn_primary': type === 'primary'
                });

                return React__default.createElement(
                    'a',
                    _extends({ key: idx, href: 'javascript:;' }, others, { className: className }),
                    label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                show = _props.show,
                className = _props.className,
                children = _props.children,
                buttons = _props.buttons,
                type = _props.type,
                autoDectect = _props.autoDectect,
                others = objectWithoutProperties(_props, ['title', 'show', 'className', 'children', 'buttons', 'type', 'autoDectect']);

            var styleType = type ? type : 'ios';
            var cls = classNames('weui-dialog', defineProperty({
                'weui-skin_android': styleType === 'android'
            }, className, className));

            return React__default.createElement(
                'div',
                { style: { display: show ? 'block' : 'none' } },
                React__default.createElement(Mask$1, null),
                React__default.createElement(
                    'div',
                    _extends({ className: cls }, others),
                    title ? React__default.createElement(
                        'div',
                        { className: 'weui-dialog__hd' },
                        React__default.createElement(
                            'strong',
                            { className: 'weui-dialog__title' },
                            title
                        )
                    ) : false,
                    React__default.createElement(
                        'div',
                        { className: 'weui-dialog__bd' },
                        children
                    ),
                    React__default.createElement(
                        'div',
                        { className: 'weui-dialog__ft' },
                        this.renderButtons()
                    )
                )
            );
        }
    }]);
    return Dialog;
}(React.Component);

Dialog$1.propTypes = {
    /**
     * Object Arrays of buttons, `label` property is require
     *
     */
    buttons: propTypes.array,
    /**
     * to display the dialog
     *
     */
    show: propTypes.bool,
    /**
     * Title of dialog
     *
     */
    title: propTypes.string,
    /**
     * Specify display style: ios/android, default is ios when autoDetect not on
     *
     */
    type: propTypes.string
};
Dialog$1.defaultProps = {
    buttons: [],
    show: false,
    title: '',
    type: ''
};

/**
 * consists of `footer_links`, `footer_link` and `footer_text`
 *
 */
var Footer = function Footer(props) {
    var className = props.className,
        children = props.children,
        others = objectWithoutProperties(props, ['className', 'children']);

    var cls = classNames(defineProperty({
        'weui-footer': true
    }, className, className));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        children
    );
};

/**
 * paragraph wrapper for footer
 *
 */
var FooterText = function FooterText(props) {
    var className = props.className,
        children = props.children,
        others = objectWithoutProperties(props, ['className', 'children']);

    var cls = classNames(defineProperty({
        'weui-footer__text': true
    }, className, className));

    return React__default.createElement(
        'p',
        _extends({ className: cls }, others),
        children
    );
};

/**
 * consists of `footer_link`
 *
 */
var FooterLinks = function FooterLinks(props) {
    var className = props.className,
        children = props.children,
        others = objectWithoutProperties(props, ['className', 'children']);

    var cls = classNames(defineProperty({
        'weui-footer__links': true
    }, className, className));

    return React__default.createElement(
        'p',
        _extends({ className: cls }, others),
        children
    );
};

/**
 * foot link wrapper for link
 *
 */
var FooterLink = function FooterLink(props) {
    var className = props.className,
        children = props.children,
        others = objectWithoutProperties(props, ['className', 'children']);

    var cls = classNames(defineProperty({
        'weui-footer__link': true
    }, className, className));

    return React__default.createElement(
        'a',
        _extends({ className: cls }, others),
        children
    );
};

/**
 * A full notification page to indicate results
 *
 */

var Msg$1 = function (_Component) {
    inherits(Msg, _Component);

    function Msg() {
        classCallCheck(this, Msg);
        return possibleConstructorReturn(this, (Msg.__proto__ || Object.getPrototypeOf(Msg)).apply(this, arguments));
    }

    createClass(Msg, [{
        key: '_renderButtons',
        value: function _renderButtons() {

            return this.props.buttons.map(function (button, idx) {
                var type = button.type,
                    label = button.label,
                    others = objectWithoutProperties(button, ['type', 'label']);

                return React__default.createElement(
                    Button,
                    _extends({ key: idx }, others, { type: type }),
                    label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                type = _props.type,
                title = _props.title,
                description = _props.description,
                extraHref = _props.extraHref,
                extraText = _props.extraText,
                footer = _props.footer,
                buttons = _props.buttons,
                others = objectWithoutProperties(_props, ['children', 'className', 'type', 'title', 'description', 'extraHref', 'extraText', 'footer', 'buttons']);

            var cls = classNames('weui-msg', defineProperty({}, className, className));

            var elFooter = footer ? footer : function () {
                return false;
            };

            if (!elFooter() && (extraHref || extraText)) {
                deprecationWarning('Msg extraHref/extraText', 'Msg footer');

                elFooter = function elFooter() {
                    return React__default.createElement(
                        Footer,
                        null,
                        React__default.createElement(
                            FooterLinks,
                            null,
                            React__default.createElement(
                                FooterLink,
                                { href: extraHref },
                                extraText
                            )
                        )
                    );
                };
            }

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others),
                React__default.createElement(
                    'div',
                    { className: 'weui-msg__icon-area' },
                    React__default.createElement(Icon$1, { value: type, size: 'large' })
                ),
                React__default.createElement(
                    'div',
                    { className: 'weui-msg__text-area' },
                    title ? React__default.createElement(
                        'h2',
                        { className: 'weui-msg__title' },
                        title
                    ) : false,
                    description ? React__default.createElement(
                        'p',
                        { className: 'weui-msg__desc' },
                        description
                    ) : false,
                    children
                ),
                React__default.createElement(
                    'div',
                    { className: 'weui-msg__opr-area' },
                    React__default.createElement(
                        ButtonArea,
                        null,
                        this._renderButtons()
                    )
                ),
                React__default.createElement(
                    'div',
                    { className: 'weui-msg__extra-area' },
                    elFooter()
                )
            );
        }
    }]);
    return Msg;
}(React.Component);

Msg$1.propTypes = {
    /**
     * Icon type
     *
     */
    type: propTypes.string,
    /**
     * Object array of Buttons, require at least `label` property
     *
     */
    buttons: propTypes.array,
    /**
     * Page Title
     *
     */
    title: propTypes.string,
    /**
     * Page Description
     *
     */
    description: propTypes.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraHref: propTypes.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraText: propTypes.string,
    /**
     * Footer Element of Page
     *
     */
    footer: propTypes.any
};
Msg$1.defaultProps = {
    type: 'success',
    buttons: []
};

/**
 * Use to format WeUI style contents
 *
 */

var Article$1 = function (_React$Component) {
    inherits(Article, _React$Component);

    function Article() {
        classCallCheck(this, Article);
        return possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
    }

    createClass(Article, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = objectWithoutProperties(_props, ['className', 'children']);

            var cls = classNames(defineProperty({
                'weui-article': true
            }, className, className));
            return React__default.createElement(
                'article',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return Article;
}(React__default.Component);

Article$1.propTypes = {};
Article$1.defaultProps = {};

/**
 * Created by jf on 15/12/11.
 */

/**
 * WeUI Grid Icon Wrapper
 *
 */

var GridIcon = function (_React$Component) {
    inherits(GridIcon, _React$Component);

    function GridIcon() {
        classCallCheck(this, GridIcon);
        return possibleConstructorReturn(this, (GridIcon.__proto__ || Object.getPrototypeOf(GridIcon)).apply(this, arguments));
    }

    createClass(GridIcon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'className']);

            var cls = classNames({
                'weui-grid__icon': true
            }, className);

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return GridIcon;
}(React__default.Component);

/**
 * WeUI Grid Label Wrapper
 *
 */

var GridLabel = function (_React$Component) {
    inherits(GridLabel, _React$Component);

    function GridLabel() {
        classCallCheck(this, GridLabel);
        return possibleConstructorReturn(this, (GridLabel.__proto__ || Object.getPrototypeOf(GridLabel)).apply(this, arguments));
    }

    createClass(GridLabel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'className']);

            var cls = classNames({
                'weui-grid__label': true
            }, className);

            return React__default.createElement(
                'p',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return GridLabel;
}(React__default.Component);

/**
 * WeUI Grid wrapper, contain elements of `GridIcon` and `GridLabel`
 *
 */

var Grid = function (_React$Component) {
    inherits(Grid, _React$Component);

    function Grid() {
        classCallCheck(this, Grid);
        return possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
    }

    createClass(Grid, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                icon = _props.icon,
                label = _props.label,
                className = _props.className,
                component = _props.component,
                others = objectWithoutProperties(_props, ['children', 'icon', 'label', 'className', 'component']);

            var cls = classNames({
                'weui-grid': true
            }, className);
            var DefaultComponent = 'a';
            var GridComponent = component ? component : DefaultComponent;

            return React__default.createElement(
                GridComponent,
                _extends({ className: cls }, others),
                icon ? React__default.createElement(
                    GridIcon,
                    null,
                    icon
                ) : false,
                children,
                label ? React__default.createElement(
                    GridLabel,
                    null,
                    label
                ) : false
            );
        }
    }]);
    return Grid;
}(React__default.Component);

Grid.propTypes = {
    /**
     * Label string for grid
     *
     */
    label: propTypes.string,
    /**
     * Icon placeholder
     *
     */
    icon: propTypes.any,
    /**
     * pass in an component to replace Grid but apply same style
     */
    component: propTypes.func
};
Grid.defaultProps = {
    label: '',
    icon: false
};

/**
 * Mobile grid system, typical use for 9 grid system. contain elements of `Grid`
 *
 */

var Grids = function (_Component) {
    inherits(Grids, _Component);

    function Grids() {
        classCallCheck(this, Grids);
        return possibleConstructorReturn(this, (Grids.__proto__ || Object.getPrototypeOf(Grids)).apply(this, arguments));
    }

    createClass(Grids, [{
        key: 'renderData',
        value: function renderData(data) {
            return data.map(function (item, i) {
                return React__default.createElement(Grid, _extends({
                    key: i,
                    icon: item.icon,
                    label: item.label
                }, item));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                data = _props.data,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'data', 'className']);

            var cls = classNames({
                'weui-grids': true
            }, className);

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);
    return Grids;
}(React.Component);

Grids.propTypes = {
    /**
     * Automatic grids, contain Array of Objects for grid, Optional `icon` and `label` property for each object
     *
     */
    data: propTypes.array
};
Grids.defaultProps = {
    data: []
};

/**
 * Panel Object, consists of `PanelHeader`, `PanelBody` and `PanelFooter`
 *
 */

var Panel = function (_React$Component) {
    inherits(Panel, _React$Component);

    function Panel() {
        classCallCheck(this, Panel);
        return possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
    }

    createClass(Panel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                access = _props.access,
                others = objectWithoutProperties(_props, ['children', 'className', 'access']);


            if (access) {
                deprecationWarning('panel access', 'cell access', 'https://github.com/weui/weui/wiki/%E5%9C%A81.0.0%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E4%B8%8A%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E6%94%B9%E5%8F%98#panel');
            }

            var cls = classNames(defineProperty({
                'weui-panel': true
            }, className, className));

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return Panel;
}(React__default.Component);

Panel.propTypes = {
    /**
     * deprecated property from 0.4.x
     *
     */
    access: propTypes.bool
};
Panel.defaultProps = {
    access: false
};

/**
 * Header of Panel
 *
 */

var PanelHeader = function (_React$Component) {
    inherits(PanelHeader, _React$Component);

    function PanelHeader() {
        classCallCheck(this, PanelHeader);
        return possibleConstructorReturn(this, (PanelHeader.__proto__ || Object.getPrototypeOf(PanelHeader)).apply(this, arguments));
    }

    createClass(PanelHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = objectWithoutProperties(_props, ['className', 'children']);

            var cls = classNames(defineProperty({
                'weui-panel__hd': true
            }, className, className));

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelHeader;
}(React__default.Component);

/**
 * Content of Panel
 *
 */

var PanelBody = function (_React$Component) {
    inherits(PanelBody, _React$Component);

    function PanelBody() {
        classCallCheck(this, PanelBody);
        return possibleConstructorReturn(this, (PanelBody.__proto__ || Object.getPrototypeOf(PanelBody)).apply(this, arguments));
    }

    createClass(PanelBody, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = objectWithoutProperties(_props, ['className', 'children']);

            var cls = classNames(defineProperty({
                'weui-panel__bd': true
            }, className, className));

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelBody;
}(React__default.Component);

/**
 * Footer of Panel
 *
 */

var PanelFooter = function (_React$Component) {
    inherits(PanelFooter, _React$Component);

    function PanelFooter() {
        classCallCheck(this, PanelFooter);
        return possibleConstructorReturn(this, (PanelFooter.__proto__ || Object.getPrototypeOf(PanelFooter)).apply(this, arguments));
    }

    createClass(PanelFooter, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = objectWithoutProperties(_props, ['className', 'children']);

            var Component$$1 = this.props.href ? 'a' : 'div';
            var cls = classNames(defineProperty({
                'weui-panel__ft': true
            }, className, className));

            return React__default.createElement(
                Component$$1,
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelFooter;
}(React__default.Component);

/**
 * Media Object, Typically use with `Panel` to display pictures and text, consists of `MediaBoxBody`, `MediaBoxDescription`, `MediaBoxHeader`
 *
 */

var MediaBox = function (_React$Component) {
    inherits(MediaBox, _React$Component);

    function MediaBox() {
        classCallCheck(this, MediaBox);
        return possibleConstructorReturn(this, (MediaBox.__proto__ || Object.getPrototypeOf(MediaBox)).apply(this, arguments));
    }

    createClass(MediaBox, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                type = _props.type,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'type', 'className']);

            var Component$$1 = this.props.href ? 'a' : 'div';
            var cls = classNames({
                'weui-media-box': true,
                'weui-media-box_appmsg': type === 'appmsg',
                'weui-media-box_text': type === 'text',
                'weui-media-box_small-appmsg': type === 'small_appmsg'
            }, className);

            return React__default.createElement(
                Component$$1,
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBox;
}(React__default.Component);

MediaBox.propTypes = {
    /**
     * The layout of media box, Options: appmsg/text/small_appmsg
     *
     */
    type: propTypes.string
};
MediaBox.defaultProps = {
    type: 'text'
};

/**
 * Header of MediaBox, if detects Img tag inside content will automatically adds corresponding class
 *
 */

var MediaBoxHeader = function (_React$Component) {
    inherits(MediaBoxHeader, _React$Component);

    function MediaBoxHeader() {
        classCallCheck(this, MediaBoxHeader);
        return possibleConstructorReturn(this, (MediaBoxHeader.__proto__ || Object.getPrototypeOf(MediaBoxHeader)).apply(this, arguments));
    }

    createClass(MediaBoxHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'className']);

            var clz = classNames({
                'weui-media-box__hd': true
            }, className);

            var childrenWithProps = React__default.Children.map(children, function (child) {
                if (child.type === 'img' && !child.props.className) {
                    return React__default.cloneElement(child, { className: 'weui-media-box__thumb' });
                } else {
                    return child;
                }
            });

            return React__default.createElement(
                'div',
                _extends({ className: clz }, others),
                childrenWithProps
            );
        }
    }]);
    return MediaBoxHeader;
}(React__default.Component);

/**
 * Content of Mediabox
 *
 */

var PanelBody$2 = function (_React$Component) {
    inherits(PanelBody, _React$Component);

    function PanelBody() {
        classCallCheck(this, PanelBody);
        return possibleConstructorReturn(this, (PanelBody.__proto__ || Object.getPrototypeOf(PanelBody)).apply(this, arguments));
    }

    createClass(PanelBody, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'className']);

            var cls = classNames({
                'weui-media-box__bd': true
            }, className);

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelBody;
}(React__default.Component);

/**
 * Title for MediaBox
 *
 */

var MediaBoxTitle = function (_React$Component) {
    inherits(MediaBoxTitle, _React$Component);

    function MediaBoxTitle() {
        classCallCheck(this, MediaBoxTitle);
        return possibleConstructorReturn(this, (MediaBoxTitle.__proto__ || Object.getPrototypeOf(MediaBoxTitle)).apply(this, arguments));
    }

    createClass(MediaBoxTitle, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'className']);

            var cls = classNames({
                'weui-media-box__title': true
            }, className);

            return React__default.createElement(
                'h4',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBoxTitle;
}(React__default.Component);

/**
 * Description of MediaBox
 *
 */

var MediaBoxDescription = function (_React$Component) {
    inherits(MediaBoxDescription, _React$Component);

    function MediaBoxDescription() {
        classCallCheck(this, MediaBoxDescription);
        return possibleConstructorReturn(this, (MediaBoxDescription.__proto__ || Object.getPrototypeOf(MediaBoxDescription)).apply(this, arguments));
    }

    createClass(MediaBoxDescription, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'className']);

            var cls = classNames({
                'weui-media-box__desc': true
            }, className);

            return React__default.createElement(
                'p',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBoxDescription;
}(React__default.Component);

/**
 * Meta Item for `MeidaBoxInfo`
 *
 */

var MediaBoxInfoMeta = function (_React$Component) {
    inherits(MediaBoxInfoMeta, _React$Component);

    function MediaBoxInfoMeta() {
        classCallCheck(this, MediaBoxInfoMeta);
        return possibleConstructorReturn(this, (MediaBoxInfoMeta.__proto__ || Object.getPrototypeOf(MediaBoxInfoMeta)).apply(this, arguments));
    }

    createClass(MediaBoxInfoMeta, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                extra = _props.extra,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'extra', 'className']);

            var cls = classNames({
                'weui-media-box__info__meta': true,
                'weui-media-box__info__meta_extra': extra
            }, className);

            return React__default.createElement(
                'li',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBoxInfoMeta;
}(React__default.Component);

MediaBoxInfoMeta.propTypes = {
    /**
     * add left margin to indicate extra
     *
     */
    extra: propTypes.bool
};
MediaBoxInfoMeta.defaultProps = {
    extra: false
};

/**
 * Info Items for MediaBox
 *
 */

var MediaBoxInfo = function (_React$Component) {
    inherits(MediaBoxInfo, _React$Component);

    function MediaBoxInfo() {
        classCallCheck(this, MediaBoxInfo);
        return possibleConstructorReturn(this, (MediaBoxInfo.__proto__ || Object.getPrototypeOf(MediaBoxInfo)).apply(this, arguments));
    }

    createClass(MediaBoxInfo, [{
        key: 'renderData',
        value: function renderData(metas) {
            return metas.map(function (meta, i) {
                return React__default.createElement(
                    MediaBoxInfoMeta,
                    { key: i, extra: meta.extra },
                    meta.label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                data = _props.data,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'data', 'className']);

            var cls = classNames({
                'weui-media-box__info': true
            }, className);

            return React__default.createElement(
                'ul',
                _extends({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);
    return MediaBoxInfo;
}(React__default.Component);

MediaBoxInfo.propTypes = {
    /**
     * automatically include Metas, object array of metas, property required: `extra`, `label`
     *
     */
    data: propTypes.array
};
MediaBoxInfo.defaultProps = {
    data: []
};

/**
 * Content Wrapper for Tab
 */

var TabBody = function (_React$Component) {
    inherits(TabBody, _React$Component);

    function TabBody() {
        classCallCheck(this, TabBody);
        return possibleConstructorReturn(this, (TabBody.__proto__ || Object.getPrototypeOf(TabBody)).apply(this, arguments));
    }

    createClass(TabBody, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'className']);

            var cls = classNames({
                'weui-tab__panel': true
            }, className);

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return TabBody;
}(React__default.Component);

/**
 * Content wrapper for each Tab Item
 */

var TabBodyItem = function (_React$Component) {
    inherits(TabBodyItem, _React$Component);

    function TabBodyItem() {
        classCallCheck(this, TabBodyItem);
        return possibleConstructorReturn(this, (TabBodyItem.__proto__ || Object.getPrototypeOf(TabBodyItem)).apply(this, arguments));
    }

    createClass(TabBodyItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                active = _props.active,
                others = objectWithoutProperties(_props, ['children', 'className', 'active']);

            var cls = classNames({
                'weui-tab__bd-item': true
            }, className);

            return React__default.createElement(
                'div',
                _extends({ className: cls, style: { display: active ? 'block' : 'none' } }, others),
                children
            );
        }
    }]);
    return TabBodyItem;
}(React__default.Component);

TabBodyItem.propTypes = {
    /**
     * display this component
     *
     */
    active: propTypes.bool
};
TabBodyItem.defaultProps = {
    active: false
};

/**
 *  wrapper for navbar
 *
 */

var NavBar = function (_React$Component) {
    inherits(NavBar, _React$Component);

    function NavBar() {
        classCallCheck(this, NavBar);
        return possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    createClass(NavBar, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'className']);

            var cls = classNames({
                'weui-navbar': true
            }, className);

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return NavBar;
}(React__default.Component);

/**
 *  Navbar item to display info
 *
 */

var NavBarItem = function (_React$Component) {
    inherits(NavBarItem, _React$Component);

    function NavBarItem() {
        classCallCheck(this, NavBarItem);
        return possibleConstructorReturn(this, (NavBarItem.__proto__ || Object.getPrototypeOf(NavBarItem)).apply(this, arguments));
    }

    createClass(NavBarItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                active = _props.active,
                label = _props.label,
                others = objectWithoutProperties(_props, ['children', 'className', 'active', 'label']);

            var cls = classNames({
                'weui-navbar__item': true,
                'weui-bar__item_on': active
            }, className);

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others),
                label ? label : children
            );
        }
    }]);
    return NavBarItem;
}(React__default.Component);

NavBarItem.propTypes = {
    /**
     * indicate tab is active
     *
     */
    active: propTypes.bool,
    /**
     * label of the item
     *
     */
    label: propTypes.string
};
NavBarItem.defaultProps = {
    active: false
};

/**
 *  Bottom bar for tabs
 *
 */

var TabBar = function (_React$Component) {
    inherits(TabBar, _React$Component);

    function TabBar() {
        classCallCheck(this, TabBar);
        return possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
    }

    createClass(TabBar, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'className']);

            var cls = classNames({
                'weui-tabbar': true
            }, className);

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return TabBar;
}(React__default.Component);

/**
 *  Icon wrapper for icon use in TabBar
 *
 */

var TabBarIcon = function (_React$Component) {
    inherits(TabBarIcon, _React$Component);

    function TabBarIcon() {
        classCallCheck(this, TabBarIcon);
        return possibleConstructorReturn(this, (TabBarIcon.__proto__ || Object.getPrototypeOf(TabBarIcon)).apply(this, arguments));
    }

    createClass(TabBarIcon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'className']);

            var cls = classNames({
                'weui-tabbar__icon': true
            }, className);

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return TabBarIcon;
}(React__default.Component);

/**
 *  label wrapper for text inside TabBarItem
 *
 */

var TabBarLabel = function (_React$Component) {
    inherits(TabBarLabel, _React$Component);

    function TabBarLabel() {
        classCallCheck(this, TabBarLabel);
        return possibleConstructorReturn(this, (TabBarLabel.__proto__ || Object.getPrototypeOf(TabBarLabel)).apply(this, arguments));
    }

    createClass(TabBarLabel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = objectWithoutProperties(_props, ['children', 'className']);

            var cls = classNames({
                'weui-tabbar__label': true
            }, className);

            return React__default.createElement(
                'p',
                _extends({ className: cls }, others),
                children
            );
        }
    }]);
    return TabBarLabel;
}(React__default.Component);

/**
 *  Tabbar item
 *
 */

var TabBarItem = function (_React$Component) {
    inherits(TabBarItem, _React$Component);

    function TabBarItem() {
        classCallCheck(this, TabBarItem);
        return possibleConstructorReturn(this, (TabBarItem.__proto__ || Object.getPrototypeOf(TabBarItem)).apply(this, arguments));
    }

    createClass(TabBarItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                active = _props.active,
                icon = _props.icon,
                label = _props.label,
                others = objectWithoutProperties(_props, ['children', 'className', 'active', 'icon', 'label']);

            var cls = classNames({
                'weui-tabbar__item': true,
                'weui-bar__item_on': active
            }, className);

            if (icon || label) {
                return React__default.createElement(
                    'div',
                    _extends({ className: cls }, others),
                    icon ? React__default.createElement(
                        TabBarIcon,
                        null,
                        icon
                    ) : false,
                    label ? React__default.createElement(
                        TabBarLabel,
                        null,
                        label
                    ) : false
                );
            } else {
                return React__default.createElement(
                    'div',
                    _extends({ className: cls }, others),
                    children
                );
            }
        }
    }]);
    return TabBarItem;
}(React__default.Component);

TabBarItem.propTypes = {
    /**
     * indicate currently active
     *
     */
    active: propTypes.bool,
    /**
     * icon of item
     *
     */
    icon: propTypes.any,
    /**
     * label of item
     *
     */
    label: propTypes.string
};
TabBarItem.defaultProps = {
    active: false,
    icon: false,
    label: ''
};

/**
 *  Weui Tab component, can be auto mount items or mannually display items
 *
 */

var Tab = function (_React$Component) {
    inherits(Tab, _React$Component);

    function Tab() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Tab);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            index: _this.props.defaultIndex
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Tab, [{
        key: 'handleHeaderClick',
        value: function handleHeaderClick(idx) {
            this.setState({ index: idx });
            if (this.props.onChange) this.props.onChange(idx);
        }
    }, {
        key: 'parseChild',
        value: function parseChild(childrenInput) {
            var ChildHeaders = [];
            var ChildContents = [];

            React__default.Children.map(childrenInput, function (child) {
                if (!child) return;
                var _child$props = child.props,
                    children = _child$props.children,
                    type = _child$props.type,
                    others = objectWithoutProperties(_child$props, ['children', 'type']);

                if (child.type === TabBarItem || child.type === NavBarItem) {
                    ChildHeaders.push(child);
                    if (children) ChildContents.push(React__default.createElement(TabBodyItem, { children: children }));
                } else if (child.type === TabBodyItem) {
                    ChildContents.push(child);
                }
            });

            return { ChildHeaders: ChildHeaders, ChildContents: ChildContents };
        }
    }, {
        key: 'renderBar',
        value: function renderBar(type, children, cls) {
            var _this2 = this;

            var _parseChild = this.parseChild(children),
                ChildHeaders = _parseChild.ChildHeaders,
                ChildContents = _parseChild.ChildContents;

            var _headers = ChildHeaders.map(function (item, idx) {
                return React__default.cloneElement(item, {
                    key: idx,
                    active: _this2.state.index === idx,
                    onClick: _this2.handleHeaderClick.bind(_this2, idx, item)
                });
            });

            var _contents = ChildContents.map(function (item, idx) {
                return React__default.cloneElement(item, {
                    key: idx,
                    active: _this2.state.index === idx,
                    tabIndex: idx
                });
            });

            if (type === 'tabbar') {
                return React__default.createElement(
                    'div',
                    { className: cls },
                    React__default.createElement(
                        TabBody,
                        null,
                        _contents
                    ),
                    React__default.createElement(
                        TabBar,
                        null,
                        _headers
                    )
                );
            } else if (type === 'navbar') {
                return React__default.createElement(
                    'div',
                    { className: cls },
                    React__default.createElement(
                        NavBar,
                        null,
                        _headers
                    ),
                    React__default.createElement(
                        TabBody,
                        null,
                        _contents
                    )
                );
            } else {
                return false;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                type = _props.type,
                others = objectWithoutProperties(_props, ['children', 'className', 'type']);

            var divProps = Object.assign({}, others);
            delete divProps.defaultIndex;

            var cls = classNames({
                'weui-tab': true
            }, className);

            if (type === 'normal') {
                return React__default.createElement(
                    'div',
                    _extends({ className: cls }, divProps),
                    children
                );
            } else {
                return this.renderBar(type, children, cls);
            }
        }
    }]);
    return Tab;
}(React__default.Component);

Tab.propTypes = {
    /**
     * layout of the tab, auto mount components when set to `navbar` or `tabbar`
     *
     */
    type: propTypes.string,
    /**
     * default select index
     *
     */
    defaultIndex: propTypes.number,
    onChange: propTypes.func
};
Tab.defaultProps = {
    type: 'normal',
    defaultIndex: 0
};

/**
 *  weui search component
 *
 */

var SearchBar$1 = function (_React$Component) {
    inherits(SearchBar, _React$Component);

    function SearchBar(props) {
        classCallCheck(this, SearchBar);

        var _this = possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.state = {
            focus: _this.props.defaultValue ? true : false,
            clearing: false,
            text: _this.props.defaultValue ? _this.props.defaultValue : ''
        };

        if (_this.props.defaultValue !== '') {
            if (_this.props.onChange) _this.props.onChange(_this.state.text);
        }
        return _this;
    }

    createClass(SearchBar, [{
        key: 'changeHandle',
        value: function changeHandle(e) {
            var text = e.target.value;
            if (this.props.onChange) this.props.onChange(text, e);
            this.setState({ text: text });
        }
    }, {
        key: 'cancelHandle',
        value: function cancelHandle(e) {
            this.setState({
                focus: false,
                text: ''
            });
            if (this.props.onCancel) this.props.onCancel(e);
            if (this.props.onChange) this.props.onChange('', e);
        }
    }, {
        key: 'clearHandle',
        value: function clearHandle(e) {
            e.preventDefault();
            e.stopPropagation();

            this.setState({ text: '', clearing: true });
            if (this.props.onClear) this.props.onClear(e);
            // In most cases, you can attach a ref to the DOM node and avoid using findDOMNode at all.
            // When render returns null or false, findDOMNode returns null.
            // 这里是截取官网的说明，在ref回调函数内确实会返回null，尤其是配合redux使用的时候，这个时候需要对其进行null判断
            this.refs.searchInput.focus();
            // ReactDOM.findDOMNode(this.refs.searchInput).focus()
            if (this.props.onChange) this.props.onChange('', e);
        }
    }, {
        key: 'blurHandle',
        value: function blurHandle(e) {
            if (this.state.text === '') {
                this.setState({ focus: false });
            }
        }
    }, {
        key: 'submitHandle',
        value: function submitHandle(e) {
            if (this.props.onSubmit) {
                e.preventDefault();
                e.stopPropagation();
                this.props.onSubmit(this.state.text, e);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                defaultValue = _props.defaultValue,
                autocomplete = _props.autocomplete,
                placeholder = _props.placeholder,
                className = _props.className,
                searchName = _props.searchName;

            var clz = classNames({
                'weui-search-bar': true,
                'weui-search-bar_focusing': this.state.focus
            }, className);

            return React__default.createElement(
                'div',
                { className: clz },
                React__default.createElement(
                    'form',
                    { className: 'weui-search-bar__form', onSubmit: this.submitHandle.bind(this) },
                    React__default.createElement(
                        'div',
                        { className: 'weui-search-bar__box' },
                        React__default.createElement(Icon$1, { value: 'search' }),
                        React__default.createElement('input', {
                            ref: 'searchInput',
                            type: 'search',
                            name: searchName,
                            className: 'weui-search-bar__input',
                            placeholder: placeholder,
                            onFocus: function onFocus(e) {
                                return _this2.setState({ focus: true });
                            },
                            onBlur: this.blurHandle.bind(this),
                            onChange: this.changeHandle.bind(this),
                            value: this.state.text,
                            autoComplete: autocomplete
                        }),
                        React__default.createElement('a', {
                            className: 'weui-icon-clear',
                            onClick: this.clearHandle.bind(this)
                        })
                    ),
                    React__default.createElement(
                        'label',
                        {
                            className: 'weui-search-bar__label',
                            onClick: function onClick() {
                                var searchInput = _this2.refs.searchInput;
                                if (searchInput) {
                                    searchInput.focus();
                                }
                            },
                            style: { display: this.state.text ? 'none' : null }
                        },
                        React__default.createElement(Icon$1, { value: 'search' }),
                        React__default.createElement(
                            'span',
                            null,
                            placeholder
                        )
                    )
                ),
                React__default.createElement(
                    'a',
                    { className: 'weui-search-bar__cancel-btn', onClick: this.cancelHandle.bind(this) },
                    this.props.lang.cancel
                )
            );
        }
    }]);
    return SearchBar;
}(React__default.Component);

SearchBar$1.propTypes = {
    /**
     * default value for the searchbar if any
     *
     */
    defaultValue: propTypes.string,
    /**
     * default place holder text
     *
     */
    placeholder: propTypes.string,
    /**
     * name of the input component
     *
     */
    searchName: propTypes.string,
    /**
     * trigger when text change on input pass `text` property
     *
     */
    onChange: propTypes.func,
    /**
     * trigger when user click clear icon
     *
     */
    onClear: propTypes.func,
    /**
     * trigger when user click cancel button
     *
     */
    onCancel: propTypes.func,
    /**
     * trigger when user submit (enter action)
     *
     */
    onSubmit: propTypes.func,
    /**
     * language object consists of `cancel` property
     *
     */
    lang: propTypes.object
};
SearchBar$1.defaultProps = {
    placeholder: '搜索',
    searchName: 'q',
    onChange: undefined,
    onClear: undefined,
    onCancel: undefined,
    onSubmit: undefined,
    lang: { cancel: '取消' },
    autocomplete: 'off'
};

//1.0.0 components

/**
 * FlexItem Container
 *
 */
var Flex = function Flex(props) {
    return React__default.createElement(
        "div",
        _extends({ className: "weui-flex" }, props),
        props.children
    );
};

//1.0.0 components

/**
 * Evenly distribute flex items
 *
 */
var FlexItem = function FlexItem(props) {
    var component = props.component,
        children = props.children,
        others = objectWithoutProperties(props, ['component', 'children']);

    return React__default.createElement(
        'component',
        _extends({ className: 'weui-flex__item' }, others),
        children
    );
};

FlexItem.propTypes = {
    /**
     * pass component to replace the component but maintaing style
     *
     */
    component: propTypes.node
};

FlexItem.defaultProps = {
    component: 'div'
};

//1.0.0 components

/**
 *  Drop down message from top
 *
 */
var Toptips$1 = function Toptips(props) {
    var _classNames;

    var className = props.className,
        type = props.type,
        children = props.children,
        show = props.show,
        others = objectWithoutProperties(props, ['className', 'type', 'children', 'show']);

    var cls = classNames((_classNames = {
        'weui-toptips': true
    }, defineProperty(_classNames, 'weui-toptips_' + type, true), defineProperty(_classNames, className, className), _classNames));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others, { style: { display: show ? 'block' : 'none' } }),
        children
    );
};

Toptips$1.propTypes = {
    /**
     * display tips
     *
     */
    show: propTypes.bool,
    /**
     * type: `default`, `warn`, `info`, `primary`
     */
    type: propTypes.string
};

Toptips$1.defaultProps = {
    show: false,
    type: 'default'
};

/**
 *   The ultimate mobile swipe component
 *
 */

var Swiper$1 = function (_Component) {
    inherits(Swiper, _Component);

    function Swiper(props) {
        classCallCheck(this, Swiper);

        var _this = possibleConstructorReturn(this, (Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call(this, props));

        _this.state = {
            containerWidth: 0,
            containerHeight: 0,
            currentIndex: _this.props.defaultIndex,

            //touch
            touching: false,
            og: 0,
            ogTranslate: 0,
            touchId: undefined,
            translate: 0,
            animating: false
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        return _this;
    }

    createClass(Swiper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var $container = ReactDOM.findDOMNode(this.refs.container);

            this.setState({
                wrapperWidth: this.props.direction === 'horizontal' ? $container.offsetWidth * this.props.children.length : $container.offsetWidth,
                wrapperHeight: this.props.direction === 'vertical' ? $container.offsetHeight * this.props.children.length : $container.offsetHeight,
                containerWidth: $container.offsetWidth,
                containerHeight: $container.offsetHeight,
                translate: this.props.defaultIndex <= this.props.children.length ? this.props.direction === 'horizontal' ? $container.offsetWidth * -this.props.defaultIndex : $container.offsetHeight * -this.props.defaultIndex : 0
            });
            //console.log($container.offsetWidth, $container.offsetHeight)
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.props.children.length <= 1) return;

            var og = 0;

            if (this.props.direction === 'horizontal') {
                og = e.targetTouches[0].pageX - this.state.translate;
            } else {
                og = e.targetTouches[0].pageY - this.state.translate;
            }

            this.setState({
                touching: true,
                ogTranslate: this.state.translate,
                touchId: e.targetTouches[0].identifier,
                og: og,
                animating: false
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            if (!this.state.touching || this.props.children.length <= 1) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            //prevent move background
            e.preventDefault();

            var diff = this.state.translate;

            if (this.props.direction === 'horizontal') {
                var pageX = e.targetTouches[0].pageX;
                diff = pageX - this.state.og;
            } else {
                //vertical
                var pageY = e.targetTouches[0].pageY;
                diff = pageY - this.state.og;
            }

            this.setState({
                translate: diff
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            var _this2 = this;

            if (!this.state.touching || this.props.children.length <= 1) return;

            var translate = this.state.translate;
            var max = this.props.direction === 'horizontal' ? this.state.wrapperWidth - this.state.containerWidth : this.state.wrapperHeight - this.state.containerHeight;
            var currentIndex = this.state.currentIndex;
            var ogIndex = currentIndex;

            if (translate > 0) {
                //start
                translate = 0;
            } else if (translate < -max) {
                //end
                translate = -max;
            } else {
                //default case
                var diff = Math.abs(translate - this.state.ogTranslate);
                var isNext = translate - this.state.ogTranslate < 0 ? true : false;
                //console.log(translate - this.state.ogTranslate, diff, isNext)

                if (diff >= this.props.threshold) {

                    if (isNext) {
                        //next slide
                        translate = this.state.ogTranslate - (this.props.direction === 'horizontal' ? this.state.containerWidth : this.state.containerHeight);
                        currentIndex += 1;
                    } else {
                        //prev slide
                        translate = this.state.ogTranslate + (this.props.direction === 'horizontal' ? this.state.containerWidth : this.state.containerHeight);
                        currentIndex -= 1;
                    }
                } else {
                    //revert back
                    translate = this.state.ogTranslate;
                }
            }

            this.setState({
                touching: false,
                og: 0,
                touchId: undefined,
                ogTranslate: 0,
                animating: true,
                translate: translate,
                currentIndex: currentIndex
            }, function () {
                return setTimeout(function () {
                    return _this2.setState({ animating: false });
                }, _this2.props.speed);
            });

            if (this.props.onChange) this.props.onChange(ogIndex, currentIndex);
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            var _this3 = this;

            return this.props.children.map(function (child, i) {
                var clx = classNames('react-weui-swiper__pagination-bullet', {
                    active: i === _this3.state.currentIndex
                });
                return React__default.createElement('span', { className: clx, key: i });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                className = _props.className,
                children = _props.children,
                height = _props.height,
                width = _props.width,
                defaultIndex = _props.defaultIndex,
                direction = _props.direction,
                speed = _props.speed,
                indicators = _props.indicators,
                domProps = objectWithoutProperties(_props, ['className', 'children', 'height', 'width', 'defaultIndex', 'direction', 'speed', 'indicators']);

            var clx = classNames('react-weui-swiper__container', className, {
                'react-weui-swiper__container-horizontal': direction === 'horizontal',
                'react-weui-swiper__container-vertical': direction === 'vertical'
            });

            var containerStyle = {
                height: height ? height + 'px' : '100%',
                width: width ? width + 'px' : '100%'
            };

            var wrapperStyle = {
                width: this.state.wrapperWidth,
                height: this.state.wrapperHeight,
                transition: this.state.animating ? 'transform .' + speed / 100 + 's' : 'none',
                transform: 'translate(' + (direction === 'horizontal' ? this.state.translate : 0) + 'px, ' + (direction === 'vertical' ? this.state.translate : 0) + 'px)'
            };

            return React__default.createElement(
                'div',
                {
                    className: clx,
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove,
                    onTouchEnd: this.handleTouchEnd,
                    style: containerStyle,
                    ref: 'container'
                },
                React__default.createElement(
                    'div',
                    {
                        className: 'react-weui-swiper__wrapper',
                        style: wrapperStyle
                    },
                    children.map(function (child, i) {
                        return React__default.cloneElement(child, {
                            className: classNames('react-weui-swiper__item', child.className),
                            key: i,
                            style: Object.assign({}, child.props.style, {
                                display: direction === 'horizontal' ? 'inline-block' : 'block',
                                verticalAlign: direction === 'horizontal' ? 'top' : 'bottom',
                                width: _this4.state.containerWidth,
                                height: _this4.state.containerHeight
                            })
                        });
                    })
                ),
                indicators ? React__default.createElement(
                    'div',
                    {
                        className: 'react-weui-swiper__pagination'
                    },
                    this.renderPagination()
                ) : false
            );
        }
    }]);
    return Swiper;
}(React.Component);

Swiper$1.propTypes = {
    /**
     * height for the container, number in px
     *
     */
    height: propTypes.number,
    /**
     * width for the container, number in px
     *
     */
    width: propTypes.number,
    /**
     * threshold for the swiper, number in px
     *
     */
    threshold: propTypes.number,
    /**
     * speed for the slide transition, number in ms
     *
     */
    speed: propTypes.number,
    /**
     * default slider index
     *
     */
    defaultIndex: propTypes.number,
    /**
     * direction of swiper
     *
     */
    direction: propTypes.oneOf(['vertical', 'horizontal']),
    /**
     * show indicators
     *
     */
    indicators: propTypes.bool,
    /**
     * callback when slide change is trigger, pass indexs of (prev, next)
     *
     */
    onChange: propTypes.func
};
Swiper$1.defaultProps = {
    height: null,
    width: null,
    defaultIndex: 0,
    direction: 'horizontal',
    threshold: 50,
    speed: 300,
    indicators: true
};

/**
 * Full screen photo display
 *
 */

var Gallery = function (_Component) {
    inherits(Gallery, _Component);

    function Gallery(props) {
        classCallCheck(this, Gallery);

        var _this = possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

        _this.state = {
            currentIndex: _this.props.defaultIndex
        };
        return _this;
    }

    createClass(Gallery, [{
        key: 'handleClick',
        value: function handleClick(func) {
            var _this2 = this;

            return function (e) {
                if (func) func(e, _this2.state.currentIndex);
            };
        }
    }, {
        key: 'renderImages',
        value: function renderImages(imgs) {
            var _this3 = this;

            return React__default.createElement(
                'div',
                { className: 'weui-gallery__img' },
                React__default.createElement(
                    Swiper$1,
                    {
                        indicators: false,
                        defaultIndex: this.props.defaultIndex,
                        onChange: function onChange(prev, next) {
                            return _this3.setState({ currentIndex: next });
                        }
                    },
                    imgs.map(function (img, i) {
                        var imgStyle = {
                            backgroundImage: 'url(' + img + ')',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center'
                        };
                        return React__default.createElement('span', { key: i, style: imgStyle });
                    })
                )
            );
        }
    }, {
        key: 'renderOprs',
        value: function renderOprs() {
            var _this4 = this;

            if (Array.isArray(this.props.children)) {
                return this.props.children.map(function (child, i) {
                    return React__default.cloneElement(child, {
                        key: i,
                        onClick: _this4.handleClick(child.props.onClick)
                    });
                });
            } else {
                if (this.props.children) {
                    return React__default.cloneElement(this.props.children, {
                        onClick: this.handleClick(this.props.children.props.onClick)
                    });
                } else {
                    return false;
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                show = _props.show,
                src = _props.src,
                defaultIndex = _props.defaultIndex,
                others = objectWithoutProperties(_props, ['children', 'className', 'show', 'src', 'defaultIndex']);

            var cls = classNames(defineProperty({
                'weui-gallery': true
            }, className, className));

            if (!show) return false;

            return React__default.createElement(
                'div',
                _extends({ className: cls, style: { display: show ? 'block' : 'none' } }, others),
                Array.isArray(src) ? this.renderImages(src) : React__default.createElement('span', { className: 'weui-gallery__img', style: { backgroundImage: 'url(' + src + ')' } }),
                React__default.createElement(
                    'div',
                    { className: 'weui-gallery__opr' },
                    this.renderOprs()
                )
            );
        }
    }]);
    return Gallery;
}(React.Component);

Gallery.propTypes = {
    /**
     * indicate whather the component is display
     *
     */
    show: propTypes.bool,
    /**
     * image source, string for single element, array for multiple element
     *
     */
    src: propTypes.oneOfType([propTypes.string, propTypes.array]),
    /**
     * indicate whather the component is display
     *
     */
    defaultIndex: propTypes.number
};
Gallery.defaultProps = {
    show: undefined,
    src: '',
    defaultIndex: 0
};

/**
 * Wrapper for Gallery Delete Button
 *
 */
var GalleryDelete = function GalleryDelete(props) {
    var className = props.className,
        others = objectWithoutProperties(props, ['className']);

    var cls = classNames(defineProperty({
        'weui-gallery__del': true
    }, className, className));

    return React__default.createElement(
        'a',
        _extends({ className: cls }, others),
        React__default.createElement(Icon$1, { value: 'delete', className: 'weui-icon_gallery-delete' })
    );
};

/**
 * Loadmore Indicators.
 *
 */
var LoadMore$1 = function LoadMore(props) {
    var className = props.className,
        children = props.children,
        loading = props.loading,
        showLine = props.showLine,
        showDot = props.showDot,
        others = objectWithoutProperties(props, ['className', 'children', 'loading', 'showLine', 'showDot']);

    var cls = classNames(defineProperty({
        'weui-loadmore': true,
        'weui-loadmore_line': showLine,
        'weui-loadmore_dot': showDot
    }, className, className));

    return React__default.createElement(
        'div',
        _extends({ className: cls }, others),
        loading ? React__default.createElement(Icon$1, { value: 'loading' }) : false,
        React__default.createElement(
            'span',
            { className: 'weui-loadmore__tips' },
            children
        )
    );
};

LoadMore$1.propTypes = {
    /**
     * display laoding spinner
     *
     */
    loading: propTypes.bool,
    /**
     * display side lines
     *
     */
    showLine: propTypes.bool,
    /**
     * display dot in the center
     *
     */
    showDot: propTypes.bool
};

LoadMore$1.defaultProps = {
    loading: false,
    showLine: false,
    showDot: false
};

var PickerGroup = function (_Component) {
    inherits(PickerGroup, _Component);

    function PickerGroup(props) {
        classCallCheck(this, PickerGroup);

        var _this = possibleConstructorReturn(this, (PickerGroup.__proto__ || Object.getPrototypeOf(PickerGroup)).call(this, props));

        _this.state = {
            touching: false,
            ogY: 0,
            ogTranslate: 0,
            touchId: undefined,
            translate: 0,
            totalHeight: 0,
            selected: 0,
            animating: _this.props.animation
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.updateSelected = _this.updateSelected.bind(_this);
        return _this;
    }

    createClass(PickerGroup, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.adjustPosition(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.adjustPosition(nextProps);
        }
    }, {
        key: 'adjustPosition',
        value: function adjustPosition(props) {
            var _this2 = this;

            var items = props.items,
                itemHeight = props.itemHeight,
                indicatorTop = props.indicatorTop,
                defaultIndex = props.defaultIndex;

            var totalHeight = items.length * itemHeight;
            var translate = totalHeight <= indicatorTop ? indicatorTop : 0;

            if (defaultIndex > -1) {
                if (translate === 0) {
                    var upperCount = Math.floor(indicatorTop / itemHeight);
                    if (defaultIndex > upperCount) {
                        //over
                        var overCount = defaultIndex - upperCount;
                        translate -= overCount * itemHeight;
                    } else if (defaultIndex === upperCount) {
                        translate = 0;
                    } else {
                        //less
                        translate += Math.abs(upperCount - defaultIndex) * itemHeight;
                    }
                    //if(props.groupIndex == 2) console.log(defaultIndex,translate, upperCount)
                } else {
                    //total item less than indicator height
                    translate -= itemHeight * defaultIndex;
                }
            }

            this.setState({ selected: defaultIndex, ogTranslate: translate, totalHeight: totalHeight, translate: translate
            }, function () {
                return defaultIndex > -1 ? _this2.updateSelected(false) : _this2.updateSelected();
            });
        }
    }, {
        key: 'updateSelected',
        value: function updateSelected() {
            var _this3 = this;

            var propagate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var _props = this.props,
                items = _props.items,
                itemHeight = _props.itemHeight,
                indicatorTop = _props.indicatorTop,
                indicatorHeight = _props.indicatorHeight,
                onChange = _props.onChange,
                groupIndex = _props.groupIndex;

            var selected = 0;
            items.forEach(function (item, i) {
                //console.log(i, this.state.translate, (this.state.translate + (itemHeight * i)), indicatorTop, this.state.translate + (itemHeight * i) + itemHeight , indicatorTop + indicatorHeight)
                if (!item.disabled && _this3.state.translate + itemHeight * i >= indicatorTop && _this3.state.translate + itemHeight * i + itemHeight <= indicatorTop + indicatorHeight) {
                    selected = i;
                }
            });

            if (onChange && propagate) onChange(items[selected], selected, groupIndex);
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.props.items.length <= 1) return;

            this.setState({
                touching: true,
                ogTranslate: this.state.translate,
                touchId: e.targetTouches[0].identifier,
                ogY: this.state.translate === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.state.translate,
                animating: false
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            if (!this.state.touching || this.props.items.length <= 1) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            //prevent move background
            e.preventDefault();

            var pageY = e.targetTouches[0].pageY;
            var diffY = pageY - this.state.ogY;

            this.setState({
                translate: diffY
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            var _this4 = this;

            if (!this.state.touching || this.props.items.length <= 1) return;

            var _props2 = this.props,
                indicatorTop = _props2.indicatorTop,
                indicatorHeight = _props2.indicatorHeight,
                itemHeight = _props2.itemHeight;

            var translate = this.state.translate;

            if (Math.abs(translate - this.state.ogTranslate) < itemHeight * .51) {
                translate = this.state.ogTranslate;
            } else if (translate > indicatorTop) {
                //top boundry
                translate = indicatorTop;
            } else if (translate + this.state.totalHeight < indicatorTop + indicatorHeight) {
                //bottom
                translate = indicatorTop + indicatorHeight - this.state.totalHeight;
            } else {
                //pass single item range but not exceed boundry
                var step = 0,
                    adjust = 0;
                var diff = (translate - this.state.ogTranslate) / itemHeight;

                if (Math.abs(diff) < 1) {
                    step = diff > 0 ? 1 : -1;
                } else {
                    adjust = Math.abs(diff % 1 * 100) > 50 ? 1 : 0;
                    step = diff > 0 ? Math.floor(diff) + adjust : Math.ceil(diff) - adjust;
                }

                translate = this.state.ogTranslate + step * itemHeight;
            }

            this.setState({
                touching: false,
                ogY: 0,
                touchId: undefined,
                ogTranslate: 0,
                animating: true,
                translate: translate
            }, function () {
                return _this4.updateSelected();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props3 = this.props,
                items = _props3.items,
                className = _props3.className,
                height = _props3.height,
                itemHeight = _props3.itemHeight,
                indicatorTop = _props3.indicatorTop,
                indicatorHeight = _props3.indicatorHeight,
                onChange = _props3.onChange,
                aniamtion = _props3.aniamtion,
                groupIndex = _props3.groupIndex,
                defaultIndex = _props3.defaultIndex,
                mapKeys = _props3.mapKeys,
                others = objectWithoutProperties(_props3, ['items', 'className', 'height', 'itemHeight', 'indicatorTop', 'indicatorHeight', 'onChange', 'aniamtion', 'groupIndex', 'defaultIndex', 'mapKeys']);

            var cls = classNames('weui-picker__group', className);
            var styles = {
                'transform': 'translate(0, ' + this.state.translate + 'px)',
                'transition': this.state.animating ? 'transform .3s' : 'none'
            };

            return React__default.createElement(
                'div',
                _extends({ className: cls }, others, {
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove,
                    onTouchEnd: this.handleTouchEnd
                }),
                React__default.createElement('div', { className: 'weui-picker__mask' }),
                React__default.createElement('div', { className: 'weui-picker__indicator' }),
                React__default.createElement(
                    'div',
                    { className: 'weui-picker__content',
                        style: styles,
                        ref: 'content' },
                    items.map(function (item, j) {
                        var label = item[_this5.props.mapKeys.label];
                        var itemCls = classNames('weui-picker__item', {
                            'weui-picker__item_disabled': item.disabled
                        });

                        return React__default.createElement(
                            'div',
                            { key: j, className: itemCls },
                            label
                        );
                    })
                )
            );
        }
    }]);
    return PickerGroup;
}(React.Component);

PickerGroup.propTypes = {
    height: propTypes.number,
    itemHeight: propTypes.number,
    indicatorTop: propTypes.number,
    indicatorHeight: propTypes.number,
    onChange: propTypes.func,
    aniamtion: propTypes.bool,
    groupIndex: propTypes.number,
    defaultIndex: propTypes.number
};
PickerGroup.defaultProps = {
    height: 238,
    itemHeight: 25 + 9, //content + padding
    indicatorTop: 102,
    indicatorHeight: 34,
    aniamtion: true,
    groupIndex: -1,
    defaultIndex: -1,
    mapKeys: {
        label: 'label'
    }
};

/**
 *  Mobile select ui, currently only support Touch Events
 *
 */

var Picker = function (_Component) {
    inherits(Picker, _Component);

    function Picker(props) {
        classCallCheck(this, Picker);

        var _this = possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

        _this.state = {
            selected: _this.props.defaultSelect ? _this.props.defaultSelect : Array(_this.props.groups.length).fill(-1),
            actions: _this.props.actions.length > 0 ? _this.props.actions : [{
                label: _this.props.lang.leftBtn,
                onClick: function onClick(e) {
                    return _this.handleClose(function () {
                        if (_this.props.onCancel) _this.props.onCancel(e);
                    });
                }
            }, {
                label: _this.props.lang.rightBtn,
                onClick: function onClick(e) {
                    return _this.handleChanges();
                }
            }],
            closing: false
        };

        _this.handleChanges = _this.handleChanges.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }

    createClass(Picker, [{
        key: 'handleChanges',
        value: function handleChanges() {
            var _this2 = this;

            this.handleClose(function () {
                if (_this2.props.onChange) _this2.props.onChange(_this2.state.selected, _this2);
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(item, i, groupIndex) {
            var _this3 = this;

            var selected = this.state.selected;

            selected[groupIndex] = i;
            this.setState({ selected: selected }, function () {
                if (_this3.props.onGroupChange) _this3.props.onGroupChange(item, i, groupIndex, _this3.state.selected, _this3);
            });
        }
    }, {
        key: 'handleClose',
        value: function handleClose(cb) {
            var _this4 = this;

            this.setState({
                closing: true
            }, function () {
                return setTimeout(function () {
                    _this4.setState({ closing: false });
                    cb();
                }, 300);
            });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            var elActions = this.state.actions.map(function (action, i) {
                var label = action.label,
                    others = objectWithoutProperties(action, ['label']);

                return React__default.createElement(
                    'a',
                    _extends({}, others, { key: i, className: 'weui-picker__action' }),
                    ' ',
                    label
                );
            });

            return React__default.createElement(
                'div',
                { className: 'weui-picker__hd' },
                elActions
            );
        }
    }, {
        key: 'renderGroups',
        value: function renderGroups() {
            var _this5 = this;

            return this.props.groups.map(function (group, i) {
                return React__default.createElement(PickerGroup, _extends({ key: i }, group, { onChange: _this5.handleChange, groupIndex: i, defaultIndex: _this5.state.selected[i] }));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var _props = this.props,
                className = _props.className,
                show = _props.show,
                actions = _props.actions,
                groups = _props.groups,
                defaultSelect = _props.defaultSelect,
                onGroupChange = _props.onGroupChange,
                onChange = _props.onChange,
                onCancel = _props.onCancel,
                others = objectWithoutProperties(_props, ['className', 'show', 'actions', 'groups', 'defaultSelect', 'onGroupChange', 'onChange', 'onCancel']);

            var cls = classNames('weui-picker', {
                'weui-animate-slide-up': show && !this.state.closing,
                'weui-animate-slide-down': this.state.closing
            }, className);

            var maskCls = classNames({
                'weui-animate-fade-in': show && !this.state.closing,
                'weui-animate-fade-out': this.state.closing
            });

            return this.props.show ? React__default.createElement(
                'div',
                null,
                React__default.createElement(Mask$1, { className: maskCls, onClick: function onClick(e) {
                        return _this6.handleClose(function () {
                            if (_this6.props.onCancel) _this6.props.onCancel(e);
                        });
                    } }),
                React__default.createElement(
                    'div',
                    _extends({ className: cls }, others),
                    this.renderActions(),
                    React__default.createElement(
                        'div',
                        { className: 'weui-picker__bd' },
                        this.renderGroups()
                    )
                )
            ) : false;
        }
    }]);
    return Picker;
}(React.Component);

Picker.propTypes = {
    /**
     * consists of array of object(max 2) with property `label` and others pass into element
     *
     */
    actions: propTypes.array,
    /**
     * array objects consists of groups for each scroll group
     *
     */
    groups: propTypes.array,
    /**
     * default group index thats selected, if not provide, automatic chose the best fiting item when mounted
     *
     */
    defaultSelect: propTypes.array,
    /**
     * trigger when individual group change, pass property(`item`, `item index in group`, `group index in groups`, `selected`, `picker instance`)
     *
     */
    onGroupChange: propTypes.func,
    /**
     * on selected change, pass property `selected` for array of slected index to `groups`
     *
     */
    onChange: propTypes.func,
    /**
     * excute when the popup about to close
     *
     */
    onCancel: propTypes.func,
    /**
     * display the component
     *
     */
    show: propTypes.bool,
    /**
     * language object consists of `leftBtn` and `rightBtn`
     *
     */
    lang: propTypes.object
};
Picker.defaultProps = {
    actions: [],
    groups: [],
    show: false,
    lang: { leftBtn: 'Cancel', rightBtn: 'Ok' }
};

/**
 *  An city pick component build on top of picker
 *
 */

var CityPicker = function (_React$Component) {
    inherits(CityPicker, _React$Component);

    function CityPicker(props) {
        classCallCheck(this, CityPicker);

        var _this = possibleConstructorReturn(this, (CityPicker.__proto__ || Object.getPrototypeOf(CityPicker)).call(this, props));

        var _this$props = _this.props,
            data = _this$props.data,
            selected = _this$props.selected,
            dataMap = _this$props.dataMap;

        var _this$parseData = _this.parseData(data, dataMap.items, selected),
            groups = _this$parseData.groups,
            newselected = _this$parseData.newselected;

        _this.state = {
            groups: groups,
            selected: newselected,
            picker_show: false,
            text: ''
        };
        //console.log(this.state.groups)
        _this.updateGroup = _this.updateGroup.bind(_this);
        _this.parseData = _this.parseData.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    //@return array of group with options


    createClass(CityPicker, [{
        key: 'parseData',
        value: function parseData(data, subKey) {
            var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var group = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
            var newselected = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

            var _selected = 0;

            if (Array.isArray(selected) && selected.length > 0) {
                var _selectedClone = selected.slice(0);
                _selected = _selectedClone.shift();
                selected = _selectedClone;
            }

            if (typeof data[_selected] === 'undefined') {
                _selected = 0;
            }

            newselected.push(_selected);

            var item = data[_selected];

            var _group = JSON.parse(JSON.stringify(data));
            _group.forEach(function (g) {
                return delete g[subKey];
            });
            group.push({ items: _group, mapKeys: { 'label': this.props.dataMap.id } });

            if (typeof item[subKey] !== 'undefined' && Array.isArray(item[subKey])) {
                return this.parseData(item[subKey], subKey, selected, group, newselected);
            } else {
                return { groups: group, newselected: newselected };
            }
        }
    }, {
        key: 'updateDataBySelected',
        value: function updateDataBySelected(selected, cb) {
            var _this2 = this;

            var _props = this.props,
                data = _props.data,
                dataMap = _props.dataMap;
            //validate if item exists

            var _parseData = this.parseData(data, dataMap.items, selected),
                groups = _parseData.groups,
                newselected = _parseData.newselected;

            var text = '';
            try {
                groups.forEach(function (group, _i) {
                    text += group['items'][selected[_i]][_this2.props.dataMap.id] + ' ';
                });
            } catch (err) {
                //wait
                text = this.state.text;
            }

            this.setState({
                groups: groups,
                text: text,
                selected: newselected
            }, function () {
                return cb();
            });
        }
    }, {
        key: 'updateGroup',
        value: function updateGroup(item, i, groupIndex, selected, picker) {
            var _this3 = this;

            this.updateDataBySelected(selected, function () {
                //update picker
                picker.setState({
                    selected: _this3.state.selected
                });
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(selected) {
            var _this4 = this;

            //handle unchange
            if (selected === this.state.selected) {
                this.updateDataBySelected(selected, function () {
                    if (_this4.props.onChange) _this4.props.onChange(_this4.state.text);
                });
            }

            if (this.props.onChange) this.props.onChange(this.state.text);
        }
    }, {
        key: 'render',
        value: function render() {
            return React__default.createElement(Picker, {
                show: this.props.show,
                onGroupChange: this.updateGroup,
                onChange: this.handleChange,
                defaultSelect: this.state.selected,
                groups: this.state.groups,
                onCancel: this.props.onCancel,
                lang: this.props.lang
            });
        }
    }]);
    return CityPicker;
}(React__default.Component);

CityPicker.propTypes = {
    /**
     * Array of item trees, consists property for label and subitems
     *
     */
    data: propTypes.array.isRequired,
    /**
     * keys for data provide, `id` to indicate property name for label, `items` to indicate property name for subitems
     *
     */
    dataMap: propTypes.object,
    /**
     * currently selected item
     *
     */
    selected: propTypes.array,
    /**
     * display the component
     *
     */
    show: propTypes.bool,
    /**
     * language object consists of `leftBtn` and `rightBtn`
     *
     */
    lang: propTypes.object
};
CityPicker.defaultProps = {
    data: [],
    dataMap: { id: 'name', items: 'sub' },
    selected: [],
    show: false,
    lang: { leftBtn: '取消', rightBtn: '确定' }
};

var presetStyles = {
    'default': {},
    'header': {
        position: 'absolute',
        top: '-.4em',
        right: '-.4em'
    },
    'body': {
        marginLeft: '5px'
    },
    'footer': {
        marginLeft: '5px',
        marginRight: '5px'
    }
};
/**
 * Small status descriptors for UI elements.
 *
 */

var Badge$1 = function (_Component) {
    inherits(Badge, _Component);

    function Badge() {
        classCallCheck(this, Badge);
        return possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
    }

    createClass(Badge, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                dot = _props.dot,
                style = _props.style,
                preset = _props.preset,
                domProps = objectWithoutProperties(_props, ['children', 'className', 'dot', 'style', 'preset']);

            var clz = classNames('weui-badge', {
                'weui-badge_dot': dot
            }, className);

            var stylez = Object.assign({}, presetStyles[preset], style);
            return React__default.createElement(
                'span',
                _extends({ className: clz, style: stylez }, domProps),
                children
            );
        }
    }]);
    return Badge;
}(React.Component);

Badge$1.propTypes = {
    /**
     * display dot style without content
     *
     */
    dot: propTypes.bool,
    /**
     * some preset layout for other UI elements, include 'header', 'body', 'footer'
     *
     */
    preset: propTypes.string
};
Badge$1.defaultProps = {
    dot: false,
    preset: 'default'
};

/**
 *  An Popup modal from bottom
 *
 */

var Popup = function (_Component) {
    inherits(Popup, _Component);

    function Popup() {
        classCallCheck(this, Popup);
        return possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
    }

    createClass(Popup, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                show = _props.show,
                onRequestClose = _props.onRequestClose,
                enableMask = _props.enableMask,
                others = objectWithoutProperties(_props, ['className', 'children', 'show', 'onRequestClose', 'enableMask']);

            var cls = classNames('weui-popup', {
                'weui-popup_toggle': show
            }, className);

            return React__default.createElement(
                'div',
                null,
                React__default.createElement(Mask$1, { transparent: enableMask, style: { display: show ? 'block' : 'none' }, onClick: onRequestClose }),
                React__default.createElement(
                    'div',
                    _extends({ className: cls }, others),
                    children
                )
            );
        }
    }]);
    return Popup;
}(React.Component);

Popup.propTypes = {
    /**
     * display the component
     *
     */
    show: propTypes.bool,
    /**
     * show mask
     *
     */
    enableMask: propTypes.bool
};
Popup.defaultProps = {
    show: false,
    enableMask: false
};

/**
 *  Sample Popup header for Popup
 *
 */
var PopupHeader = function PopupHeader(props) {
  var left = props.left,
      right = props.right,
      leftOnClick = props.leftOnClick,
      rightOnClick = props.rightOnClick,
      className = props.className;

  var cls = classNames('weui-popup__hd', className);
  return React__default.createElement(
    'div',
    { className: cls },
    React__default.createElement(
      'a',
      { className: 'weui-popup__action', onClick: leftOnClick },
      left
    ),
    React__default.createElement(
      'a',
      { className: 'weui-popup__action', onClick: rightOnClick },
      right
    )
  );
};

PopupHeader.propTypes = {
  /**
   * left button label
   *
   */
  left: propTypes.string,
  /**
   * right button label
   *
   */
  right: propTypes.string,
  /**
   * left button onclick
   *
   */
  leftOnClick: propTypes.func,
  /**
   * right button onclick
   *
   */
  rightOnClick: propTypes.func
};

PopupHeader.defaultProps = {
  left: '',
  right: ''
};

/**
 *  A Pull to refresh container enable user to pull the container and refresh it's content
 *
 */

var PullToRefresh$1 = function (_Component) {
    inherits(PullToRefresh, _Component);

    function PullToRefresh(props) {
        classCallCheck(this, PullToRefresh);

        var _this = possibleConstructorReturn(this, (PullToRefresh.__proto__ || Object.getPrototypeOf(PullToRefresh)).call(this, props));

        _this.state = {
            pullPercent: 0,
            touching: false,
            ogY: 0,
            touchId: undefined,
            animating: false,
            loading: false,
            initScrollTop: 0
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.resolveRefresh = _this.resolveRefresh.bind(_this);
        return _this;
    }

    createClass(PullToRefresh, [{
        key: 'resolveRefresh',
        value: function resolveRefresh() {
            var _this2 = this;

            this.setState({
                loading: false,
                animating: true,
                pullPercent: 0
            }, function () {
                setTimeout(function () {
                    return _this2.setState({ animating: false });
                }, 500);
            });
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.state.loading || this.props.disable) return;

            var $content = ReactDOM.findDOMNode(this.refs.content);

            this.setState({
                touching: true,
                touchId: e.targetTouches[0].identifier,
                ogY: this.state.pullPercent === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.state.pullPercent,
                animating: false,
                initScrollTop: $content.scrollTop
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            if (!this.state.touching || this.state.loading || this.props.disable) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            var pageY = e.targetTouches[0].pageY;
            var diffY = pageY - this.state.ogY;

            //if it's scroll
            if (diffY < 0) return;

            //if it's not at top
            var $content = ReactDOM.findDOMNode(this.refs.content);
            if ($content.scrollTop > 0) return;

            //prevent move background
            e.preventDefault();

            diffY = diffY - this.state.initScrollTop > 100 ? 100 : diffY - this.state.initScrollTop;

            this.setState({
                pullPercent: diffY
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            var _this3 = this;

            if (!this.state.touching || this.state.loading || this.props.disable) return;

            var pullPercent = this.state.pullPercent;
            var loading = false;

            if (pullPercent === 100) {
                loading = true;
            } else {
                pullPercent = 0;
            }

            this.setState({
                touching: false,
                ogY: 0,
                touchId: undefined,
                initScrollTop: 0,
                animating: loading,
                pullPercent: pullPercent,
                loading: loading
            }, function () {
                //triger after ui change
                if (loading) _this3.props.onRefresh(_this3.resolveRefresh);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                height = _props.height,
                loaderHeight = _props.loaderHeight,
                loaderDefaultIcon = _props.loaderDefaultIcon,
                loaderLoadingIcon = _props.loaderLoadingIcon,
                onRefresh = _props.onRefresh,
                disable = _props.disable,
                domProps = objectWithoutProperties(_props, ['className', 'children', 'height', 'loaderHeight', 'loaderDefaultIcon', 'loaderLoadingIcon', 'onRefresh', 'disable']);

            var cls = classNames('react-weui-ptr', className);

            var containerStyle = {
                height: height
            };

            var loaderStyle = {
                //transform: `translate(0, ${this.state.pullPercent / 2}px)`,
                height: loaderHeight,
                marginTop: -loaderHeight + this.state.pullPercent / (100 / loaderHeight) + 'px',
                transition: this.state.animating ? 'all .5s' : 'none'
            };

            return React__default.createElement(
                'div',
                _extends({ className: cls, style: containerStyle }, domProps),
                React__default.createElement(
                    'div',
                    {
                        className: 'react-weui-ptr__loader',
                        style: loaderStyle
                    },
                    this.state.loading ? loaderLoadingIcon : loaderDefaultIcon(this.state.pullPercent)
                ),
                React__default.createElement(
                    'div',
                    {
                        className: 'react-weui-ptr__content',
                        ref: 'content',
                        onTouchStart: this.handleTouchStart,
                        onTouchMove: this.handleTouchMove,
                        onTouchEnd: this.handleTouchEnd
                    },
                    children
                )
            );
        }
    }]);
    return PullToRefresh;
}(React.Component);

PullToRefresh$1.propTypes = {
    /**
     * height for the container, use string like '10px', default for '100%'
     *
     */
    height: propTypes.string,
    /**
     * height for the loader
     *
     */
    loaderHeight: propTypes.number,
    /**
     * element(icon) for default loader, function require, pass in pulldown progress
     *
     */
    loaderDefaultIcon: propTypes.func,
    /**
     * element(icon) for loading loader
     *
     */
    loaderLoadingIcon: propTypes.any,
    /**
     * callback when refresh is request, pass resolve function
     *
     */
    onRefresh: propTypes.func,
    /**
     * disable the loader
     *
     */
    disable: propTypes.bool
};
PullToRefresh$1.defaultProps = {
    height: '100%',
    loaderHeight: 100,
    loaderDefaultIcon: function loaderDefaultIcon(progress) {
        var style = {
            transform: 'rotate(-' + (progress !== 100 ? progress * 1.8 : 0) + 'deg)',
            color: progress !== 100 ? '#5f5f5f' : '#1AAD19'
        };
        return React__default.createElement(
            'div',
            { style: { flex: 1, padding: '5px' } },
            React__default.createElement(Icon$1, { value: progress !== 100 ? 'download' : 'success', style: style })
        );
    },
    loaderLoadingIcon: React__default.createElement(LoadMore$1, { loading: true }),
    onRefresh: function onRefresh(resolve, reject) {
        return setTimeout(function () {
            return resolve();
        }, 1000);
    },
    disable: false
};

/**
 *  A Container trigger loading once it reach certain scrolltop
 *
 */

var InfiniteLoader$1 = function (_Component) {
    inherits(InfiniteLoader, _Component);

    function InfiniteLoader(props) {
        classCallCheck(this, InfiniteLoader);

        var _this = possibleConstructorReturn(this, (InfiniteLoader.__proto__ || Object.getPrototypeOf(InfiniteLoader)).call(this, props));

        _this.state = {
            loading: false,
            finish: false,
            scrollTimer: null
        };

        _this.scrollHandle = _this.scrollHandle.bind(_this);
        _this.resolveLoading = _this.resolveLoading.bind(_this);
        _this.finish = _this.finish.bind(_this);
        return _this;
    }

    createClass(InfiniteLoader, [{
        key: 'finish',
        value: function finish() {
            this.setState({
                loading: false,
                finish: true
            });
        }
    }, {
        key: 'resolveLoading',
        value: function resolveLoading() {
            this.setState({
                loading: false,
                finish: false
            });
        }
    }, {
        key: 'scrollHandle',
        value: function scrollHandle(e) {
            var _this2 = this;

            if (this.props.onScroll) this.props.onScroll(e);
            if (this.state.loading || this.state.finish || this.props.disable || e.target.scrollTop === 0) return;

            //setup for scrollend event
            clearTimeout(this.state.scrollTimer);
            this.setState({ scrollTimer: setTimeout(function () {
                    if (_this2.props.onScrollEnd) _this2.props.onScrollEnd();
                }, 150) });

            var target = e.target;
            var scrollPercent = Math.floor((target.scrollTop + target.clientHeight) / target.scrollHeight * 100);

            if (scrollPercent > this.props.triggerPercent) {
                this.setState({
                    loading: true
                });

                this.props.onLoadMore(this.resolveLoading, this.finish);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                height = _props.height,
                triggerPercent = _props.triggerPercent,
                disable = _props.disable,
                loaderLoadingIcon = _props.loaderLoadingIcon,
                loaderDefaultIcon = _props.loaderDefaultIcon,
                onScrollEnd = _props.onScrollEnd,
                onScroll = _props.onScroll,
                onLoadMore = _props.onLoadMore,
                domProps = objectWithoutProperties(_props, ['children', 'className', 'height', 'triggerPercent', 'disable', 'loaderLoadingIcon', 'loaderDefaultIcon', 'onScrollEnd', 'onScroll', 'onLoadMore']);

            var clx = classNames('react-weui-infiniteloader', className);

            var containerStyle = {
                height: height
            };

            var contentStyle = {
                overflow: disable ? 'hidden' : 'scroll'
            };

            var loaderStyle = {
                display: this.state.loading || this.state.finish ? 'block' : 'none'
            };

            return React__default.createElement(
                'div',
                _extends({
                    className: clx,
                    style: containerStyle,
                    onScroll: this.scrollHandle
                }, domProps),
                React__default.createElement(
                    'div',
                    {
                        className: 'react-weui-infiniteloader__content',
                        style: contentStyle,
                        ref: 'container'
                    },
                    children,
                    React__default.createElement(
                        'div',
                        { style: loaderStyle },
                        this.state.finish ? loaderDefaultIcon : this.state.loading ? loaderLoadingIcon : false
                    )
                )
            );
        }
    }]);
    return InfiniteLoader;
}(React.Component);

InfiniteLoader$1.propTypes = {
    /**
     * height for the container, use string like '10px', default for '100vh'
     *
     */
    height: propTypes.string,
    /**
     * element(icon) for default loader when there is no more content
     *
     */
    loaderDefaultIcon: propTypes.object,
    /**
     * element(icon) for loading loader
     *
     */
    loaderLoadingIcon: propTypes.object,
    /**
     * percentage of scrollTop to trigger loading
     *
     */
    triggerPercent: propTypes.number,
    /**
     * callback when user scroll the content, pass event
     *
     */
    onScroll: propTypes.func,
    /**
     * callback when user did not scroll for 150ms
     *
     */
    onScrollEnd: propTypes.func,
    /**
     * callback when it's requesting for more content, pass resolve function and finish function
     *
     */
    onLoadMore: propTypes.func,
    /**
     * disable the loader
     *
     */
    disable: propTypes.bool
};
InfiniteLoader$1.defaultProps = {
    height: '100vh',
    triggerPercent: 75,
    loaderLoadingIcon: React__default.createElement(
        LoadMore$1,
        { loading: true },
        ' Loading... '
    ),
    loaderDefaultIcon: React__default.createElement(
        LoadMore$1,
        { showLine: true },
        ' No Data'
    ),
    disable: false
};

/**
 * A Component for a standard page
 *
 */

var Page$1 = function (_Component) {
    inherits(Page, _Component);

    function Page(props) {
        classCallCheck(this, Page);

        var _this = possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

        _this.state = {
            ptrRefreshing: false,
            contentScrollOnTop: true
        };

        _this.handleRefresh = _this.handleRefresh.bind(_this);
        return _this;
    }

    createClass(Page, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.infiniteLoader) {
                this.setState({ contentScrollOnTop: true });
            } else {
                this.setState({ contentScrollOnTop: false });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            //console.log('unmounting page');
        }
    }, {
        key: 'handleRefresh',
        value: function handleRefresh(resolve) {
            var _this2 = this;

            this.setState({
                ptrRefreshing: true
            }, function () {
                _this2.props.ptrOnRefresh(function () {
                    _this2.setState({
                        ptrRefreshing: false
                    });
                    resolve();
                });
            });
        }
    }, {
        key: 'handleContentScroll',
        value: function handleContentScroll(e) {
            if (e.target.scrollTop <= 0) {
                this.setState({ contentScrollOnTop: true });
            } else {
                this.setState({ contentScrollOnTop: false });
            }
        }
    }, {
        key: 'renderContent',
        value: function renderContent(children, ptr, infiniteLoader) {
            var _this3 = this;

            if (!infiniteLoader && !ptr) return children;

            var ContentWithInfiniteLoader = React__default.createElement(
                InfiniteLoader$1,
                {
                    height: '100%',
                    disable: this.state.ptrRefreshing,
                    onScroll: function onScroll(e) {
                        return _this3.handleContentScroll(e);
                    },
                    onLoadMore: this.props.onLoadMore
                },
                children
            );
            if (!ptr && infiniteLoader) return ContentWithInfiniteLoader;
            if (ptr && !infiniteLoader) return React__default.createElement(
                PullToRefresh$1,
                {
                    onRefresh: this.handleRefresh,
                    disable: !this.state.contentScrollOnTop
                },
                children
            );

            return React__default.createElement(
                PullToRefresh$1,
                {
                    onRefresh: this.handleRefresh,
                    disable: !this.state.contentScrollOnTop
                },
                ContentWithInfiniteLoader
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                style = _props.style,
                className = _props.className,
                infiniteLoader = _props.infiniteLoader,
                transition = _props.transition,
                ptr = _props.ptr;

            var cls = classNames('weui-page', className);

            return React__default.createElement(
                'div',
                {
                    className: cls,
                    style: Object.assign({}, { animationName: transition ? 'pageInRight' : '' }, style) },
                this.renderContent(children, ptr, infiniteLoader)
            );
        }
    }]);
    return Page;
}(React.Component);

Page$1.propTypes = {
    /**
     * indicate to use ptr
     *
     */
    ptr: propTypes.bool,
    /**
     * function to call when ptr refresh, pass function resolve to finish loading
     *
     */
    ptrOnRefresh: propTypes.func,
    /**
     * indicate to use infiniteloader
     *
     */
    infiniteLoader: propTypes.bool,
    /**
     * callback when it's requesting for more content, pass resolve function and finish function
     *
     */
    onLoadMore: propTypes.func,
    /**
     * enable page transition
     *
     */
    transition: propTypes.bool
};
Page$1.defaultProps = {
    ptr: true,
    ptrOnRefresh: function ptrOnRefresh(resolve) {
        setTimeout(function () {
            resolve();
        }, 1000);
    },
    infiniteLoader: true,
    onLoadMore: function onLoadMore(resolve, finish) {
        //mock request
        setTimeout(function () {
            finish();
        }, 1000);
    },
    transition: true
};

/**
 * Created by jf on 15/10/27.
 */
//0.4.x components
//1.0.0 components
//non standard
var index = {
    version: version,

    //0.4.x
    Button: Button,
    ButtonArea: ButtonArea,
    Cells: Cells,
    CellsTitle: CellsTitle,
    CellsTips: CellsTips,
    Cell: Cell,
    CellHeader: CellHeader,
    CellBody: CellBody,
    CellFooter: CellFooter,
    Mask: Mask$1,
    Form: Form,
    FormCell: FormCell,
    Radio: Radio,
    Checkbox: Checkbox,
    Input: Input,
    TextArea: TextArea,
    Switch: Switch,
    Select: Select,
    Uploader: Uploader,
    Label: Label$1,
    Toast: Toast$1,
    Progress: Progress$1,
    ActionSheet: ActionSheet$1,
    Dialog: Dialog$1,
    Msg: Msg$1,
    Article: Article$1,
    Icon: Icon$1,
    Grids: Grids,
    Grid: Grid,
    GridIcon: GridIcon,
    GridLabel: GridLabel,
    Panel: Panel,
    PanelHeader: PanelHeader,
    PanelBody: PanelBody,
    PanelFooter: PanelFooter,
    MediaBox: MediaBox,
    MediaBoxHeader: MediaBoxHeader,
    MediaBoxBody: PanelBody$2,
    MediaBoxTitle: MediaBoxTitle,
    MediaBoxDescription: MediaBoxDescription,
    MediaBoxInfo: MediaBoxInfo,
    MediaBoxInfoMeta: MediaBoxInfoMeta,
    NavBar: NavBar,
    NavBarItem: NavBarItem,
    Tab: Tab,
    TabBody: TabBody,
    TabBodyItem: TabBodyItem,
    TabBar: TabBar,
    TabBarIcon: TabBarIcon,
    TabBarItem: TabBarItem,
    TabBarLabel: TabBarLabel,
    SearchBar: SearchBar$1,

    //1.0.0
    Flex: Flex,
    FlexItem: FlexItem,
    VCode: VCode,
    Agreement: Agreement,
    Toptips: Toptips$1,
    Gallery: Gallery,
    GalleryDelete: GalleryDelete,
    Footer: Footer,
    FooterText: FooterText,
    FooterLinks: FooterLinks,
    FooterLink: FooterLink,
    LoadMore: LoadMore$1,
    Preview: Preview,
    PreviewHeader: PreviewHeader,
    PreviewBody: PreviewBody,
    PreviewFooter: PreviewFooter,
    PreviewItem: PreviewItem,
    PreviewButton: PreviewButton,
    Picker: Picker,
    PickerGroup: PickerGroup,
    CityPicker: CityPicker,
    Slider: Slider,
    Badge: Badge$1,

    //non-standard
    Popup: Popup,
    PopupHeader: PopupHeader,
    PullToRefresh: PullToRefresh$1,
    InfiniteLoader: InfiniteLoader$1,
    Swiper: Swiper$1,
    Page: Page$1
};

return index;

})));
//# sourceMappingURL=react-weui.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)))

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(253)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/less-loader/index.js!./index.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/less-loader/index.js!./index.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(252)();
// imports


// module
exports.push([module.i, ".advantage{list-style:circle;padding-left:20px}.advantage li{margin-bottom:10px}", ""]);

// exports


/***/ })

});
