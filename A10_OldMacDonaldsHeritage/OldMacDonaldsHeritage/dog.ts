namespace Aufgabe10_1 {
    export class dog extends animal{
        constructor(){
            super("dog", "dog food", 2, "wuff");
        }
        createSong(): void{
            super.createSong();
        }
        eating(): void{
            super.eating();
        }
        doSpecialAction(): void{
            console.log("The dog tries to catch the sheep");
        }
    }
}