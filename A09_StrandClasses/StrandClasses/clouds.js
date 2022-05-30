var Aufgabe9_2;
(function (Aufgabe9_2) {
    class clouds {
        constructor(_x1, _x2, _x3, _x4, _y1, _y2, _y3, _rad1, _rad2, _rad3, _w, _h) {
            this.x1 = _x1;
            this.x2 = _x2;
            this.x3 = _x3;
            this.x4 = _x4;
            this.y1 = _y1;
            this.y2 = _y2;
            this.y3 = _y3;
            this.rad1 = _rad1;
            this.rad2 = _rad2;
            this.rad3 = _rad3;
            this.w = _w;
            this.h = _h;
        }
        drawClouds() {
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.strokeStyle = "white";
            Aufgabe9_2.crc2.moveTo(this.x1, this.y1);
            Aufgabe9_2.crc2.arc(this.x1, this.y1, this.rad1, 0, Math.PI * 2, true);
            Aufgabe9_2.crc2.moveTo(this.x2, this.y2);
            Aufgabe9_2.crc2.arc(this.x2, this.y2, this.rad1, 0, Math.PI * 2, true);
            Aufgabe9_2.crc2.moveTo(this.x3, this.y2);
            Aufgabe9_2.crc2.arc(this.x3, this.y2, this.rad2, 0, Math.PI * 2, true);
            Aufgabe9_2.crc2.moveTo(this.x4, this.y1);
            Aufgabe9_2.crc2.arc(this.x4, this.y1, this.rad3, 0, Math.PI * 2, true);
            Aufgabe9_2.crc2.fillStyle = "white";
            Aufgabe9_2.crc2.fill();
            Aufgabe9_2.crc2.stroke();
            Aufgabe9_2.crc2.closePath();
            Aufgabe9_2.crc2.fillRect(this.x1, this.y3, this.w, this.h);
            Aufgabe9_2.crc2.fillStyle = "white";
        }
    }
    Aufgabe9_2.clouds = clouds;
})(Aufgabe9_2 || (Aufgabe9_2 = {}));
//# sourceMappingURL=clouds.js.map