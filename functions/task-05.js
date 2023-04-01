 // 5)Создайте анонимную функцию, которая должна выводить сообщение 'message in console' 
// в коноль. Используйте ее как обработчик события click для кнопки.

(function(mesage,yes,no) {
    if (confirm(mesage)) {
        yes();
    } else {
        no();
    }       
})("Если нажата ок сообщение в консоль",
function(){console.log("message in console")},
function(){console.log("нажата отмена")})
 