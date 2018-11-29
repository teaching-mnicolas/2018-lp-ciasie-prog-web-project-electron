for (let i = 0; i < 24; i++) {
    document.getElementById('hour_number').innerHTML += '<option>' + (i > 9 ? i : '0' + i) + '</option>';
}

for (let i = 0; i < 60; i++) {
    document.getElementById('minute_number').innerHTML += '<option>' + (i > 9 ? i : '0' + i) + '</option>';
}
let audio = new Audio('07 - Jesus Walks.mp3');
let dring = setInterval(CheckAlarm, 10000);
let checkbox = document.getElementById('enable_alarm');

const ipc = require('electron').ipcRenderer;

let hour_list = document.getElementById('hour_number');
let minute_list = document.getElementById('minute_number');


function CheckAlarm() {
    if (checkbox.checked === true) {
        let hour_list = document.getElementById('hour_number');
        let minute_list = document.getElementById('minute_number');
        let selected_hour = hour_list.options[hour_list.selectedIndex].value;
        let selected_minute = minute_list.options[minute_list.selectedIndex].value;
        let d = new Date();
        if (d.getHours() == selected_hour
            && d.getMinutes() == selected_minute) {
            audio.play();
            setInterval(CheckPause, 500);
        }
    }
}

function CheckPause() {
    if (checkbox.checked !== true)
        audio.pause();
}