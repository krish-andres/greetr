(function(global, $) {
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  Greetr.prototype = {};

  // TODO set default parameters per ES6
  Greetr.init = function(firstName, lastName, language) {
    // TODO see if _this is necessary
    var _this = this;
    this.firstName = firstName || 'Eric';
    this.lastName = lastName || 'Cartman';
    this.language = language || 'en';
  }

  Greetr.init.prototype = Greetr.prototype;
  global.Greetr = global.G$ = Greetr;

})(window, jQuery);
