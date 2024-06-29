#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const courses = {
    'Blockchain': 200,
    'Artificial Intelligence': 250,
    'Cyber Security': 140,
    'Internet Of Things': 590,
    'Computational Genomics': 300
};
class Student {
    stdName;
    stdEmail;
    stdAge;
    stId;
    courses;
    balance;
    constructor(stdName, stdEmail, stdAge, stId) {
        this.stdName = stdName;
        this.stdEmail = stdEmail;
        this.stdAge = stdAge;
        this.stId = stId;
        this.courses = [];
        this.balance = 0;
    }
    enroll(courseName) {
        if (courses[courseName] && !this.courses.includes(courseName)) {
            this.courses.push(courseName);
            this.balance += courses[courseName];
            console.log(chalk.green(`Enrolled in ${courseName} for $${courses[courseName]}.`));
        }
        else {
            console.log(chalk.yellow(`${courseName} is either invalid or already enrolled.`));
        }
    }
    viewBalance() {
        console.log(chalk.blue(`The balance for student ${this.stdName} (ID: ${this.stId}) is $${this.balance}.`));
    }
    payTuition(amount) {
        if (amount > this.balance) {
            console.log(chalk.yellow(`Amount exceeds balance. Paying the full balance of $${this.balance}.`));
            this.balance = 0;
        }
        else {
            this.balance -= amount;
            console.log(chalk.green(`Paid $${amount}. Remaining balance is $${this.balance}.`));
        }
    }
    showStatus() {
        console.log(chalk.magenta(`Student Name: ${this.stdName}`));
        console.log(chalk.magenta(`Student ID: ${this.stId}`));
        console.log(chalk.magenta(`Enrolled Courses: ${this.courses.join(", ")}`));
        console.log(chalk.magenta(`Balance: $${this.balance}`));
    }
}
// StudentManager class manages student operations
class StudentManager {
    studentList = [];
    addStudent(student) {
        this.studentList.push(student);
    }
    deleteStudent(stId) {
        this.studentList = this.studentList.filter(student => student.stId !== stId);
    }
    generateStudentId() {
        let newId;
        do {
            newId = Math.floor(10000 + Math.random() * 90000);
        } while (this.studentList.some(student => student.stId === newId));
        return newId;
    }
    getStudentById(stId) {
        return this.studentList.find(student => student.stId === stId);
    }
}
// Create an instance of StudentManager
const manager = new StudentManager();
async function mainMenu() {
    console.log(chalk.green('WELCOME TO THE STUDENT APPLICATION'));
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "Choose an action",
            choices: [
                "Add Student",
                "Enroll in Courses",
                "View Balance",
                "Pay Tuition",
                "Show Student Status",
                "Exit"
            ]
        }
    ]);
    switch (answers.action) {
        case "Add Student":
            await addStudent();
            break;
        case "Enroll in Courses":
            await enrollStudent();
            break;
        case "View Balance":
            await viewBalance();
            break;
        case "Pay Tuition":
            await payTuition();
            break;
        case "Show Student Status":
            await showStatus();
            break;
        case "Exit":
            console.log(chalk.green("Goodbye!"));
            return;
    }
    await mainMenu();
}
async function addStudent() {
    const newStudentData = await inquirer.prompt([
        { type: "input", name: "stdName", message: "Enter student's name:" },
        { type: "input", name: "stdEmail", message: "Enter student's email:" },
        { type: "number", name: "stdAge", message: "Enter student's age:" }
    ]);
    const newStudent = new Student(newStudentData.stdName, newStudentData.stdEmail, newStudentData.stdAge, manager.generateStudentId());
    manager.addStudent(newStudent);
    console.log(chalk.green(`Student ${newStudent.stdName} added with ID ${newStudent.stId}.`));
}
async function enrollStudent() {
    const { stId } = await inquirer.prompt([
        { type: "number", name: "stId", message: "Enter student's ID:" }
    ]);
    const student = manager.getStudentById(stId);
    if (!student) {
        console.log(chalk.red(`Student with ID ${stId} not found.`));
        return;
    }
    const availableCourses = Object.keys(courses);
    const { selectedCourses } = await inquirer.prompt([
        {
            type: "checkbox",
            name: "selectedCourses",
            message: "Select courses to enroll in:",
            choices: availableCourses
        }
    ]);
    selectedCourses.forEach((courseName) => student.enroll(courseName));
}
async function viewBalance() {
    const { stId } = await inquirer.prompt([
        { type: "number", name: "stId", message: "Enter student's ID:" }
    ]);
    const student = manager.getStudentById(stId);
    if (!student) {
        console.log(chalk.red(`Student with ID ${stId} not found.`));
        return;
    }
    student.viewBalance();
}
async function payTuition() {
    const { stId } = await inquirer.prompt([
        { type: "number", name: "stId", message: "Enter student's ID:" }
    ]);
    const student = manager.getStudentById(stId);
    if (!student) {
        console.log(chalk.red(`Student with ID ${stId} not found.`));
        return;
    }
    const { amount } = await inquirer.prompt([
        { type: "number", name: "amount", message: "Enter amount to pay:" }
    ]);
    student.payTuition(amount);
}
async function showStatus() {
    const { stId } = await inquirer.prompt([
        { type: "number", name: "stId", message: "Enter yuur studentID:" }
    ]);
    const student = manager.getStudentById(stId);
    if (!student) {
        console.log(chalk.red(`Student with ID ${stId} not found.\n Please enter a valid Id`));
        return;
    }
    student.showStatus();
}
mainMenu();
