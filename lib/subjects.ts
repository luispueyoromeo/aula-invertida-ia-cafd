export type Subject = {
  name: string;
  course: string;
  slug: string;
  professor: string;
};

export const subjects: Subject[] = [
  {
    name: "Actividades Acuáticas",
    course: "1.º curso",
    slug: "actividades-acuaticas",
    professor: "Profesorado responsable pendiente de confirmar",
  },
  {
    name: "Deportes Colectivos",
    course: "2.º curso",
    slug: "deportes-colectivos",
    professor: "Profesorado responsable pendiente de confirmar",
  },
  {
    name: "Deportes de Lucha y Adversario",
    course: "2.º curso",
    slug: "deportes-lucha-adversario",
    professor: "Profesorado responsable pendiente de confirmar",
  },
  {
    name: "Deportes Rítmico-Gimnásticos",
    course: "2.º curso",
    slug: "deportes-ritmico-gimnasticos",
    professor: "Profesorado responsable pendiente de confirmar",
  },
  {
    name: "Deportes en la Naturaleza",
    course: "2.º curso",
    slug: "deportes-naturaleza",
    professor: "Profesorado responsable pendiente de confirmar",
  },
  {
    name: "Entrenamiento",
    course: "3.º curso",
    slug: "entrenamiento",
    professor: "Profesorado responsable pendiente de confirmar",
  },
  {
    name: "Actividades Físico-Deportivas en la Naturaleza",
    course: "4.º curso",
    slug: "actividades-fisico-deportivas-naturaleza",
    professor: "Profesorado responsable pendiente de confirmar",
  },
];

export function getSubjectBySlug(slug: string) {
  return subjects.find((subject) => subject.slug === slug);
}
