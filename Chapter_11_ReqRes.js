const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.end('About page');
  } else {
    res.end('Home page');
  }
});
server.listen(3000);