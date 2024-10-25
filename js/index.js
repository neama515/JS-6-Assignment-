/// <reference types="../@types/jQuery" />
$(".nav").on("click", function () {
  let left = $(".all").css("left");
  if (left == "-570px") {
    $(".all").css("left", "-320px");
    // $(".position-fixed").css("left","0")
  }
});
$(".xMark").on("click", function () {
  $(".all").css("left", "-570px");
  // $(".position-fixed").css("left", "-250px");
});
$("h3").on("click", function () {
  $(this).next().slideToggle();
  $(".singers p").not($(this).next()).slideUp();
});

let target_date = new Date("2024-11-15T00:00:00");

setInterval(function () {
  let cur_date = new Date();
  let diff_date = target_date - cur_date;
  if (diff_date > 0) {
    let sec = Math.floor(diff_date / 1000);
    let min = Math.floor(sec / 60);
    let hours = Math.floor(min / 60) - 1;
    let days = Math.floor(hours / 24);
    $(".day").text(days + " " + "D");
    $(".hour").text((hours % 24) + " " + " H");
    $(".min").text((min % 60) + " " + "M");
    $(".sec").text((sec % 60) + " " + "S");
  } else {
    $(".day , .hour , .min , .sec").text("Time Expired");
  }
});
$("#area").keyup(function () {
  let len = $("#area").attr("maxlength") - $(this).val().length;
  $("span.text-danger").text(len);
});
$("a").on("click", function (e) {
  // e.preventDefault();
  let off = $(e.target).attr("href");
  let foff = $(off).offset().top;
  console.log(offset);

  $("body,html").animate({ scrollTop: foff }, 2000);
});
