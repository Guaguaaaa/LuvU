const startDate = new Date('2023-04-20T20:43:00');
const endDate = new Date('2024-11-07T17:27:00');

function updateTimer() {
    const userDate = new Date('2024-11-07T17:27:00');
    const utcDateString = userDate.toLocaleString("en-US", { timeZone: "UTC" });

    const currentDate = new Date(utcDateString);
    const difference = currentDate - startDate;
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
}

function updateTimer_2() {
    const userDate_2 = new Date();
    const utcDateString_2 = userDate_2.toLocaleString("en-US", { timeZone: "UTC" });

    const currentDate_2 = new Date(utcDateString_2);
    const difference_2 = currentDate_2 - endDate;
    var days_2 = Math.floor(difference_2 / (1000 * 60 * 60 * 24));
    var hours_2 = Math.floor((difference_2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_2 = Math.floor((difference_2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_2 = Math.floor((difference_2 % (1000 * 60)) / 1000);

    if (hours_2 < "10") { hours_2 = "0" + hours_2; }
    if (minutes_2 < "10") { minutes_2 = "0" + minutes_2; }
    if (seconds_2 < "10") { seconds_2 = "0" + seconds_2; }

    $("#days_2").html(days_2 + "<span>Days</span>");
    $("#hours_2").html(hours_2 + "<span>Hours</span>");
    $("#minutes_2").html(minutes_2 + "<span>Minutes</span>");
    $("#seconds_2").html(seconds_2 + "<span>Seconds</span>");
}

setInterval(function() { updateTimer(); }, 1000);
setInterval(function(){updateTimer_2();}, 1000);