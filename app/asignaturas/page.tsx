import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SubjectCard } from "@/components/SubjectCard";
import { StepFlow, SummaryCard } from "@/components/VisualBlocks";
import { subjects } from "@/lib/subjects";

const sharedSteps = [
  { title: "Preparación", description: "Trabajo previo con materiales y preguntas guía." },
  { title: "IA guiada", description: "Apoyo puntual, declarado y revisado." },
  { title: "Práctica", description: "Aplicación en clase y feedback docente." },
  { title: "Evidencia", description: "Producto o resultado de aprendizaje." },
  { title: "Evaluación", description: "Cuestionario común y valoración final." },
];

const courses = ["1.º curso", "2.º curso", "3.º curso", "4.º curso"];

export default function AsignaturasPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Coordinación docente"
        title="Asignaturas participantes"
        description="Cada asignatura adapta el marco común de aula invertida e IA a sus contenidos, competencias y contexto docente."
      />

      <Section title="Todas las asignaturas comparten" description="Una estructura común que facilita coordinación, explicación al alumnado y evaluación de la experiencia.">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SummaryCard
            icon="C"
            title="Marco común del proyecto"
            description="Misma lógica de trabajo para asignaturas distintas: preparación, apoyo guiado de IA, práctica, evidencia y valoración final."
          />
          <StepFlow steps={sharedSteps} compact />
        </div>
      </Section>

      <Section title="Módulos por curso" description="Tarjetas limpias para acceder a cada asignatura sin modificar las rutas existentes.">
        <div className="space-y-8">
          {courses.map((course) => {
            const courseSubjects = subjects.filter((subject) => subject.course === course);
            if (courseSubjects.length === 0) return null;

            return (
              <div key={course} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft md:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-institutional-100 font-black text-institutional-900">{course.charAt(0)}</span>
                  <h2 className="text-2xl font-bold text-slate-900">{course}</h2>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {courseSubjects.map((subject) => <SubjectCard key={subject.slug} subject={subject} />)}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
