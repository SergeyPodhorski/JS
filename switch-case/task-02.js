// 2) Переписать следующий код используя switch-case
// const a = +prompt('a?', '');
// if (a === 0) {
//     alert( 0 );
//   }
  
//   if (a === 1) {
//     alert( 1 );
//   }
  
//   if (a === 2 || a === 3) {
//     alert( '2,3' );
//   }

const a = +prompt("Введите число от 0 до 3");
switch (a) {
    case 0:
    alert("Вы ввели 0");
    break;

    case 1:
    alert("Вы ввели 1");
    break;

    case 2:
    case 3:
    alert("Вы ввели 2 или 3");
    break;

    default:
    alert("Вы ввели число не входящее в диапазон от 0 до 3");

}
