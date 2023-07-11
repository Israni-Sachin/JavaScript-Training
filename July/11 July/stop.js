var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;

var timer = false

function start() {
    timer = true
    reset()
    stopwatch()

}
function stop() {
    timer = false
}
function reset() {
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;
    document.getElementById("ms").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
}
function stopwatch() {
    if (timer == true) {
        ms = ms + 1
        if (ms == 100) {
            sec = sec + 1
            ms = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0
            sec = 0
        }
        document.getElementById("ms").innerHTML = ms;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
        setTimeout("stopwatch()", 1)
    }
}