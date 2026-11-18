let counter = 0;
let texto = document.getElementById("text");
let button = document.getElementById("btn");

let curiosidades = [
    "O planeta Marte recebe o nome de 'Marte' em homenagem ao Deus romano da guerra. Se algum dia enfrentarmos eles em uma guerra, teremos problemas!",
    "O planeta é muitas vezes descrito como o planeta vermelho graças ao óxido de ferro, que por ter a coloração avermelhada confere esse aspecto aos nossos vizinhos no sistema solar.",
    "Marte possui duas pequenas luas de formato irregular: Fobos (medo) e Deimos (pânico). Seus nomes derivam da mitologia grega e representam os filhos de Ares (Marte) e Afrodite (Vênus). Por que eles nunca dão um nome mais atual?",
    "A duração do dia em Marte aproxima-se do planeta Terra, com 24 horas e 37 minutos, embora o ano marciano tenha duração de 687 dias terrestres. Já pensou ter tudo isso de dias de aula entre as férias?",
    "A massa de Marte é de 6,4 vezes 10, vezes 10, vezes 10... (vinte e três vezes) kg. Comprar isso tudo de ouro saíria muito caro!",
    "As temperaturas de Marte variam de 22 a -125 graus celsius. Lembre-se de levar um casaco!",
    "A atmosfera de Marte é 95% composta por CO" + "2" + ". Acho que teríamos dificuldades para respirar.",
    "A gravidade de Marte é cerca de um terço da terrestre. Se quiser se sentir mais leve, vá para lá!",
    "Em Marte existe água nos três estados físicos. Em que região que ficam esses estados?",
    "O primeiro registro de Marte data 1534 a.C., no Egito Antigo. Com isso, concluímos que Marte é mais velho que o Michael Jackson!",
    "Você leu todas as curiosidades! Recomendo que visite as outras abas!"
]


let invisible = curiosidades.lenght;

function toggleText() {
    button.textContent = "Próxima";
}

function aparecer() {
    let mult = curiosidades.length - 2;
    let i = Math.floor(Math.random() * mult);
    curiosidade = curiosidades[i];
    texto.innerHTML = curiosidade;
    counter += 1;
    curiosidades.splice(i, 1);
    toggleText();
    if (curiosidades.length == 1){
        texto.innerHTML = curiosidades[0];
        curiosidades = [
            "O planeta Marte recebe o nome de 'Marte' em homenagem ao Deus romano da guerra. Se algum dia enfrentarmos eles em uma guerra, teremos problemas!",
            "O planeta é muitas vezes descrito como o planeta vermelho graças ao óxido de ferro, que por ter a coloração avermelhada confere esse aspecto aos nossos vizinhos no sistema solar.",
            "Marte possui duas pequenas luas de formato irregular: Fobos (medo) e Deimos (pânico). Seus nomes derivam da mitologia grega e representam os filhos de Ares (Marte) e Afrodite (Vênus). Por que eles nunca dão um nome mais atual?",
            "A duração do dia em Marte aproxima-se do planeta Terra, com 24 horas e 37 minutos, embora o ano marciano tenha duração de 687 dias terrestres. Já pensou ter tudo isso de dias de aula entre as férias?",
            "A massa de Marte é de 6,4" + Math.pow(10, 23) + " kg. Comprar isso tudo de ouro saíria muito caro!",
            "As temperaturas de Marte variam de 22 a -125 graus celsius. Lembre-se de levar um casaco!",
            "A atmosfera de Marte é 95% composta por CO" + "2" + " . Acho que teríamos dificuldades para respirar.",
            "A gravidade de Marte é cerca de um terço da terrestre. Se quiser se sentir mais leve, vá para lá!",
            "Em Marte existe água nos três estados físicos. Em que região que ficam esses estados?",
            "O primeiro registro de Marte data 1534 a.C., no Egito Antigo. Com isso, concluímos que Marte é mais velho que o Michael Jackson!",
            "A distância média de Marte ao Sol é de 227.943.824 km! Já pensou ter que decorar esse número?",
            "Você leu todas as curiosidades! Recomendo que visite as outras abas!"
        ];
        button.textContent = "Reiniciar Curiosidades";
    }
}
// COMPLETAR CÓDIGO ->  VOLTAR NOME BOTÃO
