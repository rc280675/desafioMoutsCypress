const { defineConfig } = require("cypress");

module.exports = defineConfig({
reporter: 'mochawesome',
reporterOptions: {
  reportDir: 'cypress/reports',
  overwrite: false,
  html: false,
  json: true,
  embeddedScreenshots: true,
  inlineAssets: true
},

  e2e: {
    baseUrl: "https://front.serverest.dev",
  

    env: {
         apiUrlrestful: "https://restful-booker.herokuapp.com"
    },
      
         trashAssetsBeforeRuns: true
  }

});