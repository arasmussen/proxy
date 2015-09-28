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
    'www.sixtylarge.com': '127.0.0.1:8004',
    'sixtylarge.com': '127.0.0.1:8004',
    'www.lovelyandsilly.com': '127.0.0.1:8006',
    'lovelyandsilly.com': '127.0.0.1:8006',
    'api.productpains.com': '127.0.0.1:8007',
    'www.productpains.com': '127.0.0.1:8007',
    'productpains.com': '127.0.0.1:8007',
  },
};

var httpProxyServer = httpProxy.createServer(httpOptions);
httpProxyServer.listen(3000);

// var httpsOptions = {
//   https: {
//     cert: fs.readFileSync('../../.ssl/productpains.com/cert'),
//     key: fs.readFileSync('../../.ssl/productpains.com/key')
//   },
//   router: {
//     'api.productpains.com': '127.0.0.1:8007',
//     'www.productpains.com': '127.0.0.1:8007',
//     'productpains.com': '127.0.0.1:8007'
//   },
// };
//
// var httpsProxyServer = httpProxy.createServer(httpsOptions);
// httpsProxyServer.listen(3001);
//
// // redirect [http://] || [www.] to https://productpains.com
// var express = require('express');
// var http = express();
// http.get('*', function(req, res) {
//   res.redirect('https://productpains.com' + req.url);
// }).listen(8008);
