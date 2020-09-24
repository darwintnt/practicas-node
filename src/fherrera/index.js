let empleados = [
  {
    id: 1,
    nombre: 'Jose'
  },
  {
    id: 2,
    nombre: 'Maria'
  },
  {
    id: 3,
    nombre: 'Carlos'
  },
  {
    id: 4,
    nombre: 'Juliana'
  },
];


let salarios = [
  {
    id: 1,
    salario: 250.000
  },
  {
    id: 2,
    salario: 180.000
  },
  {
    id: 3,
    salario: 750.000
  }
];



const getEmpleado = (id, callback) => {

  let search = empleados.find(empleado => empleado.id === id);

  if (!search) {
    callback('No se encontro ningún empleado con ese id');
  } else {
    callback(null, search);
  }
};


const getSalario = (empleado, callback) => {

  let sueldo = salarios.find(salario => salario.id === empleado.id);

  if (!sueldo) {
    callback(`No se encontro salario para el usuario ${empleado.nombre}`);
  } else {
    callback(null, {
      id: empleado.id,
      nombre: empleado.nombre,
      salario: sueldo.salario
    });
  }

};

getEmpleado(4, (err, empleado) => {

  if (err) {
    return console.log(err);
  }

  getSalario(empleado, (err, response) => {

    if (err) {
      return console.log(err);
    }

    console.log(`El salario de ${response.nombre} es de ${response.salario}`);
  });
});

