let more_hours = document.getElementById('more_hours');
let more_minutes = document.getElementById('more_minutes');
let more_seconds = document.getElementById('more_seconds');
let less_hours = document.getElementById('less_hours');
let less_minutes = document.getElementById('less_minutes');
let less_seconds = document.getElementById('less_seconds');
let start = document.getElementById('start');
let stop = document.getElementById('stop');

let hours = 0;
let minutes = 0;
let seconds = 0;
let c;
let total;
let _audio = new Audio('07 - Jesus Walks.mp3');


more_hours.onclick = MoreHours;
less_hours.onclick = LessHours;
more_minutes.onclick = MoreMinutes;
less_minutes.onclick = LessMinutes;
more_seconds.onclick = MoreSeconds;
less_seconds.onclick = LessSeconds;
start.onclick = Start;
stop.onclick = Stop;

function MoreHours() {
    if (hours < 23)
        hours++;
    else
        hours = 0;
    document.getElementById('hours').innerHTML = hours > 9 ? hours : '0' + hours;
}
function LessHours() {
    if (hours > 0)
        hours--;
    else
        hours = 23;
    document.getElementById('hours').innerHTML = hours > 9 ? hours : '0' + hours;
}
function MoreMinutes() {
    if (minutes < 59)
        minutes++;
    else
        minutes = 0;
    document.getElementById('minutes').innerHTML = minutes > 9 ? minutes : '0' + minutes;
}
function LessMinutes() {
    if (minutes > 0)
        minutes--;
    else
        minutes = 59;
    document.getElementById('minutes').innerHTML = minutes > 9 ? minutes : '0' + minutes;
}
function MoreSeconds() {
    if (seconds < 59)
        seconds++;
    else
        seconds = 0;
    document.getElementById('seconds').innerHTML = seconds > 9 ? seconds : '0' + seconds;
}
function LessSeconds() {
    if (seconds > 0)
        seconds--;
    else
        seconds = 59;
    document.getElementById('seconds').innerHTML = seconds > 9 ? seconds : '0' + seconds;
}

function Start() {
    total = hours * 3600 + minutes * 60 + seconds;
    c = setInterval(Count, 1000);
}
function Count() {
    if (total > 0)
        total--;
    else{
        _audio.play();
        
    }
    hours = Math.trunc(total / 3600);
    minutes = Math.trunc((total - (3600 * hours)) / 60);
    seconds = total - hours * 3600 - minutes * 60;
    document.getElementById('hours').innerHTML = hours > 9 ? hours : '0' + hours;
    document.getElementById('minutes').innerHTML = minutes > 9 ? minutes : '0' + minutes;
    document.getElementById('seconds').innerHTML = seconds > 9 ? seconds : '0' + seconds;
}
function Stop() {
    clearInterval(c);     
    _audio.pause();
}
