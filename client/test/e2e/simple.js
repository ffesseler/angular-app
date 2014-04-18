describe('login', function () {

    beforeEach(function() {
        browser.get('/');
    });

    it('should login as toto', function () {
        var loginBtn = element(by.css('.login'));
        expect(loginBtn.isPresent()).toBe(true);
        loginBtn.click();
        var loginModal = element(by.css('.modal'));
        expect(loginModal.isPresent()).toBe(true);
        element(by.model('user.email')).sendKeys('toto@gmail.com');
        element(by.model('user.password')).sendKeys('password');
        element(by.buttonText('Sign in')).click().then(function () {
            expect(loginModal.isPresent()).toBe(false);
        });
    });
});
