namespace Aufgabe11 {
    export abstract class moveObj {
        public position: Vector;
        public velocity: Vector;

        constructor(_position: Vector, _velocity: Vector){
            this.position = _position;
            this.velocity = _velocity;
        }

        public abstract drawObject(): void;

        public move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += crc2.canvas.height;
            }
            if (this.position.x > 1600) {
                this.position.x -= 1600;
            }
            if (this.position.y > 1500) {
                this.position.y -= 1500;
            }
        }
        
    }
}