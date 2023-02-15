var hourHand = document.getElementById("HourHand");
var minuteHand = document.getElementById("MinuteHand");
var secondHand = document.getElementById("SecondHand");

function initClock () {
    var date = new Date();
    var hour = date.getHours() % 12;
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var hourDeg = (hour * 30) + (0.5 * minute);
    var minuteDeg = (minute * 6) + (0.1 * second);
    var secondDeg = second * 6;

    hourHand.style.transform   = 'rotate(' + hourDeg + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

    setTimeout(initClock, 1000);
}

initClock();