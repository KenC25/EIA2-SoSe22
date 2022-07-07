namespace Aufgabe11 {
    export class swimmer extends moveObj {

        constructor(_position: Vector, _velocity: Vector){
            super(_position, _velocity);
        }

        public drawObject(): void {

        // Schwimmer zeichnen

            //Kopf
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.translate(-300,0);
            crc2.moveTo(300, 350);
            crc2.arc(300, 350, 15, 0, Math.PI * 2, true);
            crc2.fillStyle = "#fcdfa2";
            crc2.strokeStyle = "#fcdfa2";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            //Badekappe
            crc2.beginPath();
            crc2.moveTo(285, 343.5);
            crc2.fillStyle = "blue";
            crc2.strokeStyle = "blue";
            crc2.quadraticCurveTo(300, 325, 315, 343.5);
            crc2.moveTo(315, 343.5);
            crc2.quadraticCurveTo(300, 340, 285, 343.5);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //Auge
            crc2.beginPath();
            crc2.moveTo(312, 350);
            crc2.arc(312, 350, 3, 0, Math.PI * 2, true);
            crc2.fillStyle = "white";
            crc2.strokeStyle = "white";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

                //Pupille
                crc2.beginPath();
                crc2.moveTo(312, 350);
                crc2.arc(313.5, 350, 1, 0, Math.PI * 2, true);
                crc2.fillStyle = "lightblue";
                crc2.strokeStyle = "lightblue";
                crc2.fill();
                crc2.stroke();
                crc2.closePath();

            //Arm

            //Rechter Arm
            crc2.beginPath();
            crc2.moveTo(300, 365);
            crc2.quadraticCurveTo(285, 350, 260, 360);
            crc2.moveTo(260, 360);
            crc2.quadraticCurveTo(285, 360, 300, 365);
            crc2.fillStyle = "#fcdfa2";
            crc2.strokeStyle = "#fcdfa2";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
            
        }

        public move(_timeslice: number): void{
            super.move(_timeslice);
        }
    }
}