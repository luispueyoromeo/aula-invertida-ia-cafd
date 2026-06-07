import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Aula Invertida", href: "/aula-invertida" },
  { name: "Inteligencia Artificial", href: "/inteligencia-artificial" },
  { name: "Asignaturas", href: "/asignaturas" },
  { name: "Cuestionario final", href: "/cuestionario-final" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-institutional-900">
          Aula Invertida e IA en CAFD
        </Link>
        <div className="flex flex-wrap gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-institutional-50 hover:text-institutional-800"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
