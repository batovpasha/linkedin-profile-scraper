'use strict';

// Bootstrap app configs
Object.defineProperties(global, {
  browser: {
    value: require('./configs/browser'),
  },
});

const createBrowserConnection = require('./lib/browser');

(async () => {
  const browser = await createBrowserConnection();
  const page = await browser.newPage();

  await page.goto('https://www.linkedin.com/in/pavlo-batov-7b8b0b192/');
})();
