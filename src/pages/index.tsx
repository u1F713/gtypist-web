import { FunctionComponent, useEffect, useRef } from 'react'
import { useInputsKeys } from '~/features/console/inputs'
import Default from '~/layouts/default'
// import { useSeries } from '~/features/series/state/useSeries'
// import Display from '~/layouts/display'

const IndexPage: FunctionComponent = () => {
  // const { series } = useSeries()
  // const lessonId = useMemo(() => series.entities[series.ids[0]]?.id, [series])

  const pRef = useRef<HTMLParagraphElement>(null)
  const { inputstate, handleInputKey } = useInputsKeys()

  useEffect(() => {
    globalThis.document.addEventListener('keypress', handleInputKey)

    if (pRef.current != null) {
      pRef.current.textContent = `${pRef.current.textContent ?? ''}${inputstate.key}`
    }

    return () => globalThis.document.removeEventListener('keypress', handleInputKey)
  }, [inputstate])

  return (
    <Default>
      <p style={{ whiteSpace: 'pre-line' }} ref={pRef} />
      {/* <Display id={lessonId?.toString() ?? '0'} /> */}
    </Default>
  )
}

export default IndexPage
