const { argv } = require('./config/yargs');
const { multiplicar } = require('./tools/multiplicar');
const { fileGenerate } = require('./tools/file-generate');

let base = argv.base;
let limit = argv.limit;

let generateTable = async (base) => {
  let data = await multiplicar(base, limit);
  let file = fileGenerate(base, data);

  return file;
};

generateTable(base)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));






