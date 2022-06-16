var Aufgabe10_2;
(function (Aufgabe10_2) {
    class cloud3 extends Aufgabe10_2.moveObj {
        constructor() {
            super(135, 75);
        }
        drawObject() {
            // Wolke zeichnen
            Aufgabe10_2.crc2.save();
            Aufgabe10_2.crc2.translate(this.x + Aufgabe10_2.animX, this.y);
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.strokeStyle = "white";
            Aufgabe10_2.crc2.moveTo(500, 95);
            Aufgabe10_2.crc2.arc(500, 95, 30, 0, Math.PI * 2, true);
            Aufgabe10_2.crc2.moveTo(530, 75);
            Aufgabe10_2.crc2.arc(530, 75, 30, 0, Math.PI * 2, true);
            Aufgabe10_2.crc2.moveTo(560, 75);
            Aufgabe10_2.crc2.arc(560, 75, 25, 0, Math.PI * 2, true);
            Aufgabe10_2.crc2.moveTo(593, 95);
            Aufgabe10_2.crc2.arc(593, 95, 30.2, 0, Math.PI * 2, true);
            Aufgabe10_2.crc2.fillStyle = "white";
            30;
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.closePath();
            Aufgabe10_2.crc2.fillRect(500, 75.5, 100, 50);
            Aufgabe10_2.crc2.fillStyle = "white";
            Aufgabe10_2.crc2.restore();
        }
    }
    Aufgabe10_2.cloud3 = cloud3;
})(Aufgabe10_2 || (Aufgabe10_2 = {}));
//# sourceMappingURL=cloud3.js.map