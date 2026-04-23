import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import personalImg from '../assets/images/image_personal.png';

const Header = ({ darkMode }) => {
    // Animation Variants
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
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/25"
                            >
                                <Download size={22} className="group-hover:bounce" />
                                Descargar CV
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-600 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-200 rounded-2xl font-bold text-lg transition-all"
                            >
                                <MessageSquare size={22} />
                                Contáctame
                                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </motion.button>
                        </motion.div>

                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative group">
                            {/* Decorative rings */}
                            <div className="absolute -inset-4 border-2 border-dashed border-indigo-500/20 rounded-[2rem] animate-[spin_20s_linear_infinite]" />
                            <div className="absolute -inset-8 border border-purple-500/10 rounded-[3rem] animate-[spin_30s_linear_infinite_reverse]" />

                            {/* Main Image Container */}
                            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                                <img
                                    src={personalImg}
                                    alt="Mathias Flores Moya"
                                    className="w-full h-full object-cover object-center transform transition-all duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Stats Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 md:-left-12 bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 z-20"
                            >
                                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                    <GithubIcon size={28} className={darkMode ? 'invert brightness-200' : ''} />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900 dark:text-white">100+</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Commits / Mes</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Header;