import { bankAccount } from './interfaceBankAccount.js';

export class BankAccount implements bankAccount {
    private _accountBalance: number;

    constructor() {
        this._accountBalance = 100; // Initial balance set to 100
    }

    public get AccountBalance(): number {
        return this._accountBalance;
    }

    public set AccountBalance(balance: number) {
        this._accountBalance = balance;
    }

    public Debit(amount: number): string {
        let statement: string = "SORRY, YOU HAVE INSUFFICIENT BALANCE";

        if (amount > 0) {
            if (this._accountBalance >= amount) {
                this._accountBalance -= amount;
                statement = `TRANSACTION SUCCESSFUL!\nYour account balance is now: ${this._accountBalance}`;
            } else {
                statement = "INSUFFICIENT BALANCE\nYou don't have enough money to complete this transaction";
            }
        } else {
            statement = "THE AMOUNT YOU ENTERED IS INVALID";
        }

        return statement;
    }

    public Credit(amount: number): string {
        let statement: string = "TRANSACTION FAILED";

        if (amount > 0) {
            this._accountBalance += amount;
            statement = "YOUR AMOUNT HAS BEEN CREDITED SUCCESSFULLY!";
            
            if (amount > 100) {
                this._accountBalance -= 1;
            }
        }

        return statement;
    }
}
