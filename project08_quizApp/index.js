#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class QuizApp {
    questions;
    correctAnswers;
    constructor() {
        this.questions = [
            'When was Javascript developed',
            'Who is the creator of Javascript',
            `_____ is the superset of JavaScript`,
            `Which tool is commonly used keyword to compile TypeScript code to JavaScript?`,
            `What does the "interface" keyword do in TypeScript?`,
            `Which keyword is used to define a function in TypeScript?`,
            `Which keyword is used to define a class in TypeScript?`,
            `Which of the following is NOT a benefit of using TypeScript?`,
            `In TypeScript, what symbol is used to denote a type assertion?`,
            `What is the purpose of TypeScript's "enum" keyword?`
        ];
        this.correctAnswers = [
            '1995',
            'Brendan Eich',
            'TypeScript',
            'tsc (TypeScript Compiler)',
            'Interfaces are used for defining object types',
            'function',
            'class',
            'Automatic memory management',
            '#',
            'Enumerations'
        ];
    }
    async Quiz() {
        let score = 0;
        for (let i = 0; i < this.questions.length; i++) {
            let question = this.questions[i];
            let correctAnswer = this.correctAnswers[i];
            let choices = this.getChoices(i, correctAnswer);
            let answer = await inquirer.prompt([
                {
                    type: 'list',
                    name: `question${i + 1}`,
                    message: question,
                    choices: choices
                }
            ]);
            if (answer[`question${i + 1}`] === correctAnswer) {
                score++;
            }
        }
        console.log(chalk.green(`Quiz complete! Your score is ${score} out of ${this.questions.length}`));
        process.exit(0);
    }
    getChoices(i, correctAnswer) {
        let choices = [];
        if (i === 0) {
            choices = ['1992', '1990', '1876', correctAnswer];
        }
        else if (i === 1) {
            choices = ['Bill Gates', 'Steve Jobs', 'Nelson Eich', correctAnswer];
        }
        else if (i === 2) {
            choices = ['C#', 'Java', 'python', correctAnswer];
        }
        else if (i === 3) {
            choices = ['npm (Node Package Manager)', 'webpack', 'git (Version Control System)', correctAnswer];
        }
        else if (i === 4) {
            choices = ['Interfaces can be instantiated directly.', correctAnswer, 'Interfaces can contain implementation details.', 'Interfaces are only applicable to classes.'];
        }
        else if (i === 5) {
            choices = [correctAnswer, `let`, 'class', 'interface'];
        }
        else if (i === 6) {
            choices = [correctAnswer, `function`, 'let', 'interface'];
        }
        else if (i === 7) {
            choices = [correctAnswer, `Optional static typing`, `Improved code readability`, `Enhanced IDE support`];
        }
        else if (i === 8) {
            choices = [correctAnswer, ':', '$', '@'];
        }
        else if (i === 9) {
            choices = [correctAnswer, 'To handle exceptions in code', `To create an anonymous function`, `To declare a variable with global scope`];
        }
        return choices;
    }
    startQuiz() {
        let userDetails = inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'age',
                message: 'What is your age?'
            }
        ]);
        userDetails.then((answers) => {
            if (answers.name === "" || answers.age === "") {
                console.log(chalk.red("Please enter your name and age"));
            }
            else {
                console.log(chalk.green(`Welcome ${answers.name} to the Quiz App!`));
                console.log(chalk.yellow(`Rules: \n1.This quiz is all about Typescript`
                    + `\n2.You will be given 10 questions`
                    + `\n3.You will be given 4 options to choose from`
                    + `\n4.You will be given 1 point for each correct answer`
                    + `\n5.You will be given 0 points for each incorrect answer`
                    + `\n6.You will be given 0 points for each unanswered question`));
                this.Quiz();
            }
        });
    }
}
let quizApp = new QuizApp();
quizApp.startQuiz();
