var Aufgabe11;
(function (Aufgabe11) {
    class gull2 extends Aufgabe11.moveObj {
        constructor() {
            super(-50, -100);
        }
        drawObject() {
            //Möwe zeichnen
            Aufgabe11.crc2.save();
            Aufgabe11.crc2.translate(this.x, this.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(250 + Aufgabe11.animXGulls, 75 + Aufgabe11.animYGulls);
            75;
            Aufgabe11.crc2.quadraticCurveTo(275 + Aufgabe11.animXGulls, 40 + Aufgabe11.animYGulls, 300 + Aufgabe11.animXGulls, 75 + Aufgabe11.animYGulls);
            Aufgabe11.crc2.moveTo(300 + Aufgabe11.animXGulls, 75 + Aufgabe11.animYGulls);
            Aufgabe11.crc2.quadraticCurveTo(325 + Aufgabe11.animXGulls, 40 + Aufgabe11.animYGulls, 350 + Aufgabe11.animXGulls, 75 + Aufgabe11.animYGulls);
            Aufgabe11.crc2.moveTo(350 + Aufgabe11.animXGulls, 75 + Aufgabe11.animYGulls);
            Aufgabe11.crc2.quadraticCurveTo(325 + Aufgabe11.animXGulls, 50 + Aufgabe11.animYGulls, 300 + Aufgabe11.animXGulls, 75 + Aufgabe11.animYGulls);
            Aufgabe11.crc2.moveTo(300 + Aufgabe11.animXGulls, 75 + Aufgabe11.animYGulls);
            Aufgabe11.crc2.quadraticCurveTo(275 + Aufgabe11.animXGulls, 50 + Aufgabe11.animYGulls, 250 + Aufgabe11.animXGulls, 75 + Aufgabe11.animYGulls);
            Aufgabe11.crc2.fillStyle = "grey";
            Aufgabe11.crc2.strokeStyle = "grey";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.restore();
        }
    }
    Aufgabe11.gull2 = gull2;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=gull2.js.map