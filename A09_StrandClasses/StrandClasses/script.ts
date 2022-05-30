/*
Aufgabe: L09.2_StrandClasses
Name: Kenan Coskun
Matrikel: 265335
Datum: 30.05.22
Quellen: In Zusammenarbeit mit Zara Kocak
*/
namespace Aufgabe9_2
{
    window.addEventListener("load", hndLoad);
    export let canvas: HTMLCanvasElement = document.querySelector("canvas");
    export let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

    // Hintergrund
    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0.5, "lightblue");
            gradient.addColorStop(0.51, "#2bb6ed");
            gradient.addColorStop(0.8, "#fafa9a");
            gradient.addColorStop(1, "yellow");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    // Palmen

    function drawPalm(): void {
        
        // Palme 1 zeichnen

            //Palme Stamm
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

            //Palme 2 zeichnen

            //Palme Stamm
            crc2.beginPath();
            crc2.moveTo(950, 600);
            crc2.strokeStyle = "#bf8d21";
            crc2.fillStyle = "#bf8d21";
            crc2.fillRect(950, 600, 10, -150);
            crc2.fill();
            crc2.closePath();

            //Palmenblatt 1
            crc2.beginPath();
            crc2.moveTo(955, 455);
            crc2.strokeStyle = "green";
            crc2.fillStyle = "green";
            crc2.quadraticCurveTo(990, 400, 995, 500);
            crc2.moveTo(995, 500);
            crc2.quadraticCurveTo(990, 430, 955, 455);

            //Palmenblatt 2
            crc2.moveTo(955, 455);
            crc2.quadraticCurveTo(920, 400, 915, 500);
            crc2.moveTo(915, 500);
            crc2.quadraticCurveTo(920, 430, 955, 455);

            //Palmenblatt 3
            crc2.moveTo(955, 455);
            crc2.quadraticCurveTo(990, 370, 995, 445);
            crc2.moveTo(995, 445);
            crc2.quadraticCurveTo(990, 400, 955, 455);

            //Palmenblatt 4
            crc2.moveTo(955, 455);
            crc2.quadraticCurveTo(920, 370, 915, 445);
            crc2.moveTo(915, 445);
            crc2.quadraticCurveTo(920, 400, 955, 455);

            //Palmenblatt 5
            crc2.moveTo(955, 455);
            crc2.quadraticCurveTo(950, 400, 990, 390);
            crc2.moveTo(990, 390);
            crc2.quadraticCurveTo(950, 440, 955, 455);

            //Palmenblatt 6
            crc2.moveTo(954, 455);
            crc2.quadraticCurveTo(953, 350, 905, 400);
            crc2.moveTo(905, 400);
            crc2.quadraticCurveTo(953, 390, 954, 455);

            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        
        }

    // Objekte erstellen
    let sunOne: sun = new sun(0, 0, 40);
    let gull: gulls = new gulls(250, 275, 300, 325, 350, 75, 40, 50);
    let gull2: gulls = new gulls(150, 175, 200, 225, 250, 150, 120, 110);
    let cloud1: clouds = new clouds(500, 530, 560, 593, 95, 75, 75.5, 30, 25, 30.2, 100, 50);
    let cloud2: clouds = new clouds(800, 830, 870, 900, 115, 95, 95.5, 30, 20, 30, 100, 50);
    let boat1: boat = new boat(75, 105, 155, 185, 120, 125, 150, 100, 269.5, 300, 270, 220, 250, 230, 50, 5, 31, -55);

    function hndLoad(): void {
        drawBackground();
        drawPalm();
        sunOne.drawSun();
        gull.drawGull();
        gull2.drawGull();
        cloud1.drawClouds();
        cloud2.drawClouds();
        boat1.drawBoat();
        }
}
