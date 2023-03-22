// 1)Напишите функцию randomInRange которая принимает два параметра - начало и конец промежутка, 
// в котором искать случайное значение.
// Функция должна каждый раз возвращать новое случайное число.

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
    
}
console.log(getRandomArbitrary(10, 15));
