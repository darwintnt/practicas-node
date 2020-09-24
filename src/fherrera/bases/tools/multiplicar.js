const colors = require('colors');
const multiplicar = (base, limit = 10) => {

  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject('Por favor ingrese una base válida'.red);
      return;
    }

    let data = '';

    for (let i = 1; i <= limit; i++) {
      data += `${base} x ${i} = ${base * i}.green\n`;
    }

    resolve(data);
  });

};

module.exports = {
  multiplicar
};