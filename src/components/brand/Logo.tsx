import * as React from "react";

/**
 * Bilfora logo — a type-only Arabic wordmark (بلفورا) set in Thmanyah Serif
 * Display. There is no drawn symbol. An optional cyan accent dot adds the
 * brand's quiet "energetic" spark. All colors resolve from CSS tokens, so the
 * mark themes itself in light and dark.
 */

export type LogoVariant = "wordmark" | "lockup" | "stacked";
export type LogoColor = "brand" | "ink" | "onDark" | "mono";

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: LogoVariant;
  color?: LogoColor;
  /** Font size in px that drives the whole mark's scale. */
  size?: number;
  /** Show the accent dot after the wordmark. */
  dot?: boolean;
}

const PALETTES: Record<LogoColor, { word: string; sub: string; dot: string }> = {
  brand: { word: "var(--brand)", sub: "var(--text-muted)", dot: "var(--accent)" },
  ink: { word: "var(--text)", sub: "var(--text-muted)", dot: "var(--accent)" },
  onDark: { word: "var(--text-on-dark)", sub: "rgba(255,255,255,.6)", dot: "var(--accent)" },
  mono: { word: "currentColor", sub: "currentColor", dot: "currentColor" },
};

export function Logo({
  variant = "wordmark",
  color = "brand",
  size = 32,
  dot = true,
  className,
  style,
  ...rest
}: LogoProps) {
  const palette = PALETTES[color] ?? PALETTES.brand;

  const word = (
    <span
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        color: palette.word,
        lineHeight: 1,
        letterSpacing: "-0.01em",
        display: "inline-flex",
        alignItems: "flex-start",
      }}
    >
      بلفورا
      {dot && (
        <span
          aria-hidden="true"
          style={{
            width: Math.max(4, size * 0.14),
            height: Math.max(4, size * 0.14),
            borderRadius: "999px",
            background: palette.dot,
            marginInlineStart: size * 0.1,
            marginTop: size * 0.12,
            flexShrink: 0,
          }}
        />
      )}
    </span>
  );

  if (variant === "lockup") {
    return (
      <span
        className={className}
        style={{ display: "inline-flex", alignItems: "baseline", gap: size * 0.32, fontSize: size, ...style }}
        {...rest}
      >
        {word}
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: size * 0.5,
            color: palette.sub,
            letterSpacing: "0.02em",
          }}
        >
          Bilfora
        </span>
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <span
        className={className}
        style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: size * 0.08, fontSize: size, ...style }}
        {...rest}
      >
        {word}
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: size * 0.26,
            color: palette.sub,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
        >
          Bilfora
        </span>
      </span>
    );
  }

  return (
    <span className={className} style={{ display: "inline-flex", fontSize: size, ...style }} {...rest}>
      {word}
    </span>
  );
}

export default Logo;
