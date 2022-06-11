var Aufgabe10_1;
(function (Aufgabe10_1) {
    class cow extends Aufgabe10_1.animal {
        constructor() {
            super("cow", "grass", 5, "muuuuh");
        }
        createSong() {
            super.createSong();
        }
        eating() {
            super.eating();
        }
        doSpecialAction() {
            console.log("The cow is lying around");
        }
    }
    Aufgabe10_1.cow = cow;
})(Aufgabe10_1 || (Aufgabe10_1 = {}));
//# sourceMappingURL=cow.js.map