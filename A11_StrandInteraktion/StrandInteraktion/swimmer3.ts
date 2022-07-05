namespace Aufgabe11 {
    export class swimmer3 extends moveObj {
        constructor(){
            super(-700, 0);
        }

        public drawObject(): void {
        
        // Schwimmer zeichnen

            //Kopf
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.beginPath();
            crc2.moveTo(300 + animXGulls, 350);
            crc2.arc(300 + animXGulls, 350, 15, 0, Math.PI * 2, true);
            crc2.fillStyle = "#fcdfa2";
            crc2.strokeStyle = "#fcdfa2";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            //Badekappe
            crc2.beginPath();
            crc2.moveTo(285 + animXGulls, 343.5);
            crc2.fillStyle = "green";
            crc2.strokeStyle = "green";
            crc2.quadraticCurveTo(300 + animXGulls, 325, 315 + animXGulls, 343.5);
            crc2.moveTo(315 + animXGulls, 343.5);
            crc2.quadraticCurveTo(300 + animXGulls, 340, 285 + animXGulls, 343.5);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //Auge
            crc2.beginPath();
            crc2.moveTo(312 + animXGulls, 350);
            crc2.arc(312 + animXGulls, 350, 3, 0, Math.PI * 2, true);
            crc2.fillStyle = "white";
            crc2.strokeStyle = "white";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

                //Pupille
                crc2.beginPath();
                crc2.moveTo(312 + animXGulls, 350);
                crc2.arc(313.5 + animXGulls, 350, 1, 0, Math.PI * 2, true);
                crc2.fillStyle = "lightblue";
                crc2.strokeStyle = "lightblue";
                crc2.fill();
                crc2.stroke();
                crc2.closePath();

            //Arm

            //Rechter Arm
            crc2.beginPath();
            crc2.moveTo(300 + animXGulls, 365);
            crc2.quadraticCurveTo(285 + animXGulls, 350, 260 + animXGulls, 360);
            crc2.moveTo(260 + animXGulls, 360);
            crc2.quadraticCurveTo(285 + animXGulls, 360, 300 + animXGulls, 365);
            crc2.fillStyle = "#fcdfa2";
            crc2.strokeStyle = "#fcdfa2";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
            
        }
    }
}