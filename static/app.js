(function (exports) {
	'use strict';

	exports.convert = function (html, cb) {
		$.post('/convert', { html: html }, cb);
	};

    $('form').submit(function (e) {
        e.preventDefault();

        var form = $(this);
        var html = form.find('#html').val();

        exports.convert(html, function (result) {
            form.find('#jade').val(result.jade);
        });
    });
}).call(window, window.app = {});