import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: "white" | "muted" | "dark";
  id?: string;
}

export function Section({ children, className, bg = "white", id }: SectionProps) {
  const bgStyles = {
    white: "bg-white",
    muted: "bg-muted/50",
    dark: "bg-primary text-white",
  };

  return (
    <section id={id} className={cn("py-16 md:py-24", bgStyles[bg], className)}>
      <div className="container-width h-full w-full">
        {children}
      </div>
    </section>
  );
}
