const ramos = [
  { nombre: "Rehabilitación e inclusión con enfoque de derechos humanos", abre: ["Diagnostico interdisciplinario en rehabilitación con perspectiva inclusiva"] },
  { nombre: "Bases químico-biológicas de la célula", abre: ["Fisiología general y neurofisiología"] },
  { nombre: "Anatomía de sistemas", abre: ["Anatomía sistema musculo esquelético"] },
  { nombre: "Corporalidad y actividad física", abre: ["Desarrollo sensoriomotriz en kinesiología"] },
  { nombre: "Fundamentos de kinesiología", abre: [] },
  { nombre: "Habilidades comunicativas", abre: ["Pensamiento crítico"] },
  { nombre: "Fisiología general y neurofisiología", abre: ["Fisiología de sistemas"] },
  { nombre: "Anatomía sistema musculo esquelético", abre: [] },
  { nombre: "Fundamentos del movimiento humano", abre: ["Kinesiología y movimiento humano"] },
  { nombre: "Desarrollo sensoriomotriz en kinesiología", abre: [] },
  { nombre: "Inglés I", abre: ["Inglés II"] },
  { nombre: "Fisiología de sistemas", abre: ["Fisiopatología", "Fisiología del ejercicio"] },
  { nombre: "Kinesiología y movimiento humano", abre: ["Control motor y análisis kinesiológico del movimiento humano"] },
  { nombre: "Salud pública", abre: [] },
  { nombre: "Epistemología y metodología de la investigación", abre: ["Análisis cualitativo y cuantitativo"] },
  { nombre: "Inglés II", abre: ["Inglés III"] },
  { nombre: "Fisiopatología", abre: [] },
  { nombre: "Control motor y análisis kinesiológico del movimiento humano", abre: [] },
  { nombre: "Razonamiento en kinesiología", abre: ["Integración en kinesiología I"] },
  { nombre: "Análisis cualitativo y cuantitativo", abre: ["Proceso investigativo para licenciatura I"] },
  { nombre: "Inglés III", abre: ["Inglés IV"] },
  { nombre: "Fisiología del ejercicio", abre: ["Actividad física y prescripción de ejercicio para la salud"] },
  { nombre: "Ciclo vital y funcionamiento humano", abre: ["Evaluación y diagnostico en kinesiología cardiorrespiratorio", "Evaluación y diagnostico en kinesiología musculo esquelético", "Evaluación y diagnostico en neurokinesiologia"] },
  { nombre: "Integración en kinesiología I", abre: ["Integración en kinesiología II", "Evaluación y diagnostico en kinesiología cardiorrespiratorio", "Evaluación y diagnostico en kinesiología musculo esquelético", "Evaluación y diagnostico en neurokinesiologia"] },
  { nombre: "Políticas en rehabilitación e inclusión", abre: ["Atencion primaria y salud familiar"] },
  { nombre: "Inglés IV", abre: [] },
  { nombre: "Diagnostico interdisciplinario en rehabilitación con perspectiva inclusiva", abre: ["Intervención interdisciplinaria en rehabilitación con perspectiva inclusiva"] },
  { nombre: "Evaluación y diagnostico en kinesiología cardiorrespiratorio", abre: ["Intervención en kinesiología cardiorespiratoria"] },
  { nombre: "Evaluación y diagnóstico en kinesiología musculo esquelético", abre: ["Intervención en kinesiología musculo esquelética"] },
  { nombre: "Evaluación y diagnostico en neurokinesiologia", abre: ["Intervención en neurokinesiologia"] },
  { nombre: "Atencion primaria y salud familiar", abre: [] },
  { nombre: "Pensamiento crítico", abre: ["Proceso investigativo para licenciatura I"] },
  { nombre: "Agentes físicos", abre: [] },
  { nombre: "Intervención en kinesiología cardiorespiratoria", abre: [] },
  { nombre: "Intervención en kinesiología musculo esquelética", abre: [] },
  { nombre: "Intervención en neurokinesiologia", abre: [] },
  { nombre: "Administración y gestión en salud", abre: [] },
  { nombre: "Proceso investigativo para licenciatura I", abre: ["Proceso investigativo para licenciatura II"] },
  { nombre: "Intervención interdisciplinaria en rehabilitación con perspectiva inclusiva", abre: [] },
  { nombre: "Actividad física y prescripción de ejercicio para la salud", abre: [] },
  { nombre: "Kinesiología en áreas de especialidad", abre: [] },
  { nombre: "Integración en kinesiología II", abre: [] },
  { nombre: "Proyectos, innovación y emprendimiento en kinesiología", abre: [] },
  { nombre: "Proyecto investigativo para licenciatura II", abre: [] },
  { nombre: "Práctica profesional I", abre: [] },
  { nombre: "Práctica profesional II", abre: [] },
  { nombre: "Práctica profesional III", abre: [] },
  { nombre: "Práctica profesional IV", abre: [] },
];

const aprobados = new Set();

function crearMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  ramos.forEach(ramo => {
    const bloqueado = ramo.abre.length > 0 && ramo.abre.every(n => !aprobados.has(n));
    const div = document.createElement("div");
    div.className = "ramo" + (aprobados.has(ramo.nombre) ? " aprobado" : bloqueado ? " bloqueado" : "");
    div.textContent = ramo.nombre;
    div.onclick = () => {
      if (!bloqueado) {
        if (aprobados.has(ramo.nombre)) {
          aprobados.delete(ramo.nombre);
        } else {
          aprobados.add(ramo.nombre);
        }
        crearMalla();
      }
    };
    container.appendChild(div);
  });
}

crearMalla();
