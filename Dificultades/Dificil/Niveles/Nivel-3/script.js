const player = document.getElementById("player");
const puntosMarcador = document.getElementById("puntos");
const tiempoMarcador = document.getElementById("tiempo");
const nivelUp = document.getElementById("nivelUp");
const enemyUno = document.getElementById("enemy-uno");
const enemyDos = document.getElementById("enemy-dos");
const enemyTres = document.getElementById("enemy-tres");
const enemyCuatro = document.getElementById("enemy-cuatro");

const necesarios = 40;
let nivel = 1;
let puntos = 0;
let tiempo = 60;

player.addEventListener("mouseover", () => {
  puntos++;
  puntosMarcador.innerHTML =
    "Nivel: " +
    nivel +
    "&nbsp;&nbsp;&nbsp" +
    "Puntos: <b>" +
    puntos +
    "/" +
    necesarios +
    "  </b>";

  let randNum = Math.round(Math.random() * 600);
  let randNum2 = Math.round(Math.random() * 600);

  player.style.marginTop = randNum + "px";
  player.style.marginLeft = randNum2 + "px";

  if (puntos === necesarios) {
    nivelUp.removeAttribute("hidden");
  }

  restartWin();
});

enemyUno.addEventListener("mouseover", (e) => {
  alert("Game Over");
  nivel = 1;
  puntos = 0;
  tiempo = 60;
});

enemyDos.addEventListener("mouseover", (e) => {
  alert("Game Over");
  nivel = 1;
  puntos = 0;
  tiempo = 60;
});

enemyTres.addEventListener("mouseover", (e) => {
  alert("Game Over");
  nivel = 1;
  puntos = 0;
  tiempo = 60;
});

enemyCuatro.addEventListener("mouseover", (e) => {
  alert("Game Over");
  nivel = 1;
  puntos = 0;
  tiempo = 60;
});

function restartWin() {
  if (puntos === necesarios) {
    puntos = 0;
    tiempo = 60;
  }
}

function moverEnemyUno() {
  randNum = Math.round(Math.random() * 600);
  randNum2 = Math.round(Math.random() * 600);
  document.getElementById("enemy-uno").style.marginTop = randNum + "px";
  document.getElementById("enemy-uno").style.marginLeft = randNum2 + "px";
}

function moverEnemyDos() {
  randNum = Math.round(Math.random() * 600);
  randNum2 = Math.round(Math.random() * 600);
  document.getElementById("enemy-dos").style.marginTop = randNum + "px";
  document.getElementById("enemy-dos").style.marginLeft = randNum2 + "px";
}

function moverEnemyTres() {
  randNum = Math.round(Math.random() * 600);
  randNum2 = Math.round(Math.random() * 600);
  document.getElementById("enemy-tres").style.marginTop = randNum + "px";
  document.getElementById("enemy-tres").style.marginLeft = randNum2 + "px";
}

function moverEnemyCuatro() {
  randNum = Math.round(Math.random() * 600);
  randNum2 = Math.round(Math.random() * 600);
  document.getElementById("enemy-cuatro").style.marginTop = randNum + "px";
  document.getElementById("enemy-cuatro").style.marginLeft = randNum2 + "px";
}

function restarTiempo() {
  tiempo--;
  document.getElementById("tiempo").innerHTML =
    "&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo;
  if (tiempo == 0) {
    alert("Game Over");
    puntos = 0;
    tiempo = 60;
  }
}

setInterval(restarTiempo, 1000);
setInterval(moverEnemyUno, 400);
setInterval(moverEnemyDos, 400);
setInterval(moverEnemyTres, 400);
setInterval(moverEnemyCuatro, 400);
