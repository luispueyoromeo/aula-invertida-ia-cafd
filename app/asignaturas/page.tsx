import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SubjectCard } from "@/components/SubjectCard";
import { subjects } from "@/lib/subjects";

export default function AsignaturasPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Coordinación docente"
        title="Asignaturas participantes"
        description="Cada asignatura adaptará el marco común de aula invertida e inteligencia artificial a sus contenidos, competencias y características específicas."
      />

      <Section title="Marco común de las asignaturas">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-lg leading-8 text-slate-700 shadow-soft">
          <p>
            El proyecto se desarrolla en diferentes asignaturas del Grado en Ciencias de la Actividad Física y del Deporte. Cada una de ellas adaptará el marco común de aula invertida e inteligencia artificial a sus contenidos, competencias y características específicas.
          </p>
          <p className="mt-4">
            Todas las asignaturas comparten una estructura común: preparación previa del alumnado, posible uso guiado de IA, aplicación práctica en clase, generación de una evidencia de aprendizaje y evaluación final de la experiencia. No obstante, cada materia mantiene su autonomía docente y adaptará la metodología a su propio contexto.
          </p>
        </div>
      </Section>

      <Section title="Módulos de asignatura">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject) => <SubjectCard key={subject.slug} subject={subject} />)}
        </div>
      </Section>
    </div>
  );
}
