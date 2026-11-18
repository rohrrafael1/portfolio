const gHTMLElements = {
    "txt": document.getElementById("txt"),
    "txt2": document.getElementById("txt2"),

    "start": document.getElementById("start"),
    "et1": document.getElementById("ET1"),

    "options": document.getElementsByClassName("btr"),

    "a": document.getElementById("a"),
    "b": document.getElementById("b"),
    "c": document.getElementById("c"),
    "d": document.getElementById("d"),

    certo: document.getElementById("certo"),
    errado: document.getElementById("errado"),
}

let pontuacao;
let corretas;
let errada;
let questao;

function r() {
    gHTMLElements['txt'].style.display = "none";
    gHTMLElements['et1'].style.display = "none";
    gHTMLElements['a'].style.display = "none";
    gHTMLElements['b'].style.display = "none";
    gHTMLElements['c'].style.display = "none";
    gHTMLElements['d'].style.display = "none";

    gHTMLElements['certo'].style.display = "flex";
}

function w() {
    gHTMLElements['txt'].style.display = "none";
    gHTMLElements['et1'].style.display = "none";
    gHTMLElements['a'].style.display = "none";
    gHTMLElements['b'].style.display = "none";
    gHTMLElements['c'].style.display = "none";
    gHTMLElements['d'].style.display = "none";

    gHTMLElements['errado'].style.display = "flex";
}

function show(){
    gHTMLElements['txt'].style.display = "flex";
    gHTMLElements['et1'].style.display = "flex";
    gHTMLElements['a'].style.display = "flex";
    gHTMLElements['b'].style.display = "flex";
    gHTMLElements['c'].style.display = "flex";
    gHTMLElements['d'].style.display = "flex";

    gHTMLElements['certo'].style.display = "none";
    gHTMLElements['errado'].style.display = "none";
}

function rodar() {
    corretas = 0;
    questao = 1;
    gHTMLElements['txt'].innerHTML = "Em quais estados físicos existe água em Marte?";
    gHTMLElements['start'].style.display = 'none';
    gHTMLElements['txt2'].style.display = 'none';

    gHTMLElements['a'].onclick = q1c;
    gHTMLElements['b'].onclick = q1e;
    gHTMLElements['c'].onclick = q1e;
    gHTMLElements['d'].onclick = q1e;

    gHTMLElements['a'].innerHTML = "Sólido, Líquido e Gasoso.";//certa
    gHTMLElements['b'].innerHTML = "Gasoso e Líquido";
    gHTMLElements['c'].innerHTML = "Sólido e líquido";
    gHTMLElements['d'].innerHTML = "Apenas gasoso";

    gHTMLElements['a'].style.display = 'flex';
    gHTMLElements['b'].style.display = 'flex';
    gHTMLElements['c'].style.display = 'flex';
    gHTMLElements['d'].style.display = 'flex';
}

function q1c() {
    r();
    corretas = 1;
    setTimeout(q1, 1500)
}

function q1e() {
    w();
    setTimeout(q1, 1500)
}

function q1() {
    questao = 2;
    gHTMLElements['txt'].innerHTML = "Quais as temperaturas de Marte?";

    gHTMLElements['a'].onclick = q2e;
    gHTMLElements['b'].onclick = q2e;
    gHTMLElements['c'].onclick = q2e;
    gHTMLElements['d'].onclick = q2c;

    gHTMLElements['a'].innerHTML = "-50 a 103 graus Celsius";
    gHTMLElements['b'].innerHTML = "-121 a -19 graus Celsius";
    gHTMLElements['c'].innerHTML = "-117 a 34 graus Celsius";
    gHTMLElements['d'].innerHTML = "-125 a 22 graus Celsius";//certa

    show();
}

function q2c() {
    r();
    corretas += 1;
    setTimeout(q2, 1500)
}

function q2e() {
    w();
    setTimeout(q2, 1500)
}

function q2() {
    questao = 3;
    gHTMLElements['txt'].innerHTML = "Qual a massa de Marte em kg?";

    gHTMLElements['a'].onclick = q3e;
    gHTMLElements['b'].onclick = q3e;
    gHTMLElements['c'].onclick = q3e;
    gHTMLElements['d'].onclick = q3c;

    gHTMLElements['a'].innerHTML = "808 x 10^21 kg";
    gHTMLElements['b'].innerHTML = "67,1 x 10^24 kg";
    gHTMLElements['c'].innerHTML = "808 x 10^23 kg";
    gHTMLElements['d'].innerHTML = "6,39 x 10^23 kg";//certa

    show();
}

