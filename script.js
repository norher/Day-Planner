function init() {
today.innerHTML = `Hey there! It's ${moment().format('MMMM Do YYYY, h:mm a')}`;
greeting.innerHTML = `Happy ${moment().format('dddd')}!`;
colorAssigner();
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

var saveBtn = $('.saveBtn');

saveBtn.onclick = () => {
    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();
    localStorage.setItem(time, description);
    console.log( "at " + time.trim() + " you need to " + description);
};


init();