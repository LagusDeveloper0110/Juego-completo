const facil = document.getElementById("facil");
const medio = document.getElementById("medio");
const dificil = document.getElementById("dificil");
const dios = document.getElementById("dios");
const uno = document.getElementById("uno")
const dos = document.getElementById("dos")
const tres = document.getElementById("tres")
const cuatro = document.getElementById("cuatro")
const cinco = document.getElementById("cinco")
const seis = document.getElementById("seis")

facil.addEventListener("click", (e) => {
  facil.style.color = "green"
  uno.href ='/Dificultades/Facil/Niveles/Nivel-1/nivel-1.html'
  dos.href ='/Dificultades/Facil/Niveles/Nivel-2/nivel-2.html'
  tres.href ='/Dificultades/Facil/Niveles/Nivel-3/nivel-3.html'
  cuatro.href ='/Dificultades/Facil/Niveles/Nivel-4/nivel-4.html'
  cinco.href ='/Dificultades/Facil/Niveles/Nivel-5/nivel-5.html'
  seis.href ='/Dificultades/Facil/Niveles/Nivel-6/nivel-6.html'
});

medio.addEventListener("click", (e) => {
    medio.style.color = "green"
    uno.href ='/Dificultades/Medio/Niveles/Nivel-1/nivel-1.html'
    dos.href ='/Dificultades/Medio/Niveles/Nivel-2/nivel-2.html'
    tres.href ='/Dificultades/Medio/Niveles/Nivel-3/nivel-3.html'
    cuatro.href ='/Dificultades/Medio/Niveles/Nivel-4/nivel-4.html'
    cinco.href ='/Dificultades/Medio/Niveles/Nivel-5/nivel-5.html'
    seis.href ='/Dificultades/Medio/Niveles/Nivel-6/nivel-6.html'
  });

  dificil.addEventListener("click", (e) => {
    dificil.style.color = "green"
    uno.href ='/Dificultades/Dificil/Niveles/Nivel-1/nivel-1.html'
    dos.href ='/Dificultades/Dificil/Niveles/Nivel-2/nivel-2.html'
    tres.href ='/Dificultades/Dificil/Niveles/Nivel-3/nivel-3.html'
    cuatro.href ='/Dificultades/Dificil/Niveles/Nivel-4/nivel-4.html'
    cinco.href ='/Dificultades/Dificil/Niveles/Nivel-5/nivel-5.html'
    seis.href ='/Dificultades/Dificil/Niveles/Nivel-6/nivel-6.html'
  });

  dios.addEventListener("click", (e) => {
    dios.style.color = "green"
    uno.href ='/Dificultades/Su Puta Madre/Niveles/Nivel-1/nivel-1.html'
    dos.href ='/Dificultades/Su Puta Madre/Niveles/Nivel-2/nivel-2.html'
    tres.href ='/Dificultades/Su Puta Madre/Niveles/Nivel-3/nivel-3.html'
    cuatro.href ='/Dificultades/Su Puta Madre/Niveles/Nivel-4/nivel-4.html'
    cinco.href ='/Dificultades/Su Puta Madre/Niveles/Nivel-5/nivel-5.html'
    seis.href ='/Dificultades/Su Puta Madre/Niveles/Nivel-6/nivel-6.html'
  });

