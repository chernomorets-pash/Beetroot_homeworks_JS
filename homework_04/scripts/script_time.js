const screen = document.querySelector('#time_screen');
const showTime = document.querySelector('#show-time');
const now = new Date();
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

// showTime.addEventListener('click', () => {
//     screen.innerText = time.printTime();
// });
