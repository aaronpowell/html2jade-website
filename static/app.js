(function (exports) {
	'use strict';

	exports.convert = function (html, cb) {
		$.post('/convert', { html: html }, cb);
	};

    $('form').submit(function (e) {
        e.preventDefault();

        var form = $(this);
        var html = htmlEditor.getValue();

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


            jadeEditor.setValue(result.jade);
        });
    });
    
    var htmlEditor = CodeMirror.fromTextArea(document.getElementById("html"), {
        styleActiveLine: true,
        matchBrackets: true
    });
    
    var jadeEditor = CodeMirror.fromTextArea(document.getElementById("jade"), {
        styleActiveLine: true,
        matchBrackets: true,
        mode: 'jade'
    });
}).call(window, window.app = {});