const gHTMLElements = { 
    "lobby": document.getElementById('lobby'),
    "lobby-team-1p": document.getElementById('lobby-team-1p'),
    "lobby-1team-2p": document.getElementById('lobby-1team-2p'),
    "lobby-2team-2p": document.getElementById('lobby-2team-2p'),
    "name-1p": document.getElementById('name-1p'),
    "name-p1-2p": document.getElementById('name-p1-2p'),
    "name-p2-2p": document.getElementById('name-p2-2p'),
    "race": document.getElementById('race'),
    "raceMob": document.getElementById('raceMob'),
    "gamemode": document.getElementById('gamemode'),
    "podium": document.getElementById('podium'),
    "body": document.querySelector('body'),
    "cima1p": document.querySelector('cima1p'),
    "baixo1p": document.querySelector('baixo1p'),
    "esquerda1p": document.querySelector('esquera1p'),
    "direita1p": document.querySelector('cima1p'),
};

let sounds = {
    theme: new Audio("assets/sounds/f1.theme.mp3"),
    motor: new Audio("assets/sounds/motor.wav"),
    motor2: new Audio("assets/sounds/motor2.wav"),
    vitoria: new Audio("assets/sounds/vitoria.mp3"),
    silence: new Audio("assets/sounds/silence.mp3"),
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const virtualHeight = 600;
const virtualWidth = virtualHeight * (1300/600);
let canvas_height = 0;
let canvas_width = 0;

canvas_height = document.querySelector('body').clientHeight;
canvas_width = document.querySelector('body').clientWidth;

canvas.width = virtualWidth;
canvas.height = virtualHeight;

canvas.style.width = `${canvas_width}px`;
canvas.style.height = `${canvas_height}px`;

let corP1;
let corP2;
let nameP1;
let nameP2;

let laranjaB = new Image(); laranjaB.src = "assets/sprites/laranjaB.png"
let laranjaC = new Image(); laranjaC.src = "assets/sprites/laranjaC.png"
let laranjaD = new Image(); laranjaD.src = "assets/sprites/laranjaD.png"
let laranjaE = new Image(); laranjaE.src = "assets/sprites/laranjaE.png"
let azulClaroB = new Image(); azulClaroB.src = "assets/sprites/azulClaroB.png"
let azulClaroC = new Image(); azulClaroC.src = "assets/sprites/azulClaroC.png"
let azulClaroD = new Image(); azulClaroD.src = "assets/sprites/azulClaroD.png"
let azulClaroE = new Image(); azulClaroE.src = "assets/sprites/azulClaroE.png"
let verdeEscuroB = new Image(); verdeEscuroB.src = "assets/sprites/verdeEscuroB.png"
let verdeEscuroC = new Image(); verdeEscuroC.src = "assets/sprites/verdeEscuroC.png"
let verdeEscuroD = new Image(); verdeEscuroD.src = "assets/sprites/verdeEscuroD.png"
let verdeEscuroE = new Image(); verdeEscuroE.src = "assets/sprites/verdeEscuroE.png"
let pretoB = new Image(); pretoB.src = "assets/sprites/pretoB.png"
let pretoC = new Image(); pretoC.src = "assets/sprites/pretoC.png"
let pretoD = new Image(); pretoD.src = "assets/sprites/pretoD.png"
let pretoE = new Image(); pretoE.src = "assets/sprites/pretoE.png"
let azulEscuroB = new Image(); azulEscuroB.src = "assets/sprites/azulEscuroB.png"
let azulEscuroC = new Image(); azulEscuroC.src = "assets/sprites/azulEscuroC.png"
let azulEscuroD = new Image(); azulEscuroD.src = "assets/sprites/azulEscuroD.png"
let azulEscuroE = new Image(); azulEscuroE.src = "assets/sprites/azulEscuroE.png"
let vermelhoB = new Image(); vermelhoB.src = "assets/sprites/vermelhoB.png"
let vermelhoC = new Image(); vermelhoC.src = "assets/sprites/vermelhoC.png"
let vermelhoD = new Image(); vermelhoD.src = "assets/sprites/vermelhoD.png"
let vermelhoE = new Image(); vermelhoE.src = "assets/sprites/vermelhoE.png"
let blank = new Image(); blank.src = "assets/blank.png"

let images = {
    laranjaB: laranjaB,
    laranjaC: laranjaC,
    laranjaD: laranjaD,
    laranjaE: laranjaE,

    azulClaroB: azulClaroB,
    azulClaroC: azulClaroC,
    azulClaroD: azulClaroD,
    azulClaroE: azulClaroE,

    verdeEscuroB: verdeEscuroB,
    verdeEscuroC: verdeEscuroC,
    verdeEscuroD: verdeEscuroD,
    verdeEscuroE: verdeEscuroE,

    pretoB: pretoB,
    pretoC: pretoC,
    pretoD: pretoD,
    pretoE: pretoE,

    azulEscuroB: azulEscuroB,
    azulEscuroC: azulEscuroC,
    azulEscuroD: azulEscuroD,
    azulEscuroE: azulEscuroE,

    vermelhoB: vermelhoB,
    vermelhoC: vermelhoC,
    vermelhoD: vermelhoD,
    vermelhoE: vermelhoE,

    blank: blank
}

//CONSTS (mexer) ~~~~~~~~~~~~~~~~~~~~~~~~
const XP1 = canvas.width * 23 / 26;
const YP1 = canvas.height * 13 / 30;
const TECLAMOVEUPP1 = "w";
const TECLADOWNUPP1 = "s";
const TECLAMOVERIGHTP1 = "d";
const TECLAMOVELEFTP1 = "a";
const HTMLIDP1 = "p1";
const SOUNDP1 = sounds['motor'];

const XP2 = canvas.width * 237 / 260;
const YP2 = canvas.height * 47 / 120;
const TECLAMOVEUPP2 = "ArrowUp";
const TECLADOWNUPP2 = "ArrowDown";
const TECLAMOVERIGHTP2 = "ArrowRight";
const TECLAMOVELEFTP2 = "ArrowLeft";
const HTMLIDP2 = "p2";
const SOUNDP2 = sounds['motor2'];

function soundTLoop() {
    sounds['theme'].play();
    funct = requestAnimationFrame(soundTLoop);
}

function soundVLoop() {
    sounds['vitoria'].play();
    funcv = requestAnimationFrame(soundVLoop);
}

function soundSLoop() {
    sounds['silence'].play();
    funcs = requestAnimationFrame(soundSLoop);
}