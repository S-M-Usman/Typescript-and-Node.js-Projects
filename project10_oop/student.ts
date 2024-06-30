import { Person } from "./person.js";
export class Student extends Person {
    private _name: string;

    constructor() {
        super(); // Call the constructor of the base class (Person)
        this._name = "";
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }
}