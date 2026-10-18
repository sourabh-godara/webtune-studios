import { cn } from "@/lib/utils";

/**
 * Responsive column count constant.
 * Desktop (lg+): 4 columns -> 5 vertical lines (outer edges + 3 inner hairlines)
 * Tablet (md):   2 columns -> 3 vertical lines (outer edges + center hairline)
 * Mobile (<md):  1 column  -> 2 vertical lines (outer container edges)
 */
export const GRID_COLUMNS = {
  mobile: 1,
  tablet: 2,
  desktop: 8,
} as const;

interface GridLinesProps {
  className?: string;
  animate?: boolean;
}

export function GridLines({ className, animate = true }: GridLinesProps) {
  const lines = [
    { id: "col-line-0", visibility: "block" },
    { id: "col-line-1", visibility: "hidden lg:block" },
    { id: "col-line-2", visibility: "hidden md:block" },
    { id: "col-line-3", visibility: "hidden lg:block" },
    { id: "col-line-4", visibility: "hidden lg:block" },
    { id: "col-line-5", visibility: "hidden lg:block" },
    { id: "col-line-6", visibility: "block" },
    { id: "col-line-7", visibility: "block" },
    { id: "col-line-8", visibility: "block" }
  ];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden select-none",
        className
      )}
    >
      <div className="mx-auto h-full w-full max-w-[var(--container-max)] px-6 lg:px-8">
        <div className="relative flex h-full w-full justify-between">
          {lines.map((line, index) => (
            <div
              key={line.id}
              className={cn(
                "h-full w-px shrink-0 bg-[var(--grid-line-color,var(--line))]",
                line.visibility,
                animate && "animate-grid-line"
              )}
              style={
                animate
                  ? {
                    animationDelay: `${index * 80}ms`,
                  }
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
