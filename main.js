var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if(pathname === '/') {
    if(queryData.id === undefined) {
      var title = 'WELCOME~~'
      var desc = 'Hello world ^_^'
      var template = `
      <!doctype html>
      <html>
      <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
      </head>
      <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=JS">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p>
      ${desc}
      </p>
      </body>
      </html>
      `;
      response.writeHead(200)
      response.end(template);
    } else {
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err,desc){
        var title = queryData.id
        var template = `
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JS">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>
        ${desc}
        </p>
        </body>
        </html>
        `;
        response.writeHead(200)
        response.end(template);
      });
    }


  } else {
    response.writeHead(404)
    response.end('Not found. Noooooo');
  }

});
app.listen(3000);
