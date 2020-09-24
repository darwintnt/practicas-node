const colors = require('colors');
const argv = require('yargs').command(
  'listar', 'Imprime en consola la tabla de multiplicar',
  {
    base: {
      demand: true,
      alias: 'b'
    },
    limit: {
      default: 10,
      alias: 'l'
    }
  })
  .help()
  .argv;

  module.exports = {
    argv
  };