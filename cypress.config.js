const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.tradicia-k.ru/',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 960,
    hideXHRInCommandLog: true,
  },
});

