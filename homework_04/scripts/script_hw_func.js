// Minimum level ---
// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
let minimumTwo = function () {
    let agrInFunc = arguments.length;
    return console.log(`Total number of argument in function: ${agrInFunc}`);
}
// 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.
let minimumThree = function (a = 0, b = 0) {
    if (a < b) {
        return console.log(-1);
    } else if (a > b) {
        return console.log(1);
    } else if (a == b) {
        return console.log(0);
    } else(console.log('Wrong input'))
};
// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
let minimumFour = function (num) {
    let result = 1;
    if (num < 0) return;
    if (num === 1) return num;
    for (let i = 2; i <= num; i += 1) {
        result *= i;
    }
    console.log(`Factorial of number ${num} is: ${result}`);
}
// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9
// перетворяться в число 149
let minimumFive = function (a = 0, b = 0, c = 0) {
    return console.log(String(a) + String(b) + String(c));
}
// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1
// параметр, то вона обчислює площу квадрата.
let minimumSix = function (a, b) {
    let s;
    if (a != 0 && b != 0) {
        s = a * b;
        console.log("S = ", s);
    } else if (a != 0 || b == undefined) {
        s = a * a;
        console.log("Square = ", s);
    } else {
        console.log("Wrong input!");
    }
}
// Normal level ---
// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке
// дорівнює сумі всіх своїх дільників.
let normalOne = function (n = 0) {
    let s = 0;
    let remain;
    for (let i = 1; i < n - 1; i++) {
        remain = n % i;
        if (remain === 0) {
            s += i;
        }
    }
    if (n === s) {
        console.log(`Number ${n} is perfect`);
        return true;
    } else {
        console.log(`Number ${n} is NOT perfect`);
        return false;
    }
};
// 2.Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з
// діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
let normalTwo = function (min, max) {
    for (let i = min; i < max; i++) {
        if (normalOne(i) === true) {
            console.log(i);
        }
    }
};