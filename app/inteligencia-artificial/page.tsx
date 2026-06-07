import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { PrincipleCard } from "@/components/PrincipleCard";
import { Section } from "@/components/Section";

const academicUses = [
  "Buscar información inicial sobre un tema.",
  "Generar esquemas o mapas de ideas.",
  "Formular preguntas de estudio.",
  "Revisar la claridad de un texto.",
  "Crear ejemplos o casos prácticos.",
  "Diseñar propuestas de tareas.",
  "Mejorar la estructura de una presentación.",
  "Analizar materiales docentes.",
  "Generar borradores que después deben ser revisados y transformados.",
];

const recommendedUses = [
  "Utilizar la IA como apoyo para comprender mejor un contenido.",
  "Pedir ayuda para organizar ideas.",
  "Solicitar ejemplos que después serán revisados.",
  "Comparar diferentes formas de explicar un concepto.",
  "Revisar la redacción de un texto propio.",
  "Preparar preguntas para estudiar.",
  "Generar propuestas iniciales que después serán modificadas críticamente.",
];

const unsuitableUses = [
  "Entregar directamente un texto generado por IA como si fuera propio.",
  "Utilizar IA sin declararlo cuando la tarea lo exige.",
  "Copiar respuestas sin comprenderlas.",
  "Sustituir el trabajo personal por respuestas automáticas.",
  "Aceptar información sin verificarla.",
  "Usar fuentes inventadas o no comprobadas.",
  "Depender de la IA para completar cualquier tarea académica.",
];

const risks = [
  "La IA puede generar errores.",
  "La IA puede inventar referencias o fuentes.",
  "La IA puede ofrecer respuestas sesgadas o incompletas.",
  "El uso excesivo puede reducir la autonomía del alumnado.",
  "La ausencia de transparencia puede generar problemas académicos.",
];

export default function InteligenciaArtificialPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Uso responsable"
        title="Inteligencia Artificial"
        description="La IA se incorpora como una herramienta de apoyo al aprendizaje, desde un enfoque crítico, ético, guiado y supervisado."
      />

      <Section title="Papel de la IA en el proyecto">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <p className="text-lg leading-8 text-slate-700">
              La inteligencia artificial se incorpora al proyecto como una herramienta de apoyo al aprendizaje, no como un sustituto del trabajo del alumnado. Su integración pretende favorecer la búsqueda, organización, creación, análisis y revisión de información, siempre desde un enfoque crítico, ético y supervisado.
            </p>
          </Card>
          <Card>
            <p className="text-lg leading-8 text-slate-700">
              La IA puede ayudar al alumnado a preparar materiales, estructurar ideas, generar ejemplos, revisar textos, plantear propuestas, analizar información o mejorar la presentación de contenidos. Sin embargo, todo resultado generado por una herramienta de IA debe ser revisado, contrastado y adaptado por el estudiante.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Usos académicos posibles y ejemplos de uso">
        <Card>
          <ul className="grid gap-3 text-slate-700 md:grid-cols-2 lg:grid-cols-3">
            {academicUses.map((item) => <li key={item} className="rounded-xl bg-slate-50 p-4">• {item}</li>)}
          </ul>
        </Card>
      </Section>

      <Section title="Uso responsable de la IA">
        <div className="mb-6 rounded-2xl border border-institutional-200 bg-white p-6 shadow-soft">
          <p className="leading-7 text-slate-700">El uso de IA en el proyecto se basa en tres principios:</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <PrincipleCard title="Uso guiado" description="El profesorado orienta cuándo, cómo y para qué puede utilizarse." />
          <PrincipleCard title="Uso declarado" description="El alumnado debe indicar si ha utilizado IA y con qué finalidad." />
          <PrincipleCard title="Revisión crítica" description="El alumnado debe comprobar la calidad, precisión y adecuación de los resultados obtenidos." />
        </div>
      </Section>

      <Section title="Recomendaciones, límites y riesgos">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <h2 className="text-xl font-bold text-slate-900">Usos recomendables</h2>
            <ul className="mt-4 space-y-3 text-slate-600">{recommendedUses.map((item) => <li key={item}>• {item}</li>)}</ul>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-slate-900">Usos no adecuados</h2>
            <ul className="mt-4 space-y-3 text-slate-600">{unsuitableUses.map((item) => <li key={item}>• {item}</li>)}</ul>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-slate-900">Riesgos principales</h2>
            <ul className="mt-4 space-y-3 text-slate-600">{risks.map((item) => <li key={item}>• {item}</li>)}</ul>
          </Card>
        </div>
      </Section>

      <div className="rounded-[2rem] border border-institutional-200 bg-blue-50 p-8 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-institutional-800">Regla básica</p>
        <p className="mt-3 text-2xl font-bold leading-9 text-institutional-900">
          “La IA puede ayudarte a pensar, organizar, revisar y mejorar, pero no debe sustituir tu aprendizaje ni tu responsabilidad académica”.
        </p>
      </div>
    </div>
  );
}
