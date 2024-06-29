#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let StopWatch = async () => {
    // Display a welcome message
    console.log(chalk.blueBright('\nWelcome to Countdown Timer!'));
    // Prompt user for input using inquirer
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'Hours',
            message: 'Enter hours:',
            validate: (value) => {
                const valid = !isNaN(parseInt(value)) && parseInt(value) >= 0;
                return valid || 'Please enter a valid number of hours (0 or positive integer).';
            },
            filter: (value) => parseInt(value)
        },
        {
            type: 'input',
            name: 'Minutes',
            message: 'Enter minutes:',
            validate: (value) => {
                const valid = !isNaN(parseInt(value)) && parseInt(value) >= 0 && parseInt(value) < 60;
                return valid || 'Please enter a valid number of minutes (0 to 59).';
            },
            filter: (value) => parseInt(value)
        },
        {
            type: 'input',
            name: 'Seconds',
            message: 'Enter seconds:',
            validate: (value) => {
                const valid = !isNaN(parseInt(value)) && parseInt(value) >= 0 && parseInt(value) < 60;
                return valid || 'Please enter a valid number of seconds (0 to 59).';
            },
            filter: (value) => parseInt(value)
        }
    ]);
    // Assign the inputs
    const userHours = userInput.Hours;
    const userMinutes = userInput.Minutes;
    const userSeconds = userInput.Seconds;
    console.log(chalk.green(`\n Timer Started: ${userHours} hours:${userMinutes} minutes:${userSeconds} seconds.`));
    const timerInput = (userHours * 60 * 60) + (userMinutes * 60) + userSeconds;
    // Calculate the end time by adding the input seconds to the current time
    const finalTime = new Date().getTime() + timerInput * 1000;
    // Determine the inetreval of timer mark
    const intervalTimer = Math.floor(timerInput / 2);
    const intervalTimerMark = new Date().getTime() + intervalTimer * 1000;
    // Countdown logic
    const stopWatchInterval = setInterval(() => {
        const current = new Date().getTime();
        const timeRemaining = finalTime - current;
        if (timeRemaining <= 0) {
            console.clear();
            console.log(chalk.red.bold(`\t\n --- Times Up --- \n`));
            clearInterval(stopWatchInterval);
            return;
        }
        // Calculate hours, minutes, and seconds left
        const hoursReamining = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutesReamining = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const secondsReamining = Math.floor((timeRemaining / 1000) % 60);
        // Clear the console and print the remaining time
        console.clear();
        console.log(chalk.yellow(`Time remaining: ${String(hoursReamining).padStart(2, '0')} hours, ${String(minutesReamining).padStart(2, '0')} minutes, ${String(secondsReamining).padStart(2, '0')} seconds.`));
        // Alert when half-time is reached
        if (current >= intervalTimerMark && current < intervalTimerMark + 1000) {
            console.log(chalk.magenta.bold('\n--- Half Time Reached! ---\n'));
        }
        // Alert when 10 seconds are left
        if (timeRemaining <= 10000 && timeRemaining > 9000) {
            console.log(chalk.cyan.bold('\n--- 10 seconds left! ---\n'));
        }
    }, 1000);
};
StopWatch();
