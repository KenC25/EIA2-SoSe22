namespace Aufgabe10_2 {
    export class palm1 extends moveObj {
        constructor(){
            super(0, 0);
        }

        drawObject(): void {
        
        // Palme zeichnen

            //Palme Stamm
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.beginPath();
            crc2.moveTo(10, 590);
            crc2.strokeStyle = "#bf8d21";
            crc2.fillStyle = "#bf8d21";
            crc2.fillRect(40, 600, 10, -150);
            crc2.fill();
            crc2.closePath();

            //Palmenblätter
            
            //Palmenblatt 1
            crc2.beginPath();
            crc2.moveTo(45, 455);
            crc2.strokeStyle = "green";
            crc2.fillStyle = "green";
            crc2.quadraticCurveTo(10, 400, 5, 500);
            crc2.moveTo(5, 500);
            crc2.quadraticCurveTo(10, 430, 45, 455);
        
            //Palmenblatt 2
            crc2.moveTo(45, 455);
            crc2.quadraticCurveTo(80, 400, 85, 500);
            crc2.moveTo(85, 500);
            crc2.quadraticCurveTo(80, 430, 45, 455);

            //Palmenblatt 3
            crc2.moveTo(45, 455);
            crc2.quadraticCurveTo(10, 370, 5, 445);
            crc2.moveTo(5, 445);
            crc2.quadraticCurveTo(10, 400, 45, 455);

            //Palmenblatt 4
            crc2.moveTo(45, 455);
            crc2.quadraticCurveTo(80, 370, 85, 445);
            crc2.moveTo(85, 445);
            crc2.quadraticCurveTo(80, 400, 45, 455);

            //Palmenblatt 5
            crc2.moveTo(45, 455);
            crc2.quadraticCurveTo(50, 400, 10, 390);
            crc2.moveTo(10, 390);
            crc2.quadraticCurveTo(50, 440, 45, 455);

            //Palmenblatt 6
            crc2.moveTo(46, 455);
            crc2.quadraticCurveTo(47, 350, 95, 400);
            crc2.moveTo(95, 400);
            crc2.quadraticCurveTo(47, 390, 46, 455);

            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
        }
    }
}