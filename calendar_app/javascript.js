let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

let table_title = year + "年" + month + "月";
let captionHtml = "<caption>" + table_title + "</caption>";
let weekdaysAry = ["日", "月", "火", "水", "木", "金", "土"];
let weekdayStr = "<tr>";

// 日～土までのHTMLが入る変数（WeekdayStr）を生成
for (var i = 0; i < weekdaysAry.length; i++) {
    if (i == 0) {
        weekdayStr += "<td>" + weekdaysAry[i] + "</td>";
    } else if (i == 6) {
        weekdayStr += "<td>" + weekdaysAry[i] + "</td>";
    } else {
        weekdayStr += "<td>" + weekdaysAry[i] + "</td>";
    }
}
weekdayStr += "</tr>";

// WeekdayStr（日～土）を表示
let calendar = document.querySelector("#calendar");
calendar.innerHTML = captionHtml + weekdayStr;

let firstDate = new Date(year, month - 1, 1);
let firstWeekday = firstDate.getDay();
let dayData = "";

for (let i = 0; i < firstWeekday; i++) {
    if (i === 0) {
        dayData += "<tr>"
    }
    dayData += "<td>&nbsp;</td>";
}

// 翌月のDateを取得
let lastDate = new Date(year, month, 0);

// 今月の末日を取得
let lastDay = lastDate.getDate();

for (let i = 1; i < lastDay; i++) {
    let calendarDate = new Date(year, month - 1, i);
    let calendarWeekday = calendarDate.getDay();

    if (calendarWeekday === 0) {
        dayData += "<tr>"
    }

    dayData += "<td>" + i + "</td>";

    if (calendarWeekday === weekdaysAry.length - 1) {
        dayData += "</tr>";
    }
}

calendar.innerHTML += dayData;