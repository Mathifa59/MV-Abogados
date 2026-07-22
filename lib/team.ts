/*
  EQUIPO — Edita este archivo para cambiar los integrantes.

  Para cada integrante:
  - name:  nombre completo
  - role:  cargo dentro de la firma
  - area:  especialidad legal
  - bio:   resumen breve (2-3 líneas)
  - image: ruta de la foto dentro de /public
           (reemplaza los archivos en /public/team con fotos reales,
            idealmente en proporción vertical 4:5, ej. 800x1000px)
*/

export interface TeamMember {
  name: string;
  role: string;
  area: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Americo Monteza",
    role: "Socio Fundador",
    area: "Derecho Penal & Corporativo",
    bio: "Fundó la firma con la convicción de que la práctica legal debe combinar rigor intelectual con un compromiso genuino hacia cada cliente.",
    image: "/americo.jpg",
  },
  {
    name: "Nombre Villegas",
    role: "Socio Fundador",
    area: "Derecho Corporativo",
    bio: "Reemplaza este texto con un resumen breve de la trayectoria, especialidad y enfoque profesional del integrante.",
    image: "/team/integrante-2.jpg",
  },
  {
    name: "Nombre Apellido",
    role: "Asociada Senior",
    area: "Litigios & Arbitraje",
    bio: "Reemplaza este texto con un resumen breve de la trayectoria, especialidad y enfoque profesional del integrante.",
    image: "/team/integrante-3.jpg",
  },
  {
    name: "Nombre Apellido",
    role: "Asociado",
    area: "Derecho Laboral",
    bio: "Reemplaza este texto con un resumen breve de la trayectoria, especialidad y enfoque profesional del integrante.",
    image: "/team/integrante-4.jpg",
  },
];
