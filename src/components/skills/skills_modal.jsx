import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Cpu, Code2, Database, Layers, BarChart2, Smartphone } from 'lucide-react';

// --- Data ---
const SKILL_CATEGORIES = [
    {
        label: 'Frontend',
        icon: Code2,
        color: 'from-indigo-500 to-violet-500',
        colorBg: 'bg-indigo-500/10 dark:bg-indigo-500/10',
        colorText: 'text-indigo-600 dark:text-indigo-400',
        skills: [
            { name: 'React.js', level: 85, experience: 1 },
            { name: 'TypeScript', level: 70, experience: 1 },
            { name: 'Tailwind CSS', level: 90, experience: 0.5 },
            { name: 'Next.js', level: 40, experience: 0.5 },
        ],
    },
    {
        label: 'Backend',
        icon: Layers,
        color: 'from-violet-500 to-purple-500',
        colorBg: 'bg-violet-500/10 dark:bg-violet-500/10',
        colorText: 'text-violet-600 dark:text-violet-400',
        skills: [
            { name: 'PHP', level: 75, experience: 2 },
            { name: 'Laravel', level: 70, experience: 2 },
            { name: 'Python', level: 65, experience: 1 },
        ],
    },
    {
        label: 'Bases de Datos',
        icon: Database,
        color: 'from-sky-500 to-cyan-500',
        colorBg: 'bg-sky-500/10 dark:bg-sky-500/10',
        colorText: 'text-sky-600 dark:text-sky-400',
        skills: [
            { name: 'MySQL', level: 80, experience: 1 },
            { name: 'PostgreSQL', level: 65, experience: 1 },
        ],
    },
    {
        label: 'Desarrollo Móvil',
        icon: Smartphone,
        color: 'from-blue-500 to-cyan-500',
        colorBg: 'bg-blue-500/10 dark:bg-blue-500/10',
        colorText: 'text-blue-600 dark:text-blue-400',
        skills: [
            { name: 'React Native', level: 50, experience: 1 },
        ],
    },
    {
        label: 'Data & Otros',
        icon: BarChart2,
        color: 'from-emerald-500 to-teal-500',
        colorBg: 'bg-emerald-500/10 dark:bg-emerald-500/10',
        colorText: 'text-emerald-600 dark:text-emerald-400',
        skills: [
            { name: 'Power BI', level: 72, experience: 1 },
            { name: 'Excel Avanzado', level: 80, experience: 3 },
            { name: 'Git & GitHub', level: 75, experience: 2 },
        ],
    },
];

const getLevelLabel = (level) => {
    if (level >= 85) return 'Avanzado';
    if (level >= 65) return 'Intermedio';
    if (level >= 50) return 'Básico';
    if (level >= 35) return 'En Aprendizaje';
    return 'Novato';
};

const formatExperience = (exp) => {
    if (typeof exp === 'string') return exp;
    if (exp < 1) {
        const months = Math.round(exp * 12);
        return `${months} ${months === 1 ? 'mes' : 'meses'}`;
    }
    return `${exp} ${exp === 1 ? 'año' : 'años'}`;
};

// --- Sub-components ---

const ProgressBar = ({ skill, gradient, animate }) => (
    <div className="space-y-1.5">
        <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{skill.name}</span>
                {skill.experience && (
                    <span className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                        {formatExperience(skill.experience)}
                    </span>
                )}
            </div>
            <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {getLevelLabel(skill.level)}
                </span>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 tabular-nums w-8 text-right">
                    {skill.level}%
                </span>
            </div>
        </div>
        <div className="h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                initial={{ width: 0 }}
                animate={{ width: animate ? `${skill.level}%` : 0 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            />
        </div>
    </div>
);

const CategoryCard = ({ category, animate }) => {
    const Icon = category.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 space-y-4"
        >
            {/* Category Header */}
            <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl ${category.colorBg} flex items-center justify-center ${category.colorText}`}>
                    <Icon size={18} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm tracking-wide uppercase">
                    {category.label}
                </h3>
            </div>

            {/* Progress Bars */}
            <div className="space-y-3.5">
                {category.skills.map((skill) => (
                    <ProgressBar
                        key={skill.name}
                        skill={skill}
                        gradient={category.color}
                        animate={animate}
                    />
                ))}
            </div>
        </motion.div>
    );
};

// --- Main Component ---

const SkillsModal = ({ onClose, darkMode }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-slate-100 dark:border-slate-800 flex-shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        <Cpu size={20} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                            Mis Habilidades
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            Nivel de conocimiento por tecnología
                        </p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                    aria-label="Cerrar"
                >
                    <X size={22} />
                </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto flex-1 px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SKILL_CATEGORIES.map((cat) => (
                        <CategoryCard key={cat.label} category={cat} animate={animate} />
                    ))}
                </div>

                {/* Footer note */}
                <div className="mt-6 p-4 rounded-2xl bg-indigo-600/5 dark:bg-indigo-500/5 border border-indigo-500/20 text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        Los porcentajes reflejan mi nivel de confianza y experiencia práctica con cada tecnología.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SkillsModal;
