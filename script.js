/**
 * script.js - http://podefr.github.com/script/
 * Copyright(c) 2013 Olivier Scherrer <pode.fr@gmail.com>
 * MIT Licensed
 */
define(function(require){return{append:function append(script){document.querySelector("head").appendChild(script)},remove:function remove(script){script.parentElement.removeChild(script)},create:function create(src,callback,scope){var script=document.createElement("script");script.src=src;script.addEventListener("load",function(){callback.apply(scope,arguments)},true);return script}}});