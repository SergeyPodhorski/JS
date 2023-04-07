// 11)Создать массив любых элементов. Получить случайный элемент из массива и 
// вывести его в консоль.
let country = [`Russia`, `USA`, `Germany`, `Poland`, `Ukraine`];
let randomCountry = Math.floor(Math.random() * country.length);
console.log(country[randomCountry]);
