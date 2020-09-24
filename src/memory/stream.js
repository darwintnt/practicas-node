const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF8');

// readableStream.on('data', function(chuck) {
//   data += chuck;
// });

// readableStream.on('end', function() {
//   console.log(data);
// });

// process.stdout.write('hola');
// process.stdout.write('es');
// process.stdout.write('tarde');

const transform = stream.Transform;

function mayus() {
  transform.call(this);
}

util.inherits(mayus, transform);

mayus.prototype._transform = function(chunk, codi, cb) {
  let chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayuscula = new mayus();

readableStream.pipe(mayuscula).pipe(process.stdout);


