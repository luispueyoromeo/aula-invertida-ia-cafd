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

const sports = [
  ["Voleibol", "Observación entre iguales y metodología observacional.", "V"],
  ["Baloncesto", "Enseñanza en grupos reducidos.", "B"],
  ["Balonmano", "Enseñanza al gran grupo.", "BM"],
  ["Fútbol", "Enseñanza individualizada.", "F"],
];

const studentExpectations = [
  "Preparar previamente los contenidos o materiales indicados.",
  "Participar de forma activa en las sesiones prácticas.",
  "Aplicar los contenidos a situaciones reales o simuladas de enseñanza deportiva.",
  "Diseñar, adaptar, observar o analizar tareas vinculadas a los deportes colectivos.",
  "Reflexionar sobre la utilidad de los contenidos trabajados.",
  "Elaborar una evidencia de aprendizaje adaptada al bloque correspondiente.",
  "Responder el cuestionario final del proyecto.",
];

const evidence = [
  "Ficha de tarea o sesión", "Propuesta de intervención", "Análisis de una situación de juego",
  "Diseño de actividad técnico-táctica", "Registro de observación entre iguales",
  "Material docente creado por el alumnado", "Reflexión o autoevaluación", "Coevaluación entre iguales",
];

function BulletList({ items }: { items: string[] }) {
  return <ul className="mt-5 grid gap-3 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700"><span className="font-black text-institutional-700" aria-hidden="true">✓</span><span>{item}</span></li>)}</ul>;
}

