var g = G$("Homer", "Simpson");
g.greet().setLang('es').greet(true).log();

$("#login").on("click", () => {
  var loginGrtr = G$("Randy", "Marsh");
  $("#logindiv").hide();
  loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
