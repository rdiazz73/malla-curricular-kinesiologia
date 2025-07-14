const malla = {
  "1° Semestre": [
    { nombre: "Rehabilitación e inclusión con enfoque de derechos humanos", abre: ["Diagnostico interdisciplinario en rehabilitación con perspectiva inclusiva"] },
    { nombre: "Bases químico-biológicas de la célula", abre: ["Fisiología general y neurofisiología"] },
    { nombre: "Anatomía de sistemas", abre: ["Anatomía sistema musculo esquelético"] },
    { nombre: "Corporalidad y actividad física", abre: ["Desarrollo sensoriomotriz en kinesiología"] },
    { nombre: "Fundamentos de kinesiología", abre: [] },
    { nombre: "Habilidades comunicativas", abre: ["Pensamiento crítico"] }
  ],
  "2° Semestre": [
    { nombre: "Fisiología general y neurofisiología", prerequisitos: ["Bases químico-biológicas de la célula"], abre: ["Fisiología de sistemas"] },
    { nombre: "Anatomía sistema musculo esquelético", prerequisitos: ["Anatomía de sistemas"], abre: [] },
    { nombre: "Fundamentos del movimiento humano", prerequisitos: [], abre: ["Kinesiología y movimiento humano"] },
    { nombre: "Desarrollo sensoriomotriz en kinesiología", prerequisitos: ["Corporalidad y actividad física"], abre: [] },
    { nombre: "Inglés I", abre: ["Inglés II"] }
  ],
  "3° Semestre": [
    { nombre: "Fisiología de sistemas", prerequisitos: ["Fisiología general y neurofisiología"], abre: ["Fisiopatología", "Fisiología del ejercicio"] },
    { nombre: "Kinesiología y movimiento humano", prerequisitos: ["Fundamentos del movimiento humano"], abre: ["Control motor y análisis kinesiológico del movimiento humano"] },
    { nombre: "Salud pública", abre: [] },
    { nombre: "Epistemología y metodología de la investigación", abre: ["Análisis cualitativo y cuantitativo"] },
    { nombre: "Inglés II", prerequisitos: ["Inglés I"], abre: ["Inglés III"] }
  ],
  "4° Semestre": [
    { nombre: "Fisiopatología", prerequisitos: ["Fisiología de sistemas"], abre: [] },
    { nombre: "Control motor y análisis kinesiológico del movimiento humano", prerequisitos: ["Kinesiología y movimiento humano"], abre: [] },
    { nombre: "Razonamiento en kinesiología", abre: ["Integración en kinesiología I"] },
    { nombre: "Análisis cualitativo y cuantitativo", prerequisitos: ["Epistemología y metodología de la investigación"], abre: ["Proceso investigativo para licenciatura I"] },
    { nombre: "Inglés III", prerequisitos: ["Inglés II"], abre: ["Inglés IV"] }
  ],
  "5° Semestre": [
    { nombre: "Fisiología del ejercicio", prerequisitos: ["Fisiología de sistemas"], abre: ["Actividad física y prescripción de ejercicio para la salud"] },
    { nombre: "Ciclo vital y funcionamiento humano", abre: ["Evaluación y diagnostico en kinesiología cardiorrespiratorio", "Evaluación y diagnostico en kinesiología musculo esquelético", "Evaluación y diagnostico en neurokinesiologia"] },
    { nombre: "Integración en kinesiología I", prerequisitos: ["Razonamiento en kinesiología"], abre: ["Integración en kinesiología II", "Evaluación y diagnostico en kinesiología cardiorrespiratorio", "Evaluación y diagnostico en kinesiología musculo esquelético", "Evaluación y diagnostico en neurokinesiologia"] },
    { nombre: "Políticas en rehabilitación e inclusión", abre: ["Atencion primaria y salud familiar"] },
    { nombre: "Inglés IV", prerequisitos: ["Inglés III"], abre: [] }
  ],
  "6° Semestre": [
    { nombre: "Diagnostico interdisciplinario en rehabilitación con perspectiva inclusiva", prerequisitos: ["Rehabilitación e inclusión con enfoque de derechos humanos"], abre: ["Intervención interdisciplinaria en rehabilitación con perspectiva inclusiva"] },
    { nombre: "Evaluación y diagnostico en kinesiología cardiorrespiratorio", prerequisitos: ["Ciclo vital y funcionamiento humano", "Integración en kinesiología I"], abre: ["Intervención en kinesiología cardiorespiratoria"] },
    { nombre: "Evaluación y diagnóstico en kinesiología musculo esquelético", prerequisitos: ["Ciclo vital y funcionamiento humano", "Integración en kinesiología I"], abre: ["Intervención en kinesiología musculo esquelética"] },
    { nombre: "Evaluación y diagnostico en neurokinesiologia", prerequisitos: ["Ciclo vital y funcionamiento humano", "Integración en kinesiología I"], abre: ["Intervención en neurokinesiologia"] },
    { nombre: "Atencion primaria y salud familiar", prerequisitos: ["Políticas en rehabilitación e inclusión"], abre: [] },
    { nombre: "Pensamiento crítico", prerequisitos: ["Habilidades comunicativas"], abre: ["Proceso investigativo para licenciatura I"] }
  ],
  "7° Semestre": [
    { nombre: "Agentes físicos", abre: [] },
    { nombre: "Intervención en kinesiología cardiorespiratoria", prerequisitos: ["Evaluación y diagnostico en kinesiología cardiorrespiratorio"], abre: [] },
    { nombre: "Intervención en kinesiología musculo esquelética", prerequisitos: ["Evaluación y diagnóstico en kinesiología musculo esquelético"], abre: [] },
    { nombre: "Intervención en neurokinesiologia", prerequisitos: ["Evaluación y diagnostico en neurokinesiologia"], abre: [] },
    { nombre: "Administración y gestión en salud", abre: [] },
    { nombre: "Proceso investigativo para licenciatura I", prerequisitos: ["Pensamiento crítico", "Análisis cualitativo y cuantitativo"], abre: ["Proyecto investigativo para licenciatura II"] }
  ],
  "8° Semestre": [
    { nombre: "Intervención interdisciplinaria en rehabilitación con perspectiva inclusiva", prerequisitos: ["Diagnostico interdisciplinario en rehabilitación con perspectiva inclusiva"], abre: [] },
    { nombre: "Actividad física y prescripción de ejercicio para la salud", prerequisitos: ["Fisiología del ejercicio"], abre: [] },
    { nombre: "Kinesiología en áreas de especialidad", abre: [] },
    { nombre: "Integración en kinesiología II", prerequisitos: ["Integración en kinesiología I"], abre: [] },
    { nombre: "Proyectos, innovación y emprendimiento en kinesiología", abre: [] },
    { nombre: "Proyecto investigativo para licenciatura II", prerequisitos: ["Proceso investigativo para licenciatura I"], abre: [] }
  ],
  "9° Semestre": [
    { nombre: "Práctica profesional I", abre: [] },
    { nombre: "Práctica profesional II", abre: [] }
  ],
  "10° Semestre": [
    { nombre: "Práctica profesional III", abre: [] },
    { nombre: "Práctica profesional IV", abre: [] }
  ]
};

