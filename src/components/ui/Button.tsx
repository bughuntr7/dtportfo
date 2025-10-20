import React from "react";

export type ButtonVariant = "default" | "outline" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
	default:
		"bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
	outline:
		"border border-border text-foreground hover:bg-accent/10",
	secondary:
		"bg-secondary text-secondary-foreground hover:bg-secondary/90",
	ghost:
		"text-foreground hover:bg-accent/10",
};

const sizeClasses: Record<ButtonSize, string> = {
	sm: "h-9 px-3 text-sm",
	md: "h-10 px-4 text-sm",
	lg: "h-11 px-5 text-base",
	icon: "h-10 w-10 p-0",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className = "", variant = "default", size = "md", type = "button", ...props }, ref) => {
		const base =
			"inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-50 select-none";

		const classes = [
			base,
			variantClasses[variant],
			sizeClasses[size],
			className,
		].join(" ");

		return <button ref={ref} type={type} className={classes} {...props} />;
	}
);

Button.displayName = "Button";

export default Button;
