var Aufgabe10_1;
(function (Aufgabe10_1) {
    class chicken extends Aufgabe10_1.animal {
        constructor() {
            super("chicken", "wheat", 2, "kikiriki");
        }
        createSong() {
            super.createSong();
        }
        eating() {
            super.eating();
        }
        doSpecialAction() {
            console.log("The chicken lays an egg");
        }
    }
    Aufgabe10_1.chicken = chicken;
})(Aufgabe10_1 || (Aufgabe10_1 = {}));
//# sourceMappingURL=chicken.js.map