import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

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
        ? 'bg-linear-to-br from-gray-900 via-{#0d182e} to-gray-900 min-h-screen'
        : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default App