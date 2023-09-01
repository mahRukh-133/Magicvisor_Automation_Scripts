const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://www.magicviser.com/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    
  },

  chromeWebSecurity: false,
  "viewportWidth": 1920,     // Set the default viewport width
  "viewportHeight": 1080 ,
  experimentalStudio: true,


});
