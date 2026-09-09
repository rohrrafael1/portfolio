function Carro(x, y, teclaMoveUp, teclaMoveDown, teclaMoveRight, teclaMoveLeft, spanHTMLid, cor, name, sound) {
    this.x = x;
    this.y = y;
    this.lado = canvas.width / 52;
    this.vel = 4.5 * canvas.width/1300;
    this.teclaMoveUp = teclaMoveUp;
    this.teclaMoveDown = teclaMoveDown;
    this.teclaMoveRight = teclaMoveRight;
    this.teclaMoveLeft = teclaMoveLeft;
    this.spanHTMLid = spanHTMLid;
    this.cor = cor;
    this.name = name;
    this.imagemAtual = this.cor + "C";
    this.points = 0;
    this.height;
    this.width;
    this.xColisao;
    this.yColisao;
    this.sound = sound;

    if (this.cor === "azulClaro") {
        this.equipe = "ALPINE "
    }
    else if (this.cor === "azulEscuro") {
        this.equipe = "RED BULL "
    }
    else if (this.cor === "laranja") {
        this.equipe = "MCLAREN "
    }
    else if (this.cor === "preto") {
        this.equipe = "MERCEDES "
    }
    else if (this.cor === "verdeEscuro") {
        this.equipe = "ASTON MARTIN "
    }
    else if (this.cor === "vermelho") {
        this.equipe = "FERRARI "
    }



    this.update = () => {

        if (keysPressed[this.teclaMoveUp]) {

            this.y -= this.vel;
            this.imagemAtual = this.cor + "C";
            this.height = this.lado;
            this.width = canvas.width * 5 / 416;
            this.yColisao = this.y;
            this.xColisao = (this.lado * 300 / 1975) + this.x;
            this.sound.play();
        }
        else
        if (keysPressed[this.teclaMoveDown]) {

            this.y += this.vel;
            this.imagemAtual = this.cor + "B";
            this.height = this.lado;
            this.width = canvas.width * 5 / 416;
            this.yColisao = this.y;
            this.xColisao = (this.lado * 300 / 1975) + this.x;
            this.sound.play();
        }
        else
        if (keysPressed[this.teclaMoveLeft]) {

            this.x -= this.vel;
            this.imagemAtual = this.cor + "E";
            this.width = this.lado;
            this.height = canvas.height * 5 / 192;
            this.yColisao = (this.lado * 300 / 1975) + this.y;
            this.xColisao = this.x;
            this.sound.play();
        }
        else
        if (keysPressed[this.teclaMoveRight]) {

            this.x += this.vel;
            this.imagemAtual = this.cor + "D";
            this.width = this.lado;
            this.height = canvas.height * 5 / 192;
            this.yColisao = (this.lado * 300 / 1975) + this.y;
            this.xColisao = this.x;
            this.sound.play();
        }
        else
        {
            this.sound.pause();
            this.sound.currentTime = 0;
        }

        if (this.xColisao < recAF.x + recAF.width &&
            this.xColisao + this.width > recAF.x &&
            this.yColisao < recAF.y + recAF.height &&
            this.yColisao + this.height > recAF.y) {
            this.pontuar();
        }
    
        this.render();

    }

    this.pontuar = () => {

        addEventListener("keydown", function (e) {
            keysPressed[e.key] = false;
        });
        cancelAnimationFrame(funcup);
        cancelAnimationFrame(funclo);
        this.y = y;
        podium();
        document.getElementById('champname').innerHTML = this.name.toUpperCase();
        document.getElementById('champteam').innerHTML = this.equipe;
    };

    this.restart = () => {
        this.y = y;
        this.x = x;
        this.imagemAtual = this.cor + "C"
        this.yColisao = this.y;
        this.xColisao = 300 / 79 + this.x;
    }


    this.render = () => {
        ctx.drawImage(images[this.imagemAtual], this.x, this.y, this.lado, this.lado);
    };


};