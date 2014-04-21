describe('login', function () {

    beforeEach(function() {
        browser.get('/admin/projects');
    });

    it('should login as toto', function () {
      expect(browser.params.globalDataForTests).toBe(true);
    });
});
