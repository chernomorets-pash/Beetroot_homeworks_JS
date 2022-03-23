// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву 
// продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати
//  кілька функцій для роботи з таким масивом:
const shoppingList = [{
        productName: 'cucumber',
        amount: 10,
        inBasket: true,
        price: 12.5,
        totalPrice() {
            return this.amount * this.price;
        },
    },
    {
        productName: 'tomato',
        amount: 3,
        inBasket: false,
        price: 5,
        totalPrice() {
            return this.amount * this.price;
        }
    },
    {
        productName: 'carrot',
        amount: 4,
        inBasket: true,
        price: 33.20,
        totalPrice() {
            return this.amount * this.price;
        }
    },
    {
        productName: 'avocado',
        amount: 1,
        inBasket: false,
        price: 51.25,
        totalPrice() {
            return this.amount * this.price;
        }
    },
];
// Functions to work with shopping array
// 1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
let modArray = [];
const showList_inBasketFirst = function (shoppingArray) {
    shoppingArray.forEach((element) => {
        for (let key in element) {
            if (key == 'inBasket' && element[key] == false) {
                modArray.push(element);
            } else if (key == 'inBasket' && element[key] == true) {
                modArray.unshift(element);
            }
        }
    });
    return modArray;
};
// --- test
// showList_inBasketFirst(shoppingList);
// console.log(modArray);
// ---
// 2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
const productChecked = function (arrayList, product) {
    modArray = [...arrayList];
    modArray.forEach(function (el) {
        if (el.productName == product) {
            el.inBasket = true;
        }
    })
    return modArray
};
// --- test
// productChecked(shoppingList, 'avocado');
// console.log(modArray);
// ---
// 3. Створення списку (не) придбаних продуктів.
let result;
const showList_notInBasket = function (shoppingArray) {
    shoppingArray.forEach((element) => {
        for (let key in element) {
            if (key == 'inBasket' && element[key] == false) {
                modArray.push(element.productName);
            }
        }
        result = modArray.join(', ')
    });
    return result;
};
// --- test
// showList_notInBasket(shoppingList);
// console.log(`Products are NOT in basket: ${result}`)
// --- 
// 3. Make a new array of products thet are not in the list with filter call back fn - shortest
const filterNIL = shoppingList.filter(product => product.inBasket == false);
// --- test
// console.log(filterNIL);
//  ---
// Normal level
// Видалення продукту зі списку
//  (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
const deleteProduct = function (shoppingArray, elToDel) {
    shoppingList.map(function (element) {
        if (element.productName == elToDel) {
            delete(element)
        } else {
            modArray.push(element)
        }
    })
    return modArray
}
// --- test
// deleteProduct(shoppingList, 'tomato');
// console.log(modArray);
// ---
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
// необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
// При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
function Product(productName, amount, price) {
    this.productName = productName;
    this.amount = amount;
    this.inBasket = true;
    this.price = price;
    this.totalPrice = () => {
        return this.amount * this.price;
    }
};
const addProduct = function (shoppingList, addProduct, addProductPrice, addProductAmount) {
    modArray = [...shoppingList];
    modArray.map(function (productFromList, index) {
        if (productFromList.productName == addProduct) {
            productFromList.amount++
        } else if (productFromList.productName != addProduct && index == modArray.length - 1) {
            modArray.unshift(new Product(addProduct, addProductAmount, addProductPrice));
        }
    })
    return modArray
};
// --- test
// addProduct(shoppingList, 'Snickers', 22, 10);
// console.log(modArray);
// ---
// Maximum
// 1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
const totalPrice = function (shoppingList) {
    let res;
    let total = 0;
    shoppingList.forEach(product => {
        res = product.totalPrice();
        total = total + res;
        console.log(res);
    })
    return total;
}
// --- test
// resultTotalPrice = totalPrice(shoppingList);
// console.log(`Total: ${resultTotalPrice}`);
//  ---
// 2. Підрахунок суми всіх (не) придбаних продуктів.
const totalPriceNotInBasket = function (shoppingList) {
    let res;
    let total = 0;
    shoppingList.forEach(product => {
        if (product.inBasket == false) {
            res = product.totalPrice();
            total = total + res;
        }
    })
    return total
};
// --- test
// console.log(`Total price of products thet are not bought: ${totalPriceNotInBasket(shoppingList)}`);
// ---
// 3. Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого,
//  в залежності від параметра функції, який вона приймає)
const showProductDepend = function (shoppingList, parameter) {
    let arrayOfTotalPrices = [];
    shoppingList.forEach(element =>{
       arrayOfTotalPrices.unshift(element.totalPrice());
       console.log(arrayOfTotalPrices)
    });
    if (parameter == 'high'){
        
    };
};
showProductDepend(shoppingList)