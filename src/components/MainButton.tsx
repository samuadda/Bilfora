import React from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * @deprecated Use `Button` from `@/components/ui/Button` directly.
 * Kept as a thin compatibility wrapper so existing landing/marketing call
 * sites render the rebranded pill button. The legacy color props
 * (bgColor/hoverBgColor/textColor/shadowColor) are ignored, colour now
 * comes from the brand token system.
 */
interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  shadowColor?: string;
  className?: string;
}

const defaultRightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-all duration-200 group-hover:-translate-x-1"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const MainButton: React.FC<MainButtonProps> = ({
  text = "هات العلم",
  leftIcon,
  rightIcon = defaultRightIcon,
  bgColor,
  hoverBgColor,
  textColor,
  shadowColor,
  className,
  ...props
}) => {
  void (bgColor || hoverBgColor || textColor || shadowColor);
  return (
    <Button variant="primary" className={cn("group", className)} {...props}>
      {leftIcon}
      <span>{text}</span>
      {rightIcon}
    </Button>
  );
};

export default MainButton;
