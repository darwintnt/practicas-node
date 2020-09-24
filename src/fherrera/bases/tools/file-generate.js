const fs = require('fs');

const fileGenerate = (base, data) => {

  return new Promise((resolve, reject) => {

    if (!base && !data) {
      reject('No se puede generar el archivo'.red);
    } else {
      fs.writeFile(`files/tabla-${base}.txt`, data, (err) => {
        if (err) reject(err);
        resolve(`El archivo tabla-${base}.txt ha sido creado!`.green);
      });
    }

  });

};

module.exports = {
  fileGenerate
};