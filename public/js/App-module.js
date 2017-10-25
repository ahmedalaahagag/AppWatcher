/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(3);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function ($) {

    $.fn.hidder = function (options) {
        var settings = $.extend({}, options);

        var _this = $(this);
        var targetStyle = { 'width': '90%', 'float': 'left' };
        var btnStyle = { 'float': 'right' };
        $(this).wrap('<div class="hidder-container" style="width:100%; display:inline-block"></div>');
        $(this).css(targetStyle);
        $(this).after('<span class="hidden-traget"></span>');
        $(this).parent().find('.hidden-traget').css(targetStyle);
        $(this).after('<button class="btn btn-sm btn-primary hidder-action" style="margin-top:-7px"><i class="fa fa-eye"></i></button>');
        var text = $(this).html();
        for (var i = 0; i < text.length; i++) {
            $('.hidder-container .hidden-traget').append('<i class="fa fa-circle" style="font-size:5pt; margin:0 1px 0 0;"></i>');
        }
        $(this).hide();
        $('.hidder-container .hidden-traget');

        $('.hidder-container button').bind('click', function () {
            if ($(_this).is(":visible")) {
                $(_this).hide();
                $('.hidder-container .hidden-traget').show();
            } else {
                $(_this).show();
                $('.hidder-container .hidden-traget').hide();
            }
        });
    };
})(jQuery);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

$(document).ready(function () {
    $('.hidder').hidder();
});

/***/ })
/******/ ]);