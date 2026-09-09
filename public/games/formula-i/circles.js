let upCircle =
{
    x: canvas.width / 2,
    y: canvas.height * (50/600),
    r: 30,

    render: function () {
        ctx.beginPath();
        ctx.fillStyle = "orange";
        ctx.arc(upCircle.x, upCircle.y, upCircle.r, 0, Math.PI * 2);
        ctx.fill();
    } 
}

let downCircle =
{
    x: canvas.width / 2,
    y: canvas.height * (550/600),
    r: 30,

    render: function () {
        ctx.beginPath();
        ctx.fillStyle = "orange";
        ctx.arc(downCircle.x, downCircle.y, downCircle.r, 0, Math.PI * 2);
        ctx.fill();
    } 
}

let leftCircle =
{
    x: canvas.width * (50/1300),
    y: canvas.height / 2,
    r: 30,

    render: function () {
        ctx.beginPath();
        ctx.fillStyle = "orange";
        ctx.arc(leftCircle.x, leftCircle.y, leftCircle.r, 0, Math.PI * 2);
        ctx.fill();
    } 
}

let rightCircle =
{
    x: canvas.width * (1250/1300),
    y: canvas.height / 2,
    r: 30,

    render: function () {
        ctx.beginPath();
        ctx.fillStyle = "orange";
        ctx.arc(rightCircle.x, rightCircle.y, rightCircle.r, 0, Math.PI * 2);
        ctx.fill();
    } 
}