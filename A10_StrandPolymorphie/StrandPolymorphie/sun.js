var Aufgabe10_2;
(function (Aufgabe10_2) {
    class sun extends Aufgabe10_2.moveObj {
        constructor() {
            super(75, 75);
        }
        drawObject() {
            // Sonne zeichnen
            Aufgabe10_2.crc2.save();
            Aufgabe10_2.crc2.translate(this.x, this.y);
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.fillStyle = "yellow";
            Aufgabe10_2.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            Aufgabe10_2.crc2.strokeStyle = "yellow";
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.closePath();
            Aufgabe10_2.crc2.restore();
        }
    }
    Aufgabe10_2.sun = sun;
})(Aufgabe10_2 || (Aufgabe10_2 = {}));
//# sourceMappingURL=sun.js.map