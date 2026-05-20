import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { SiteLink } from '../types';
import { User, Github, Image as ImageIcon, Languages, Link2 } from 'lucide-react';

export const sites: SiteLink[] = [
  {
    id: 'personal',
    name: 'My Personal Page',
    url: 'http://me.chenyy.cc',
    description: 'my cyber contact card',
    icon: User,
    colorClass: 'text-blue-500 dark:text-blue-400',
    bgHoverClass: 'hover:bg-blue-500/10 dark:hover:bg-blue-500/20',
    borderHoverClass: 'hover:border-blue-500/30 dark:hover:border-blue-500/30'
  },
  {
    id: 'github',
    name: 'My Github Page',
    url: 'https://github.com/chenyy1069',
    description: 'ehhh...I think the page tells you enough',
    icon: Github,
    colorClass: 'text-gray-700 dark:text-slate-300',
    bgHoverClass: 'hover:bg-gray-500/10 dark:hover:bg-slate-700/50',
    borderHoverClass: 'hover:border-gray-500/30 dark:hover:border-slate-500/50'
  },
  {
    id: 'markdown',
    name: 'Markdown-Image Viewer',
    url: 'http://markdown-viewer.chenyy.cc',
    description: 'Online .md viewer and allows you to preview and export as image',
    icon: ImageIcon,
    colorClass: 'text-emerald-500 dark:text-emerald-400',
    bgHoverClass: 'hover:bg-emerald-500/10 dark:hover:bg-emerald-500/20',
    borderHoverClass: 'hover:border-emerald-500/30 dark:hover:border-emerald-500/30'
  },
  {
    id: 'converter',
    name: 'Chinese Traditional&Simplified Converter',
    url: 'http://hanzi.chenyy.cc',
    description: 'Effortless conversion between Traditional and Simplified Chinese characters for linguistic clarity.',
    icon: Languages,
    colorClass: 'text-rose-500 dark:text-rose-400',
    bgHoverClass: 'hover:bg-rose-500/10 dark:hover:bg-rose-500/20',
    borderHoverClass: 'hover:border-rose-500/30 dark:hover:border-rose-500/30'
  },
  {
    id: 'shorturl',
    name: 'Short URL',
    url: 'http://chenyy.cc/url-admin',
    description: 'A powerful management dashboard for shortening links and tracking analytics for shared resources.',
    icon: Link2,
    colorClass: 'text-purple-500 dark:text-purple-400',
    bgHoverClass: 'hover:bg-purple-500/10 dark:hover:bg-purple-500/20',
    borderHoverClass: 'hover:border-purple-500/30 dark:hover:border-purple-500/30'
  },
];

export function NavigationCards() {
  const [selectedSite, setSelectedSite] = useState<string | null>(null);

  const toggleSite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedSite(selectedSite === id ? null : id);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 gap-4 w-full">
        {sites.map((site, index) => (
          <motion.div
            key={site.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
            className="group relative flex items-center gap-3 w-full z-10 hover:z-20"
          >
            <a
              href={site.url}
              className={`flex-1 min-w-0 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 py-3 px-3 sm:py-4 sm:px-8 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl backdrop-blur-md text-gray-800 dark:text-white text-sm sm:text-lg md:text-xl font-medium transition-all cursor-pointer ${site.bgHoverClass || 'hover:bg-black/10 dark:hover:bg-white/15'} ${site.borderHoverClass || 'hover:border-black/20 dark:hover:border-white/20'}`}
            >
              {site.icon && <site.icon className={`${site.colorClass} w-6 h-6 sm:w-6 sm:h-6 shrink-0`} />}
              <span className="text-center break-words w-full leading-tight">{site.name}</span>
            </a>
            
            <div 
              className="relative flex items-center h-full"
              onMouseEnter={() => setSelectedSite(site.id)}
              onMouseLeave={() => setSelectedSite(null)}
            >
              <button
                onClick={(e) => toggleSite(site.id, e)}
                className="w-14 h-full min-h-[60px] sm:min-h-[68px] shrink-0 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl backdrop-blur-md text-gray-500 dark:text-white/40 flex items-center justify-center text-2xl hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-all italic font-serif cursor-pointer focus:outline-none"
                aria-label={`About ${site.name}`}
              >
                ?
              </button>

              <AnimatePresence>
                {selectedSite === site.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-1/2 -translate-y-1/2 right-[calc(100%+0.5rem)] w-48 sm:w-64 p-4 bg-white/95 dark:bg-[#1f2233]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl z-50 text-sm text-gray-700 dark:text-gray-300 pointer-events-none"
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 rotate-45 bg-white/95 dark:bg-[#1f2233]/95 border-r border-t border-black/10 dark:border-white/10" />
                    <div className="relative z-10 leading-relaxed font-sans">
                      {site.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
