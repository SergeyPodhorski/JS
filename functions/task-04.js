// 4)Создайте функцию comp, которая должна сравнивать значения двух параметров
//  a и b и возвращать 1, если они равны и -1, если они не равны.
// Используйте Function Definition Expression (FDE). Вызовите функцию до ее объявления.
// Тестовые данные:
// a = 'abc', b = 'abc', result = 1
// a = 'abC', b = 'abc', result = -1

let comp;
let a;
let b;
    if (a === b) {
        comp = function() {
        return 1;
    }
    } else {
        comp = function() {
        return -1;
    }
}

comp("abc", "abc");
