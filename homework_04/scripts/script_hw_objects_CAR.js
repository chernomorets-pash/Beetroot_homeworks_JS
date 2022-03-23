// 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість,
//  обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:
const car = {
    maker: 'Renault',
    model: 'Megane',
    year: 2014,
    avarageSpeed: 100,
    fuelTank: 60,
    avarageConsumption: 5.5,
    drivers: ['Paul', ],
};
// Functions ---
// 1. Висновок на екран з інформацією про автомобіль.
let infoCar = function (a) {
    let info;
    for (let key in a) {
        console.log(`${key}: ${a[key]}`);
    }
};
// 2. Додавання водія, який має право керувати автомобілем.
let addDriver = (obj) => {
    obj.drivers[length + 1] = prompt('Name the driver you trust: ');
};
// 3. Заправка автомобіля.
let reFuel = (obj) => {
    if (obj.fuelTank < 10) {
        while (obj.fuelTank < 60) {
            obj.fuelTank++;
            console.log(`Refueling`);
        }
    }
};
// 4. Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. 
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину,
// а також потрібно перевіряти чи має право водій керувати даним автомобілем 
// (ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, 
// для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.
let bigProgramm = function (obj, driver) {
    if (driver) {
        let userDistance = +prompt('Enter the distance to drive: ', 0);
        let totalTime = Math.round(userDistance / obj.avarageSpeed); // 8
        let timeWithRest = totalTime;
        if (totalTime >= 4) {
            for (let i = 1; i <= totalTime; i++) {
                obj.fuelTank--;
                if (obj.fuelTank < 10) {
                    let askToRefuel = confirm('fuel is almost finished, would you like to redfeul?');
                    if (askToRefuel) {
                        reFuel(obj);
                    } else {
                        console.log('Out of fuel, use your legs now :) ');
                        break;
                    }
                }
                if (i % 4 == 0) {
                    console.log('Minus hour')
                    timeWithRest--;
                    obj.fuelTank++;
                }
            }
        }
        console.log(`Total time spend with rest: ${timeWithRest}`);
        console.log(`Remaining fuel in tank: ${obj.fuelTank}`)
        console.log(`is driver alought to drive?: ${driver}`);
    }
}
