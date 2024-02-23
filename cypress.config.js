const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
      on("task", {
        log(args) {
          if (args[args.length - 1] === "logTable") {
            args.pop();
            console.table(...args);
          }
          else console.log(...args);
          return null;
        }
      });
    },
    video: false,
    specPattern: "**/**/**/*.feature",
    excludeSpecPattern: ["*.js", "*.md"],
    viewportWidth: 1280,
    viewportHeight: 800
  }
});
