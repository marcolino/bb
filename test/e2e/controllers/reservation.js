describe('Reservation Controller', function() {

  var pt;

  beforeEach(function() {
    //browser.get('http://localhost:9000/');
    pt = protractor.getInstance();
  });

  it('should render name in field', function() {
    pt.get('/');
    //expect(pt.getTitle()).toBe('titleX');
  });

/*
  beforeEach(function() {
    browser.get('http://localhost:9090/');
  });
*/

  describe('start from the roots...', function() {
    var one = 1;
    it('true should be true', function() {
      expect(one).toBe(1);
    });
  });

/*
  // test name insertion
  describe('test insert name', function() {
    it('should render name in field', function() {

      browser
        .url('http://github.com')
        .setValue('#js-command-bar-field','grunt-webdriver')
        .submitForm('.command-bar-form')
        .getTitle(function(err,title) {
          assert(title.indexOf('grunt-webdriver') !== -1);
        })
        .end(done);

      //namesurname.sendKeys('Marco Solari');


      // enter a name
      //input('#namesurname').enter('Marco Solari');
      // click on "add"
      //element(': button').click();
      // check that the patient has been added to the list
      //expect(element('#namesurname').text()).toMatch("Marco Solari");
    });
  });
*/

});