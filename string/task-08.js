// 8)Создать строку: 10 times 2 is 20' используя переменные:
// const a = 10;
// const b = 2;
// Используйте шаблонные строки.

// const a = 10;
// const b = 2;
// let str8 = `${a} times ${b} is 20`;
// console.log(str8);

function strSmall (a, b) {
    let myStr = `${a} times ${b} is 20`;
    return myStr;
}
strSmall (10, 2);
