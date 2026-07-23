import localFont from "next/font/local";

/**
 * Thmanyah typeface family (ثمانية) — self-hosted.
 * - Sans:          UI, body, labels, data (the workhorse)
 * - Serif Text:    editorial / long-form reading (blog, articles)
 * - Serif Display: hero headlines, big numbers, the logo wordmark
 *
 * Arabic-first. `adjustFontFallback` is disabled because Next's automatic
 * fallback metrics are tuned for Latin and distort Arabic line boxes.
 */

export const thmanyahSans = localFont({
  src: [
    { path: "../fonts/thmanyah/ThmanyahSans-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/thmanyah/ThmanyahSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/thmanyah/ThmanyahSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/thmanyah/ThmanyahSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/thmanyah/ThmanyahSans-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-thmanyah-sans",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Tahoma", "sans-serif"],
  adjustFontFallback: false,
  preload: true,
});

export const thmanyahSerifText = localFont({
  src: [
    { path: "../fonts/thmanyah/ThmanyahSerifText-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/thmanyah/ThmanyahSerifText-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/thmanyah/ThmanyahSerifText-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/thmanyah/ThmanyahSerifText-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/thmanyah/ThmanyahSerifText-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-thmanyah-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: false,
  preload: false,
});

export const thmanyahSerifDisplay = localFont({
  src: [
    { path: "../fonts/thmanyah/ThmanyahSerifDisplay-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/thmanyah/ThmanyahSerifDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/thmanyah/ThmanyahSerifDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/thmanyah/ThmanyahSerifDisplay-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/thmanyah/ThmanyahSerifDisplay-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-thmanyah-display",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: false,
  preload: true,
});
