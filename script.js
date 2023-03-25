// Display the current day at the top of the calendar
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);

// Check the current time and color-code each timeblock
var currentHour = moment().hour();

$(".row").each(function() {
var hourBlock = parseInt($(this).children(".hour").text().replace("AM", "").replace("PM", ""));
if (hourBlock < currentHour) {
$(this).children(".description").addClass("past");
} else if (hourBlock === currentHour) {
$(this).children(".description").addClass("present");
} else {
$(this).children(".description").addClass("future");
}
});

// Save events to local storage
$(".saveBtn").on("click", function() {
var eventId = $(this).attr("id").replace("btn", "");
var eventText = $("#" + eventId).val();
localStorage.setItem("event-" + eventId, eventText);
});

// Load saved events from local storage
$(".description").each(function() {
var eventId = $(this).attr("id");
var savedEvent = localStorage.getItem("event-" + eventId);
$(this).val(savedEvent);
});