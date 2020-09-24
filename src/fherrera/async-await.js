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


const getEmpleado = async (id) => {

    let search = empleados.find(empleado => empleado.id === id);

    if (!search) {
      throw new Error(`No se encontro ningún empleado con el id ${id}`);
    } else {
      return search;
    }

};


const getSalario = async (empleado) => {

  let sueldo = salarios.find(salario => salario.id === empleado.id);

  if (!sueldo) {
    throw new Error(`No se encontro salario para el usuario ${empleado.nombre}`);
  } else {
    return {
      id: empleado.id,
      nombre: empleado.nombre,
      salario: sueldo.salario
    };
  }

};

let getInformation = async (id) => {
  let empleado = await getEmpleado(id);
  let salario = await getSalario(empleado);

  return `El salario de ${salario.nombre} es de ${salario.salario}`;
};

getInformation(4)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));