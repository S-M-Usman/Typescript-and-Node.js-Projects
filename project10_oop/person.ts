export class Person {
    private personality :string;
    constructor(){
        this.personality = "Mystery"
    }
   public askQuestion (answer:number):void{
        switch (answer) {
            case 1:
                this.personality = "Introvert"
                break;
            case 2:
                this.personality = "Extrovert"
                break;
            case 3:
                this.personality = "Ambivert"
                break;
            default:
                this.personality ="Mystery"
                break;
        }
    }
    public getPersonality():string{
        return this.personality;
    }
}
