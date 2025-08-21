import React from "react";

/**
 * A soft gradient that blends one full-bleed section into the next.
 * Use <SectionBlend /> between sections.
 * Variants:
 *  - "down": fades from transparent (top) to black (bottom)
 *  - "up":   fades from black (top) to transparent (bottom)
 */
export default function SectionBlend({ variant = "down" }) {
  const cls =
    variant === "up"
      ? "bg-gradient-to-t from-black via-black/70 to-transparent"
      : "bg-gradient-to-b from-transparent via-black/70 to-black";

  return (
    <div className="relative -mt-10 pointer-events-none select-none">
      {/* height controls blend thickness; tweak h-24/h-32 to taste */}
      <div className={`h-24 w-full ${cls}`} />
    </div>
  );
}
