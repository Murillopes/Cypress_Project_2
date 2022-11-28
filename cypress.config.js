const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    projectId: "7g11gb",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
