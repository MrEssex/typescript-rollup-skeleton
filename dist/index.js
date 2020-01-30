(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory((global.index = global.index || {}, global.index.cjs = global.index.cjs || {}, global.index.cjs.js = {})));
}(this, (function (exports) { 'use strict';

	var greet = function () { return console.log("Hello World"); };

	exports.greet = greet;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
