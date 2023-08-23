//This code is for BMI (Body Mass Index) basic calc
const readline = require('readline'); //as this is not for web but for nodeJS => importing the 'readline' module

//follows the readline interface 'rl' to interact with in and out for a more organized shell communication:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please, enter your weight: ", (weight) => {
    const W = parseFloat(weight);

    rl.question("Please, now enter your height: ", (height) => {
        const H = parseFloat(height);

        const I = W / (H ** 2);
        const formattedBMI = parseFloat(I.toFixed(2)); //format BMI with 2 decimals
        console.log("You BMI is: ", formattedBMI);

        rl.close(); //this is important to close the readline interface releasing resources associated (if any) with the interface and allowing the code to finish beautifully ^^
    });
});