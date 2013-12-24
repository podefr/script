all: clean script-utils.min.js browser

clean:
	rm -f ./script-utils.min.js
	rm -f ./script-utils-browser.js

script-utils.min.js:
	cat license-mini >> script-utils.min.js
	uglifyjs js/script-utils.js >> script-utils.min.js

browser: clean script-utils.min.js
	browserify -r ./script-utils.min.js:script-utils -o script-utils-browser.js

.PHONY: all clean browser