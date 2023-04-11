// 4)Создать функцию-конструктор Tune(title, artist) для создания объектов 
// с публичными свойствами title, artist и методом concat().
// Метод должен возвращать конкатенацию значений свойств title и artist.
// Создать несколько объектов. Вызвать их метод concat().

function Tune(title, artist) {
    this.title = title;
    this.artist = artist;
    this.concat = function(){
        console.log(this.title + ` - ` + this.artist);
    };
};

let john = new Tune(`actor`, `Jukov`);
let pit = new Tune(`singer`, `Pupkin`);
john.concat();
pit.concat();