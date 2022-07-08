var Aufgabe11;
(function (Aufgabe11) {
    class gull extends Aufgabe11.moveObj {
        constructor(_position, _velocity) {
            super(_position, _velocity, 0);
        }
        drawObject() {
            //Möwe zeichnen
            Aufgabe11.crc2.save();
            Aufgabe11.crc2.translate(this.position.x, this.position.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.translate(-100, -300);
            Aufgabe11.crc2.moveTo(250, 75);
            Aufgabe11.crc2.quadraticCurveTo(275, 40, 300, 75);
            Aufgabe11.crc2.moveTo(300, 75);
            Aufgabe11.crc2.quadraticCurveTo(325, 40, 350, 75);
            Aufgabe11.crc2.moveTo(350, 75);
            Aufgabe11.crc2.quadraticCurveTo(325, 50, 300, 75);
            Aufgabe11.crc2.moveTo(300, 75);
            Aufgabe11.crc2.quadraticCurveTo(275, 50, 250, 75);
            Aufgabe11.crc2.fillStyle = "grey";
            Aufgabe11.crc2.strokeStyle = "grey";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    Aufgabe11.gull = gull;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=gull.js.map