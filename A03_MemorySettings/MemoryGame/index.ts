namespace MemoryGame {
    let form: HTMLElement = document.querySelector("form");
    let button: HTMLButtonElement = document.querySelector("button");
    button.addEventListener("click", hndButtonClick);
    let arraySix: number [] = [1, 2, 1, 3, 2, 3];
    let arrayTwelve: number [] = [1, 3, 1, 3, 4, 7, 2, 4, 5, 7, 2, 6, 5, 6];
    let arrayEighteen: number [] = [2, 7, 9, 3, 6, 8, 2, 5, 4, 1, 7, 3, 4, 9, 5, 1, 6, 8];

function hndButtonClick() : void {
    // Fragebogen verkleinern
    form.style.visibility = "hidden";
    form.style.width = "5px";
    form.style.height = "5px";
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

        function hndCardClick (_event: MouseEvent){
            const spanValue: any = document.querySelector(".numberHidden");
            spanValue.className = spanValue.className.replace(" numberHidden", "").trim();
            spanValue.className += " numberVisible";
        }

        // Wenn Anzahl der Karten == 6
                if (cardAnzNum == 6){
                    for (let i: number = 0; i < 1; i++){
                        let fieldDiv: HTMLElement = document.createElement("div");
                        document.body.appendChild(fieldDiv);
                        fieldDiv.setAttribute("id", "field");
                        // Feld erstellen
                        for (let j: number = 0; j < 6; j++){
                            let newCardDiv: HTMLDivElement = document.body.querySelector("#field");
                            newCardDiv.appendChild(document.createElement("div")).setAttribute("class", "card" +j);
                            let newSpan: HTMLElement = document.body.querySelector(".card" +j);
                            newSpan.appendChild(document.createElement("span")).setAttribute("class", "cardValue" +j);
                            // Karten erstellen 
                            let card: HTMLDivElement = document.querySelector(".card" +j);
                                card.setAttribute("class", "cardClick");
                                card.addEventListener("click", hndCardClick);
                                card.style.display = "inline-block";
                                card.style.padding = "0 10px 0 10px"
                                card.style.border = "solid";
                                card.style.borderColor = "black"
                                card.style.width = "100px";
                                card.style.height = "100px";
                                card.style.backgroundColor = cardsColor;
                                card.style.cursor = "pointer";
                            // Kartenwerte zuteilen
                            let cardWert: HTMLSpanElement = document.querySelector(".cardValue" +j);
                                cardWert.innerHTML = arraySix.splice(0, 1).toString();
                                cardWert.className += " numberHidden"
                                cardWert.style.position = "relative";
                                cardWert.style.top = "42.5px";

                        }
                    }
                } 
                // Wenn Anzahl der Karten == 12
                else if(cardAnzNum == 12){
                    for (let i: number = 0; i < 1; i++){
                        let fieldDiv: HTMLElement = document.createElement("div");
                        document.body.appendChild(fieldDiv);
                        fieldDiv.setAttribute("id", "field");
                        // Feld erstellen
                        for (let j: number = 0; j < 12; j++){
                            let newCardDiv: HTMLDivElement = document.body.querySelector("#field");
                            newCardDiv.appendChild(document.createElement("div")).setAttribute("class", "card" +j);
                            let newSpan: HTMLElement = document.body.querySelector(".card" +j);
                            newSpan.appendChild(document.createElement("span")).setAttribute("class", "cardValue" +j);
                            // Karten erstellen
                            let card: HTMLDivElement = document.querySelector(".card" +j);
                                card.setAttribute("class", "cardClick");
                                card.addEventListener("click", hndCardClick);
                                card.style.display = "inline-block";
                                card.style.padding = "0 10px 0 10px"
                                card.style.border = "solid";
                                card.style.borderColor = "black"
                                card.style.width = "100px";
                                card.style.height = "100px";
                                card.style.backgroundColor = cardsColor;
                                card.style.cursor = "pointer";
                                // Kartenwerte zuteilen
                                let cardWert: HTMLSpanElement = document.querySelector(".cardValue" +j);
                                    cardWert.innerHTML = arrayTwelve.splice(0, 1).toString();
                                    cardWert.className += " numberHidden"
                                    cardWert.style.position = "relative";
                                    cardWert.style.top = "42.5px";
                        }
                    }
                }
                // Wenn Anzahl der Karten == 18
                else {
                        for (let i: number = 0; i < 1; i++){
                            let fieldDiv: HTMLElement = document.createElement("div");
                            document.body.appendChild(fieldDiv);
                            fieldDiv.setAttribute("id", "field");
                            // Feld erstellen
                            for (let j: number = 0; j < 18; j++){
                            let newCardDiv: HTMLDivElement = document.body.querySelector("#field");
                            newCardDiv.appendChild(document.createElement("div")).setAttribute("class", "card" +j);
                            let newSpan: HTMLElement = document.body.querySelector(".card" +j);
                            newSpan.appendChild(document.createElement("span")).setAttribute("class", "cardValue" +j);
                            // Karten erstellen
                            let card: HTMLDivElement = document.querySelector(".card" +j);
                                card.setAttribute("class", "cardClick");
                                card.addEventListener("click", hndCardClick);
                                card.style.display = "inline-block";
                                card.style.padding = "0 10px 0 10px"
                                card.style.border = "solid";
                                card.style.borderColor = "black"
                                card.style.width = "100px";
                                card.style.height = "100px";
                                card.style.backgroundColor = cardsColor;
                                card.style.cursor = "pointer";
                                // Kartenwerte zuteilen
                                let cardWert: HTMLSpanElement = document.querySelector(".cardValue" +j);
                                    cardWert.innerHTML = arrayEighteen.splice(0, 1).toString();
                                    cardWert.className += " numberHidden"
                                    cardWert.style.position = "relative";
                                    cardWert.style.top = "42.5px";
                    }
                } 
            }
        }
    }