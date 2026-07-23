/**
 * UI Design Tokens — Bilfora (Slate-Teal / Thmanyah)
 *
 * Centralized className tokens routed through the semantic CSS variables
 * defined in globals.css (brand teal, ink neutrals, ink-tinted shadows,
 * pill buttons, soft radii). Everything here themes automatically in
 * light and dark because the utilities resolve CSS custom properties.
 */

// ============================================================================
// LAYOUT TOKENS
// ============================================================================

export const layout = {
  container: {
    full: "max-w-7xl", // Landing page sections
    content: "max-w-6xl", // Content pages
    dashboard: "max-w-[1600px]", // Dashboard container
  },

  paddingX: {
    mobile: "px-4",
    tablet: "sm:px-6",
    desktop: "lg:px-8",
    responsive: "px-4 sm:px-6 lg:px-8",
  },

  section: {
    small: "py-12",
    medium: "py-16",
    standard: "py-20",
    large: "py-24",
    xlarge: "py-32",
    responsive: "py-16 md:py-24",
  },

  gap: {
    tight: "gap-3",
    standard: "gap-4",
    medium: "gap-5",
    large: "gap-6",
    xlarge: "gap-8",
  },

  stack: {
    tight: "space-y-2",
    standard: "space-y-4",
    medium: "space-y-6",
    large: "space-y-8",
  },
} as const;

// ============================================================================
// SURFACE TOKENS (Cards, Panels, Modals)
// ============================================================================

