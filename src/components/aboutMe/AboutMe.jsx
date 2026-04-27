import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, GraduationCap, Calendar, MapPin, Mail, Clock, Phone } from 'lucide-react';

const AboutMe = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('experience');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const experienceData = [
        {
            id: 1,
            title: "Practicante Profesional de Desarrollo de Software",
            company: "Hospital Distrital de Laredo",
            date: "2025",
            period: "Enero 2025 - Julio 2025",
            location: "Trujillo, Laredo",
            description: "Desarrollo de una aplicación web para optimizar las citas en el Área de Obstetricia, lo cual ayudó a reducir el tiempo de espera de los pacientes y mejorar significativamente la gestión de las citas.",
            contact: "+51 958824864",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070"
        },
        {
            id: 2,
            title: "Practicante Profesional de Data Analytics",
            company: "Hospital Distrital de Laredo",
            date: "2025",
            period: "Septiembre 2025 - Diciembre 2025",
            location: "Trujillo, Laredo",
            description: "Desarrollo de un sistema web enfocado en la analítica de datos para optimizar la gestión de citas médicas en el hospital, logrando una notable mejora en la atención integral al paciente.",
            contact: "+51 958824864",
            image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=2070"
        }
    ];

    const educationData = [
        {
            id: 1,
            title: "Baciller en Ingeniería de Sistemas",
            institution: "Universidad César Vallejo",
            date: "2021 - 2026",
            location: "Trujillo, Perú",
            description: "Formación en el desarrollo de sistemas de información, bases de datos y análisis de datos. Enfocado en el desarrollo de software y Data Analytics.",
        }
    ];

    const currentData = activeTab === 'experience' ? experienceData : educationData;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay de fondo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Contenedor del Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                            className="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden pointer-events-auto relative"
                        >
                            {/* Header del Modal */}
                            <div className="p-6 sm:px-10 sm:py-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
                                <div className="space-y-1">
                                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                                        <span className="bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-xl">
                                            {activeTab === 'experience' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                                        </span>
                                        Mi Trayectoria
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                                        Un resumen de mi camino profesional y académico
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Pestañas (Tabs) */}
                            <div className="px-6 sm:px-10 pt-6 pb-2">
                                <div className="flex p-1 bg-slate-100 dark:bg-slate-800/50 rounded-2xl">
                                    <button
                                        onClick={() => setActiveTab('experience')}
                                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'experience'
                                            ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                            }`}
                                    >
                                        <Briefcase size={18} />
                                        Experiencia
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('education')}
                                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'education'
                                            ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                            }`}
                                    >
                                        <GraduationCap size={18} />
                                        Educación
                                    </button>
                                </div>
                            </div>

                            {/* Contenido scrolleable */}
                            <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className={`space-y-8 relative ${currentData.length > 1 ? 'before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent' : ''}`}
                                    >
                                        {currentData.map((item, index) => (
                                            <div key={item.id} className={`relative flex items-center justify-between group is-active ${currentData.length === 1 ? 'md:justify-center' : 'md:justify-between md:odd:flex-row-reverse'}`}>
                                                {/* Icono del Timeline */}
                                                {currentData.length > 1 && (
                                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 shadow shrink-0 md:order-1 z-10 transition-transform group-hover:scale-110">
                                                        {activeTab === 'experience' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                                                    </div>
                                                )}

                                                {/* Tarjeta de Contenido */}
                                                <div className={`${currentData.length === 1 ? 'w-full max-w-3xl' : 'w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:order-0'} p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300`}>
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                                                            {item.title}
                                                        </h3>
                                                        <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                                            <Calendar size={12} />
                                                            {item.date}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
                                                        <span className="flex items-center gap-1">
                                                            {activeTab === 'experience' ? item.company : item.institution}
                                                        </span>
                                                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                                        <span className="flex items-center gap-1">
                                                            <MapPin size={14} />
                                                            {item.location}
                                                        </span>
                                                    </div>

                                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                                        {item.description}
                                                    </p>

                                                    <div className="flex flex-col sm:flex-row gap-3">
                                                        {item.period && (
                                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                                                                <Clock size={13} />
                                                                {item.period}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Imagen Opcional (Espacio vacío) */}
                                                {currentData.length > 1 && item.image && (
                                                    <div className="hidden md:flex items-center justify-center w-[calc(50%-2.5rem)] md:order-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
                                                        <motion.div 
                                                            whileHover={{ scale: 1.02 }}
                                                            className="w-full h-full max-h-56 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800"
                                                        >
                                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                                        </motion.div>
                                                    </div>
                                                )}
                                                {/* Espaciador invisible si no hay imagen en timeline */}
                                                {currentData.length > 1 && !item.image && (
                                                    <div className="hidden md:block w-[calc(50%-2.5rem)] md:order-2"></div>
                                                )}
                                            </div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AboutMe;
