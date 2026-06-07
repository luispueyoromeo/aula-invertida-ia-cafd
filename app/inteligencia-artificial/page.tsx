import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ComparisonBlock, HighlightBox, IconCard, InfoGrid, StepFlow, SummaryCard } from "@/components/VisualBlocks";

const principles = [
  { title: "Uso guiado", description: "El profesorado indica cuándo, cómo y para qué puede utilizarse." },
  { title: "Uso declarado", description: "El alumnado informa si ha usado IA y con qué finalidad." },
  { title: "Revisión crítica", description: "Toda respuesta debe comprobarse, adaptarse y justificar su utilidad." },
];

const recommendedUses = [
  "Organizar ideas o esquemas de estudio.",
  "Generar ejemplos que después se revisan.",
  "Mejorar la claridad de un texto propio.",
  "Comparar explicaciones de un concepto.",
  "Preparar preguntas para estudiar.",
  "Crear borradores que se transforman críticamente.",
];

const unsuitableUses = [
  "Entregar textos generados como si fueran propios.",
  "Usar IA sin declararlo cuando se solicite.",
  "Copiar respuestas sin comprenderlas.",
  "Aceptar información sin verificarla.",
  "Incluir fuentes inventadas o no comprobadas.",
  "Sustituir el trabajo personal por respuestas automáticas.",
];

const risks = [
  { title: "Errores", description: "Puede ofrecer información incorrecta o incompleta." },
  { title: "Fuentes falsas", description: "Puede inventar referencias, datos o citas." },
  { title: "Sesgos", description: "Puede reproducir enfoques parciales o poco contextualizados." },
  { title: "Dependencia", description: "Un uso excesivo reduce autonomía y criterio propio." },
  { title: "Transparencia", description: "No declararla puede generar problemas académicos." },
  { title: "Calidad", description: "El resultado necesita revisión, contraste y adaptación." },
];

const integrationSteps = [
  { title: "Definir tarea", description: "Aclarar objetivo, límites y producto esperado." },
  { title: "Usar con guía", description: "Plantear prompts alineados con la actividad." },
  { title: "Contrastar", description: "Revisar precisión, fuentes y adecuación académica." },
  { title: "Transformar", description: "Adaptar el resultado con criterio propio." },
  { title: "Declarar", description: "Indicar el uso realizado si la tarea lo requiere." },
];

export default function InteligenciaArtificialPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Uso responsable"
        title="Inteligencia Artificial"
        description="La IA se incorpora como herramienta de apoyo al aprendizaje desde un enfoque crítico, ético, guiado y supervisado."
      />

      <Section title="Papel de la IA en el proyecto" description="La IA ayuda en tareas concretas, pero no sustituye el aprendizaje ni la autoría académica.">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <SummaryCard icon="IA" title="Apoyo al aprendizaje" description="Puede ayudar a buscar, ordenar, explicar, revisar y mejorar ideas, siempre con supervisión y contraste." />
          <HighlightBox eyebrow="Regla básica" tone="blue">
            La IA puede ayudarte a pensar, organizar, revisar y mejorar, pero no debe sustituir tu aprendizaje ni tu responsabilidad académica.
          </HighlightBox>
        </div>
      </Section>

      <Section title="Tres principios de uso" description="Criterios comunes para que el uso de IA sea comprensible, transparente y evaluable.">
        <InfoGrid>
          {principles.map((principle, index) => (
            <SummaryCard key={principle.title} icon={`${index + 1}`} title={principle.title} description={principle.description} tone={index === 1 ? 'slate' : 'blue'} />
          ))}
        </InfoGrid>
      </Section>

      <Section title="Usos recomendables y no adecuados" description="Comparación rápida para orientar decisiones del alumnado.">
        <ComparisonBlock leftTitle="Usos recomendables" rightTitle="Usos no adecuados" leftItems={recommendedUses} rightItems={unsuitableUses} />
      </Section>

      <Section title="Riesgos principales" description="Aspectos que deben revisarse antes de aceptar cualquier respuesta generada.">
        <InfoGrid>
          {risks.map((risk, index) => (
            <IconCard key={risk.title} icon="!" title={risk.title} description={risk.description} tone={index % 2 === 0 ? 'amber' : 'slate'} />
          ))}
        </InfoGrid>
      </Section>

      <Section title="Cómo integrar la IA de forma responsable" description="Proceso breve para utilizarla como apoyo y no como sustitución del trabajo académico.">
        <StepFlow steps={integrationSteps} compact />
      </Section>

      <Card className="border-institutional-100 bg-white">
        <h3 className="text-xl font-bold text-slate-900">Idea para recordar</h3>
        <p className="mt-3 leading-7 text-slate-600">
          La calidad académica no depende de usar IA, sino de formular buenas preguntas, contrastar resultados y aportar criterio propio.
        </p>
      </Card>
    </div>
  );
}
