const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "tmi5s4",
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false
  },
});
