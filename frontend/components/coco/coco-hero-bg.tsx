const NODES: [number, number, number][] = [
  [120, 190, 3.4],
  [176, 128, 2.6],
  [182, 250, 2.8],
  [238, 96, 2.2],
  [246, 190, 3.8],
  [244, 288, 2.4],
  [300, 140, 2.6],
  [306, 240, 2.8],
  [352, 96, 2.2],
  [358, 190, 3.4],
  [356, 286, 2.4],
  [414, 140, 2.6],
  [420, 240, 2.6],
  [470, 190, 3.2],
]

const LINKS: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [3, 6],
  [4, 6],
  [4, 7],
  [5, 7],
  [6, 8],
  [6, 9],
  [7, 9],
  [7, 10],
  [8, 11],
  [9, 11],
  [9, 12],
  [10, 12],
  [11, 13],
  [12, 13],
]

const CANDLES: [number, number, number, number][] = [
  // x, bodyTop, bodyHeight, dir (1 up / 0 down)
  [20, 86, 26, 1],
  [44, 70, 34, 1],
  [68, 92, 20, 0],
  [92, 58, 40, 1],
  [116, 46, 24, 1],
  [140, 66, 30, 0],
  [164, 40, 34, 1],
  [188, 28, 26, 1],
  [212, 52, 22, 0],
  [236, 30, 38, 1],
  [260, 18, 28, 1],
  [284, 44, 24, 0],
  [308, 24, 34, 1],
  [332, 12, 30, 1],
  [356, 36, 22, 0],
  [380, 16, 36, 1],
]

export function CocoHeroBg() {
  return (
    <div className="coco-hero-bg" aria-hidden="true">
      <span className="coco-hero-glow coco-hero-glow-a" />
      <span className="coco-hero-glow coco-hero-glow-b" />
      <span className="coco-hero-glow coco-hero-glow-c" />

      <svg className="coco-hero-neural" viewBox="0 0 590 380" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="cocoNeuralLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b6bff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3ecfff" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {LINKS.map(([a, b], i) => (
          <line
            key={`${a}-${b}`}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
            stroke="url(#cocoNeuralLine)"
            strokeWidth="1"
            className="coco-neural-line"
            style={{ animationDelay: `${(i % 7) * 0.45}s` }}
          />
        ))}
        {NODES.map(([x, y, r], i) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={r}
            fill="#c4a6ff"
            className="coco-neural-node"
            style={{ animationDelay: `${(i % 5) * 0.6}s` }}
          />
        ))}
      </svg>

      <svg className="coco-hero-candles" viewBox="0 0 400 130" preserveAspectRatio="none">
        {CANDLES.map(([x, top, h, up]) => (
          <g key={x} fill={up ? '#4ade80' : '#fb7185'} stroke={up ? '#4ade80' : '#fb7185'}>
            <line x1={x + 5} y1={top - 9} x2={x + 5} y2={top + h + 9} strokeWidth="1" />
            <rect x={x} y={top} width="10" height={h} rx="1.5" />
          </g>
        ))}
      </svg>
    </div>
  )
}
