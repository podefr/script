/**
 * script.js - http://podefr.github.com/script/
 * Copyright(c) 2013 Olivier Scherrer <pode.fr@gmail.com>
 * MIT Licensed
 */
"use strict";

/**
 * Script utils for creating script tags, appending them to <head>
 * and removing them. Create also accepts an onload callback that can be executed in scope
 */
module.exports = {
	/**
	 * Append a script to <head>
	 * @param {Object} a script element to append
	 */
	append: function append(script) {
		document.querySelector("head").appendChild(script);
	},

	/**
	 * Remove a script from <head>
	 * @param {Object} a script element to remove
	 */
	remove: function remove(script) {
		script.parentElement.removeChild(script);
	},

	/**
	 * Create a script element
	 * @param {String} src the url to the resource to load
	 * @param {Function} (optional) callback the callback to execute when the script is loaded
	 * @param {Object} (optional) scope the scope in which to execute the callback
	 * @returns {Script} the create script element
	 */
	create: function create(src, callback, scope) {
		var script = document.createElement("script");
		script.src = src;
		script.addEventListener("load", function () {
			callback.apply(scope, arguments);
		}, true);
		return script;
	}
};
