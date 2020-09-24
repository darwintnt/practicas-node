const OS = require('os');
const SIZE = 1024;

// console.log(OS.arch());
// console.log(OS.platform());
// console.log(OS.cpus().length);
// console.log(OS.constants);
// console.log(OS.hostname());
// console.log(OS.freemem());
// console.log(OS.totalmem());
// console.log(OS.hostname());
// console.log(OS.networkInterfaces());
// console.log(OS.userInfo());

const convert = (bytes, type) => {

  let response = '';

  switch (type) {
    case 'kb':
      response = bytes / SIZE + ' Kb';
      break;
    case 'mb':
      response = parseFloat((bytes / Math.pow(SIZE, 2))).toFixed(2)  + ' Mb';
      break;
    case 'gb':
      response = parseFloat(bytes / Math.pow(SIZE, 3)).toFixed(2)  + ' Gb';
      break;
    default:
      response = bytes + ' bytes';
      break;
  }

  return response;
};

console.log(convert(OS.freemem()));
console.log(convert(OS.freemem(), 'kb'));
console.log(convert(OS.freemem(), 'mb'));
console.log(convert(OS.freemem(), 'gb'));

console.log(convert(OS.totalmem()));
console.log(convert(OS.totalmem(), 'kb'));
console.log(convert(OS.totalmem(), 'mb'));
console.log(convert(OS.totalmem(), 'gb'));