var x1 = Math.random(50) + 700;
var y1 = Math.random(50) + 200;
var r1 = Math.random(30) + 5;
var x2 = Math.random(50) + 700;
var y2 = Math.random(50) + 200;
var r2 = Math.random(30) + 10;
var x3 = Math.random(50) + 700;
var y3 = Math.random(50) + 200;
var r3 = Math.random(30) + 5;
var x4 = Math.random(50) + 700;
var y4 = Math.random(50) + 200;
var r4 = Math.random(30) + 5;
var lx1 = 10;
var ly1 = 400;
var lx2 = 180;
var ly2 = 370;
var smoke = 1;
let colorChange = 0;
var divider = function drawDivider() {
    sliderVar = document.getElementById('myRange').value;
    lx1 += 0.06 * sliderVar;
    ly1 -= 0.01 * sliderVar;
    lx2 += 0.06 * sliderVar;
    ly2 -= 0.01 * sliderVar;
    if (lx1 > 800) {
        lx1 = 10;
        ly1 = 400;
        lx2 = 180;
        ly2 = 370;
        road.clearRect(0, 0, 1000, 1000);
    }
}

let yellowCar = [
    "#e2ca2b",
    "#aa960f",
    "#efd632",
    "#f4dc42",
    "#c6b01d",
    "#e0c82c",
    "#edd438"
];
let redCar = [
    "#e2362b",
    "#aa0f0f",
    "#ee3232",
    "#f44242",
    "#c61d1d",
    "#e02c2c",
    "#ed3838"
]
let blueCar = [
    "#2b2de2",
    "#0f28aa",
    "#3278ee",
    "#4b42f4",
    "#1d23c6",
    "#2c33e0",
    "#3844ed"
];
let whiteCar = [
    "#e4e4e4",
    "#a2a2a3",
    "#e8eaec",
    "#ececf2",
    "#bebebe",
    "#d9d9d9",
    "#f5f5f5"
];
let color = [yellowCar, redCar, blueCar, whiteCar];
function yellow() {
    colorChange = 0;
    document.body.style.backgroundColor = "#fbffb2";
}
function red() {
    colorChange = 1;
    document.body.style.backgroundColor = "#ffa0a0";
}
function blue() {
    colorChange = 2;
    document.body.style.backgroundColor = "#b5c3ff";
}
function white() {
    colorChange = 3;
    document.body.style.backgroundColor = "white";
}

function drawRoad() {
    road = document.getElementById("myCar").getContext("2d");

    road.fillStyle = '#60605f';
    road.beginPath();
    road.moveTo(800, 200);
    road.lineTo(800, 400);
    road.lineTo(0, 400);
    road.lineTo(0, 315);
    road.closePath();
    road.fill();

    road.beginPath();
    road.moveTo(800, 340);
    road.lineTo(520, 400);
    road.lineWidth = 10;
    road.strokeStyle = '#ffe030';
    road.stroke();
    setInterval(divider, 10);

    road.beginPath();
    road.moveTo(lx2, ly2);
    road.lineTo(lx1, ly1);
    road.lineWidth = 10;
    road.strokeStyle = 'white';
    road.stroke();
}

