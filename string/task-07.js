// 7)Напишите код, который из строки $100 получит число и выведите его в консоль.

// let str100 = "$100";
// let sl = str100.slice(1);
// console.log(Number(sl));

function count5 (str5) {
    let sl = str5.slice(1)
    console.log(+sl);
}
count5 ("$100");