// 5)Создать функцию-конструктор Person() для конструирования объектов. 
// Добавить два метода: setFirstName() и setLastName().
// Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)

function Person(firstName, lastName) {
    this.setFirstName = function() {
       this.firstName = firstName;
        console.log(this.firstName);
        return this;
    };
    this.setLastName = function() {
        this.lastName = lastName;
        console.log(this.lastName);
        return this;
    };
}
let firstMan = new Person(`Vladimir`, `Ivanov`);
let secondMan = new Person(`Dmitriy`, `Petrov`);
firstMan.setFirstName().setLastName();
