const { defineConfig } = require('cypress')
const {allureCypress} = require("allure-cypress/reporter");

module.exports = defineConfig({
  viewportWidth: 1728,
  viewportHeight: 918,
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return require('./cypress/plugins/index.js')(on, config)
      return config;
      
    },
  },
})