function q3c() {
    r();
    corretas += 1;
    setTimeout(q3, 1500)
}

function q3e() {
    w();
    setTimeout(q3, 1500)
}

function q3() {
    questao = 4;
    gHTMLElements['txt'].innerHTML = "Qual a duração do dia em Marte?";

    gHTMLElements['a'].onclick = q4e;
    gHTMLElements['b'].onclick = q4e;
    gHTMLElements['c'].onclick = q4c;
    gHTMLElements['d'].onclick = q4e;

    gHTMLElements['a'].innerHTML = "28 horas e 0 minutos";
    gHTMLElements['b'].innerHTML = "68 horas e 9 minutos";
    gHTMLElements['c'].innerHTML = "24 horas e 37 minutos";//certa
    gHTMLElements['d'].innerHTML = "22 horas e 48 minutos";

    show();
}

function q4c() {
    r();
    corretas += 1;
    setTimeout(q4, 1500)
}

function q4e() {
    w();
    setTimeout(q4, 1500)
}

function q4() {
    questao = 5;
    gHTMLElements['txt'].innerHTML = "Quais rochas compõem o solo marciano?";

    gHTMLElements['a'].onclick = q5e;
    gHTMLElements['b'].onclick = q5e;
    gHTMLElements['c'].onclick = q5c;
    gHTMLElements['d'].onclick = q5e;

    gHTMLElements['a'].innerHTML = "Metamórficas";
    gHTMLElements['b'].innerHTML = "Metamórficas e Sedimentares";
    gHTMLElements['c'].innerHTML = "Magmáticas e Sedimentares";//certa
    gHTMLElements['d'].innerHTML = "Sedimentares";

    show();
}

function q5c() {
    r();
    corretas += 1;
    setTimeout(q5, 1500)
}

function q5e() {
    w();
    setTimeout(q5, 1500)
}

function q5() {
    questao = 6;
    gHTMLElements['txt'].innerHTML = "O que a sonda Perseverance da NASA faz?";

    gHTMLElements['a'].onclick = q6c;
    gHTMLElements['b'].onclick = q6e;
    gHTMLElements['c'].onclick = q6e;
    gHTMLElements['d'].onclick = q6e;

    gHTMLElements['a'].innerHTML = "Investiga a possibilidade de haver ou ter havido vida em Marte";//certa
    gHTMLElements['b'].innerHTML = "Investiga a possibilidade de haver ou ter havido água em Marte";
    gHTMLElements['c'].innerHTML = "Conduz estudos acerca do relevo de Marte";
    gHTMLElements['d'].innerHTML = "Conduz estudos acerca de quanta água líquida tem em Marte";

    show();
}

function q6c() {
    r();
    corretas += 1;
    setTimeout(q6, 1500)
}

function q6e() {
    w();
    setTimeout(q6, 1500)
}

function q6() {
    questao = 7;
    gHTMLElements['txt'].innerHTML = "Qual o ponto mais alto de Marte e sua altitude?";

    gHTMLElements['a'].onclick = q7e;
    gHTMLElements['b'].onclick = q7c;
    gHTMLElements['c'].onclick = q7e;
    gHTMLElements['d'].onclick = q7e;

    gHTMLElements['a'].innerHTML = "Monte Thelos; 15km";
    gHTMLElements['b'].innerHTML = "Monte Olimpo; 25km";//certa
    gHTMLElements['c'].innerHTML = "Monte Outerest; 33km";
    gHTMLElements['d'].innerHTML = "Monte Frisis; 30km";

    show();
}

function q7c() {
    r();
    corretas += 1;
    setTimeout(q7, 1500)
}

function q7e() {
    w();
    setTimeout(q7, 1500)
}

function q7() {
    questao = 8;
    gHTMLElements['txt'].innerHTML = "O que a sonda Curiosity da NASA descobriu?";

    gHTMLElements['a'].onclick = q8c;
    gHTMLElements['b'].onclick = q8e;
    gHTMLElements['c'].onclick = q8e;
    gHTMLElements['d'].onclick = q8e;

    gHTMLElements['a'].innerHTML = "Moléculas de água em Marte";//certa
    gHTMLElements['b'].innerHTML = "Resquícios de esqueletos em Marte";
    gHTMLElements['c'].innerHTML = "Pegadas de hominídeos em Marte";
    gHTMLElements['d'].innerHTML = "O ponto mais alto de Marte";

    show();
}

function q8c() {
    r();
    corretas += 1;
    setTimeout(q8, 1500)
}

