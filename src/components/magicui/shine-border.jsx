"use client";

/**
 * ShineBorder - MagicUI style animated shine border
 * https://magicui.design/docs/components/shine-border
 */
export default function ShineBorder({
  children,
  className = "",
  borderWidth = 2,
  duration = 14,
  shineColor = ["#A07CFE", "#FE8FB5", "#FFBE7B"],
  borderRadius = 24,
  style,
}) {
  const colors = Array.isArray(shineColor) ? shineColor.join(", ") : shineColor;

  return (
    <div
      style={{
        "--border-width": `${borderWidth}px`,
        "--duration": `${duration}s`,
        "--shine-color": colors,
        "--border-radius": `${borderRadius}px`,
        ...style,
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Shine effect layer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[var(--border-radius)]"
        style={{
          padding: "var(--border-width)",
          background: `linear-gradient(90deg, ${colors})`,
          backgroundSize: "200% 100%",
          animation: `shine var(--duration) linear infinite`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
}
