#! /usr/bin/env node
import inquirer from "inquirer";
//  ____________________________ATM _______________________________________
const userPassword = 6195;
let accountBalance = 10000;
// importing inquirer and perform feature #1 User Authentication
let userInput = await inquirer.prompt([
    {
        type: "number",
        name: "userpassword",
        message: "Enter your 4 digit password"
    }
]); //If User Authentication is successful Then GO for user choice for operation
if (userInput.userpassword === userPassword) {
    console.log(`Welcome to ATM!`);
    let atm = await inquirer.prompt([
        {
            type: "list",
            name: "atm",
            message: "What do you want to do?",
            choices: ["Withdrawal", "Balance Enquiry", "Deposit", "Fast Cash", "Exit"]
        }
    ]);
    //#2 If user choice is withdrawal then ask for amount to withdraw
    if (atm.atm === "Withdrawal") {
        let withdrawalAmount = await inquirer.prompt({
            type: "number",
            name: "withdrawalAmount",
            message: "Enter the amount you want to withdraw"
        });
        // If amount is less than balance then withdrawal is successful
        withdrawalAmount.withdrawalAmount < accountBalance ? console.log(`Withdrawal Successful /n Your remaining balance is ${accountBalance - withdrawalAmount.withdrawalAmount}`) : console.log("Insufficient Balance");
    }
    //#3 If user choice is balance then balance is shown
    else if (atm.atm === "Balance Enquiry") {
        console.log(`Your Balance is ${accountBalance}`);
    }
    //#4 If user choice is deposit then ask for amount to deposit
    else if (atm.atm === "Deposit") {
        let depositAmount = await inquirer.prompt({
            type: "number",
            name: "depositAmount",
            message: "Enter the amount you want to deposit"
        });
        console.log(`Deposit Successful /n Your new balance is ${accountBalance + depositAmount.depositAmount}`);
    }
    //#5 If user choice is fast cash then ask for amount to withdraw
    else if (atm.atm === "Fast Cash") {
        let fastCash = await inquirer.prompt({
            type: "list",
            name: "fastCashoption",
            message: "Select the amount you want to withdraw",
            choices: ["500", "1000", "2000", "5000", "10000", "20000"]
        });
        // If amount is less than balance then withdrawal is successful
        fastCash.fastCashoption < accountBalance ? console.log(`Withdrawal Successful /n Your remaining balance is ${accountBalance - fastCash.fastCashoption}`) : console.log("Insufficient Balance");
    }
    //#6 If user choice is exit then thank you
    else if (atm.atm === "Exit") {
        console.log(`Thank you for using ATM!`);
    }
}
//If User Authentication is UNsuccessful Then GO for wrong password message
else {
    console.log("Please Enter Correct Password");
}
