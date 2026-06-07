import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { getSubjectBySlug, subjects } from "@/lib/subjects";

type SubjectPageProps = {
  params: {
    slug: string;
  };
};

const pendingText = "Este módulo está pendiente de completar por el profesorado responsable. En él se describirá la experiencia de aula invertida prevista en la asignatura, la posible integración de herramientas de inteligencia artificial, el producto o evidencia de aprendizaje que deberá elaborar el alumnado y el modo en que se evaluará la experiencia.";

const moduleSections = [
  "Descripción breve",
  "Qué se pretende trabajar",
  "Aplicación del aula invertida",
  "Integración de IA",
  "Producto o evidencia de aprendizaje",
  "Evaluación/cuestionario",
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
        description="Módulo individual de asignatura preparado para incorporar la experiencia docente específica cuando el profesorado responsable complete el contenido."
      />

      <Section title="Información de la asignatura">
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          <Card className="bg-institutional-50">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-institutional-700">Profesorado responsable</p>
            <p className="mt-3 text-xl font-bold text-slate-900">{subject.professor}</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-institutional-700">Estado actual</p>
            <p className="mt-3 rounded-xl bg-white p-4 font-semibold text-slate-700">Contenido pendiente de completar por el profesorado responsable</p>
          </Card>
          <Card>
            <p className="text-lg leading-8 text-slate-700">{pendingText}</p>
          </Card>
        </div>
      </Section>

      <Section title="Estructura del módulo">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {moduleSections.map((title) => (
            <Card key={title}>
              <h2 className="text-xl font-bold text-slate-900">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">Contenido pendiente de completar por el profesorado responsable.</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
