(function (exports) {
	exports.convert = function (html, cb) {
		$.post('/convert', { html: html }, function (jade) {
			console.log(arguments);
		});
	};
}).call(window, window.app = {});