let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let week_tr = "<tr>";
let dict = {
    1 : "ПН",
    2 : "ВТ",
    3 : "СР",
    4 : "ЧТ",
    5 : "ПТ",
    6 : "СБ",
    0 : "ВС",
}
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

    D = new Date(new Date().getFullYear(),new Date().getMonth(),week[i]);

    week_tr += "<td>" + dict[D.getDay()] + "</td>";
}
document.getElementById("table_cal").innerHTML = week_tr;

function Setting() {
    location.href = "Settings.html";
}
function GoBack() {
    location.href = "index.html";
}