function q8e() {
    w();
    setTimeout(q8, 1500)
}

function q8() {
    questao = 9;
    gHTMLElements['txt'].innerHTML = "Quantas missões espacias foram realizadas em Marte?";

    gHTMLElements['a'].onclick = q9e;
    gHTMLElements['b'].onclick = q9e;
    gHTMLElements['c'].onclick = q9e;
    gHTMLElements['d'].onclick = q9c;

    gHTMLElements['a'].innerHTML = "0";
    gHTMLElements['b'].innerHTML = "3";
    gHTMLElements['c'].innerHTML = "5";
    gHTMLElements['d'].innerHTML = "40";//certa

    show();
}

function q9c() {
    r();
    corretas += 1;
    setTimeout(q9, 1500)
}

function q9e() {
    w();
    setTimeout(q9, 1500)
}

function q9() {
    questao = 10;
    gHTMLElements['txt'].innerHTML = "O núcleo metálico denso de Marte é coberto por um manto de...";

    gHTMLElements['a'].onclick = q10e;
    gHTMLElements['b'].onclick = q10e;
    gHTMLElements['c'].onclick = q10e;
    gHTMLElements['d'].onclick = q10c;

    gHTMLElements['a'].innerHTML = "Lava";
    gHTMLElements['b'].innerHTML = "Ferro líquido";
    gHTMLElements['c'].innerHTML = "Lítio";
    gHTMLElements['d'].innerHTML = "Silicato";//certa

    show();
}

function q10c() {
    r();
    corretas += 1;
    setTimeout(q10, 1500)
}

function q10e() {
    w();
    setTimeout(q10, 1500)
}

function q10() {
    questao = 11;
    gHTMLElements['txt'].innerHTML = "Marte tem uma camada de gelo de qual estado americano?";

    gHTMLElements['a'].onclick = q11e;
    gHTMLElements['b'].onclick = q11e;
    gHTMLElements['c'].onclick = q11c;
    gHTMLElements['d'].onclick = q11e;

    gHTMLElements['a'].innerHTML = "Massachusetts";
    gHTMLElements['b'].innerHTML = "Washington";
    gHTMLElements['c'].innerHTML = "Texas";//certa
    gHTMLElements['d'].innerHTML = "Alaska";

    show();
}

function q11c() {
    r();
    corretas += 1;
    setTimeout(q11, 1500)
}

function q11e() {
    w()
    setTimeout(q11, 1500)
}

function q11() {
    questao = 12;
    gHTMLElements['txt'].innerHTML = "Quanto dura o ano em Marte?";

    gHTMLElements['a'].onclick = q12e;
    gHTMLElements['b'].onclick = q12e;
    gHTMLElements['c'].onclick = q12c;
    gHTMLElements['d'].onclick = q12e;

    gHTMLElements['a'].innerHTML = "365 dias";
    gHTMLElements['b'].innerHTML = "496 dias";
    gHTMLElements['c'].innerHTML = "687 dias";//certa
    gHTMLElements['d'].innerHTML = "934 dias";

    show();
}

function q12c() {
    r();
    corretas += 1;
    setTimeout(q12, 1500)
}

function q12e() {
    w();
    setTimeout(q12, 1500)
}

function q12() {

    gHTMLElements['txt'].innerHTML = "Você acertou " + corretas + "/12!";

    let term;

    if (corretas <= 2){
        term = "um verdadeiro e pífio terráqueo, que logo será invadido!";
    } else if (corretas > 2 && corretas <= 5){
        term = "um aspirante à exploração espacial, mas, com todo respeito, tem que melhorar muito.";
    }else if (corretas > 5 && corretas <= 7){
        term = "um grande explorador espacial! É uma honra conhecer você.";
    }else if (corretas > 7 && corretas <= 11){
        term = "um dos melhores astronautas que já conheci! Pode me dar seu autógrafo?";
    } else {
        term="o futuro rei de Marte! Que vossa realeza seja louvada!";
    }

    gHTMLElements['txt2'].innerHTML = "Com base nisso, seu desempenho foi digno de " + term;


    gHTMLElements['txt'].style.display = "flex";
    gHTMLElements['txt2'].style.display = "flex";

    gHTMLElements['et1'].style.display = "flex";
    gHTMLElements['certo'].style.display = "none";
    gHTMLElements['errado'].style.display = "none";

    gHTMLElements['a'].onclick = rodar;
    gHTMLElements['a'].innerHTML = "JOGAR DE NOVO";
    gHTMLElements['a'].style.display = "flex";
}
