"use strict";
/*
Aufgabe: L02.1_EventInspector
Name: Kenan Coskun
Matrikel: 265335
Datum: 01.04.22
*/
var Aufgabe2_1;
(function (Aufgabe2_1) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let buttonOne = document.getElementById("button1");
        let divOne = document.getElementById("div1");
        let divTwo = document.getElementById("div2");
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        buttonOne.addEventListener("click", buttonClick);
        divOne.addEventListener("click", logInfo);
        divTwo.addEventListener("click", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.pageX;
        let y = _event.pageY;
        let spanElmnt = document.getElementById("span1");
        spanElmnt.style.visibility = "visible";
        spanElmnt.style.top = `${y + 7}px`;
        spanElmnt.style.left = `${x + 5}px`;
        spanElmnt.innerHTML = `Die X-Position: ${x} <br> Die Y-Position: ${y}`;
    }
    function logInfo(_event) {
        let eventTyp = _event.type;
        let eventTarget = _event.target;
        let curEventTarget = _event.currentTarget;
        let wholeEvent = _event;
        console.log(`Event-Type: ${eventTyp}`);
        console.log(`Target: ${eventTarget}`);
        console.log(`Current target: ${curEventTarget}`);
        console.log(`Eventobject: ${wholeEvent}`);
    }
    function buttonClick(_event) {
        window.alert("Hallo Welt!");
    }
})(Aufgabe2_1 || (Aufgabe2_1 = {}));
//# sourceMappingURL=Aufgabe02_1.js.map