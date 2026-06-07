export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm text-slate-600 md:grid-cols-[2fr_1fr] md:px-6">
        <div>
          <p className="font-bold text-slate-900">Aula Invertida e IA en CAFD</p>
          <p className="mt-2 max-w-2xl leading-6">
            Proyecto de Innovación Docente · Universidad de Zaragoza. Portal institucional para coordinar experiencias docentes, metodologías activas y uso responsable de inteligencia artificial.
          </p>
        </div>
        <div className="md:text-right">
          <p className="font-semibold text-slate-900">Grupo de Innovación Docente MARE-A</p>
          <p className="mt-2">Universidad Zaragoza</p>
        </div>
      </div>
    </footer>
  );
}
