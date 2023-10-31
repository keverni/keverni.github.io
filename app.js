let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let a =[
    new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate(),
    new Date(new Date().getFullYear(),new Date().getMonth() + 1,0).getDate(),
    new Date(new Date().getFullYear(),new Date().getMonth() + 2,1).getDate(),
    new Date(new Date().getFullYear(),new Date().getMonth() + 3,2).getDate(),
    new Date(new Date().getFullYear(),new Date().getMonth() + 4,3).getDate(),
    new Date(new Date().getFullYear(),new Date().getMonth() + 5,4).getDate(),
    new Date(new Date().getFullYear(),new Date().getMonth() + 6,5).getDate()
];
D1 = new Date(new Date().getFullYear(),new Date().getMonth(),a[0]);
D2 = new Date(new Date().getFullYear(),new Date().getMonth(),a[1]);
D3 = new Date(new Date().getFullYear(),new Date().getMonth(),a[2]);
D4 = new Date(new Date().getFullYear(),new Date().getMonth(),a[3]);
D5 = new Date(new Date().getFullYear(),new Date().getMonth(),a[4]);
D6 = new Date(new Date().getFullYear(),new Date().getMonth(),a[5]);
for (let i = 0; i < a.length; ++i) {
    console.log(new Date(new Date().getFullYear(),new Date().getMonth(),a[i]));
}




