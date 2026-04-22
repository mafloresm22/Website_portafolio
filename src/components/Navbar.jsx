import React, { useState } from 'react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Acerca de mí', href: '#acerca-de-mi' },
        { name: 'Proyectos', href: '#proyectos' },
        { name: 'Contacto', href: '#contacto' },
    ];


    return (
        <div>
            Navbar
        </div>
    )
}

export default Navbar