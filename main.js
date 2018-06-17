var names = [];
var start = confirm("Розпочинаємо ввід імен?")


if (start == true) {
    //var quanity = Number(prompt("Введіть кількість імен"));
    //for (i = 0; i<quanity; i++ ) {
    //    names.push(prompt("Введіть імя"));
   // }
   do{
    names.push(prompt("Введіть імя"));
    var repeat = confirm("Продовжуєм вводити імена?");
   }while (repeat)
 }
 else{
   document.write ("Завдання не розпочато!");
}

function randomize(names) {
    var quantityElements = names.length;
    var temp, index;
    while (quantityElements > 0) {

        index = Math.floor(Math.random() * quantityElements);
        quantityElements--;
        temp = names[quantityElements];
        names[quantityElements] =  names[index];
        names[index] = temp;
    }
    return  names;
}

console.log(randomize(names));
/*var list  = document.getElementsByTagName("UL");
console.log(list);
for (var i=0; i<names.length; i++){

    var li =document.createElement('LI');
    var textnode = document.createTextNode(names[i]);       
    li.appendChild(textnode);                              
    list.appendChild(li); 

}*/