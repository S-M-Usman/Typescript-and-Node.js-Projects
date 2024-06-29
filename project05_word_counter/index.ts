#! /usr/bin/env node
import inquirer from "inquirer";
//prompting user for some text
const userInput = await inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter some text"
    }
])
//splitting text into words
const words = userInput.text.trim().split(" ")
//printiing array of words
console.log(words);
//printing number of words
console.log(`the number of words is ${words.length}`);

