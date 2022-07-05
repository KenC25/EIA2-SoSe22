namespace Aufgabe11 {
    export class umbrella1 extends moveObj {
        constructor() {
            super(0, 70);
        }

        public drawObject(): void {
        
        // Sonnenschirm zeichnen

            //Stand
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.beginPath();
            crc2.moveTo(745, 400);
            crc2.fillStyle = "white";
            crc2.fillRect(745, 400, 5, 150);
            crc2.closePath();

            //Teil 1
            crc2.beginPath();
            crc2.moveTo(660, 400);
            crc2.lineTo(750, 350);
            crc2.lineTo(690, 400);
            crc2.lineTo(660, 400);
            crc2.strokeStyle = "red";
            crc2.fillStyle = "red";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            //Teil 2
            crc2.beginPath();
            crc2.moveTo(690, 400);
            crc2.lineTo(750, 350);
            crc2.lineTo(730, 400);
            crc2.lineTo(690, 400);
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            //Teil 3
            crc2.beginPath();
            crc2.moveTo(730, 400);
            crc2.lineTo(750, 350);
            crc2.lineTo(770, 400);
            crc2.lineTo(730, 400);
            crc2.strokeStyle = "red";
            crc2.fillStyle = "red";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            //Teil 4
            crc2.beginPath();
            crc2.moveTo(770, 400);
            crc2.lineTo(750, 350);
            crc2.lineTo(800, 400);
            crc2.lineTo(770, 400);
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            //Teil 5
            crc2.beginPath();
            crc2.moveTo(800, 400);
            crc2.lineTo(750, 350);
            crc2.lineTo(830, 400);
            crc2.lineTo(800, 400);
            crc2.strokeStyle = "red";
            crc2.fillStyle = "red";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            
        }
    }
}