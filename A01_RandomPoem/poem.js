"use strict";
let names = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects = ["Zaubertränke", "den Gnom", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
for (let i = names.length; i >= 1; i--) {
    console.log(getVerse());
}
function getVerse() {
    let randomNumber1 = Math.floor(Math.random() * names.length);
    let randomNumber2 = Math.floor(Math.random() * verbs.length);
    let randomNumber3 = Math.floor(Math.random() * objects.length);
    return names.splice(randomNumber1, 1) + " " + verbs.splice(randomNumber2, 1) + " " + objects.splice(randomNumber3, 1);
}
//# sourceMappingURL=poem.js.map