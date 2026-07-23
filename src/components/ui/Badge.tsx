import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant =
  | "neutral"
  | "brand"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "solid";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  /** @default "neutral" */
  variant?: BadgeVariant;
  /** Show a leading status dot. */
  dot?: boolean;
}

const variants: Record<BadgeVariant, string> = {
  neutral: "bg-surface-inset text-muted-foreground border-border",
  brand: "bg-brand-soft text-brand border-brand-soft-2",
  success: "bg-success-soft text-success border-success-border",
  warning: "bg-warning-soft text-warning border-warning-border",
  danger: "bg-danger-soft text-danger border-danger-border",
  info: "bg-info-soft text-info border-info-border",
  solid: "bg-brand text-on-brand border-transparent",
};

/**
 * Badge — pill status chip (soft bg + text + border trio). Used for invoice
 * states and other inline status labels.
 */
export function Badge({ children, variant = "neutral", dot = false, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium leading-none whitespace-nowrap",
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}

/** Maps Bilfora invoice status (Arabic) to a Badge variant. */
export function invoiceStatusVariant(status?: string): BadgeVariant {
  switch ((status || "").trim()) {
    case "مدفوعة":
      return "success";
    case "مُرسلة":
    case "مرسلة":
      return "info";
    case "متأخرة":
      return "danger";
    case "ملغاة":
      return "neutral";
    case "مسودة":
    default:
      return "neutral";
  }
}

export default Badge;
