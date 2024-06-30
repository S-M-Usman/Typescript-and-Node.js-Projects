#!ussr/bin/env node
import { BankAccount } from "./BankAccount.js";
export class Customer {
    public firstName: string;
    public lastName: string;
    public gender: string;
    public age: number;
    public mobileNumber: string;
    public bankAccount: BankAccount;

    constructor(firstName: string, lastName: string, gender: string, age: number, mobileNumber: string, bankAccount: BankAccount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }

    public customerInfo(): string {
        return `Name: ${this.firstName} ${this.lastName},
        Age: ${this.age},
        Gender: ${this.gender},
        Mobile Number: ${this.mobileNumber},
        Bank Account: ${this.bankAccount.AccountBalance}`;
    }
}
