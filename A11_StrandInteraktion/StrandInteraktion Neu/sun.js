var Aufgabe11;
(function (Aufgabe11) {
    class sun extends Aufgabe11.moveObj {
        constructor(_position) {
            super(_position, new Aufgabe11.Vector(0, 0), 0);
        }
        drawObject() {
            // Sonne zeichnen
            Aufgabe11.crc2.save();
            Aufgabe11.crc2.translate(this.position.x, this.position.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "yellow";
            Aufgabe11.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            Aufgabe11.crc2.strokeStyle = "yellow";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.restore();
        }
    }
    Aufgabe11.sun = sun;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=sun.js.map