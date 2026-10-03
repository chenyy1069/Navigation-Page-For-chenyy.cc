import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { NavigationCards } from './components/NavigationCards';
import { Star } from './components/Artwork';

export default function App() {
  const [isDark, setIsDark] = useState(() => document.documentElement.dataset.theme === 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    try {
      localStorage.setItem('chenyy-theme', isDark ? 'dark' : 'light');
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }, [isDark]);

  return (
    <div className="page-shell">
      <header className="site-header">
        <h1 className="wordmark">
          <Star className="brand-mark" />
          <span>chenyy<span className="wordmark-dot">.</span>cc</span>
        </h1>
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setIsDark((current) => !current)}
          aria-label={isDark ? '切换到浅色模式' : '切换到深色模式'}
          aria-pressed={isDark}
        >
          {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>
      </header>

      <main className="destinations" aria-label="导航 / Links">
        <NavigationCards />
      </main>
    </div>
  );
}
