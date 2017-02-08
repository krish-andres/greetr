// Test code to confirm Greetr is working
var g = G$("Homer", "Simpson");
g.greet().setLang('es').greet(true).log();

// Greets user once they click the "Greet" button and adds "Reset" button
$("#greet").on("click", () => {
  var firstName = $("#firstname").val();
  var lastName = $("#lastname").val();
  var language = $("#lang").val();

  var loginGrtr = G$(firstName, lastName);
  $("#greetingdiv").hide();
  loginGrtr.setLang(language).HTMLGreeting("#greeting", true).log();

  var reset = $("<input type='button' value='reset' id=reset />");
  $("body").append(reset);
});

// Binds clicking "Reset" to reloading the page
$("body").on("click", "#reset", () => { location.reload(); });
