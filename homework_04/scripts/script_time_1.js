// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// 3. Зміни часу на передане кількість хвилин.
// 4. Зміни часу на передане кількість годин.
// 5. Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша.
//  Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:30:75».
//  Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
// theDate  new Date();
const now = new Date();
let calledTime;
let seconds;
const time = {
    hours: now.getHours(),
    min: now.getMinutes(),
    sec: now.getSeconds(),
    // 1. Для виведення часу на екран.
    printTime () {
        let hh = this.hours;
        let min = this.min;
        let sec = this.sec;
        return `${hh}:${min}:${sec}`;
    },
    // 2. Зміни часу на передане кількість секунд.
    changeTimeSec (userSec) {
        let changedTimeResult = seconds + (userSec/1000);
        return changedTimeResult;
    }
};
// time.changeTimeSec(300);
const creator = {
    add_text (addText, toElement){
        toElement.textContent = addText;
    }
}
// connect script with DOM
const btnShowTime = document.querySelector('.btnShowTime');
const ul = document.querySelector('.time_btn_list');
const timeDisplay = document.querySelector('#time_screen')
// event listeners
btnShowTime.addEventListener('click', ()=>{
    creator.add_text(time.printTime(), timeDisplay);
    calledTime = time.printTime();
    seconds = now.getTime();
    return seconds;
}); 




