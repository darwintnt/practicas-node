function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 6 + 8;
      callback(null, a);
    } catch (err) {
      callback(err, null);
    }
  }, 2000);
}

asincrona((err, resp) => {

  if (err) {
    console.error('hay un error');
    console.error(err);
    return false;
    // throw err; // No va a funcionar en funciones asincronas.
  }

  console.log(resp);

});


