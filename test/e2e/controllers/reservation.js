describe('Reservation Controller', function() {

  var pt;

  beforeEach(function() {
    pt = protractor.getInstance();
    pt.ignoreSynchronization = true;
    pt.driver.get('/#/reserve'); // just use the plain old webdriver here, it won't complain if Angular isn't loaded yet.
  });

  describe('start from the roots...', function() {
    var one = 1;
    it('true should be true', function() {
      expect(one).toBe(1);
    });
  });

  // test name insertion
  describe('test insert name', function() {
    it('should render name in field', function() {

      pt.get('/#/reserve');

      element(by.model('name')).sendKeys('Marco');
      element(by.model('howmany')).sendKeys('2');
      element(by.model('when')).sendKeys('December, 31, 2014');
      element(by.model('duration')).sendKeys('2');
      //element(by.model('time')).sendKeys('12:00');
      //pt.findElement(protractor.By.css('select option:1')).click();
      pt.selectOption = selectOption.bind(pt);
      pt.selectOption(protractor.By.id('time'), '12:00');

      //element(by.model('car')).sendKeys('We need parking');
      pt.selectOption(protractor.By.id('car'), 'We need parking');

      element(by.model('email')).sendKeys('marcosolari@gmail.com');

      pt.findElement(protractor.By.id('submit')).click();
      //pt.findElement(protractor.By.css('Button[type="submit"]')).click(); // TRY THIS...

      pt.waitForAngular();

      // Assert that the text element has the expected value.
      // Protractor patches 'expect' to understand promises.
      //expect(element(by.model('name')).getText()).toEqual('Marco');
    });

    it('should render name in field', function() {
      //pt.get('/#/reserve');
      expect(pt.getCurrentUrl()).toContain("Thanks");
    }, 10000);
  });

});

function selectOption(selector, item) {
  var selectList, desiredOption;

  selectList = this.findElement(selector);
  selectList.click();

  selectList.findElements(protractor.By.tagName('option'))
    .then(function findMatchingOption(options) {
      options.some(function(option) {
        option.getText().then(function doesOptionMatch(text){ 
          if (item === text) {
            desiredOption = option;
            return true;
          }
        });
      });
    })
    .then(function clickOption() {
      if (desiredOption) {
        desiredOption.click();
      }
    });
}