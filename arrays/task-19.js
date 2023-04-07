// 19)Создать массив, который содержит строки и числа. Проверить, содержит 
// ли массив только строки. Вывести результат в консоль

let strNumber = [`apple`, 2, `orange`, 5];

for (let i = 0; i <= strNumber.length-1; i++) {
    if (typeof strNumber[i] === `string`) {
        console.log(strNumber[i] + ` - строка`);
    } else {
        console.log(strNumber[i] + ` - не является строкой`);
    }
}
