import { ArrowUpRight } from 'lucide-react';
import type { SiteLink } from '../types';
import { CardArtwork } from './Artwork';

export const sites: SiteLink[] = [
  {
    id: 'personal',
    name: 'The person behind it.',
    label: '关于我',
    category: '01 / A FACE BEHIND THE LINKS',
    url: 'http://me.chenyy.cc',
    domain: 'me.chenyy.cc',
    description: '互联网里的另一面。认识我，从这里开始。',
  },
  {
    id: 'github',
    name: 'Ideas, in source code.',
    label: '代码与实验',
    category: '02 / OPEN SOURCE, OPEN ENDED',
    url: 'https://github.com/chenyy1069',
    domain: 'github.com/chenyy1069',
    description: '把「如果可以」写成代码。完成的、未完成的，都在这里。',
  },
  {
    id: 'markdown',
    name: 'Words into pictures.',
    label: 'Markdown 图像预览',
    category: '03 / WORDS → IMAGES',
    url: 'http://markdown-viewer.chenyy.cc',
    domain: 'markdown-viewer.chenyy.cc',
    description: '让文字有个好看的样子。预览 Markdown，导出为图片。',
  },
  {
    id: 'converter',
    name: 'Same words, new form.',
    label: '繁简转换',
    category: '04 / A DIFFERENT CHARACTER',
    url: 'http://hanzi.chenyy.cc',
    domain: 'hanzi.chenyy.cc',
    description: '繁与简之间，意思不变。给文字换一种写法。',
  },
  {
    id: 'shorturl',
    name: 'A shorter way there.',
    label: '短链接管理',
    category: '05 / LESS IS A LINK',
    url: 'http://chenyy.cc/url-admin',
    domain: 'chenyy.cc/url-admin',
    description: '把长长的地址，折成一个小小的入口。',
  },
];

export function NavigationCards() {
  return (
    <div className="navigation-grid">
      {sites.map((site) => (
        <a key={site.id} href={site.url} className={`destination-card card-${site.id}`}>
          <div className="card-topline">
            <span className="card-category">{site.category}</span>
            <span className="card-arrow"><ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" /></span>
          </div>
          <CardArtwork kind={site.id} />
          <div className="card-copy">
            <span className="card-label">{site.label}</span>
            <h3>{site.name}</h3>
            <p>{site.description}</p>
          </div>
          <span className="card-domain">{site.domain}</span>
        </a>
      ))}
    </div>
  );
}
