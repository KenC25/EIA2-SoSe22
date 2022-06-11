namespace Aufgabe10_1 {
    export class chicken extends animal{
        constructor(){
            super("chicken", "wheat", 2, "kikiriki");
        }
        createSong(): void{
            super.createSong();
        }
        eating(): void{
            super.eating();
        }
        doSpecialAction(): void{
            console.log("The chicken lays an egg");
        }
    }
}