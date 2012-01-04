var express = require('express'),
    server = express.createServer(),
    pub = __dirname + '/static/',
    views = __dirname + '/views'/*,
    html2jade = require('html2jade')*/;

server.use(express.bodyParser());
server.use(express.static(pub));
server.set('view engine', 'jade');
server.set('views', views);

server.post('/convert', function (req, res) {
	console.log(req.body);

	res.json('jade here');
});

server.get('/', function (req, res) {
    res.render('index');
});

server.listen(process.env.PORT || 9999);