const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  pageLoadTimeout: 40000,
  defaultCommandTimeout: 40000,

  e2e: {
    "baseUrl": "https://www.magicviser.com/",
    "env": {
      "apiBaseUrl": "https://api.magicviser.com/",
      "apiEndpoints": {
        "flight": "/flight-search?destinationLocationCode=CXR&departureDate=2023-09-14&originLocationCode=AOR&returnDate=2023-09-15&adults=2&infants=0&children=2&oneStop=0&max=70&currencyCode=USD",
        "users": "/flight-confirmation"
      }
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    
  },

  //chromeWebSecurity: false,
  "viewportWidth": 1920,     // Set the default viewport width
  "viewportHeight": 1080 ,
  experimentalStudio: true,
  chromeWebSecurity: false,
  //"iframeLoadTimeout": 0


});
