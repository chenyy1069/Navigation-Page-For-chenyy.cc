import { motion } from 'motion/react';
import { NavigationCards } from './components/NavigationCards';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0c0e14] flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden font-sans relative transition-colors duration-500 selection:bg-purple-900/30">
      {/* Background Mesh Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10 transition-colors duration-500" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10 transition-colors duration-500" />
      <div className="fixed top-[20%] right-[10%] w-[300px] h-[300px] bg-pink-400/10 dark:bg-pink-600/10 rounded-full blur-[100px] pointer-events-none -z-10 transition-colors duration-500" />

      {/* Theme Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="absolute top-6 right-6 p-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 transition-all z-20"
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-2xl flex flex-col items-center z-10"
      >
        <header className="mb-8 w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] pb-2 leading-tight">
            Nevigation Page For ChenYY🌀
          </h1>
        </header>

        <main className="w-full">
          <NavigationCards />
        </main>

        <footer className="mt-12 text-slate-500 text-sm tracking-widest text-center pb-4 font-medium">
          By ChenYY🌀
        </footer>
      </motion.div>
    </div>
  );
}
