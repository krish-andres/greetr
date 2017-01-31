(function(global, $) {
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  Greetr.prototype = {};

  Greetr.init = function(firstName = 'Eric', lastName = 'Cartman', language = 'en') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.language = language;
  }

  Greetr.init.prototype = Greetr.prototype;
  global.Greetr = global.G$ = Greetr;

})(window, jQuery);
