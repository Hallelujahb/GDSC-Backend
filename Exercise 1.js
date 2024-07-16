const prompt = require('prompt-sync')();
// First questoin: The star thing on the first question.
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*\t";
    }
    console.log(pattern);
}

//Second question: GCF Euclidean's theorem
console.log("Input your number you want the GCF for:")
let a= prompt ("Input first number: ")
let b= prompt ("Enter second number: ")
 while (b>0){
let temporaryStorage=b
b= a % b
a= temporaryStorage

}
console.log (`The GCF is ${a}`)
