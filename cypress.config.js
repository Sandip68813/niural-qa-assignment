const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*',
    "env":{
      "MAILOSAUR_API_KEY": "7YfF4xZqa9Sbl2T2U72pRhWiZBrlarmJ",
      "MAILOSAUR_SERVER_ID": "gju0xdj2"
    }
  },
});
