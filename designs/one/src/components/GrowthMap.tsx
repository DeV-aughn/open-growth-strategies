import { motion } from "motion/react";

/**
 * Signature visual (Principle 12): a stylized "growth map" —
 * a service territory with routes lighting up and an upward revenue line.
 * Recurs across the site as the shape of the agency in a client's mind.
 */
export function GrowthMap({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 70, y: 250, r: 5 },
    { x: 150, y: 190, r: 6 },
    { x: 235, y: 235, r: 5 },
    { x: 300, y: 150, r: 7 },
    { x: 380, y: 195, r: 5 },
    { x: 190, y: 300, r: 5 },
    { x: 315, y: 300, r: 6 },
  ];
  const routes = [
    "M70,250 L150,190",
    "M150,190 L235,235",
    "M235,235 L300,150",
    "M300,150 L380,195",
    "M150,190 L190,300",
    "M235,235 L315,300",
    "M190,300 L315,300",
  ];

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 440 380" className="w-full h-auto overflow-visible">
        <defs>
          <linearGradient id="rev" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#1fe089" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1fe089" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1fe089" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1fe089" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* faint territory grid */}
        <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1="20" y1={60 + i * 45} x2="420" y2={60 + i * 45} />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={40 + i * 45} y1="40" x2={40 + i * 45} y2="330" />
          ))}
        </g>

        {/* territory outline */}
        <motion.path
          d="M55,120 C120,70 250,60 340,95 C420,125 405,240 360,300 C300,360 140,350 85,300 C40,258 20,175 55,120 Z"
          fill="rgba(31,224,137,0.04)"
          stroke="rgba(31,224,137,0.35)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* routes drawing in */}
        {routes.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="#1fe089"
            strokeWidth="1.6"
            strokeOpacity="0.55"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 + i * 0.13 }}
          />
        ))}

        {/* account nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r + 6}
              fill="url(#glow)"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + i * 0.12, duration: 0.6 }}
            />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="#0b0b08"
              stroke="#1fe089"
              strokeWidth="2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7 + i * 0.12,
                type: "spring",
                stiffness: 220,
                damping: 14,
              }}
            />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="none"
              stroke="#1fe089"
              strokeWidth="1.5"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                delay: 1 + i * 0.3,
                ease: "easeOut",
              }}
            />
          </g>
        ))}

        {/* rising revenue line + area */}
        <motion.path
          d="M55,300 L120,275 L185,255 L250,210 L315,175 L385,110"
          fill="none"
          stroke="url(#rev)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle
          cx="385"
          cy="110"
          r="6"
          fill="#1fe089"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.4, type: "spring", stiffness: 260 }}
        />
      </svg>
    </div>
  );
}
