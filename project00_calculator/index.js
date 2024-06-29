#! /usr/bin/env node   
//importing inquirer module and prompting user for inputs and operatio to perfprm
import inquirer from "inquirer";
console.log("Welcome To My CLI Based Calculator");
const answers = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter First Number",
    },
    {
        name: "num2",
        type: "number",
        message: "Enter Second Number",
    },
    {
        name: "operation",
        type: "list",
        message: "Select Operation to Perform",
        choices: ["Add", "Subtract", "Multiply", "Divide", "Modulus", "Power", , "Exit"]
    }
]);
// Applying if else conditions so that each type of operation can be performed only if it is selected
if (answers.operation == "Exit") {
    console.log("Thank You For Using My CLI Based Calculator");
    process.exit();
}
else if (answers.operation == "Add") {
    console.log(answers.num1 + answers.num2);
}
else if (answers.operation == "Subtract") {
    console.log(answers.num1 - answers.num2);
}
else if (answers.operation == "Multiply") {
    console.log(answers.num1 * answers.num2);
}
else if (answers.operation == "Divide") {
    console.log(answers.num1 / answers.num2);
}
else if (answers.operation == "Modulus") {
    console.log(answers.num1 % answers.num2);
}
else if (answers.operation == "Power") {
    console.log(answers.num1 ** answers.num2);
}
else {
    console.log("Please Select A Valid Operatin!");
}