export const surface = {
  // Border radius — design scale: md=12 inputs, lg=16 cards, xl=24 modals
  radius: {
    small: "rounded-md", // Inputs, small cards
    medium: "rounded-lg", // Standard cards
    large: "rounded-xl", // Feature cards, modals
    full: "rounded-full", // Buttons, badges
  },

  border: {
    subtle: "border border-border",
    standard: "border border-border-strong",
    brand: "border-brand-soft-2",
    blue: "border-info-border",
    green: "border-success-border",
    orange: "border-warning-border",
    red: "border-danger-border",
  },

  shadow: {
    none: "",
    subtle: "shadow-sm",
    medium: "shadow-md",
    large: "shadow-lg",
    xlarge: "shadow-xl",
    xxlarge: "shadow-2xl",
    brand: "shadow-brand", // Branded (teal) glow for primary CTAs
  },

  padding: {
    small: "p-4",
    standard: "p-5 sm:p-6",
    large: "p-6",
    xlarge: "p-8",
  },

  background: {
    default: "bg-surface",
    subtle: "bg-surface-2",
    muted: "bg-surface-inset",
    brand: "bg-brand-soft",
    purple: "bg-brand-soft", // legacy alias → teal
    blue: "bg-info-soft",
    green: "bg-success-soft",
    orange: "bg-warning-soft",
    red: "bg-danger-soft",
    indigo: "bg-brand-soft",
  },

  card: {
    default: "bg-surface rounded-lg border border-border shadow-sm p-5 sm:p-6",
    elevated: "bg-surface rounded-lg border border-transparent shadow-lg p-5 sm:p-6",
    hover: "hover:shadow-md hover:border-border-strong transition-all duration-200",
  },
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const typography = {
  heading: {
    h1: {
      hero: "text-5xl sm:text-6xl md:text-7xl font-black", // Landing hero (Thmanyah Display via font-display)
      page: "text-3xl font-bold text-foreground", // Dashboard/page titles
    },
    h2: {
      section: "text-4xl md:text-5xl font-bold text-foreground",
      page: "text-2xl md:text-3xl font-bold text-foreground",
    },
    h3: {
      card: "text-2xl font-bold",
      subsection: "text-lg font-bold",
    },
    h4: {
      default: "text-base font-semibold",
    },
  },

  body: {
    large: "text-lg",
    standard: "text-base",
    small: "text-sm",
    xs: "text-xs",
  },

  color: {
    primary: "text-foreground", // Headings, important text
    secondary: "text-muted-foreground", // Body text
    muted: "text-subtle", // Descriptions, metadata
    light: "text-disabled", // Icons, placeholders
    brand: "text-foreground", // Heading color (was navy)
    accent: "text-brand", // Teal accent
  },

  weight: {
    normal: "",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  },
} as const;

// ============================================================================
// INTERACTIVE TOKENS (Buttons, Inputs, Focus States)
// ============================================================================

export const interactive = {
  button: {
    size: {
      sm: "px-4 py-1.5 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      icon: "p-2",
    },
    radius: {
      default: "rounded-full", // Buttons are pills in this system
      pill: "rounded-full",
    },
  },

  buttonVariant: {
    primary: "bg-brand text-on-brand shadow-brand hover:bg-brand-hover active:translate-y-px",
    secondary: "border border-border-strong text-foreground hover:bg-surface-2 hover:border-brand hover:text-brand",
    ghost: "text-foreground hover:bg-brand-soft hover:text-brand",
    danger: "bg-danger text-white hover:opacity-90",
  },

  input: {
    base: "w-full rounded-md border border-border-strong bg-surface px-4 py-2 text-sm",
    focus: "focus:outline-none focus:border-brand focus:shadow-focus",
    disabled: "disabled:bg-surface-inset disabled:cursor-not-allowed",
    default:
      "w-full rounded-md border border-border-strong bg-surface px-4 py-2 text-sm focus:outline-none focus:border-brand focus:shadow-focus disabled:bg-surface-inset disabled:cursor-not-allowed",
  },

  select: {
    base: "w-full appearance-none rounded-md border border-border-strong px-4 py-2 text-sm bg-surface",
    focus: "focus:outline-none focus:border-brand focus:shadow-focus",
    default:
      "w-full appearance-none rounded-md border border-border-strong px-4 py-2 text-sm bg-surface focus:outline-none focus:border-brand focus:shadow-focus",
  },

  focusRing: "focus-visible:outline-none focus-visible:shadow-focus",
} as const;

// ============================================================================
// COLOR TOKENS (raw hex for JS/inline/chart usage)
// ============================================================================

export const colors = {
  brand: {
    primary: "#0f766e", // Teal
    primaryHover: "#0c5d57", // Teal hover
    dark: "#172023", // Ink — headings / dark text
    background: "#f6f8f8", // App background
  },

  status: {
    success: {
      bg: "bg-success-soft",
      text: "text-success",
      border: "border-success-border",
      hover: "hover:bg-teal-100",
    },
    warning: {
      bg: "bg-warning-soft",
      text: "text-warning",
      border: "border-warning-border",
      hover: "hover:bg-amber-100",
    },
    error: {
      bg: "bg-danger-soft",
      text: "text-danger",
      border: "border-danger-border",
      hover: "hover:bg-red-100",
    },
    info: {
      bg: "bg-info-soft",
      text: "text-info",
      border: "border-info-border",
      hover: "hover:bg-cyan-100",
    },
    brand: {
      bg: "bg-brand-soft",
      text: "text-brand",
      border: "border-brand-soft-2",
      hover: "hover:bg-brand-soft-2",
    },
  },

  gray: {
    900: "text-foreground",
    700: "text-muted-foreground",
    600: "text-muted-foreground",
    500: "text-subtle",
    400: "text-disabled",
    200: "border-border-strong",
    100: "border-border",
    50: "bg-surface-inset",
  },
} as const;

// ============================================================================
// BREAKPOINT USAGE RULES
// ============================================================================

export const breakpoints = {
  rules: {
    containerPadding: "px-4 sm:px-6 lg:px-8",
    sectionSpacing: "py-16 md:py-24",
    cardPadding: "p-5 sm:p-6",
    headingResponsive: "text-4xl md:text-5xl",
    gridResponsive: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  },
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function combineTokens(...tokens: string[]): string {
  return tokens.filter(Boolean).join(" ");
}

export function getCardClass(variant: "default" | "elevated" = "default", withHover = true): string {
  const base = variant === "elevated" ? surface.card.elevated : surface.card.default;
  return withHover ? `${base} ${surface.card.hover}` : base;
}

export function getButtonClass(
  variant: keyof typeof interactive.buttonVariant = "primary",
  size: keyof typeof interactive.button.size = "md",
  radius: keyof typeof interactive.button.radius = "default"
): string {
  return combineTokens(
    interactive.buttonVariant[variant],
    interactive.button.size[size],
    interactive.button.radius[radius],
    "font-bold transition-all"
  );
}

export function getInputClass(): string {
  return interactive.input.default;
}

export function getSelectClass(): string {
  return interactive.select.default;
}
