function fibonacciSequence(count) {

var fib = [0,1];

for (i=0; i <= (count-2); i++){
    fib.push(fib[i] + fib[i+1]);
};

fib = fib.slice(1);
return fib;
};

module.exports = fibonacciSequence;
