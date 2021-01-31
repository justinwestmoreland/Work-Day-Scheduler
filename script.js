// Set CurrentDate so it could be displayed at the top of the page.
var currentDate = moment().format('dddd MMMM Do YYYY');
$(".current-day").text(currentDate);


// Using moment.js I set a time variable equal to the value of the current hour to compare to past and future times
var currentTime = moment().hours();

// This line of code calls the function findTime on each row in my code, setting and changing attributes as defined in the below logic.
$(".row").each(findTime)

// This function takes the current time as defined above and compares it to the time tasks are to be completed. Task times are idenfied by their #id. 
// if the current time is greater than the task time, the save button is removed, the task and time boxes turn grey, and the text is changed to white. In addtion 
// to this the <textarea> is also disabled so you are unable to continue adding to the list for times that have passed. 

// if the current time is equal to the task time, the styling is changed. Otherwise the table has default styling. 
function findTime() {
    var taskTime = $(this).attr("id");

    if (currentTime > taskTime) {
        $(this).children().addClass("past-time");
        $(this).find("textarea").prop("disabled", true);
        $(this).find("button").addClass("hide-btn");
    } else if (currentTime == taskTime) {
        $(this).children().addClass("current-time");
    }
}

// The Save button when clicked will call the function saveTasks
$(".saveBtn").on("click", saveTasks);

// When the save button is clicked, all values will be saved to their corresponding #id within local storage.
function saveTasks() {
    var tasks = $(this).siblings(".col-md-9").val().trim();
    var timeOfDay = $(this).parent().attr("id");
    window.localStorage.setItem(timeOfDay, tasks);
}

// When the page is refreshed, all local data will remain attached to it's #id
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
$("#18 .col-md-9").val(localStorage.getItem("18"));