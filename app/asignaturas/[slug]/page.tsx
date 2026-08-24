import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { HighlightBox, IconCard, InfoGrid, SummaryCard } from "@/components/VisualBlocks";
import { getSubjectBySlug, subjects } from "@/lib/subjects";

type SubjectPageProps = { params: { slug: string } };

const pendingText = "Contenido en elaboración por el profesorado responsable. Este módulo incorporará la experiencia concreta de aula invertida, el posible uso de IA, la evidencia de aprendizaje y el cuestionario asociado.";

const moduleSections = [
  ["Qué se pretende trabajar", "Competencias, contenidos o resultados de aprendizaje vinculados a la experiencia."],
  ["Aplicación del aula invertida", "Trabajo previo, dinámica presencial y actividades de aplicación previstas."],
  ["Integración de IA", "Uso puntual, declarado y revisado de herramientas de inteligencia artificial."],
  ["Producto o evidencia", "Material, propuesta, resolución o resultado que elaborará el alumnado."],
  ["Evaluación / cuestionario", "Criterios de valoración y participación en el cuestionario final común."],
];

const overview = [
  { icon: "🏐", title: "Qué se trabaja", text: "Voleibol, baloncesto, balonmano y fútbol", tone: "bg-blue-50 text-blue-800" },
  { icon: "↗", title: "Cómo se aprende", text: "Preparación previa + práctica en clase + reflexión final", tone: "bg-emerald-50 text-emerald-800" },
  { icon: "✦", title: "Papel de la IA", text: "Apoyo responsable, ético y declarado", tone: "bg-violet-50 text-violet-800" },
  { icon: "✓", title: "Qué generará el alumnado", text: "Evidencias variables según el bloque", tone: "bg-amber-50 text-amber-800" },
];

const sports = [
  { icon: "🏐", title: "Voleibol", text: "Observación entre iguales", color: "border-blue-200 bg-blue-50" },
  { icon: "🏀", title: "Baloncesto", text: "Enseñanza en grupos reducidos", color: "border-orange-200 bg-orange-50" },
  { icon: "🤾", title: "Balonmano", text: "Enseñanza al gran grupo", color: "border-emerald-200 bg-emerald-50" },
  { icon: "⚽", title: "Fútbol", text: "Enseñanza individualizada", color: "border-violet-200 bg-violet-50" },
];

const phases = [
  { number: "01", icon: "◷", title: "Antes", subtitle: "Preparar", items: ["Revisar materiales", "Analizar contenidos", "Preparar ideas"], color: "bg-blue-50 text-blue-900", badge: "bg-blue-700" },
  { number: "02", icon: "▶", title: "Durante", subtitle: "Poner en práctica", items: ["Práctica", "Análisis", "Diseño de tareas", "Participación activa"], color: "bg-emerald-50 text-emerald-900", badge: "bg-emerald-700" },
  { number: "03", icon: "✓", title: "Después", subtitle: "Cerrar el proceso", items: ["Revisar", "Mejorar", "Reflexionar", "Entregar evidencia"], color: "bg-amber-50 text-amber-900", badge: "bg-amber-600" },
];

const studentExpectations = [
  ["📚", "Preparar materiales previos"], ["🙋", "Participar activamente"],
  ["🎯", "Aplicar contenidos en la práctica"], ["👁", "Observar, analizar o diseñar tareas"],
  ["📝", "Elaborar una evidencia"], ["☑", "Responder el cuestionario final"],
];

const aiPrinciples = [
  ["✦", "Apoyo", "Ayuda a organizar, revisar o generar ideas"],
  ["◉", "Declaración", "Si se usa, debe indicarse"],
  ["⌕", "Revisión crítica", "La información debe comprobarse y adaptarse"],
  ["♢", "Honestidad académica", "No sustituye el trabajo personal"],
];

const evidence = ["ficha de tarea", "propuesta práctica", "análisis de juego", "observación entre iguales", "material docente", "reflexión", "coevaluación"];

function VisualTitle({ number, title }: { number: string; title: string }) {
  return <div className="mb-6 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-institutional-800 text-xs font-black text-white">{number}</span><h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">{title}</h2></div>;
}

