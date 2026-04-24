import { motion } from 'framer-motion';
import { User, Code2, GraduationCap, Sparkles, Heart } from 'lucide-react';
import personalImg02 from '../assets/images/image_personal_02.png';

const AcercaDeMi = ({ darkMode }) => {
    const skills = [
        { name: 'Frontend', items: ['React.js', 'Tailwind CSS', 'TypeScript'] },
        { name: 'Backend', items: ['Python', 'PHP', 'Supabase'] },
        { name: 'Frameworks', items: ['Laravel', 'Next.js'] },
        { name: 'Otros', items: ['y Más...'] },
    ];

    return (
        <section
            id="acerca-de-mi"
            className="py-24 px-6 relative overflow-hidden bg-white dark:bg-slate-900/40 rounded-t-[3rem] md:rounded-t-[5rem] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)] border-t border-slate-100 dark:border-slate-800 z-10"
        >
            {/* Patrón de fondo sutil */}
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
                        {/* Elemento Decorativo Detrás */}
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

                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white">Bachiller en Ingeniería de Sistemas</div>
                                <div className="text-xs text-slate-500">Formación técnica y análisis estratégico</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AcercaDeMi;
