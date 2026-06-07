export function InstitutionalLogoPlaceholder() {
  return (
    <div className="inline-flex items-center gap-4 rounded-2xl border border-white/30 bg-white/95 px-4 py-3 text-left shadow-soft ring-1 ring-slate-200/70">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-institutional-900 text-lg font-bold text-white">
        MA
      </div>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-institutional-900">
          Grupo de Innovación Docente MARE-A
        </p>
        <p className="text-sm font-medium text-slate-600">Universidad Zaragoza</p>
      </div>
    </div>
  );
}
