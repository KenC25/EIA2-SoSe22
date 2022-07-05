var Aufgabe11;
(function (Aufgabe11) {
    class boat1 extends Aufgabe11.moveObj {
        constructor() {
            super(-200, 0);
        }
        drawObject() {
            // Boot zeichnen
            Aufgabe11.crc2.save();
            Aufgabe11.crc2.translate(this.x, this.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(75 + Aufgabe11.animX, 269.5);
            Aufgabe11.crc2.lineTo(105 + Aufgabe11.animX, 269.5);
            Aufgabe11.crc2.lineTo(105 + Aufgabe11.animX, 300);
            Aufgabe11.crc2.lineTo(75 + Aufgabe11.animX, 269.5);
            Aufgabe11.crc2.strokeStyle = "#7c6c48";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "#7c6c48";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.fillRect(105 + Aufgabe11.animX, 269.2, 50, 31);
            Aufgabe11.crc2.moveTo(155 + Aufgabe11.animX, 269.5);
            Aufgabe11.crc2.lineTo(185 + Aufgabe11.animX, 269.5);
            Aufgabe11.crc2.lineTo(155 + Aufgabe11.animX, 300);
            Aufgabe11.crc2.lineTo(155 + Aufgabe11.animX, 269.5);
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            //Segel Rechts
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(120 + Aufgabe11.animX, 270);
            Aufgabe11.crc2.fillRect(120 + Aufgabe11.animX, 270, 5, -55);
            Aufgabe11.crc2.moveTo(125 + Aufgabe11.animX, 220);
            Aufgabe11.crc2.lineTo(150 + Aufgabe11.animX, 250);
            Aufgabe11.crc2.lineTo(125 + Aufgabe11.animX, 250);
            Aufgabe11.crc2.lineTo(125 + Aufgabe11.animX, 220);
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            //Segel Links
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(120 + Aufgabe11.animX, 230);
            Aufgabe11.crc2.lineTo(120 + Aufgabe11.animX, 250);
            Aufgabe11.crc2.lineTo(100 + Aufgabe11.animX, 250);
            Aufgabe11.crc2.lineTo(120 + Aufgabe11.animX, 230);
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.restore();
        }
    }
    Aufgabe11.boat1 = boat1;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=boat1.js.map