// 16)Создать массив с дублями. Найти первый элемент, который дублируется. 
// Заменить этот элемент и все его копии на символ '*'. Вывести массив в консоль.

let arrNumber = [11, 1, 4, 10, 4, 8, 5, 4, 10, 6];
console.log(arrNumber); 
let double = arrNumber.find((a, b) => arrNumber.indexOf(a) !== b);
for (let i = 0; i <= arrNumber.length; i++){
    if (arrNumber[i] == double) {
        arrNumber[i] = `*`;
    }
}
console.log(arrNumber); 


