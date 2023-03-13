// 4)Напишите код, который выводит в консоль true, если строка str содержит 'discount' или 'low price', а иначе false.
// Тестовые данные: 'buy now, discount', 'buy now, dIscOUnt', 'take that, low price', 'low take that, prICE'.
// Используйте String.prototype.includes().

let text =  'buy now, discount, buy now, dIscOUnt, take that, low price, low take that, prICE';
console.log(text.includes("discount"));
console.log(text.includes("low price"));
console.log(text.includes("discounT"));