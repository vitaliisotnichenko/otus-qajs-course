exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  timeout: 10000,
  helpers: {
    Puppeteer: {
      url: 'http://todomvc.com/examples/emberjs',
      show: true,
      windowSize: '1200x900',
      waitForNavigation: 'networkidle0',
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'otus-qajs-course',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}