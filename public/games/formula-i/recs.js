let paredesX = 
[0, 0, canvas.width * 243 / 260, 0, canvas.width * 229 / 260, canvas.width * 219 / 260, canvas.width * 183 / 260,
canvas.width * 13 / 20,  canvas.width * 129 / 260, canvas.width * 159 / 260, canvas.width * 11 / 26, canvas.width * 7 / 26,
canvas.width * 23 / 130, canvas.width * 29 / 130, canvas.width * 29 / 130, canvas.width * 23 / 130, canvas.width * 8 / 65,
canvas.width * 17 / 260, (canvas.width * 243 / 260) - (canvas.width * 10 / 260)]

let paredesY =
[0, canvas.height - (canvas.height / 10), 0, 0, canvas.height * 300 / 600, canvas.height * 170 / 600, canvas.height * 60 / 600,
canvas.height * 290 / 600, canvas.height * 125 / 600, canvas.height * 300 / 600, canvas.height * 360 / 600, canvas.height * 60 / 600,
canvas.height * 450 / 600, canvas.height * 330 / 600, canvas.height * 210 / 600, canvas.height * 270 / 600, canvas.height * 140 / 600,
canvas.height * 490 / 600, canvas.height * 490 / 600]

let paredesWidth =
[canvas.width, canvas.width, canvas.width/15, canvas.width * 17/260, canvas.width * 7 / 130, canvas.width / 26, canvas.width / 13,
canvas.width * 5 / 26, canvas.width * 2 / 13, canvas.width/26, canvas.width * 2 / 13, canvas.width * 2 / 13, canvas.width * 173 / 260,
canvas.width * 3 / 65, canvas.width * 3 / 65, canvas.width * 3 / 65, canvas.width * 7 / 130, canvas.width * 10/260, canvas.width * 10/260]

let paredesHeight =
[canvas.height/10, canvas.height/10, canvas.height, canvas.height, canvas.height * 30 / 600, canvas.height * 300 / 600, canvas.height * 180 / 600,
canvas.height * 160 / 600, canvas.height * 175 / 600, canvas.height * 50 / 600, canvas.height * 50 / 600, canvas.height * 350 / 600,
canvas.height * 20 / 600, canvas.height * 30 / 600, canvas.height * 30 / 600, canvas.height * 30 / 600, canvas.height * 330 / 600,
canvas.height * 50 / 600, canvas.height * 50 / 600] 

let chegadaX = 
[canvas.width * 229 / 260, (canvas.width * 229 / 260) + 2 * (canvas.width * 1 / 260), (canvas.width * 229 / 260) + 4 * (canvas.width * 1 / 260),
(canvas.width * 229 / 260) + 6 * (canvas.width * 1 / 260), (canvas.width * 229 / 260) + 8 * (canvas.width * 1 / 260), (canvas.width * 229 / 260) + 10 * (canvas.width * 1 / 260),
(canvas.width * 229 / 260) + 12 * (canvas.width * 1 / 260), (canvas.width * 229 / 260) + 1 * (canvas.width * 1 / 260),(canvas.width * 229 / 260) + 3 * (canvas.width * 1 / 260),
(canvas.width * 229 / 260) + 5 * (canvas.width * 1 / 260),(canvas.width * 229 / 260) + 7 * (canvas.width * 1 / 260), (canvas.width * 229 / 260) + 9 * (canvas.width * 1 / 260), 
(canvas.width * 229 / 260) + 11 * (canvas.width * 1 / 260), (canvas.width * 229 / 260) + 13 * (canvas.width * 1 / 260), 
canvas.width * 229 / 260, (canvas.width * 229 / 260) + 2 * (canvas.width * 1 / 260), (canvas.width * 229 / 260) + 4 * (canvas.width * 1 / 260),
(canvas.width * 229 / 260) + 6 * (canvas.width * 1 / 260), (canvas.width * 229 / 260) + 8 * (canvas.width * 1 / 260), (canvas.width * 229 / 260) + 10 * (canvas.width * 1 / 260),
(canvas.width * 229 / 260) + 12 * (canvas.width * 1 / 260)]

let chegadaY = 
[((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 2 * (canvas.height * 5 / 600)), ((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 2 * (canvas.height * 5 / 600)),
((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 2 * (canvas.height * 5 / 600)), ((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 2 * (canvas.height * 5 / 600)),
((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 2 * (canvas.height * 5 / 600)), ((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 2 * (canvas.height * 5 / 600)),
((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 2 * (canvas.height * 5 / 600)), ((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 3 * (canvas.height * 5 / 600)),
((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 3 * (canvas.height * 5 / 600)), ((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 3 * (canvas.height * 5 / 600)),
((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 3 * (canvas.height * 5 / 600)), ((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 3 * (canvas.height * 5 / 600)),
((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 3 * (canvas.height * 5 / 600)), ((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 3 * (canvas.height * 5 / 600)),
((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 4 * (canvas.height * 5 / 600)), ((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 4 * (canvas.height * 5 / 600)),
((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 4 * (canvas.height * 5 / 600)), ((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 4 * (canvas.height * 5 / 600)),
((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 4 * (canvas.height * 5 / 600)), ((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 4 * (canvas.height * 5 / 600)),
((canvas.height * 300 / 600 + canvas.height * 30 / 600) + 4 * (canvas.height * 5 / 600))]
//--------------------------------------------------------------------------------------------------------------------------

let recAC1 = {
    x: canvas.width * 229 / 260,
    y: canvas.height * 300 / 600 + canvas.height * 30 / 600 + (canvas.height * 5 / 600),
    width: canvas.width * 7 / 130,
    height: (canvas.height * 5 / 600),

    render: () => {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(recAC1.x, recAC1.y, recAC1.width, recAC1.height);

    }
}

let recAC2 = {
    x: canvas.width * 229 / 260,
    y: recAC1.y + recAC1.height + 3 * (canvas.height * 1 / 120),
    width: canvas.width * 7 / 130,
    height: (canvas.height * 5 / 600),

    render: () => {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(recAC1.x, recAC2.y, recAC1.width, recAC1.height);

    }
}
//-------------------------------------------------------------------------------------------------------------------------


let recAF = {
    x: recAC1.x,
    y: canvas.height * 300 / 600 + canvas.height * 30 / 600,
    width: recAC1.width,
    height: canvas.height * 4.5 / 600,
}
//------------------------------------------------------------------------------------------------------------------------
