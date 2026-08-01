import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] text-sm font-semibold tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--signal)] focus-visible:ring-offset-[var(--paper)]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--signal)] text-white shadow-[0_1px_0_0_rgba(0,0,0,0.05)] hover:bg-[var(--signal-deep)] active:translate-y-px",
        outline:
          "border border-[var(--line-strong)] bg-transparent text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] active:translate-y-px",
        ghost:
          "bg-transparent text-[var(--ink)] hover:bg-[var(--ink)]/[0.05]",
        link: "text-[var(--ink)] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-12 px-6 has-[>svg]:px-5",
        sm: "h-10 px-4 text-[13px] has-[>svg]:px-3.5",
        lg: "h-14 px-8 text-[15px] has-[>svg]:px-7",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
