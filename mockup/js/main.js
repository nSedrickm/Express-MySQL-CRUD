$("#next_button_one").on("click", function (e) {
  $("#question_1").toggleClass("d-none");
  $("#question_2").toggleClass("d-none");
});

$("#next_button_two").on("click", function (e) {
  $("#question_2").toggleClass("d-none");
  $("#question_3").toggleClass("d-none");
});

$("#next_button_three").on("click", function (e) {
  $("#question_3").toggleClass("d-none");
  $("#question_4").toggleClass("d-none");
});
