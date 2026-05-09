import { useEffect, useState } from "react";

export function FloatingParticles({ count = 18 }: { count?: number }) {
  const [particles, setParticles] = useState<{ l: number; t: number; s: number; d: number; dur: number }[]>([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: count }, () => ({
        l: Math.random() * 100,
        t: Math.random() * 100,
        s: Math.random() * 4 + 2,
        d: Math.random() * 5,
        dur: Math.random() * 6 + 6,
      }))
    );
  }, [count]);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold/40"
          style={{
            left: `${p.l}%`,
            top: `${p.t}%`,
            width: p.s,
            height: p.s,
            boxShadow: "0 0 10px currentColor",
            animation: `float-slow ${p.dur}s ease-in-out ${p.d}s infinite`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}
