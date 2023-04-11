// 3)Создайте функцию getObjThis(), которая возвращает this. Создайте несколько 
// объектов city1 и city2 по примеру предыдущего задания с методом getCityName.
// Разве что в этом случае метод getCityName должен ссылаться на функцию getObjThis. 
// Проверьте работу метода у обоих объектов.

let city1 = {
    name: "Moscow",
    population: 13000000,
    getCityName: getObjThis,
    
};
let city2 = {
    name: "Gomel",
    population: 526000,
    getCityName: getObjThis,
    
};
function getObjThis() {
    console.log(this.name);
}
city1.getCityName();
city2.getCityName();