// 7)Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11]. Используя стрелочные функции 
// создайте новый массив из элементов elem * elem,которые меньше 100 и 
// отсортируйте его по возрастанию. Выведите результат в консоль.

let arr = [1, 8, 3, 5, 12, 7, 9, 11];
let newArr = [];
let multiplication = (a) => {
    for (let i = 0; i <= a.length-1; i++) {
        for (let j = i+1; j <= a.length-1; j++) {   
            if (a[i] * a[j] < 100) {
            newArr += a[i] * a[j] + " ";
            } else {
                delete newArr[i];
            }      
        }
    }
    newArr = newArr.split(` `);
    newArr.sort((a, b) => a- b);
    return  newArr;
}
console.log(multiplication(arr));










// let arr = [ 1, 15, 2, 8, 11, 4, 25 ];

// arr.sort(function(a, b) { return a - b; });

// console.log(arr);  // 1, 2, 15
