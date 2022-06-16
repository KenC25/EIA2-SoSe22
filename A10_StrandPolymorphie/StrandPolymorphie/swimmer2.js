var Aufgabe10_2;
(function (Aufgabe10_2) {
    class swimmer2 extends Aufgabe10_2.moveObj {
        constructor() {
            super(-300, 20);
        }
        drawObject() {
            // Schwimmer zeichnen
            //Kopf
            Aufgabe10_2.crc2.save();
            Aufgabe10_2.crc2.translate(this.x, this.y);
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(300 + Aufgabe10_2.animXGulls, 350);
            Aufgabe10_2.crc2.arc(300 + Aufgabe10_2.animXGulls, 350, 15, 0, Math.PI * 2, true);
            Aufgabe10_2.crc2.fillStyle = "#fcdfa2";
            Aufgabe10_2.crc2.strokeStyle = "#fcdfa2";
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.closePath();
            //Badekappe
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(285 + Aufgabe10_2.animXGulls, 343.5);
            Aufgabe10_2.crc2.fillStyle = "red";
            Aufgabe10_2.crc2.strokeStyle = "red";
            Aufgabe10_2.crc2.quadraticCurveTo(300 + Aufgabe10_2.animXGulls, 325, 315 + Aufgabe10_2.animXGulls, 343.5);
            Aufgabe10_2.crc2.moveTo(315 + Aufgabe10_2.animXGulls, 343.5);
            Aufgabe10_2.crc2.quadraticCurveTo(300 + Aufgabe10_2.animXGulls, 340, 285 + Aufgabe10_2.animXGulls, 343.5);
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.closePath();
            //Auge
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(312 + Aufgabe10_2.animXGulls, 350);
            Aufgabe10_2.crc2.arc(312 + Aufgabe10_2.animXGulls, 350, 3, 0, Math.PI * 2, true);
            Aufgabe10_2.crc2.fillStyle = "white";
            Aufgabe10_2.crc2.strokeStyle = "white";
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.closePath();
            //Pupille
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(312 + Aufgabe10_2.animXGulls, 350);
            Aufgabe10_2.crc2.arc(313.5 + Aufgabe10_2.animXGulls, 350, 1, 0, Math.PI * 2, true);
            Aufgabe10_2.crc2.fillStyle = "lightblue";
            Aufgabe10_2.crc2.strokeStyle = "lightblue";
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.closePath();
            //Arm
            //Rechter Arm
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(300 + Aufgabe10_2.animXGulls, 365);
            Aufgabe10_2.crc2.quadraticCurveTo(285 + Aufgabe10_2.animXGulls, 350, 260 + Aufgabe10_2.animXGulls, 360);
            Aufgabe10_2.crc2.moveTo(260 + Aufgabe10_2.animXGulls, 360);
            Aufgabe10_2.crc2.quadraticCurveTo(285 + Aufgabe10_2.animXGulls, 360, 300 + Aufgabe10_2.animXGulls, 365);
            Aufgabe10_2.crc2.fillStyle = "#fcdfa2";
            Aufgabe10_2.crc2.strokeStyle = "#fcdfa2";
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.closePath();
            Aufgabe10_2.crc2.restore();
        }
    }
    Aufgabe10_2.swimmer2 = swimmer2;
})(Aufgabe10_2 || (Aufgabe10_2 = {}));
//# sourceMappingURL=swimmer2.js.map