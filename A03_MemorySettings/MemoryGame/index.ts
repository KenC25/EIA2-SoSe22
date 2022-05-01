/*
Aufgabe: L03_MemorySettings
Name: Kenan Coskun
Matrikel: 265335
Datum: 21.04.22
*/
namespace MemoryGame {
    let form: HTMLElement = document.querySelector("form");
    let button: HTMLButtonElement = document.querySelector("button");
    button.addEventListener("click", hndButtonClick);
    let arraySix: number [] = [1, 2, 1, 3, 2, 3];
    let arrayTwelve: number [] = [1, 3, 1, 3, 4, 7, 2, 4, 5, 7, 2, 6, 5, 6];
    let arrayEighteen: number [] = [2, 7, 9, 3, 6, 8, 2, 5, 4, 1, 7, 3, 4, 9, 5, 1, 6, 8];

function hndButtonClick() : void {
    // Fragebogen verkleinern
    form.style.display = "none";
    button.removeEventListener("click", hndButtonClick);

    // FormData übertragen in Typescript
        let formData: FormData = new FormData(document.forms[0]);
        let fieldColor: string = formData.get("backgroundCol").toString();
        let cardsColor: string = formData.get("cardsCol").toString();
        let fontColor: string = formData.get("fontCol").toString();
        let fontFam: string = formData.get("fonts").toString();
        // Kartenanzahl von String in Number
        let cardAnzTxt: string = formData.get("anzahl").toString();
        let cardAnzNum: number = parseInt(cardAnzTxt);

    // Body Stileinstellungen
        let body: any = document.body;
        body.style.backgroundColor = fieldColor;
        body.style.color = fontColor;
        body.style.fontFamily = fontFam;

        function hndCardClick (_event: MouseEvent) : void{
            const spanValue: any = _event.currentTarget;
            spanValue.className = spanValue.className.replace("numberHidden", "").trim();
            spanValue.className += "numberVisible";
            spanValue.style.color = fontColor;
            spanValue.style.fontStyle = "italic";
        }
        // Erstellung der Karten
            // Feld erstellen
                let timer: HTMLElement = document.createElement("h2");
                document.body.appendChild(timer);
                    if (cardAnzNum == 6){
                        timer.innerHTML = "Timer: <br> Level: Easy";
                    } else if (cardAnzNum == 12){
                        timer.innerHTML = "Timer: <br> Level: Normal";
                    } else if (cardAnzNum == 18){
                        timer.innerHTML = "Timer: <br> Level: Hard";
                    }
                let fieldDiv: HTMLElement = document.createElement("div");
                document.body.appendChild(fieldDiv);
                fieldDiv.setAttribute("id", "field");
                    for (let j: number = 0; j < cardAnzNum; j++){
                        let spliceArrSix: string = arraySix.splice(0, 1).toString();
                        let spliceArrTwelve: string = arrayTwelve.splice(0, 1).toString();
                        let spliceArrEighteen: string = arrayEighteen.splice(0, 1).toString();
                        let newCardDiv: HTMLDivElement = document.body.querySelector("#field");
                        newCardDiv.appendChild(document.createElement("div")).setAttribute("class", "card" +j);
                        let newSpan: HTMLElement = document.body.querySelector(".card" +j);
                        newSpan.appendChild(document.createElement("span")).setAttribute("class", "cardValue" +j);
                        // Karten erstellen 
                        let card: HTMLDivElement = document.querySelector(".card" +j);
                            card.addEventListener("click", hndCardClick);
                            if (cardAnzNum == 6){
                                card.innerHTML = `<br> <br> ${spliceArrSix}`;
                                card.style.color = cardsColor;
                            } else if (cardAnzNum == 12){
                                card.innerHTML = `<br> <br> ${spliceArrTwelve}`;
                                card.style.color = cardsColor;
                            } else if (cardAnzNum == 18){
                                card.innerHTML = `<br> <br> ${spliceArrEighteen}`;
                                card.style.color = cardsColor;
                            }
                            card.setAttribute("class", "numberHidden");
                            card.style.display = "inline-block";
                            card.style.padding = "0 10px 0 10px"
                            card.style.border = "solid";
                            card.style.borderColor = "black"
                            card.style.width = "100px";
                            card.style.height = "100px";
                            card.style.backgroundColor = cardsColor;
                            card.style.cursor = "pointer";
                    }
            } 
    }