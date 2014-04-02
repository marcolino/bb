'use strict';

app.directive('paypalButton', function() {
  return {
    restrict: 'E',
    scope: {},
    compile: function(element, attrs) {
      var languageCodes = [
        'en_US',
        'es_ES',
        'fr_FR',
        'it_IT',
        'de_DE'
      ];
      var currencyCodes = [
        'AUD',
        'CAD',
        'CZK',
        'DKK',
        'EUR',
        'HKD',
        'HUF',
        'ILS',
        'JPY',
        'MXN',
        'NOK',
        'NZD',
        'PHP',
        'PLN',
        'GBP',
        'RUB',
        'SGD',
        'SEK',
        'CHF',
        'TWD',
        'THB',
        'USD'
      ];
      var buttonSizes = [
        'SM', // small
        'LG' // large
      ];
      var action = attrs.action || 'https://www.paypal.com/us/cgi-bin/webscr';
      var name = this.name;
      var business = attrs.business;
      var languageCode = attrs.languageCode || 'en_US';
      var currencyCode = attrs.currencyCode || 'USD';
      var itemName = attrs.itemName;
      var amount = attrs.amount;
      var buttonSize = attrs.buttonSize || 'SM';
      var imgAlt = attrs.imgAlt || 'Make payments with PayPal - it\'s fast, free and secure!';
      if (!business) return element.replaceWith(this.name + ': ' + 'business not specified!');
      if (!itemName) return element.replaceWith(this.name + ': ' + 'item name not specified!');
      if (!amount) return element.replaceWith(this.name + ': ' + 'amount not specified!');
      if (isNaN(parseFloat(amount)) return element.replaceWith(this.name + ': ' + 'amount is not a number!');
      if ($.inArray(languageCode, languageCodes) < 0) return element.replaceWith(this.name + ': ' + 'unforeseen language code!');
      if ($.inArray(currencyCode, currencyCodes) < 0) return element.replaceWith(this.name + ': ' + 'unforeseen currency code!');
      if ($.inArray(buttonSize, buttonSizes) < 0) return element.replaceWith(this.name + ': ' + 'unforeseen button size!');
      var imgSrc = 'http://www.paypalobjects.com/' + languageCode + '/i/btn/btn_buynow_' + buttonSize + '.gif';
      var template =
        '<form name="_xclick" action="' + action + '" method="post">' +
        '<input type="hidden" name="cmd" value="_xclick">' +
        '<input type="hidden" name="business" value="' + business + '">' +
        '<input type="hidden" name="currency_code" value="' + currencyCode + '">' +
        '<input type="hidden" name="item_name" value="' + itemName + '">' +
        '<input type="hidden" name="amount" value="' + amount + '">' +
        '<input type="image" src="' + imgSrc + '" border="0" name="submit" alt="' + imgAlt + '">' +
        '</form>';
      element.replaceWith(template);
    }
  };

});