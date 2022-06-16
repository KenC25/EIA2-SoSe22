var Aufgabe10_2;
(function (Aufgabe10_2) {
    class umbrella1 extends Aufgabe10_2.moveObj {
        constructor() {
            super(0, 70);
        }
        drawObject() {
            // Sonnenschirm zeichnen
            //Stand
            Aufgabe10_2.crc2.save();
            Aufgabe10_2.crc2.translate(this.x, this.y);
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(745, 400);
            Aufgabe10_2.crc2.fillStyle = "white";
            Aufgabe10_2.crc2.fillRect(745, 400, 5, 150);
            Aufgabe10_2.crc2.closePath();
            //Teil 1
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(660, 400);
            Aufgabe10_2.crc2.lineTo(750, 350);
            Aufgabe10_2.crc2.lineTo(690, 400);
            Aufgabe10_2.crc2.lineTo(660, 400);
            Aufgabe10_2.crc2.strokeStyle = "red";
            Aufgabe10_2.crc2.fillStyle = "red";
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.closePath();
            //Teil 2
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(690, 400);
            Aufgabe10_2.crc2.lineTo(750, 350);
            Aufgabe10_2.crc2.lineTo(730, 400);
            Aufgabe10_2.crc2.lineTo(690, 400);
            Aufgabe10_2.crc2.strokeStyle = "white";
            Aufgabe10_2.crc2.fillStyle = "white";
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.closePath();
            //Teil 3
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(730, 400);
            Aufgabe10_2.crc2.lineTo(750, 350);
            Aufgabe10_2.crc2.lineTo(770, 400);
            Aufgabe10_2.crc2.lineTo(730, 400);
            Aufgabe10_2.crc2.strokeStyle = "red";
            Aufgabe10_2.crc2.fillStyle = "red";
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.closePath();
            //Teil 4
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(770, 400);
            Aufgabe10_2.crc2.lineTo(750, 350);
            Aufgabe10_2.crc2.lineTo(800, 400);
            Aufgabe10_2.crc2.lineTo(770, 400);
            Aufgabe10_2.crc2.strokeStyle = "white";
            Aufgabe10_2.crc2.fillStyle = "white";
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.closePath();
            //Teil 5
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(800, 400);
            Aufgabe10_2.crc2.lineTo(750, 350);
            Aufgabe10_2.crc2.lineTo(830, 400);
            Aufgabe10_2.crc2.lineTo(800, 400);
            Aufgabe10_2.crc2.strokeStyle = "red";
            Aufgabe10_2.crc2.fillStyle = "red";
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.closePath();
            Aufgabe10_2.crc2.restore();
        }
    }
    Aufgabe10_2.umbrella1 = umbrella1;
})(Aufgabe10_2 || (Aufgabe10_2 = {}));
//# sourceMappingURL=umbrella1.js.map