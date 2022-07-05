namespace Aufgabe11 {
    export class boat1 extends moveObj{
        constructor(){
            super(-200, 0);
        }

        public drawObject(): void {
        
        // Boot zeichnen

            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.beginPath();
            crc2.moveTo(75 + animX, 269.5);
            crc2.lineTo(105+ animX, 269.5);
            crc2.lineTo(105+ animX, 300);
            crc2.lineTo(75+ animX, 269.5);
            crc2.strokeStyle = "#7c6c48";
            crc2.stroke();
            crc2.fillStyle = "#7c6c48";
            crc2.fill();
            crc2.fillRect(105+ animX, 269.2, 50, 31);
            crc2.moveTo(155+ animX, 269.5);
            crc2.lineTo(185+ animX, 269.5);
            crc2.lineTo(155+ animX, 300);
            crc2.lineTo(155+ animX, 269.5);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            
            //Segel Rechts
            crc2.beginPath();
            crc2.moveTo(120+ animX, 270);
            crc2.fillRect(120+ animX, 270, 5, -55);
            crc2.moveTo(125+ animX, 220);
            crc2.lineTo(150+ animX, 250);
            crc2.lineTo(125+ animX, 250);
            crc2.lineTo(125+ animX, 220);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            //Segel Links
            crc2.beginPath();
            crc2.moveTo(120+ animX, 230);
            crc2.lineTo(120+ animX, 250);
            crc2.lineTo(100+ animX, 250);
            crc2.lineTo(120+ animX, 230);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            
            }
        }
    }