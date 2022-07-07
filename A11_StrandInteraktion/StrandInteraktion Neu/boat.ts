namespace Aufgabe11 {
    export class boat extends moveObj {
        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);
        }

        public drawObject(): void {

            // Boot zeichnen

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.translate(-200, 0);
            crc2.moveTo(75, 269.5);
            crc2.lineTo(105, 269.5);
            crc2.lineTo(105, 300);
            crc2.lineTo(75, 269.5);
            crc2.strokeStyle = "#7c6c48";
            crc2.stroke();
            crc2.fillStyle = "#7c6c48";
            crc2.fill();
            crc2.fillRect(105, 269.2, 50, 31);
            crc2.moveTo(155, 269.5);
            crc2.lineTo(185, 269.5);
            crc2.lineTo(155, 300);
            crc2.lineTo(155, 269.5);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            //Segel Rechts
            crc2.beginPath();
            crc2.moveTo(120, 270);
            crc2.fillRect(120, 270, 5, -55);
            crc2.moveTo(125, 220);
            crc2.lineTo(150, 250);
            crc2.lineTo(125, 250);
            crc2.lineTo(125, 220);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            //Segel Links
            crc2.beginPath();
            crc2.moveTo(120, 230);
            crc2.lineTo(120, 250);
            crc2.lineTo(100, 250);
            crc2.lineTo(120, 230);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
            crc2.restore();

        }

        public move(_timeslice: number): void{
            super.move(_timeslice);
        }
    }
}