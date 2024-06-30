import { BankAccount } from './BankAccount.js';
import { Customer } from './customer.js';
import inquirer from 'inquirer';

// Function to start the application
async function startApp() {
    const bankAccount = new BankAccount();
    const customer = new Customer('Shaikh', 'Usman', 'Male', 30, '9876543210', bankAccount);

    console.log(`Welcome to MyBank Console App`);

    while (true) {
        const { choice } = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'Customer Information',
                'Check Balance',
                'Debit Amount',
                'Credit Amount',
                'Exit'
            ],
        });

        if (choice === 'Exit') {
            console.log('Exiting MyBank Console App');
            break;
        }

        switch (choice) {
            case 'Customer Information':
                console.log(customer.customerInfo());
                break;
            case 'Check Balance':
                console.log(`Current Balance: ${customer.bankAccount.AccountBalance}`);
                break;
            case 'Debit Amount':
                const debitAmountPrompt = await inquirer.prompt({
                    type: 'number',
                    name: 'debitAmount',
                    message: 'Enter the amount to debit:',
                    validate: (value) => {
                        if (isNaN(value) || value <= 0) {
                            return 'Please enter a valid positive number';
                        }
                        return true;
                    },
                });
                console.log(customer.bankAccount.Debit(debitAmountPrompt.debitAmount));
                break;
            case 'Credit Amount':
                const creditAmountPrompt = await inquirer.prompt({
                    type: 'number',
                    name: 'creditAmount',
                    message: 'Enter the amount to credit:',
                    validate: (value) => {
                        if (isNaN(value) || value <= 0) {
                            return 'Please enter a valid positive number';
                        }
                        return true;
                    },
                });
                console.log(customer.bankAccount.Credit(creditAmountPrompt.creditAmount));
                break;
        }

        console.log('\n');
    }
}

// Start the application
startApp();
