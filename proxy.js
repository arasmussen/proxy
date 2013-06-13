var httpProxy = require('http-proxy');

var options = {
  router: {
    'venz.io': '127.0.0.1:8001',
    'www.venz.io': '127.0.0.1:8001',
    'rasmuzen.com': '127.0.0.1:8002',
    'www.rasmuzen.com': '127.0.0.1:8002',
    'trigrid.rasmuzen.com': '127.0.0.1:8003'
  }
};

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(80);
