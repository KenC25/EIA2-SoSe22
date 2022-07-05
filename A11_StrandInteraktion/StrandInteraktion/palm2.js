var Aufgabe11;
(function (Aufgabe11) {
    class palm2 extends Aufgabe11.moveObj {
        constructor() {
            super(900, 0);
        }
        drawObject() {
            // Palme zeichnen
            //Palme Stamm
            Aufgabe11.crc2.save();
            Aufgabe11.crc2.translate(this.x, this.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(10, 590);
            Aufgabe11.crc2.strokeStyle = "#bf8d21";
            Aufgabe11.crc2.fillStyle = "#bf8d21";
            Aufgabe11.crc2.fillRect(40, 600, 10, -150);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            //Palmenblätter
            //Palmenblatt 1
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(45, 455);
            Aufgabe11.crc2.strokeStyle = "green";
            Aufgabe11.crc2.fillStyle = "green";
            Aufgabe11.crc2.quadraticCurveTo(10, 400, 5, 500);
            Aufgabe11.crc2.moveTo(5, 500);
            Aufgabe11.crc2.quadraticCurveTo(10, 430, 45, 455);
            //Palmenblatt 2
            Aufgabe11.crc2.moveTo(45, 455);
            Aufgabe11.crc2.quadraticCurveTo(80, 400, 85, 500);
            Aufgabe11.crc2.moveTo(85, 500);
            Aufgabe11.crc2.quadraticCurveTo(80, 430, 45, 455);
            //Palmenblatt 3
            Aufgabe11.crc2.moveTo(45, 455);
            Aufgabe11.crc2.quadraticCurveTo(10, 370, 5, 445);
            Aufgabe11.crc2.moveTo(5, 445);
            Aufgabe11.crc2.quadraticCurveTo(10, 400, 45, 455);
            //Palmenblatt 4
            Aufgabe11.crc2.moveTo(45, 455);
            Aufgabe11.crc2.quadraticCurveTo(80, 370, 85, 445);
            Aufgabe11.crc2.moveTo(85, 445);
            Aufgabe11.crc2.quadraticCurveTo(80, 400, 45, 455);
            //Palmenblatt 5
            Aufgabe11.crc2.moveTo(45, 455);
            Aufgabe11.crc2.quadraticCurveTo(50, 400, 10, 390);
            Aufgabe11.crc2.moveTo(10, 390);
            Aufgabe11.crc2.quadraticCurveTo(50, 440, 45, 455);
            //Palmenblatt 6
            Aufgabe11.crc2.moveTo(46, 455);
            Aufgabe11.crc2.quadraticCurveTo(47, 350, 95, 400);
            Aufgabe11.crc2.moveTo(95, 400);
            Aufgabe11.crc2.quadraticCurveTo(47, 390, 46, 455);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.restore();
        }
    }
    Aufgabe11.palm2 = palm2;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=palm2.js.map