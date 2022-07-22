interface ILesson {
  intro: string
  states: Array<{ description: string; drill: string }>
}

export interface serieModel {
  id: string
  name: string
  lessons: ILesson[]
}
