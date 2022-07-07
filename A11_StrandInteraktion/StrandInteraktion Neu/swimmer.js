var Aufgabe11;
(function (Aufgabe11) {
    class swimmer extends Aufgabe11.moveObj {
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        drawObject() {
            // Schwimmer zeichnen
            //Kopf
            Aufgabe11.crc2.save();
            Aufgabe11.crc2.translate(this.position.x, this.position.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.translate(-300, 0);
            Aufgabe11.crc2.moveTo(300, 350);
            Aufgabe11.crc2.arc(300, 350, 15, 0, Math.PI * 2, true);
            Aufgabe11.crc2.fillStyle = "#fcdfa2";
            Aufgabe11.crc2.strokeStyle = "#fcdfa2";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            //Badekappe
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(285, 343.5);
            Aufgabe11.crc2.fillStyle = "blue";
            Aufgabe11.crc2.strokeStyle = "blue";
            Aufgabe11.crc2.quadraticCurveTo(300, 325, 315, 343.5);
            Aufgabe11.crc2.moveTo(315, 343.5);
            Aufgabe11.crc2.quadraticCurveTo(300, 340, 285, 343.5);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
            //Auge
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(312, 350);
            Aufgabe11.crc2.arc(312, 350, 3, 0, Math.PI * 2, true);
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
            //Pupille
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(312, 350);
            Aufgabe11.crc2.arc(313.5, 350, 1, 0, Math.PI * 2, true);
            Aufgabe11.crc2.fillStyle = "lightblue";
            Aufgabe11.crc2.strokeStyle = "lightblue";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
            //Arm
            //Rechter Arm
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(300, 365);
            Aufgabe11.crc2.quadraticCurveTo(285, 350, 260, 360);
            Aufgabe11.crc2.moveTo(260, 360);
            Aufgabe11.crc2.quadraticCurveTo(285, 360, 300, 365);
            Aufgabe11.crc2.fillStyle = "#fcdfa2";
            Aufgabe11.crc2.strokeStyle = "#fcdfa2";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    Aufgabe11.swimmer = swimmer;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=swimmer.js.map