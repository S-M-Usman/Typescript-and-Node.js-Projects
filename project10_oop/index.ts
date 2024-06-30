import inquirer from 'inquirer';
import chalk from 'chalk';
import { Person } from './person.js';
import { Student } from './student.js';

// Async arrow function to run the program
const main = async () => {
    try {
        const answer = await askQuestion("Type 1 If you like to talk to others, Type 2 If you like to stay alone, Type 3 If you like to do both");
        const input = parseInt(answer.trim(), 10);
        if (isNaN(input) || input < 1 || input > 3) {
            throw new Error("Invalid input. Please enter a number between 1 and 3.");
        }

        const myPerson = new Person();
        myPerson.askQuestion(input);
        console.log(chalk.green("Your personality is: " + myPerson.getPersonality()));

        const name = await askQuestion("What is your Name");
        const myStudent = new Student();
        myStudent.name = name.trim();
        console.log(chalk.blue("Your Name is: " + myStudent.name + " and your personality is: " + myStudent.getPersonality()));
    } catch (error) {
        console.error(chalk.red("Error:", (error as Error).message));    }
};

// Function to asynchronously ask a question using inquirer
const askQuestion = async (message: string): Promise<string> => {
    const answer = await inquirer.prompt({
        type: 'input',
        name: 'value',
        message: message
    });
    return answer.value;
};

// Call the async main function to run the program
main();