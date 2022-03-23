// Buttons declaration 
// Min level
const btnMin1 = document.querySelector('#btn__min__t1');
const btnMin2 = document.querySelector('#btn__min__t2');
const btnMin3 = document.querySelector('#btn__min__t3');
// Norm
const btnNorm1 = document.querySelector('#btn__norm__t1');
const btnNorm2 = document.querySelector('#btn__norm__t2');
// Activation function listening to click on button
// Min level - task #1
btnMin1.addEventListener('click', () => {infoCar(car)});
btnMin2.addEventListener('click', () => {bigProgramm(car, 'Paul' == car.drivers)});
btnMin3.addEventListener('click', () => {addDriver(car)});
// Norm level - task #1
// btnNorm1.addEventListener('click', () => {});
// Norm level - task #2
// btnNorm2.addEventListener('click', () => {
// });