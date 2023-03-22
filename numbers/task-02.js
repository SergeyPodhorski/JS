// 2)Найдите квадратный корень из 999. Результат округлите до целых, до десятых, до сотых.

let num = Math.sqrt(999);
console.log(num);
num = (Math.ceil(num * 100)/100);
console.log(num);
num = (Math.ceil(num * 10)/10);
console.log(num);
