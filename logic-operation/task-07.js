// 7) Требуется спросить у пользователя (в браузере): фамилию, имя, отчество раздельно (prompt), 
//  возраст в годах (prompt), пол (confirm).
// Вывести оператором alert анкету пользователя по примеру:
// ваше ФИО: Иванов Иван Иванович
// ваш возраст в годах: 20
// ваш возраст в днях: 7300
// через 5 лет вам будет: 25
// ваш пол: мужской
// вы на пенсии: нет
// Реализовать (в обоих реализациях оператор alert должен использоваться ровно один раз):
// с использованием условного оператора (if), без условной операции (?:)
// с использованием условной операции (?:), без условного оператора (if)

// let fio = "Ваше ФИО" + " " + prompt("Введите вашу фамилию") + " ";
// fio += prompt("Введите ваше имя") + " ";
// fio += prompt("введите ваше отчество");
// let age = prompt("Ваш возраст в годах");
// let age_old = Number(age) + 5;
// let sex = confirm("Ваш пол мужской?");
// let age_days = age * 365;
// let pensia;
 
//c if

// if(sex) {
//     sex = "Мужской";
// }else {
//     sex = "Женский";
// }

// if(age > 63) {
//     pensia = "Да";
// }else {
//     pensia = "Нет";
// }

// alert(fio +"\n"+ "Ваш возраст в годах:" + " " + age + "\n"+ "Ваш возраст в днях:" + " " + age_days +"\n" +
//      "Через 5 лет вам будет:" +" " + age_old + "\n" + "Ваш пол:" + " " + sex + "\n" + 
//      "Вы на пенсии:" + " " + pensia);

//без if c ?

     let fio = "Ваше ФИО" + " " + prompt("Введите вашу фамилию") + " ";
     fio += prompt("Введите ваше имя") + " ";
     fio += prompt("введите ваше отчество");
     let age = prompt("Ваш возраст в годах");
     let age_old = Number(age) + 5;
     let sex = confirm("Ваш пол мужской?");
     let age_days = age * 365;
     let pensia;
     
     sex = sex == true ? "Мужской" : "Женский";
     pensia = age > 63 ? "Да" : "Нет";
     
     alert(fio +"\n"+ "Ваш возраст в годах:" + " " + age + "\n"+ "Ваш возраст в днях:" + " " + age_days +"\n" +
          "Через 5 лет вам будет:" +" " + age_old + "\n" + "Ваш пол:" + " " + sex + "\n" + 
          "Вы на пенсии:" + " " + pensia);
         