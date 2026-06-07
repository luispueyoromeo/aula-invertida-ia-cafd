import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="rounded-[2rem] bg-gradient-to-br from-institutional-900 via-institutional-800 to-slate-800 px-6 py-12 text-white shadow-soft md:px-10 md:py-16">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">{eyebrow}</p> : null}
      <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">{description}</p>
      {children ? <div className="mt-8">{children}</div> : null}
    </header>
  );
}
