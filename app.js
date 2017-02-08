var g = G$("Homer", "Simpson");
g.greet().setLang('es').greet(true).log();

$("#login").on("click", () => {
  var firstName = $("#firstname").val();
  var lastName = $("#lastname").val();
  var language = $("#lang").val();

  var loginGrtr = G$(firstName, lastName);
  $("#logindiv").hide();
  loginGrtr.setLang(language).HTMLGreeting("#greeting", true).log();
});
