var ManageUsers = function() {

  this.get = function() {
    browser.get('/admin/users');
  };

  this.createNew = function () {
    element(by.buttonText('New User')).click();
    element(by.model('user.email')).sendKeys('test@test.gmail.com');
  };

};

module.exports.ManageUsers = ManageUsers;
