namespace Aufgabe11 {
    export class sun extends moveObj {

        constructor(_position: Vector){
            super(_position, new Vector(0,0));
        }

        public drawObject(): void {

        // Sonne zeichnen

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            crc2.strokeStyle = "yellow";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }

    }
}