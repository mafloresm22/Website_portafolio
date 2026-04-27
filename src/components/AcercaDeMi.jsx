import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Briefcase, ArrowRight } from 'lucide-react';
import AboutMeModal from './aboutMe/AboutMe';
import personalImg02 from '../assets/images/image_personal_02.png';

const AcercaDeMi = ({ darkMode, setIsModalOpen }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsModalOpen(false);
    };

    const skills = [
        { name: 'Frontend', items: ['React.js', 'Tailwind CSS', 'TypeScript'] },
        { name: 'Frameworks', items: ['Laravel', 'Next.js'] },
        { name: 'Otros', items: ['y Más...'] },
    ];

    return (
        <section
            id="acerca-de-mi"
            className="py-24 px-6 relative overflow-hidden bg-white dark:bg-slate-900/40 rounded-[3rem] md:rounded-[5rem] shadow-[0_0_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-800 z-10"
        >
            {/* Fondo */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Lado de la Imagen */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                            <img
                                src={personalImg02}
                                alt="Mathias Flores"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-indigo-600 rounded-3xl -z-10 opacity-10" />

                    </motion.div>

                    {/* Lado del Contenido */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-4"
                            >
                                <Sparkles size={14} />
                                Sobre mi historia
                            </motion.div>
                            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                                Creando experiencias <span className="text-indigo-600">con propósito</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Soy <span className="font-bold text-slate-900 dark:text-white">Mathias Flores Moya</span>,
                                Bachiller en Ingeniería de Sistemas enfocado en el desarrollo de software y Data Analytics.
                                Mi enfoque combina el análisis técnico riguroso con una visión creativa para resolver problemas complejos.
                            </p>
                        </div>

                        {/* Stack Consolidado */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {skills.map((category, idx) => (
                                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{category.name}</div>
                                    <div className="flex flex-col gap-1">
                                        {category.items.map((item, i) => (
                                            <span key={i} className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                                <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <motion.button
                                    onClick={handleOpenModal}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold flex items-center gap-3 overflow-hidden shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-300 group-hover:scale-110" />
                                    <Briefcase size={20} className="relative z-10" />
                                    <span className="relative z-10">Ver Trayectoria</span>
                                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                </motion.button>

                                <div className="flex items-center gap-4 group cursor-default">
                                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 transition-colors group-hover:border-indigo-200 dark:group-hover:border-indigo-500/30">
                                        <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Formación</span>
                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Ingeniería de Sistemas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <AboutMeModal isOpen={showModal} onClose={handleCloseModal} />
        </section>
    );
};

export default AcercaDeMi;
