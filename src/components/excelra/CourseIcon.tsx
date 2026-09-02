"use client";

import { ACCENT_SOFT, type AccentName } from "@/lib/excelra/data";

/**
 * Renders a course's inline SVG icon (stored as raw markup in the data) inside
 * a tinted rounded tile whose hue is driven by the course accent.
 */
export function CourseIcon({
  icon,
  accent,
  size = 44,
  className,
}: {
  icon: string;
  accent: AccentName;
  size?: number;
  className?: string;
}) {
  const a = ACCENT_SOFT[accent];
  return (
    <span
      className={`inline-flex items-center justify-center rounded-2xl ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        background: a.tint,
        color: a.hex,
      }}
      dangerouslySetInnerHTML={{
        __html: `<span style="display:flex;width:100%;height:100%;align-items:center;justify-content:center;">${icon.replace(
          /stroke-width="2\.4"/g,
          'stroke-width="2"'
        )}</span>`,
      }}
    />
  );
}
