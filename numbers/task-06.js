// 6)Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и 
// результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

function delenie (a, b) {
    if (a % b == 0) {
        console.log("делится " + "результат: " + a / b);
    } else {
        console.log("делится с остатком " + "остаток: " + a % b);
    }
}
delenie (18, 9);