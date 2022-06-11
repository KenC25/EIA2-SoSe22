var Aufgabe10_1;
(function (Aufgabe10_1) {
    //  Create class animal
    class animal {
        constructor(_type, _foodType, _foodAmount, _animalSound) {
            this.type = _type;
            this.foodType = _foodType;
            this.foodAmount = _foodAmount;
            this.animalSound = _animalSound;
        }
        createSong() {
            console.log(`Old MacDonald has a farm eieio and on his farm he has a ${this.type} eieio with a ${this.animalSound} ${this.animalSound} here and a ${this.animalSound} ${this.animalSound} there, here a ${this.animalSound}, there a ${this.animalSound}, everywhere a ${this.animalSound} ${this.animalSound}.`);
        }
        eating() {
            console.log(`After singing the ${this.type} is hungry. The ${this.type} eats everyday ${this.foodAmount} amount of ${this.foodType}.`);
        }
        doSpecialAction() { }
    }
    Aufgabe10_1.animal = animal;
})(Aufgabe10_1 || (Aufgabe10_1 = {}));
//# sourceMappingURL=animal.js.map