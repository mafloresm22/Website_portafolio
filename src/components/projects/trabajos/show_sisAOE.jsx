import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, Code } from 'lucide-react';
import { GithubIcon } from '../../Icons';

const ShowSisAOE = ({ onClose, darkMode }) => {
    const images = [
        { src: "/images/sisIEAntenorOrrego/Login.png", title: "Acceso al Sistema", desc: "Interfaz de autenticación de usuarios para los distintos roles del sistema." },
        { src: "/images/sisIEAntenorOrrego/Configuracion.png", title: "Configuración", desc: "Ajustes y parámetros generales del sistema institucional." },
        { src: "/images/sisIEAntenorOrrego/Roles.png", title: "Roles y Permisos", desc: "Configuración de accesos y administración del personal." },
        { src: "/images/sisIEAntenorOrrego/Administrador_Personal.png", title: "Personal Administrativo", desc: "Gestión de los trabajadores administrativos de la institución." },
        { src: "/images/sisIEAntenorOrrego/Docente_Personal.png", title: "Personal Docente", desc: "Administración del personal docente y sus datos." },
        { src: "/images/sisIEAntenorOrrego/Gestion.png", title: "Gestión General", desc: "Módulo principal para la administración de procesos." },
        { src: "/images/sisIEAntenorOrrego/Niveles.png", title: "Niveles Educativos", desc: "Configuración de los niveles de enseñanza." },
        { src: "/images/sisIEAntenorOrrego/Turnos.png", title: "Turnos de Estudio", desc: "Administración de los turnos escolares disponibles." },
        { src: "/images/sisIEAntenorOrrego/GestionGrado.png", title: "Gestión de Grados", desc: "Configuración y control de los grados académicos." },
        { src: "/images/sisIEAntenorOrrego/GestionSeccion.png", title: "Gestión de Secciones", desc: "Administración de las secciones por cada grado." },
        { src: "/images/sisIEAntenorOrrego/Aulas.png", title: "Aulas", desc: "Registro y mantenimiento de los espacios físicos." },
        { src: "/images/sisIEAntenorOrrego/AsignarAulas.png", title: "Asignación de Aulas", desc: "Distribución de las secciones en las aulas correspondientes." },
        { src: "/images/sisIEAntenorOrrego/NuevaAsignacionAula.png", title: "Nueva Asignación", desc: "Interfaz para registrar una nueva asignación de aula." },
        { src: "/images/sisIEAntenorOrrego/GestionPeriodo.png", title: "Periodos Académicos", desc: "Configuración de los años y periodos escolares." },
        { src: "/images/sisIEAntenorOrrego/Cursos.png", title: "Administración de Cursos", desc: "Creación y gestión de los cursos en los diferentes niveles." },
        { src: "/images/sisIEAntenorOrrego/ListaCursos.png", title: "Listado de Cursos", desc: "Vista general de todos los cursos registrados." },
        { src: "/images/sisIEAntenorOrrego/CrearNuevoCurso.png", title: "Crear Nuevo Curso", desc: "Formulario para la inserción de nuevos cursos." },
        { src: "/images/sisIEAntenorOrrego/AsignacionCursoDocente.png", title: "Asignación Docente", desc: "Distribución de la carga académica y vinculación de docentes." },
        { src: "/images/sisIEAntenorOrrego/ListadoApoderados.png", title: "Listado de Apoderados", desc: "Registro completo de los padres y apoderados." },
        { src: "/images/sisIEAntenorOrrego/BuscarApoderado.png", title: "Buscar Apoderado", desc: "Filtro de búsqueda de apoderados registrados." },
        { src: "/images/sisIEAntenorOrrego/IngresarDatosEstudiantes.png", title: "Ingreso de Estudiantes", desc: "Formulario para registrar los datos de nuevos alumnos." },
        { src: "/images/sisIEAntenorOrrego/ListadoEstudiantes.png", title: "Listado de Estudiantes", desc: "Módulo para la administración de estudiantes y actualización de datos." },
        { src: "/images/sisIEAntenorOrrego/BuscarEstudiante.png", title: "Buscar Estudiante", desc: "Herramienta para localizar rápidamente el perfil de un estudiante." },
        { src: "/images/sisIEAntenorOrrego/AgregarMatricula.png", title: "Agregar Matrícula", desc: "Proceso de matriculación de estudiantes." },
        { src: "/images/sisIEAntenorOrrego/ListadoMatriculas.png", title: "Listado de Matrículas", desc: "Registro general de todas las matrículas del periodo." },
        { src: "/images/sisIEAntenorOrrego/BuscarMatricula.png", title: "Buscar Matrícula", desc: "Búsqueda y consulta de matrículas existentes." },
        { src: "/images/sisIEAntenorOrrego/ImprimirMatricula.png", title: "Imprimir Matrícula", desc: "Generación de documento de constancia de matrícula." },
        { src: "/images/sisIEAntenorOrrego/RegistroAsistenciaDiaria.png", title: "Asistencia Diaria", desc: "Control de asistencia de los alumnos para generar reportes." },
        { src: "/images/sisIEAntenorOrrego/ListadoAsistencias.png", title: "Listado de Asistencias", desc: "Vista general de la asistencia registrada en el día." },
        { src: "/images/sisIEAntenorOrrego/ControlAsistenciasID.png", title: "Control de Asistencia", desc: "Registro detallado de la asistencia por estudiante." },
        { src: "/images/sisIEAntenorOrrego/ImprimirControlAsistencia.png", title: "Imprimir Asistencias", desc: "Generación de reportes impresos de las asistencias." },
        { src: "/images/sisIEAntenorOrrego/ControlCalificaciones.png", title: "Control de Calificaciones", desc: "Registro y seguimiento del rendimiento académico." },
        { src: "/images/sisIEAntenorOrrego/AgregarNota.png", title: "Agregar Nota", desc: "Interfaz para la evaluación e ingreso de calificaciones." },
        { src: "/images/sisIEAntenorOrrego/ActualizarCalificaciones.png", title: "Actualizar Calificaciones", desc: "Modificación y corrección de las notas registradas." },
        { src: "/images/sisIEAntenorOrrego/HistorialNotasEstudiantes.png", title: "Historial Académico", desc: "Visualización del récord de notas de un estudiante." },
        { src: "/images/sisIEAntenorOrrego/ListarPagos.png", title: "Listado de Pagos", desc: "Vista general de todos los pagos realizados al sistema." },
        { src: "/images/sisIEAntenorOrrego/HistorialPagos.png", title: "Historial de Pagos", desc: "Control del historial de pagos y obligaciones económicas." },
        { src: "/images/sisIEAntenorOrrego/Reportes.png", title: "Reportes del Sistema", desc: "Generación de informes estadísticos y administrativos." }
    ];

    const features = [
        "Gestión completa de matrículas y estudiantes",
        "Control de asistencia y calificaciones",
        "Administración de cursos y asignación docente",
        "Módulo de gestión de pagos y reportes",
        "Sistema multi-rol para el personal educativo"
    ];

    return (
        <div className="flex flex-col h-full bg-white dark:bg-slate-900">
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-8 py-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                        <Code size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Gestión Escolar I.E. Antenor Orrego</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">App Web / Laravel & MySQL</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-all hover:rotate-90"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="max-w-6xl mx-auto px-8 py-12 space-y-16">

                    {/* Hero Description */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                Sistema web integral para la administración académica e institucional.
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Plataforma desarrollada para optimizar los procesos administrativos y académicos de la institución.
                                Facilita el control de estudiantes, docentes, calificaciones, asistencias y pagos en un entorno centralizado y seguro.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold">
                                        <CheckCircle2 size={20} className="text-emerald-500" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6">
                                <a
                                    href="https://github.com/mafloresm22/sistemagestionescolar.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 dark:bg-emerald-600 text-white font-bold hover:scale-105 transition-all shadow-xl shadow-emerald-500/20"
                                >
                                    Ver Código en GitHub <GithubIcon size={20} className="invert dark:invert-0" />
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-emerald-500/20 rounded-[3rem] blur-3xl" />
                            <img
                                src="/images/sisIEAntenorOrrego/Inicio.png"
                                alt="Preview"
                                className="relative rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800"
                            />
                        </div>
                    </div>

                    {/* Image Gallery */}
                    <div className="space-y-12">
                        <div className="text-center space-y-4">
                            <h4 className="text-3xl font-bold text-slate-900 dark:text-white">Galería del Sistema</h4>
                            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                                Explora las diferentes funcionalidades y la interfaz de usuario diseñada para la máxima eficiencia operativa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group flex flex-col gap-5"
                                >
                                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-slate-800 transition-all duration-500 group-hover:shadow-emerald-500/10">
                                        <img
                                            src={img.src}
                                            alt={img.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                            <p className="text-white/90 text-sm font-medium leading-relaxed max-w-xs">{img.desc}</p>
                                        </div>
                                    </div>
                                    <div className="px-6">
                                        <h5 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-3">
                                            <span className="w-8 h-1 rounded-full bg-emerald-600 opacity-0 group-hover:opacity-100 transition-all -ml-11 group-hover:ml-0" />
                                            {img.title}
                                        </h5>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="p-12 rounded-[3rem] bg-emerald-600 text-white text-center space-y-6">
                        <h4 className="text-3xl font-bold">¿Interesado en los detalles técnicos?</h4>
                        <p className="text-emerald-100 max-w-2xl mx-auto text-lg">
                            Este sistema utiliza Laravel para el backend, ofreciendo una arquitectura MVC escalable,
                            y MySQL como motor de base de datos para garantizar la integridad de la información escolar.
                        </p>
                        <button
                            onClick={onClose}
                            className="px-8 py-3 rounded-xl bg-white text-emerald-600 font-bold hover:bg-emerald-50 transition-colors"
                        >
                            Regresar a Proyectos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowSisAOE;
