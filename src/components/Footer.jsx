import React from 'react';

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-slate-100 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="text-2xl font-black text-slate-900 dark:text-white">
                            Mathias<span className="text-indigo-600">.dev</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                            Construyendo el futuro con código y creatividad.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-bold">
                            Hecho por Mathias Flores
                        </div>
                        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-[0.2em]">
                            &copy; {currentYear} Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
