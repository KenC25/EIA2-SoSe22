/*
Aufgabe: L10.2_Strand: Polymorphie
Name: Kenan Coskun
Matrikel: 265335
Datum: 16.06.22
*/
var Aufgabe10_2;
(function (Aufgabe10_2) {
    window.addEventListener("load", hndLoad);
    Aufgabe10_2.canvas = document.querySelector("canvas");
    Aufgabe10_2.crc2 = Aufgabe10_2.canvas.getContext("2d");
    Aufgabe10_2.animX = 0;
    Aufgabe10_2.animXGulls = 0;
    Aufgabe10_2.animYGulls = 0;
    Aufgabe10_2.animY = 0;
    // Array Superklasse
    let objects = [];
    // Hintergrund Canvas
    function drawBackground() {
        let gradient = Aufgabe10_2.crc2.createLinearGradient(0, 0, 0, Aufgabe10_2.crc2.canvas.height);
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(0.51, "#2bb6ed");
        gradient.addColorStop(0.8, "#fafa9a");
        gradient.addColorStop(1, "yellow");
        Aufgabe10_2.crc2.fillStyle = gradient;
        Aufgabe10_2.crc2.fillRect(0, 0, Aufgabe10_2.crc2.canvas.width, Aufgabe10_2.crc2.canvas.height);
    }
    // Methoden aufrufen
    function hndLoad() {
        // Objekte erstellen
        // Sonne
        let sunOne = new Aufgabe10_2.sun();
        objects.push(sunOne);
        // Wolken
        let cloudOne = new Aufgabe10_2.cloud1();
        let cloudTwo = new Aufgabe10_2.cloud2();
        let cloudThree = new Aufgabe10_2.cloud3();
        objects.push(cloudOne, cloudTwo, cloudThree);
        // Boote
        let boatOne = new Aufgabe10_2.boat1();
        objects.push(boatOne);
        // Möwen
        let gullOne = new Aufgabe10_2.gull1();
        let gullTwo = new Aufgabe10_2.gull2();
        objects.push(gullOne, gullTwo);
        // Schwimmer
        let swimmerOne = new Aufgabe10_2.swimmer1();
        let swimmerTwo = new Aufgabe10_2.swimmer2();
        let swimmerThree = new Aufgabe10_2.swimmer3();
        let swimmerFour = new Aufgabe10_2.swimmer4();
        objects.push(swimmerOne, swimmerTwo, swimmerThree, swimmerFour);
        // Palmen
        let palmOne = new Aufgabe10_2.palm1();
        let palmTwo = new Aufgabe10_2.palm2();
        objects.push(palmOne, palmTwo);
        // Umbrella
        let umbrellaOne = new Aufgabe10_2.umbrella1();
        objects.push(umbrellaOne);
        window.requestAnimationFrame(function animation() {
            Aufgabe10_2.crc2.clearRect(0, 0, Aufgabe10_2.canvas.width, Aufgabe10_2.canvas.height);
            drawBackground();
            Aufgabe10_2.animX += 0.3;
            Aufgabe10_2.animY += 0.3;
            Aufgabe10_2.animXGulls += 1.5;
            Aufgabe10_2.animYGulls += 1.5;
            for (let i = 0; i <= 13; i++) {
                objects[i].drawObject();
            }
            window.requestAnimationFrame(animation);
        });
    }
})(Aufgabe10_2 || (Aufgabe10_2 = {}));
//# sourceMappingURL=script.js.map