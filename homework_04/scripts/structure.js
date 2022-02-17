// Buttons declaration 
// Min level
const btnMin2 = document.querySelector('#btn__min__t2');
const btnMin3 = document.querySelector('#btn__min__t3');
const btnMin4 = document.querySelector('#btn__min__t4');
const btnMin5 = document.querySelector('#btn__min__t5');
const btnMin6 = document.querySelector('#btn__min__t6');
// Norm
const btnNorm1 = document.querySelector('#btn__norm__t1');
const btnNorm2 = document.querySelector('#btn__norm__t2');
// Activation function listening to click on button
// Min level - task #2
btnMin2.addEventListener('click', () => {
    minimumTwo(1, 2, 3, 'string', NaN)
});
// Min level - task #3
btnMin3.addEventListener('click', () => {
    minimumThree(+prompt('enter number1: '), +prompt('enter number2: '))
});
// Min level - task #4
btnMin4.addEventListener('click', () => {
    minimumFour(+prompt('enter number to know factorial of it: '))
});
// Min level - taask #5
btnMin5.addEventListener('click', () => {
    minimumFive(4, 5, 6)
})
// Min level - taask #6
btnMin6.addEventListener('click', () => {
    minimumSix(+prompt('Length:'), +prompt('Width: '))
})
// Norm level - task #1
btnNorm1.addEventListener('click', () => {
    normalOne(+prompt("Enter your number to know is it perfect: "))
});
// Norm level - task #2
btnNorm2.addEventListener('click', () => {
    normalTwo(+prompt('Start diapasone: '), +prompt('Stop diapasone: '))
});