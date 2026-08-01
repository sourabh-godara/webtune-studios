import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide w-fit whitespace-nowrap shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-[var(--line-strong)] bg-[var(--panel)] text-[var(--ink)]",
        signal:
          "border-[var(--signal)]/30 bg-[var(--signal)]/[0.08] text-[var(--signal-deep)]",
        outline: "border-[var(--line-strong)] text-[var(--ink-soft)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
