console.log("Welcome to calculator!\n");

while (true) {
    const menu= parseInt(prompt("Choose which service you would like to use: \n Press 1 for arithmetic calculator  \n Press 2 for lb to kg converter \n Press 3 for feet to meter converter  \n Press 4 for BMI converter \n ==>"));
    if (menu==1) {
        const z = prompt("What operation do you want to do? Choose between the following (+, -, *, /):\n ==>");
        const x = parseFloat(prompt("Enter the first number: \n ==>"));
        const y = parseFloat(prompt("Enter the second number: \n ==>"));
        if (z === "+") {
            console.log(`Addition: ${x + y}`);
        } else if (z === "-") {
            console.log(`Subtraction: ${x - y}`);
        } else if (z === "*") {
            console.log(`Multiplication: ${x * y}`);
        } else if (z === "/") {
            console.log(`Division: ${x / y}`);
        } else {
        console.log("Invalid input. Please choose +, -, *, or /.");
    }
    } else if (menu==2) {
        lb= parseFloat(prompt("Enter pounds(lbs): \n ==>"))
        kg= lb * 0.45359237
        console.log(`In kgs:${kg.toFixed(2)}`)
        
    } else if (menu ==3) {
        feet= parseFloat(prompt("Enter feet:\n ==> "))
        meter= feet* 0.3048
        console.log(`In meter : ${meter.toFixed(2)}`);
    } else if (menu==4){
        const weight =parseFloat(prompt("Enter your weight in kilograms:\n ==>"));
        const height =parseFloat(prompt("Enter your height in meters:\n ==>"));
        const bmi = weight / (height ** 2);
        console.log(`Your BMI is: ${bmi.toFixed(2)}`);
    } else {
     console.log("Invalid input.")
    }
   
const choice = prompt("Are you done? (yes/no) :\n ==>").toLowerCase();
if (choice !== "no") {
    console.log("Thank you for using the calculator.");
    break;
    }
}
