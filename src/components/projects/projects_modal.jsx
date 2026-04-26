import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Code, Globe, Database, Smartphone, FileText } from 'lucide-react';
import { GithubIcon } from '../Icons';

const ProjectCard = ({ project, darkMode }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none transition-all duration-500 flex flex-col"
        >
            {/* Image Section - Much larger and cleaner */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.banner}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-slate-200 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* Content Section - Simplified and below the image */}
            <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                            {project.title}
                        </h3>
                        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">
                            {project.category}
                        </span>
                    </div>
                    <div className={`p-3 rounded-2xl ${project.colorBg} ${project.colorText} shadow-sm`}>
                        <project.icon size={24} />
                    </div>
                </div>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800/50">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tecnología</span>
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{project.tech}</span>
                    </div>
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition-all shadow-lg shadow-indigo-500/30 hover:scale-105 active:scale-95"
                    >
                        Ver Documento <FileText size={18} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectsModal = ({ onClose, darkMode }) => {
    const projects = [
        {
            title: "Sistema de Control de Inventario de Laboratorio",
            category: "App de Escritorio",
            description: "Plataforma integral para la gestión de inventarios de laboratorios, permitiendo el control de insumos, equipos y usuarios.",
            banner: "../../../public/images/sisLabInventario/inicio.png",
            icon: Database,
            colorBg: "bg-indigo-500/10",
            colorText: "text-indigo-600",
            tech: "Phyton/PostgreSQL",
            status: "Completado",
            url: "#"
        },
        {
            title: "Sistema web para la gestión escolar en la I.E Antenor Orrego Espinoza",
            category: "App Web",
            description: "Plataforma integral para la gestión de estudiantes, docentes, cursos y calificaciones.",
            banner: "",
            icon: Code,
            colorBg: "bg-emerald-500/10",
            colorText: "text-emerald-600",
            tech: "Laravel/MySQL",
            status: "Completado",
            url: "#"
        },
        {
            title: "Aplicación Móvil de listas de compras",
            category: "Aplicación Móvil",
            description: "Solución móvil que permite gestionar listas de compras de manera colaborativa, integrando funcionalidades de busqueda de productos.",
            banner: "",
            icon: Smartphone,
            colorBg: "bg-blue-500/10",
            colorText: "text-blue-600",
            tech: "React Native/Supabase",
            status: "Completado",
            url: "#"
        },
        {
            title: "Sistema para la Gestión de Ventas en una Tienda",
            category: "App Web",
            description: "Sistema de registro de ventas que permite gestionar el inventario de una tienda y registrar las ventas de manera eficiente.",
            banner: "",
            icon: Globe,
            colorBg: "bg-purple-500/10",
            colorText: "text-purple-600",
            tech: "React.js/Supabase",
            status: "En Proceso",
            url: "#"
        }
    ];

    return (
        <div className="flex flex-col h-[90vh] w-full max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-slate-100 dark:border-slate-800 flex-shrink-0">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                        <ExternalLink size={24} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                            Mis Proyectos Destacados
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                            Soluciones innovadoras y análisis de datos de alto impacto
                        </p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all hover:rotate-90"
                    aria-label="Cerrar"
                >
                    <X size={28} />
                </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto flex-1 px-8 py-8 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            darkMode={darkMode}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsModal;
