const contenedor = document.getElementById('test')
const botonRes = document.getElementById('boton')
const resultadoTest = document.getElementById('resultado')

const preguntas = [
    {
      pregunta: "1. ¿En qué periodo fue creada la obra “Bodas de Caná”?",
      respuestas: {
        a: "Manierismo",
        b: "Barroco",
        c: "Renacimiento"
      },
      respuestaCorrecta: "c"
    },
    {
      pregunta: "2. ¿Cuánto tiempo tardó Veronese para realizarla?",
      respuestas: {
        a: "15 meses",
        b: "2 años",
        c: "4 meses"
      },
      respuestaCorrecta: "a"
    },
    {
      pregunta: "3. ¿Qué representa?",
      respuestas: {
        a: "Una boda en España",
        b: "Una grupo de músicos",
        c: "Un pasaje del evangelio San Juan"
      },
      respuestaCorrecta: "c"
    },
    {
      pregunta: "4. ¿Qué material utilizó?",
      respuestas: {
        a: "Papel y tinta",
        b: "Óleo y lienzo",
        c: "Acuarela"
      },
      respuestaCorrecta: "b"
    },
    {
        pregunta: "5.	¿En cuantos planos se divide?",
        respuestas: {
            a: "2",
            b: "3",
            c: "4"
      },
      respuestaCorrecta: "a"
    }
]
function mostrarTest(){
  const preguntasYrespuestas = []
  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = []
    for(letraRespuesta in preguntaActual.respuestas){
      respuestas.push(
        `<label>
          <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}">
          ${letraRespuesta}) ${preguntaActual.respuestas[letraRespuesta]}
        </label>`
      )
    }
    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
      <div class="respuestas mb-4">${respuestas.join('')}</div>
      `
    )
  });
  contenedor.innerHTML = preguntasYrespuestas.join('')
}
mostrarTest()

function mostrarResultado(){
  const respuestas = contenedor.querySelectorAll(".respuestas")
  let respuestasCorrectas = 0
  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta]
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`
    const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas)||{}).value
    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
        respuestasCorrectas++
        respuestas[numeroDePregunta].style.color = 'green'
    }else {
      respuestas[numeroDePregunta].style.color = 'red'
    }
  })
  if (respuestasCorrectas>0) {
    swal("Resultado!", `${respuestasCorrectas} aciertos de un total de ${preguntas.length} preguntas`, "success")
  }else {
    swal("Resultado!", `${respuestasCorrectas} aciertos de un total de ${preguntas.length} preguntas`, "error")
  }
}

botonRes.addEventListener('click',mostrarResultado)
