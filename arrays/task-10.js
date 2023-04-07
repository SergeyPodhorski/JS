// 10)Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" отдельно количество 
// букв r, k, t //  и вывести в консоль

let letters = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";
let letter = letters.split("");



function sortR (item) {
    return letter.filter((item) => item == "r");
}

function sortK (item) {
    return letter.filter((item) => item == "k");
}

function sortT (item) {
    return letter.filter((item) => item == "t");
}
let letterR = sortR(letters);
let letterK = sortK(letters);
let letterT = sortT(letters);

console.log("количество букв r - " + letterR.length);
console.log("количество букв k - " + letterK.length);
console.log("количество букв t - " + letterT.length);