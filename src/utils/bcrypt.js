const bcrypt = require('bcrypt');


const password = '12345segura***';

bcrypt.hash(password, 10, function(err, hash) {
  console.log(password);
  console.log(hash);
  bcrypt.compare(password, hash, function(err, result) {
    console.log(result);
  });
});

