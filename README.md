script
======

Script utils to create script elements, add and remove them from &lt;head&gt;

Installation
=============

```bash
npm install script-utils
```

In the browser:
===============

```html
<script src="script-utils-browser.js"></script>
```

Usage
=====

```js
var script = require("script-utils");

// create a new script element with an onload callback
var newScript = script.create("source/to/file", function onload() {
	// do something when script is loaded;
}, this);

// Append the script to &lt;head&gt;
script.append(newScript);

// Remove script from &lt;head&gt;
script.remove(newScript);

```

Licence
=======

MIT



