/*
Aufgabe: L10.1_OldMacDonaldsHeritage
Name: Kenan Coskun
Matrikel: 265335
Datum: 11.06.22
Quellen: In Zusammenarbeit mit Zara Kocak
*/

namespace Aufgabe10_1 {
    window.addEventListener("load", hndLoad);
    
    // Create animals and push them in barn array

    export let barn: animal[] = [];
    let catOne: cat = new cat();
    let cowOne: cow = new cow();
    let chickenOne: chicken = new chicken();
    let sheepOne: sheep = new sheep();
    let dogOne: dog = new dog();
    barn.push(catOne);
    barn.push(cowOne);
    barn.push(chickenOne);
    barn.push(sheepOne);
    barn.push(dogOne);
    
    function hndLoad(): void{
            
    // Call the methods

    for (let i: number = 0; i <= 4; i++){
        barn[i].createSong();
        barn[i].eating();
        barn[i].doSpecialAction();
    }
}
}