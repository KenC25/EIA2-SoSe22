var Aufgabe10_1;
(function (Aufgabe10_1) {
    class dog extends Aufgabe10_1.animal {
        constructor() {
            super("dog", "dog food", 2, "wuff");
        }
        createSong() {
            super.createSong();
        }
        eating() {
            super.eating();
        }
        doSpecialAction() {
            console.log("The dog tries to catch the sheep");
        }
    }
    Aufgabe10_1.dog = dog;
})(Aufgabe10_1 || (Aufgabe10_1 = {}));
//# sourceMappingURL=dog.js.map