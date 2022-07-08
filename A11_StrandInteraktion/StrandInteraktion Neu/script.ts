/*
Aufgabe: L11_Strand: Interaktion - Aktualisierte Version
Name: Kenan Coskun
Matrikel: 265335
Datum: 08.07.22
Quellen: Code Snippets aus Jirkas Asteroid-Code aus EIA2 Vorlesungsvideos
*/

namespace Aufgabe11 {
    window.addEventListener("load", hndLoad);
    export let canvas: HTMLCanvasElement = document.querySelector("canvas");
    export let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

    // Array Superklasse
    let objects: moveObj[] = [];

    // Hintergrund Canvas

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(0.51, "#2bb6ed");
        gradient.addColorStop(0.8, "#fafa9a");
        gradient.addColorStop(1, "yellow");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    // Methoden aufrufen

    function hndLoad(): void {

        drawBackground();

        canvas.addEventListener("mousedown", function (_event: MouseEvent) {
            let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
            console.log(hotspot);
        })

        // Objekte erstellen

        // Sonne

            // Vektoren erstellen
            let posSun1: Vector = new Vector(75, 75);

            // Sonne 1
            let sunOne: sun = new sun(posSun1);

            // Sonne in Array pushen
            objects.push(sunOne);

        // Wolken

            // Vektoren erstellen
            let posCloud1: Vector = new Vector(1,0);
            let posCloud2: Vector = new Vector(300,25);
            let posCloud3: Vector = new Vector(133,75);
            let velClouds: Vector = new Vector(4,0);

            // Wolke 1
            let cloudOne: cloud = new cloud(posCloud1, velClouds);

            // Wolke 2
            let cloudTwo: cloud = new cloud(posCloud2, velClouds);

            // Wolke 3
            let cloudThree: cloud = new cloud(posCloud3, velClouds);

            // Wolken in Array pushen
            objects.push(cloudOne, cloudTwo, cloudThree);

        // Boote

            // Vektoren erstellen
            let posBoat1: Vector = new Vector(0, 0);
            let velBoat1: Vector = new Vector(5, 0);

            // Boot 1
            let boatOne: boat = new boat(posBoat1, velBoat1, 1);

            // Boot in Array
            objects.push(boatOne);

        // Möwen

            // Vektoren erstellen
            let posGull1: Vector = new Vector(15, 10);
            let posGull2: Vector = new Vector(55, 35);
            let velGulls: Vector = new Vector(4, 4);

            // Möwe 1
            let gullOne: gull = new gull(posGull1, velGulls);

            // Möwe 2
            let gullTwo: gull = new gull(posGull2, velGulls);

            // Möwen in Array pushen
            objects.push(gullOne, gullTwo);

        // Schwimmer

            // Vektoren erstellen
            let posSwimmer1: Vector = new Vector(0,0);
            let posSwimmer2: Vector = new Vector(200,25);
            let posSwimmer3: Vector = new Vector(400,0);
            let posSwimmer4: Vector = new Vector(600,25);
            let velSwimmers: Vector = new Vector(3,0);

            // Schwimmer 1
            let swimmerOne: swimmer = new swimmer(posSwimmer1, velSwimmers);

            // Schwimmer 2
            let swimmerTwo: swimmer = new swimmer(posSwimmer2, velSwimmers);

            // Schwimmer 3
            let swimmerThree: swimmer = new swimmer(posSwimmer3, velSwimmers);

            // Schwimmer 4
            let swimmerFour: swimmer = new swimmer(posSwimmer4, velSwimmers);

            // Schwimmer in Array pushen
            objects.push(swimmerOne, swimmerTwo, swimmerThree, swimmerFour);

        // Palmen

            // Vektoren erstellen
            let posPalm1: Vector = new Vector(0,0);
            let posPalm2: Vector = new Vector(900,0);

            // Palme 1
            let palmOne: palm = new palm(posPalm1);

            // Palme 2
            let palmTwo: palm = new palm(posPalm2);

            // Palmen in Array pushen
            objects.push(palmOne, palmTwo);

        // Sonnenschirm

            // Vektoren erstellen
            let posUmbrella1: Vector = new Vector(0, 50);

            // Sonnenschirm 1
            let umbrellaOne: umbrella = new umbrella(posUmbrella1);

            // Sonnenschirm in Array pushen
            objects.push(umbrellaOne);

        // Animation

        window.requestAnimationFrame(function animation() {
            // crc2.clearRect(0, 0, canvas.width, canvas.height);
            drawBackground();
            for (let i: number = 0; i < objects.length; i++) {
                objects[i].drawObject();
                objects[i].move(1);
            }
            window.requestAnimationFrame(animation);
        },)
    }
}
