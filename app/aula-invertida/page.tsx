import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { IconCard, InfoGrid, SummaryCard, TimelineSteps } from "@/components/VisualBlocks";

const phases = [
  { title: "Antes de la sesión", description: "Consulta de materiales, preguntas guía y preparación autónoma." },
  { title: "Durante la sesión", description: "Aplicación práctica, debate, colaboración, feedback y resolución de dudas." },
  { title: "Después de la sesión", description: "Mejora de productos, reflexión y entrega de evidencias de aprendizaje." },
];

const benefits = [
  { title: "Más participación", description: "El alumnado llega preparado para intervenir y practicar." },
  { title: "Mejor conexión", description: "La teoría se aplica a situaciones reales del ámbito físico-deportivo." },
  { title: "Autonomía", description: "Favorece planificación, responsabilidad y aprendizaje activo." },
  { title: "Feedback útil", description: "La sesión presencial permite orientar y corregir en tiempo real." },
  { title: "Evidencias", description: "Los productos muestran comprensión y aplicación del contenido." },
  { title: "Coherencia", description: "Facilita una línea metodológica común entre asignaturas." },
];

const activities = [
  "Preparar vídeos, lecturas o infografías breves.",
  "Resolver casos prácticos en clase.",
  "Analizar situaciones deportivas reales.",
  "Diseñar tareas o propuestas de intervención.",
  "Presentar materiales creados por el alumnado.",
  "Realizar autoevaluación o coevaluación.",
];

export default function AulaInvertidaPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Metodología activa"
        title="Aula Invertida"
        description="Una estrategia para reservar la sesión presencial a la aplicación, el análisis, la práctica, el debate y la reflexión guiada."
      />

      <Section title="Qué es" description="La explicación básica del modelo en formato breve y operativo.">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SummaryCard
            icon="AI"
            title="Preparar antes para aplicar mejor"
            description="El alumnado revisa materiales antes de clase y el tiempo presencial se dedica a practicar, analizar y resolver problemas."
          />
          <Card>
            <div className="grid gap-4 sm:grid-cols-3">
              {['Trabajo previo', 'Clase activa', 'Evidencia final'].map((item, index) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 text-center">
                  <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-institutional-800 text-sm font-black text-white">{index + 1}</span>
                  <p className="mt-3 font-bold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Esquema principal en tres fases" description="Una secuencia simple para explicar cómo se organiza la experiencia.">
        <TimelineSteps steps={phases} />
      </Section>

      <Section title="Rol del alumnado y del profesorado" description="Ambos perfiles tienen funciones claras y complementarias.">
        <div className="grid gap-6 md:grid-cols-2">
          <SummaryCard icon="A" title="Rol del alumnado" description="Preparar contenidos, participar, crear productos, revisar su aprendizaje y asumir responsabilidad sobre su progreso.">
            <ul className="grid gap-2 text-sm font-semibold text-slate-700 sm:grid-cols-2">
              {['Preparar', 'Participar', 'Crear', 'Reflexionar'].map((item) => <li key={item} className="rounded-xl bg-white p-3 ring-1 ring-slate-200">{item}</li>)}
            </ul>
          </SummaryCard>
          <SummaryCard icon="P" tone="slate" title="Rol del profesorado" description="Diseñar el proceso, orientar el trabajo previo, guiar la práctica, aportar feedback y evaluar evidencias.">
            <ul className="grid gap-2 text-sm font-semibold text-slate-700 sm:grid-cols-2">
              {['Diseñar', 'Guiar', 'Acompañar', 'Evaluar'].map((item) => <li key={item} className="rounded-xl bg-white p-3 ring-1 ring-slate-200">{item}</li>)}
            </ul>
          </SummaryCard>
        </div>
      </Section>

      <Section title="Beneficios esperados" description="Resultados pedagógicos resumidos en tarjetas breves.">
        <InfoGrid>
          {benefits.map((benefit, index) => (
            <IconCard key={benefit.title} icon={`${index + 1}`} title={benefit.title} description={benefit.description} tone={index % 2 === 0 ? 'blue' : 'slate'} />
          ))}
        </InfoGrid>
      </Section>

      <Section title="Ejemplos de actividades" description="Ideas aplicables a asignaturas del Grado en CAFD.">
        <Card>
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <li key={activity} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700">
                {activity}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <div className="rounded-[2rem] bg-institutional-900 p-7 text-center text-white shadow-soft">
        <p className="text-xl font-bold leading-8">
          El aula invertida no reduce la docencia presencial: la convierte en un espacio de aplicación, práctica y feedback.
        </p>
      </div>
    </div>
  );
}
