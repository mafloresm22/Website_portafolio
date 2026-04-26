import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, X, Award, GraduationCap, ChartPie, Database, Image } from 'lucide-react';

const DocumentCard = ({ title, type, date, icon: Icon, onDownload }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 transition-all group"
    >
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Icon size={24} />
            </div>
            <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{title}</h4>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>{type}</span>
                    <span>•</span>
                    <span>{date}</span>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <button
                onClick={onDownload}
                className="p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                title="Descargar"
            >
                <Download size={18} />
            </button>
        </div>
    </motion.div>
);

const Documents = ({ onClose, darkMode }) => {
    const docs = [
        {
            title: "Curriculum Vitae 2024",
            type: "PDF",
            date: "Marzo 2024",
            icon: FileText,
            url: "/documents/CV_Mathias_Flores.pdf"
        },
        {
            title: "Bachiller de Ingeniería de Sistemas",
            type: "PDF",
            date: "Enero 2026",
            icon: GraduationCap,
            url: "/documents/Bachiller_Mathias_Flores.pdf"
        },
        {
            title: "Certificado de FerreyCorp - Impulsando Talento",
            type: "PDF",
            date: "Enero 2024",
            icon: Award,
            url: "/documents/Certificado_FerreyCorp_ImpulsandoTalentos_2024.pdf"
        },
        {
            title: "Constancia de participación - Taller virtual: Autocuidado mi responsabilidad",
            type: "PNG",
            date: "Agosto 2024",
            icon: Image,
            url: "/documents/Constancia-participacion-taller-FerreyCorp.png"
        },
        {
            title: "Certificado de PowerBI para DataAnalytics",
            type: "PDF",
            date: "Febrero 2025",
            icon: ChartPie,
            url: "/documents/Certificado_PowerBI2025.pdf"
        },
        {
            title: "Certificado de SQL Server",
            type: "PDF",
            date: "Agosto 2024",
            icon: Database,
            url: "/documents/Certificado_SQLServer2024.pdf"
        },
        {
            title: "Constancia de participación - Taller Virtual: Python Fundamentals",
            type: "PNG",
            date: "Octubre 2025",
            icon: Image,
            url: "/documents/Constancia-Python-Fundamentals.png"
        },
    ];

    return (
        <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Mis Documentos</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Certificados y documentación profesional</p>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                >
                    <X size={24} />
                </button>
            </div>

            <div className="max-h-[450px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                {docs.map((doc, index) => (
                    <DocumentCard
                        key={index}
                        {...doc}
                        onDownload={() => window.open(doc.url, '_blank')}
                    />
                ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-indigo-600/5 dark:bg-indigo-500/5 border border-indigo-500/20 text-center">
                <p className="text-xs text-slate-600 dark:text-slate-400">
                    Si necesitas algún otro documento específico, no dudes en contactarme directamente.
                </p>
            </div>
        </div>
    );
};

export default Documents;
