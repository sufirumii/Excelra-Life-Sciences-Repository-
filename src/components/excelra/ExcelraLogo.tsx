"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ExcelraLogoProps {
  variant?: "dark" | "light";
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Excelra wordmark. Uses the transparent-background PNG variants so the logo
 * blends cleanly onto white / light-purple surfaces (no white box around it).
 */
export function ExcelraLogo({
  variant = "dark",
  height = 28,
  className,
  priority,
}: ExcelraLogoProps) {
  const src =
    variant === "light"
      ? "/excelra/excelra-logo-light.png"
      : "/excelra/excelra-logo.png";
  return (
    <Image
      src={src}
      alt="Excelra"
      height={height}
      width={height * 4.03}
      className={cn("select-none", className)}
      style={{ height, width: "auto" }}
      priority={priority}
    />
  );
}
