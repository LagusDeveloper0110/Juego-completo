const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const puntosMarcador = document.getElementById("puntos");
const tiempoMarcador = document.getElementById("tiempo");

const necesarios = 15;
let nivel = 1;
let puntos = 0;
let tiempo = 60;

player.addEventListener("mouseover", (e) => {
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

enemy.addEventListener("mouseover", (e) => {
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

function moverEnemigo() {
  randNum = Math.round(Math.random() * 600);
  randNum2 = Math.round(Math.random() * 600);
  document.getElementById("enemy").style.marginTop = randNum + "px";
  document.getElementById("enemy").style.marginLeft = randNum2 + "px";
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
setInterval(moverEnemigo, 2000);
