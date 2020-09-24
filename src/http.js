const http = require('http');

http.createServer(router).listen(3000);

console.log('Escuchando http en el puerto 3000');


function router(request, response) {

  switch (request.url) {
    case '/hola':
      response.write('Hola mundo...');
      response.end();
      break;
    default:
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.write('Error: no se que quieres!!');
      response.end();
  }
}