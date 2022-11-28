const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "tmi5s4",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
