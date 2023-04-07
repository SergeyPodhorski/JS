// 20)Создать отсортированный массив чисел. Реализовать функцию 
// binarySearch(arr, value), которая принимает массив и значение и 
// возвращает индекс значения в массиве или -1.
// Функция должна использовать бинарный поиск.
// Вывести результат в консоль

function binarySearch(arr, value) {
   let binaryNumber = arr.findIndex(item => item.toString(2) == value.toString(2) );
    console.log(binaryNumber);
}
let sortArr = [5, 1, 4, 3, 2];
sortArr.sort((a, b) => a - b);
console.log(sortArr);
binarySearch(sortArr, 2);

