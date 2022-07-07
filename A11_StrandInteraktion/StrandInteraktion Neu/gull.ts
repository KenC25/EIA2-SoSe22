namespace Aufgabe11 {
    export class gull extends moveObj {

        constructor(_position: Vector, _velocity: Vector){
            super(_position, _velocity);
        }

        public drawObject(): void {
        
        //Möwe zeichnen
            
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.translate(-100, -300);
            crc2.moveTo(250, 75)
            crc2.quadraticCurveTo(275, 40, 300, 75);
            crc2.moveTo(300, 75);
            crc2.quadraticCurveTo(325, 40, 350, 75);
            crc2.moveTo(350, 75);
            crc2.quadraticCurveTo(325, 50, 300, 75);
            crc2.moveTo(300, 75);
            crc2.quadraticCurveTo(275, 50, 250, 75);
            crc2.fillStyle = "grey";
            crc2.strokeStyle = "grey";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.restore();

        }

        public move(_timeslice: number): void{
            super.move(_timeslice);
        }
    }
}