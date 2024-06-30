export class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        switch (answer) {
            case 1:
                this.personality = "Introvert";
                break;
            case 2:
                this.personality = "Extrovert";
                break;
            case 3:
                this.personality = "Ambivert";
                break;
            default:
                this.personality = "Mystery";
                break;
        }
    }
    getPersonality() {
        return this.personality;
    }
}
