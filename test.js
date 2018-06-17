//Хеш таблиця
var cats = {
    first: "myrzuk",
    second: "barsyk"
};
console.log(cats["first"]);

//Обєкт
var user = {
    name: "Marian",
    surname: "Malyna",
    age: 25
};
console.log(user.name);

//За допомогою класичного обєкта=конструктора
var dogs = new Object();
dogs["first"] = "Marian";
dogs.going = function(){
    console.log(dogs["first"]);
};


function Audi(id, volume, color) {
    this.id = id;
    this.volume = volume;
    this.color = color
    this.drive = function(){
        console.log(this.id);
    };
};
Audi.drive = function (){
    console.log(this.volume);
};
Audi.prototype.drive = function (){
    console.log(this.volume);
};




var Audi = function (id, volume, color) {
    this.id = id;
    this.volume = volume;
    this.color = color
    var a = function(){
    }
};

var audi_1 = new Audi (1, 3.0, "red");




