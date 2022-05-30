var Aufgabe9_2;
(function (Aufgabe9_2) {
    class gulls {
        constructor(_x1, _x2, _x3, _x4, _x5, _y1, _y2, _y3) {
            this.x1 = _x1;
            this.x2 = _x2;
            this.x3 = _x3;
            this.x4 = _x4;
            this.x5 = _x5;
            this.y1 = _y1;
            this.y2 = _y2;
            this.y3 = _y3;
        }
        drawGull() {
            //Möwe zeichnen
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.moveTo(this.x1, this.y1);
            Aufgabe9_2.crc2.quadraticCurveTo(this.x2, this.y2, this.x3, this.y1);
            Aufgabe9_2.crc2.moveTo(this.x3, this.y1);
            Aufgabe9_2.crc2.quadraticCurveTo(this.x4, this.y2, this.x5, this.y1);
            Aufgabe9_2.crc2.moveTo(this.x5, this.y1);
            Aufgabe9_2.crc2.quadraticCurveTo(this.x4, this.y3, this.x3, this.y1);
            Aufgabe9_2.crc2.moveTo(this.x3, this.y1);
            Aufgabe9_2.crc2.quadraticCurveTo(this.x2, this.y3, this.x1, this.y1);
            Aufgabe9_2.crc2.fillStyle = "black";
            Aufgabe9_2.crc2.strokeStyle = "black";
            Aufgabe9_2.crc2.stroke();
            Aufgabe9_2.crc2.fill();
            Aufgabe9_2.crc2.closePath();
        }
    }
    Aufgabe9_2.gulls = gulls;
})(Aufgabe9_2 || (Aufgabe9_2 = {}));
//# sourceMappingURL=gulls.js.map