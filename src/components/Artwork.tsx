import { useId } from 'react';

export function Star({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      {Array.from({ length: 8 }, (_, index) => (
        <ellipse key={index} cx="50" cy="27" rx="8" ry="24" transform={`rotate(${index * 45} 50 50)`} />
      ))}
    </svg>
  );
}

export function OrbitArtwork() {
  const id = useId().replace(/:/g, '');
  return (
    <svg className="orbit-artwork" viewBox="0 0 520 460" fill="none" aria-hidden="true">
      <defs>
        <pattern id={`${id}-grid`} width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="currentColor" opacity="0.18" />
        </pattern>
        <radialGradient id={`${id}-sphere`} cx="30%" cy="25%" r="80%">
          <stop stopColor="var(--orb-highlight)" />
          <stop offset="0.54" stopColor="var(--orb-mid)" />
          <stop offset="1" stopColor="var(--orb-shadow)" />
        </radialGradient>
        <pattern id={`${id}-grain`} width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.65" fill="var(--paper)" opacity="0.25" />
          <circle cx="3" cy="3" r="0.4" fill="var(--ink)" opacity="0.3" />
        </pattern>
      </defs>
      <rect x="20" y="12" width="480" height="426" fill={`url(#${id}-grid)`} />
      <g className="art-construction" stroke="currentColor" strokeWidth="0.65" opacity="0.2">
        <circle cx="260" cy="230" r="185" strokeDasharray="3 7" />
        <path d="M260 20V440M40 230H480" />
        <path d="M67 36h16m-8-8v16M437 417h16m-8-8v16" />
      </g>
      <g className="orbital-sculpture">
        <g className="orbit-back" stroke="var(--accent)" strokeWidth="1.25">
          {Array.from({ length: 19 }, (_, index) => (
            <ellipse key={index} cx="260" cy="230" rx={176 - index * 1.3} ry={40 + index * 5.7} transform="rotate(-36 260 230)" opacity={0.45 + index * 0.022} />
          ))}
        </g>
        <circle cx="260" cy="230" r="82" fill={`url(#${id}-sphere)`} />
        <circle cx="260" cy="230" r="82" fill={`url(#${id}-grain)`} />
        <g stroke="var(--accent)" strokeWidth="1.15">
          {Array.from({ length: 11 }, (_, index) => (
            <ellipse key={index} cx="260" cy="230" rx={185 - index * 2.4} ry={35 + index * 2.7} transform="rotate(35 260 230)" />
          ))}
        </g>
        <g className="orbit-satellite">
          <circle cx="399" cy="108" r="15" fill="var(--accent)" />
          <circle cx="394" cy="103" r="3" fill="var(--paper)" opacity="0.45" />
        </g>
        <circle cx="113" cy="327" r="5" fill="var(--ink)" />
      </g>
      <g className="art-label" fill="currentColor" fontSize="9" fontFamily="monospace" letterSpacing="1.5">
        <text x="38" y="64">∞ POSSIBILITIES</text>
        <text x="386" y="385">YOU ARE HERE</text>
      </g>
      <path d="M372 380h-26l-24-32" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <circle cx="322" cy="348" r="2" fill="var(--accent)" />
    </svg>
  );
}

export function CardArtwork({ kind }: { kind: string }) {
  if (kind === 'personal') {
    return <div className="personal-art" aria-hidden="true"><Star /><span className="personal-art-ring" /></div>;
  }
  if (kind === 'github') {
    return (
      <svg className="card-art github-art" viewBox="0 0 180 180" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1">
          {Array.from({ length: 9 }, (_, index) => <rect key={index} x={26 + index * 4} y={26 + index * 4} width={128 - index * 8} height={128 - index * 8} rx="2" transform={`rotate(${index * 7} 90 90)`} />)}
        </g>
        <path d="m79 80-11 10 11 10m22-20 11 10-11 10m-8-24-6 28" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (kind === 'markdown') {
    return (
      <svg className="card-art tool-art" viewBox="0 0 120 100" fill="none" aria-hidden="true">
        <rect x="22" y="12" width="64" height="75" rx="2" stroke="currentColor" transform="rotate(-12 54 50)" />
        <rect x="37" y="17" width="64" height="75" rx="2" fill="var(--card-surface)" stroke="currentColor" transform="rotate(6 69 55)" />
        <path d="M51 37h36M51 44h26M51 74l12-16 9 10 9-8 9 16H51Z" stroke="currentColor" />
        <circle cx="82" cy="53" r="3" fill="currentColor" />
      </svg>
    );
  }
  if (kind === 'converter') {
    return <div className="hanzi-art" aria-hidden="true"><span>漢</span><span>汉</span><i>↔</i></div>;
  }
  return (
    <svg className="card-art tool-art link-art" viewBox="0 0 120 100" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.5" transform="rotate(-35 60 50)">
        <rect x="14" y="33" width="58" height="34" rx="17" />
        <rect x="48" y="33" width="58" height="34" rx="17" />
        <path d="M47 50h26" />
      </g>
    </svg>
  );
}
