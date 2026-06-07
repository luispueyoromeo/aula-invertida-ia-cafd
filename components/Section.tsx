import type { ReactNode } from "react";
import { SectionIntro } from "@/components/VisualBlocks";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section className={`py-9 md:py-11 ${className}`}>
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />
      {children}
    </section>
  );
}
