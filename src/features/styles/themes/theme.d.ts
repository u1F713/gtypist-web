import 'styled-components'

interface Color {
  code: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    isDark: Boolean
    background: string
    foreground: string
    cursor: string
    selection_background: string
    selection_foreground: string
    colors: readonly Color[]
  }
}
