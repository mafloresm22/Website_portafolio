import Navbar from "./components/Navbar"
import Header from "./components/Header"
import AcercaDeMi from "./components/AcercaDeMi"
import Habilidades from "./components/Habilidades"
import Projects from "./components/projects"
import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={
      darkMode
        ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen transition-colors duration-500'
        : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen transition-colors duration-500'
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isModalOpen={isModalOpen} />
      <Header darkMode={darkMode} setIsModalOpen={setIsModalOpen} />
      <AcercaDeMi darkMode={darkMode} />
      <Habilidades darkMode={darkMode} setIsModalOpen={setIsModalOpen} />
      <Projects darkMode={darkMode} setIsModalOpen={setIsModalOpen} />
    </div>
  )
}

export default App