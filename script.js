.progress-bar {
    --progress: 0%;
    position: relative;
}
.progress-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: var(--progress);
    background-color: #4CAF50;
    transition: width 0.5s ease;
}
document.addEventListener('DOMContentLoaded', function() {
    // Datos de la malla curricular
    const curriculumData = [
        {
            year: "Primer Año",
            semesters: [
                {
                    semester: "I Semestre",
                    courses: [
                        { 
                            name: "Rehabilitación e inclusión con enfoque de derechos humanos", 
                            unlocks: ["Diagnostico interdisciplinario en rehabilitación con perspectiva inclusiva"],
                            requirements: []
                        },
                        { 
                            name: "Bases químico-biológicas de la célula", 
                            unlocks: ["Fisiología general y neurofisiología"],
                            requirements: []
                        },
                        { 
                            name: "Anatomía de sistemas", 
                            unlocks: ["Anatomía sistema músculo esquelético"],
                            requirements: []
                        },
                        { 
                            name: "Corporalidad y actividad física", 
                            unlocks: ["Desarrollo sensoriomotriz en kinesiología"],
                            requirements: []
                        },
                        { 
                            name: "Fundamentos de kinesiología", 
                            unlocks: [],
                            requirements: []
                        },
                        { 
                            name: "Habilidades comunicativas", 
                            unlocks: ["Pensamiento crítico"],
                            requirements: []
                        }
                    ]
                },
                {
                    semester: "II Semestre",
                    courses: [
                        { 
                            name: "Fisiología general y neurofisiología", 
                            unlocks: ["Fisiología de sistemas"],
                            requirements: ["Bases químico-biológicas de la célula"]
                        },
                        { 
                            name: "Anatomía sistema musculo esquelético", 
                            unlocks: [],
                            requirements: ["Anatomía de sistemas"]
                        },
                        { 
                            name: "Fundamentos del movimiento humano", 
                            unlocks: ["Kinesiología y movimiento humano"],
                            requirements: []
                        },
                        { 
                            name: "Desarrollo sensoriomotriz en kinesiología", 
                            unlocks: [],
                            requirements: ["Corporalidad y actividad física"]
                        },
                        { 
                            name: "Inglés I", 
                            unlocks: ["Inglés II"],
                            requirements: []
                        }
                    ]
                }
            ]
        },
        {
            year: "Segundo Año",
            semesters: [
                {
                    semester: "III Semestre",
                    courses: [
                        { 
                            name: "Fisiología de sistemas", 
                            unlocks: ["Fisiopatología y fisiología del ejercicio"],
                            requirements: ["Fisiología general y neurofisiología"]
                        },
                        { 
                            name: "Kinesiología y movimiento humano", 
                            unlocks: ["Control motor y análisis kinesiológico del movimiento humano"],
                            requirements: ["Fundamentos del movimiento humano"]
                        },
                        { 
                            name: "Salud pública", 
                            unlocks: [],
                            requirements: []
                        },
                        { 
                            name: "Epistemología y metodología de la investigación", 
                            unlocks: ["Análisis cualitativo y cuantitativo"],
                            requirements: []
                        },
                        { 
                            name: "Inglés II", 
                            unlocks: ["Inglés III"],
                            requirements: ["Inglés I"]
                        }
                    ]
                },
                {
                    semester: "IV Semestre",
                    courses: [
                        { 
                            name: "Fisiopatología", 
                            unlocks: [],
                            requirements: ["Fisiología de sistemas"]
                        },
                        { 
                            name: "Control motor y análisis kinesiológico del movimiento humano", 
                            unlocks: [],
                            requirements: ["Kinesiología y movimiento humano"]
                        },
                        { 
                            name: "Razonamiento en kinesiología", 
                            unlocks: ["Integración en kinesiología I"],
                            requirements: []
                        },
                        { 
                            name: "Análisis cualitativo y cuantitativo", 
                            unlocks: ["Proceso investigativo para licenciatura I"],
                            jointRequirements: ["Pensamiento crítico"],
                            requirements: ["Epistemología y metodología de la investigación"]
                        },
                        { 
                            name: "Inglés III", 
                            unlocks: ["Inglés IV"],
                            requirements: ["Inglés II"]
                        }
                    ]
                }
            ]
        },
        {
            year: "Tercer Año",
            semesters: [
                {
                    semester: "V Semestre",
                    courses: [
                        { 
                            name: "Fisiología del ejercicio", 
                            unlocks: ["Actividad física y prescripción de ejercicio para la salud"],
                            requirements: ["Fisiología de sistemas"]
                        },
                        { 
                            name: "Ciclo vital y funcionamiento humano", 
                            unlocks: [
                                "Evaluación y diagnostico en kinesiología cardiorespiratorio",
                                "Evaluación y diagnostico en kinesiología en musculo esquelético",
                                "Evaluación y diagnostico en kinesiología en neurokinesiología"
                            ],
                            jointRequirements: ["Integración en kinesiología I"],
                            requirements: []
                        },
                        { 
                            name: "Integración en kinesiología I", 
                            unlocks: [
                                "Integración en kinesiología II",
                                "Evaluación y diagnostico en kinesiología cardiorespiratorio",
                                "Evaluación y diagnostico en kinesiología en musculo esquelético",
                                "Evaluación y diagnostico en kinesiología en neurokinesiología"
                            ],
                            jointRequirements: ["Ciclo vital y funcionamiento humano"],
                            requirements: ["Razonamiento en kinesiología"]
                        },
                        { 
                            name: "Políticas en rehabilitación e inclusión", 
                            unlocks: ["Atención primaria y salud familiar"],
                            requirements: []
                        },
                        { 
                            name: "Inglés IV", 
                            unlocks: [],
                            requirements: ["Inglés III"]
                        }
                    ]
                },
                {
                    semester: "VI Semestre",
                    courses: [
                        { 
                            name: "Diagnostico interdisciplinario en rehabilitación con perspectiva inclusiva", 
                            unlocks: ["Intervención interdisciplinaria en rehabilitación con perspectiva inclusiva"],
                            jointRequirements: ["Proceso investigativo para la licenciatura I"],
                            requirements: ["Rehabilitación e inclusión con enfoque de derechos humanos"]
                        },
                        { 
                            name: "Evaluación y diagnostico en kinesiología cardiorrespiratorio", 
                            unlocks: ["Intervención en kinesiología cardiorespiratoria"],
                            requirements: ["Ciclo vital y funcionamiento humano", "Integración en kinesiología I"]
                        },
                        { 
                            name: "Evaluación y diagnóstico en kinesiología musculo esquelético", 
                            unlocks: ["Intervención en kinesiología musculo esquelética"],
                            requirements: ["Ciclo vital y funcionamiento humano", "Integración en kinesiología I"]
                        },
                        { 
                            name: "Evaluación y diagnostico en neurokinesiologia", 
                            unlocks: ["Intervención en neurokinesiologia"],
                            requirements: ["Ciclo vital y funcionamiento humano", "Integración en kinesiología I"]
                        },
                        { 
                            name: "Atencion primaria y salud familiar", 
                            unlocks: [],
                            requirements: ["Políticas en rehabilitación e inclusión"]
                        },
                        { 
                            name: "Pensamiento crítico", 
                            unlocks: ["Proceso investigativo para licenciatura I"],
                            jointRequirements: ["Análisis cualitativo y cuantitativo"],
                            requirements: ["Habilidades comunicativas"]
                        }
                    ]
                }
            ]
        },
        {
            year: "Cuarto Año",
            semesters: [
                {
                    semester: "VII Semestre",
                    courses: [
                        { 
                            name: "Agentes físicos", 
                            unlocks: [],
                            requirements: []
                        },
                        { 
                            name: "Intervención en kinesiología cardiorespiratoria", 
                            unlocks: [],
                            requirements: ["Evaluación y diagnostico en kinesiología cardiorrespiratorio"]
                        },
                        { 
                            name: "Intervención en kinesiología musculo esquelética", 
                            unlocks: [],
                            requirements: ["Evaluación y diagnóstico en kinesiología musculo esquelético"]
                        },
                        { 
                            name: "Intervención en neurokinesiologia", 
                            unlocks: [],
                            requirements: ["Evaluación y diagnostico en neurokinesiologia"]
                        },
                        { 
                            name: "Administración y gestión en salud", 
                            unlocks: [],
                            requirements: []
                        },
                        { 
                            name: "Proceso investigativo para licenciatura I", 
                            unlocks: ["Proceso investigativo para licenciatura II"],
                            requirements: ["Análisis cualitativo y cuantitativo", "Pensamiento crítico"]
                        }
                    ]
                },
                {
                    semester: "VIII Semestre",
                    courses: [
                        { 
                            name: "Intervención interdisciplinaria en rehabilitación con perspectiva inclusiva", 
                            unlocks: [],
                            requirements: ["Diagnostico interdisciplinario en rehabilitación con perspectiva inclusiva", "Proceso investigativo para la licenciatura I"]
                        },
                        { 
                            name: "Actividad física y prescripción de ejercicio para la salud", 
                            unlocks: [],
                            requirements: ["Fisiología del ejercicio"]
                        },
                        { 
                            name: "Kinesiología en áreas de especialidad", 
                            unlocks: [],
                            requirements: []
                        },
                        { 
                            name: "Integración en kinesiología II", 
                            unlocks: [],
                            requirements: ["Integración en kinesiología I"]
                        },
                        { 
                            name: "Proyectos, innovación y emprendimiento en kinesiología", 
                            unlocks: [],
                            requirements: []
                        },
                        { 
                            name: "Proyecto investigativo para licenciatura II", 
                            unlocks: [],
                            requirements: ["Proceso investigativo para licenciatura I"]
                        }
                    ]
                }
            ]
        },
        {
            year: "Quinto Año",
            semesters: [
                {
                    semester: "IX Semestre",
                    courses: [
                        { 
                            name: "Práctica profesional I", 
                            unlocks: [],
                            requirements: []
                        },
                        { 
                            name: "Práctica profesional II", 
                            unlocks: [],
                            requirements: []
                        }
                    ]
                },
                {
                    semester: "X Semestre",
                    courses: [
                        { 
                            name: "Práctica profesional III", 
                            unlocks: [],
                            requirements: []
                        },
                        { 
                            name: "Práctica profesional IV", 
                            unlocks: [],
                            requirements: []
                        }
                    ]
                }
            ]
        }
    ];

    // Estado de los cursos
    let coursesState = {};
    let totalCourses = 0;
    
    // Inicializar el estado de los cursos
    function initializeCoursesState() {
        curriculumData.forEach(year => {
            year.semesters.forEach(semester => {
                semester.courses.forEach(course => {
                    coursesState[course.name] = {
                        completed: false,
                        unlocked: course.requirements.length === 0 // Los cursos sin requisitos están desbloqueados por defecto
                    };
                    totalCourses++;
                });
            });
        });
    }

    // Renderizar la malla curricular
    function renderCurriculum() {
        const container = document.querySelector('.semesters-container');
        container.innerHTML = '';

        curriculumData.forEach(year => {
            year.semesters.forEach(semester => {
                const semesterElement = document.createElement('div');
                semesterElement.className = 'semester';
                
                const semesterHeader = document.createElement('div');
                semesterHeader.className = 'semester-header';
                
                const semesterTitle = document.createElement('h2');
                semesterTitle.className = 'semester-title';
                semesterTitle.textContent = semester.semester;
                
                const semesterYear = document.createElement('div');
                semesterYear.className = 'semester-year';
                semesterYear.textContent = year.year;
                
                semesterHeader.appendChild(semesterTitle);
                semesterHeader.appendChild(semesterYear);
                
                const coursesGrid = document.createElement('div');
                coursesGrid.className = 'courses-grid';
                
                semester.courses.forEach(course => {
                    const courseElement = document.createElement('div');
                    courseElement.className = 'course';
                    
                    // Determinar el estado del curso
                    if (coursesState[course.name].completed) {
                        courseElement.classList.add('completed');
                    } else if (coursesState[course.name].unlocked) {
                        courseElement.classList.add('unlocked');
                    } else {
                        courseElement.classList.add('locked');
                    }
                    
                    // Agregar evento de clic
                    courseElement.addEventListener('click', () => handleCourseClick(course));
                    
                    const courseName = document.createElement('div');
                    courseName.className = 'course-name';
                    courseName.textContent = course.name;
                    
                    const courseStatus = document.createElement('div');
                    courseStatus.className = 'course-status';
                    courseStatus.textContent = coursesState[course.name].completed ? 'Aprobado' : 
                                            coursesState[course.name].unlocked ? 'Disponible' : 'Bloqueado';
                    
                    courseElement.appendChild(courseName);
                    courseElement.appendChild(courseStatus);
                    
                    coursesGrid.appendChild(courseElement);
                });
                
                semesterElement.appendChild(semesterHeader);
                semesterElement.appendChild(coursesGrid);
                container.appendChild(semesterElement);
            });
        });

        updateProgress();
    }

    // Manejar clic en un curso
    function handleCourseClick(course) {
        // Si el curso está bloqueado, no hacer nada
        if (!coursesState[course.name].unlocked || coursesState[course.name].completed) {
            return;
        }
        
        // Mostrar modal con información del curso
        showCourseModal(course);
    }

    // Mostrar modal con información del curso
    function showCourseModal(course) {
        const modal = document.getElementById('course-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalRequirements = document.getElementById('modal-requirements');
        const modalUnlocks = document.getElementById('modal-unlocks');
        
        modalTitle.textContent = course.name;
        modalDescription.textContent = `Curso del ${getSemesterAndYear(course.name)}`;
        
        // Limpiar listas
        modalRequirements.innerHTML = '';
        modalUnlocks.innerHTML = '';
        
        // Agregar requisitos
        if (course.requirements.length === 0 && (!course.jointRequirements || course.jointRequirements.length === 0)) {
            const li = document.createElement('li');
            li.textContent = "No tiene requisitos";
            modalRequirements.appendChild(li);
        } else {
            course.requirements.forEach(req => {
                const li = document.createElement('li');
                li.textContent = req;
                if (coursesState[req] && !coursesState[req].completed) {
                    li.style.color = 'red';
                    li.style.fontWeight = 'bold';
                }
                modalRequirements.appendChild(li);
            });
            
            if (course.jointRequirements && course.jointRequirements.length > 0) {
                const li = document.createElement('li');
                li.textContent = `En conjunto con: ${course.jointRequirements.join(', ')}`;
                li.style.fontStyle = 'italic';
                modalRequirements.appendChild(li);
            }
        }
        
        // Agregar cursos que desbloquea
        if (course.unlocks.length === 0) {
            const li = document.createElement('li');
            li.textContent = "No desbloquea ningún curso";
            modalUnlocks.appendChild(li);
        } else {
            course.unlocks.forEach(unlock => {
                const li = document.createElement('li');
                li.textContent = unlock;
                modalUnlocks.appendChild(li);
            });
        }
        
        // Mostrar modal
        modal.style.display = 'block';
        
        // Configurar botón de cerrar
        document.querySelector('.close-modal').onclick = function() {
            modal.style.display = 'none';
        }
        
        // Cerrar modal al hacer clic fuera
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
        
        // Configurar botón de completar curso (si está desbloqueado y no completado)
        const completeButton = document.createElement('button');
        completeButton.textContent = "Marcar como aprobado";
        completeButton.className = 'complete-btn';
        completeButton.onclick = function() {
            completeCourse(course);
            modal.style.display = 'none';
        };
        
        // Limpiar botones anteriores
        const oldButton = document.querySelector('.modal-body .complete-btn');
        if (oldButton) oldButton.remove();
        
        // Agregar botón solo si el curso está desbloqueado y no completado
        if (coursesState[course.name].unlocked && !coursesState[course.name].completed) {
            document.querySelector('.modal-body').appendChild(completeButton);
        }
    }

    // Obtener semestre y año de un curso
    function getSemesterAndYear(courseName) {
        for (const year of curriculumData) {
            for (const semester of year.semesters) {
                for (const course of semester.courses) {
                    if (course.name === courseName) {
                        return `${semester.semester} - ${year.year}`;
                    }
                }
            }
        }
        return "";
    }

    // Completar un curso
    function completeCourse(course) {
        // Marcar como completado
        coursesState[course.name].completed = true;
        
        // Desbloquear cursos que dependen de este
        course.unlocks.forEach(unlockCourseName => {
            // Verificar si todos los requisitos del curso desbloqueado están completados
            const unlockCourse = findCourseByName(unlockCourseName);
            if (unlockCourse) {
                const allRequirementsMet = unlockCourse.requirements.every(req => 
                    coursesState[req] && coursesState[req].completed
                );
                
                // Verificar requisitos conjuntos si existen
                let jointRequirementsMet = true;
                if (unlockCourse.jointRequirements && unlockCourse.jointRequirements.length > 0) {
                    jointRequirementsMet = unlockCourse.jointRequirements.every(req => 
                        coursesState[req] && coursesState[req].completed
                    );
                }
                
                if (allRequirementsMet && jointRequirementsMet) {
                    coursesState[unlockCourseName].unlocked = true;
                }
            }
        });
        
        // Volver a renderizar
        renderCurriculum();
    }

    // Encontrar curso por nombre
    function findCourseByName(courseName) {
        for (const year of curriculumData) {
            for (const semester of year.semesters) {
                for (const course of semester.courses) {
                    if (course.name === courseName) {
                        return course;
                    }
                }
            }
        }
        return null;
    }

    // Actualizar barra de progreso
    function updateProgress() {
        let completedCount = 0;
        for (const course in coursesState) {
            if (coursesState[course].completed) {
                completedCount++;
            }
        }
        
        const percentage = Math.round((completedCount / totalCourses) * 100);
        document.getElementById('progress-text').textContent = `${percentage}% completado`;
        document.querySelector('.progress-bar::after').style.width = `${percentage}%`;
        
        // Actualizar el pseudo-elemento
        const progressBar = document.querySelector('.progress-bar');
        progressBar.style.setProperty('--progress', `${percentage}%`);
        
        // Agregar estilo dinámico para el pseudo-elemento
        const style = document.createElement('style');
        style.innerHTML = `
            .progress-bar::after {
                width: var(--progress);
            }
        `;
        document.head.appendChild(style);
    }

    // Reiniciar todo
    function resetAll() {
        for (const course in coursesState) {
            coursesState[course].completed = false;
            // Solo desbloquear cursos sin requisitos
            const courseObj = findCourseByName(course);
            coursesState[course].unlocked = courseObj.requirements.length === 0;
        }
        renderCurriculum();
    }

    // Configurar botón de reinicio
    document.getElementById('reset-btn').addEventListener('click', resetAll);

    // Inicializar
    initializeCoursesState();
    renderCurriculum();
});