function drawCar() {
    car = document.getElementById("myCar").getContext("2d");

    car.lineWidth = 1;
    car.strokeStyle = 'black';
    car.fillStyle = '#aaaaa5';
    car.beginPath();
    car.moveTo(533, 210);
    car.lineTo(531, 113);
    car.lineTo(592, 125);
    car.lineTo(654, 162);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][0];
    car.beginPath();
    car.moveTo(50, 283);
    car.lineTo(74, 351);
    car.lineTo(230, 368);
    car.lineTo(229, 303);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][1];
    car.beginPath();
    car.moveTo(468, 355);
    car.lineTo(464, 371);
    car.lineTo(396, 381);
    car.lineTo(248, 368);
    car.closePath();
    car.fill();

    car.fillStyle = 'black';
    car.beginPath();
    car.moveTo(655, 320);
    car.lineTo(668, 322);
    car.lineTo(675, 331);
    car.lineTo(731, 331);
    car.lineTo(750, 296);
    car.lineTo(754, 228);
    car.lineTo(736, 164);
    car.lineTo(704, 161);
    car.lineTo(640, 161);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][1];
    car.beginPath();
    car.moveTo(544, 346);
    car.lineTo(545, 307);
    car.lineTo(700, 286);
    car.lineTo(700, 309);
    car.closePath();
    car.fill();

    car.fillStyle = 'black';
    car.beginPath();
    car.moveTo(228, 293);
    car.lineTo(407, 289);
    car.lineTo(407, 365);
    car.lineTo(219, 367);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][2];
    car.beginPath();
    car.moveTo(50, 283);
    car.lineTo(49, 291);
    car.lineTo(136, 310);
    car.lineTo(202, 317);
    car.lineTo(353, 309);
    car.lineTo(354, 301);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][3];
    car.beginPath();
    car.moveTo(50, 282);
    car.lineTo(51, 273);
    car.lineTo(74, 241);
    car.lineTo(80, 235);
    car.lineTo(114, 204);
    car.lineTo(134, 194);
    car.lineTo(157, 189);
    car.lineTo(217, 196);
    car.lineTo(466, 200);
    car.lineTo(506, 200);
    car.lineTo(531, 218);
    car.lineTo(518, 216);
    car.lineTo(497, 227);
    car.lineTo(482, 249);
    car.lineTo(449, 277);
    car.lineTo(371, 306);
    car.lineTo(365, 302);
    car.lineTo(177, 303);
    car.lineTo(132, 299);
    car.closePath();
    car.fill();

    car.fillStyle = '#d8d7d0';
    car.beginPath();
    car.moveTo(80, 235);
    car.lineTo(66, 261);
    car.lineTo(66, 270);
    car.lineTo(77, 277);
    car.lineTo(93, 263);
    car.lineTo(104, 221);
    car.lineTo(118, 207);
    car.lineTo(113, 206);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][4];
    car.beginPath();
    car.moveTo(50, 282);
    car.lineTo(49, 302);
    car.lineTo(54, 325);
    car.lineTo(62, 327);
    car.lineTo(60, 283);
    car.closePath();
    car.fill();

    car.fillStyle = 'black';
    car.beginPath();
    car.moveTo(59, 294);
    car.lineTo(135, 310);
    car.lineTo(145, 359);
    car.lineTo(57, 342);
    car.lineTo(62, 327);
    car.closePath();
    car.fill();

    car.fillStyle = 'black';
    car.beginPath();
    car.moveTo(149, 347);
    car.lineTo(149, 359);
    car.lineTo(203, 363);
    car.lineTo(203, 351);
    car.closePath();
    car.fill();

    car.fillStyle = 'black';
    car.beginPath();
    car.moveTo(143, 316);
    car.lineTo(171, 320);
    car.lineTo(202, 321);
    car.lineTo(203, 341);
    car.lineTo(168, 329);
    car.lineTo(149, 347);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][3];
    car.beginPath();
    car.moveTo(53, 325);
    car.lineTo(61, 327);
    car.lineTo(58, 341);
    car.lineTo(147, 359);
    car.lineTo(367, 362);
    car.lineTo(397, 349);
    car.lineTo(412, 367);
    car.lineTo(372, 372);
    car.lineTo(364, 368);
    car.lineTo(147, 367);
    car.lineTo(50, 346);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][0];
    car.beginPath();
    car.moveTo(412, 367);
    car.lineTo(385, 319);
    car.lineTo(370, 305);
    car.lineTo(448, 277);
    car.lineTo(482, 248);
    car.lineTo(496, 226);
    car.lineTo(501, 234);
    car.lineTo(485, 257);
    car.lineTo(470, 302);
    car.lineTo(467, 355);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][0];
    car.beginPath();
    car.moveTo(496, 226);
    car.lineTo(518, 216);
    car.lineTo(535, 218);
    car.lineTo(558, 240);
    car.lineTo(596, 229);
    car.lineTo(651, 164);
    car.lineTo(658, 165);
    car.lineTo(646, 188);
    car.lineTo(650, 212);
    car.lineTo(642, 208);
    car.lineTo(618, 226);
    car.lineTo(625, 233);
    car.lineTo(669, 228);
    car.lineTo(695, 189);
    car.lineTo(728, 171);
    car.lineTo(729, 160);
    car.lineTo(747, 171);
    car.lineTo(755, 227);
    car.lineTo(745, 197);
    car.lineTo(733, 190);
    car.lineTo(718, 200);
    car.lineTo(701, 260);
    car.lineTo(700, 300);
    car.lineTo(668, 293);
    car.lineTo(646, 296);
    car.lineTo(550, 330);
    car.lineTo(551, 262);
    car.lineTo(542, 242);
    car.lineTo(530, 227);
    car.lineTo(520, 224);
    car.lineTo(500, 234);
    car.closePath();
    car.fill();

    car.fillStyle = 'black';
    car.beginPath();
    car.moveTo(395, 382);
    car.lineTo(441, 378);
    car.lineTo(448, 384);
    car.lineTo(459, 393);
    car.lineTo(476, 395);
    car.lineTo(507, 395);
    car.lineTo(525, 385);
    car.lineTo(550, 330);
    car.lineTo(551, 262);
    car.lineTo(541, 240);
    car.lineTo(529, 227);
    car.lineTo(520, 224);
    car.lineTo(501, 233);
    car.lineTo(485, 257);
    car.lineTo(469, 302);
    car.lineTo(467, 357);
    car.lineTo(464, 371);
    car.lineTo(397, 380);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][4];
    car.beginPath();
    car.moveTo(412, 367);
    car.lineTo(386, 319);
    car.lineTo(370, 305);
    car.lineTo(365, 300);
    car.lineTo(273, 302);
    car.lineTo(265, 313);
    car.lineTo(353, 310);
    car.lineTo(390, 352);
    car.lineTo(396, 350);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][1];
    car.beginPath();
    car.moveTo(353, 309);
    car.lineTo(202, 316);
    car.lineTo(143, 311);
    car.lineTo(136, 310);
    car.lineTo(93, 301);
    car.lineTo(137, 316);
    car.lineTo(136, 310);
    car.lineTo(143, 311);
    car.lineTo(143, 316);
    car.lineTo(202, 324);
    car.lineTo(202, 316);
    car.lineTo(225, 327);
    car.lineTo(235, 323);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][1];
    car.beginPath();
    car.moveTo(62, 349);
    car.lineTo(64, 358);
    car.lineTo(100, 357);
    car.closePath();
    car.fill();

    car.fillStyle = '#3d3c3a';
    car.beginPath();
    car.moveTo(148, 348);
    car.lineTo(168, 328);
    car.lineTo(203, 340);
    car.lineTo(203, 352);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][3];
    car.beginPath();
    car.moveTo(327, 119);
    car.lineTo(384, 105);
    car.lineTo(515, 105);
    car.lineTo(583, 118);
    car.lineTo(632, 143);
    car.lineTo(640, 143);
    car.lineTo(664, 155);
    car.lineTo(720, 155);
    car.lineTo(729, 159);
    car.lineTo(729, 171);
    car.lineTo(695, 190);
    car.lineTo(669, 229);
    car.lineTo(625, 234);
    car.lineTo(618, 226);
    car.lineTo(643, 207);
    car.lineTo(662, 217);
    car.lineTo(694, 165);
    car.lineTo(651, 165);
    car.lineTo(596, 230);
    car.lineTo(557, 241);
    car.lineTo(537, 203);
    car.lineTo(567, 196);
    car.lineTo(551, 211);
    car.lineTo(563, 220);
    car.lineTo(587, 205);
    car.lineTo(606, 205);
    car.lineTo(622, 197);
    car.lineTo(627, 185);
    car.lineTo(613, 177);
    car.lineTo(627, 167);
    car.lineTo(632, 148);
    car.lineTo(575, 122);
    car.lineTo(550, 123);
    car.lineTo(542, 131);
    car.lineTo(533, 203);
    car.lineTo(516, 201);
    car.lineTo(527, 126);
    car.lineTo(436, 114);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][0];
    car.beginPath();
    car.moveTo(557, 241);
    car.lineTo(506, 200);
    car.lineTo(537, 203);
    car.closePath();
    car.fill();

    car.fillStyle = '#5e5d5a';
    car.beginPath();
    car.moveTo(217, 197);
    car.lineTo(257, 157);
    car.lineTo(330, 118);
    car.lineTo(434, 114);
    car.lineTo(528, 126);
    car.lineTo(518, 203);
    car.lineTo(507, 200);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][1];
    car.beginPath();
    car.moveTo(563, 220);
    car.lineTo(589, 205);
    car.lineTo(604, 206);
    car.lineTo(620, 201);
    car.lineTo(627, 185);
    car.lineTo(590, 191);
    car.lineTo(556, 215);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][5];
    car.beginPath();
    car.moveTo(627, 185);
    car.lineTo(590, 191);
    car.lineTo(556, 215);
    car.lineTo(548, 210);
    car.lineTo(571, 194);
    car.lineTo(587, 175);
    car.lineTo(614, 177);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][3];
    car.beginPath();
    car.moveTo(544, 346);
    car.lineTo(700, 309);
    car.lineTo(699, 306);
    car.lineTo(644, 305);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][3];
    car.beginPath();
    car.moveTo(646, 188);
    car.lineTo(679, 190);
    car.lineTo(688, 177);
    car.lineTo(652, 175);
    car.closePath();
    car.fill();

    car.fillStyle = '#7c7c76';
    car.beginPath();
    car.moveTo(321, 291);
    car.lineTo(377, 281);
    car.lineTo(456, 218);
    car.lineTo(436, 218);
    car.lineTo(406, 235);
    car.lineTo(329, 269);
    car.closePath();
    car.fill();

    car.fillStyle = '#b7b4ae';
    car.beginPath();
    car.moveTo(509, 383);
    car.lineTo(525, 369);
    car.lineTo(537, 337);
    car.lineTo(542, 283);
    car.lineTo(526, 253);
    car.lineTo(516, 250);
    car.lineTo(501, 262);
    car.lineTo(487, 297);
    car.lineTo(486, 337);
    car.lineTo(498, 373);
    car.closePath();
    car.fill();

    car.fillStyle = '#b7b4ae';
    car.beginPath();
    car.moveTo(740, 300);
    car.lineTo(747, 276);
    car.lineTo(747, 251);
    car.lineTo(741, 228);
    car.lineTo(733, 217);
    car.lineTo(721, 222);
    car.lineTo(714, 243);
    car.lineTo(712, 275);
    car.lineTo(716, 301);
    car.lineTo(730, 312);
    car.closePath();
    car.fill();

    car.fillStyle = color[colorChange][6];
    car.beginPath();
    car.moveTo(205, 196);
    car.lineTo(197, 182);
    car.lineTo(199, 174);
    car.lineTo(212, 168);
    car.lineTo(227, 169);
    car.lineTo(230, 183);
    car.lineTo(217, 196);
    car.closePath();
    car.fill();

    car.beginPath();
    car.moveTo(150, 271);
    car.lineTo(230, 275);
    car.stroke();
}

