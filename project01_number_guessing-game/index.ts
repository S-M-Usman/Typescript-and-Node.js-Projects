#! /usr/bin/env node
// generating a random number
const generatedNumber = Math.floor(Math.random() * 6 + 1) ;
import inquirer from "inquirer";
const guessedNumber = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "Guess The Number between 1 to 6",
    }
])
// apllying the conditions
if (guessedNumber.guessedNumber == generatedNumber) {
    console.log("You Guessed Correctly");
}
else {
    console.log("You Guessed Incorrectly");
}