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





// //  let month = "";
// // let dayWeek = "";

// // let date = new Date();

// // let arrayDays = {
// //     0: "воскресенье",
// //     1: "понедельник",
// //     2: "вторник",
// //     3: "среда",
// //     4: "четверг",
// //     5: "пятница",
// //     6: "суббота"
// // let a, b, c; //коэф. кв. уравнения
// // let D; //дискриминант
// // let x1, x2; //корни кв. уравнения
// // let cancel;

// // function setParametrs () {
// //     a = setParam("a");



// let cancel; //флаг для проверки ввода параметра

// function setParametrs() {
//     let a, b, c; //коэф. кв. уравнения

//     if(a = setParam("a")) {
//         if(b = setParam("b")) {
//             if(c = setParam("c"))
//             {
//                 return [a, b, c];
//             }
//         }
//     };
// }






// function calcSolution(a, b, c) {
//     let x1, x2; //корни уравнения
//     let D; //дискриминант
//     let result; //строка с итогом

//     if ((a == 0 && c == 0) || (b == 0 && c == 0) ) {
//         result = 0;
//     }
//     // else if ((a == 0 && b == 0) || (a == 0 && b == 0 && c == 0)) {
//     //     result = "Корней нет!";
//     // }
//     else if(a == 0) {
//         result = -c/b;
//     }
//     else if(b == 0) {
//         (-c / a >= 0) ? result = Math.sqrt(-c / a) : result = "Корней нет!";
//     }
//     else if (c == 0) {
//         x1 = 0;
//         x2 = -b/a;

//         result = [x1, x2];
//     }
//     else if(a != 0 && b != 0 && c != 0) {
//          D = calcD(a, b, c);
//          result = calcRoots(D, a, b, c);
//     }
//     else {
//         result = "Корней нет!";
//     }

//     return result;
// }

// function calcD(a, b, c) {
//     return b ** 2 - 4 * a * c;
// }

// function calcRoots(D, a, b, c) {
//     if(D > 0) {
//         x1 = (-b + Math.sqrt(D)) / (2 * a);
//         x2 = (-b - Math.sqrt(D)) / (2 * a);

//         return [x1, x2];
//     }
//     else if (D == 0) {
//         return -b / (2 * a);
//     }
//     else {
//         return "Корней нет!";
//     }
// }

// function getSolution(solution) {
//     if(typeof solution == "string") {
//         alert(solution);
//     }
//     else if(typeof solution == "number") {
//         alert(`Уравнение имеет один корень: x = ${solution}`);
//     }
//     else {
//         alert(`Уравнение квадратное. Имеет два корня: \nx1 = ${solution[0]}\nx2 = ${solution[1]}`);
//     }
// }

// let params = setParametrs();
// let solution = calcSolution(params[0], params[1], params[2]);

// getSolution(solution); 







// let params = setParametrs();
// let solution

// let x1, x2; //корни кв. уравнения
// let cancel; //флаг для проверки ввода параметра
// if (typeof params != "undefined") {
//     solution = calcSolution(params[0], params[1], params[2]);
//     getSolution(solution);
// }
// else {
//     alert("Вы отменили ввод!");
// }

// function setParametrs() {
//     let a, b, c; //коэф. кв. уравнения

// }



// let params = setParametrs();
// let solution;
// let inputParamA = document.getElementById("param_a");
// let inputParamB = document.getElementById("param_b");
// let inputParamC = document.getElementById("param_c");

// if (typeof params != "undefined") {
//     solution = calcSolution(params[0], params[1], params[2]);
//     getSolution(solution);
// }
// else {
//     alert("Вы отменили ввод!");
// }
// let divButtons = document.querySelector(".buttons");

// let paramA;
// let paramB;
// let paramC;
// let result;

// let btnCalc = document.getElementById("btn_calc");

// inputParamA.addEventListener("input", () => {
//     inputParamB.removeAttribute("disabled");
//     paramA = +inputParamA.value;
// })

// inputParamB.addEventListener("input", () => {
//     inputParamC.removeAttribute("disabled");
//     paramB = +inputParamB.value;
// })
// inputParamC.addEventListener("input", () => {
//     btnCalc.removeAttribute("disabled");
//     paramC = +inputParamC.value;
// })

// btnCalc.addEventListener("click", () => {
//     result = calcSolution(paramA, paramB, paramC);

//     let solution = document.createElement("p");
//     solution.innerHTML = result;
//     divButtons.append(solution);
// })





// let params = setParametrs();
// let solution;

// if (typeof params != "string") {
//     solution = calcSolution(params[0], params[1], params[2]);
//     getSolution(solution);
// }
// else {
//     alert(params);
// }








//         let customers = [7, 4, 3, 4]; //время на обслуживание каждого покупателя
// let n = 2; //кол-во касс

// let time1 = customers[0]; //время обслуживания на 1-й кассе (стартовое = времени 1-го покупателя)
// let time2 = customers[1]; //время обслуживания на 2-й кассе (стартовое = времени 1-го покупателя)

// for(let i = 2; i < customers.length; i++) {
//     if (time1 > time2) {
//         time2 += customers[i];
//     }
//     else {
//         time1 += customers[i];
//     }
// }

// time1 > time2 ? alert(time1) : alert(time2);





// Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.
        
    ucFirst("Привет!") == "Привет!"
    function ucFirst(str) {
      if (!str) return str;
    return str [0]. toUpperCase() + str.slice(1); 
    }

    alert( ucFirst("Привет!") );//Привет!