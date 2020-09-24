const puppeteer = require('puppeteer');

(async () => {
  // all code
  console.log('lanzar navegador');
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage();

  await page.goto('https://reactjs.co');

  let title1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    // console.log(h1.innerHTML);
    return h1.innerHTML;
  });

  console.log(title1);

  console.log('Cerrando navegador...');
  browser.close();
  console.log('Nvegador cerrado');
})();