'use strict';

// Bootstrap app configs
global.env = Object.defineProperties(
  {},
  {
    browser: {
      value: require('./configs/browser'),
    },
  }
);

const createBrowserConnection = require('./lib/browser');

(function main() {
  createBrowserConnection()
    .then(browser => browser.newPage())
    .then(page =>
      page.goto('https://www.linkedin.com/in/pavlo-batov-7b8b0b192/')
    );
})();
