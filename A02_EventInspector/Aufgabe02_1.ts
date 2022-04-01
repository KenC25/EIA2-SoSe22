/*
Aufgabe: L02.1_EventInspector
Name: Kenan Coskun
Matrikel: 265335
Datum: 01.04.22
*/
namespace Aufgabe2_1 {
    window.addEventListener("load", handleLoad);

    function handleLoad (): void {
        let buttonOne: HTMLElement = document.getElementById("button1");
        let divOne: HTMLElement = document.getElementById("div1");
        let divTwo: HTMLElement = document.getElementById("div2");

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        buttonOne.addEventListener("click", buttonClick);
        divOne.addEventListener("click", logInfo);
        divTwo.addEventListener("click", logInfo);
    }

    function setInfoBox (_event: MouseEvent): void {
        let x: number = _event.pageX;
        let y: number = _event.pageY;
        let spanElmnt: HTMLElement = document.getElementById("span1");
        spanElmnt.style.visibility = "visible";
        spanElmnt.style.top = `${y + 7}px`;
        spanElmnt.style.left = `${x + 5}px`;
        spanElmnt.innerHTML = `Die X-Position: ${x} <br> Die Y-Position: ${y}`;
    }

    function logInfo (_event: Event): void {
        let eventTyp: string = _event.type;
        let eventTarget: any = _event.target;
        let curEventTarget: any = _event.currentTarget;
        let wholeEvent: any = _event;
        console.log(`Event-Type: ${eventTyp}`);
        console.log(`Target: ${eventTarget}`);
        console.log(`Current target: ${curEventTarget}`);
        console.log(`Eventobject: ${wholeEvent}`);
    }

    function buttonClick (_event: Event): void {
        window.alert("Hallo Welt!");
    }
}