import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectsModal from './projects/projects_pestaña';
import ShowControlInventarioLab from './projects/trabajos/show_controlInventarioLab';
import ShowSisAOE from './projects/trabajos/show_sisAOE';

const projectsData = [
    {
        id: 1,
        title: 'Sistema de Control de Inventario de Laboratorio',
        description: 'Plataforma integral para la gestión de inventarios de laboratorios, permitiendo el control de insumos, equipos y usuarios',
        image: '/images/sisLabInventario/Inicio.png',
        github: 'https://github.com/mafloresm22/sisLaboratorioAOE.git',
        detail: 'sisLabInventario',
    },
    {
        id: 2,
        title: 'Sistema web para la gestión escolar en la I.E Antenor Orrego Espinoza',
        description: 'Plataforma integral para la gestión de estudiantes, docentes, cursos y calificaciones',
        image: '/images/sisIEAntenorOrrego/Inicio.png',
        github: 'https://github.com/mafloresm22/sistemagestionescolar.git',
        detail: 'sisAOE',
    },
    {
        id: 3,
        title: 'Aplicación Móvil de listas de compras',
        description: 'Solución móvil que permite gestionar listas de compras de manera colaborativa, integrando funcionalidades de busqueda de productos',
        image: '/images/appMovListaCompras/Inicio.jpeg',
        github: 'https://github.com',
        demo: 'https://demo.com',
    }
];

const Projects = ({ darkMode, setIsModalOpen }) => {
    const [showModal, setShowModal] = useState(false);
    const [showDetail, setShowDetail] = useState(null);

    const handleOpenModal = () => {
        setShowModal(true);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsModalOpen(false);
    };

    const handleOpenDetail = (projectId) => {
        setShowDetail(projectId);
        setIsModalOpen(true);
    };

    const handleCloseDetail = () => {
        setShowDetail(null);
        setIsModalOpen(false);
    };

    return (
        <section
            id="proyectos"
            className="py-24 px-6 relative overflow-hidden bg-white dark:bg-slate-900/40 rounded-[3rem] md:rounded-[5rem] shadow-[0_0_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-800 z-10"
        >
            {/* Fondo Decorativo */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-black uppercase tracking-wider mb-6"
                    >
                        Mis Trabajos
                    </motion.div>

                    <h2 className={`text-4xl md:text-6xl font-black mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Proyectos <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Destacados</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Una selección de mis trabajos más recientes, enfocados en la experiencia de usuario y el rendimiento técnico.
                    </p>
                </motion.div>

                {/* Grid de Proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`
                                group relative rounded-[2.5rem] overflow-hidden border transition-all duration-500
                                ${darkMode
                                    ? 'bg-slate-900/40 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/60 shadow-2xl shadow-indigo-500/5'
                                    : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10'
                                }
                                hover:-translate-y-2
                            `}
                        >
                            {/* Contenedor de Imagen */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Contenido de la Card */}
                            <div className="p-8">
                                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                    {project.title}
                                </h3>
                                <p className={`text-sm mb-8 line-clamp-3 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    {project.description}
                                </p>

                                {/* Acciones */}
                                <div className="grid grid-cols-2 gap-4">
                                    {project.detail ? (
                                        <button
                                            onClick={() => handleOpenDetail(project.detail)}
                                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-blue-600 text-sm font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-[1.02] cursor-pointer"
                                        >
                                            <ExternalLink size={16} />
                                            Ver
                                        </button>
                                    ) : (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-blue-600 text-sm font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-[1.02]"
                                        >
                                            <ExternalLink size={16} />
                                            Ver
                                        </a>
                                    )}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold border transition-all hover:scale-[1.02]
                                            ${darkMode
                                                ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700'
                                                : 'bg-slate-50 text-slate-900 border-slate-200 hover:bg-slate-100'
                                            }
                                        `}
                                    >
                                        <GithubIcon size={16} className={darkMode ? 'invert brightness-200' : ''} />
                                        Github
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Botón Ver Más */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-16"
                >
                    <motion.button
                        onClick={handleOpenModal}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold transition-all shadow-lg
                            ${darkMode
                                ? 'bg-slate-800 text-indigo-400 border border-slate-700 hover:border-indigo-500/50'
                                : 'bg-white text-indigo-600 border border-slate-200 hover:border-indigo-200 shadow-slate-200/50'
                            }
                        `}
                    >
                        Ver más proyectos
                        <ArrowRight size={20} />
                    </motion.button>
                </motion.div>
            </div>

            {/* Vista de Detalle de Proyecto Específico */}
            <AnimatePresence>
                {showDetail === 'sisLabInventario' && (
                    <div className="fixed inset-0 z-[70] bg-white dark:bg-slate-900 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="w-full h-full"
                        >
                            <ShowControlInventarioLab onClose={handleCloseDetail} darkMode={darkMode} />
                        </motion.div>
                    </div>
                )}
                {showDetail === 'sisAOE' && (
                    <div className="fixed inset-0 z-[70] bg-white dark:bg-slate-900 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="w-full h-full"
                        >
                            <ShowSisAOE onClose={handleCloseDetail} darkMode={darkMode} />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Vista de Proyectos */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[60] bg-white dark:bg-slate-900 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="w-full h-full"
                        >
                            <ProjectsModal onClose={handleCloseModal} darkMode={darkMode} />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;

