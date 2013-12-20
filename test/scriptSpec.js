define(function (require) {

	var chai = require("chai"),
		script = require("script");

		require("sinon");

	var expect = chai.expect;

	describe("GIVEN script", function(){
		describe("WHEN calling append with a scriptElement", function () {
			var appendChild = null,
				scriptElement = null;

			beforeEach(function () {
				appendChild = sinon.spy();
				sinon.stub(document, "querySelector").returns({
					appendChild: appendChild
				});
				scriptElement = document.createElement("script");
				script.append(scriptElement);
			});

			it("THEN appends the script to the document header", function () {
				expect(document.querySelector.calledWith("head")).to.be.true;
				expect(appendChild.calledWith(scriptElement)).to.be.true;
			});

			afterEach(function () {
				document.querySelector.restore();
			});
		});

		describe("WHEN calling remove with a scriptElement", function () {
			var scriptElement = null;

			beforeEach(function () {
				scriptElement = {
					parentElement: {
						removeChild: sinon.spy()
					}
				}

				script.remove(scriptElement);
			});

			it("THEN removes the script from its parent", function () {
				expect(scriptElement.parentElement.removeChild.calledWith(scriptElement)).to.be.true;
			});
		});

		describe("WHEN calling create", function () {
			var returnedScript = null,
				createdElement = null;

			beforeEach(function () {
				createdElement = {};

				sinon.stub(document, "createElement").returns(createdElement);

				returnedScript = script.create('src');
			});

			afterEach(function () {
				document.createElement.restore();
			});

			it("THEN returns a script element with the given src", function () {
				expect(document.createElement.calledWith("script")).to.be.true;
				expect(returnedScript).to.equal(createdElement);
			});

			describe("AND providing an onload callback", function () {
				var callback = null;

				beforeEach(function () {
					callback = function () {};

					returnedScript = script.create('src', callback);
				});

				it("THEN returns a script with the onload callback assigned", function () {
					expect(returnedScript.onload).to.equal(callback);
				});
			});
		});
	});

});
