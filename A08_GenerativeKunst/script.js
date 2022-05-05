var GenArt;
(function (GenArt) {
    // Deklaration der Canvas Variable
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    // Deklaration color Array
    let colors = ["blue", "red", "green", "orange", "yellow"];
    // Deklaration randomNumber
    function randomNumber(_add) {
        return Math.floor(Math.random() * 250) + _add;
    }
    // Deklaration randomArrayNumber
    function randomArrayNumber() {
        return Math.floor(Math.random() * 5);
    }
    // Hintergrund laden
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "orange");
        gradient.addColorStop(0.5, "salmon");
        gradient.addColorStop(0.6, "lightblue");
        gradient.addColorStop(1, "blue");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    drawBackground();
    // Zeichnung erstellen
    function draw(_position) {
        crc2.beginPath();
        crc2.arc(randomNumber(100), randomNumber(100), randomNumber(100), 0, 2 * Math.PI);
        crc2.rect(randomNumber(100), randomNumber(100), randomNumber(100), randomNumber(100));
        crc2.stroke();
        crc2.strokeStyle = colors.splice(randomArrayNumber(), 1).toString();
        //crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(randomNumber(100), randomNumber(100), randomNumber(0), 0, 2 * Math.PI);
        crc2.rect(randomNumber(100), randomNumber(100), randomNumber(100), randomNumber(100));
        crc2.stroke();
        crc2.closePath();
    }
    for (let i = 0; i <= 20; i++) {
        draw({ x: 400, y: 100 });
    }
})(GenArt || (GenArt = {}));
