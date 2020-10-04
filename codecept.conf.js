require('dotenv').config();
const pages = require('./pages')

exports.config = {
  tests: "./tests/**/*_test.js",
  output: "./output/allure",
  timeout: 10000,
  helpers: {
    Webdriver: {
      url: process.env.BASE_URL,
      browser: 'chrome',
      restart: true,
      host: 'localhost',
      port: 4444,
      protocol: "http",
      windowSize: "1600X1080"

    },
    REST: {},
  },
  include: {
    // I: "./steps_file.js",
    routes: "./lib/utils/routes.js",
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
    allure: {
      enabled: true,
      outputDir: './output/allure'
    },
    selenoid: {
      enabled: true,
      deletePassed: false,
      autoCreate: false,
      autStart: false,
      sessionTimeout: "20m",
      enableVideo: false,
      enableLog: true,
      enableVNC: true

    }
  },
};

