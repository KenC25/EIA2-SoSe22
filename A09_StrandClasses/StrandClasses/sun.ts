namespace Aufgabe9_2 {
    export class sun {
        x: number;
        y: number;
        rad: number;

        constructor(_x: number, _y: number, _rad: number){
            this.x = _x;
            this.y = _y;
            this.rad = _rad;
        }

        drawSun(){

            // Sonne zeichnen

            crc2.save();
            crc2.translate(75, 75);
            crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.arc(this.x, this.y, this.rad, 0, 2* Math.PI);
            crc2.strokeStyle = "yellow";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
}