import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Moon, Sun } from 'lucide-react';
import { NavigationCards } from './components/NavigationCards';
import { OrbitArtwork, Star } from './components/Artwork';

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
      <a className="skip-link" href="#destinations">跳到导航 / Skip to links</a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="ChenYY 首页">
          <Star className="brand-mark" />
          <span>chenyy<span className="wordmark-dot">.</span>cc</span>
        </a>
        <span className="header-note">A PERSONAL INTERNET, IN FIVE LINKS.</span>
        <div className="header-actions">
          <a className="index-link" href="#destinations">The index <span>05</span></a>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setIsDark((current) => !current)}
            aria-label={isDark ? '切换到浅色模式' : '切换到深色模式'}
            aria-pressed={isDark}
          >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> THE INTERNET IS A BIG PLACE. THIS IS MY LITTLE ONE.</p>
            <h1 id="hero-title">A little<br />out of <em>orbit.</em></h1>
            <div className="hero-bottom">
              <p className="hero-description">一些想法，一些小工具。<br />还有一个，不太愿意待在轨道里的我。</p>
              <a className="explore-link" href="#destinations" aria-label="探索五个导航入口">
                <ArrowDown size={19} aria-hidden="true" />
                <span>随好奇心，去下一站</span>
              </a>
            </div>
          </div>
          <div className="hero-art">
            <OrbitArtwork />
            <div className="art-caption"><span>FIG. 01 — A SMALL UNIVERSE</span><span>NO FIXED ORBIT ↗</span></div>
          </div>
        </section>

        <section className="destinations" id="destinations" aria-labelledby="destinations-title">
          <div className="section-heading">
            <h2 id="destinations-title"><span className="section-tick" /> 随意逛逛 <span className="section-english">/ THE INDEX</span></h2>
            <p>FIVE DOORS. A FEW POSSIBILITIES.</p>
          </div>
          <NavigationCards />
        </section>
      </main>

      <footer className="site-footer">
        <p><Star className="footer-star" /> Made of curiosity<span className="accent-dot">.</span></p>
        <span className="footer-note">一小片互联网，自由生长。</span>
        <a href="https://github.com/chenyy1069/Navigation-Page-For-chenyy.cc">BY CHENYY <ArrowUpRight size={14} aria-hidden="true" /></a>
      </footer>
    </div>
  );
}
