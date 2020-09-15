let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate()

console.log(year, month, day);

let table_title = year + "年" + month + "月";
let captionHtml = "<caption>" + table_title + "</caption>";
let weekdays = ["日", "月", "火", "水", "木", "金", "土"];
let weekdayStr = "<tr>";

for (var i = 0; i < 7; i++) {
    if (i == 0) {
        weekdayStr += "<td>" + weekdays[i] + "</td>";
    } else if (i == 6) {
        weekdayStr += "<td>" + weekdays[i] + "</td>";
    } else {
        weekdayStr += "<td>" + weekdays[i] + "</td>";
    }
}

weekdayStr += "</tr>";

// console.log(weekdayStr);

let calendar = document.querySelector("#calendar");
calendar.innerHTML = captionHtml + weekdayStr;