import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, GraduationCap, Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

const AboutMe = ({ onClose, darkMode }) => {
    const [activeTab, setActiveTab] = useState('experience');

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
            image: "/images/experiencia/ENTREVISTA_01.jpg"
        },
        {
            id: 2,
            title: "Practicante Profesional de Desarrollo de Software",
            company: "Hospital Distrital de Laredo",
            date: "2025",
            period: "Septiembre 2025 - Diciembre 2025",
            location: "Trujillo, Laredo",
            description: "Desarrollo de un sistema web enfocado en la analítica de datos para optimizar la gestión de citas médicas en el hospital, logrando una notable mejora en la atención integral al paciente.",
            contact: "+51 958824864",
            image: "/images/experiencia/ENTREVISTA_03.jpeg"
        }
    ];

    const educationData = [
        {
            id: 1,
            title: "Bachiller en Ingeniería de Sistemas",
            institution: "Universidad César Vallejo",
            date: "2021 - 2026",
            location: "Trujillo, Perú",
            description: "Formación en el desarrollo de sistemas de información, bases de datos y análisis de datos. Enfocado en el desarrollo de software y Data Analytics.",
        }
    ];

    const currentData = activeTab === 'experience' ? experienceData : educationData;

    return (
        <div className="flex flex-col h-[90vh] w-full max-w-5xl mx-auto">
            {/* Header - Matching ProjectsModal Style */}
            <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-slate-100 dark:border-slate-800 flex-shrink-0">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                        <Briefcase size={24} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                            Mi Trayectoria
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                            Un resumen de mi camino profesional y académico
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

            {/* Tabs Section */}
            <div className="px-8 pt-6 pb-2 flex-shrink-0">
                <div className="flex p-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-[1.5rem] max-w-md mx-auto">
                    <button
                        onClick={() => setActiveTab('experience')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-[1.2rem] text-sm font-bold transition-all duration-300 ${activeTab === 'experience'
                            ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-lg'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                            }`}
                    >
                        <Briefcase size={18} />
                        Experiencia
                    </button>
                    <button
                        onClick={() => setActiveTab('education')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-[1.2rem] text-sm font-bold transition-all duration-300 ${activeTab === 'education'
                            ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-lg'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                            }`}
                    >
                        <GraduationCap size={18} />
                        Educación
                    </button>
                </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto flex-1 px-8 py-8 custom-scrollbar">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-8"
                    >
                        {currentData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-500"
                            >
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Content Side */}
                                    <div className="flex-1 space-y-4">
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="space-y-1">
                                                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                                    {item.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                                                    {activeTab === 'experience' ? item.company : item.institution}
                                                </div>
                                            </div>
                                            <div className="px-4 py-2 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-sm">
                                                <Calendar size={14} />
                                                {item.date}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
                                            <div className="flex items-center gap-1.5">
                                                <MapPin size={16} />
                                                {item.location}
                                            </div>
                                            {item.period && (
                                                <div className="flex items-center gap-1.5">
                                                    <Clock size={16} />
                                                    {item.period}
                                                </div>
                                            )}
                                        </div>

                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Image Side - If exists */}
                                    {item.image && (
                                        <div className="w-full lg:w-64 h-48 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AboutMe;
