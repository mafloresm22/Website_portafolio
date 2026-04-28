import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, Database, Layout, ShieldCheck, Box, Users, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../Icons';

const ShowControlInventarioLab = ({ onClose, darkMode }) => {
    const images = [
        { src: "/images/sisLabInventario/Login.png", title: "Acceso Seguro", desc: "Interfaz de login con validación de credenciales para diferentes niveles de acceso." },
        { src: "/images/sisLabInventario/Inicio.png", title: "Panel Principal", desc: "Vista general del sistema con accesos rápidos a los módulos más utilizados." },
        { src: "/images/sisLabInventario/Modulos.png", title: "Módulos del Sistema", desc: "Arquitectura modular que permite una navegación intuitiva entre las diferentes áreas." },
        { src: "/images/sisLabInventario/Inventario.png", title: "Gestión de Inventario", desc: "Control detallado de insumos, reactivos y equipos con filtros avanzados." },
        { src: "/images/sisLabInventario/Laboratorios.png", title: "Control de Laboratorios", desc: "Administración de los diferentes espacios físicos y su equipamiento asignado." },
        { src: "/images/sisLabInventario/Prestamos.png", title: "Sistema de Préstamos", desc: "Registro y seguimiento de equipos prestados a alumnos y docentes." },
        { src: "/images/sisLabInventario/Usuarios.png", title: "Administración de Usuarios", desc: "Gestión completa de perfiles de usuario que interactúan con el sistema." },
        { src: "/images/sisLabInventario/Roles.png", title: "Permisos y Roles", desc: "Configuración granular de accesos según el cargo (Administrador, Técnico, Auxiliar)." },
        { src: "/images/sisLabInventario/Unidades.png", title: "Unidades de Medida", desc: "Estandarización de medidas para el control preciso de stock de reactivos." },
        { src: "/images/sisLabInventario/ModalAgregar.png", title: "Formularios Dinámicos", desc: "Modales optimizados para el registro rápido de nuevos elementos en el inventario." }
    ];

    const features = [
        "Control de stock en tiempo real",
        "Gestión de préstamos y devoluciones",
        "Reportes detallados de inventario",
        "Sistema de roles y permisos",
        "Trazabilidad de insumos reactivos"
    ];

    return (
        <div className="flex flex-col h-full bg-white dark:bg-slate-900">
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-8 py-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                        <Database size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Control de Inventario</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">App de Escritorio / Python & PostgreSQL</p>
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
                                Solución integral para la gestión de instrumentos en laboratorios de la I.E Antenor Orrego Espinoza.
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Este proyecto nació de la necesidad de digitalizar el control manual de activos en laboratorios.
                                Desarrollado con una arquitectura robusta, permite el seguimiento preciso de miles de instrumentos,
                                desde reactivos químicos hasta equipos especializados.
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
                                    href="https://github.com/mafloresm22/sisLaboratorioAOE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 dark:bg-indigo-600 text-white font-bold hover:scale-105 transition-all shadow-xl shadow-indigo-500/20"
                                >
                                    Ver Código en GitHub <GithubIcon size={20} className="invert dark:invert-0" />
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-indigo-500/20 rounded-[3rem] blur-3xl" />
                            <img
                                src="/images/sisLabInventario/Inicio.png"
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
                                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-slate-800 transition-all duration-500 group-hover:shadow-indigo-500/10">
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
                                        <h5 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-3">
                                            <span className="w-8 h-1 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-all -ml-11 group-hover:ml-0" />
                                            {img.title}
                                        </h5>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="p-12 rounded-[3rem] bg-indigo-600 text-white text-center space-y-6">
                        <h4 className="text-3xl font-bold">¿Interesado en los detalles técnicos?</h4>
                        <p className="text-indigo-100 max-w-2xl mx-auto text-lg">
                            Este sistema utiliza Python con CustomTkinter para la interfaz y PostgreSQL para la persistencia de datos,
                            garantizando una experiencia fluida y segura.
                        </p>
                        <button
                            onClick={onClose}
                            className="px-8 py-3 rounded-xl bg-white text-indigo-600 font-bold hover:bg-indigo-50 transition-colors"
                        >
                            Regresar a Proyectos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowControlInventarioLab;
