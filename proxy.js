var httpProxy = require('http-proxy');

var options = {
  router: {
    '.*\.venz\.io': '127.0.0.1:8001',
    'venz.io': '127.0.0.1:8001',
    'rasmuzen.com': '127.0.0.1:8002',
    'www.rasmuzen.com': '127.0.0.1:8002',
    'trigrid.rasmuzen.com': '127.0.0.1:8003',
    'coin.rasmuzen.com': '127.0.0.1:8004',
    'www.sixtylarge.com': '127.0.0.1:8004',
    'sixtylarge.com': '127.0.0.1:8004',
  }
};

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(80);
