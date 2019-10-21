'use strict';

const SELECTORS = {
  NAME: '#pv-contact-info',
};

const scrapeProfileData = page => url => {
  page
    .goto(`${url}detail/contact-info/`)
    .then(() => page.waitFor(SELECTORS.NAME))
    .then(() => Promise.all());
};

module.exports = scrapeProfileData;
