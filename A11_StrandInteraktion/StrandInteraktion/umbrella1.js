var Aufgabe11;
(function (Aufgabe11) {
    class umbrella1 extends Aufgabe11.moveObj {
        constructor() {
            super(0, 70);
        }
        drawObject() {
            // Sonnenschirm zeichnen
            //Stand
            Aufgabe11.crc2.save();
            Aufgabe11.crc2.translate(this.x, this.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(745, 400);
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.fillRect(745, 400, 5, 150);
            Aufgabe11.crc2.closePath();
            //Teil 1
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(660, 400);
            Aufgabe11.crc2.lineTo(750, 350);
            Aufgabe11.crc2.lineTo(690, 400);
            Aufgabe11.crc2.lineTo(660, 400);
            Aufgabe11.crc2.strokeStyle = "red";
            Aufgabe11.crc2.fillStyle = "red";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            //Teil 2
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(690, 400);
            Aufgabe11.crc2.lineTo(750, 350);
            Aufgabe11.crc2.lineTo(730, 400);
            Aufgabe11.crc2.lineTo(690, 400);
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            //Teil 3
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(730, 400);
            Aufgabe11.crc2.lineTo(750, 350);
            Aufgabe11.crc2.lineTo(770, 400);
            Aufgabe11.crc2.lineTo(730, 400);
            Aufgabe11.crc2.strokeStyle = "red";
            Aufgabe11.crc2.fillStyle = "red";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            //Teil 4
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(770, 400);
            Aufgabe11.crc2.lineTo(750, 350);
            Aufgabe11.crc2.lineTo(800, 400);
            Aufgabe11.crc2.lineTo(770, 400);
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            //Teil 5
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(800, 400);
            Aufgabe11.crc2.lineTo(750, 350);
            Aufgabe11.crc2.lineTo(830, 400);
            Aufgabe11.crc2.lineTo(800, 400);
            Aufgabe11.crc2.strokeStyle = "red";
            Aufgabe11.crc2.fillStyle = "red";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.restore();
        }
    }
    Aufgabe11.umbrella1 = umbrella1;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=umbrella1.js.map