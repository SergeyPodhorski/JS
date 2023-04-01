// 1)Создать функцию, которая выводит в консоль строчку в формате 'символ - код' 
// для кодов в диапазоне 78000 - 78030 (все пары в диапазоне).
// Используйте String.prototype.fromCodePoint().

// function numbers(a) {
//   let b = String.fromCodePoint(a);
//   if (a < 78000 || a > 78030) {
//     console.log("Число не входит в диапазон чисел");
//   } else {
//     return b + " " + a;
//   }
  
// }
// numbers(78001);

let num = "";
function numbers(a, b) {
  for (a; a <= b; a++) {
     num += String.fromCodePoint(a) + "-" + a + " ";
  }
     return num;
} 
numbers(78000, 78030);