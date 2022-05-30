namespace Aufgabe9_2 {
    export class gulls {
        x1: number;
        x2: number;
        x3: number;
        x4: number;
        x5: number;
        y1: number;
        y2: number;
        y3: number;

        constructor (_x1:number, _x2:number, _x3:number, _x4:number, _x5:number, _y1:number, _y2:number, _y3:number) {
            this.x1 = _x1;
            this.x2 = _x2;
            this.x3 = _x3;
            this.x4 = _x4;
            this.x5 = _x5;
            this.y1 = _y1;
            this.y2 = _y2;
            this.y3 = _y3;
        }

        drawGull(): void {
            
                //Möwe zeichnen

                crc2.beginPath();
                crc2.moveTo(this.x1, this.y1);
                crc2.quadraticCurveTo(this.x2, this.y2, this.x3, this.y1);
                crc2.moveTo(this.x3, this.y1);
                crc2.quadraticCurveTo(this.x4, this.y2, this.x5, this.y1);
                crc2.moveTo(this.x5, this.y1);
                crc2.quadraticCurveTo(this.x4, this.y3, this.x3, this.y1);
                crc2.moveTo(this.x3, this.y1);
                crc2.quadraticCurveTo(this.x2, this.y3, this.x1, this.y1);
                crc2.fillStyle = "black";
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();

        }
    }
}