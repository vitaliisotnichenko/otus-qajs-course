require('dotenv').config();
const pages = require('./pages')

exports.config = {
  tests: "./tests/*_test.js",
  output: "./output",
  timeout: 10000,
  helpers: {
    Puppeteer: {
      url: "https://try.vikunja.io",
      show: true,
      windowSize: "1200x900",
      waitForNavigation: "networkidle0",
    },
    REST: {},
  },
  include: {
    I: "./steps_file.js",
    ...pages
  },
  bootstrap: null,
  mocha: {},
  name: "otus-qajs-course",
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};

