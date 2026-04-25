import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { 
    ReactIcon, 
    TailwindIcon, 
    TypescriptIcon, 
    PythonIcon, 
    PhpIcon, 
    LaravelIcon, 
    SupabaseIcon, 
    NextIcon 
} from './Icons';
import SkillsModal from './skills/skills_modal';

const SkillCard = ({ name, Icon, index, darkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{
                y: -10,
                transition: { duration: 0.2 }
            }}
            className={`
                group relative p-8 rounded-[2rem] border-2 transition-all duration-300 flex flex-col items-center justify-center gap-4
                ${darkMode
                    ? 'bg-slate-900/40 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/60 shadow-2xl shadow-indigo-500/5'
                    : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10'
                }
            `}
        >
            {/* Logo Container */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2">
                <Icon 
                    size={80} 
                    className="w-full h-full filter transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                />
            </div>

            {/* Name */}
            <div className="text-center">
                <h3 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {name}
                </h3>
                <div className={`h-1 w-0 group-hover:w-full mx-auto mt-2 rounded-full transition-all duration-500 bg-indigo-500`} />
            </div>

            {/* Decorative elements */}
            <div className={`absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-500`} />
        </motion.div>
    );
};

const Habilidades = ({ darkMode }) => {
    const [showSkills, setShowSkills] = useState(false);

    const technologies = [
        { name: "React", Icon: ReactIcon },
        { name: "Next.js", Icon: NextIcon },
        { name: "Tailwind CSS", Icon: TailwindIcon },
        { name: "TypeScript", Icon: TypescriptIcon },
        { name: "Python", Icon: PythonIcon },
        { name: "PHP", Icon: PhpIcon },
        { name: "Laravel", Icon: LaravelIcon },
        { name: "Supabase", Icon: SupabaseIcon }
    ];

    return (
        <section id="habilidades" className="py-24 px-6 relative overflow-hidden">
            {/* Fondos Decorativos */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-black uppercase tracking-wider mb-6"
                    >
                        <Cpu size={14} className="animate-pulse" />
                        Stack Tecnológico
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white"
                    >
                        Domino las <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Mejores Herramientas</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Mi enfoque se centra en utilizar tecnologías de vanguardia para construir productos digitales 
                        que no solo funcionen, sino que cautiven.
                    </motion.p>
                </div>

                {/* Grid de Tecnologías */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {technologies.map((tech, index) => (
                        <SkillCard 
                            key={index}
                            {...tech}
                            index={index}
                            darkMode={darkMode}
                        />
                    ))}
                </div>

                {/* Botón Ver Más */}
                <div className="flex justify-center mt-12">
                    <motion.button
                        onClick={() => setShowSkills(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            px-8 py-3 rounded-2xl font-bold transition-all shadow-lg
                            ${darkMode 
                                ? 'bg-slate-800 text-indigo-400 border border-slate-700 hover:border-indigo-500/50' 
                                : 'bg-white text-indigo-600 border border-slate-200 hover:border-indigo-200 shadow-slate-200/50'
                            }
                        `}
                    >
                        Ver más habilidades
                    </motion.button>
                </div>
            </div>

            {/* Skills Modal */}
            <AnimatePresence>
                {showSkills && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowSkills(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                            className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
                        >
                            <SkillsModal onClose={() => setShowSkills(false)} darkMode={darkMode} />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Habilidades;
