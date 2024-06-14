// creat web server
// 1. Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');
// 2. Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var path = url.parse(request.url).pathname;
  switch (path) {
    case '/':
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write('<h1>Hello!</h1>');
      response.end();
      break;
    case '/comments':
      fs.readFile(__dirname + '/comments.json', function (error, data) {
        if (error) {
          response.writeHead(404);
          response.write("opps this doesn't exist - 404");
          response.end();
        } else {
          response.writeHead(200, { 'Content-Type': 'text/json' });
          response.write(data);
          response.end();
        }
      });
      break;
    default:
      response.writeHead(404);
      response.write("opps this doesn't exist - 404");
      response.end();
      break;
  }
});
// 3. Listen on port 8000, IP defaults to