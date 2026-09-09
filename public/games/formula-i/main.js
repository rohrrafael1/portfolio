let xt = 0, yt = 0, dxt = 0, dyt = 0;

let keysPressed = {};

addEventListener("keydown", function (e) {
    keysPressed[e.key] = true;
    if([37,38,39,40].indexOf(e.keyCode) > -1){
        e.preventDefault();
      }
});

addEventListener("keyup", function (e) {
    keysPressed[e.key] = false;
});

function render() {
    recAC1.render();
    recAC2.render();

    for (let i = chegadaX.length - 1; i >= 0; i--) {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(chegadaX[i], chegadaY[i], canvas.width * 5 / 1300, canvas.height * 5 / 600);
    }
    if ("ontouchstart" in document.documentElement)//se for touch a tela
    {
        upCircle.render();
        downCircle.render();
        rightCircle.render();
        leftCircle.render();
    }
}

function create2p() {

    player1 = new Carro(XP1, YP1, TECLAMOVEUPP1, TECLADOWNUPP1, TECLAMOVERIGHTP1, TECLAMOVELEFTP1, HTMLIDP1, corP1, nameP1, SOUNDP1);
    player2 = new Carro(XP2, YP2, TECLAMOVEUPP2, TECLADOWNUPP2, TECLAMOVERIGHTP2, TECLAMOVELEFTP2, HTMLIDP2, corP2, nameP2, SOUNDP2);

}

function create1p() {

    player2 = new Carro((XP1 + XP2) / 2, (YP1 + YP2)/2, TECLAMOVEUPP2, TECLADOWNUPP2, TECLAMOVERIGHTP2, TECLAMOVELEFTP2, HTMLIDP2, corP2, nameP1, SOUNDP1);

}

function update2p() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // (*) Update dos players
    player1.update();
    player2.update();
    render();

    if (player1.xColisao < player2.xColisao + player2.width &&
        player1.xColisao + player1.width > player2.xColisao &&
        player1.yColisao < player2.yColisao + player2.height &&
        player1.yColisao + player1.height > player2.yColisao) {
        player1.restart();
        player2.restart();
    }

    for (let i = paredesX.length - 1; i >= 0; i--) {

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(paredesX[i], paredesY[i], paredesWidth[i], paredesHeight[i]);

        if (player1.xColisao < paredesX[i] + paredesWidth[i] &&
            player1.xColisao + player1.width > paredesX[i] &&
            player1.yColisao < paredesY[i] + paredesHeight[i] &&
            player1.yColisao + player1.height > paredesY[i]) {
            player1.restart();
        }
    }

    for (let i = paredesX.length - 1; i >= 0; i--) {

        if (player2.xColisao < paredesX[i] + paredesWidth[i] &&
            player2.xColisao + player2.width > paredesX[i] &&
            player2.yColisao < paredesY[i] + paredesHeight[i] &&
            player2.yColisao + player2.height > paredesY[i]) {
            player2.restart();
        }
    }
    funcup = requestAnimationFrame(update2p);
    if (player1.xColisao < recAF.x + recAF.width &&
        player1.xColisao + player1.width > recAF.x &&
        player1.yColisao < recAF.y + recAF.height &&
        player1.yColisao + player1.height > recAF.y) {
        player1.pontuar();
    }

    if (player2.xColisao < recAF.x + recAF.width &&
        player2.xColisao + player2.width > recAF.x &&
        player2.yColisao < recAF.y + recAF.height &&
        player2.yColisao + player2.height > recAF.y) {
        player2.pontuar();
    }
}

function update1p() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // (*) Update do player
    player2.update();

   
    for (let i = paredesX.length - 1; i >= 0; i--) {

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(paredesX[i], paredesY[i], paredesWidth[i], paredesHeight[i]);

        if (player2.xColisao < paredesX[i] + paredesWidth[i] &&
            player2.xColisao + player2.width > paredesX[i] &&
            player2.yColisao < paredesY[i] + paredesHeight[i] &&
            player2.yColisao + player2.height > paredesY[i]) {
            player2.restart();
        }
    }

    render();
    funcup = requestAnimationFrame(update1p);

    if (player2.xColisao < recAF.x + recAF.width &&
        player2.xColisao + player2.width > recAF.x &&
        player2.yColisao < recAF.y + recAF.height &&
        player2.yColisao + player2.height > recAF.y) {
        player2.pontuar();
    }
}

function start2p() {
    render();
    create2p();
    update2p();
    render();
    player1.render();
    player2.render();
    start = Date.now();
    loop();
    addEventListener("keydown", function (e) {
        keysPressed[e.key] = true;
    });
}

function start1p() {
    render();
    create1p();
    update1p();
    render();
    player2.render();
    start = Date.now();
    loop();
    addEventListener("keydown", function (e) {
        keysPressed[e.key] = true;
    });
}

function loop() {
    let seconds = Math.floor((Date.now() - start) / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;
    dxt += xt < canvas.width / 2 ? 1 : -1;
    dyt += yt < canvas.height / 2 ? 1 : -1;
    xt += dxt;
    yt += dyt;
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "white"
    ctx.strokeText(minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0"), 0, 10);
    funclo = requestAnimationFrame(loop);
}