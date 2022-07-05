/*
Aufgabe: L11_Strand: Interaktion
Name: Kenan Coskun
Matrikel: 265335
Datum: 05.07.22
Quellen: In Zusammenarbeit mit Zara Kocak
*/
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", hndLoad);
    Aufgabe11.canvas = document.querySelector("canvas");
    Aufgabe11.crc2 = Aufgabe11.canvas.getContext("2d");
    Aufgabe11.animX = 0;
    Aufgabe11.animXGulls = 0;
    Aufgabe11.animYGulls = 0;
    Aufgabe11.animY = 0;
    // Array Superklasse
    let objects = [];
    // Hintergrund Canvas
    function drawBackground() {
        let gradient = Aufgabe11.crc2.createLinearGradient(0, 0, 0, Aufgabe11.crc2.canvas.height);
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(0.51, "#2bb6ed");
        gradient.addColorStop(0.8, "#fafa9a");
        gradient.addColorStop(1, "yellow");
        Aufgabe11.crc2.fillStyle = gradient;
        Aufgabe11.crc2.fillRect(0, 0, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height);
    }
    // Methoden aufrufen
    function hndLoad() {
        // Objekte erstellen
        // Sonne
        let sunOne = new Aufgabe11.sun();
        objects.push(sunOne);
        // Wolken
        let cloudOne = new Aufgabe11.cloud1();
        let cloudTwo = new Aufgabe11.cloud2();
        let cloudThree = new Aufgabe11.cloud3();
        objects.push(cloudOne, cloudTwo, cloudThree);
        // Boote
        let boatOne = new Aufgabe11.boat1();
        objects.push(boatOne);
        // Möwen
        let gullOne = new Aufgabe11.gull1();
        let gullTwo = new Aufgabe11.gull2();
        objects.push(gullOne, gullTwo);
        // Schwimmer
        let swimmerOne = new Aufgabe11.swimmer1();
        let swimmerTwo = new Aufgabe11.swimmer2();
        let swimmerThree = new Aufgabe11.swimmer3();
        let swimmerFour = new Aufgabe11.swimmer4();
        objects.push(swimmerOne, swimmerTwo, swimmerThree, swimmerFour);
        // Palmen
        let palmOne = new Aufgabe11.palm1();
        let palmTwo = new Aufgabe11.palm2();
        objects.push(palmOne, palmTwo);
        // Sonnenschirm
        let umbrellaOne = new Aufgabe11.umbrella1();
        objects.push(umbrellaOne);
        // Animation
        window.requestAnimationFrame(function animation() {
            Aufgabe11.crc2.clearRect(0, 0, Aufgabe11.canvas.width, Aufgabe11.canvas.height);
            drawBackground();
            Aufgabe11.animX += 0.3;
            Aufgabe11.animY += 0.3;
            Aufgabe11.animXGulls += 1.5;
            Aufgabe11.animYGulls += 1.5;
            for (let i = 0; i <= 13; i++) {
                objects[i].drawObject();
            }
            window.requestAnimationFrame(animation);
        });
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map