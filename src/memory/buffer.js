// let buffer = Buffer.alloc(1989);
// let buffer = Buffer.from([1,2,6]);
let buffer = Buffer.from('Esto es un saludo');

let abecedario = Buffer.alloc(26);

// console.log(buffer);
// console.log(buffer.toString());

for (let i = 0; i < 26; i++) {
  abecedario[i] = i + 97;
}

console.log(abecedario.toString());
// console.log(buffer.toString());