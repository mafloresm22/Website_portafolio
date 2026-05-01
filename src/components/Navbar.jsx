import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ExternalLink, Home, User, Briefcase, Mail, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

// --- Constants & Config ---
const NAV_ITEMS = [
    { name: 'Inicio', href: 'inicio', icon: Home },
    { name: 'Sobre mí', href: 'acerca-de-mi', icon: User },
    { name: 'Habilidades', href: 'habilidades', icon: Cpu },
    { name: 'Proyectos', href: 'proyectos', icon: Briefcase },
    { name: 'Contacto', href: 'contacto', icon: Mail },
];

const getThemeColors = (darkMode) => ({
    bg: darkMode ? 'bg-slate-950/80' : 'bg-white/80',
    text: darkMode ? 'text-slate-100' : 'text-slate-900',
    accent: darkMode ? 'text-indigo-400' : 'text-indigo-600',
    accentBg: darkMode ? 'bg-indigo-500' : 'bg-indigo-600',
    border: darkMode ? 'border-slate-800' : 'border-slate-200',
    mobileBg: darkMode ? 'bg-slate-950' : 'bg-white',
    indicator: darkMode ? 'bg-indigo-500/20' : 'bg-indigo-600/10',
    indicatorText: darkMode ? 'text-indigo-400' : 'text-indigo-600',
});

// --- Sub-components ---

const Logo = ({ colors, onNavItemClick }) => (
    <motion.a
        href="#inicio"
        onClick={(e) => onNavItemClick(e, 'inicio')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 group"
    >
        <div className={`w-8 h-8 rounded-lg ${colors.accentBg} flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-500/20`}>
            M
        </div>
        <span className={`text-xl font-bold tracking-tight ${colors.text}`}>Portafolio</span>
    </motion.a>
);

const DesktopNav = ({ activeSection, onNavItemClick, colors }) => (
    <div className="hidden lg:flex items-center gap-1">
        {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            const Icon = item.icon;
            return (
                <a
                    key={item.name}
                    href={`#${item.href}`}
                    onClick={(e) => onNavItemClick(e, item.href)}
                    className="relative px-4 py-2 group"
                >
                    <span className={`
                        relative z-10 text-sm font-medium transition-colors duration-300 flex items-center gap-2
                        ${isActive ? colors.indicatorText : `${colors.text} opacity-70 group-hover:opacity-100`}
                    `}>
                        <Icon size={16} strokeWidth={2.5} />
                        {item.name}
                    </span>
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`absolute inset-0 ${colors.indicator} rounded-full`}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </a>
            );
        })}
    </div>
);

const ActionButtons = ({ darkMode, toggleDarkMode, colors, onMenuToggle, isMenuOpen }) => (
    <div className="flex items-center gap-2">
        <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${colors.text} hover:bg-indigo-500/10 transition-colors`}
            aria-label="Toggle theme"
        >
            {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-indigo-600" />}
        </button>

        <div className={`hidden sm:flex h-6 w-[1px] ${colors.border} mx-1`} />

        <div className="hidden sm:flex items-center gap-1">
            <SocialLink href="https://github.com" Icon={GithubIcon} colors={colors} darkMode={darkMode} />
            <SocialLink href="https://linkedin.com" Icon={LinkedinIcon} colors={colors} darkMode={darkMode} />
        </div>

        <button
            className={`lg:hidden p-2 rounded-xl ${colors.accent} hover:bg-indigo-500/10 transition-colors`}
            onClick={onMenuToggle}
        >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    </div>
);

const SocialLink = ({ href, Icon, colors, darkMode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
        className={`p-2 rounded-full ${colors.text} opacity-70 hover:opacity-100 hover:bg-indigo-500/10 transition-all`}>
        <Icon size={18} className={darkMode ? 'invert brightness-200' : ''} />
    </a>
);

const MobileMenu = ({ isOpen, activeSection, onNavItemClick, colors, darkMode }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className={`
                    absolute top-full left-0 right-0 mt-4 p-4 lg:hidden
                    ${colors.mobileBg} border ${colors.border}
                    shadow-2xl rounded-2xl overflow-hidden
                `}
            >
                <div className="flex flex-col gap-2">
                    {NAV_ITEMS.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.a
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                href={`#${item.href}`}
                                onClick={(e) => onNavItemClick(e, item.href)}
                                className={`
                                    flex items-center justify-between p-4 rounded-xl text-lg font-medium
                                    ${activeSection === item.href.replace('#', '')
                                        ? `${colors.indicator} ${colors.indicatorText}`
                                        : `${colors.text} hover:bg-indigo-500/10`
                                    }
                                    transition-all
                                `}
                            >
                                <span className="flex items-center gap-3">
                                    <Icon size={20} />
                                    {item.name}
                                </span>
                                <ExternalLink size={16} className="opacity-50" />
                            </motion.a>
                        );
                    })}
                </div>

                <div className={`mt-4 pt-4 border-t ${colors.border} flex justify-center gap-6`}>
                    <GithubIcon size={20} className={`${colors.text} opacity-60 ${darkMode ? 'invert brightness-200' : ''}`} />
                    <LinkedinIcon size={20} className={`${colors.text} opacity-60 ${darkMode ? 'invert brightness-200' : ''}`} />
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

// --- Main Navbar Component ---

const Navbar = ({ darkMode, toggleDarkMode, isModalOpen }) => {
    const [activeSection, setActiveSection] = useState('inicio');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isScrollingManual = useRef(false);
    const scrollTimeoutRef = useRef(null);
    const colors = getThemeColors(darkMode);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (isScrollingManual.current) return;
            
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { 
            threshold: 0.5,
            rootMargin: '-20% 0px -20% 0px' 
        });

        NAV_ITEMS.forEach((item) => {
            const element = document.getElementById(item.href);
            if (element) observer.observe(element);
        });

        // Especial para el final de la página (Contacto)
        const handleScroll = () => {
            if (isScrollingManual.current) return;
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
                setActiveSection('contacto');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavItemClick = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            isScrollingManual.current = true;
            setActiveSection(targetId);
            setIsMenuOpen(false);

            const offsetPosition = elementPosition;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            window.history.pushState(null, '', `/${targetId === 'inicio' ? '' : targetId}`);

            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() => {
                isScrollingManual.current = false;
            }, 800);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ 
                    y: isModalOpen ? -150 : 0, 
                    opacity: isModalOpen ? 0 : 1 
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`
                    pointer-events-auto relative flex items-center justify-between
                    w-full max-w-5xl px-6 py-3 rounded-2xl md:rounded-full
                    ${colors.bg} backdrop-blur-xl border ${colors.border}
                    shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
                `}
            >
                <Logo colors={colors} onNavItemClick={handleNavItemClick} />

                <DesktopNav
                    activeSection={activeSection}
                    onNavItemClick={handleNavItemClick}
                    colors={colors}
                />

                <ActionButtons
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                    colors={colors}
                    onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
                    isMenuOpen={isMenuOpen}
                />

                <MobileMenu
                    isOpen={isMenuOpen}
                    activeSection={activeSection}
                    onNavItemClick={handleNavItemClick}
                    colors={colors}
                    darkMode={darkMode}
                />
            </motion.nav>
        </header>
    );
};

export default Navbar;