var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');


function currentTime() {
    var date = new Date();
    var hourTime = date.getHours() * 30;
    var minuteTime = date.getMinutes() * 6;
    var secondTime = date.getSeconds() * 6;



    hour.style.transform = "rotate(" + hourTime + "deg)";
    minute.style.transform = "rotate(" + minuteTime + "deg)";
    second.style.transform = "rotate(" + secondTime + "deg)";
}


setInterval(currentTime, 0);