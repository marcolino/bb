describe('Reservation Controller', function() {

  beforeEach(function() {
    browser().navigateTo('/#/reserve');
  });

  // test name insertion
  describe('test insert name', function() {

    it('should render name in field', function() {
        // enter a name
        input('#namesurname').enter('Marco Solari');
        // click on "add"
        //element(': button').click();
        // check that the patient has been added to the list
        expect(element('#namesurname').text()).toMatch("Marco Solari")
    });

  });
});