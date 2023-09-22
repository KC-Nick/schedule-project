//Makes sure code waits for page to finish loading before loading
$(document).ready(function () {
  console.log("ready!");
});
//Adds current day to page
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY hh:mm:ss'));
//Holds onto information submitted in the local storage
function handleFormSubmit(event) {
  event.preventDefault();
  var text = $(this).siblings(".description").val();
  var rowTime = $(this).parent().attr("id");
  console.log(rowTime, text);
  localStorage.setItem(rowTime, text);
};
//Styles the box based on what time it is
function timeStyle() {
  var currentTime = dayjs().hour();
  var rowHour = parseInt($(this).attr("id").split("-")[1]);
  console.log(typeof rowHour, typeof currentTime);
  if (rowHour < currentTime) {
  $(this).addClass("past");
  } else if (rowHour === currentTime) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
}
//Determines whether the boxes are present/past/future
for (let index = 9; index < 18; index++) {
  $("#hour-" + index + " .description").val(localStorage.getItem("hour-" + index));
}
var timeBlock = $(".time-block");
console.log(timeBlock);
timeBlock.each(timeStyle)
//Save button functionality
$(".saveBtn").on('click', handleFormSubmit);