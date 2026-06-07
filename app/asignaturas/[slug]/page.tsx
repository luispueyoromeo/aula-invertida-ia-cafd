import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { HighlightBox, IconCard, InfoGrid, SummaryCard } from "@/components/VisualBlocks";
import { getSubjectBySlug, subjects } from "@/lib/subjects";

type SubjectPageProps = {
  params: {
    slug: string;
  };
};

const pendingText = "Contenido en elaboración por el profesorado responsable. Este módulo incorporará la experiencia concreta de aula invertida, el posible uso de IA, la evidencia de aprendizaje y el cuestionario asociado.";

const moduleSections = [
  {
    title: "Qué se pretende trabajar",
    description: "Competencias, contenidos o resultados de aprendizaje vinculados a la experiencia.",
  },
  {
    title: "Aplicación del aula invertida",
    description: "Trabajo previo, dinámica presencial y actividades de aplicación previstas.",
  },
  {
    title: "Integración de IA",
    description: "Uso puntual, declarado y revisado de herramientas de inteligencia artificial.",
  },
  {
    title: "Producto o evidencia",
    description: "Material, propuesta, resolución o resultado que elaborará el alumnado.",
  },
  {
    title: "Evaluación / cuestionario",
    description: "Criterios de valoración y participación en el cuestionario final común.",
  },
];

export function generateStaticParams() {
  return subjects.map((subject) => ({ slug: subject.slug }));
}

export function generateMetadata({ params }: SubjectPageProps) {
  const subject = getSubjectBySlug(params.slug);
  return {
    title: subject ? `${subject.name} · Aula Invertida e IA en CAFD` : "Asignatura",
  };
}

export default function SubjectPage({ params }: SubjectPageProps) {
  const subject = getSubjectBySlug(params.slug);

  if (!subject) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        eyebrow={subject.course}
        title={subject.name}
        description="Módulo individual preparado para incorporar la experiencia docente específica cuando el profesorado responsable complete el contenido."
      />

      <Section title="Información de la asignatura" description="Ficha breve del módulo y estado actual del contenido.">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <SummaryCard icon="D" title="Datos básicos" description="Asignatura participante dentro del marco común de Aula Invertida e IA en CAFD." tone="slate">
            <div className="space-y-3 text-sm font-semibold text-slate-700">
              <p className="rounded-xl bg-white p-3 ring-1 ring-slate-200"><span className="block text-xs uppercase tracking-[0.16em] text-slate-500">Curso</span>{subject.course}</p>
              <p className="rounded-xl bg-white p-3 ring-1 ring-slate-200"><span className="block text-xs uppercase tracking-[0.16em] text-slate-500">Profesorado</span>{subject.professor}</p>
            </div>
          </SummaryCard>
          <HighlightBox eyebrow="Estado actual" title="Contenido en elaboración">
            {pendingText}
          </HighlightBox>
        </div>
      </Section>

      <Section title="Estructura visual del módulo" description="Cinco bloques preparados para completar la experiencia concreta de la asignatura.">
        <InfoGrid>
          {moduleSections.map((section, index) => (
            <IconCard key={section.title} icon={`${index + 1}`} title={section.title} description={section.description} tone={index % 2 === 0 ? 'blue' : 'slate'} />
          ))}
        </InfoGrid>
      </Section>

      <Card className="border-dashed border-institutional-200 bg-institutional-50">
        <h2 className="text-xl font-bold text-institutional-900">Mensaje provisional</h2>
        <p className="mt-3 leading-7 text-slate-700">
          El contenido específico será añadido por el profesorado responsable manteniendo esta estructura común y la coherencia del proyecto.
        </p>
      </Card>
    </div>
  );
}
