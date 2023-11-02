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
  "8:00|10:30", "11:00|14:30", "15:00|17:30", "18:00|20:30"
]
let write_time = [['ПН', '11:00|14:30'], ['ПТ', 'Выходной'], ['ЧТ', '8:00|10:30'], ['ЧТ', '18:00|20:30']];
let week =[
  new Date(new Date().getFullYear(),new Date().getMonth(),0).getDay(),
  new Date(new Date().getFullYear(),new Date().getMonth(),0).getDay() + 1,
  new Date(new Date().getFullYear(),new Date().getMonth(),0).getDay() + 2,
  new Date(new Date().getFullYear(),new Date().getMonth(),0).getDay() + 3,
  new Date(new Date().getFullYear(),new Date().getMonth(),0).getDay() + 4,
  new Date(new Date().getFullYear(),new Date().getMonth(),0).getDay() + 5,
  new Date(new Date().getFullYear(),new Date().getMonth(),0).getDay() + 6
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

week_tr += "</tr>";
for (let i = 0; i < time.length; ++i)
{
  if (Checker_purple(i))
  {
    week_tr += "<tr>"+ "<td class='ChangeColorPurple'>" + time[i] + "</td>";
  } else {
    week_tr += "<tr>"+ "<td class='timeAndWeek'>" + time[i] + "</td>";
  }
  for (let j = 0; j < 7; ++j)
  {
    D = new Date(new Date().getFullYear(),new Date().getMonth(),week[j]);
    if (Checker_red(j)) {
      week_tr += "<td class='ChangeColorRed'>" + " " + "</td>";
    }else if (Checker_green(i, j))
    {
      week_tr += "<td class='ChangeColorGreen'>" + " " + "</td>";
    } else
    {
      week_tr += "<td>" + " " + "</td>";
    }
  }
  week_tr += "</tr>";


}
function Checker_green(i, j, a = week_str, b = write_time)
{

  for (let k = 0; k < write_time.length; ++k)
  {

    if (week_str[j] === write_time[k][0] && time[i] === write_time[k][1])
    {
      return true;
    }
  }
}
document.getElementById("table_cal").innerHTML = week_tr;


function Checker_red(j, a = write_time, b = week_str)
{
  for (let k = 0; k < write_time.length; ++k)
  {
    if (week_str[j] === write_time[k][0] && write_time[k][1] === "Выходной")
    {
      return true;
    }
  }
}
function Checker_purple(i, a = time)
{

    let k = time[i].split('|');


    let Now = new Date();
    let hour_minutes = k[0].split(":");
    let hour_minutes_1 = k[1].split(":");
    console.log(hour_minutes[0]);
    console.log(hour_minutes_1[0]);
    console.log(Number(Now.getDay()));
    console.log(Number(Now.getHours()));


    if (Number(Now.getHours()) >= Number(hour_minutes[0]) && Number(Now.getHours()) <= Number(hour_minutes_1[0]))
    {
      return true;
    }

}
Checker_purple()
