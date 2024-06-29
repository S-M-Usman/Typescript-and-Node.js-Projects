#!/usr/bin/env node
//importing inquirer library
import inquirer from "inquirer";
//creating objects from currency converter
const currency = {
    "USD": 1, // base currency 
    "INR": 83.26,
    "EUR": 0.92,
    "JPY": 151.80,
    "PKR": 278.00,
    "GBP": 0.79,
    "RUB": 92.58,
    "AUD": 1.51,
    "VND": 24962.50,
    "CNY": 7.23,
    "BRL": 5.22,
};
//TAKING INPUT FROM USER
let userInput = await inquirer.prompt([
    {
        type: "list",
        name: "originalCurrency",
        message: "Enter the Original Currency",
        choices: ["USD", "INR", "EUR", "JPY", "PKR", "GBP", "RUB", "AUD", "VND", "CNY", "BRL"],
        default: "USD"
    },
    {
        type: "list",
        name: "convertedCurrency",
        message: "Enter the Currency you want to convert to",
        choices: ["USD", "INR", "EUR", "JPY", "PKR", "GBP", "RUB", "AUD", "VND", "CNY", "BRL"]
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the Amount",
        default: 1
    }
]);
//APPLYING CONVERSION
let convertedAmount = (userInput.amount * currency[userInput.convertedCurrency]) / currency[userInput.originalCurrency];
console.log(convertedAmount.toFixed(2));
