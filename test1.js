'use strict';

var webdriverio = require('webdriverio');
var assert = require('assert');


describe('Unic Page', function () {
	this.timeout(99999999);

	var img = './img/';

	var url = 'https://www.unic.com/de.html';

	var client = {};

	var options = {
		desiredCapabilities: {
			browserName: 'chrome'
		}
	};

	before(function (done) {
		client = webdriverio.remote(options);
		client.init(done);
		client.windowHandleSize({
    			width: 1900,
    			height: 1080
			});
	});

	it('main navigation click', function (done) {
		client
			.url(url)
			.getText('#nav-main ul > li:first-child a', function (err, text) {
				console.log('Name:', text);
				assert.equal(text, 'Referenzen');
			})
			.saveScreenshot(img + 'home.png', function (err, scr, res) {
				//
			})
			.click('#nav-main ul > li:first-child a', function (err, res) {
				assert(err === undefined);
			})
			.getTitle(function(err, title) {
				console.log('Title:', title);
				assert.equal(title, 'Referenzen – Unic');

			})
			.saveScreenshot(img + 'Referenzen-page.png', function (err, scr, res) {
				//
			})
			.call(done);
	});

	after(function (done) {
		client.end(done);
	});
});
