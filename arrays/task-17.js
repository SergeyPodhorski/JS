// 17)Создать массив целых чисел. На его основе создать массивы – 
// представления этих же чисел в бинарном, восьмеричном и 
// шестнадцатеричном виде. Вывести эти массивы в консоль.
let numInteger = [25, 33 ,56];
let numSecond = [];
let numOctal = [];
let numHexadecimal = [];
for (let i = 0; i <= numInteger.length-1; i++){
    numSecond += numInteger[i].toString(2) + ` `;
    numOctal += numInteger[i].toString(8) + ` `;
    numHexadecimal += numInteger[i].toString(16) + ` `;
}

console.log(numSecond);
console.log(numOctal);
console.log(numHexadecimal);

