var MemoryGame;
(function (MemoryGame) {
    let form = document.querySelector("form");
    let button = document.querySelector("button");
    button.addEventListener("click", hndButtonClick);
    let arraySix = [1, 2, 1, 3, 2, 3];
    let arrayTwelve = [1, 3, 1, 3, 4, 7, 2, 4, 5, 7, 2, 6, 5, 6];
    let arrayEighteen = [2, 7, 9, 3, 6, 8, 2, 5, 4, 1, 7, 3, 4, 9, 5, 1, 6, 8];
    function hndButtonClick() {
        // Fragebogen verkleinern
        form.style.visibility = "hidden";
        form.style.width = "5px";
        form.style.height = "5px";
        button.removeEventListener("click", hndButtonClick);
        // FormData übertragen in Typescript
        let formData = new FormData(document.forms[0]);
        let fieldColor = formData.get("backgroundCol").toString();
        let cardsColor = formData.get("cardsCol").toString();
        let fontColor = formData.get("fontCol").toString();
        let fontFam = formData.get("fonts").toString();
        // Kartenanzahl von String in Number
        let cardAnzTxt = formData.get("anzahl").toString();
        let cardAnzNum = parseInt(cardAnzTxt);
        // Body Stileinstellungen
        let body = document.body;
        body.style.backgroundColor = fieldColor;
        body.style.color = fontColor;
        body.style.fontFamily = fontFam;
        function hndCardClick(_event) {
            const spanValue = document.querySelector(".numberHidden");
            spanValue.className = spanValue.className.replace(" numberHidden", "").trim();
            spanValue.className += " numberVisible";
        }
        // Wenn Anzahl der Karten == 6
        if (cardAnzNum == 6) {
            for (let i = 0; i < 1; i++) {
                let fieldDiv = document.createElement("div");
                document.body.appendChild(fieldDiv);
                fieldDiv.setAttribute("id", "field");
                // Feld erstellen
                for (let j = 0; j < 6; j++) {
                    let newCardDiv = document.body.querySelector("#field");
                    newCardDiv.appendChild(document.createElement("div")).setAttribute("class", "card" + j);
                    let newSpan = document.body.querySelector(".card" + j);
                    newSpan.appendChild(document.createElement("span")).setAttribute("class", "cardValue" + j);
                    // Karten erstellen 
                    let card = document.querySelector(".card" + j);
                    card.setAttribute("class", "cardClick");
                    card.addEventListener("click", hndCardClick);
                    card.style.display = "inline-block";
                    card.style.padding = "0 10px 0 10px";
                    card.style.border = "solid";
                    card.style.borderColor = "black";
                    card.style.width = "100px";
                    card.style.height = "100px";
                    card.style.backgroundColor = cardsColor;
                    card.style.cursor = "pointer";
                    // Kartenwerte zuteilen
                    let cardWert = document.querySelector(".cardValue" + j);
                    cardWert.innerHTML = arraySix.splice(0, 1).toString();
                    cardWert.className += " numberHidden";
                    cardWert.style.position = "relative";
                    cardWert.style.top = "42.5px";
                }
            }
        }
        // Wenn Anzahl der Karten == 12
        else if (cardAnzNum == 12) {
            for (let i = 0; i < 1; i++) {
                let fieldDiv = document.createElement("div");
                document.body.appendChild(fieldDiv);
                fieldDiv.setAttribute("id", "field");
                // Feld erstellen
                for (let j = 0; j < 12; j++) {
                    let newCardDiv = document.body.querySelector("#field");
                    newCardDiv.appendChild(document.createElement("div")).setAttribute("class", "card" + j);
                    let newSpan = document.body.querySelector(".card" + j);
                    newSpan.appendChild(document.createElement("span")).setAttribute("class", "cardValue" + j);
                    // Karten erstellen
                    let card = document.querySelector(".card" + j);
                    card.setAttribute("class", "cardClick");
                    card.addEventListener("click", hndCardClick);
                    card.style.display = "inline-block";
                    card.style.padding = "0 10px 0 10px";
                    card.style.border = "solid";
                    card.style.borderColor = "black";
                    card.style.width = "100px";
                    card.style.height = "100px";
                    card.style.backgroundColor = cardsColor;
                    card.style.cursor = "pointer";
                    // Kartenwerte zuteilen
                    let cardWert = document.querySelector(".cardValue" + j);
                    cardWert.innerHTML = arrayTwelve.splice(0, 1).toString();
                    cardWert.className += " numberHidden";
                    cardWert.style.position = "relative";
                    cardWert.style.top = "42.5px";
                }
            }
        }
        // Wenn Anzahl der Karten == 18
        else {
            for (let i = 0; i < 1; i++) {
                let fieldDiv = document.createElement("div");
                document.body.appendChild(fieldDiv);
                fieldDiv.setAttribute("id", "field");
                // Feld erstellen
                for (let j = 0; j < 18; j++) {
                    let newCardDiv = document.body.querySelector("#field");
                    newCardDiv.appendChild(document.createElement("div")).setAttribute("class", "card" + j);
                    let newSpan = document.body.querySelector(".card" + j);
                    newSpan.appendChild(document.createElement("span")).setAttribute("class", "cardValue" + j);
                    // Karten erstellen
                    let card = document.querySelector(".card" + j);
                    card.setAttribute("class", "cardClick");
                    card.addEventListener("click", hndCardClick);
                    card.style.display = "inline-block";
                    card.style.padding = "0 10px 0 10px";
                    card.style.border = "solid";
                    card.style.borderColor = "black";
                    card.style.width = "100px";
                    card.style.height = "100px";
                    card.style.backgroundColor = cardsColor;
                    card.style.cursor = "pointer";
                    // Kartenwerte zuteilen
                    let cardWert = document.querySelector(".cardValue" + j);
                    cardWert.innerHTML = arrayEighteen.splice(0, 1).toString();
                    cardWert.className += " numberHidden";
                    cardWert.style.position = "relative";
                    cardWert.style.top = "42.5px";
                }
            }
        }
    }
})(MemoryGame || (MemoryGame = {}));
