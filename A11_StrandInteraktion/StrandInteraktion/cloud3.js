var Aufgabe11;
(function (Aufgabe11) {
    class cloud3 extends Aufgabe11.moveObj {
        constructor() {
            super(135, 75);
        }
        drawObject() {
            // Wolke zeichnen
            Aufgabe11.crc2.save();
            Aufgabe11.crc2.translate(this.x + Aufgabe11.animX, this.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.moveTo(500, 95);
            Aufgabe11.crc2.arc(500, 95, 30, 0, Math.PI * 2, true);
            Aufgabe11.crc2.moveTo(530, 75);
            Aufgabe11.crc2.arc(530, 75, 30, 0, Math.PI * 2, true);
            Aufgabe11.crc2.moveTo(560, 75);
            Aufgabe11.crc2.arc(560, 75, 25, 0, Math.PI * 2, true);
            Aufgabe11.crc2.moveTo(593, 95);
            Aufgabe11.crc2.arc(593, 95, 30.2, 0, Math.PI * 2, true);
            Aufgabe11.crc2.fillStyle = "white";
            30;
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillRect(500, 75.5, 100, 50);
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.restore();
        }
    }
    Aufgabe11.cloud3 = cloud3;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=cloud3.js.map