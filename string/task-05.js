// 5)Напишите код, который проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на '...',
//  так чтобы ее длина стала равна maxlength. Результатом должна быть (при необходимости) усечённая строка.
//  Выведите строку в консоль. Тестовые данные: 'Вот, что мне хотелось бы сказать на эту тему:', 20
// 'Всем привет!', 20

// let str1 = "Вот, что мне хотелось бы сказать на эту тему:";
// let str2 = "Всем привет!";
// if(str1.length >= 20) {

//     console.log(str1.slice(0,18) + "...");

// }else{
//     console.log(str1 + "меньше");
// }
// if(str2.length >= 20) {

//     console.log(str2.slice(0,18) + "...");

// }else{
//     console.log(str2 + "меньше 20 символов");
// }

let str1 = " ";
   

function test (str1, maxlength) {
    
    if(str1.length >= maxlength) {
        console.log(str1.slice(0,18) + "...");
    } else {
        console.log(str1 + " " + "эта строка меньше 20 символов");
}
}
test ("Всем привет", 20);
