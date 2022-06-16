var Aufgabe10_2;
(function (Aufgabe10_2) {
    class boat1 extends Aufgabe10_2.moveObj {
        constructor() {
            super(-200, 0);
        }
        drawObject() {
            // Boot zeichnen
            Aufgabe10_2.crc2.save();
            Aufgabe10_2.crc2.translate(this.x, this.y);
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(75 + Aufgabe10_2.animX, 269.5);
            Aufgabe10_2.crc2.lineTo(105 + Aufgabe10_2.animX, 269.5);
            Aufgabe10_2.crc2.lineTo(105 + Aufgabe10_2.animX, 300);
            Aufgabe10_2.crc2.lineTo(75 + Aufgabe10_2.animX, 269.5);
            Aufgabe10_2.crc2.strokeStyle = "#7c6c48";
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.fillStyle = "#7c6c48";
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.fillRect(105 + Aufgabe10_2.animX, 269.2, 50, 31);
            Aufgabe10_2.crc2.moveTo(155 + Aufgabe10_2.animX, 269.5);
            Aufgabe10_2.crc2.lineTo(185 + Aufgabe10_2.animX, 269.5);
            Aufgabe10_2.crc2.lineTo(155 + Aufgabe10_2.animX, 300);
            Aufgabe10_2.crc2.lineTo(155 + Aufgabe10_2.animX, 269.5);
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.closePath();
            //Segel Rechts
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(120 + Aufgabe10_2.animX, 270);
            Aufgabe10_2.crc2.fillRect(120 + Aufgabe10_2.animX, 270, 5, -55);
            Aufgabe10_2.crc2.moveTo(125 + Aufgabe10_2.animX, 220);
            Aufgabe10_2.crc2.lineTo(150 + Aufgabe10_2.animX, 250);
            Aufgabe10_2.crc2.lineTo(125 + Aufgabe10_2.animX, 250);
            Aufgabe10_2.crc2.lineTo(125 + Aufgabe10_2.animX, 220);
            Aufgabe10_2.crc2.strokeStyle = "white";
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.fillStyle = "white";
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.closePath();
            //Segel Links
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(120 + Aufgabe10_2.animX, 230);
            Aufgabe10_2.crc2.lineTo(120 + Aufgabe10_2.animX, 250);
            Aufgabe10_2.crc2.lineTo(100 + Aufgabe10_2.animX, 250);
            Aufgabe10_2.crc2.lineTo(120 + Aufgabe10_2.animX, 230);
            Aufgabe10_2.crc2.strokeStyle = "white";
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.fillStyle = "white";
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.closePath();
            Aufgabe10_2.crc2.restore();
        }
    }
    Aufgabe10_2.boat1 = boat1;
})(Aufgabe10_2 || (Aufgabe10_2 = {}));
//# sourceMappingURL=boat1.js.map