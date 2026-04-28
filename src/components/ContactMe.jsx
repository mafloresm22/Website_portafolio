import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare, User, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const ContactMe = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xbdqnorn", {
                method: "POST",
                body: new FormData(e.target),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitting(false);
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            setIsSubmitting(false);
            alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contacto" className="py-24 px-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column: Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-black uppercase tracking-wider"
                            >
                                <Sparkles size={14} />
                                ¡Contactame!
                            </motion.div>
                            <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                                Estoy disponible para nuevos proyectos, colaboraciones o simplemente para saludar.
                                <span className="block mt-4 text-indigo-600 dark:text-indigo-400 font-bold">Respondo generalmente en menos de 24 horas.</span>
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <a href="https://www.linkedin.com/in/mafloresm22/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg transition-all duration-300">
                                <LinkedinIcon size={24} />
                            </a>
                            <a href="https://github.com/mafloresm22" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg transition-all duration-300">
                                <GithubIcon size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800/50 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-slate-700 shadow-2xl backdrop-blur-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                                        <User size={14} className="text-indigo-500" /> Nombre
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Tu nombre"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                                        <Mail size={14} className="text-indigo-500" /> Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="tu@email.com"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-all"
                                    />
                                </div>
                            </div>



                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                                    <MessageSquare size={14} className="text-indigo-500" /> Mensaje
                                </label>
                                <textarea
                                    required
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Cuéntame más sobre tu proyecto..."
                                    className="w-full px-6 py-4 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-5 rounded-2xl font-bold text-white flex items-center justify-center gap-3 transition-all duration-300 shadow-xl
                                    ${submitted
                                        ? 'bg-emerald-500 shadow-emerald-500/20'
                                        : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20 hover:-translate-y-1'
                                    }
                                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                                `}
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : submitted ? (
                                    <>¡Mensaje Enviado! <Sparkles size={20} /></>
                                ) : (
                                    <>Enviar Mensaje <Send size={20} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
