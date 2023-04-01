// 10)Решать как для браузера. Создайте функцию-конструктор Calculator, который 
// создаёт объекты с четырьмя методами:read() запрашивает два значения при 
// помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.multiply() возвращает 
// произведение введённых свойств.history() возвращает историю вызванных 
// функций при работе с объектом начиная с момента его создания.

function Calculator() {
    
  let obj = {
        
      };
      
    this.read = function() {
      this.a = +prompt('a', 0);
      this.b = +prompt('b', 0);
      
      obj.numberA = this.a;
      obj.numberB = this.b;
      obj.sum = this.sum();
      obj.multiply = this.multiply();
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.multiply = function() {
      return this.a * this.b;
    };

    this.history = function() {
        
         let historyOptions;
         historyOptions = "NumberA = " + this.a + " " + 
               "NumberB = " + this.b + " " +
               "Sum = " + this.sum() +
               "Multiply = " + this.multiply();
        return historyOptions;
        
    }
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert("Sum=" + calculator.sum());
  alert("Multiply=" + calculator.multiply());
  alert("History=" + calculator.history());
