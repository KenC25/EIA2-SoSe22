var Aufgabe10_2;
(function (Aufgabe10_2) {
    class gull1 extends Aufgabe10_2.moveObj {
        constructor() {
            super(-200, -150);
        }
        drawObject() {
            //Möwe zeichnen
            Aufgabe10_2.crc2.save();
            Aufgabe10_2.crc2.translate(this.x, this.y);
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(250 + Aufgabe10_2.animXGulls, 75 + Aufgabe10_2.animYGulls);
            75;
            Aufgabe10_2.crc2.quadraticCurveTo(275 + Aufgabe10_2.animXGulls, 40 + Aufgabe10_2.animYGulls, 300 + Aufgabe10_2.animXGulls, 75 + Aufgabe10_2.animYGulls);
            Aufgabe10_2.crc2.moveTo(300 + Aufgabe10_2.animXGulls, 75 + Aufgabe10_2.animYGulls);
            Aufgabe10_2.crc2.quadraticCurveTo(325 + Aufgabe10_2.animXGulls, 40 + Aufgabe10_2.animYGulls, 350 + Aufgabe10_2.animXGulls, 75 + Aufgabe10_2.animYGulls);
            Aufgabe10_2.crc2.moveTo(350 + Aufgabe10_2.animXGulls, 75 + Aufgabe10_2.animYGulls);
            Aufgabe10_2.crc2.quadraticCurveTo(325 + Aufgabe10_2.animXGulls, 50 + Aufgabe10_2.animYGulls, 300 + Aufgabe10_2.animXGulls, 75 + Aufgabe10_2.animYGulls);
            Aufgabe10_2.crc2.moveTo(300 + Aufgabe10_2.animXGulls, 75 + Aufgabe10_2.animYGulls);
            Aufgabe10_2.crc2.quadraticCurveTo(275 + Aufgabe10_2.animXGulls, 50 + Aufgabe10_2.animYGulls, 250 + Aufgabe10_2.animXGulls, 75 + Aufgabe10_2.animYGulls);
            Aufgabe10_2.crc2.fillStyle = "grey";
            Aufgabe10_2.crc2.strokeStyle = "grey";
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.closePath();
            Aufgabe10_2.crc2.restore();
        }
    }
    Aufgabe10_2.gull1 = gull1;
})(Aufgabe10_2 || (Aufgabe10_2 = {}));
//# sourceMappingURL=gull1.js.map