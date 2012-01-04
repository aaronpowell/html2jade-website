var express = require('express'),
    server = express.createServer(),
    pub = __dirname + '/static/',
    views = __dirname + '/views';

server.use(server.router);
server.use(express.static(pub));
server.set('view engine', 'jade');
server.set('views', views);

server.get('/', function (req, res) {
    res.render('index');
});

server.listen(process.env.PORT || 8888);