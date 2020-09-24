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


const getEmpleado = (id) => {

  return new Promise((resolve, reject) => {
    let search = empleados.find(empleado => empleado.id === id);

    if (!search) {
      reject(`No se encontro ningún empleado con el id ${id}`);
    } else {
      resolve(search);
    }
  });

};


const getSalario = (empleado) => {

  return new Promise((resolve, reject) => {

    let sueldo = salarios.find(salario => salario.id === empleado.id);

    if (!sueldo) {
      reject(`No se encontro salario para el usuario ${empleado.nombre}`);
    } else {
      resolve({
        id: empleado.id,
        nombre: empleado.nombre,
        salario: sueldo.salario
      });
    }

  });

};

// getEmpleado(3).then(empleado => {
//   getSalario(empleado).then(response => {
//     console.log(`El salario de ${response.nombre} es de ${response.salario}`);
//   }, err => console.log(err));
// }, err => console.log(err));

getEmpleado(4).then(empleado => {
  return getSalario(empleado);
})
  .then(response => {
    console.log(`El salario de ${response.nombre} es de ${response.salario}`);
  })
  .catch(err => console.error(err));