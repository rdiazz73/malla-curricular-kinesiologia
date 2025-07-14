const ramos = {
  "Primer año - I semestre": [
    "Rehabilitación e inclusión con enfoque de derechos humanos",
    "Bases químico-biológicas de la célula",
    "Anatomía de sistemas",
    "Corporalidad y actividad física",
    "Fundamentos de kinesiología",
    "Habilidades comunicativas"
  ],
  "Primer año - II semestre": [
    "Fisiología general y neurofisiología",
    "Anatomía sistema musculo esquelético",
    "Fundamentos del movimiento humano",
    "Desarrollo sensoriomotriz en kinesiología",
    "Inglés I"
  ],
  "Segundo año - III semestre": [
    "Fisiología de sistemas",
    "Kinesiología y movimiento humano",
    "Salud pública",
    "Epistemología y metodología de la investigación",
    "Inglés II"
  ],
  "Segundo año - IV semestre": [
    "Fisiopatología",
    "Control motor y análisis kinesiológico del movimiento humano",
    "Razonamiento en kinesiología",
    "Análisis cualitativo y cuantitativo",
    "Inglés III"
  ],
  "Tercer año - V semestre": [
    "Fisiología del ejercicio",
    "Ciclo vital y funcionamiento humano",
    "Integración en kinesiología I",
    "Políticas en rehabilitación e inclusión",
    "Inglés IV"
  ],
  "Tercer año - VI semestre": [
    "Diagnostico interdisciplinario en rehabilitación con perspectiva inclusiva",
    "Evaluación y diagnostico en kinesiología cardiorrespiratorio",
    "Evaluación y diagnóstico en kinesiología musculo esquelético",
    "Evaluación y diagnostico en neurokinesiologia",
    "Atencion primaria y salud familiar",
    "Pensamiento crítico"
  ],
  "Cuarto año - VII semestre": [
    "Agentes físicos",
    "Intervención en kinesiología cardiorespiratoria",
    "Intervención en kinesiología musculo esquelética",
    "Intervención en neurokinesiologia",
    "Administración y gestión en salud",
    "Proceso investigativo para licenciatura I"
  ],
  "Cuarto año - VIII semestre": [
    "Intervención interdisciplinaria en rehabilitación con perspectiva inclusiva",
    "Actividad física y prescripción de ejercicio para la salud",
    "Kinesiología en áreas de especialidad",
    "Integración en kinesiología II",
    "Proyectos, innovación y emprendimiento en kinesiología",
    "Proyecto investigativo para licenciatura II"
  ],
  "Quinto año": [
    "Práctica profesional I",
    "Práctica profesional II",
    "Práctica profesional III",
    "Práctica profesional IV"
  ]
};

const prerequisitos = {
  "Diagnostico interdisciplinario en rehabilitación con perspectiva inclusiva": ["Rehabilitación e inclusión con enfoque de derechos humanos"],
  "Fisiología general y neurofisiología": ["Bases químico-biológicas de la célula"],
  "Anatomía sistema musculo esquelético": ["Anatomía de sistemas"],
  "Desarrollo sensoriomotriz en kinesiología": ["Corporalidad y actividad física"],
  "Pensamiento crítico": ["Habilidades comunicativas"],
  "Fisiología de sistemas": ["Fisiología general y neurofisiología"],
  "Kinesiología y movimiento humano": ["Fundamentos del movimiento humano"],
  "Análisis cualitativo y cuantitativo": ["Epistemología y metodología de la investigación"],
  "Inglés II": ["Inglés I"],
  "Inglés III": ["Inglés II"],
  "Inglés IV": ["Inglés III"],
  "Fisiopatología": ["Fisiología de sistemas"],
  "Fisiología del ejercicio": ["Fisiología de sistemas"],
  "Control motor y análisis kinesiológico del movimiento humano": ["Kinesiología y movimiento humano"],
  "Integración en kinesiología I": ["Razonamiento en kinesiología"],
  "Proceso investigativo para licenciatura I": ["Pensamiento crítico", "Análisis cualitativo y cuantitativo"],
  "Evaluación y diagnostico en kinesiología cardiorrespiratorio": ["Ciclo vital y funcionamiento humano", "Integración en kinesiología I"],
  "Evaluación y diagnóstico en kinesiología musculo esquelético": ["Ciclo vital y funcionamiento humano", "Integración en kinesiología I"],
  "Evaluación y diagnostico en neurokinesiologia": ["Ciclo vital y funcionamiento humano", "Integración en kinesiología I"],
  "Intervención interdisciplinaria en rehabilitación con perspectiva inclusiva": ["Diagnostico interdisciplinario en rehabilitación con perspectiva inclusiva", "Proceso investigativo para licenciatura I"],
  "Intervención en kinesiología cardiorespiratoria": ["Evaluación y diagnostico en kinesiología cardiorrespiratorio"],
  "Intervención en kinesiología musculo esquelética": ["Evaluación y diagnóstico en kinesiología musculo esquelético"],
  "Intervención en neurokinesiologia": ["Evaluación y diagnostico en neurokinesiologia"],
  "Atencion primaria y salud familiar": ["Políticas en rehabilitación e inclusión"],
  "Integración en kinesiología II": ["Integración en kinesiología I"],
  "Actividad física y prescripción de ejercicio para la salud": ["Fisiología del ejercicio"],
  "Proyecto investigativo para licenciatura II": ["Proceso investigativo para licenciatura I"]
};

const estadoRamos = {};

function crearTarjeta(nombre, semestre) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.textContent = nombre;
  div.onclick = () => aprobarRamo(nombre);
  estadoRamos[nombre] = { aprobado: false, element: div, bloqueado: tieneRequisitos(nombre) };
  if (estadoRamos[nombre].bloqueado) div.classList.add("bloqueado");
  const contenedor = document.getElementById(`col-${semestre}`);
  contenedor.appendChild(div);
}

function tieneRequisitos(nombre) {
  return prerequisitos[nombre]?.length > 0;
}

function requisitosAprobados(nombre) {
  if (!prerequisitos[nombre]) return true;
  return prerequisitos[nombre].every(dep => estadoRamos[dep]?.aprobado);
}

function aprobarRamo(nombre) {
  const ramo = estadoRamos[nombre];
  if (!ramo || ramo.bloqueado || ramo.aprobado) return;
  ramo.aprobado = true;
  ramo.element.classList.add("aprobado");

  Object.keys(estadoRamos).forEach(r => {
    if (estadoRamos[r].bloqueado && requisitosAprobados(r)) {
      estadoRamos[r].bloqueado = false;
      estadoRamos[r].element.classList.remove("bloqueado");
    }
  });
}

function crearMalla() {
  const mallaContainer = document.getElementById("malla-container");

  Object.keys(ramos).forEach((semestre, i) => {
    const col = document.createElement("div");
    col.className = "columna-semestre";
    col.id = `col-${i}`;

    const titulo = document.createElement("h3");
    titulo.textContent = semestre;
    col.appendChild(titulo);

    ramos[semestre].forEach(nombre => crearTarjeta(nombre, i));
    mallaContainer.appendChild(col);
  });
}

window.onload = crearMalla;
