namespace Aufgabe11 {
    export class gull1 extends moveObj {
        constructor (){
            super(-200, -150);
        }

        public drawObject(): void {

        //Möwe zeichnen

            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.beginPath();
            crc2.moveTo(250 + animXGulls, 75 + animYGulls);75
            crc2.quadraticCurveTo(275 + animXGulls, 40 + animYGulls, 300 + animXGulls, 75 + animYGulls);
            crc2.moveTo(300 + animXGulls, 75 + animYGulls);
            crc2.quadraticCurveTo(325 + animXGulls, 40 + animYGulls, 350 + animXGulls, 75 + animYGulls);
            crc2.moveTo(350 + animXGulls, 75 + animYGulls);
            crc2.quadraticCurveTo(325 + animXGulls, 50 + animYGulls, 300 + animXGulls, 75 + animYGulls);
            crc2.moveTo(300 + animXGulls, 75 + animYGulls);
            crc2.quadraticCurveTo(275 + animXGulls, 50 + animYGulls, 250 + animXGulls, 75 + animYGulls);
            crc2.fillStyle = "grey";
            crc2.strokeStyle = "grey";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.restore();

        }
    }
}