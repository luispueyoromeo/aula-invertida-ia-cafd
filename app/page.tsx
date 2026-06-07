import Link from "next/link";
import { Card } from "@/components/Card";
import { InstitutionalLogoPlaceholder } from "@/components/InstitutionalLogoPlaceholder";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { HighlightBox, InfoGrid, StepFlow, SummaryCard } from "@/components/VisualBlocks";
import { subjects } from "@/lib/subjects";

const commonSteps = [
  { title: "Preparación previa", description: "Materiales breves, preguntas guía y primera aproximación al contenido." },
  { title: "Uso guiado de IA", description: "Apoyo para organizar, revisar o contrastar ideas cuando la tarea lo permita." },
  { title: "Aplicación práctica", description: "Sesión presencial centrada en resolver, crear, debatir y recibir feedback." },
  { title: "Evidencia de aprendizaje", description: "Producto sencillo que muestra comprensión, aplicación y revisión crítica." },
  { title: "Cuestionario final", description: "Valoración común de la experiencia y del impacto percibido por el alumnado." },
];

export default function HomePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Proyecto de Innovación Docente · Universidad de Zaragoza"
        title="Aula Invertida e IA en CAFD"
        description="Portal común para coordinar asignaturas, explicar el marco metodológico y orientar un uso responsable de la inteligencia artificial en el Grado en CAFD."
      >
        <InstitutionalLogoPlaceholder />
      </PageHeader>

      <Section eyebrow="Inicio" title="Una web para explicar el proyecto" description="Síntesis institucional del proyecto, con una estructura común para docentes y alumnado.">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <SummaryCard
            icon="P"
            eyebrow="Tarjeta resumen"
            title="Proyecto coordinado de innovación docente"
            description="Integra aula invertida e IA como apoyo pedagógico en distintas asignaturas del Grado en Ciencias de la Actividad Física y del Deporte."
          >
            <div className="grid gap-3 sm:grid-cols-3">
              {['Coordinación', 'Claridad', 'Evidencias'].map((item) => (
                <span key={item} className="rounded-full bg-white px-3 py-2 text-center text-sm font-bold text-institutional-800 ring-1 ring-institutional-100">
                  {item}
                </span>
              ))}
            </div>
          </SummaryCard>
          <SummaryCard
            icon="O"
            tone="slate"
            eyebrow="Objetivo general"
            title="Mejorar el aprendizaje"
            description="Crear una línea metodológica común que combine preparación autónoma, práctica presencial, revisión crítica y evaluación compartida."
          />
        </div>
      </Section>

      <Section title="Los 2 pilares del proyecto" description="Dos enfoques complementarios para hacer más activo, aplicado y responsable el aprendizaje.">
        <div className="grid gap-6 md:grid-cols-2">
          <SummaryCard
            icon="AI"
            title="Aula Invertida"
            description="La clase presencial se dedica a aplicar, practicar, debatir y resolver dudas a partir del trabajo previo."
          />
          <SummaryCard
            icon="IA"
            tone="slate"
            title="Inteligencia Artificial"
            description="Herramienta de apoyo para pensar, organizar, revisar y mejorar, sin sustituir la responsabilidad académica."
          />
        </div>
      </Section>

      <Section title="Marco común de actuación" description="Cada asignatura mantiene su autonomía, pero todas comparten una secuencia sencilla y explicable.">
        <StepFlow steps={commonSteps} compact />
      </Section>

      <Section title="MARE-A y coordinación docente">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <HighlightBox eyebrow="Relación con MARE-A" title="Un espacio de referencia común">
            El portal ordena y visibiliza experiencias vinculadas al Grupo de Innovación Docente MARE-A, facilitando coordinación, comunicación y seguimiento.
          </HighlightBox>
          <Card>
            <h3 className="text-xl font-bold text-slate-900">Asignaturas participantes</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Acceso rápido a los módulos de cada materia.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {subjects.map((subject) => (
                <Link key={subject.slug} href={`/asignaturas/${subject.slug}`} className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-semibold text-slate-700 transition hover:border-institutional-200 hover:bg-institutional-50 hover:text-institutional-900">
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{subject.course}</span>
                  {subject.name}
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Qué aporta la web" description="Una presentación clara para reuniones docentes, sesiones con alumnado y seguimiento del proyecto.">
        <InfoGrid>
          <SummaryCard icon="1" title="Explicación rápida" description="Bloques breves, tarjetas y pasos para comprender el proyecto sin leer textos extensos." />
          <SummaryCard icon="2" tone="slate" title="Ruta compartida" description="Una secuencia común para preparar, aplicar, evidenciar y evaluar el aprendizaje." />
          <SummaryCard icon="3" title="Uso responsable" description="Criterios simples para integrar IA con transparencia, guía docente y revisión crítica." />
        </InfoGrid>
      </Section>
    </div>
  );
}
