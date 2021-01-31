var currentDate = moment().format('dddd MMMM Do YYYY');

// set the time and the date at the top of the page when the page opens. 
$(".current-day").text(currentDate);

// time blocks should change color when either past, present, or future
// this will require the need to grab the current hour or current time
// this will also need to check each time block on the page to see if it's past, present, or fuuture


// user will input information onto the calendar and this info will need to be saved locally and printed to the screen. 
// make sure the data saves when the save button is hit
// set row text based on what has been saved into local storage by the user



var currentTime = moment().hours();

$(".row").each(function() {
    var pastTime = $(this).attr("id");

    if (currentTime > pastTime) {
        $(this).find("textarea").addClass("past-time");
        $(this).find("textarea").prop("disabled", true);
        $(this).find("button").addClass("hide-btn");
    } else if (currentTime == pastTime) {
        $(this).find("textarea").addClass("current-time");
    }












})




$(".saveBtn").on("click", function() {
    var tasks = $(this).siblings(".col-md-9").val().trim();
    var timeOfDay = $(this).parent().attr("id");
    window.localStorage.setItem(timeOfDay, tasks);
})

$("#6 .col-md-9").val(localStorage.getItem("6"));
$("#7 .col-md-9").val(localStorage.getItem("7"));
$("#8 .col-md-9").val(localStorage.getItem("8"));
$("#9 .col-md-9").val(localStorage.getItem("9"));
$("#10 .col-md-9").val(localStorage.getItem("10"));
$("#11 .col-md-9").val(localStorage.getItem("11"));
$("#12 .col-md-9").val(localStorage.getItem("12"));
$("#13 .col-md-9").val(localStorage.getItem("13"));
$("#14 .col-md-9").val(localStorage.getItem("14"));
$("#15 .col-md-9").val(localStorage.getItem("15"));
$("#16 .col-md-9").val(localStorage.getItem("16"));
$("#17 .col-md-9").val(localStorage.getItem("17"));