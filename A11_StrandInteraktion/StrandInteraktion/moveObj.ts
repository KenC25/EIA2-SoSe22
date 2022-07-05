namespace Aufgabe11 {
    export abstract class moveObj {
        x: number;
        y: number;

        constructor(_x: number, _y: number){
            this.x = _x;
            this.y = _y;
        }

        public abstract drawObject(): void;
        
    }
}