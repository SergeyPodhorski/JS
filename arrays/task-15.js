// 15)Создать массив с дублями элементов. На его основе создать новый массив 
// уникальных элементов (удалить дубли). Вывести новый массив в консоль.

let doubleNum = [2, 1, 2, 10, 5, 8, 5, 7, 10, 6];
let num2 = doubleNum.filter((item, index) => doubleNum.indexOf(item) === index); 
console.log(num2);

