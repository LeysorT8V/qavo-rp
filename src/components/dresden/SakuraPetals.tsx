import { useMemo } from "react";

const SakuraPetals = ({ count = 24 }: { count?: number }) => {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 10,
        size: 8 + Math.random() * 12,
        drift: -10 + Math.random() * 30,
      })),
    [count]
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden z-[1]">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}vw`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            // shift horizontal drift via translate var
            ["--drift" as string]: `${p.drift}vw`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default SakuraPetals;
