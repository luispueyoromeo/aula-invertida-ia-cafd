import Link from "next/link";

const overview = [
  ["◎", "Qué se trabaja", "Planificar, aplicar, evaluar y controlar el entrenamiento.", "bg-blue-50 text-blue-800"],
  ["♟", "Poblaciones", "Población general, niños y adolescentes.", "bg-amber-50 text-amber-800"],
  ["↗", "Cómo se aprende", "Preparación previa + resolución práctica de casos + propuesta justificada.", "bg-emerald-50 text-emerald-800"],
  ["✦", "Papel de la IA", "Apoyo para analizar y comparar, nunca para sustituir la decisión profesional.", "bg-violet-50 text-violet-800"],
];

const phases = [
  { icon: "◫", title: "Antes de la sesión", subtitle: "Preparar", items: ["Vídeos", "Lecturas científicas", "Protocolos", "Casos breves"], text: "Preparar los contenidos necesarios para abordar posteriormente situaciones prácticas.", style: "bg-blue-50 text-blue-950", iconStyle: "bg-blue-700" },
  { icon: "⚙", title: "Durante la sesión", subtitle: "Aplicar y decidir", items: ["Aplicación práctica", "Resolución de casos", "Análisis de datos", "Trabajo en pequeños grupos"], text: "Aplicar los contenidos y tomar decisiones sobre situaciones concretas.", style: "bg-emerald-50 text-emerald-950", iconStyle: "bg-emerald-700" },
  { icon: "✓", title: "Después de la sesión", subtitle: "Fundamentar", items: ["Informes", "Planificaciones", "Propuestas de entrenamiento", "Justificación de decisiones"], text: "Convertir el trabajo realizado en una propuesta fundamentada.", style: "bg-amber-50 text-amber-950", iconStyle: "bg-amber-600" },
];

const sequence = [
  ["01", "Conocer a la persona", "Contexto, edad y nivel"],
  ["02", "Seleccionar objetivos", "Necesidades y prioridades"],
  ["03", "Evaluar", "Datos y punto de partida"],
  ["04", "Planificar", "Propuesta adaptada"],
  ["05", "Justificar las decisiones", "Criterio y evidencia"],
];

const aiUses = [
  ["⌁", "Simular y analizar", "Apoyo para trabajar con datos o escenarios."],
  ["◇", "Plantear casos", "Puede ayudar a explorar situaciones y alternativas."],
  ["⇄", "Comparar opciones", "Permite contrastar diferentes propuestas."],
  ["⌕", "Verificar", "Los resultados deben contrastarse con literatura científica."],
  ["◉", "Uso responsable", "El uso debe declararse y respetar la protección de datos."],
];

const expectations = [
  ["◫", "Preparación previa"], ["✋", "Participación activa"], ["◎", "Rigor técnico"],
  ["⌕", "Consulta de literatura científica"], ["✓", "Justificación de las decisiones"],
];

const assessment = [
  ["◫", "Trabajo diario", "Evidencias individuales derivadas de los casos prácticos."],
  ["✓", "Justificación", "Capacidad para fundamentar técnicamente las decisiones."],
  ["☑", "Cuestionario final", "Participación en la evaluación común del proyecto Aula Invertida e IA en CAFD."],
];

