import * as React from "react";
import { LogoSymbol } from "./LogoSymbol";

/**
 * Bilfora logo — the isometric block symbol paired with the Arabic wordmark
 * (بلفورا) set in Thmanyah Serif Display. All colors resolve from CSS tokens,
 * so a token change re-themes the mark everywhere.
 *
 * Use `variant="symbol"` where there is no room for type (collapsed sidebar,
 * app icons); the other variants render symbol + wordmark.
 */

export type LogoVariant = "wordmark" | "lockup" | "stacked" | "symbol";
export type LogoColor = "brand" | "ink" | "onDark" | "mono";

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: LogoVariant;
  color?: LogoColor;
  /** Font size in px that drives the whole mark's scale. */
  size?: number;
  /** Show the accent dot after the wordmark. Off by default — the symbol carries the accent. */
  dot?: boolean;
  /** Render the block symbol alongside the wordmark. */
  symbol?: boolean;
}

const PALETTES: Record<LogoColor, { word: string; sub: string; dot: string; mark: string }> = {
  brand: { word: "var(--brand)", sub: "var(--text-muted)", dot: "var(--accent)", mark: "var(--brand)" },
  ink: { word: "var(--text)", sub: "var(--text-muted)", dot: "var(--accent)", mark: "var(--brand)" },
  onDark: { word: "var(--text-on-dark)", sub: "rgba(255,255,255,.6)", dot: "var(--accent)", mark: "var(--text-on-dark)" },
  mono: { word: "currentColor", sub: "currentColor", dot: "currentColor", mark: "currentColor" },
};

export function Logo({
  variant = "wordmark",
  color = "brand",
  size = 32,
  dot = false,
  symbol = true,
  className,
  style,
  ...rest
}: LogoProps) {
  const palette = PALETTES[color] ?? PALETTES.brand;

  /* Thin strokes vanish below ~24px, so scale the weight up as the mark shrinks. */
  const markSize = size * 0.95;
  const mark = (
    <LogoSymbol
      size={markSize}
      weight={markSize < 24 ? 4 : 2.5}
      style={{ color: palette.mark, flexShrink: 0 }}
      aria-hidden="true"
    />
  );

  if (variant === "symbol") {
    return (
      <span
        className={className}
        style={{ display: "inline-flex", alignItems: "center", ...style }}
        {...rest}
      >
        <LogoSymbol
          size={size}
          weight={size < 24 ? 4 : 2.5}
          style={{ color: palette.mark }}
          role="img"
          aria-label="بلفورا"
        />
      </span>
    );
  }

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
        style={{ display: "inline-flex", alignItems: "center", gap: size * 0.32, fontSize: size, ...style }}
        {...rest}
      >
        {symbol && mark}
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
        {symbol && mark}
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
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: size * 0.26, fontSize: size, ...style }}
      {...rest}
    >
      {symbol && mark}
      {word}
    </span>
  );
}

export default Logo;
