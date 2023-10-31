let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let week_tr = "";
let dict = {
    1 : "ПН",
    2 : "ВТ",
    3 : "СР",
    4 : "ЧТ",
    5 : "ПТ",
    6 : "СБ",
    0 : "ВС"
}
let time = [
    "8:00", "12:00", "15:00", "18:00"
]
let write_time = [['ЧТ', '12:00'], ['ПТ', '8:00']];
let week =[
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 1,
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 2,
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 3,
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 4,
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 5,
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 6,
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 7
];
let week_str = []
for (let i = 0; i < week.length; ++i)
{
    D = new Date(new Date().getFullYear(),new Date().getMonth(),week[i]);
    if (i == 0) {
        week_tr += "<td>" + " " + "</td>" + "<td class='timeAndWeek'>" + dict[D.getDay()] + "</td>";
    } else {
        week_tr += "<td class='timeAndWeek'>" + dict[D.getDay()] + "</td>";

    }
    week_str.push(dict[D.getDay()]);
}
console.log(week_str);
week_tr += "</tr>";
for (let i = 0; i < time.length; ++i)
{
    week_tr += "<tr>"+ "<td class='timeAndWeek'>" + time[i] + "</td>";
    for (let j = 0; j < 7; ++j)
    {
        D = new Date(new Date().getFullYear(),new Date().getMonth(),week[j]);
        if (Checker(i, j))
        {
            week_tr += "<td class='ChangeColor'>" + " " + "</td>";
        } else
        {
            week_tr += "<td>" + " " + "</td>";
        }
    }
    week_tr += "</tr>";


}
function Checker(i, j, a = week_str, b = write_time)
{
    console.log(i);
    console.log(j);
    for (let k = 0; k < write_time.length; ++k)
    {
        console.log(week_str[j]);
        console.log(write_time[k][0]);
        console.log(time[i]);
        console.log(write_time[k][1]);
        if (week_str[j] === write_time[k][0] && time[i] === write_time[k][1])
        {
            return true;
        }
    }
}
document.getElementById("table_cal").innerHTML = week_tr;

function Setting() {
    location.href = "Settings.html";
}
function GoBack() {
    location.href = "index.html";
}

function Calendar_Next()
{
    for (let i = 0; i < week; ++i)
    {
        week[i] += 7;
        alert(week[i]);
    }
}


