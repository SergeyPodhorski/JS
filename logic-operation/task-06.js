// 6) Перепишите if..else используя несколько тернарных операторов.
// let message;

// if (login == 'Вася') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

let login = prompt("Введите ваше имя", "Имя");
let message = (login == "Вася") ? `Привет`:
        (login == "Директор") ? `Здравствуйте`:
        (login == " ") ? `Нет логина`: `""`;
        console.log(message);

