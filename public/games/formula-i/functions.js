let touch = {};

let scaleFactorX = virtualWidth / canvas_width
let scaleFactorY = virtualHeight/ canvas_height

//quando ele comeca o touch
addEventListener('touchstart', e => {

  //captar coordenada do touch em object
  touch = {
    x: e.touches[0].clientX * scaleFactorX,
    y: e.touches[0].clientY * scaleFactorY,
  }

  distanceXU = Math.abs(touch.x - upCircle.x)
  distanceYU = Math.abs(touch.y - upCircle.y)
  distanceXD = Math.abs(touch.x - downCircle.x)
  distanceYD = Math.abs(touch.y - downCircle.y)
  distanceXL = Math.abs(touch.x - leftCircle.x)
  distanceYL = Math.abs(touch.y - leftCircle.y)
  distanceXR = Math.abs(touch.x - rightCircle.x)
  distanceYR = Math.abs(touch.y - rightCircle.y)

  distanceU = Math.hypot(distanceXU, distanceYU)
  distanceD = Math.hypot(distanceXD, distanceYD)
  distanceL = Math.hypot(distanceXL, distanceYL)
  distanceR = Math.hypot(distanceXR, distanceYR)

  //condicoes para aplicar movimento no carrinho, simulando clicar no teclado
  if (distanceU <= 32) {
    keysPressed['ArrowUp'] = true;
  } else if (distanceD <= 32) {
    keysPressed['ArrowDown'] = true;
  } else if (distanceR <= 32) {
    keysPressed['ArrowRight'] = true;
  } else if (distanceL <= 32) {
    keysPressed['ArrowLeft'] = true;
  }
})

//quando ele solta o dedo
addEventListener('touchend', e => {
  //parar o movimento
  keysPressed['ArrowUp'] = false;
  keysPressed['ArrowDown'] = false;
  keysPressed['ArrowRight'] = false;
  keysPressed['ArrowLeft'] = false;

})

//cordenadas circle tão definidas e constantes