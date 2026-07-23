import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "accent";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  /** @default "primary" */
  variant?: ButtonVariant;
  /** @default "md" */
  size?: ButtonSize;
  /** Full-width block button */
  block?: boolean;
  /**
   * Kept for backwards compatibility. Buttons are pill-shaped by default in
   * this design system; pass `pill={false}` for the softer `rounded-md` shape.
   * @default true
   */
  pill?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-bold whitespace-nowrap border border-transparent " +
  "transition-[transform,background-color,box-shadow,border-color,filter] duration-150 ease-out select-none " +
  "focus-visible:outline-none focus-visible:shadow-focus active:translate-y-px active:scale-[.99] " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-on-brand shadow-brand hover:bg-brand-hover",
  accent: "bg-brand-accent text-on-accent hover:brightness-95",
  secondary: "bg-surface text-foreground border-border-strong hover:bg-surface-2 hover:border-brand hover:text-brand",
  ghost: "bg-transparent text-foreground hover:bg-brand-soft hover:text-brand",
  danger: "bg-danger text-white hover:brightness-95",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-[42px] px-5 text-base",
  lg: "h-[52px] px-8 text-lg",
  icon: "h-[42px] w-[42px] p-0",
};

/**
 * Button — pill-shaped, brand-teal fill with a soft glow, tactile press.
 *
 * ```tsx
 * <Button variant="primary">أنشئ فاتورة</Button>
 * <Button variant="secondary" size="sm">إلغاء</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", size = "md", block = false, pill = true, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          base,
          variants[variant],
          sizes[size],
          pill ? "rounded-full" : "rounded-md",
          block && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
