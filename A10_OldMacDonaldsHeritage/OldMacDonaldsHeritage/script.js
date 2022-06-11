/*
Aufgabe: L10.1_OldMacDonaldsHeritage
Name: Kenan Coskun
Matrikel: 265335
Datum: 11.06.22
Quellen: In Zusammenarbeit mit Zara Kocak
*/
var Aufgabe10_1;
(function (Aufgabe10_1) {
    window.addEventListener("load", hndLoad);
    // Create animals and push them in barn array
    Aufgabe10_1.barn = [];
    let catOne = new Aufgabe10_1.cat();
    let cowOne = new Aufgabe10_1.cow();
    let chickenOne = new Aufgabe10_1.chicken();
    let sheepOne = new Aufgabe10_1.sheep();
    let dogOne = new Aufgabe10_1.dog();
    Aufgabe10_1.barn.push(catOne);
    Aufgabe10_1.barn.push(cowOne);
    Aufgabe10_1.barn.push(chickenOne);
    Aufgabe10_1.barn.push(sheepOne);
    Aufgabe10_1.barn.push(dogOne);
    function hndLoad() {
        // Call the methods
        for (let i = 0; i <= 4; i++) {
            Aufgabe10_1.barn[i].createSong();
            Aufgabe10_1.barn[i].eating();
            Aufgabe10_1.barn[i].doSpecialAction();
        }
    }
})(Aufgabe10_1 || (Aufgabe10_1 = {}));
//# sourceMappingURL=script.js.map