var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id

    console.log(queryData);
    console.log('>>> ' + queryData.id);

    if(_url == '/'){
      // _url = '/index.html';
      title = 'WELCOME'
    }

    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err,desc){
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

      response.end(template);
    })


    // response.end(fs.readFileSync(__dirname + _url));
    // response.end('kook : ' +url)

});
app.listen(3000);
