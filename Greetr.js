(function(global, $) {
  // Instantiates the Greetr.init function constructor
  var Greetr = (firstName, lastName, language) => {
    return new Greetr.init(firstName, lastName, language);
  };

  var supportedLangs = ["en", "es"];

  var greetings = {
    en: "Hello",
    es: "Hola"
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos"
  };

  var logMessages = {
    en: "Logged in",
    es: "Inicio sesion"
  };

  Greetr.prototype = {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    // Ensure that the language chosen is supported
    validate() {
      if (supportedLangs.indexOf(this.language) === -1) {
        this.language = "en";
        throw "Chosen language not supported";
      }
    },

    greeting() {
      return `${greetings[this.language]} ${this.firstName}!`;
    },

    formalGreeting() {
      return `${formalGreetings[this.language]} ${this.fullName()}!`;
    },

    greet(formal = false) {
      var msg = this.setGreeting(formal);

      if (console) {
        console.log(msg);
      }

      return this;
    },

    // Logs the language and fullName given
    log() {
      if (console) {
        console.log(`${logMessages[this.language]} : ${this.fullName()}`);
      }
    },

    // Sets new language and ensures that it's valid
    setLang(newLang) {
      this.language = newLang;
      this.validate();
      return this;
    },

    setGreeting(formal = false) {
      var msg;

      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      return msg;
    },

    // Populates a selector with the formal or informal greeting
    HTMLGreeting(selector, formal = true) {
      if (!$) {
        throw "jQuery not loaded!"
      } else if (!selector) {
        throw "missing jQuery selector"
      }

      var msg = this.setGreeting(formal);
      $(selector).html(msg);
      return this;
    },
  };

  Greetr.init = function(firstName = "Eric", lastName = "Cartman", language = "en") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.language = language;
    this.validate();
  }

  Greetr.init.prototype = Greetr.prototype;
  global.Greetr = global.G$ = Greetr;

})(window, jQuery);
