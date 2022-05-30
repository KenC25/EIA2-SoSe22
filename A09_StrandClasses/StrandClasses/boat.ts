namespace Aufgabe9_2 {
    export class boat {
        x1: number;
        x2: number;
        x3: number;
        x4: number;
        x5: number;
        x6: number;
        x7: number;
        x8: number;
        y1: number;
        y2: number;
        y3: number;
        y4: number;
        y5: number;
        y6: number;
        w1: number;
        w2: number;
        h1: number;
        h2: number;
    
        constructor (_x1:number, _x2:number, _x3:number, _x4:number, _x5: number, _x6: number, _x7: number, _x8: number, _y1:number, _y2:number, _y3:number,  _y4:number, _y5:number, _y6:number, _w1: number, _w2: number, _h1: number, _h2: number){
            this.x1 = _x1;
            this.x2 = _x2;
            this.x3 = _x3;
            this.x4 = _x4;
            this.x5 = _x5;
            this.x6 = _x6;
            this.x7 = _x7;
            this.x8 = _x8;
            this.y1 = _y1;
            this.y2 = _y2;
            this.y3 = _y3;
            this.y4 = _y4;
            this.y5 = _y5;
            this.y6 = _y6;
            this.w1 = _w1;
            this.w2 = _w2;
            this.h1 = _h1;
            this.h2 = _h2;
        }

        drawBoat(): void {

            //Boot
            crc2.beginPath();
            crc2.moveTo(this.x1, this.y1);
            crc2.lineTo(this.x2, this.y1);
            crc2.lineTo(this.x2, this.y2);
            crc2.lineTo(this.x1, this.y1);
            crc2.strokeStyle = "#7c6c48";
            crc2.stroke();
            crc2.fillStyle = "#7c6c48";
            crc2.fill();
            crc2.fillRect(this.x2, this.y1, this.w1, this.h1);
            crc2.moveTo(this.x3, this.y1);
            crc2.lineTo(this.x4, this.y1);
            crc2.lineTo(this.x3, this.y2);
            crc2.lineTo(this.x3, this.y1);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            
            //Segel Rechts
            crc2.beginPath();
            crc2.moveTo(this.x5, this.y3);
            crc2.fillRect(this.x5, this.y3, this.w2, this.h2);
            crc2.moveTo(this.x6, this.y4);
            crc2.lineTo(this.x7, this.y5);
            crc2.lineTo(this.x6, this.y5);
            crc2.lineTo(this.x6, this.y4);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            //Segel Links
            crc2.beginPath();
            crc2.moveTo(this.x5, this.y6);
            crc2.lineTo(this.x5, this.y5);
            crc2.lineTo(this.x8, this.y5);
            crc2.lineTo(this.x5, this.y6);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
        }
    }

}