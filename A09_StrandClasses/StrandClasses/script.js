var Aufgabe9_2;
(function (Aufgabe9_2) {
    window.addEventListener("load", hndLoad);
    Aufgabe9_2.canvas = document.querySelector("canvas");
    Aufgabe9_2.crc2 = Aufgabe9_2.canvas.getContext("2d");
    // Hintergrund
    function drawBackground() {
        let gradient = Aufgabe9_2.crc2.createLinearGradient(0, 0, 0, Aufgabe9_2.crc2.canvas.height);
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(0.51, "#2bb6ed");
        gradient.addColorStop(0.8, "#fafa9a");
        gradient.addColorStop(1, "yellow");
        Aufgabe9_2.crc2.fillStyle = gradient;
        Aufgabe9_2.crc2.fillRect(0, 0, Aufgabe9_2.crc2.canvas.width, Aufgabe9_2.crc2.canvas.height);
    }
    // Palmen
    function drawPalm() {
        // Palme 1 zeichnen
        //Palme Stamm
        Aufgabe9_2.crc2.beginPath();
        Aufgabe9_2.crc2.moveTo(10, 590);
        Aufgabe9_2.crc2.strokeStyle = "#bf8d21";
        Aufgabe9_2.crc2.fillStyle = "#bf8d21";
        Aufgabe9_2.crc2.fillRect(40, 600, 10, -150);
        Aufgabe9_2.crc2.fill();
        Aufgabe9_2.crc2.closePath();
        //Palmenblätter
        //Palmenblatt 1
        Aufgabe9_2.crc2.beginPath();
        Aufgabe9_2.crc2.moveTo(45, 455);
        Aufgabe9_2.crc2.strokeStyle = "green";
        Aufgabe9_2.crc2.fillStyle = "green";
        Aufgabe9_2.crc2.quadraticCurveTo(10, 400, 5, 500);
        Aufgabe9_2.crc2.moveTo(5, 500);
        Aufgabe9_2.crc2.quadraticCurveTo(10, 430, 45, 455);
        //Palmenblatt 2
        Aufgabe9_2.crc2.moveTo(45, 455);
        Aufgabe9_2.crc2.quadraticCurveTo(80, 400, 85, 500);
        Aufgabe9_2.crc2.moveTo(85, 500);
        Aufgabe9_2.crc2.quadraticCurveTo(80, 430, 45, 455);
        //Palmenblatt 3
        Aufgabe9_2.crc2.moveTo(45, 455);
        Aufgabe9_2.crc2.quadraticCurveTo(10, 370, 5, 445);
        Aufgabe9_2.crc2.moveTo(5, 445);
        Aufgabe9_2.crc2.quadraticCurveTo(10, 400, 45, 455);
        //Palmenblatt 4
        Aufgabe9_2.crc2.moveTo(45, 455);
        Aufgabe9_2.crc2.quadraticCurveTo(80, 370, 85, 445);
        Aufgabe9_2.crc2.moveTo(85, 445);
        Aufgabe9_2.crc2.quadraticCurveTo(80, 400, 45, 455);
        //Palmenblatt 5
        Aufgabe9_2.crc2.moveTo(45, 455);
        Aufgabe9_2.crc2.quadraticCurveTo(50, 400, 10, 390);
        Aufgabe9_2.crc2.moveTo(10, 390);
        Aufgabe9_2.crc2.quadraticCurveTo(50, 440, 45, 455);
        //Palmenblatt 6
        Aufgabe9_2.crc2.moveTo(46, 455);
        Aufgabe9_2.crc2.quadraticCurveTo(47, 350, 95, 400);
        Aufgabe9_2.crc2.moveTo(95, 400);
        Aufgabe9_2.crc2.quadraticCurveTo(47, 390, 46, 455);
        Aufgabe9_2.crc2.fill();
        Aufgabe9_2.crc2.stroke();
        Aufgabe9_2.crc2.closePath();
        //Palme 2 zeichnen
        //Palme Stamm
        Aufgabe9_2.crc2.beginPath();
        Aufgabe9_2.crc2.moveTo(950, 600);
        Aufgabe9_2.crc2.strokeStyle = "#bf8d21";
        Aufgabe9_2.crc2.fillStyle = "#bf8d21";
        Aufgabe9_2.crc2.fillRect(950, 600, 10, -150);
        Aufgabe9_2.crc2.fill();
        Aufgabe9_2.crc2.closePath();
        //Palmenblatt 1
        Aufgabe9_2.crc2.beginPath();
        Aufgabe9_2.crc2.moveTo(955, 455);
        Aufgabe9_2.crc2.strokeStyle = "green";
        Aufgabe9_2.crc2.fillStyle = "green";
        Aufgabe9_2.crc2.quadraticCurveTo(990, 400, 995, 500);
        Aufgabe9_2.crc2.moveTo(995, 500);
        Aufgabe9_2.crc2.quadraticCurveTo(990, 430, 955, 455);
        //Palmenblatt 2
        Aufgabe9_2.crc2.moveTo(955, 455);
        Aufgabe9_2.crc2.quadraticCurveTo(920, 400, 915, 500);
        Aufgabe9_2.crc2.moveTo(915, 500);
        Aufgabe9_2.crc2.quadraticCurveTo(920, 430, 955, 455);
        //Palmenblatt 3
        Aufgabe9_2.crc2.moveTo(955, 455);
        Aufgabe9_2.crc2.quadraticCurveTo(990, 370, 995, 445);
        Aufgabe9_2.crc2.moveTo(995, 445);
        Aufgabe9_2.crc2.quadraticCurveTo(990, 400, 955, 455);
        //Palmenblatt 4
        Aufgabe9_2.crc2.moveTo(955, 455);
        Aufgabe9_2.crc2.quadraticCurveTo(920, 370, 915, 445);
        Aufgabe9_2.crc2.moveTo(915, 445);
        Aufgabe9_2.crc2.quadraticCurveTo(920, 400, 955, 455);
        //Palmenblatt 5
        Aufgabe9_2.crc2.moveTo(955, 455);
        Aufgabe9_2.crc2.quadraticCurveTo(950, 400, 990, 390);
        Aufgabe9_2.crc2.moveTo(990, 390);
        Aufgabe9_2.crc2.quadraticCurveTo(950, 440, 955, 455);
        //Palmenblatt 6
        Aufgabe9_2.crc2.moveTo(954, 455);
        Aufgabe9_2.crc2.quadraticCurveTo(953, 350, 905, 400);
        Aufgabe9_2.crc2.moveTo(905, 400);
        Aufgabe9_2.crc2.quadraticCurveTo(953, 390, 954, 455);
        Aufgabe9_2.crc2.stroke();
        Aufgabe9_2.crc2.fill();
        Aufgabe9_2.crc2.closePath();
    }
    // Objekte erstellen
    let sunOne = new Aufgabe9_2.sun(0, 0, 40);
    let gull = new Aufgabe9_2.gulls(250, 275, 300, 325, 350, 75, 40, 50);
    let gull2 = new Aufgabe9_2.gulls(150, 175, 200, 225, 250, 150, 120, 110);
    let cloud1 = new Aufgabe9_2.clouds(500, 530, 560, 593, 95, 75, 75.5, 30, 25, 30.2, 100, 50);
    let cloud2 = new Aufgabe9_2.clouds(800, 830, 870, 900, 115, 95, 95.5, 30, 20, 30, 100, 50);
    let boat1 = new Aufgabe9_2.boat(75, 105, 155, 185, 120, 125, 150, 100, 269.5, 300, 270, 220, 250, 230, 50, 5, 31, -55);
    function hndLoad() {
        drawBackground();
        drawPalm();
        sunOne.drawSun();
        gull.drawGull();
        gull2.drawGull();
        cloud1.drawClouds();
        cloud2.drawClouds();
        boat1.drawBoat();
    }
})(Aufgabe9_2 || (Aufgabe9_2 = {}));
//# sourceMappingURL=script.js.map