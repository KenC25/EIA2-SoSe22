namespace Aufgabe10_1 {
    export class sheep extends animal{
        constructor(){
            super("sheep", "grass", 3, "määh");
        }
        createSong(): void{
            super.createSong();
        }
        eating(): void{
            super.eating();
        }
        doSpecialAction(): void{
            console.log("The sheep runs away from the dog");
        }
    }
}