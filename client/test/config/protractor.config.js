exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: [
    '../e2e/simple.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['start-maximized=true']
    }
  },

  baseUrl: 'http://localhost:3000'

};