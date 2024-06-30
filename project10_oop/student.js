import { Person } from "./person.js";
export class Student extends Person {
    _name;
    constructor() {
        super(); // Call the constructor of the base class (Person)
        this._name = "";
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
