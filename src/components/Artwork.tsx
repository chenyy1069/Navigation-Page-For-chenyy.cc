export function Star({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      {Array.from({ length: 8 }, (_, index) => (
        <ellipse key={index} cx="50" cy="27" rx="8" ry="24" transform={`rotate(${index * 45} 50 50)`} />
      ))}
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
