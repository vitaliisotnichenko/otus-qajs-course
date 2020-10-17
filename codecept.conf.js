exports.config = {
  output: './output/allure',
  helpers: {
    Webdriver: {
      url: 'http://automationpractice.com',
      browser: 'chrome',
      restart: true,
      host: 'localhost',
      port: 4444,
      protocol: 'http',
      windowSize: '1600X1080'
    },
    REST: {}
  },
  include: {
    routes: './lib/utils/routes.js',
    homePO: '/Users/vitaliisotnichenko/Testing/Otus/otus-qajs-course/pages/homePO.js',
    signInPO: '/Users/vitaliisotnichenko/Testing/Otus/otus-qajs-course/pages/signInPO.js',
    accountCreationPO: '/Users/vitaliisotnichenko/Testing/Otus/otus-qajs-course/pages/accountCreationPO.js',
    contactUsPO: '/Users/vitaliisotnichenko/Testing/Otus/otus-qajs-course/pages/contactUsPO.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
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
      sessionTimeout: '20m',
      enableVideo: false,
      enableLog: true,
      enableVNC: true
    },
  },
  tests: './tests/**/*_test.js',
  timeout: 10000,
  name: 'otus-qajs-course'
}