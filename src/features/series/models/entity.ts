interface ILesson {
  intro: string
}

export interface serieModel {
  id: string
  name: string
  lessons: ILesson[]
}
