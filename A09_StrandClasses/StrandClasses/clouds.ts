namespace Aufgabe9_2 {
    export class clouds {
        x1: number;
        x2: number;
        x3: number;
        x4: number;
        y1: number;
        y2: number;
        y3: number;
        rad1: number;
        rad2: number;
        rad3: number;
        w: number;
        h: number;

        constructor (_x1:number, _x2:number, _x3:number, _x4:number, _y1:number, _y2:number, _y3:number, _rad1: number, _rad2: number, _rad3: number, _w: number, _h: number){
            this.x1 = _x1;
            this.x2 = _x2;
            this.x3 = _x3;
            this.x4 = _x4;
            this.y1 = _y1;
            this.y2 = _y2;
            this.y3 = _y3;
            this.rad1 = _rad1;
            this.rad2 = _rad2;
            this.rad3 = _rad3;
            this.w = _w;
            this.h = _h;
        }

        drawClouds() : void {

            crc2.beginPath();
            crc2.strokeStyle = "white";
            crc2.moveTo(this.x1, this.y1);
            crc2.arc(this.x1, this.y1, this.rad1, 0, Math.PI * 2, true);
            crc2.moveTo(this.x2, this.y2);
            crc2.arc(this.x2, this.y2, this.rad1, 0, Math.PI * 2, true);
            crc2.moveTo(this.x3, this.y2);
            crc2.arc(this.x3, this.y2, this.rad2, 0, Math.PI * 2, true);
            crc2.moveTo(this.x4, this.y1);
            crc2.arc(this.x4, this.y1, this.rad3, 0, Math.PI * 2, true);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.fillRect(this.x1, this.y3, this.w, this.h);
            crc2.fillStyle = "white";
        }
    }
}