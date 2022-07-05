namespace Aufgabe11 {
    export class cloud2 extends moveObj {
        constructor(){
            super(300, 25);
        }
        
        public drawObject(): void {
        
        // Wolke zeichnen
        
            crc2.save();
            crc2.translate(this.x + animX, this.y);
            crc2.beginPath();
            crc2.strokeStyle = "white";
            crc2.moveTo(500, 95);
            crc2.arc(500, 95, 30, 0, Math.PI * 2, true);
            crc2.moveTo(530, 75);
            crc2.arc(530, 75, 30, 0, Math.PI * 2, true);
            crc2.moveTo(560, 75);
            crc2.arc(560, 75, 25, 0, Math.PI * 2, true);
            crc2.moveTo(593, 95);
            crc2.arc(593, 95, 30.2, 0, Math.PI * 2, true);
            crc2.fillStyle = "white";30
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.fillRect(500, 75.5, 100, 50);
            crc2.fillStyle = "white";
            crc2.restore();

        }
    }
}