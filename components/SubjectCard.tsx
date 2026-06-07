import Link from "next/link";
import type { Subject } from "@/lib/subjects";

type SubjectCardProps = {
  subject: Subject;
};

export function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-institutional-200 hover:bg-white">
      <div className="flex items-start justify-between gap-3">
        <p className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-institutional-700 ring-1 ring-slate-200">{subject.course}</p>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-institutional-100 text-sm font-black text-institutional-900" aria-hidden="true">→</span>
      </div>
      <h2 className="mt-4 text-xl font-bold leading-7 text-slate-900">{subject.name}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">Módulo preparado para completar la experiencia específica de la asignatura.</p>
      <p className="mt-4 w-fit rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-600 ring-1 ring-slate-200">Contenido en elaboración</p>
      <Link
        href={`/asignaturas/${subject.slug}`}
        className="mt-5 inline-flex w-fit items-center rounded-full bg-institutional-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-institutional-900"
      >
        Acceder al módulo
      </Link>
    </article>
  );
}
