var Aufgabe11;
(function (Aufgabe11) {
    class swimmer2 extends Aufgabe11.moveObj {
        constructor() {
            super(-300, 20);
        }
        drawObject() {
            // Schwimmer zeichnen
            //Kopf
            Aufgabe11.crc2.save();
            Aufgabe11.crc2.translate(this.x, this.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(300 + Aufgabe11.animXGulls, 350);
            Aufgabe11.crc2.arc(300 + Aufgabe11.animXGulls, 350, 15, 0, Math.PI * 2, true);
            Aufgabe11.crc2.fillStyle = "#fcdfa2";
            Aufgabe11.crc2.strokeStyle = "#fcdfa2";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            //Badekappe
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(285 + Aufgabe11.animXGulls, 343.5);
            Aufgabe11.crc2.fillStyle = "red";
            Aufgabe11.crc2.strokeStyle = "red";
            Aufgabe11.crc2.quadraticCurveTo(300 + Aufgabe11.animXGulls, 325, 315 + Aufgabe11.animXGulls, 343.5);
            Aufgabe11.crc2.moveTo(315 + Aufgabe11.animXGulls, 343.5);
            Aufgabe11.crc2.quadraticCurveTo(300 + Aufgabe11.animXGulls, 340, 285 + Aufgabe11.animXGulls, 343.5);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
            //Auge
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(312 + Aufgabe11.animXGulls, 350);
            Aufgabe11.crc2.arc(312 + Aufgabe11.animXGulls, 350, 3, 0, Math.PI * 2, true);
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
            //Pupille
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(312 + Aufgabe11.animXGulls, 350);
            Aufgabe11.crc2.arc(313.5 + Aufgabe11.animXGulls, 350, 1, 0, Math.PI * 2, true);
            Aufgabe11.crc2.fillStyle = "lightblue";
            Aufgabe11.crc2.strokeStyle = "lightblue";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
            //Arm
            //Rechter Arm
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(300 + Aufgabe11.animXGulls, 365);
            Aufgabe11.crc2.quadraticCurveTo(285 + Aufgabe11.animXGulls, 350, 260 + Aufgabe11.animXGulls, 360);
            Aufgabe11.crc2.moveTo(260 + Aufgabe11.animXGulls, 360);
            Aufgabe11.crc2.quadraticCurveTo(285 + Aufgabe11.animXGulls, 360, 300 + Aufgabe11.animXGulls, 365);
            Aufgabe11.crc2.fillStyle = "#fcdfa2";
            Aufgabe11.crc2.strokeStyle = "#fcdfa2";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.restore();
        }
    }
    Aufgabe11.swimmer2 = swimmer2;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=swimmer2.js.map