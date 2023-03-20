// 1)  Объявите три переменных: a, b, c. Присвойте им следующие значения: 10, 2, 5.
// Объявите переменную sum и вычислите сумму значений переменных a, b, c.
// Объявите переменную min и вычислите минимальное значение переменных a, b, c.
// Выведите результат в консоль.

// let a = 10;
// let b =2;
// let c = 5;
// let sum;
// let min;

// sum =  a + b + c;
// console.log(sum);


// if(a < b) {
//     min = a;
// }else{
//     min = b;
// }if(min < c){
//     min = min;
// }else{
//     min = c;
// }
// console.log(min);

function sum1 (a, b, c) {
    let sum = Math.max(a, b, c);
    console.log(sum);
}
sum1 (10, 2, 5);

function min1 (a, b, c) {
    let min = Math.min(a, b, c);
    console.log(min);
}
min1 (10, 2, 5);