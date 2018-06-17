var URI = "https://api.coinmarketcap.com/v1/ticker/";
//var URL = URI + id +"/";
btn_push.addEventListener ("click", function(){
    getCurrencyByID(function(btc){
            console.log(btc);
    });
},false);


currency.addEventListener ("change", function(){
        getCurrencyByID(function(btc){
        main.innerHTML = "<h1>Назва: " + btc.name +"</h1>";
        main.innerHTML += "<h1>Ціна: " + btc.price_usd +"</h1>";
        main.innerHTML += "<h1>Обєм за 24 год: " + btc["24h_volume_usd"] +"</h1>";
    });
}, false);

function getCurrencyByID(callback) {
    var cryptocurrency = new XMLHttpRequest();
    cryptocurrency.onreadystatechange = function(){
    if ((cryptocurrency.readyState == 4) && (cryptocurrency.status == 200)){
        var data = JSON.parse(cryptocurrency.responseText);
        var btc = data[0];
        console.log(btc);
        callback(data);
    };
    
};
    cryptocurrency.open ("GET", URI, true);
    cryptocurrency.send();
}



//var number = "# " + data.id;
//var name = "Назва " + data.name;
//var price_usd = "Ціна " + data.price_usd;
//var volume_usd = "Обєм за 24 години " + data["24h_volume_usd"];
//document.getElementById("main").innerHTML = number;
//document.getElementById("main").innerHTML = name;
//document.getElementById("main").innerHTML = price_usd;
//document.getElementById("main").innerHTML = volume_usd;