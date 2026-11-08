export type NowBlock = { title: string; text: string };
export type DiaryEntry = { date: string; title: string; text: string };

// TODO: sustituir los textos y fechas de ejemplo por avances reales.
export const nowContent = {
  label: 'Una parada en el camino',
  title: 'Ahora mismo',
  description: 'Un pequeño diario de lo que ocupa mi tiempo y mi curiosidad.',
  lastUpdated: '2026-11-08',
  updatedLabel: 'Última actualización',
  diaryTitle: 'Últimas notas',
  sample: 'Notas de ejemplo, pendientes de actualizar.',
};

export const nowBlocks: NowBlock[] = [
  { title: 'Qué estudio', text: 'Estoy en segundo de Ingeniería Informática, aprendiendo paso a paso incluso cuando algo cuesta.' },
  { title: 'En qué trabajo', text: 'Estoy construyendo este portfolio para contar mi recorrido de una forma más personal.' },
  { title: 'Qué aprendo', text: 'Sigo aprendiendo a crear experiencias web más claras y accesibles.' },
  { title: 'Próximo cruce', text: 'Quiero seguir dando forma a mis ideas y terminarlas con calma.' },
];

export const diaryEntries: DiaryEntry[] = [
  { date: '2026-11-08', title: 'Una página más personal', text: 'Estoy dando forma a este espacio para compartir también el camino.' },
  { date: '2026-11-01', title: 'Entre clases y código', text: 'Intento encontrar tiempo para practicar sin dejar de lado las asignaturas.' },
  { date: '2026-10-25', title: 'Seguir aprendiendo', text: 'Me recuerdo que avanzar también puede ser ir poco a poco.' },
];
