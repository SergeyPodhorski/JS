// 3)Создайте функцию conc, которая должна конкатенировать значения двух параметров a и b и возвращать строку.
// Используйте Function Declaration Statement (FDS). Вызовите функцию до ее объявления.
// Тестовые данные:
// a = '1', b = '1', result = '11' 
// a = 1, b = 1, result = '11'

conc(1, 1);
function conc(a, b) {
    let firstNum = String(a);
    let secondNum = String(b)
    let con = firstNum.concat(secondNum);
    return con;
}
