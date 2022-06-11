namespace Aufgabe10_1 {
    export class cow extends animal{
        constructor(){
            super("cow", "grass", 5, "muuuuh");
        }
        createSong(): void{
            super.createSong();
        }
        eating(): void{
            super.eating();
        }
        doSpecialAction(): void{
            console.log("The cow is lying around");
        }
    }
}