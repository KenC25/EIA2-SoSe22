var Aufgabe11;
(function (Aufgabe11) {
    class moveObj {
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        move(_timeslice) {
            let offset = new Aufgabe11.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += Aufgabe11.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += Aufgabe11.crc2.canvas.height;
            }
            if (this.position.x > 1600) {
                this.position.x -= 1600;
            }
            if (this.position.y > 1500) {
                this.position.y -= 1500;
            }
        }
    }
    Aufgabe11.moveObj = moveObj;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=moveObj.js.map