// main script with logic of index page
let btnTaskOne = document.getElementById('btn__hw-1');
let btnTaskTwo = document.getElementById('btn__hw-2');
// Tasks wrapped inside function
// Task one and two
let taskOneNorm = function () {
    let userName = prompt('What is your name?');
    alert(`Hi, ${userName}`);
    let userYearOfBirdth = +prompt('What is your year of birth?');
    const CURRENT_YEAR = 2022;
    let calculatedYear = (CURRENT_YEAR - userYearOfBirdth);
    alert(`You are ${calculatedYear} years old.`);
};
// Task 3
let taskThreeNorm = function () {
    let userLength = +prompt('Please enter the lenght of squere side: ');
    let pOfSquare = 4 * userLength;
    alert (`Perimeter of the square with side size ${userLength} is ${pOfSquare}`);
}
// Buttons for Normal
btnTaskOne.addEventListener('click', taskOneNorm);
btnTaskTwo.addEventListener('click', taskThreeNorm);
// Maximum
let btnTaskOneMax = document.getElementById('btn__hw-3');
let btnTaskTwoMax = document.getElementById('btn__hw-4');
let btnTaskThreeMax = document.getElementById('btn__hw-5');
let taskOneMax = function () {
    let userRadius = +prompt ('Please enter Radius of Circle: ');
    const PI = 3.14;
    let sOfCircle = PI * Math.pow(userRadius, 2);
    alert(`area of a circle with Radius ${userRadius} will be ${sOfCircle}`)
};
let taskTwoMax = function () {
    let userDistance = +prompt ("Please enter distance in kilometers between two cities");
    let userPreferedTime = +prompt ("How many hours would you like to spend on road?");
    let speedToReach = userDistance / userPreferedTime;
    alert (`The distance betweed cities is ${userDistance} km, if you will be on road for ${userPreferedTime} hours, you need to move with ${speedToReach} km/hour`)
};
let taskThreeMax = function () {
    const EX_RATE_EUR_TO_USD = 0.88;
    let userValue = +prompt ('Enter value of USD to convert in EUR: ');
    let convUsdToEur = userValue / EX_RATE_EUR_TO_USD;
    alert (`${userValue}$ converted to EUR will be: ${convUsdToEur.toFixed(2)} Euros`);
};
// Buttons for Maximum
btnTaskOneMax.addEventListener('click', taskOneMax);
btnTaskTwoMax.addEventListener('click', taskTwoMax);
btnTaskThreeMax.addEventListener('click', taskThreeMax);
