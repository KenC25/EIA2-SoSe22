/*
Aufgabe: L08.2_Strand: Canvas
Name: Kenan Coskun
Matrikel: 265335
Datum: 14.05.22
Quellen: In Zusammenarbeit mit Zara Kocak
*/
var Aufgabe8_2;
(function (Aufgabe8_2) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        // Canvas übernehmen
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        // Hintergrund zeichnen
        function drawBackground() {
            let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0.5, "lightblue");
            gradient.addColorStop(0.51, "#2bb6ed");
            gradient.addColorStop(0.8, "#fafa9a");
            gradient.addColorStop(1, "yellow");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            //Sonne
            crc2.beginPath();
            crc2.arc(75, 75, 40, 0, Math.PI * 2, true);
            let gradientSun = crc2.createLinearGradient(35, 35, 115, 115);
            gradientSun.addColorStop(0.2, "#fafa9a");
            gradientSun.addColorStop(0.5, "yellow");
            gradientSun.addColorStop(0.8, "#fafa9a");
            gradientSun.addColorStop(1, "#fafa9a");
            crc2.strokeStyle = "#fafa9a";
            crc2.fillStyle = gradientSun;
            crc2.fill();
            crc2.closePath();
        }
        drawBackground();
        // Mittelgrund zeichnen
        function drawMiddleground() {
            //Möwen zeichnen
            function drawGulls() {
                //Möwe 1
                crc2.beginPath();
                crc2.moveTo(250, 75);
                crc2.quadraticCurveTo(275, 40, 300, 75);
                crc2.moveTo(300, 75);
                crc2.quadraticCurveTo(325, 40, 350, 75);
                crc2.moveTo(350, 75);
                crc2.quadraticCurveTo(325, 50, 300, 75);
                crc2.moveTo(300, 75);
                crc2.quadraticCurveTo(275, 50, 250, 75);
                crc2.fillStyle = "black";
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Möwe 2
                crc2.beginPath();
                crc2.moveTo(150, 150);
                crc2.quadraticCurveTo(175, 110, 200, 150);
                crc2.moveTo(200, 150);
                crc2.quadraticCurveTo(225, 110, 250, 150);
                crc2.moveTo(250, 150);
                crc2.quadraticCurveTo(225, 120, 200, 150);
                crc2.moveTo(200, 150);
                crc2.quadraticCurveTo(175, 120, 150, 150);
                crc2.fillStyle = "black";
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
            }
            drawGulls();
            function drawClouds() {
                //Wolke 1
                crc2.beginPath();
                crc2.strokeStyle = "white";
                crc2.moveTo(500, 95);
                crc2.arc(500, 95, 30, 0, Math.PI * 2, true);
                crc2.moveTo(530, 75);
                crc2.arc(530, 75, 30, 0, Math.PI * 2, true);
                crc2.moveTo(560, 75);
                crc2.arc(560, 75, 20, 0, Math.PI * 2, true);
                crc2.moveTo(560, 75);
                crc2.arc(560, 75, 20, 0, Math.PI * 2, true);
                crc2.moveTo(593, 97);
                crc2.arc(593, 97, 28, 0, Math.PI * 2, true);
                crc2.fillStyle = "white";
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
                crc2.fillRect(500, 75.5, 100, 50);
                crc2.fillStyle = "white";
                //Wolke 2
                crc2.beginPath();
                crc2.strokeStyle = "white";
                crc2.moveTo(800, 115);
                crc2.arc(800, 115, 30, 0, Math.PI * 2, true);
                crc2.moveTo(830, 95);
                crc2.arc(830, 95, 30, 0, Math.PI * 2, true);
                crc2.moveTo(870, 95);
                crc2.arc(870, 95, 20, 0, Math.PI * 2, true);
                crc2.moveTo(900, 115);
                crc2.arc(900, 115, 30, 0, Math.PI * 2, true);
                crc2.fillStyle = "white";
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
                crc2.fillRect(800, 95.5, 100, 50);
                crc2.fillStyle = "white";
                //Wolke 3
                crc2.beginPath();
                crc2.strokeStyle = "white";
                crc2.moveTo(650, 200);
                crc2.arc(650, 200, 30, 0, Math.PI * 2, true);
                crc2.moveTo(690, 200);
                crc2.arc(690, 200, 30, 0, Math.PI * 2, true);
                crc2.moveTo(730, 200);
                crc2.arc(730, 200, 30, 0, Math.PI * 2, true);
                crc2.moveTo(670, 180);
                crc2.arc(670, 180, 30, 0, Math.PI * 2, true);
                crc2.moveTo(705, 175);
                crc2.arc(705, 175, 20, 0, Math.PI * 2, true);
                crc2.stroke();
                crc2.fillStyle = "white";
                crc2.fill();
                crc2.closePath();
                crc2.beginPath();
                crc2.fillRect(650, 200, 80, 30.5);
                crc2.fillStyle = "white";
                crc2.fill();
                crc2.closePath();
            }
            drawClouds();
            function drawBoat() {
                //Boot
                crc2.beginPath();
                crc2.moveTo(75, 269.5);
                crc2.lineTo(105, 269.5);
                crc2.lineTo(105, 300);
                crc2.lineTo(75, 269.5);
                crc2.strokeStyle = "#7c6c48";
                crc2.stroke();
                crc2.fillStyle = "#7c6c48";
                crc2.fill();
                crc2.fillRect(105, 269.2, 50, 31);
                crc2.moveTo(155, 269.5);
                crc2.lineTo(185, 269.5);
                crc2.lineTo(155, 300);
                crc2.lineTo(155, 269.5);
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Segel Rechts
                crc2.beginPath();
                crc2.moveTo(120, 270);
                crc2.fillRect(120, 270, 5, -55);
                crc2.moveTo(125, 220);
                crc2.lineTo(150, 250);
                crc2.lineTo(125, 250);
                crc2.lineTo(125, 220);
                crc2.strokeStyle = "white";
                crc2.stroke();
                crc2.fillStyle = "white";
                crc2.fill();
                crc2.closePath();
                //Segel Links
                crc2.beginPath();
                crc2.moveTo(120, 230);
                crc2.lineTo(120, 250);
                crc2.lineTo(100, 250);
                crc2.lineTo(120, 230);
                crc2.strokeStyle = "white";
                crc2.stroke();
                crc2.fillStyle = "white";
                crc2.fill();
                crc2.closePath();
            }
            drawBoat();
            // Schwimmer
            function drawSwimmer() {
                //Kopf
                crc2.beginPath();
                crc2.moveTo(300, 350);
                crc2.arc(300, 350, 15, 0, Math.PI * 2, true);
                crc2.fillStyle = "#fcdfa2";
                crc2.strokeStyle = "#fcdfa2";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Badekappe
                crc2.beginPath();
                crc2.moveTo(285, 343.5);
                crc2.fillStyle = "blue";
                crc2.strokeStyle = "blue";
                crc2.quadraticCurveTo(300, 325, 315, 343.5);
                crc2.moveTo(315, 343.5);
                crc2.quadraticCurveTo(300, 340, 285, 343.5);
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
                //Auge
                crc2.beginPath();
                crc2.moveTo(312, 350);
                crc2.arc(312, 350, 3, 0, Math.PI * 2, true);
                crc2.fillStyle = "white";
                crc2.strokeStyle = "white";
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
                //Pupille
                crc2.beginPath();
                crc2.moveTo(312, 350);
                crc2.arc(313.5, 350, 1, 0, Math.PI * 2, true);
                crc2.fillStyle = "lightblue";
                crc2.strokeStyle = "lightblue";
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
                //Arm
                //Rechter Arm
                crc2.beginPath();
                crc2.moveTo(300, 365);
                crc2.quadraticCurveTo(285, 350, 260, 360);
                crc2.moveTo(260, 360);
                crc2.quadraticCurveTo(285, 360, 300, 365);
                //crc2.moveTo(262, 360);
                //crc2.arc(262, 360, 2, 0, Math.PI * 2, true);
                //crc2.moveTo(262, 360);
                crc2.fillStyle = "#fcdfa2";
                crc2.strokeStyle = "#fcdfa2";
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
                //Welle
                crc2.beginPath();
                crc2.moveTo(245, 370);
                crc2.quadraticCurveTo(255, 360, 265, 370);
                crc2.moveTo(265, 370);
                crc2.quadraticCurveTo(275, 380, 285, 370);
                crc2.moveTo(285, 370);
                crc2.quadraticCurveTo(295, 360, 305, 370);
                crc2.moveTo(305, 370);
                crc2.quadraticCurveTo(315, 380, 325, 370);
                crc2.moveTo(325, 370);
                crc2.quadraticCurveTo(335, 360, 345, 370);
                crc2.strokeStyle = "#4cafe9";
                crc2.stroke();
                crc2.closePath();
                //Welle 2
                crc2.beginPath();
                crc2.moveTo(245, 380);
                crc2.quadraticCurveTo(255, 370, 265, 380);
                crc2.moveTo(265, 380);
                crc2.quadraticCurveTo(275, 390, 285, 380);
                crc2.moveTo(285, 380);
                crc2.quadraticCurveTo(295, 370, 305, 380);
                crc2.moveTo(305, 380);
                crc2.quadraticCurveTo(315, 390, 325, 380);
                crc2.moveTo(325, 380);
                crc2.quadraticCurveTo(335, 370, 345, 380);
                crc2.strokeStyle = "#4cafe9";
                crc2.stroke();
                crc2.closePath();
            }
            drawSwimmer();
        }
        drawMiddleground();
        //Vordergrund zeichnen
        function drawForeground() {
            function drawPalm() {
                // Palme 1 zeichnen
                //Palme Stamm
                crc2.beginPath();
                crc2.moveTo(10, 590);
                crc2.strokeStyle = "#bf8d21";
                crc2.fillStyle = "#bf8d21";
                crc2.fillRect(40, 600, 10, -150);
                crc2.fill();
                crc2.closePath();
                //Palmenblätter
                //Palmenblatt 1
                crc2.beginPath();
                crc2.moveTo(45, 455);
                crc2.strokeStyle = "green";
                crc2.fillStyle = "green";
                crc2.quadraticCurveTo(10, 400, 5, 500);
                crc2.moveTo(5, 500);
                crc2.quadraticCurveTo(10, 430, 45, 455);
                //Palmenblatt 2
                crc2.moveTo(45, 455);
                crc2.quadraticCurveTo(80, 400, 85, 500);
                crc2.moveTo(85, 500);
                crc2.quadraticCurveTo(80, 430, 45, 455);
                //Palmenblatt 3
                crc2.moveTo(45, 455);
                crc2.quadraticCurveTo(10, 370, 5, 445);
                crc2.moveTo(5, 445);
                crc2.quadraticCurveTo(10, 400, 45, 455);
                //Palmenblatt 4
                crc2.moveTo(45, 455);
                crc2.quadraticCurveTo(80, 370, 85, 445);
                crc2.moveTo(85, 445);
                crc2.quadraticCurveTo(80, 400, 45, 455);
                //Palmenblatt 5
                crc2.moveTo(45, 455);
                crc2.quadraticCurveTo(50, 400, 10, 390);
                crc2.moveTo(10, 390);
                crc2.quadraticCurveTo(50, 440, 45, 455);
                //Palmenblatt 6
                crc2.moveTo(46, 455);
                crc2.quadraticCurveTo(47, 350, 95, 400);
                crc2.moveTo(95, 400);
                crc2.quadraticCurveTo(47, 390, 46, 455);
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
                //Palme 2 zeichnen
                //Palme Stamm
                crc2.beginPath();
                crc2.moveTo(950, 600);
                crc2.strokeStyle = "#bf8d21";
                crc2.fillStyle = "#bf8d21";
                crc2.fillRect(950, 600, 10, -150);
                crc2.fill();
                crc2.closePath();
                //Palmenblatt 1
                crc2.beginPath();
                crc2.moveTo(955, 455);
                crc2.strokeStyle = "green";
                crc2.fillStyle = "green";
                crc2.quadraticCurveTo(990, 400, 995, 500);
                crc2.moveTo(995, 500);
                crc2.quadraticCurveTo(990, 430, 955, 455);
                //Palmenblatt 2
                crc2.moveTo(955, 455);
                crc2.quadraticCurveTo(920, 400, 915, 500);
                crc2.moveTo(915, 500);
                crc2.quadraticCurveTo(920, 430, 955, 455);
                //Palmenblatt 3
                crc2.moveTo(955, 455);
                crc2.quadraticCurveTo(990, 370, 995, 445);
                crc2.moveTo(995, 445);
                crc2.quadraticCurveTo(990, 400, 955, 455);
                //Palmenblatt 4
                crc2.moveTo(955, 455);
                crc2.quadraticCurveTo(920, 370, 915, 445);
                crc2.moveTo(915, 445);
                crc2.quadraticCurveTo(920, 400, 955, 455);
                //Palmenblatt 5
                crc2.moveTo(955, 455);
                crc2.quadraticCurveTo(950, 400, 990, 390);
                crc2.moveTo(990, 390);
                crc2.quadraticCurveTo(950, 440, 955, 455);
                //Palmenblatt 6
                crc2.moveTo(954, 455);
                crc2.quadraticCurveTo(953, 350, 905, 400);
                crc2.moveTo(905, 400);
                crc2.quadraticCurveTo(953, 390, 954, 455);
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
            }
            drawPalm();
            function drawPeople() {
                // Person 1
                //Kopf
                crc2.beginPath();
                crc2.moveTo(500, 455);
                crc2.arc(500, 455, 15, 0, Math.PI * 2, true);
                crc2.fillStyle = "#fcdfa2";
                crc2.strokeStyle = "#fcdfa2";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Haare
                crc2.beginPath();
                crc2.moveTo(487, 445);
                crc2.lineTo(490, 435);
                crc2.lineTo(493, 437);
                crc2.lineTo(495, 433);
                crc2.lineTo(498, 435);
                crc2.lineTo(500, 433);
                crc2.lineTo(503, 435);
                crc2.lineTo(507, 433);
                crc2.lineTo(510, 437);
                crc2.lineTo(511, 435);
                crc2.lineTo(513, 445);
                crc2.moveTo(513, 445);
                crc2.quadraticCurveTo(500, 433, 487, 445);
                crc2.fillStyle = "#523c0d";
                crc2.strokeStyle = "#523c0d";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Sonnenbrille
                crc2.beginPath();
                crc2.moveTo(495, 450);
                crc2.quadraticCurveTo(500, 448, 505, 450);
                crc2.moveTo(495, 450);
                crc2.ellipse(495, 450, 2, 3, 0, 0, Math.PI * 2, true);
                crc2.moveTo(505, 450);
                crc2.ellipse(505, 450, 2, 3, 0, 0, Math.PI * 2, true);
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Nase und Mund
                crc2.beginPath();
                crc2.moveTo(498, 455);
                crc2.quadraticCurveTo(500, 458, 502, 455);
                crc2.moveTo(495, 460);
                crc2.quadraticCurveTo(500, 465, 505, 460);
                crc2.strokeStyle = "#523c0d";
                crc2.stroke();
                crc2.closePath();
                //Shirt
                crc2.beginPath();
                crc2.moveTo(490, 466);
                crc2.lineTo(483, 472);
                crc2.lineTo(487, 477);
                crc2.lineTo(490, 470);
                crc2.lineTo(490, 490);
                crc2.lineTo(510, 490);
                crc2.lineTo(510, 470);
                crc2.lineTo(513, 477);
                crc2.lineTo(517, 472);
                crc2.lineTo(510, 466);
                crc2.moveTo(510, 466);
                crc2.quadraticCurveTo(500, 475, 490, 466);
                crc2.fillStyle = "green";
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Arme und Hände
                //Linker Arm
                crc2.beginPath();
                crc2.moveTo(483, 473);
                crc2.lineTo(476, 480);
                crc2.lineTo(478, 483);
                crc2.lineTo(485, 475);
                crc2.lineTo(483, 473);
                crc2.moveTo(475, 481.5);
                crc2.arc(475, 481.5, 2.5, 0, Math.PI * 2, true);
                crc2.fillStyle = "#fcdfa2";
                crc2.strokeStyle = "#fcdfa2";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Rechter Arm
                crc2.beginPath();
                crc2.moveTo(516, 473);
                crc2.lineTo(523, 480);
                crc2.lineTo(520, 483);
                crc2.lineTo(513, 476);
                crc2.lineTo(516, 473);
                crc2.moveTo(523.5, 482);
                crc2.arc(523.5, 482, 2.5, 0, Math.PI * 2, true);
                crc2.strokeStyle = "#fcdfa2";
                crc2.fillStyle = "#fcdfa2";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Hose
                crc2.beginPath();
                crc2.moveTo(491, 491);
                crc2.lineTo(491, 505);
                crc2.lineTo(498, 505);
                crc2.lineTo(498, 497);
                crc2.lineTo(502, 497);
                crc2.lineTo(502, 505);
                crc2.lineTo(509, 505);
                crc2.lineTo(509, 491);
                crc2.fillStyle = "#7d7c91";
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Beine
                //Linkes Bein
                crc2.beginPath();
                crc2.moveTo(491, 506);
                crc2.fillStyle = "#fcdfa2";
                crc2.fillRect(492, 506, 5, 10);
                crc2.moveTo(493, 515);
                crc2.ellipse(493, 515, 4, 3, 0, 0, Math.PI * 2, true);
                crc2.strokeStyle = "#fcdfa2";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Rechtes Bein
                crc2.beginPath();
                crc2.moveTo(503, 506);
                crc2.fillStyle = "#fcdfa2";
                crc2.fillRect(503, 506, 5, 10);
                crc2.moveTo(507, 515);
                crc2.ellipse(507, 515, 4, 3, 0, 0, Math.PI * 2, true);
                crc2.strokeStyle = "#fcdfa2";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                // Person 2
                //Kopf
                crc2.beginPath();
                crc2.moveTo(200, 508);
                crc2.arc(200, 508, 15, 0, Math.PI * 2, true);
                crc2.fillStyle = "#fcdfa2";
                crc2.strokeStyle = "#fcdfa2";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Haare
                crc2.beginPath();
                crc2.moveTo(187, 500);
                crc2.lineTo(190, 490);
                crc2.lineTo(193, 492);
                crc2.lineTo(195, 488);
                crc2.lineTo(198, 490);
                crc2.lineTo(200, 488);
                crc2.lineTo(203, 490);
                crc2.lineTo(207, 488);
                crc2.lineTo(210, 492);
                crc2.lineTo(211, 490);
                crc2.lineTo(213, 500);
                crc2.moveTo(213, 500);
                crc2.quadraticCurveTo(200, 488, 187, 500);
                crc2.fillStyle = "#ffe148";
                crc2.strokeStyle = "#523c0d";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Sonnenbrille
                crc2.beginPath();
                crc2.moveTo(195, 502.5);
                crc2.ellipse(195, 502.5, 2, 3, 0, 0, Math.PI * 2, true);
                crc2.quadraticCurveTo(200, 502, 205, 502.5);
                crc2.moveTo(205, 502.5);
                crc2.ellipse(205, 502.5, 2, 3, 0, 0, Math.PI * 2, true);
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Nase und Mund
                crc2.beginPath();
                crc2.moveTo(198, 507);
                crc2.quadraticCurveTo(200, 510, 202, 507);
                crc2.moveTo(195, 510);
                crc2.quadraticCurveTo(200, 515, 205, 510);
                crc2.strokeStyle = "#523c0d";
                crc2.stroke();
                crc2.closePath();
                //Shirt
                crc2.beginPath();
                crc2.moveTo(190, 520);
                crc2.lineTo(184, 527);
                crc2.lineTo(188, 531);
                crc2.lineTo(192, 525);
                crc2.lineTo(192, 543);
                crc2.lineTo(210, 543);
                crc2.lineTo(210, 525);
                crc2.lineTo(215, 531);
                crc2.lineTo(219, 527);
                crc2.lineTo(211, 518);
                crc2.moveTo(211, 518);
                crc2.quadraticCurveTo(200.5, 525, 190, 520);
                crc2.fillStyle = "#6beb82";
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Arme und Hände
                //Linker Arm
                crc2.beginPath();
                crc2.moveTo(184.5, 527);
                crc2.lineTo(178, 534);
                crc2.lineTo(181, 537);
                crc2.lineTo(187, 530);
                crc2.lineTo(183.5, 527);
                crc2.moveTo(184.5, 527);
                crc2.arc(178, 537, 2.5, 0, Math.PI * 2, true);
                crc2.fillStyle = "#fcdfa2";
                crc2.strokeStyle = "#fcdfa2";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Rechter Arm
                crc2.beginPath();
                crc2.moveTo(218.5, 528);
                crc2.lineTo(224, 534);
                crc2.lineTo(221, 537);
                crc2.lineTo(215, 530);
                crc2.lineTo(218.5, 528);
                crc2.moveTo(222, 536);
                crc2.arc(223, 537, 2.5, 0, Math.PI * 2, true);
                crc2.fillStyle = "#fcdfa2";
                crc2.strokeStyle = "#fcdfa2";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Hose
                crc2.beginPath();
                crc2.moveTo(192, 544);
                crc2.lineTo(192, 559);
                crc2.lineTo(199, 559);
                crc2.lineTo(199, 552);
                crc2.lineTo(202, 552);
                crc2.lineTo(202, 559);
                crc2.lineTo(210, 559);
                crc2.lineTo(210, 544);
                crc2.lineTo(192, 544);
                crc2.fillStyle = "#f69245";
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Beine
                //Linkes Bein
                crc2.beginPath();
                crc2.moveTo(192, 560);
                crc2.fillStyle = "#fcdfa2";
                crc2.strokeStyle = "#fcdfa2";
                crc2.fillRect(192, 560, 6, 12);
                crc2.moveTo(194, 574);
                crc2.arc(194, 574, 3.5, 0, Math.PI * 2, true);
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Rechtes Bein
                crc2.beginPath();
                crc2.moveTo(203, 560);
                crc2.fillStyle = "#fcdfa2";
                crc2.strokeStyle = "#fcdfa2";
                crc2.fillRect(203, 560, 6, 12);
                crc2.moveTo(207, 574);
                crc2.arc(207, 574, 3.5, 0, Math.PI * 2, true);
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
            }
            drawPeople();
            // Sonnenschirm
            function drawUmbrella() {
                //Stand
                crc2.beginPath();
                crc2.moveTo(745, 400);
                crc2.fillStyle = "white";
                crc2.fillRect(745, 400, 5, 150);
                crc2.closePath();
                //Teil 1
                crc2.beginPath();
                crc2.moveTo(660, 400);
                crc2.lineTo(750, 350);
                crc2.lineTo(690, 400);
                crc2.lineTo(660, 400);
                crc2.strokeStyle = "red";
                crc2.fillStyle = "red";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Teil 2
                crc2.beginPath();
                crc2.moveTo(690, 400);
                crc2.lineTo(750, 350);
                crc2.lineTo(730, 400);
                crc2.lineTo(690, 400);
                crc2.strokeStyle = "white";
                crc2.fillStyle = "white";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Teil 3
                crc2.beginPath();
                crc2.moveTo(730, 400);
                crc2.lineTo(750, 350);
                crc2.lineTo(770, 400);
                crc2.lineTo(730, 400);
                crc2.strokeStyle = "red";
                crc2.fillStyle = "red";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Teil 4
                crc2.beginPath();
                crc2.moveTo(770, 400);
                crc2.lineTo(750, 350);
                crc2.lineTo(800, 400);
                crc2.lineTo(770, 400);
                crc2.strokeStyle = "white";
                crc2.fillStyle = "white";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
                //Teil 5
                crc2.beginPath();
                crc2.moveTo(800, 400);
                crc2.lineTo(750, 350);
                crc2.lineTo(830, 400);
                crc2.lineTo(800, 400);
                crc2.strokeStyle = "red";
                crc2.fillStyle = "red";
                crc2.stroke();
                crc2.fill();
                crc2.closePath();
            }
            drawUmbrella();
        }
        drawForeground();
    }
})(Aufgabe8_2 || (Aufgabe8_2 = {}));
