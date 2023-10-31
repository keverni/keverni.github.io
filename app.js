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
    0 : "ВС",
}
let time = [
    "8:00", "12:00", "15:00", "18:00"
]
let write_time = "8:00";
let week =[
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 1,
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 2,
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 3,
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 4,
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 5,
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 6,
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate() + 7
];

for (let i = 0; i < week.length; ++i)
{
    if (i == 0) {
        D = new Date(new Date().getFullYear(),new Date().getMonth(),week[i]);
        week_tr += "<td class='timeAndWeek'>" + " " + "</td>" + "<td class='timeAndWeek'>" + dict[D.getDay()] + "</td>";
    } else {
        D = new Date(new Date().getFullYear(),new Date().getMonth(),week[i]);
        week_tr += "<td class='timeAndWeek'>" + dict[D.getDay()] + "</td>";
    }

}
week_tr += "</tr>";
for (let i = 0; i < time.length; ++i)
{
    week_tr += "<tr>"+ "<td class='timeAndWeek'>" + time[i] + "</td>";
    for (let j = 0; j < 7; ++j)
    {
        if (write_time == time[i])
        {
            week_tr += "<td class='ChangeColor'>" + " " + "</td>";
        } else
        {
            week_tr += "<td>" + " " + "</td>";
        }
    }
    week_tr += "</tr>";


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

