var Aufgabe10_1;
(function (Aufgabe10_1) {
    class cat extends Aufgabe10_1.animal {
        constructor() {
            super("cat", "cat food", 2, "miau");
        }
        createSong() {
            super.createSong();
        }
        eating() {
            super.eating();
        }
        doSpecialAction() {
            console.log("The cat runs in circles");
        }
    }
    Aufgabe10_1.cat = cat;
})(Aufgabe10_1 || (Aufgabe10_1 = {}));
//# sourceMappingURL=cat.js.map