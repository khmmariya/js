// let MAXLENGTHSTR = 50;
// let str = "";
// let symbol = "*";

// let lengthStr = Number(prompt("Длина строки:"));

// if (lengthStr.toString() != "NaN") {
//     if (lengthStr > 0 && lengthStr <= MAXLENGTHSTR) {

//         let answerUser = confirm("Заполнять цифрами?");

//         switch(answerUser) {
//             case true:  for (let i = 1; i <= lengthStr; i++) {
//                             str += i;
//                         }
//                         break;
//             case false: symbol = prompt("Укажите символ для заполнения строки:");
//                         if(symbol.length == 1) {
                            

//                             // for (let i = 1; i <= lengthStr; i++) {
//                             //     str += i;
//                             // }
//                         }
//                         else {
//                             alert("Ошибка!!! Введите один символ!");
//                         }
//                         break;
//         }
//     }
//     else if(lengthStr == "") {
//         alert(`Ошибка!!! Длина строки не должна быть пустой!`);
//     }
//     else {
//         alert(`Ошибка!!! Длина строки должна быть > 0 и <= ${MAXLENGTHSTR}`);
//     }
// }
// else {
//     alert("Ошибка!!! Длина строки должна быть числом!");



// let str = "Привет друзья!";
// let resultStr = "";
// for(let i = 0; i < str.length; i++) {
//     if(i == str.length - 1) {
//         resultStr += str[i];
//     }
//     else {
//         resultStr += str[i] + "\n";
//     }
// }
// alert(resultStr);


// let countItems = +prompt("Кол-во элементов в массиве:");

// if(countItems > 0 && countItems <= 20) {
//     for(let i = 0; i < countItems; i++) {
//         mas[i] = Math.ceil(Math.random() * 10);



//         let mas = [];
// let str = "";
// let countItems = +prompt("Кол-во элементов в массиве:");
// let mas = [];
// let str = "";
// let countItems = +prompt("Кол-во элементов в массиве:");

// if(countItems > 0 && countItems <= 20) {
//     for(let i = 0; i < countItems; i++) {
//         mas[i] = Math.ceil(Math.random() * 10);
//     }
//     for(let index in mas) {
//         console.log(mas[index] + '\n');
//         str += mas[index] + '\n';
//     }
//     alert(str);
// }
// else {
//     console.log("Кол-во элементов в массиве должно быть > 0 и не больше 20!");
// }





/***** 10. Даны два массива: ['a', 'b', 'c'] и[1, 2, 3].Объедините их вместе ****/
/**** 1-й вариант*/
// let arrayOne = ['a', 'b', 'c'];
// let arrayTwo = [1, 2, 3, 4, 5];
// let arrayMix = [];

// let str = "";
// let i = 0;

// for(let index in arrayOne) {
//     arrayMix[i] = arrayOne[index];
//     i++;
// }
// for(let index in arrayTwo) {
//     arrayMix[i] = arrayTwo[index];
//     i++;
// }
// for(let index in arrayMix) {
//     str += arrayMix[index] + '\n';
// }
// alert(str);

// if(countItems > 0 && countItems <= 20) {
//     for(let i = 0; i < countItems; i++) {
//         mas[i] = Math.ceil(Math.random() * 10);
/**** 2-й вариант*/
// let massLet = ['a', 'b', 'c'];
// let massNum = [1, 2, 3];

// for (let i = 0; i < massNum.length; i++) {

//     massLet[massLet.length] = massNum[i];

// }
// console.log(massLet);

// let month = "";
// let numberDate;
// let dayWeek = "";

// let date = new Date();

// let arrayDays = {
//     0: "воскресенье",
//     1: "понедельник",
//     2: "вторник",
//     3: "среда",
//     4: "четверг",
//     5: "пятница",
//     6: "суббота"
// }

// let arrayMonth = {
//     0: "январь",
//     1: "февраль",
//     2: "март",
//     3: "апрель",
//     4: "май",
//     5: "июнь",
//     6: "июль",
//     7: "август",
//     8: "сентябрь",
//     9: "октябрь",
//     10: "ноябрь",
//     11: "декабрь"
// }

// for (let index in arrayDays) {
//     if(date.getDay() == index) {
//         dayWeek = arrayDays[index];
//     }
//     for(let index in mas) {
//         console.log(mas[index] + '\n');
//         str += mas[index] + '\n';
// }

// for (let index in arrayMonth) {
//     if (date.getMonth() == index) {
//         month = arrayMonth[index];
//     }
//     alert(str);
// }
// else {
//     console.log("Кол-во элементов в массиве должно быть > 0 и не больше 20!");
// } 

// console.log(`Сегодня - ${month}, ${date.getDate()} (${dayWeek})`); 





// console.log(`Сегодня - ${date.getFullYear()}, ${month}, ${date.getDate()}(${dayWeek}).
//  Время ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`); 





 let month = "";
let dayWeek = "";

let date = new Date();

let arrayDays = {
    0: "воскресенье",
    1: "понедельник",
    2: "вторник",
    3: "среда",
    4: "четверг",
    5: "пятница",
    6: "суббота"
let a, b, c; //коэф. кв. уравнения
let D; //дискриминант
let x1, x2; //корни кв. уравнения
let cancel;

function setParametrs () {
    a = setParam("a");
    b = setParam("b");
    c = setParam("c");
}

let arrayMonth = {
    0: "январь",
    1: "февраль",
    2: "март",
    3: "апрель",
    4: "май",
    5: "июнь",
    6: "июль",
    7: "август",
    8: "сентябрь",
    9: "октябрь",
    10: "ноябрь",
    11: "декабрь"
}
function setParam(nameParam) {
    let param;
    do {
        param = prompt(`Коэф. ${nameParam}:`);
        cancel = checkParametr(param);
    } while (cancel);

for (let index in arrayDays) {
    if(date.getDay() == index) {
        dayWeek = arrayDays[index];
    }
    return param;
}

for (let index in arrayMonth) {
    if (date.getMonth() == index) {
        month = arrayMonth[index];
function checkParametr(param) {
    if (typeof param == "object") {
        return false;
    }
    else if (isNaN(param) || param == "") {
        alert("Ошибка! Введена пустая строка или не число!");
        return true;
    }
}

console.log(`Сегодня - ${date.getFullYear()}, ${month}, ${date.getDate()}(${dayWeek}). Время ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`); 
setParametrs(); 