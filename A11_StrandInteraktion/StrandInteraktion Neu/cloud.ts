namespace Aufgabe11 {
    export class cloud extends moveObj {

        constructor(_position: Vector, _velocity: Vector){
            super(_position, _velocity, 0);
        }

        public drawObject(): void {

            // Wolke zeichnen

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.translate(-1000, 0);
            crc2.strokeStyle = "white";
            crc2.moveTo(500, 95);
            crc2.arc(500, 95, 30, 0, Math.PI * 2, true);
            crc2.moveTo(530, 75);
            crc2.arc(530, 75, 30, 0, Math.PI * 2, true);
            crc2.moveTo(560, 75);
            crc2.arc(560, 75, 25, 0, Math.PI * 2, true);
            crc2.moveTo(593, 95);
            crc2.arc(593, 95, 30.2, 0, Math.PI * 2, true);
            crc2.fillStyle = "white"; 30
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.fillRect(500, 75.5, 100, 50);
            crc2.fillStyle = "white";
            crc2.restore();

        }

        public move(_timeslice: number): void{
            super.move(_timeslice);
        }
    }
}