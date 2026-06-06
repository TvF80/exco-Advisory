export function BgCandlestick() {
  const candles = Array.from({ length: 14 }, (_, i) => {
    const x = 6 + i * 7;
    const open = 30 + Math.sin(i * 0.9) * 12 + Math.random() * 8;
    const close = open + (Math.random() - 0.4) * 10;
    const high = Math.min(open, close) - 3 - Math.random() * 5;
    const low = Math.max(open, close) + 3 + Math.random() * 5;
    const bull = close < open;
    return { x, open, close, high, low, bull };
  });

  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 60">
      {candles.map((c, i) => (
        <g key={i} stroke={c.bull ? '#C9A84C' : '#2E7D52'} strokeWidth="0.4" fill={c.bull ? '#C9A84C' : '#2E7D52'}>
          <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} />
          <rect x={c.x - 1.5} y={Math.min(c.open, c.close)} width="3" height={Math.abs(c.open - c.close) || 0.5} />
        </g>
      ))}
      <polyline
        points={candles.map(c => `${c.x},${(c.open + c.close) / 2}`).join(' ')}
        fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 1" opacity="0.5"
      />
    </svg>
  );
}

export function BgNetwork() {
  const nodes = [
    { x: 15, y: 20 }, { x: 50, y: 10 }, { x: 85, y: 25 },
    { x: 25, y: 50 }, { x: 60, y: 45 }, { x: 90, y: 55 },
    { x: 10, y: 75 }, { x: 45, y: 80 }, { x: 75, y: 70 },
  ];
  const edges = [
    [0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5],[3,6],[4,7],[5,8],[6,7],[7,8]
  ];
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 90">
      {edges.map(([a,b], i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="#C9A84C" strokeWidth="0.4" />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="1.5" fill="#C9A84C" />
      ))}
    </svg>
  );
}

export function BgRisingLine() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 60">
      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1="0" y1={i * 12} x2="100" y2={i * 12} stroke="#C9A84C" strokeWidth="0.3" />
      ))}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <line key={i} x1={i * 12} y1="0" x2={i * 12} y2="60" stroke="#C9A84C" strokeWidth="0.3" />
      ))}
      <polyline
        points="0,52 15,44 28,46 40,35 55,28 68,20 80,14 92,8 100,4"
        fill="none" stroke="#C9A84C" strokeWidth="1.2"
      />
      <polyline
        points="0,52 15,44 28,46 40,35 55,28 68,20 80,14 92,8 100,4 100,60 0,60"
        fill="url(#riseGrad)" stroke="none"
      />
      <defs>
        <linearGradient id="riseGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[[15,44],[40,35],[68,20],[92,8]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="1.2" fill="#C9A84C" />
      ))}
    </svg>
  );
}

export function BgCircles() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
      {[8,18,30,44,60,78].map((r,i) => (
        <circle key={i} cx="50" cy="50" r={r} fill="none" stroke="#C9A84C" strokeWidth="0.5" />
      ))}
      <line x1="50" y1="0" x2="50" y2="100" stroke="#C9A84C" strokeWidth="0.3" />
      <line x1="0" y1="50" x2="100" y2="50" stroke="#C9A84C" strokeWidth="0.3" />
    </svg>
  );
}
