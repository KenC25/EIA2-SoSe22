/*
Aufgabe: L10.2_Strand: Polymorphie
Name: Kenan Coskun
Matrikel: 265335
Datum: 16.06.22
Quellen: In Zusammenarbeit mit Zara Kocak
*/

namespace Aufgabe10_2 {
    window.addEventListener("load", hndLoad);
    export let canvas: HTMLCanvasElement = document.querySelector("canvas");
    export let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    export let animX: number = 0;
    export let animXGulls: number = 0;
    export let animYGulls: number = 0;
    export let animY: number = 0;

    // Array Superklasse
    let objects: moveObj [] = [];

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

        // Objekte erstellen

        // Sonne
            let sunOne: sun = new sun();
            objects.push(sunOne);

        // Wolken
            let cloudOne: cloud1 = new cloud1();
            let cloudTwo: cloud2 = new cloud2();
            let cloudThree: cloud3 = new cloud3();
            objects.push(cloudOne, cloudTwo, cloudThree);

        // Boote
            let boatOne: boat1 = new boat1();
            objects.push(boatOne);

        // Möwen
            let gullOne: gull1 = new gull1();
            let gullTwo: gull2 = new gull2();
            objects.push(gullOne, gullTwo);

        // Schwimmer
            let swimmerOne: swimmer1 = new swimmer1();
            let swimmerTwo: swimmer2 = new swimmer2();
            let swimmerThree: swimmer3 = new swimmer3();
            let swimmerFour: swimmer4 = new swimmer4();
            objects.push(swimmerOne, swimmerTwo, swimmerThree, swimmerFour);

        // Palmen
            let palmOne: palm1 = new palm1();
            let palmTwo: palm2 = new palm2();
            objects.push(palmOne, palmTwo);

        // Umbrella
            let umbrellaOne: umbrella1 = new umbrella1();
            objects.push(umbrellaOne);

            window.requestAnimationFrame(function animation () {
            crc2.clearRect(0, 0, canvas.width, canvas.height);
            drawBackground();
            animX += 0.3;
            animY += 0.3;
            animXGulls += 1.5;
            animYGulls += 1.5;
            for (let i: number = 0; i<=13; i++){
                objects[i].drawObject();
            }
            window.requestAnimationFrame(animation);
        })
    }
}
