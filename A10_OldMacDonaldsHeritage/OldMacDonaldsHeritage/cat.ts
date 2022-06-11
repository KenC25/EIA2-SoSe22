namespace Aufgabe10_1 {
    export class cat extends animal{
        constructor(){
            super("cat", "cat food", 2, "miau");
        }
        createSong(): void{
            super.createSong();
        }
        eating(): void{
            super.eating();
        }
        doSpecialAction(): void {
            console.log("The cat runs in circles");
        }
    }
}