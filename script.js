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

$(".saveBtn").onclick = function () {
    // console.log("button works");
    //target local storage elements
    var value = $(this).parent().siblings(".description").val();
    var time = $(this).parent().parent().attr("id");
    
    // save in localStorage
    localStorage.setItem(time, value);
};


init();

function getTasks() {
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
}