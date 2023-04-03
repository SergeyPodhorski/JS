// 9)Создайте массив styles с элементами "Jazz", "Blues".
// Добавьте в конец значение "Rock-n-Roll"
// Замените предпоследнее значение с конца на "Classics". 
// Удалите первый элемент из массива и выведите его в консоль
// Добавьте в начало два элемента со значениями "Rap" и "Reggae"
// Выведите массив в консоль.

let styles = [`Jazz`, `Blues`];
styles.push(`Rock-n-Roll`);
styles.splice(1,1, `Classics`);
console.log(styles.shift());
styles.splice(0, 0, `Rap`, `Reggae`);
console.log(styles);