all: clean script-utils.js browser

clean:
	rm -f ./script-utils.min.js
	rm -f ./script-utils-browser.js

script-utils.js:
	cat license-mini >> script-utils.min.js
	uglifyjs js/script-utils.js >> script-utils.min.js

browser:
	browserify -r ./script-utils.min.js:script-utils -o script-utils-browser.js

.PHONY: all clean browser