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
            if (!/<html>/.test(html)) {
                result.jade = result.jade
                                .replace('html\n', '')
                                .replace(/^\s\s/, '')
                                .replace(/\n\s\s/, '\n');
            }

            if (!/<body>/.test(html)) {
                result.jade = result.jade
                                .replace(/.*body\n/, '')
                                .replace(/^\s\s/, '')
                                .replace(/\n\s\s/, '\n');
            };


            jade.setValue(result.jade);
        });
    });
    
    CodeMirror.fromTextArea(document.getElementById("html"), {
        styleActiveLine: true,
        matchBrackets: true
    });
    
    var jade = CodeMirror.fromTextArea(document.getElementById("jade"), {
        styleActiveLine: true,
        matchBrackets: true,
        mode: 'jade'
    });
}).call(window, window.app = {});