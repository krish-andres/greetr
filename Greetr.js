(function(global, $) {
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

    validate() {
      if (supportedLangs.indexOf(this.language) === -1) {
        this.language = "en";
        throw "Chosen language not supported";
      }

      return this;
    },

    greeting() {
      return `${greetings[this.language]} ${this.firstName}!`;
    },

    formalGreeting() {
      return `${formalGreetings[this.language]} ${this.fullName()}!`;
    },

    greet(formal = false) {
      var msg;

      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      return this;
    },

    log() {
      if (console) {
        console.log(`${logMessages[this.language]} : ${this.fullName()}`);
      }
    },

    setLang(newLang) {
      this.language = newLang;
      this.validate();
    },

    HTMLGreeting(selector, formal = true) {
      if (!$) {
        throw "jQuery not loaded!"
      } else if (!selector) {
        throw "missing jQuery selector"
      }

      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      $(selector).html(msg);
      return this;
    },
  };

  Greetr.init = function(firstName = "Eric", lastName = "Cartman", language = "en") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.language = language;
  }

  Greetr.init.prototype = Greetr.prototype;
  global.Greetr = global.G$ = Greetr;

})(window, jQuery);
