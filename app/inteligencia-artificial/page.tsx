import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ComparisonBlock, HighlightBox, IconCard, InfoGrid, StepFlow, SummaryCard } from "@/components/VisualBlocks";

const principles = [
  {
    title: "Uso responsable",
    description: "La IA puede apoyar el aprendizaje, pero no debe sustituir el trabajo, la comprensión ni la responsabilidad académica del alumnado.",
  },
  {
    title: "Uso declarado",
    description: "Cuando se utilice IA en una tarea académica, debe indicarse de forma transparente qué herramienta se ha usado y con qué finalidad.",
  },
  {
    title: "Revisión crítica",
    description: "Toda respuesta generada por IA debe revisarse, contrastarse y adaptarse al contexto de la asignatura antes de ser utilizada.",
  },
  {
    title: "Honestidad académica",
    description: "El producto final debe reflejar el criterio, la elaboración personal y la comprensión real del estudiante.",
  },
];

const recommendedUses = [
  "Organizar ideas o esquemas iniciales.",
  "Formular preguntas de estudio.",
  "Revisar la claridad de un texto propio.",
  "Generar ejemplos que después serán comprobados.",
  "Comparar explicaciones sobre un concepto.",
  "Mejorar una presentación sin sustituir el contenido personal.",
  "Apoyar la preparación previa de una sesión.",
];

const unsuitableUses = [
  "Entregar como propio un texto generado íntegramente por IA.",
  "Usar IA sin declararlo cuando ha influido en la tarea.",
  "Copiar respuestas sin comprenderlas.",
  "Aceptar información sin verificarla.",
  "Usar referencias o fuentes no comprobadas.",
  "Sustituir el estudio personal por respuestas automáticas.",
  "Depender de la IA para resolver cualquier actividad académica.",
];

const risks = [
  { title: "Errores", description: "Errores o información imprecisa." },
  { title: "Fuentes no fiables", description: "Fuentes inventadas o no fiables." },
  { title: "Sesgos", description: "Sesgos en las respuestas." },
  { title: "Pérdida de autonomía", description: "Pérdida de autonomía." },
  { title: "Falta de transparencia", description: "Falta de transparencia." },
  { title: "Autoría académica", description: "Problemas de autoría académica." },
];

const integrationSteps = [
  { title: "Pensar", description: "Aclarar qué se necesita antes de pedir ayuda." },
  { title: "Usar", description: "Aplicar la IA solo como apoyo puntual." },
  { title: "Verificar", description: "Contrastar información, fuentes y resultados." },
  { title: "Adaptar", description: "Reelaborar con criterio propio y contexto académico." },
  { title: "Declarar", description: "Indicar herramienta y finalidad cuando influya en la tarea." },
];

export default function InteligenciaArtificialPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Uso responsable"
        title="Inteligencia Artificial"
        description="La IA se incorpora como herramienta de apoyo al aprendizaje desde un enfoque ético, transparente, crítico y responsable."
      />

      <Section title="Papel de la IA en el proyecto" description="La IA puede ayudar en tareas concretas, pero no sustituye el aprendizaje, la comprensión ni la autoría académica.">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <SummaryCard icon="IA" title="Apoyo al aprendizaje" description="Puede ayudar a ordenar ideas, revisar textos, comparar explicaciones o preparar preguntas, siempre con sentido común y verificación posterior." />
          <HighlightBox eyebrow="Regla básica" tone="blue">
            La IA puede ayudarte a pensar, organizar, revisar y mejorar, pero no debe sustituir tu aprendizaje ni tu responsabilidad académica.
          </HighlightBox>
        </div>
      </Section>

      <Section title="Principios para un uso responsable de la IA" description="Criterios comunes para utilizar IA con transparencia, honestidad académica y revisión crítica.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle, index) => (
            <SummaryCard key={principle.title} icon={`${index + 1}`} title={principle.title} description={principle.description} tone={index % 2 === 0 ? 'blue' : 'slate'} />
          ))}
        </div>
      </Section>

      <Section title="Usos recomendables y no adecuados" description="Orientaciones breves para diferenciar el apoyo útil de usos que comprometen el aprendizaje o la honestidad académica.">
        <ComparisonBlock leftTitle="Usos recomendables" rightTitle="Usos no adecuados" leftItems={recommendedUses} rightItems={unsuitableUses} />
      </Section>

      <Section title="Riesgos principales" description="Aspectos que conviene revisar antes de aceptar o incorporar cualquier respuesta generada por IA.">
        <InfoGrid>
          {risks.map((risk, index) => (
            <IconCard key={risk.title} icon="!" title={risk.title} description={risk.description} tone={index % 2 === 0 ? 'amber' : 'slate'} />
          ))}
        </InfoGrid>
      </Section>

      <Section title="Cómo integrar la IA de forma responsable" description="Proceso breve para usarla como apoyo, mantener el criterio propio y declarar su influencia cuando corresponda.">
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
