'use strict';

const puppeteer = require('puppeteer-core');
const fetch = require('node-fetch');

const createBrowserConnection = async () => {
  // Make a GET request to local Chrome(or Chromium) websocket debug server
  // to retrieve the websocket debugger url for establishing browser connection
  const { webSocketDebuggerUrl } = await fetch(
    env.browser.DEBUGGING_CONFIG_URL,
  ).then(res => res.json());

  const connectionOptions = {
    browserWSEndpoint: webSocketDebuggerUrl,
    ignoreHTTPSErrors: true,
    defaultViewport: {
      width: env.browser.VIEWPORT.WIDTH,
      height: env.browser.VIEWPORT.HEIGHT,
    },
  };

  // Return a new puppeteer browser instance which is connected to Chrome(or Chromium)
  return await puppeteer.connect(connectionOptions);
};

module.exports = createBrowserConnection;
