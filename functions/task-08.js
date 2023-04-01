// 8)Создайте конструкцию, с помощью которой сразу выполниться выше реализованная функция conc. 
// Используйте IIFE.


(function () {
    let a = 1;
    let b = 1;
    let firstNum = String(a);
    let secondNum = String(b)
    let con = firstNum.concat(secondNum);
    console.log(con);
})();