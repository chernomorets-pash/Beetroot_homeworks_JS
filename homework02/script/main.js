// Buttons declaration 
// Min level
const btnMin1 = document.querySelector('#btn__min__t1');
const btnMin2 = document.querySelector('#btn__min__t2');
const btnMin3 = document.querySelector('#btn__min__t3');
const btnNorm1 = document.querySelector('#btn__norm__t1');
const btnNorm2 = document.querySelector('#btn__norm__t2');
const btnMax1 = document.querySelector('#btn__max__t1');
// Activation function listening to click on button
// Min level - task #1
btnMin1.addEventListener('click', ()=>{
    let a = 0.1;
    let b = 0.2;
    let result = a + b;
    console.log (`Original result of ${a}+${b}=${result}; To get correct calculation, one of the option to
    use methon .toFixed that will cut of cirtan ammount of numbers after dot, like: ${+result.toFixed(2)}`);
});
// Min level - task #2
btnMin2.addEventListener('click',()=>{
    let string = '1';
    let number = 2;
    let result = +string+number;
    console.log(`${string}+${number}=${result}`);
});
// Min level - task 3
btnMin3.addEventListener('click', ()=>{
    const MB_IN_GB = 1000;
    const FILE = 820;
    let userFlash = +prompt('Enter capacity of you flash drive in Gigabites: ');
    // converting user GB to MB
    let userMbinGb = userFlash*MB_IN_GB;
    console.log(`user MB on flash drive: ${userMbinGb}`);
    let filesToFlash = userMbinGb/FILE;
    console.log(`on flash drive with capacity: ${userFlash}GB will be ${Math.floor(filesToFlash)} files with size of 820 Mb;`)
});
btnNorm1.addEventListener('click', ()=>{
    let userMoney = +prompt('Please enter amount of USD you have in your pocket: ');
    let userChocoPrice = +prompt('What is the price of your favorite bar? ');
    let amountOfChoco = Math.floor(userMoney/userChocoPrice);
    let change = userMoney%userChocoPrice;
    console.log(`There is ${userMoney} USD in your pocket, so you can buy ${amountOfChoco} chocolates
    if the price of one bar is ${userChocoPrice} USD, and it will remain ${+change.toFixed(3)} USD in your pocket`);
});
btnNorm2.addEventListener('click', ()=>{
    let number = prompt('Enter 3-sybmol number for reverse: ');
    let reverse = 'Reverse: ';
    for (let i=0; i<3; i++) {
        let result = number%10;
        number = Math.floor(number/10);
        reverse += String(result);
        }
    console.log(reverse);
});
btnMax1.addEventListener('click', ()=>{
    const YEAR_PR = 5;
    let userMonths = 2;
    let userMoney = +prompt('How much money would you like to invest: ', '0')
    let yearlyPr = userMoney/100*YEAR_PR;
    let monthlyPr = yearlyPr/12;
    alert(`If you invest ${userMoney}$ for ${userMonths} mothes, with ${YEAR_PR}% yearly procent, 
    you will get: ${Math.round(monthlyPr*userMonths)}$`);
})

