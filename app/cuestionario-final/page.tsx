import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { HighlightBox, IconCard, InfoGrid, SummaryCard } from "@/components/VisualBlocks";

const aspects = [
  { title: "Datos generales", description: "Contexto de participación y asignaturas implicadas." },
  { title: "Aula invertida", description: "Utilidad del trabajo previo y de la sesión práctica." },
  { title: "IA generativa", description: "Uso, orientación recibida y percepción académica." },
  { title: "Aula invertida + IA", description: "Relación entre metodología activa e inteligencia artificial." },
  { title: "Valoración global", description: "Satisfacción, propuestas de mejora y preguntas abiertas." },
];

export default function CuestionarioFinalPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Evaluación común"
        title="Cuestionario final"
        description="Instrumento previsto para recoger la percepción del alumnado sobre la experiencia desarrollada en el marco del proyecto."
      />

      <Section title="Finalidad y momento de aplicación" description="Dos ideas clave para explicar el cuestionario de forma rápida.">
        <div className="grid gap-6 lg:grid-cols-2">
          <SummaryCard
            icon="F"
            title="Finalidad"
            description="Valorar el impacto de la metodología, la utilidad percibida del aula invertida y el uso académico de la IA generativa."
          />
          <SummaryCard
            icon="M"
            tone="slate"
            title="Momento de aplicación"
            description="Al finalizar la experiencia en cada asignatura o al cierre del curso si un grupo participa en varias materias."
          />
        </div>
      </Section>

      <Section title="Qué evaluará" description="Bloques previstos para recoger información común y comparable.">
        <InfoGrid>
          {aspects.map((aspect, index) => (
            <IconCard key={aspect.title} icon={`${index + 1}`} title={aspect.title} description={aspect.description} tone={index % 2 === 0 ? 'blue' : 'slate'} />
          ))}
        </InfoGrid>
      </Section>

      <Section title="Acceso al cuestionario">
        <HighlightBox eyebrow="Próximamente" title="Formulario pendiente de incorporación" tone="slate">
          El enlace definitivo será facilitado por el profesorado responsable cuando corresponda.
          <div className="mt-6">
            <a
              href="#"
              aria-disabled="true"
              className="inline-flex cursor-not-allowed rounded-full bg-slate-300 px-6 py-3 text-sm font-bold text-slate-600"
            >
              Acceder al cuestionario
            </a>
          </div>
        </HighlightBox>
      </Section>
    </div>
  );
}
