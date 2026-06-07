type PhaseCardProps = {
  step: string;
  title: string;
  description: string;
};

export function PhaseCard({ step, title, description }: PhaseCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-institutional-100 text-sm font-bold text-institutional-800">
        {step}
      </span>
      <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </div>
  );
}
