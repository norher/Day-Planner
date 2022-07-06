function init() {
today.innerHTML = `Hey there! It's ${moment().format('MMMM Do YYYY, h:mm a')}`;
greeting.innerHTML = `Happy ${moment().format('dddd')}!`;
colorAssigner();
getTasks();
};


function colorAssigner() {
    var currentHour = moment().hour();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id"));
        if (blockHour < currentHour) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};

$("button").click(function() {
    // console.log("button works");
    // target local storage elements
    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();
    
    // save in localStorage
    localStorage.setItem(time, description);
});


init();

function getTasks() {
    $("#8th .description").val(localStorage.getItem("8AM"));
    $("#9th .description").val(localStorage.getItem("9AM"));
    $("#10th .description").val(localStorage.getItem("10AM"));
    $("#11th .description").val(localStorage.getItem("11AM"));
    $("#12th .description").val(localStorage.getItem("12PM"));
    $("#13th .description").val(localStorage.getItem("1PM"));
    $("#14th .description").val(localStorage.getItem("2PM"));
    $("#15th .description").val(localStorage.getItem("3PM"));
    $("#16th .description").val(localStorage.getItem("4PM"));
    $("#17th .description").val(localStorage.getItem("5PM"));
    $("#18th .description").val(localStorage.getItem("6PM"));
    $("#19th .description").val(localStorage.getItem("7PM"));
    $("#20th .description").val(localStorage.getItem("8PM"));
}