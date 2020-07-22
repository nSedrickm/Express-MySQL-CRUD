
var response_container = $("#response_container");

$("#question_1_no").on("click", function (e) {
  $("#end_modal").modal("show");
});

$("#question_1_next").on("click", function (e) {
  q1_answer = $("#question_1_next").text();
  response_container.text("");
  response_container.append(`<p class="card-text">1) Consent given: ` + q1_answer + `</p>`)

  $("#question_1").toggleClass("d-none");
  $("#spinner_modal").modal("show");
  setTimeout(function () {
    $("#spinner_modal").modal("hide");
  }, 1500);

  $("#question_number").text("2");
  $("#question_2").toggleClass("d-none");
});



$("#question_2_next").on("click", function (e) {
  q2_answer = $("#q2_answer").val();
  response_container.append(`<p class="card-text">2) ` + q2_answer + `</p>`)

  $("#question_2").toggleClass("d-none");

  $("#spinner_modal").modal("show");
  setTimeout(function () {
    $("#spinner_modal").modal("hide");
  }, 1500);

  $("#question_number").text("3");
  $("#question_3").toggleClass("d-none");
});

$("#question_3_next").on("click", function (e) {

  q3_answer = $("#q3_answer").val();
  response_container.append(`<p class="card-text"> 3)` + q3_answer + `</p>`)
  $("#question_3").toggleClass("d-none");
  $("#spinner_modal").modal("show");
  setTimeout(function () {
    $("#spinner_modal").modal("hide");
  }, 1500);
  $("#question_4").toggleClass("d-none");
});