function CollectiveSportsPage() {
  return <div className="space-y-2">
    <header className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-institutional-900 via-blue-800 to-slate-800 px-6 py-9 text-white shadow-soft md:px-10 md:py-11">
      <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full border-[32px] border-white/5" aria-hidden="true" />
      <div className="relative">
        <div className="flex flex-wrap gap-2"><span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider ring-1 ring-white/20">2.º curso</span><span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-100 ring-1 ring-emerald-300/30">Asignatura piloto</span></div>
        <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">Deportes Colectivos</h1>
        <p className="mt-3 text-lg font-medium text-blue-100">Asignatura piloto del proyecto Aula Invertida e IA en CAFD</p>
        <div className="mt-7 max-w-4xl border-t border-white/15 pt-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Profesorado</p><p className="mt-1 text-sm leading-6 text-white/90 md:text-base">Javier Álvarez Medina · Víctor Murillo Lorente · Luis Pueyo Romeo</p></div>
      </div>
    </header>

    <Section title="De un vistazo" className="pb-6"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{overview.map((item) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"><span className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl font-black ${item.tone}`} aria-hidden="true">{item.icon}</span><h3 className="mt-4 font-bold text-slate-950">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p></article>)}</div></Section>

    <section className="py-7"><VisualTitle number="01" title="Bloques de contenido" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{sports.map((sport) => <article key={sport.title} className={`rounded-2xl border p-5 ${sport.color}`}><span className="text-3xl" aria-hidden="true">{sport.icon}</span><h3 className="mt-3 text-lg font-extrabold text-slate-950">{sport.title}</h3><p className="mt-1 text-sm font-medium text-slate-600">{sport.text}</p></article>)}</div></section>

    <section className="py-7"><VisualTitle number="02" title="Cómo funciona el aula invertida" /><div className="grid gap-4 lg:grid-cols-3">{phases.map((phase, index) => <article key={phase.title} className={`relative rounded-3xl p-6 ${phase.color}`}><div className="flex items-start justify-between"><span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-black text-white ${phase.badge}`} aria-hidden="true">{phase.icon}</span><span className="text-4xl font-black opacity-10">{phase.number}</span></div><h3 className="mt-5 text-2xl font-black">{phase.title}</h3><p className="text-sm font-bold opacity-70">{phase.subtitle}</p><ul className="mt-4 flex flex-wrap gap-2">{phase.items.map(item => <li key={item} className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold shadow-sm">{item}</li>)}</ul>{index < 2 ? <span className="absolute -right-3 top-1/2 z-10 hidden h-7 w-7 items-center justify-center rounded-full bg-white text-slate-400 shadow lg:flex" aria-hidden="true">→</span> : null}</article>)}</div></section>

    <section className="py-7"><VisualTitle number="03" title="Qué se espera del alumnado" /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{studentExpectations.map(([icon, text]) => <div key={text} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg" aria-hidden="true">{icon}</span><p className="text-sm font-bold text-slate-800">{text}</p></div>)}</div></section>

    <section className="py-7"><VisualTitle number="04" title="IA en esta asignatura" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{aiPrinciples.map(([icon, title, text]) => <article key={title} className="rounded-2xl border border-violet-100 bg-gradient-to-br from-white to-violet-50 p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-lg font-black text-violet-800" aria-hidden="true">{icon}</span><h3 className="mt-4 font-extrabold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-5 text-slate-600">{text}</p></article>)}</div></section>

    <section className="py-7"><VisualTitle number="05" title="Producto o evidencia" /><div className="overflow-hidden rounded-3xl border border-institutional-100 bg-gradient-to-r from-institutional-900 to-blue-700 p-6 text-white shadow-soft md:p-8"><div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center"><span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl" aria-hidden="true">📎</span><div><p className="text-xl font-extrabold md:text-2xl">La evidencia final será variable según el bloque trabajado</p><div className="mt-5 flex flex-wrap gap-2">{evidence.map(item => <span key={item} className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold ring-1 ring-white/20">{item}</span>)}</div></div></div></div></section>

    <section className="py-7"><VisualTitle number="06" title="Evaluación y seguimiento" /><div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto]">{[["🙋", "Participación"], ["📄", "Evidencia generada"], ["☑", "Cuestionario final"]].map(([icon, text]) => <div key={text} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 font-bold text-slate-800"><span className="text-2xl" aria-hidden="true">{icon}</span>{text}</div>)}<Link href="/cuestionario-final" className="flex items-center justify-center rounded-2xl bg-emerald-700 px-6 py-4 text-center text-sm font-bold text-white shadow-soft transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200">Ir al cuestionario final <span className="ml-2" aria-hidden="true">→</span></Link></div></section>

    <aside className="mt-5 flex items-center gap-3 rounded-2xl border border-dashed border-institutional-300 bg-institutional-50 p-5"><span className="h-2.5 w-2.5 rounded-full bg-amber-500" aria-hidden="true" /><p className="text-sm font-bold text-institutional-900">Módulo piloto en desarrollo</p></aside>
  </div>;
}

export function generateStaticParams() { return subjects.map((subject) => ({ slug: subject.slug })); }
export function generateMetadata({ params }: SubjectPageProps) { const subject = getSubjectBySlug(params.slug); return { title: subject ? `${subject.name} · Aula Invertida e IA en CAFD` : "Asignatura" }; }

export default function SubjectPage({ params }: SubjectPageProps) {
  const subject = getSubjectBySlug(params.slug);
  if (!subject) notFound();
  if (subject.slug === "deportes-colectivos") return <CollectiveSportsPage />;
  return <div><PageHeader eyebrow={subject.course} title={subject.name} description="Módulo individual preparado para incorporar la experiencia docente específica cuando el profesorado responsable complete el contenido." /><Section title="Información de la asignatura" description="Ficha breve del módulo y estado actual del contenido."><div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]"><SummaryCard icon="D" title="Datos básicos" description="Asignatura participante dentro del marco común de Aula Invertida e IA en CAFD." tone="slate"><div className="space-y-3 text-sm font-semibold text-slate-700"><p className="rounded-xl bg-white p-3 ring-1 ring-slate-200"><span className="block text-xs uppercase tracking-[0.16em] text-slate-500">Curso</span>{subject.course}</p><p className="rounded-xl bg-white p-3 ring-1 ring-slate-200"><span className="block text-xs uppercase tracking-[0.16em] text-slate-500">Profesorado</span>{subject.professor}</p></div></SummaryCard><HighlightBox eyebrow="Estado actual" title="Contenido en elaboración">{pendingText}</HighlightBox></div></Section><Section title="Estructura visual del módulo" description="Cinco bloques preparados para completar la experiencia concreta de la asignatura."><InfoGrid>{moduleSections.map((section, index) => <IconCard key={section[0]} icon={`${index + 1}`} title={section[0]} description={section[1]} tone={index % 2 === 0 ? "blue" : "slate"} />)}</InfoGrid></Section><Card className="border-dashed border-institutional-200 bg-institutional-50"><h2 className="text-xl font-bold text-institutional-900">Mensaje provisional</h2><p className="mt-3 leading-7 text-slate-700">El contenido específico será añadido por el profesorado responsable manteniendo esta estructura común y la coherencia del proyecto.</p></Card></div>;
}
