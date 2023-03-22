// 3)Дан массив numbers. Найдите среднее арифметическое его элементов. Проверьте задачу на 
// массиве с элементами 12, 15, 20, 25, 59, 79.

let arr = [12, 15, 20 ,25 ,59, 79];
let sum = 0;
let srednee = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    srednee = sum / arr.length;
}
console.log(srednee);