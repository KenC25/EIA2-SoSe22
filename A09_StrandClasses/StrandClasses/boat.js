var Aufgabe9_2;
(function (Aufgabe9_2) {
    class boat {
        constructor(_x1, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _y1, _y2, _y3, _y4, _y5, _y6, _w1, _w2, _h1, _h2) {
            this.x1 = _x1;
            this.x2 = _x2;
            this.x3 = _x3;
            this.x4 = _x4;
            this.x5 = _x5;
            this.x6 = _x6;
            this.x7 = _x7;
            this.x8 = _x8;
            this.y1 = _y1;
            this.y2 = _y2;
            this.y3 = _y3;
            this.y4 = _y4;
            this.y5 = _y5;
            this.y6 = _y6;
            this.w1 = _w1;
            this.w2 = _w2;
            this.h1 = _h1;
            this.h2 = _h2;
        }
        drawBoat() {
            //Boot
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.moveTo(this.x1, this.y1);
            Aufgabe9_2.crc2.lineTo(this.x2, this.y1);
            Aufgabe9_2.crc2.lineTo(this.x2, this.y2);
            Aufgabe9_2.crc2.lineTo(this.x1, this.y1);
            Aufgabe9_2.crc2.strokeStyle = "#7c6c48";
            Aufgabe9_2.crc2.stroke();
            Aufgabe9_2.crc2.fillStyle = "#7c6c48";
            Aufgabe9_2.crc2.fill();
            Aufgabe9_2.crc2.fillRect(this.x2, this.y1, this.w1, this.h1);
            Aufgabe9_2.crc2.moveTo(this.x3, this.y1);
            Aufgabe9_2.crc2.lineTo(this.x4, this.y1);
            Aufgabe9_2.crc2.lineTo(this.x3, this.y2);
            Aufgabe9_2.crc2.lineTo(this.x3, this.y1);
            Aufgabe9_2.crc2.stroke();
            Aufgabe9_2.crc2.fill();
            Aufgabe9_2.crc2.closePath();
            //Segel Rechts
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.moveTo(this.x5, this.y3);
            Aufgabe9_2.crc2.fillRect(this.x5, this.y3, this.w2, this.h2);
            Aufgabe9_2.crc2.moveTo(this.x6, this.y4);
            Aufgabe9_2.crc2.lineTo(this.x7, this.y5);
            Aufgabe9_2.crc2.lineTo(this.x6, this.y5);
            Aufgabe9_2.crc2.lineTo(this.x6, this.y4);
            Aufgabe9_2.crc2.strokeStyle = "white";
            Aufgabe9_2.crc2.stroke();
            Aufgabe9_2.crc2.fillStyle = "white";
            Aufgabe9_2.crc2.fill();
            Aufgabe9_2.crc2.closePath();
            //Segel Links
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.moveTo(this.x5, this.y6);
            Aufgabe9_2.crc2.lineTo(this.x5, this.y5);
            Aufgabe9_2.crc2.lineTo(this.x8, this.y5);
            Aufgabe9_2.crc2.lineTo(this.x5, this.y6);
            Aufgabe9_2.crc2.strokeStyle = "white";
            Aufgabe9_2.crc2.stroke();
            Aufgabe9_2.crc2.fillStyle = "white";
            Aufgabe9_2.crc2.fill();
            Aufgabe9_2.crc2.closePath();
        }
    }
    Aufgabe9_2.boat = boat;
})(Aufgabe9_2 || (Aufgabe9_2 = {}));
//# sourceMappingURL=boat.js.map