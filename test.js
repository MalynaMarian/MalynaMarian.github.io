//Функція підрахунку парних і не парних чисел
function countNumbers (n) {
    var str = n.toString();
    var result = {odd:0, even:0};
    for (var i = 0; i < str.length; i++ ){
        if (str[i] % 2 == 0){
            result.odd +=1;
        }
        else{
        result.even +=1;
        }
    }
    return result;
}
//Функція підрахунку суми 1-ий спосіб
function generateSumNumbers(n) {
    var str = n.toString();
    var sum = 0;
    for (var i = 0 ; i<str.length; i++){
        var int = parseInt(str[i]);
        sum += int;
    }
    if (sum > 10){
        n = sum;
        generateSumNumbers(n);
    }
    return sum;
}
//Функція підрахунку суми 2-ий спосіб
function generateSumNumbers1(n) {
    var str = n.toString();
    while (str.length > 1){
        var sum = 0;
        for (var i = 0 ; i<str.length; i++){
            var int = parseInt(str[i]);
            sum += int;
        }
        if (sum > 10){
            str = sum.toString();
        }
        else{
            break;
        }
    }
    return sum;
}
//Функція підрахунку суми 3-ий спосіб
function generateSumNumbers2(n) {
    var str = n.toString();
    var sum = 0;
    for (var i = 0 ; i<str.length; i++){
        var int = parseInt(str[i]);
        sum += int;
    }
    if (sum > 10){
        var str1 = sum.toString();
        //console.log(typeof(sum));
        sum = 0;
            for (var j=0; j < str1.length; j++){
                var int1 = parseInt(str1[i]);
                sum += int1;
            }
    }
    //console.log(typeof(sum));
    return sum;
}