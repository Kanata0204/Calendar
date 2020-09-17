class Calendar {
    constructor(year, month = 1) {
        this.year = year;
        this.month = month;
    }

    // カレンダー生成関数
    createOneMonthCalendar(year, month) {

        let weekdaysAry = ["日", "月", "火", "水", "木", "金", "土"];

        // html生成変数
        let table_title = this.year + "年" + this.month + "月";
        let captionHtml = "<caption>" + table_title + "</caption>";
        let weekdayStr = "<tr>";

        // 日～土までのHTMLが入る変数（WeekdayStr）を生成
        for (var i = 0; i < weekdaysAry.length; i++) {
            weekdayStr += "<td>" + weekdaysAry[i] + "</td>";
        }
        weekdayStr += "</tr>";

        // WeekdayStr（日～土）を表示
        let calendarHtml = document.querySelector("#calendar");
        calendarHtml.innerHTML = captionHtml + weekdayStr;

        // ↓から日にち表示

        // 基本情報
        // 今月の1日のDate情報取得
        let firstDate = new Date(this.year, this.month - 1, 1);
        // 翌月のDateを取得
        let lastDate = new Date(this.year, this.month, 0);
        // 今月の末日を取得
        let lastDay = lastDate.getDate();
        // 何曜日からはじまるかを取得
        let firstWeekday = firstDate.getDay();
        // html用の変数
        let dayData = "";

        for (let i = 0; i < firstWeekday; i++) {
            if (i === 0) {
                dayData += "<tr>"
            }
            dayData += "<td>&nbsp;</td>";
        }



        for (let i = 1; i <= lastDay; i++) {
            let calendarDate = new Date(this.year, this.month - 1, i);
            let calendarWeekday = calendarDate.getDay();

            if (calendarWeekday === 0) {
                dayData += "<tr>"
            }
            dayData += "<td>" + i + "</td>";
            if (calendarWeekday === weekdaysAry.length - 1) {
                dayData += "</tr>";
            }
        }

        calendarHtml.innerHTML += dayData;

    }
}