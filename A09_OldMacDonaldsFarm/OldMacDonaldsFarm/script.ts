/*
Aufgabe: L09.1_OldMacDonaldsFarm
Name: Kenan Coskun
Matrikel: 265335
Datum: 21.05.22
Quellen: In Zusammenarbeit mit Zara Kocak
*/

namespace Aufgabe09_1 {

    window.addEventListener("load", hndLoad);

    function hndLoad (): void {

        // Create canvas

        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(0.51, "#478947");
        gradient.addColorStop(0.85, "#3a683a");
        gradient.addColorStop(1, "#64af64");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 800);
        crc2.font = "64px Calibri";
        crc2.fillStyle = "#3a683a";
        crc2.fillText("Old MacDonalds Farm", 280, 75, 400);
        crc2.font = "24px Calibri";
        crc2.fillStyle = "grey";
        crc2.fillText("Öffne die Browserkonsole", 360, 300, 400);

            // Sonne

            crc2.beginPath();
            crc2.arc(75, 75, 40, 0, Math.PI * 2, true);
            let gradientSun: CanvasGradient = crc2.createLinearGradient(35, 35, 115, 115);
            gradientSun.addColorStop(0.2, "#fafa9a");
            gradientSun.addColorStop(0.5, "yellow");
            gradientSun.addColorStop(0.8, "#fafa9a");
            gradientSun.addColorStop(1, "#fafa9a");
            crc2.strokeStyle = "#fafa9a";
            crc2.fillStyle = gradientSun;
            crc2.fill();
            crc2.closePath();

            // Wolken

                //  Wolke 1

                crc2.beginPath();
                crc2.strokeStyle = "white";
                crc2.moveTo(800, 115);
                crc2.arc(800, 115, 30, 0, Math.PI * 2, true);
                crc2.moveTo(830, 95);
                crc2.arc(830, 95, 30, 0, Math.PI * 2, true);
                crc2.moveTo(870, 95);
                crc2.arc(870, 95, 20, 0, Math.PI * 2, true);
                crc2.moveTo(900, 115);
                crc2.arc(900, 115, 30, 0, Math.PI * 2, true);
                crc2.fillStyle = "white";
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
                crc2.fillRect(800, 95.5, 100, 50);
                crc2.fillStyle = "white";

                //  Wolke 2

                crc2.beginPath();
                crc2.strokeStyle = "white";
                crc2.moveTo(650, 200);
                crc2.arc(650, 200, 30, 0, Math.PI * 2, true);
                crc2.moveTo(690, 200);
                crc2.arc(690, 200, 30, 0, Math.PI * 2, true);
                crc2.moveTo(730, 200);
                crc2.arc(730, 200, 30, 0, Math.PI * 2, true);
                crc2.moveTo(670, 180);
                crc2.arc(670, 180, 30, 0, Math.PI * 2, true);
                crc2.moveTo(705, 175);
                crc2.arc(705, 175, 20, 0, Math.PI * 2, true);
                crc2.stroke();
                crc2.fillStyle = "white";
                crc2.fill();
                crc2.closePath();
                crc2.beginPath();
                crc2.fillRect(650, 200, 80, 30.5);
                crc2.fillStyle = "white";
                crc2.fill();
                crc2.closePath();

            // Zaun

            crc2.beginPath();
            crc2.moveTo(0, 480);
            crc2.fillStyle = "#654d40";
            crc2.fillRect(0, 480, 1000, 20);
            crc2.moveTo(0, 520);
            crc2.fillRect(0, 520, 1000, 20);
            crc2.moveTo(0, 560);
            crc2.fillRect(0, 560, 1000, 20);
            crc2.moveTo(15, 450);
            crc2.fillRect(15, 450, 20, 200);
            crc2.moveTo(165, 450);
            crc2.fillRect(165, 450, 20, 200);
            crc2.moveTo(315, 450);
            crc2.fillRect(315, 450, 20, 200);
            crc2.moveTo(465, 450);
            crc2.fillRect(465, 450, 20, 200);
            crc2.moveTo(615, 450);
            crc2.fillRect(615, 450, 20, 200);
            crc2.moveTo(765, 450);
            crc2.fillRect(765, 450, 20, 200);
            crc2.moveTo(915, 450);
            crc2.fillRect(915, 450, 20, 200);
            crc2.closePath();

        //  Create class animal

        class animal {
            type: string;
            foodType: string;
            foodAmount: number;
            animalSound: string;
        
        constructor (_type: string, _foodType: string, _foodAmount: number, _animalSound: string){
            this.set(_type, _foodType, _foodAmount, _animalSound);
        }

        set (_type: string, _foodType: string, _foodAmount: number, _animalSound: string): void {
            this.type = _type;
            this.foodType = _foodType;
            this.foodAmount = _foodAmount;
            this.animalSound = _animalSound;
        }

        }

        // Create animals and push them in barn array

        let barn: animal[] = [];
            let cat: animal = new animal("cat", "cat food", 2, "miau");
            let cow: animal = new animal("cow", "grass", 5, "muuuuh");
            let chicken: animal = new animal("chicken", "wheat", 4, "kikiriki");
            let sheep: animal = new animal("sheep", "hay", 3, "määäh");
            let dog: animal = new animal("dog", "dog food", 2, "wuff");
            barn.push(cat);
            barn.push(cow);
            barn.push(chicken);
            barn.push(sheep);
            barn.push(dog);

        // Create food storage

        let foodStorage: food [] = [];

        interface food {
            amountAvailable: number;
        }

        let catFood: food = {amountAvailable: 4};
        let dogFood: food = {amountAvailable: 5};
        let grass: food = {amountAvailable: 10};
        let wheat: food = {amountAvailable: 10};
        let hay: food = {amountAvailable: 7};

        foodStorage.push(catFood);
        foodStorage.push(grass);
        foodStorage.push(wheat);
        foodStorage.push(hay);
        foodStorage.push(dogFood);

        // Create song function

        function createSong(_num: number): void{
            console.log(`Old MacDonald has a farm eieio and on his farm he has a ${barn[_num].type} eieio with a ${barn[_num].animalSound} ${barn[_num].animalSound} here and a ${barn[_num].animalSound} ${barn[_num].animalSound} there, here a ${barn[_num].animalSound}, there a ${barn[_num].animalSound}, everywhere a ${barn[_num].animalSound} ${barn[_num].animalSound}.`);
        }

        //  Create eating function

        function eating(_num: number){
            let finalAmount: number = foodStorage[_num].amountAvailable - barn[_num].foodAmount;
            console.log(`After singing the ${barn[_num].type} is hungry. The ${barn[_num].type} eats everyday ${barn[_num].foodAmount} amount of ${barn[_num].foodType}. The farmer has ${foodStorage[_num].amountAvailable} amount of ${barn[_num].foodType} in his food storage. After the ${barn[_num].type} has eaten, he has only ${finalAmount} amount of ${barn[_num].foodType} left.`);
        }
        
        console.log("Day One:")

        // Call functions
        
        for (let i: number = 0; i <= 4; i++){
            createSong(i);
        }

        for (let i: number = 0; i <=4; i++){
            eating(i);
        }
    }
}