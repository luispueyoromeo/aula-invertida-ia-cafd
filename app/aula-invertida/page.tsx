import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { PhaseCard } from "@/components/PhaseCard";
import { Section } from "@/components/Section";

const benefits = [
  "Mayor implicación del alumnado.",
  "Mejor conexión entre teoría y práctica.",
  "Desarrollo del aprendizaje autónomo.",
  "Fomento del pensamiento crítico.",
  "Mejora de la participación en clase.",
  "Generación de materiales y evidencias transferibles.",
  "Mayor coherencia metodológica entre asignaturas.",
];

const activities = [
  "Preparación de vídeos, lecturas o infografías antes de clase.",
  "Diseño de tareas prácticas.",
  "Análisis de situaciones deportivas.",
  "Resolución de problemas aplicados.",
  "Elaboración de propuestas de intervención.",
  "Presentación de materiales creados por el alumnado.",
  "Autoevaluación y coevaluación.",
];

export default function AulaInvertidaPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Metodología activa"
        title="Aula Invertida"
        description="Una estrategia para transformar el tiempo presencial en un espacio de aplicación, análisis, debate, práctica y reflexión."
      />

      <Section title="Qué es y por qué se utiliza">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <p className="text-lg leading-8 text-slate-700">
              El aula invertida, o flipped classroom, es una metodología activa en la que el alumnado realiza una preparación previa antes de la sesión presencial, mientras que el tiempo de clase se dedica preferentemente a la aplicación práctica, el análisis, la resolución de problemas, el diseño de tareas, el debate y la reflexión.
            </p>
          </Card>
          <Card>
            <p className="text-lg leading-8 text-slate-700">
              En el contexto del Grado en CAFD, esta metodología permite optimizar el tiempo presencial y conectar los contenidos teóricos con situaciones prácticas propias de la actividad física y el deporte. El alumnado no se limita a recibir información, sino que participa activamente en la construcción, aplicación y revisión de su aprendizaje.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Estructura en tres fases">
        <div className="grid gap-6 md:grid-cols-3">
          <PhaseCard step="1" title="Antes de la sesión" description="Preparación autónoma, consulta de materiales, análisis de contenidos o creación de recursos." />
          <PhaseCard step="2" title="Durante la sesión" description="Aplicación práctica, discusión, resolución de problemas, diseño de propuestas, trabajo colaborativo y feedback." />
          <PhaseCard step="3" title="Después de la sesión" description="Reflexión, mejora de productos, entrega de evidencias y evaluación formativa." />
        </div>
      </Section>

      <Section title="Papel del alumnado y del profesorado">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-slate-900">Papel del alumnado</h2>
            <p className="mt-4 leading-7 text-slate-600">
              El alumnado asume un papel activo en el proceso de aprendizaje. Debe preparar los contenidos, participar en las actividades presenciales, elaborar materiales o propuestas, reflexionar sobre su aprendizaje y asumir responsabilidad sobre su progreso.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-slate-900">Papel del profesorado</h2>
            <p className="mt-4 leading-7 text-slate-600">
              El profesorado diseña el proceso, orienta el trabajo previo, guía la sesión presencial, facilita retroalimentación y evalúa las evidencias generadas. Su función no desaparece, sino que se transforma hacia un rol de acompañamiento, orientación y evaluación formativa.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Beneficios esperados y ejemplos de actividades">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-slate-900">Beneficios esperados</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {benefits.map((benefit) => <li key={benefit}>• {benefit}</li>)}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-slate-900">Ejemplos de actividades</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {activities.map((activity) => <li key={activity}>• {activity}</li>)}
            </ul>
          </Card>
        </div>
      </Section>

      <div className="rounded-[2rem] bg-institutional-900 p-8 text-center text-white shadow-soft">
        <p className="text-2xl font-bold leading-9">
          “El aula invertida no elimina la docencia presencial, sino que transforma el tiempo presencial en un espacio de aplicación, análisis, debate, práctica y reflexión”.
        </p>
      </div>
    </div>
  );
}
