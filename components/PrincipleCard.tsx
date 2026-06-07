type PrincipleCardProps = {
  title: string;
  description: string;
};

export function PrincipleCard({ title, description }: PrincipleCardProps) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
      <h3 className="text-lg font-bold text-institutional-900">{title}</h3>
      <p className="mt-2 leading-7 text-slate-700">{description}</p>
    </div>
  );
}
