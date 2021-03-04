(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.index = global.index || {}, global.index.cjs = global.index.cjs || {}, global.index.cjs.js = factory()));
}(this, (function () { 'use strict';

	var greet = function () { return console.log('Hello World'); };

	return greet;

})));
