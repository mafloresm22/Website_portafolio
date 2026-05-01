import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import personalImg from '../assets/images/Personal.jpeg';
import Documents from './documents/documents_modal';

const Header = ({ darkMode, setIsModalOpen }) => {
    const [showDocs, setShowDocs] = useState(false);

    const handleOpenDocs = () => {
        setShowDocs(true);
        setIsModalOpen(true);
    };

    const handleCloseDocs = () => {
        setShowDocs(false);
        setIsModalOpen(false);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden"
        >
            {/* Background Blobs - Interactive feeling */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />

            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Side */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="order-2 lg:order-1"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Disponible para nuevos desafíos
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6">
                            Impulsando el <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-500">Futuro Digital</span> con Código y Análisis
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
                            Hola, <span className="font-semibold text-slate-900 dark:text-white">Bienvenido a mi portafolio</span>.
                            En este apartado podrás conocer más sobre mi perfil, experiencia y proyectos,
                            sobre todo en el desarrollo de software con tecnologías web y Data Analytics.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                href="/documents/CV_Mathias_Flores.pdf"
                                download="CV_Mathias_Flores.pdf"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/25 cursor-pointer"
                            >
                                <Download size={22} className="group-hover:bounce" />
                                Descargar CV
                            </motion.a>

                            <motion.button
                                onClick={handleOpenDocs}
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-600 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-200 rounded-2xl font-bold text-lg transition-all"
                            >
                                <FileText size={22} />
                                Ver Documentos
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative group"
                        >
                            {/* Glow effect behind the image */}
                            <div className="absolute -inset-4 bg-linear-to-r from-indigo-500 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

                            {/* Decorative rings with refined styles */}
                            <div className="absolute -inset-6 border-2 border-dashed border-indigo-500/20 rounded-[2.5rem] animate-[spin_25s_linear_infinite]" />
                            <div className="absolute -inset-10 border border-purple-500/10 rounded-[3.5rem] animate-[spin_35s_linear_infinite_reverse]" />

                            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-2 group-hover:shadow-indigo-500/20">
                                <img
                                    src={personalImg}
                                    alt="Mathias Flores"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                                <div className="absolute inset-0 border border-white/20 rounded-[3rem] pointer-events-none" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Documents Modal */}
            <AnimatePresence>
                {showDocs && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseDocs}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
                        >
                            <Documents onClose={handleCloseDocs} darkMode={darkMode} />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Header;