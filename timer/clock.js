let actual_date = setInterval(Time, 1000);
function Time() {
    let d = new Date();
    let day = d.getDay();
    let month = d.getMonth();
    let year = d.getFullYear();
    let day_number = d.getDate();
    let display_day, display_month;
    switch (day) {
        case 0: display_day = 'Dimanche';
            break;
        case 1: display_day = 'Lundi';
            break;
        case 2: display_day = 'Mardi';
            break;
        case 3: display_day = 'Mercredi';
            break;
        case 4: display_day = 'Jeudi';
            break;
        case 5: display_day = 'Vendredi';
            break;
        case 6: display_day = 'Samedi';
            break;
    }
    switch (month) {
        case 0: display_month = 'Janvier';
            break;
        case 1: display_month = 'Février';
            break;
        case 2: display_month = 'Mars';
            break;
        case 3: display_month = 'Avril';
            break;
        case 4: display_month = 'Mai';
            break;
        case 5: display_month = 'Juin';
            break;
        case 6: display_month = 'Juillet';
            break;
        case 7: display_month = 'Août';
            break;
        case 8: display_month = 'Septembre';
            break;
        case 9: display_month = 'Octobre';
            break;
        case 10: display_month = 'Novembre';
            break;
        case 11: display_month = 'Décembre';
            break;
    }
    document.getElementById('day').innerHTML = display_day;
    document.getElementById('day_number').innerHTML = day_number;
    document.getElementById('month').innerHTML = display_month;
    document.getElementById('year').innerHTML = year;
    document.getElementById('hours_number').innerHTML = d.getHours() > 9 ? d.getHours() + ":" : "0" + d.getHours() + ":";
    document.getElementById('minutes_number').innerHTML = d.getMinutes() > 9 ? d.getMinutes() + ":" : "0" + d.getMinutes() + ":";
    document.getElementById('seconds_number').innerHTML = d.getSeconds() > 9 ? d.getSeconds() : "0" + d.getSeconds();
}
let arg = 'argument';
const ipc = require('electron').ipcRenderer;
document.getElementById('calendar_button').addEventListener('click', () => {
    ipc.send('calendar_click', { 'arg': arg});
});