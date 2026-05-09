import { X, CheckCircle2, Smartphone, ShieldCheck, Zap, Share2 } from 'lucide-react';
import { GithubIcon } from '../../Icons';

const ShowAppMovilListaCompras = ({ onClose, darkMode }) => {
    const features = [
        "Gestión de listas colaborativas",
        "Sincronización en tiempo real",
        "Búsqueda inteligente de productos",
        "Categorización automática",
        "Interfaz móvil moderna y fluida"
    ];

    return (
        <div className="flex flex-col h-full bg-white dark:bg-slate-900">
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-8 py-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                        <Smartphone size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Lista de Compras Móvil</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">App Móvil / React Native & Supabase</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-all hover:rotate-90"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="max-w-6xl mx-auto px-8 py-12 space-y-16">

                    {/* Hero Description */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                Organiza tus compras de forma inteligente y colaborativa.
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Esta aplicación móvil revoluciona la forma en que gestionas tus compras diarias.
                                Permite crear listas compartidas con familiares o amigos, ver actualizaciones en tiempo real
                                y organizar productos por categorías para optimizar tu tiempo en el supermercado.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold">
                                        <CheckCircle2 size={20} className="text-blue-500" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6">
                                <a
                                    href="https://github.com/mafloresm22/appMiCarrito.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 dark:bg-blue-600 text-white font-bold hover:scale-105 transition-all shadow-xl shadow-blue-500/20"
                                >
                                    Ver Código en GitHub <GithubIcon size={20} className="invert dark:invert-0" />
                                </a>
                            </div>
                        </div>

                        <div className="relative flex justify-center">
                            <div className="absolute -inset-4 bg-blue-500/20 rounded-[3rem] blur-3xl" />
                            <img
                                src="/images/appMovListaCompras/Inicio.jpeg"
                                alt="Preview"
                                className="relative rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-[280px]"
                            />
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="space-y-12">
                        <div className="text-center space-y-4">
                            <h4 className="text-3xl font-bold text-slate-900 dark:text-white">Demostración en Video</h4>
                            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                                Mira la aplicación en acción y descubre lo fácil que es gestionar tus listas de compras.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-slate-900 dark:border-slate-800 bg-slate-900">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/kUZUpmYeW4Y"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Additional Tech Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                                <Zap size={24} />
                            </div>
                            <h5 className="text-xl font-bold text-slate-900 dark:text-white">Alta Performance</h5>
                            <p className="text-slate-500 dark:text-slate-400">Desarrollado con React Native para una experiencia nativa fluida en iOS y Android.</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                                <Share2 size={24} />
                            </div>
                            <h5 className="text-xl font-bold text-slate-900 dark:text-white">Colaboración</h5>
                            <p className="text-slate-500 dark:text-slate-400">Sincronización instantánea entre múltiples usuarios gracias a la potencia de Supabase.</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
                                <ShieldCheck size={24} />
                            </div>
                            <h5 className="text-xl font-bold text-slate-900 dark:text-white">Seguridad</h5>
                            <p className="text-slate-500 dark:text-slate-400">Autenticación robusta y control de acceso para proteger la privacidad de tus listas.</p>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="p-12 rounded-[3rem] bg-blue-600 text-white text-center space-y-6">
                        <h4 className="text-3xl font-bold">¿Quieres saber más sobre este proyecto?</h4>
                        <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                            Esta aplicación utiliza tecnologías de vanguardia para ofrecer una solución robusta y escalable.
                            Desde el backend con Supabase hasta el frontend con React Native.
                        </p>
                        <button
                            onClick={onClose}
                            className="px-8 py-3 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-colors"
                        >
                            Regresar a Proyectos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowAppMovilListaCompras;
