exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: [
    '../e2e/**/*.spec.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['start-maximized=true']
    }
  },

  onPrepare: function() {

    browser.params.globalDataForTests = true;

    browser.driver.get('http://localhost:3000/');

    browser.driver.findElement(by.css('.login')).click();
    browser.driver.findElement(by.name('login')).sendKeys('toto@gmail.com');
    browser.driver.findElement(by.name('pass')).sendKeys('password');
    browser.driver.findElement(by.css('.btn-primary')).click();

    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css('.modal')).then(function(visible) {
        return visible === false;
      })
    });

  },

  baseUrl: 'http://localhost:3000'

};