function Title({ number, children, accent = false }: { number: string; children: string; accent?: boolean }) {
  return <div className="mb-6 flex items-center gap-3"><span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black text-white ${accent ? "bg-emerald-600" : "bg-institutional-800"}`}>{number}</span><h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">{children}</h2></div>;
}

export function TrainingSubjectPage() {
  return <div className="space-y-2">
    <header className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-institutional-900 to-blue-700 px-6 py-9 text-white shadow-soft md:px-10 md:py-12">
      <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full border-[34px] border-white/5" aria-hidden="true" />
      <div className="absolute -bottom-20 right-32 h-44 w-44 rounded-full bg-emerald-400/10 blur-2xl" aria-hidden="true" />
      <div className="relative max-w-5xl">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider ring-1 ring-white/20">4.º curso</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Entrenamiento en Distintas Etapas Evolutivas</h1>
        <p className="mt-4 max-w-3xl text-lg font-medium leading-7 text-blue-100 md:text-xl">Planificación y toma de decisiones en el entrenamiento adaptadas a cada etapa y persona.</p>
        <div className="mt-7 border-t border-white/15 pt-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Profesor responsable</p><p className="mt-1 font-semibold text-white/95">Prof. Dr. Isaac López-Laval</p></div>
      </div>
    </header>

    <section className="py-9"><Title number="00">De un vistazo</Title><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{overview.map(([icon, title, text, tone]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"><span className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl font-black ${tone}`} aria-hidden="true">{icon}</span><h3 className="mt-4 text-sm font-black uppercase tracking-wide text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></section>

    <section className="py-7"><Title number="01">La asignatura</Title><div className="grid gap-4 rounded-3xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-6 shadow-soft md:grid-cols-3 md:p-8">{[["Planificar y aplicar", "Diseñar y llevar el entrenamiento a la práctica."], ["Evaluar y controlar", "Observar el proceso y ajustar las decisiones."], ["Adaptar", "A la edad, los objetivos y el nivel de rendimiento."]].map(([title, text], index) => <article key={title} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-institutional-800 text-sm font-black text-white">{index + 1}</span><div><h3 className="font-extrabold text-slate-950">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>{index === 2 && <p className="mt-2 text-xs font-bold uppercase tracking-wide text-institutional-700">Población general · niños · adolescentes</p>}</div></article>)}</div></section>

    <section className="py-7"><Title number="02">Aula invertida</Title><div className="grid gap-4 lg:grid-cols-3">{phases.map((phase, index) => <article key={phase.title} className={`relative rounded-3xl p-6 ${phase.style}`}><div className="flex items-center justify-between"><span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-black text-white ${phase.iconStyle}`} aria-hidden="true">{phase.icon}</span><span className="text-xs font-black uppercase tracking-[0.16em] opacity-60">{phase.subtitle}</span></div><h3 className="mt-5 text-xl font-black">{phase.title}</h3><ul className="mt-4 flex flex-wrap gap-2">{phase.items.map(item => <li key={item} className="rounded-full bg-white/85 px-3 py-1.5 text-xs font-bold shadow-sm">{item}</li>)}</ul><p className="mt-5 border-t border-current/10 pt-4 text-sm leading-6 opacity-80">{phase.text}</p>{index < 2 && <span className="absolute -right-3 top-1/2 z-10 hidden h-7 w-7 items-center justify-center rounded-full bg-white text-slate-500 shadow lg:flex" aria-hidden="true">→</span>}</article>)}</div></section>

    <section className="py-9"><Title number="03" accent>Secuencia de trabajo</Title><div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-institutional-900 to-blue-800 p-6 text-white shadow-soft md:p-8"><div className="mb-7 max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">La ruta común para resolver cada caso</p><p className="mt-2 text-sm leading-6 text-blue-100">Cinco decisiones conectadas: de comprender a la persona a defender una propuesta profesional.</p></div><div className="grid gap-3 md:grid-cols-5">{sequence.map(([number, title, text], index) => <article key={title} className="relative rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur"><span className="text-xs font-black text-emerald-300">{number}</span><h3 className="mt-2 text-base font-black leading-5">{title}</h3><p className="mt-2 text-xs leading-5 text-blue-100">{text}</p>{index < 4 && <span className="mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-slate-950 md:absolute md:-right-4 md:top-1/2 md:z-10 md:mt-0 md:-translate-y-1/2" aria-hidden="true">→</span>}</article>)}</div></div></section>

    <section className="py-7"><Title number="04">Uso responsable de IA</Title><p className="mb-6 max-w-3xl text-base leading-7 text-slate-600">La IA puede apoyar el análisis y la resolución de casos. La persona mantiene siempre el criterio profesional.</p><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{aiUses.map(([icon, title, text]) => <article key={title} className="rounded-2xl border border-violet-100 bg-gradient-to-br from-white to-violet-50 p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-lg font-black text-violet-800" aria-hidden="true">{icon}</span><h3 className="mt-4 font-extrabold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-5 text-slate-600">{text}</p></article>)}</div><aside className="mt-5 flex items-center gap-4 rounded-3xl border-2 border-violet-300 bg-violet-950 p-6 text-white shadow-soft md:p-7"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl" aria-hidden="true">!</span><p className="text-lg font-black uppercase tracking-wide md:text-2xl">La IA no sustituye el razonamiento ni la decisión profesional.</p></aside></section>

    <section className="py-7"><Title number="05">Qué se espera del alumnado</Title><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{expectations.map(([icon, text]) => <div key={text} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 font-black text-institutional-800" aria-hidden="true">{icon}</span><p className="text-sm font-bold text-slate-800">{text}</p></div>)}</div></section>

    <section className="py-7"><Title number="06">Producto de aprendizaje</Title><article className="rounded-[2rem] bg-gradient-to-r from-emerald-800 to-institutional-800 p-6 text-white shadow-soft md:p-8"><div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center"><span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl" aria-hidden="true">◫</span><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">Evidencia individual</p><h3 className="mt-2 text-2xl font-black md:text-3xl">Trabajo individual diario</h3><p className="mt-3 max-w-3xl text-sm leading-6 text-emerald-50">El alumnado elaborará un trabajo individual que dé respuesta a las demandas de los casos prácticos trabajados en clase.</p><div className="mt-5 flex flex-wrap gap-2">{["análisis", "evaluación", "planificación", "justificación"].map(item => <span key={item} className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold ring-1 ring-white/20">{item}</span>)}</div></div></div></article></section>

    <section className="py-7"><Title number="07">Organización metodológica</Title><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-8"><div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-institutional-700">Formato de trabajo</p><h3 className="mt-2 text-2xl font-black text-slate-950">Sesiones prácticas <span className="text-emerald-600">+</span> seminarios de 90 minutos</h3><p className="mt-3 text-sm leading-6 text-slate-600">La teoría se integra directamente en el trabajo práctico y en la resolución de casos.</p></div><div className="flex max-w-2xl flex-wrap items-center gap-2">{["Conocer", "Objetivos", "Evaluar", "Planificar", "Justificar"].map((item, index) => <span key={item} className="flex items-center gap-2"><span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-800">{item}</span>{index < 4 && <span className="font-black text-emerald-600">→</span>}</span>)}</div></div></div></section>

    <section className="py-7"><Title number="08">Evaluación y seguimiento</Title><div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto]">{assessment.map(([icon, title, text]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5"><span className="text-2xl" aria-hidden="true">{icon}</span><h3 className="mt-3 font-extrabold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-5 text-slate-600">{text}</p></article>)}<Link href="/cuestionario-final" className="flex min-h-20 items-center justify-center rounded-2xl border-2 border-emerald-700 px-6 py-4 text-center text-sm font-bold text-emerald-800 transition hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-200">Ir al cuestionario final <span className="ml-2" aria-hidden="true">→</span></Link></div></section>
  </div>;
}
