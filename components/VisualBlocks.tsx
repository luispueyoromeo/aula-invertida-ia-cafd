import type { ReactNode } from "react";

export type Tone = "blue" | "slate" | "green" | "amber" | "red";

const toneStyles: Record<Tone, { card: string; icon: string; badge: string }> = {
  blue: {
    card: "border-institutional-100 bg-gradient-to-br from-white to-blue-50",
    icon: "bg-institutional-100 text-institutional-900",
    badge: "bg-institutional-800 text-white",
  },
  slate: {
    card: "border-slate-200 bg-gradient-to-br from-white to-slate-50",
    icon: "bg-slate-100 text-slate-800",
    badge: "bg-slate-800 text-white",
  },
  green: {
    card: "border-emerald-100 bg-gradient-to-br from-white to-emerald-50",
    icon: "bg-emerald-100 text-emerald-800",
    badge: "bg-emerald-700 text-white",
  },
  amber: {
    card: "border-amber-100 bg-gradient-to-br from-white to-amber-50",
    icon: "bg-amber-100 text-amber-800",
    badge: "bg-amber-600 text-white",
  },
  red: {
    card: "border-rose-100 bg-gradient-to-br from-white to-rose-50",
    icon: "bg-rose-100 text-rose-800",
    badge: "bg-rose-700 text-white",
  },
};

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="mb-7 max-w-3xl">
      {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-institutional-700">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-slate-600 md:text-lg">{description}</p> : null}
    </div>
  );
}

type SummaryCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  icon?: string;
  tone?: Tone;
  children?: ReactNode;
};

export function SummaryCard({ eyebrow, title, description, icon = "•", tone = "blue", children }: SummaryCardProps) {
  const styles = toneStyles[tone];

  return (
    <article className={`h-full rounded-2xl border p-6 shadow-soft ${styles.card}`}>
      <div className="flex items-start gap-4">
        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl font-black ${styles.icon}`} aria-hidden="true">
          {icon}
        </span>
        <div>
          {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{eyebrow}</p> : null}
          <h3 className="text-xl font-bold text-slate-950">{title}</h3>
          <p className="mt-2 leading-7 text-slate-600">{description}</p>
        </div>
      </div>
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}

type IconCardProps = {
  title: string;
  description: string;
  icon?: string;
  tone?: Tone;
};

export function IconCard({ title, description, icon = "•", tone = "blue" }: IconCardProps) {
  const styles = toneStyles[tone];

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-institutional-200">
      <span className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-lg font-black ${styles.icon}`} aria-hidden="true">
        {icon}
      </span>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

type Step = {
  title: string;
  description: string;
  icon?: string;
};

type StepFlowProps = {
  steps: Step[];
  compact?: boolean;
};

export function StepFlow({ steps, compact = false }: StepFlowProps) {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {steps.map((step, index) => (
        <article key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          {index < steps.length - 1 ? (
            <span className="absolute -right-3 top-8 hidden h-6 w-6 items-center justify-center rounded-full border border-institutional-100 bg-white text-institutional-700 md:flex" aria-hidden="true">
              →
            </span>
          ) : null}
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-institutional-800 text-sm font-black text-white">
              {step.icon ?? index + 1}
            </span>
            <h3 className="font-bold text-slate-900">{step.title}</h3>
          </div>
          <p className={`${compact ? "mt-3 text-sm" : "mt-4"} leading-6 text-slate-600`}>{step.description}</p>
        </article>
      ))}
    </div>
  );
}

export function StepGrid({ steps }: { steps: Step[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
      {steps.map((step, index) => (
        <article key={step.title} className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:border-institutional-200 md:p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-institutional-800 text-base font-black text-white" aria-hidden="true">
            {step.icon ?? index + 1}
          </span>
          <h3 className="mt-5 text-lg font-bold text-slate-950">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
        </article>
      ))}
    </div>
  );
}

type TimelineStepsProps = {
  steps: Step[];
};

export function TimelineSteps({ steps }: TimelineStepsProps) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft md:p-6">
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.title} className="relative rounded-2xl bg-slate-50 p-5">
            {index < steps.length - 1 ? <span className="absolute -right-3 top-1/2 hidden text-2xl font-bold text-institutional-300 md:block">→</span> : null}
            <span className="text-sm font-black uppercase tracking-[0.18em] text-institutional-700">Fase {index + 1}</span>
            <h3 className="mt-2 text-xl font-bold text-slate-900">{step.title}</h3>
            <p className="mt-3 leading-6 text-slate-600">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

type ComparisonBlockProps = {
  leftTitle: string;
  rightTitle: string;
  leftItems: string[];
  rightItems: string[];
};

export function ComparisonBlock({ leftTitle, rightTitle, leftItems, rightItems }: ComparisonBlockProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <article className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-6 shadow-soft">
        <h3 className="text-2xl font-bold text-emerald-900">{leftTitle}</h3>
        <ul className="mt-5 space-y-3">
          {leftItems.map((item) => (
            <li key={item} className="flex gap-3 rounded-xl bg-white p-3 text-sm font-medium leading-6 text-slate-700">
              <span className="font-black text-emerald-700">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className="rounded-[2rem] border border-rose-100 bg-rose-50 p-6 shadow-soft">
        <h3 className="text-2xl font-bold text-rose-900">{rightTitle}</h3>
        <ul className="mt-5 space-y-3">
          {rightItems.map((item) => (
            <li key={item} className="flex gap-3 rounded-xl bg-white p-3 text-sm font-medium leading-6 text-slate-700">
              <span className="font-black text-rose-700">×</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

type HighlightBoxProps = {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  tone?: Tone;
};

export function HighlightBox({ eyebrow, title, children, tone = "blue" }: HighlightBoxProps) {
  const styles = toneStyles[tone];

  return (
    <aside className={`rounded-[2rem] border p-7 shadow-soft ${styles.card}`}>
      {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.22em] text-institutional-800">{eyebrow}</p> : null}
      {title ? <h3 className="mt-2 text-2xl font-bold text-slate-950">{title}</h3> : null}
      <div className="mt-3 text-lg font-semibold leading-8 text-slate-700">{children}</div>
    </aside>
  );
}

export function InfoGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}
