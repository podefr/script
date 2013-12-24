script
======

Script utils to create script elements, add and remove them from <head>

Installation
=============

```bash
npm install script-utils
```

In the browser:
===============

```html
<script src="script-utils-browser"></script>
```

Usage
=====

```js
var script = require("script-utils");

// create a new script element with an onload callback
var newScript = script.create("source/to/file", function onload() {
	// do something when script is loaded;
}, this);

// Append the script to <head>
script.append(newScript);

// Remove script from <head>
script.remove(newScript);

```

Licence
=======

MIT



