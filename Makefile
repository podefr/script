all: clean script.js

clean:
	rm -f script.js

script.js:
	cat license-mini >> script.js
	uglifyjs js/script.js >> script.js

.PHONY: clean