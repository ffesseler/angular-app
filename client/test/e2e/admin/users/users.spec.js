var ManageUsers = require('./users.po').ManageUsers;

describe('users', function () {
  var userPage = new ManageUsers();

  beforeEach(function () {
    userPage.get();
  });

  it('should create a user', function () {
    userPage.createNew();
  });
});