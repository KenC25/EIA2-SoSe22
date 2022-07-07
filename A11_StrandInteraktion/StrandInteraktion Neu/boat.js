var Aufgabe11;
(function (Aufgabe11) {
    class boat extends Aufgabe11.moveObj {
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        drawObject() {
            // Boot zeichnen
            Aufgabe11.crc2.save();
            Aufgabe11.crc2.translate(this.position.x, this.position.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.translate(-200, 0);
            Aufgabe11.crc2.moveTo(75, 269.5);
            Aufgabe11.crc2.lineTo(105, 269.5);
            Aufgabe11.crc2.lineTo(105, 300);
            Aufgabe11.crc2.lineTo(75, 269.5);
            Aufgabe11.crc2.strokeStyle = "#7c6c48";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "#7c6c48";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.fillRect(105, 269.2, 50, 31);
            Aufgabe11.crc2.moveTo(155, 269.5);
            Aufgabe11.crc2.lineTo(185, 269.5);
            Aufgabe11.crc2.lineTo(155, 300);
            Aufgabe11.crc2.lineTo(155, 269.5);
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            //Segel Rechts
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(120, 270);
            Aufgabe11.crc2.fillRect(120, 270, 5, -55);
            Aufgabe11.crc2.moveTo(125, 220);
            Aufgabe11.crc2.lineTo(150, 250);
            Aufgabe11.crc2.lineTo(125, 250);
            Aufgabe11.crc2.lineTo(125, 220);
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            //Segel Links
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(120, 230);
            Aufgabe11.crc2.lineTo(120, 250);
            Aufgabe11.crc2.lineTo(100, 250);
            Aufgabe11.crc2.lineTo(120, 230);
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    Aufgabe11.boat = boat;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=boat.js.map