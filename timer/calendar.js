for (let i = 0; i < 42; i++) {
    let set = i + 1;
    set = set === 7 ? 0 : set;
    document.getElementsByClassName('container')[0].innerHTML += '<div class="day" id="' + set + '"></div>';
}

let d = new Date();
let month_number = d.getMonth();
let month;
let year = d.getFullYear();
let days = document.getElementsByClassName('day');


changeFirstDay(year, month_number);
switchMonth(month_number);
function NbDays(d) {
    return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
}
function switchMonth(m) {
    if (m < 0) {
        while (m < 0)
            m += 12;
    }
    if (m > 11) {
        m = m % 12;
    }
    switch (m) {
        case 0: month = 'Janvier';
            break;
        case 1: month = 'Février';
            break;
        case 2: month = 'Mars';
            break;
        case 3: month = 'Avril';
            break;
        case 4: month = 'Mai';
            break;
        case 5: month = 'Juin';
            break;
        case 6: month = 'Juillet';
            break;
        case 7: month = 'Août';
            break;
        case 8: month = 'Septembre';
            break;
        case 9: month = 'Octobre';
            break;
        case 10: month = 'Novembre';
            break;
        case 11: month = 'Décembre';
            break;
    }
}
function changeFirstDay(y, m) {
    for (i = 0; i < days.length; i++)
        days[i].innerHTML = '';
    let d2 = new Date(y, m, 1);
    let d3 = d2.getDay();
    let d3_index = d3 === 0 ? 6 : d3;
    for (i = d3_index; i < NbDays(d2) + d3_index; i++) {
        days[i - 1].innerHTML = i - d3_index + 1;
    }
}
document.getElementById('month').innerHTML = month + " " + year;
let previous = document.getElementById('previous_month');
let next = document.getElementById('next_month');

previous.onclick = () => {
    if (month_number === 1)
        month_number = 11;
    else
        month_number--;
    if (month_number === 11)
        year--;
    switchMonth(month_number);
    changeFirstDay(year, month_number);
    document.getElementById('month').innerHTML = month + " " + year;

}


next.onclick = () => {
    if (month_number === 11)
        month_number = 0;
    else
        month_number++;
    if (month_number === 0)
        year++;
    switchMonth(month_number);
    changeFirstDay(year, month_number);
    document.getElementById('month').innerHTML = month + " " + year;
}


