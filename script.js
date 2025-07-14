// Lista de ramos con sus dependencias
const dependencias = {
  "Rehabilitación e inclusión con enfoque de derechos humanos": ["Diagnostico interdisciplinario en rehabilitación con perspectiva inclusiva"],
  "Bases químico-biológicas de la célula": ["Fisiología general y neurofisiología"],
  "Anatomía de sistemas": ["Anatomía sistema musculo esquelético"],
  "Corporalidad y actividad física": ["Desarrollo sensoriomotriz en kinesiología"],
  "Fundamentos de kinesiología": [],
  "Habilidades comunicativas": ["Pensamiento crítico"],
  "Fisiología general y neurofisiología": ["Fisiología de sistemas"],
  "Anatomía sistema musculo esquelético": [],
  "Fundamentos del movimiento humano": ["Kinesiología y movimiento humano"],
  "Desarrollo sensoriomotriz en kinesiología": [],
  "Inglés I": ["Inglés II"],
  "Fisiología de sistemas": ["Fisiopatología", "Fisiología del ejercicio"],
  "Kinesiología y movimiento humano": ["Control motor y análisis kinesiológico del movimiento humano"],
  "Salud pública": [],
  "Epistemología y metodología de la investigación": ["Análisis cualitativo y cuantitativo"],
  "Inglés II": ["Inglés III"],
  "Fisiopatología": [],
  "Control motor y análisis kinesiológico del movimiento humano": [],
  "Razonamiento en kinesiología": ["Integración en kinesiología I"],
  "Análisis cualitativo y cuantitativo": ["Proceso investigativo para licenciatura I"],
  "Inglés III": ["Inglés IV"],
  "Fisiología del ejercicio": ["Actividad física y prescripción de ejercicio para la salud"],
  "Ciclo vital y funcionamiento humano": [
    "Evaluación y diagnostico en kinesiología cardiorrespiratorio",
    "Evaluación y diagnóstico en kinesiología musculo esquelético",
    "Evaluación y diagnostico en neurokinesiologia"
  ],
  "Integración en kinesiología I": [
    "Integración en kinesiología II",
    "Evaluación y diagnostico en kinesiología cardiorrespiratorio",
    "Evaluación y diagnóstico en kinesiología musculo esquelético",
    "Evaluación y diagnostico en neurokinesiologia"
  ],
  "Políticas en rehabilitación e inclusión": ["Atencion primaria y salud familiar"],
  "Inglés IV": [],
  "Diagnostico interdisciplinario en rehabilitación con perspectiva inclusiva": ["Intervención interdisciplinaria en rehabilitación con perspectiva inclusiva"],
  "Evaluación y diagnostico en kinesiología cardiorrespiratorio": ["Intervención en kinesiología cardiorespiratoria"],
  "Evaluación y diagnóstico en kinesiología musculo esquelético": ["Intervención en kinesiología musculo esquelética"],
  "Evaluación y diagnostico en neurokinesiologia": ["Intervención en neurokinesiologia"],
  "Atencion primaria y salud familiar": [],
  "Pensamiento crítico": ["Proceso investigativo para licenciatura I"],
  "Agentes físicos": [],
  "Intervención en kinesiología cardiorespiratoria": [],
  "Intervención en kinesiología musculo esquelética": [],
  "Intervención en neurokinesiologia": [],
  "Administración y gestión en salud": [],
  "Proceso investigativo para licenciatura I": ["Proceso investigativo para licenciatura II"],
  "Intervención interdisciplinaria en rehabilitación con perspectiva inclusiva": [],
  "Actividad física y prescripción de ejercicio para la salud": [],
  "Kinesiología en áreas de especialidad": [],
  "Integración en kinesiología II": [],
  "Proyectos, innovación y emprendimiento en kinesiología": [],
  "Proyecto investigativo para licenciatura II": [],
  "Práctica profesional I": [],
  "Práctica profesional II": [],
  "Práctica profesional III": [],
  "Práctica profesional IV": []
};

const aprobados = new Set();
const ramosDOM = {};

function crearRamo(nombre) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.innerText = nombre;
  div.dataset.nombre = nombre;
  div.addEventListener("click", () => aprobarRamo(nombre));
  ramosDOM[nombre] = div;
  return div;
}

function aprobarRamo(nombre) {
  const ramo = ramosDOM[nombre];
  if (ramo.classList.contains("bloqueado")) return;
  if (ramo.classList.contains("aprobado")) return;

  ramo.classList.add("aprobado");

  aprobados.add(nombre);
  desbloquearDependientes(nombre);
}

function desbloquearDependientes(nombre) {
  for (const [rama, requisitos] of Object.entries(dependencias)) {
    if (requisitos.includes(nombre)) {
      const todosCumplidos = requisitos.every(r => aprobados.has(r));
      if (todosCumplidos) {
        ramosDOM[rama].classList.remove("bloqueado");
      }
    }
  }
}

function construirMalla() {
  const contenedor = document.getElementById("contenedor-malla");
  for (const nombre in dependencias) {
    const div = document.createElement("div");
    div.className = "semestre";
    const ramo = crearRamo(nombre);
    div.appendChild(ramo);
    contenedor.appendChild(div);
  }

  // Desbloquear los que no tienen requisitos
  for (const [nombre, requisitos] of Object.entries(dependencias)) {
    if (requisitos.length === 0) {
      ramosDOM[nombre].classList.remove("bloqueado");
    }
  }
}

document.addEventListener("DOMContentLoaded", construirMalla);
