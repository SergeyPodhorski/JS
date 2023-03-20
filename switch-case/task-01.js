// 1) Перепишите if..else используя оператор switch-case.
// let message;
// if (login === 'Вася') {
//     message = 'Привет';
//   } else if (login === 'Директор') {
//     message = 'Здравствуйте';
//   } else if (login === '') {
//     message = 'Нет логина';
//   } else {
//     message = '';
//   }

let login = prompt("Введите ваше имя");
switch(login) {

    case "Вася":
    alert("Привет");
    break;

    case "Директор":
    alert("Здравствуйте");
    break;

    case "":
    alert("Нет логина");
    break;

    default:
        alert("ошибка ввода");
}
