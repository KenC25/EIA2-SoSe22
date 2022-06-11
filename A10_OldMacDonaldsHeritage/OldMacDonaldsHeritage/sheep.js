var Aufgabe10_1;
(function (Aufgabe10_1) {
    class sheep extends Aufgabe10_1.animal {
        constructor() {
            super("sheep", "grass", 3, "määh");
        }
        createSong() {
            super.createSong();
        }
        eating() {
            super.eating();
        }
        doSpecialAction() {
            console.log("The sheep runs away from the dog");
        }
    }
    Aufgabe10_1.sheep = sheep;
})(Aufgabe10_1 || (Aufgabe10_1 = {}));
//# sourceMappingURL=sheep.js.map