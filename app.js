var g = G$("Homer", "Simpson");
g.greet().setLang('es').greet(true).log();

$("#greet").on("click", () => {
  var firstName = $("#firstname").val();
  var lastName = $("#lastname").val();
  var language = $("#lang").val();

  var loginGrtr = G$(firstName, lastName);
  $("#greetingdiv").hide();
  loginGrtr.setLang(language).HTMLGreeting("#greeting", true).log();
});
