const player = document.getElementById("player");
const puntosMarcador = document.getElementById("puntos");
const tiempoMarcador = document.getElementById("tiempo");
const nivelUp = document.getElementById("nivelUp");

const necesarios = 10;
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

function restartWin() {
  if (puntos === necesarios) {
    puntos = 0;
    tiempo = 60;
  }
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
