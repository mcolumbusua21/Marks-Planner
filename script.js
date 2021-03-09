function update(){
var date = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(date);
}

setInterval(update, 1000);
var currentHour = moment().format("H");
console.log(currentHour);
var $timeSlots = $("#time-slots");

for (var i = 9; i <= 17; i++) {
  $timeSlots.append(buildTImeSlots(i));
}

function buildTImeSlots(hour) {
    var background;
  if (+currentHour === hour) {
    background = "present";
  } else if (currentHour > hour) {
    background = "past";
  } else {
    background = "future";
  }
  return background
}
var $timeSlot = $("<div>")
  .addClass("row time-block")
  .attr("id", `hour-${currentHour}`);
var $hour = $("<div>").addClass("col-md-1 hour").text(formatHour(currentHour));
var $textArea = $("<textarea>")
var $button = $("<button>")
  .addClass("btn saveBtn col-md-1")
  .append($("<i>").addClass("fas fa-save"));

 $timeSlot.append($hour, $textArea, $button);

function formatHour(hour) {
  if (hour > 12) {
    return `$(hour - 12)PM`;
  }
  return `$(hour)AM`;
}

$(".time-block").each(function () {
  var id = $(this).attr("id");
  var timeSlotHour = id.replace("hour-", "");
  $(this).addClass("col-md-10 description " + buildTImeSlots(+timeSlotHour));
  var storedDescription = localStorage.getItem(id);
console.log(timeSlotHour);
  $(this).children("textarea").val(storedDescription);
});

$(".saveBtn").on("click", function () {
  var id = $(this).parent().attr("id");
  var description = $(this).siblings("textarea").val();
  localStorage.setItem(id, description);
  console.log(id, description);
  console.log("testing");
});
