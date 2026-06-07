import Link from "next/link";
import { Card } from "@/components/Card";
import { InstitutionalLogoPlaceholder } from "@/components/InstitutionalLogoPlaceholder";
import { PageHeader } from "@/components/PageHeader";
import { PhaseCard } from "@/components/PhaseCard";
import { Section } from "@/components/Section";
import { subjects } from "@/lib/subjects";

const phases = [
  {
    step: "1",
    title: "Antes de la sesión",
    description: "Preparación previa del alumnado, consulta de materiales, análisis de contenidos y posible uso guiado de IA.",
  },
  {
    step: "2",
    title: "Durante la sesión",
    description: "Aplicación práctica en clase, trabajo colaborativo, debate, feedback y conexión entre teoría y práctica.",
  },
  {
    step: "3",
    title: "Después de la sesión",
    description: "Generación o mejora de evidencias de aprendizaje, reflexión y evaluación final mediante un cuestionario común.",
  },
];

export default function HomePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Proyecto de Innovación Docente · Universidad de Zaragoza"
        title="Aula Invertida e IA en CAFD"
        description="Portal común para presentar el proyecto, coordinar asignaturas participantes y orientar el uso responsable de metodologías activas e inteligencia artificial."
      >
        <InstitutionalLogoPlaceholder />
      </PageHeader>

      <Section eyebrow="Inicio" title="Presentación general del proyecto">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Card>
            <p className="text-lg leading-8 text-slate-700">
              Este portal reúne el marco general del proyecto de innovación docente Aula Invertida e IA en CAFD, desarrollado en el Grado en Ciencias de la Actividad Física y del Deporte de la Universidad de Zaragoza. Su finalidad es ofrecer un espacio común que permita coordinar las experiencias docentes de las asignaturas participantes, visibilizar el marco metodológico compartido y orientar al alumnado en el uso responsable de metodologías activas e inteligencia artificial.
            </p>
          </Card>
          <Card className="bg-institutional-50">
            <h3 className="text-xl font-bold text-institutional-900">Objetivo general</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Mejorar el proceso de enseñanza-aprendizaje en el Grado en Ciencias de la Actividad Física y del Deporte mediante una implementación coordinada del aula invertida y el uso responsable de la inteligencia artificial, estableciendo una línea metodológica común a lo largo de la titulación.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Finalidad, MARE-A y marco común">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-xl font-bold text-slate-900">Finalidad</h3>
            <p className="mt-3 leading-7 text-slate-600">
              El proyecto pretende favorecer el papel activo del alumnado mediante el trabajo autónomo previo, la creación de materiales, la aplicación práctica en el aula y la reflexión sobre el propio aprendizaje. La inteligencia artificial se integra como herramienta de apoyo, siempre desde un enfoque crítico, ético, guiado y fundamentado.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-slate-900">Relación con MARE-A</h3>
            <p className="mt-3 leading-7 text-slate-600">
              El proyecto se vincula al Grupo de Innovación Docente MARE-A, orientado al desarrollo de metodologías activas y recursos de enseñanza-aprendizaje. La aplicación web actúa como espacio de referencia para coordinar, ordenar y presentar las experiencias desarrolladas en el marco del proyecto.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-slate-900">Marco metodológico común</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Aunque cada asignatura mantiene su autonomía y sus particularidades, todas las experiencias se articulan en torno a una estructura común: preparación previa del alumnado, posible uso guiado de IA, aplicación práctica en clase, generación de un producto o evidencia de aprendizaje y evaluación final mediante un cuestionario común.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Asignaturas participantes">
        <Card>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <Link key={subject.slug} href={`/asignaturas/${subject.slug}`} className="rounded-xl border border-slate-200 p-4 font-semibold text-slate-700 transition hover:border-institutional-200 hover:bg-institutional-50 hover:text-institutional-900">
                <span className="block text-sm text-slate-500">{subject.course}</span>
                {subject.name}
              </Link>
            ))}
          </div>
        </Card>
      </Section>

      <Section title="Dos pilares del proyecto">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-institutional-100 bg-gradient-to-br from-white to-blue-50">
            <h3 className="text-2xl font-bold text-institutional-900">Aula invertida</h3>
            <p className="mt-3 leading-7 text-slate-700">Organiza la docencia para que la preparación autónoma previa permita dedicar la sesión presencial a aplicar, debatir, practicar y reflexionar.</p>
          </Card>
          <Card className="border-institutional-100 bg-gradient-to-br from-white to-slate-100">
            <h3 className="text-2xl font-bold text-institutional-900">Inteligencia artificial</h3>
            <p className="mt-3 leading-7 text-slate-700">Se integra como apoyo crítico, ético y guiado para organizar ideas, crear borradores, revisar contenidos y mejorar evidencias sin sustituir el aprendizaje.</p>
          </Card>
        </div>
      </Section>

      <Section title="Tres fases compartidas">
        <div className="grid gap-6 md:grid-cols-3">
          {phases.map((phase) => (
            <PhaseCard key={phase.step} {...phase} />
          ))}
        </div>
      </Section>

      <div className="rounded-[2rem] bg-white p-8 text-center shadow-soft ring-1 ring-slate-200">
        <p className="text-2xl font-bold leading-9 text-institutional-900">
          “Un espacio común para orientar, coordinar y visibilizar las experiencias desarrolladas en las asignaturas participantes”.
        </p>
      </div>
    </div>
  );
}
