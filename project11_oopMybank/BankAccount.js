export class BankAccount {
    _accountBalance;
    constructor() {
        this._accountBalance = 100; // Initial balance set to 100
    }
    get AccountBalance() {
        return this._accountBalance;
    }
    set AccountBalance(balance) {
        this._accountBalance = balance;
    }
    Debit(amount) {
        let statement = "SORRY, YOU HAVE INSUFFICIENT BALANCE";
        if (amount > 0) {
            if (this._accountBalance >= amount) {
                this._accountBalance -= amount;
                statement = `TRANSACTION SUCCESSFUL!\nYour account balance is now: ${this._accountBalance}`;
            }
            else {
                statement = "INSUFFICIENT BALANCE\nYou don't have enough money to complete this transaction";
            }
        }
        else {
            statement = "THE AMOUNT YOU ENTERED IS INVALID";
        }
        return statement;
    }
    Credit(amount) {
        let statement = "TRANSACTION FAILED";
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
