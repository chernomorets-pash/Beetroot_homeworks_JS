// Buttons declaration 
// Min level
const btnMin1 = document.querySelector('#btn__min__t1');
const btnMin2 = document.querySelector('#btn__min__t2');
const btnMin3 = document.querySelector('#btn__min__t3');
const btnMin4 = document.querySelector('#btn__min__t4');
const btnMin5 = document.querySelector('#btn__min__t5');
// Norm
const btnNorm1 = document.querySelector('#btn__norm__t1');
const btnNorm2 = document.querySelector('#btn__norm__t2');
const btnNorm3 = document.querySelector('#btn__norm__t3');
const btnNorm4 = document.querySelector('#btn__norm__t4');
// Max
const btnMax1 = document.querySelector('#btn__max__t1');
const btnMax2 = document.querySelector('#btn__max__t2');
// Activation function listening to click on button
// Min level - task #1
btnMin1.addEventListener('click', ()=>{
    let userAge = +prompt("Please, enter your age: ");
        if (userAge >= 0 && userAge <= 2) {
            console.log("you are baby");
        } else if (userAge >= 12 && userAge <= 18) {
            console.log("you are child");
        } else if (userAge >= 18 && userAge < 60) {
            console.log("you are adult");
        } else if (userAge >= 60) {
            console.log("you are on pension")
        }
});
// Min level - task #2
btnMin2.addEventListener('click',()=>{
    let userNum = +prompt ('Please enter number from 0 - 9');
    if (userNum == 1) {
        console.log('0 is !')
    }else if (userNum == 2) {
        console.log('1 is @')
    }else if (userNum == 3) {
        console.log('2 is @')
    } else if (userNum == 3) {
        console.log('3 is #')
    }else if (userNum == 4) {
        console.log('4 is $')
    } else if (userNum == 5) {
        console.log('5 is %')
    }else if (userNum == 6) {
        console.log('6 is ^')
    } else if (userNum == 7) {
        console.log('7 is &')
    }else if (userNum == 8) {
        console.log('8 is *')
    } else if (userNum == 9) {
        console.log('9 is (')
    } else {
        console.log('Wrong number');
    }
});
// Min level - task #3
btnMin3.addEventListener('click', ()=>{
    let start = +prompt ('Enter start diapason:', 1);
    let stop = +prompt ('Enter start diapason:', 1);
    let result=0;
    for (let i = start; i <= stop; i++) {
        result += i;
        }
    console.log(`сумма всіх чисел в діапазоні вiд ${start} до ${stop} = ${result}`);
}
);
// Min level - task #4
btnMin4.addEventListener('click', ()=>{
    let nod;
    let a = +prompt ("Введите число: ",);
    let b = +prompt ("Введите число: ");
    while (a != b) {
        if (a>b){
            a = a-b;
        } else {
            b = b - a;
        }
        console.log("НОД:" + a);
    }
})
// Min level - taask #5
btnMin5.addEventListener('click', ()=>{
    let number = +prompt ("Введите число: ");
    for (let i=1; i <= number; i++) {
        if (number % i == 0) {
            console.log(i);
        }
    }
})
// Norm level - task #1
btnNorm1.addEventListener('click', ()=>{
    let number = prompt('Enter the number from 10000 to 99999', 0);
        number = number + '';
        if (number === number.split('').reverse().join(''))
            alert('palindrome');
        else
            alert('NOT palindrome');
});
// Norm level - task #2
btnNorm2.addEventListener('click', ()=>{
        let discount;
        let totalPrice = +prompt("Please enter your total check value");
        if (totalPrice < 200) {
            console.log("No discount !!!")
        } else if (totalPrice >= 200 && totalPrice <= 299) {
            discount = (totalPrice * 3) / 100;
            console.log("your discount is", discount);
        } else if (totalPrice >= 300 && totalPrice <= 499) {
            discount = (totalPrice * 5) / 100;
            console.log("your discount is", discount)
        } else {
            discount = (totalPrice * 7) / 100;
            console.log("your discount is", discount)
        }
});
btnNorm3.addEventListener('click', ()=>{
    let userNum;
        let positive=0,
            negative=0,
            even=0,
            odd=0,
            zero=0;
        for (let i =0; i <= 10; i++) {
            userNum = +prompt ("enter your number: ");
            if (userNum == 0) {
                zero++;
            } 
            if (userNum >0) {
                positive++;
            } 
            if (userNum <0) {
                negative++;
            }
            if (userNum%2 == 0){
                even++
            }
            if (userNum%2 !== 0) {
                odd++
            }
        }
        console.log (`Zero's: ${zero} Negative = ${negative} Positive = ${positive} Even= ${even} Odd= ${odd}`);
})
btnNorm4.addEventListener('click', ()=>{
        const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        let currDay = 0;
        while (confirm(`Сегодня: ${days[currDay]}. Хотите увидеть следующий день?`)) {
        currDay = (currDay + 1) % days.length;
        }
})
// Max level - task #1
btnMax1.addEventListener('click', ()=>{
    let from = 0;
        let to = 100;
        let gameEnd = false;
        let number;
        while (!gameEnd) {
            number = from + Math.floor((to - from) / 2);
            if (confirm(`Your number is > ${number}?`)) {
                if (number < 100) {
                    from = number + 1;
                }
            } else if (confirm(`Your number is < ${number}`)) {
                if (number > 0) {
                    to = number - 1;
                }
            } else if (confirm(`Your number == ${number}`)) {
                gameEnd = true
            }
            if (to == from) {
                gameEnd = true;
                number = to;
                (confirm(`Your number == ${number}`))
            }
        }
        console.log(`Your number is: ${number}`);
})
// Max level - task #2
btnMax2.addEventListener('click', ()=>{
    for (let i=2; i<=10; i++) {
        for (let j =1; j<=10; j++){
            console.log(`${i}*${j}=${i*j}`);
        }
    }
})
