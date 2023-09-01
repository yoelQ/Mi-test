
let op_elegida = [];


let rep_a = 0;
let rep_b = 0;
let rep_c = 0;
const mensajeElemento = document.getElementById("mensajeResultado");

function respuesta(num_pregunta,seleccionado){
    op_elegida[num_pregunta] = seleccionado.value;

    id="p" + num_pregunta;
    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";
    seleccionado.parentNode.style.backgroundColor = "#cec0fc";
}

function analizar(){
  
    rep_a = 0;
    rep_b = 0;
    rep_c = 0;
    

    for (const pregunta in op_elegida) {
      if (op_elegida[pregunta] == "") {
        mostrarResultado("Por favor, responde todas las preguntas antes de analizar.");
        return; // Salimos de la función si falta alguna respuesta
      }
          else if (op_elegida[pregunta] === "a") {
            rep_a ++;
        } else if (op_elegida[pregunta] === "b") {
            rep_b++;
        } else if (op_elegida[pregunta] === "c") {
            rep_c++;
        }
        
      }
    // Comparamos los contadores para determinar el resultado
  if (rep_a > rep_b && rep_a > rep_c) {
    mostrarResultado("Tienes tendencia a evitar la procrastinación. Las personas con tendencia a evitar la procrastinación suelen ser organizadas y eficientes. Tienen la capacidad de comenzar tareas importantes de manera temprana y trabajar en ellas de manera constante.");
  } else if (rep_b > rep_a && rep_b > rep_c) {
    mostrarResultado("Eres moderado(a) en cuanto a la procrastinación. Las personas con tendencia moderada a la procrastinación a menudo esperan hasta que el plazo se acerque antes de comenzar sus tareas importantes.");
  } else if (rep_c > rep_a && rep_c> rep_b) {
    mostrarResultado("Tienes tendencia a ser un procrastinador crónico. Las personas con tendencia a ser procrastinadores crónicos suelen postergar tareas importantes repetidamente y las realizan en el último minuto. Pueden experimentar altos niveles de estrés, ansiedad y culpa debido a sus patrones de procrastinación. ");
  }
 } //else {
   // mostrarResultado("Tienes un equilibrio en tus respuestas.");
  //}

  function mostrarResultado(op_elegida) {
    // Muestra el resultado en algún lugar del HTML, como un div con id "resultado"
    document.getElementById("mensajeResultado").textContent = op_elegida;
  }
  

