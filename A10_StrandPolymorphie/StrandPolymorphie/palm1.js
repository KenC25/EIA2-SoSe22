var Aufgabe10_2;
(function (Aufgabe10_2) {
    class palm1 extends Aufgabe10_2.moveObj {
        constructor() {
            super(0, 0);
        }
        drawObject() {
            // Palme zeichnen
            //Palme Stamm
            Aufgabe10_2.crc2.save();
            Aufgabe10_2.crc2.translate(this.x, this.y);
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(10, 590);
            Aufgabe10_2.crc2.strokeStyle = "#bf8d21";
            Aufgabe10_2.crc2.fillStyle = "#bf8d21";
            Aufgabe10_2.crc2.fillRect(40, 600, 10, -150);
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.closePath();
            //Palmenblätter
            //Palmenblatt 1
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(45, 455);
            Aufgabe10_2.crc2.strokeStyle = "green";
            Aufgabe10_2.crc2.fillStyle = "green";
            Aufgabe10_2.crc2.quadraticCurveTo(10, 400, 5, 500);
            Aufgabe10_2.crc2.moveTo(5, 500);
            Aufgabe10_2.crc2.quadraticCurveTo(10, 430, 45, 455);
            //Palmenblatt 2
            Aufgabe10_2.crc2.moveTo(45, 455);
            Aufgabe10_2.crc2.quadraticCurveTo(80, 400, 85, 500);
            Aufgabe10_2.crc2.moveTo(85, 500);
            Aufgabe10_2.crc2.quadraticCurveTo(80, 430, 45, 455);
            //Palmenblatt 3
            Aufgabe10_2.crc2.moveTo(45, 455);
            Aufgabe10_2.crc2.quadraticCurveTo(10, 370, 5, 445);
            Aufgabe10_2.crc2.moveTo(5, 445);
            Aufgabe10_2.crc2.quadraticCurveTo(10, 400, 45, 455);
            //Palmenblatt 4
            Aufgabe10_2.crc2.moveTo(45, 455);
            Aufgabe10_2.crc2.quadraticCurveTo(80, 370, 85, 445);
            Aufgabe10_2.crc2.moveTo(85, 445);
            Aufgabe10_2.crc2.quadraticCurveTo(80, 400, 45, 455);
            //Palmenblatt 5
            Aufgabe10_2.crc2.moveTo(45, 455);
            Aufgabe10_2.crc2.quadraticCurveTo(50, 400, 10, 390);
            Aufgabe10_2.crc2.moveTo(10, 390);
            Aufgabe10_2.crc2.quadraticCurveTo(50, 440, 45, 455);
            //Palmenblatt 6
            Aufgabe10_2.crc2.moveTo(46, 455);
            Aufgabe10_2.crc2.quadraticCurveTo(47, 350, 95, 400);
            Aufgabe10_2.crc2.moveTo(95, 400);
            Aufgabe10_2.crc2.quadraticCurveTo(47, 390, 46, 455);
            Aufgabe10_2.crc2.fill();
            Aufgabe10_2.crc2.stroke();
            Aufgabe10_2.crc2.closePath();
            Aufgabe10_2.crc2.restore();
        }
    }
    Aufgabe10_2.palm1 = palm1;
})(Aufgabe10_2 || (Aufgabe10_2 = {}));
//# sourceMappingURL=palm1.js.map