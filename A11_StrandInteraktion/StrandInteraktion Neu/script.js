/*
Aufgabe: L11_Strand: Interaktion - Aktualisierte Version
Name: Kenan Coskun
Matrikel: 265335
Datum: 08.07.22
Quellen: Code Snippets aus Jirkas Asteroid-Code aus EIA2 Vorlesungsvideos
*/
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", hndLoad);
    Aufgabe11.canvas = document.querySelector("canvas");
    Aufgabe11.crc2 = Aufgabe11.canvas.getContext("2d");
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
        drawBackground();
        Aufgabe11.canvas.addEventListener("mousedown", function (_event) {
            let hotspot = new Aufgabe11.Vector(_event.clientX - Aufgabe11.crc2.canvas.offsetLeft, _event.clientY - Aufgabe11.crc2.canvas.offsetTop);
            console.log(hotspot);
        });
        // Objekte erstellen
        // Sonne
        // Vektoren erstellen
        let posSun1 = new Aufgabe11.Vector(75, 75);
        // Sonne 1
        let sunOne = new Aufgabe11.sun(posSun1);
        // Sonne in Array pushen
        objects.push(sunOne);
        // Wolken
        // Vektoren erstellen
        let posCloud1 = new Aufgabe11.Vector(1, 0);
        let posCloud2 = new Aufgabe11.Vector(300, 25);
        let posCloud3 = new Aufgabe11.Vector(133, 75);
        let velClouds = new Aufgabe11.Vector(4, 0);
        // Wolke 1
        let cloudOne = new Aufgabe11.cloud(posCloud1, velClouds);
        // Wolke 2
        let cloudTwo = new Aufgabe11.cloud(posCloud2, velClouds);
        // Wolke 3
        let cloudThree = new Aufgabe11.cloud(posCloud3, velClouds);
        // Wolken in Array pushen
        objects.push(cloudOne, cloudTwo, cloudThree);
        // Boote
        // Vektoren erstellen
        let posBoat1 = new Aufgabe11.Vector(0, 0);
        let velBoat1 = new Aufgabe11.Vector(5, 0);
        // Boot 1
        let boatOne = new Aufgabe11.boat(posBoat1, velBoat1, 1);
        // Boot in Array
        objects.push(boatOne);
        // Möwen
        // Vektoren erstellen
        let posGull1 = new Aufgabe11.Vector(15, 10);
        let posGull2 = new Aufgabe11.Vector(55, 35);
        let velGulls = new Aufgabe11.Vector(4, 4);
        // Möwe 1
        let gullOne = new Aufgabe11.gull(posGull1, velGulls);
        // Möwe 2
        let gullTwo = new Aufgabe11.gull(posGull2, velGulls);
        // Möwen in Array pushen
        objects.push(gullOne, gullTwo);
        // Schwimmer
        // Vektoren erstellen
        let posSwimmer1 = new Aufgabe11.Vector(0, 0);
        let posSwimmer2 = new Aufgabe11.Vector(200, 25);
        let posSwimmer3 = new Aufgabe11.Vector(400, 0);
        let posSwimmer4 = new Aufgabe11.Vector(600, 25);
        let velSwimmers = new Aufgabe11.Vector(3, 0);
        // Schwimmer 1
        let swimmerOne = new Aufgabe11.swimmer(posSwimmer1, velSwimmers);
        // Schwimmer 2
        let swimmerTwo = new Aufgabe11.swimmer(posSwimmer2, velSwimmers);
        // Schwimmer 3
        let swimmerThree = new Aufgabe11.swimmer(posSwimmer3, velSwimmers);
        // Schwimmer 4
        let swimmerFour = new Aufgabe11.swimmer(posSwimmer4, velSwimmers);
        // Schwimmer in Array pushen
        objects.push(swimmerOne, swimmerTwo, swimmerThree, swimmerFour);
        // Palmen
        // Vektoren erstellen
        let posPalm1 = new Aufgabe11.Vector(0, 0);
        let posPalm2 = new Aufgabe11.Vector(900, 0);
        // Palme 1
        let palmOne = new Aufgabe11.palm(posPalm1);
        // Palme 2
        let palmTwo = new Aufgabe11.palm(posPalm2);
        // Palmen in Array pushen
        objects.push(palmOne, palmTwo);
        // Sonnenschirm
        // Vektoren erstellen
        let posUmbrella1 = new Aufgabe11.Vector(0, 50);
        // Sonnenschirm 1
        let umbrellaOne = new Aufgabe11.umbrella(posUmbrella1);
        // Sonnenschirm in Array pushen
        objects.push(umbrellaOne);
        // Animation
        window.requestAnimationFrame(function animation() {
            // crc2.clearRect(0, 0, canvas.width, canvas.height);
            drawBackground();
            for (let i = 0; i < objects.length; i++) {
                objects[i].drawObject();
                objects[i].move(1);
            }
            window.requestAnimationFrame(animation);
        });
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map