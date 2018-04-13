var n = Number(prompt("Введіть кількість чисел"));

function generateFibonacci (n){
    var fibo = [1, 1]
    for (i=2; i<n; i++){
        var a = (fibo[fibo.length - 1]) + (fibo[fibo.length - 2]);
        fibo.push(a);
    }
    return fibo
}
console.log(generateFibonacci(n));