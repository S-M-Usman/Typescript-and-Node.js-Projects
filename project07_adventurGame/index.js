#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    playerName;
    playerhealth;
    playerAttackDamage;
    numHealthPotions;
    healthPotionHealAmount;
    constructor() {
        this.playerName = "";
        this.playerhealth = 100;
        this.playerAttackDamage = 25;
        this.numHealthPotions = 3;
        this.healthPotionHealAmount = 30;
    }
    takeDamage(amount) {
        this.playerhealth -= amount;
    }
    useHealthPotion() {
        if (this.numHealthPotions > 0) {
            this.playerhealth += this.healthPotionHealAmount;
            this.numHealthPotions--;
            console.log(`\t> You drink a health potion, healing yourself for ${this.healthPotionHealAmount}.`);
            console.log(`\t> You now have ${this.playerhealth} HP.`);
            console.log(`\t> You have ${this.numHealthPotions} health potions left.\n`);
        }
        else {
            console.log("\t> You have no health potions left! Defeat enemies for a chance to get one!");
        }
    }
}
class Enemy {
    enemyName;
    maxEnemyHealth;
    attackDamage;
    constructor(name, maxHealth, attackDamage) {
        this.enemyName = name;
        this.maxEnemyHealth = maxHealth;
        this.attackDamage = attackDamage;
    }
    takeDamage(amount) {
        this.maxEnemyHealth -= amount;
    }
}
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
//for introducing delay in game
class Main {
    //promise with void as its generics type
    static async main() {
        const enemies = [
            { name: "Doctor Octopus", dialogue: "You're just a nuisance, Spider-Man!" },
            { name: "Green Goblin", dialogue: "You'll never defeat me, Spider-Man!" },
            { name: "Venom", dialogue: "We are Venom, and we hunger!" },
            { name: "Sandman", dialogue: "You can't stop me, Spider-Man!" }
        ];
        let maxEnemyHealth = 100;
        let enemyAttackDamage = 30;
        let player = new Player();
        let running = true;
        let level = 1;
        console.log(chalk.yellow("Welcome, to the streets of New York City!"));
        console.log(chalk.red("I AM PETER PARKER YOUR FRIENDLY NEIGHBOURHOOD SPIDERMAN"));
        console.log(chalk.yellow("LET DEEP DIVE INTO THE STORY"));
        while (running) {
            console.log(chalk.cyan("-----------------------------------------------"));
            console.log(chalk.green("-----------------------------------------------"));
            console.log(chalk.blue("-----------------------------------------------"));
            console.log("---------------------------------------");
            await sleep(2000); // delay for 2 seconds
            console.log(chalk.yellow(`\tLevel ${level}`));
            let enemyIndex = Math.floor(Math.random() * enemies.length);
            let enemy = new Enemy(enemies[enemyIndex].name, maxEnemyHealth, enemyAttackDamage);
            console.log(chalk.red(`\t# ${enemy.enemyName} appeared! #`));
            console.log(chalk.red(`\t${enemies[enemyIndex].dialogue}`));
            while (enemy.maxEnemyHealth > 0 && player.playerhealth > 0) {
                console.log(chalk.blue(`\tYour HP: ${player.playerhealth}`));
                console.log(chalk.red(`\t${enemy.enemyName}'s HP: ${enemy.maxEnemyHealth}\n`));
                const answer = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'action',
                        message: 'What will you do?',
                        choices: [
                            { name: 'Attack', value: 'attack' },
                            { name: 'Use health potion', value: 'potion' },
                            { name: 'Flee', value: 'flee' }
                        ]
                    }
                ]);
                if (answer.action === 'attack') {
                    let damageDealt = Math.floor(Math.random() * player.playerAttackDamage);
                    let damageTaken = Math.floor(Math.random() * enemy.attackDamage);
                    enemy.maxEnemyHealth -= damageDealt;
                    player.takeDamage(damageTaken);
                    console.log(chalk.green(`\t> You strike ${enemy.enemyName} for ${damageDealt} damage.`));
                    console.log(chalk.redBright(`\t> ${enemy.enemyName} strikes you for ${damageTaken} damage.`));
                    if (player.playerhealth < 1) {
                        console.log(chalk.red("\t> You've taken too much damage and can't continue!"));
                        break;
                    }
                }
                else if (answer.action === 'potion') {
                    player.useHealthPotion();
                }
                else if (answer.action === 'flee') {
                    console.log(chalk.yellow(`\t You flee from ${enemy.enemyName}!`));
                    break;
                }
            }
            if (player.playerhealth < 1) {
                console.log(chalk.red("You limp away, defeated and bruised."));
                break;
            }
            console.log("---------------------------------------");
            console.log(chalk.green(` # ${enemy.enemyName} was defeated! # `));
            console.log(chalk.green(` # You have ${player.playerhealth} HP left. # `));
            console.log(chalk.blue(`Well THAT WHAT WE DO AND REMEMBER`));
            console.log(chalk.red(`WITH GREAT POWER COMES GREAT RESPONSIBILITY`));
            console.log("---------------------------------------");
            level++;
            const continueAnswer = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'continue',
                    message: 'What will you do now?',
                    choices: [
                        { name: 'Continue fighting', value: true },
                        { name: 'Exit the city', value: false }
                    ]
                }
            ]);
            if (!continueAnswer.continue) {
                console.log(chalk.yellow("You leave the city, knowing you've made it safer!"));
                break;
            }
        }
        console.log("------------------------------------------------");
        console.log(chalk.yellow("************************************************"));
        console.log(chalk.yellow(" # You've protected New York City! # "));
        console.log(chalk.yellow(" # Thank you for playing, hero! # "));
        console.log(chalk.yellow("************************************************"));
        console.log("------------------------------------------------");
    }
}
Main.main();
