define(function (require) {

	return {
		append: function append(script) {
			document.querySelector("head").appendChild(script);
		},

		remove: function remove(script) {
			script.parentElement.removeChild(script);
		},

		create: function create(src, onload) {
			var script = document.createElement("script");
			script.src = src;
			script.onload = onload;
			return script;
		}
	};

});