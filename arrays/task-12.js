// 12)Создать двумерный массив:

// 1 2 3
// 4 5 6
// 7 8 9
// Вывести его в консоль. Преобразовать массив одномерный и снова вывести в консоль

let num = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let result = num.reduce(function(a, b) {
        return a.concat(b);
    });
    
console.log(num);   
console.log(result);