let suma = 0;

console.time('bucle');
for (let i = 0; i < 1000000000; i++) {
  suma += i;
}

console.time('async');
asyncFunc().then(() => {
  console.timeEnd('async');
});


function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Termina el proceso asincrono');
      resolve();
    }, 5000);
  });
}

console.timeEnd('bucle');


console.log(suma);