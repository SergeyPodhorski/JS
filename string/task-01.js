// 1)Объявите три переменных: hour, minute, second. Присвойте им следующие значения: 4, 35, 5.
// Выведите в консоль время в формате 04:35:05.
// Используйте String.prototype.padStart().

let hour = 4;
let minute = 35;
let second = 5;
console.log(String(hour).padStart(2, "0") + String(minute).padStart(3, ":") + String(second).padStart(3, ":0"));