function CollectiveSportsPage() {
  return <div>
    <PageHeader eyebrow="Asignatura piloto · 2.º curso" title="Deportes Colectivos" description="Grado en Ciencias de la Actividad Física y del Deporte">
      <div className="flex flex-wrap gap-2 text-sm font-semibold">
        <span className="rounded-full bg-white/15 px-4 py-2 ring-1 ring-white/25">Voleibol</span>
        <span className="rounded-full bg-white/15 px-4 py-2 ring-1 ring-white/25">Baloncesto</span>
        <span className="rounded-full bg-white/15 px-4 py-2 ring-1 ring-white/25">Balonmano</span>
        <span className="rounded-full bg-white/15 px-4 py-2 ring-1 ring-white/25">Fútbol</span>
      </div>
    </PageHeader>

    <Section eyebrow="Punto de partida" title="La asignatura dentro del proyecto">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <SummaryCard icon="DC" title="Ficha de la asignatura" description="Asignatura participante en el proyecto de Aula Invertida e IA en CAFD." tone="slate">
          <dl className="space-y-3 text-sm">
            <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200"><dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Curso</dt><dd className="mt-1 font-semibold text-slate-800">2.º curso</dd></div>
            <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200"><dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Titulación</dt><dd className="mt-1 font-semibold text-slate-800">Grado en Ciencias de la Actividad Física y del Deporte</dd></div>
            <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200"><dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Profesorado responsable</dt><dd className="mt-1 font-semibold leading-6 text-slate-800">Javier Álvarez Medina, Víctor Murillo Lorente y Luis Pueyo Romeo</dd></div>
          </dl>
        </SummaryCard>
        <Card className="space-y-4 leading-7 text-slate-700">
          <p>Deportes Colectivos participa en el proyecto como una asignatura especialmente vinculada a la aplicación práctica de contenidos técnico-tácticos, metodológicos y didácticos propios de los deportes de colaboración-oposición.</p>
          <p>La asignatura se organiza en cuatro bloques de contenido: voleibol, baloncesto, balonmano y fútbol. Cada bloque permite aplicar una forma específica de intervención docente, favoreciendo que el alumnado experimente diferentes maneras de enseñar, observar, analizar y adaptar las tareas en contextos deportivos.</p>
          <p className="rounded-xl bg-institutional-50 p-4 font-semibold text-institutional-900">El objetivo dentro del proyecto es reforzar el papel activo del alumnado mediante la preparación previa, la aplicación práctica en clase, la reflexión sobre la intervención docente y la generación de evidencias de aprendizaje vinculadas a cada bloque.</p>
        </Card>
      </div>
    </Section>

    <Section eyebrow="Cuatro deportes, cuatro enfoques" title="Bloques de contenido y enfoque metodológico">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{sports.map(([title, description, icon], index) => <IconCard key={title} title={title} description={description} icon={icon} tone={index % 2 ? "slate" : "blue"} />)}</div>
    </Section>

    <Section eyebrow="Secuencia de aprendizaje" title="Propuesta de aula invertida" description="La experiencia conecta la preparación autónoma, la práctica presencial y la reflexión posterior.">
      <div className="grid gap-5 lg:grid-cols-3">
        <SummaryCard eyebrow="Antes de la sesión" icon="1" title="Preparar" description="El alumnado podrá trabajar previamente con materiales, documentos, vídeos, ejemplos de tareas o contenidos vinculados al deporte colectivo correspondiente. Esta preparación permitirá llegar a la sesión presencial con una base inicial sobre los conceptos que posteriormente serán aplicados en clase." tone="blue">
          <ul className="space-y-2 text-sm leading-6 text-slate-700">{["Revisión de contenidos técnico-tácticos", "Análisis de vídeos o situaciones de juego", "Preparación de propuestas de tareas", "Lectura o consulta de materiales docentes", "Elaboración inicial de ideas para una intervención práctica"].map(x => <li key={x} className="flex gap-2"><span className="text-institutional-700">→</span>{x}</li>)}</ul>
        </SummaryCard>
        <SummaryCard eyebrow="Durante la sesión" icon="2" title="Aplicar" description="El tiempo presencial se orientará a la aplicación práctica de los contenidos trabajados previamente. El alumnado participará en tareas, situaciones de juego, análisis de problemas, diseño de propuestas y experiencias de enseñanza-aprendizaje vinculadas a los deportes colectivos." tone="green">
          <ul className="space-y-2 text-sm leading-6 text-slate-700"><li><strong>Voleibol:</strong> observación entre iguales.</li><li><strong>Baloncesto:</strong> enseñanza en grupos reducidos.</li><li><strong>Balonmano:</strong> enseñanza al gran grupo.</li><li><strong>Fútbol:</strong> enseñanza individualizada.</li></ul>
        </SummaryCard>
        <SummaryCard eyebrow="Después de la sesión" icon="3" title="Reflexionar y mejorar" description="Tras la sesión, el alumnado podrá completar, revisar o mejorar la evidencia generada, incorporando la retroalimentación recibida y reflexionando sobre la transferencia de los contenidos a contextos reales de enseñanza o entrenamiento." tone="amber" />
      </div>
    </Section>

    <Section eyebrow="Participación activa" title="Qué se espera del alumnado"><BulletList items={studentExpectations} /></Section>

    <Section eyebrow="Acompañamiento docente" title="Papel del profesorado">
      <Card className="grid gap-5 leading-7 text-slate-700 md:grid-cols-2">
        <p>El profesorado diseñará la experiencia de aula invertida, organizará los materiales de trabajo previo y estructurará las sesiones presenciales para favorecer la aplicación práctica, la reflexión y la transferencia de los contenidos.</p>
        <p>Su papel será seleccionar o diseñar los materiales previos, organizar las situaciones prácticas, facilitar la participación del alumnado, resolver dudas vinculadas a la asignatura y proporcionar retroalimentación sobre las tareas o evidencias generadas.</p>
        <p className="rounded-xl bg-institutional-50 p-4 font-semibold text-institutional-900 md:col-span-2">Asimismo, se recordarán los criterios comunes de uso responsable, ético y declarado de la inteligencia artificial cuando el alumnado recurra a estas herramientas como apoyo para el aprendizaje.</p>
      </Card>
    </Section>

    <Section eyebrow="Criterios comunes" title="Uso responsable de IA en la asignatura" description="En Deportes Colectivos, la inteligencia artificial podrá utilizarse como herramienta de apoyo para organizar ideas, revisar materiales, generar ejemplos iniciales, contrastar propuestas o mejorar la presentación de trabajos. Su uso no sustituirá en ningún caso la comprensión personal, la participación práctica ni la elaboración propia del alumnado.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <IconCard icon="A" title="Apoyo, no sustitución" description="La IA puede ayudar a ordenar o revisar ideas, pero no reemplaza el trabajo personal." tone="blue" />
        <IconCard icon="D" title="Uso declarado" description="Cuando se utilice IA en una tarea académica, deberá indicarse de forma transparente." tone="green" />
        <IconCard icon="R" title="Revisión crítica" description="Toda información generada mediante IA deberá ser revisada, contrastada y adaptada al contexto de la asignatura." tone="amber" />
        <IconCard icon="H" title="Honestidad académica" description="La evidencia final debe reflejar la comprensión real del estudiante." tone="slate" />
      </div>
    </Section>

    <Section eyebrow="Resultado del proceso" title="Producto o evidencia de aprendizaje" description="La evidencia de aprendizaje podrá concretarse en función del bloque de contenido trabajado y de la actividad diseñada por el profesorado.">
      <BulletList items={evidence} />
      <p className="mt-5 rounded-2xl border border-institutional-100 bg-institutional-50 p-5 font-semibold leading-7 text-institutional-900">La evidencia final se mantendrá abierta y adaptable al enfoque metodológico de cada bloque.</p>
    </Section>

    <Section eyebrow="Valoración de la experiencia" title="Evaluación y seguimiento">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="space-y-4 leading-7 text-slate-700"><p>La experiencia se valorará a través de las evidencias generadas por el alumnado, la participación en las sesiones, la aplicación práctica de los contenidos y la reflexión sobre el proceso de aprendizaje.</p><p>Además, el alumnado responderá el cuestionario final común del proyecto, orientado a conocer su percepción sobre el aula invertida y el uso académico de la inteligencia artificial generativa.</p><p>Este cuestionario permitirá analizar la utilidad percibida de la experiencia, el grado de participación activa, la integración de la IA y posibles mejoras para futuras aplicaciones.</p></Card>
        <HighlightBox eyebrow="Cuestionario común" title="Comparte tu experiencia" tone="green"><p className="text-base font-normal">Tu valoración ayudará a revisar y mejorar las siguientes aplicaciones del proyecto.</p><Link href="/cuestionario-final" className="mt-5 inline-flex rounded-xl border border-institutional-700 bg-white px-5 py-3 text-sm font-bold text-institutional-800 transition hover:bg-institutional-50">Ir al cuestionario final <span className="ml-2" aria-hidden="true">→</span></Link></HighlightBox>
      </div>
    </Section>

    <aside className="mt-9 rounded-[2rem] border border-dashed border-institutional-300 bg-institutional-50 p-7 md:p-9"><span className="inline-flex rounded-full bg-institutional-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Módulo piloto en desarrollo</span><h2 className="mt-4 text-2xl font-bold text-institutional-900">Una estructura para seguir construyendo</h2><p className="mt-3 max-w-4xl leading-7 text-slate-700">Esta página funciona como modelo inicial para el desarrollo del resto de asignaturas participantes. Su estructura podrá ajustarse posteriormente a partir de la revisión del equipo docente y de la información específica aportada por cada profesor o profesora responsable.</p></aside>
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
