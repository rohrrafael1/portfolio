let game = () => {
    gHTMLElements['lobby'].style.display = 'none'
    gHTMLElements['gamemode'].style.display = 'flex'
    soundTLoop()
}

//-----------------------------------------------------------------------------------------------------------------------
let ump = () => {
    gHTMLElements['gamemode'].style.display = 'none'
    gHTMLElements['lobby-team-1p'].style.display = 'flex'
}

let doisp = () => {
    gHTMLElements['gamemode'].style.display = 'none'
    gHTMLElements['lobby-1team-2p'].style.display = 'flex'
}
//---------------------------------------------------------------------------------------------------------------------------

let alpinepunico = () => {
    gHTMLElements['lobby-team-1p'].style.display = 'none'
    gHTMLElements['name-1p'].style.display = 'flex'
    corP2 = "azulClaro";
}

let redbullpunico = () => {
    gHTMLElements['lobby-team-1p'].style.display = 'none'
    gHTMLElements['name-1p'].style.display = 'flex'
    corP2 = "azulEscuro";
}

let mclarenpunico = () => {
    gHTMLElements['lobby-team-1p'].style.display = 'none'
    gHTMLElements['name-1p'].style.display = 'flex'
    corP2 = "laranja";
}

let mercedespunico = () => {
    gHTMLElements['lobby-team-1p'].style.display = 'none'
    gHTMLElements['name-1p'].style.display = 'flex'
    corP2 = "preto";
}

let astonmartinpunico = () => {
    gHTMLElements['lobby-team-1p'].style.display = 'none'
    gHTMLElements['name-1p'].style.display = 'flex'
    corP2 = "verdeEscuro";
}

let ferraripunico = () => {
    gHTMLElements['lobby-team-1p'].style.display = 'none'
    gHTMLElements['name-1p'].style.display = 'flex'
    corP2 = "vermelho";
}
//-----------------------------------------------------------------------------------------------------------------------
let namepunico = () => {
    gHTMLElements['name-1p'].style.display = 'none' 
    gHTMLElements['race'].style.display = 'flex'
    nameP1 = document.getElementById('namepunico').value;
    start1p();
    sounds['theme'].currentTime = 0;
    cancelAnimationFrame(funct);
    sounds['theme'].pause();
    if ("ontouchstart" in document.documentElement)//se for touch a tela
    {
        upCircle.render();
        downCircle.render();
        rightCircle.render();
        leftCircle.render();
    }
}

//---------------------------------------------------------------------------------------------------------------------------
let alpinep1 = () => {
    gHTMLElements['lobby-1team-2p'].style.display = 'none'
    gHTMLElements['name-p1-2p'].style.display = 'flex'
    corP1 = "azulClaro";
}

let redbullp1 = () => {
    gHTMLElements['lobby-1team-2p'].style.display = 'none'
    gHTMLElements['name-p1-2p'].style.display = 'flex'
    corP1 = "azulEscuro";
}

let mclarenp1 = () => {
    gHTMLElements['lobby-1team-2p'].style.display = 'none'
    gHTMLElements['name-p1-2p'].style.display = 'flex'
    corP1 = "laranja";
}

let mercedesp1 = () => {
    gHTMLElements['lobby-1team-2p'].style.display = 'none'
    gHTMLElements['name-p1-2p'].style.display = 'flex'
    corP1 = "preto";
}

let astonmartinp1 = () => {
    gHTMLElements['lobby-1team-2p'].style.display = 'none'
    gHTMLElements['name-p1-2p'].style.display = 'flex'
    corP1 = "verdeEscuro";
}

let ferrarip1 = () => {
    gHTMLElements['lobby-1team-2p'].style.display = 'none'
    gHTMLElements['name-p1-2p'].style.display = 'flex'
    corP1 = "vermelho";
}
//----------------------------------------------------------------------------------------------------------------------

let namep1 = () => {
    gHTMLElements['name-p1-2p'].style.display = 'none'
    gHTMLElements['lobby-2team-2p'].style.display = 'flex'
    nameP1 = document.getElementById('namep1').value;
}

//--------------------------------------------------------------------------------------------------------------------------
let alpinep2 = () => {
    gHTMLElements['lobby-2team-2p'].style.display = 'none'
    gHTMLElements['name-p2-2p'].style.display = 'flex'
    corP2 = "azulClaro";
}

let redbullp2 = () => {
    gHTMLElements['lobby-2team-2p'].style.display = 'none'
    gHTMLElements['name-p2-2p'].style.display = 'flex'
    corP2 = "azulEscuro";
}

let mclarenp2 = () => {
    gHTMLElements['lobby-2team-2p'].style.display = 'none'
    gHTMLElements['name-p2-2p'].style.display = 'flex'
    corP2 = "laranja";
}

let mercedesp2 = () => {
    gHTMLElements['lobby-2team-2p'].style.display = 'none'
    gHTMLElements['name-p2-2p'].style.display = 'flex'
    corP2 = "preto";
}

let astonmartinp2 = () => {
    gHTMLElements['lobby-2team-2p'].style.display = 'none'
    gHTMLElements['name-p2-2p'].style.display = 'flex'
    corP2 = "verdeEscuro";
}

let ferrarip2 = () => {
    gHTMLElements['lobby-2team-2p'].style.display = 'none'
    gHTMLElements['name-p2-2p'].style.display = 'flex'
    corP2 = "vermelho";
}
//-----------------------------------------------------------------------------------------------------------------------
let namep2 = () => {
    gHTMLElements['name-p2-2p'].style.display = 'none'
    gHTMLElements['race'].style.display = 'flex'
    nameP2 = document.getElementById('namep2').value;
    start2p();
    cancelAnimationFrame(funct);
    sounds['theme'].pause();
    sounds['theme'].currentTime = 0;
}
//------------------------------------------------------------------------------------------------------------------------

let podium = () => {
    gHTMLElements['race'].style.display = 'none'
    gHTMLElements['podium'].style.display = 'flex'
    soundVLoop();
    sounds['vitoria'].volume = 1;
    sounds['vitoria'].currentTime = 0;
}
//------------------------------------------------------------------------------------------------------------------------------
let restart = () => {
    gHTMLElements['podium'].style.display = 'none'
    gHTMLElements['lobby'].style.display = 'flex'
    sounds['vitoria'].volume = 0;
}