function drawCircle() {
    smoke = document.getElementById("myCar").getContext("2d");
    sliderVar = document.getElementById('myRange').value;
    smoke.clearRect(0, 0, 1000, 1000);
    x1 += 0.02 * sliderVar;
    y1 -= 0.02 * sliderVar;
    x2 += 0.02 * sliderVar;
    y2 -= 0.02 * sliderVar;
    x3 += 0.02 * sliderVar;
    y3 -= 0.02 * sliderVar;
    x4 += 0.02 * sliderVar;
    y4 -= 0.02 * sliderVar;

    smoke.fillStyle = 'gray';
    smoke.beginPath();
    var circle = smoke.arc(x1, y1, r1, 0, Math.PI * 2, true);
    smoke.stroke();
    smoke.fill();
    smoke.beginPath();
    var circle = smoke.arc(x2, y2, r2, 0, Math.PI * 2, true);
    smoke.stroke();
    smoke.fill();
    smoke.beginPath();
    var circle = smoke.arc(x3, y3, r3, 0, Math.PI * 2, true);
    smoke.stroke();
    smoke.fill();
    smoke.beginPath();
    var circle = smoke.arc(x4, y4, r4, 0, Math.PI * 2, true);
    smoke.stroke();
    smoke.fill();
    r1 += 0.05;
    r2 += 0.03;
    r3 += 0.07;
    r4 += 0.01;
    if (x1 + (r1 / 3) > 800) {
        x1 = 700;
        y1 = 200;
        r1 = 30;
        smoke.clearRect(0, 0, 1000, 1000);
    }
    if (x2 + (r2 / 3) > 800) {
        x2 = 650;
        y2 = 210;
        r2 = 25;
        smoke.clearRect(0, 0, 1000, 1000);
    }
    if (x3 + (r3 / 3) > 800) {
        x3 = 675;
        y3 = 215;
        r3 = 15;
        smoke.clearRect(0, 0, 1000, 1000);
    }
    if (x4 + (r4 / 3) > 800) {
        x4 = 700;
        y4 = 190;
        r4 = 30;
        smoke.clearRect(0, 0, 1000, 1000);
    }

    setInterval(drawCircle, 10);

    drawRoad();
    drawCar();

}
