var fs = require('fs');
var httpProxy = require('http-proxy');

var httpOptions = {
  router: {
    '.*\.venz\.io': '127.0.0.1:8001',
    'venz.io': '127.0.0.1:8001',
    'rasmuzen.com': '127.0.0.1:8002',
    'www.rasmuzen.com': '127.0.0.1:8002',
    'trigrid.rasmuzen.com': '127.0.0.1:8003',
    'a13n.com': '127.0.0.1:8002',
    'www.a13n.com': '127.0.0.1:8002',
    'www.sixtylarge.com': '127.0.0.1:8005',
    'sixtylarge.com': '127.0.0.1:8005',
    'www.lovelyandsilly.com': '127.0.0.1:8006',
    'lovelyandsilly.com': '127.0.0.1:8006',
    'api.productpains.com': '127.0.0.1:8007',
    'www.productpains.com': '127.0.0.1:8007',
    'productpains.com': '127.0.0.1:8007',
  },
};

var httpProxyServer = httpProxy.createServer(httpOptions);
httpProxyServer.listen(3000);

var httpsOptions = {
  https: {
    cert: fs.readFileSync('../../.ssl/www.sixtylarge.com/cert'),
    key: fs.readFileSync('../../.ssl/www.sixtylarge.com/key')
  },
  router: {
    'www.sixtylarge.com': '127.0.0.1:8005',
    'sixtylarge.com': '127.0.0.1:8004'
  }
};

var httpsProxyServer = httpProxy.createServer(httpsOptions);
httpsProxyServer.listen(3001);

// redirect [http://] || [www.] to https://sixtylarge.com
var express = require('express');
var http = express();
http.get('*', function(req, res) {
  res.redirect('https://sixtylarge.com' + req.url);
}).listen(8005);
