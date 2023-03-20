// 6)Проверить, содержит ли строка второе вхождение подстроки, вернуть true или false.
// Используйте String.prototype.includes(), String.prototype.indexOf()
// Тестовые данные:
// Строка: "Мама мыла раму"
// Подстрока 1: "ма"
// Подстрока 2: "мы"

let str06 = "Мама мыла раму";
let count = 0;
let count1 = 0;
let str61 = str06.indexOf("ма");
let str62 = str06.indexOf("мы");

while (str61 !== -1) {

    count++;
    str61 = str06.indexOf("ма", str61 + 1);
}
if(count >1) {
    count = 1;
    console.log(Boolean(count));
} else {
    count = 0;
    console.log(Boolean(count));
}
    
while (str62 !== -1) {
    count1++;
    str62 = str06.indexOf("мы", str62 + 1);
}
if (count1 >1) {
    count1 = 1;
    console.log(Boolean(count1));
} else {
    count1 = 0;
    console.log(Boolean(count1));
}
    
