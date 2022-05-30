var Aufgabe9_2;
(function (Aufgabe9_2) {
    class sun {
        constructor(_x, _y, _rad) {
            this.x = _x;
            this.y = _y;
            this.rad = _rad;
        }
        drawSun() {
            // Sonne zeichnen
            Aufgabe9_2.crc2.save();
            Aufgabe9_2.crc2.translate(75, 75);
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.fillStyle = "yellow";
            Aufgabe9_2.crc2.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
            Aufgabe9_2.crc2.strokeStyle = "yellow";
            Aufgabe9_2.crc2.stroke();
            Aufgabe9_2.crc2.fill();
            Aufgabe9_2.crc2.closePath();
            Aufgabe9_2.crc2.restore();
        }
    }
    Aufgabe9_2.sun = sun;
})(Aufgabe9_2 || (Aufgabe9_2 = {}));
//# sourceMappingURL=sun.js.map