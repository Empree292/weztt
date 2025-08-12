import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300",
        secondary:
          "bg-gradient-to-r from-secondary to-accent text-secondary-foreground hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5 transition-all duration-300",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline",
        tech: "bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
        glow: "bg-primary text-primary-foreground hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 animate-glow-pulse",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-12 rounded-xl px-8 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
