// 基本情報(今年、今月)
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

// 一か月のカレンダーインスタンスを生成
let nowMonthCalendar = new Calendar(year, month);
nowMonthCalendar.createOneMonthCalendar();