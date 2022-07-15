export interface MenuState {
  selected: string
  description: string
  options: string[]
}

export const defaultValue: MenuState = {
  selected: '',
  description: '',
  options: []
}
