/*
Aufgabe: L01.1_Zufallsgedicht
Name: Kenan Coskun
Matrikel: 265335
Datum: 26.03.22
*/

let names:string [] = ["Harry","Hermine","Ron","Hagrid","Snape","Dumbledore"];
let verbs:string [] = ["braut","liebt","studiert","hasst","zaubert","zerstört"];
let objects:string [] = ["Zaubertränke","den Gnom","Lupin","Hogwarts","die Karte des Rumtreibers","Dementoren"];

for (let i:number = names.length; i >= 1; i--) {
    console.log(getVerse());
}

function getVerse():any {
    let randomNumber1:number = Math.floor(Math.random() * names.length);
    let randomNumber2:number = Math.floor(Math.random() * verbs.length);
    let randomNumber3:number = Math.floor(Math.random() * objects.length);
    return names.splice(randomNumber1,1) + " " + verbs.splice(randomNumber2,1) + " " + objects.splice(randomNumber3,1);
}