import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

const aspects = [
  "Datos generales y contextualización.",
  "Evaluación del aula invertida.",
  "Evaluación del uso académico de IA generativa.",
  "Integración específica entre aula invertida e IA.",
  "Valoración global y preguntas abiertas.",
];

export default function CuestionarioFinalPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Evaluación común"
        title="Cuestionario final"
        description="Instrumento previsto para recoger la percepción del alumnado sobre la experiencia desarrollada en el marco del proyecto."
      />

      <Section title="Finalidad y momento de aplicación">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-slate-900">Finalidad del cuestionario</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              El cuestionario final permitirá recoger la percepción del alumnado sobre la experiencia desarrollada en el marco del proyecto Aula Invertida e IA en CAFD. Su finalidad es valorar el impacto de la metodología, analizar la utilidad percibida del aula invertida y conocer el uso académico de la inteligencia artificial generativa.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-slate-900">Cuándo se realizará</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              El cuestionario se aplicará al finalizar la experiencia en cada asignatura o, preferentemente, al final del curso académico cuando un mismo grupo haya participado en varias asignaturas del proyecto. De este modo, se pretende evitar duplicidades y reducir la carga de respuesta del alumnado.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Aspectos evaluados">
        <Card>
          <ul className="grid gap-3 text-slate-700 md:grid-cols-2">
            {aspects.map((aspect) => <li key={aspect} className="rounded-xl bg-slate-50 p-4">• {aspect}</li>)}
          </ul>
        </Card>
      </Section>

      <Section title="Estado actual">
        <div className="rounded-[2rem] border border-institutional-200 bg-white p-8 shadow-soft">
          <p className="text-lg leading-8 text-slate-700">
            El formulario definitivo se incorporará próximamente. El enlace al cuestionario será facilitado por el profesorado responsable cuando corresponda.
          </p>
          <a
            href="#"
            aria-disabled="true"
            className="mt-6 inline-flex cursor-not-allowed rounded-full bg-slate-300 px-6 py-3 text-sm font-bold text-slate-600"
          >
            Acceder al cuestionario
          </a>
        </div>
      </Section>
    </div>
  );
}
