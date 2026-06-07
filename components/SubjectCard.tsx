import Link from "next/link";
import type { Subject } from "@/lib/subjects";

type SubjectCardProps = {
  subject: Subject;
};

export function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-institutional-200">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-institutional-700">{subject.course}</p>
      <h2 className="mt-3 text-2xl font-bold text-slate-900">{subject.name}</h2>
      <p className="mt-4 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">Contenido en elaboración</p>
      <Link
        href={`/asignaturas/${subject.slug}`}
        className="mt-auto inline-flex w-fit items-center rounded-full bg-institutional-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-institutional-900"
      >
        Acceder al módulo
      </Link>
    </article>
  );
}
