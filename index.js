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
const scrapeProfileData = require('./src/scraper');

(function main() {
  createBrowserConnection()
    .then(browser => browser.newPage())
    .then(page => {
      const scrape = scrapeProfileData(page);

      scrape('https://www.linkedin.com/in/shemsedinov/');
    });
})();
