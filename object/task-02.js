// 2)Создайте объект city, укажите у него свойства name (название города, строка)
//  со значением "Город" и population (населенность города, число) со значением 10 млн.
// Создайте у объекта city метод getCityName(), который вернет название города

let city = {
    name: "Город",
    population: 10000000,
    getCityName() {
        console.log(this.name)
    }
};
city.getCityName();