const aprobados = new Set();

window.onload = () => {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  for (const [semestre, ramos] of Object.entries(malla)) {
    const columna = document.createElement("div");
    columna.className = "columna-semestre";

    const titulo = document.createElement("h3");
    titulo.textContent = semestre;
    columna.appendChild(titulo);

    ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;
      div.dataset.nombre = ramo.nombre;

      const prereqs = ramo.prerequisitos || [];
      const cumplePrerequisitos = prereqs.every(req => aprobados.has(req));

      if (!cumplePrerequisitos) {
        div.classList.add("bloqueado");
      }

      div.addEventListener("click", () => {
        if (div.classList.contains("bloqueado")) return;

        div.classList.toggle("aprobado");
        const aprobado = div.classList.contains("aprobado");

        if (aprobado) {
          aprobados.add(ramo.nombre);
        } else {
          aprobados.delete(ramo.nombre);
        }

        actualizarBloqueos();
      });

      columna.appendChild(div);
    });

    container.appendChild(columna);
  }
};

function actualizarBloqueos() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;

    let ramo;
    for (const ramos of Object.values(malla)) {
      ramo = ramos.find(r => r.nombre === nombre);
      if (ramo) break;
    }

    const prerequisitos = ramo?.prerequisitos || [];
    const todosCumplidos = prerequisitos.every(req => aprobados.has(req));

    if (todosCumplidos) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
      div.classList.remove("aprobado");
      aprobados.delete(nombre);
    }
  });
}
