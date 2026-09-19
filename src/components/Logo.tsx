import { cn } from "@/lib/utils";

interface LogoProps {
  outerClassName?: string;
  innerClassName?: string;
}

/** Concentric circles mark — two nested outlined rings. */
export function LogoMark({ outerClassName, innerClassName }: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border-2 border-foreground/60",
        outerClassName ?? "w-7 h-7",
      )}
    >
      <div
        className={cn(
          "rounded-full border border-foreground/60",
          innerClassName ?? "w-3 h-3",
        )}
      />
    </div>
  );
}
