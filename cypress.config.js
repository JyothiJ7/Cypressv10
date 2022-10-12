
const { defineConfig } = require("cypress");
const { reporters } = require("mocha");
const Mochawesome = require("mochawesome");
module.exports = defineConfig({
  projectId: '6icact',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 12000,
  chromeWebSecurity: false,
  execTimeout: 70000,
  requestTimeout: 6000,

env :{
  formUrl : "http://the-internet.herokuapp.com",
  checkbox : "http://the-internet.herokuapp.com/checkboxes"
},


// e2e: {
//   specPattern: "**/*.Feature",
// },
  "reporter": "mochawesome",
  "reporterOptions": {
     "reportDir": "cypress/results",
     "reportFilename" : "report",
     "overwrite": false,
     "html": true,
     "json": true
  }
  
});


