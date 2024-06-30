export class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    bankAccount;
    constructor(firstName, lastName, gender, age, mobileNumber, bankAccount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }
    customerInfo() {
        return `Name: ${this.firstName} ${this.lastName},
        Age: ${this.age},
        Gender: ${this.gender},
        Mobile Number: ${this.mobileNumber},
        Bank Account: ${this.bankAccount.AccountBalance}`;
    }
}
