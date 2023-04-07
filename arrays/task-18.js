// 18)Получить из строки 'a big brown fox jumps over the lazy dog' массив слов, 
// который содержит элементы, длина которых не больше 3 символа.
//  Вывести массив в консоль.
 let smallText = `a big brown fox jumps over the lazy dog`;
 let arrText = smallText.split(` `);
 arrText = arrText.filter(item => item.length <= 3);
 console.log(arrText);
