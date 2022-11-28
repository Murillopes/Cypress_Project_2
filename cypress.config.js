const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "7g11gb",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
