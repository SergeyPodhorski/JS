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

function max(a, b, c) {
    let maxcount = Math.max(a, b, c);
    return maxcount;
}
max(10, 2, 5);

function min(a, b, c) {
    let mincount = Math.min(a, b, c);
    return mincount;
}
min(10, 2, 5);
