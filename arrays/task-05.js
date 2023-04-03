// 5)Создать массив чисел в диапазоне от 0 до 100. Подсчитать и вывети сумму тех элементов, 
// которые больше 50

function search (arr) {
    return arr.filter(item => item > 50);
}

let numbers = [10, 20, 30, 40, 50,
               60, 70, 80, 90 ,100
              ];
let numFilter = search(numbers);
let sum = numFilter.reduce((a, b) => a + b);
console.log(sum);