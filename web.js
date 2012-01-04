var express = require('express'),
    html2jade = require('html2jade'),
    server = express.createServer(),
    pub = __dirname + '/static/',
    views = __dirname + '/views';

server.use(express.bodyParser());
server.use(express.static(pub));
server.set('view engine', 'jade');
server.set('views', views);

server.post('/convert', function (req, res) {
	var html = req.body.html;

    html2jade.convertHtml(html, {}, function (err, jade) {
        res.json({ jade: jade });
    });
});

server.get('/', function (req, res) {
    res.render('index');
});

server.listen(process.env.PORT || 9999);