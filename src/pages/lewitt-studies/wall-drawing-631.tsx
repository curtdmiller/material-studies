import * as React from 'react'
import styled from '@emotion/styled'

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  & svg {
    width: 100%;
    height: 100%;
  }
`

const WallDrawing631 = () => {
  const [rotation, setRotation] = React.useState<number | null>(null)
  const [windowSize, setWindowSize] = React.useState<{
    width: number
    height: number
  }>({ width: 0, height: 0 })

  React.useEffect(() => {
    const angle = Math.atan(window.innerHeight / window.innerWidth)
    setRotation(angle * (180 / Math.PI))
    window.addEventListener('resize', () => {
      var width = window.innerWidth
      var height = window.innerHeight
      setWindowSize({ width, height })
    })
    return window.removeEventListener('resize', () => {
      var width = window.innerWidth
      var height = window.innerHeight
      setWindowSize({ width, height })
    })
  }, [])

  React.useEffect(() => {
    if (windowSize.width) {
      const angle = Math.atan(windowSize.height / windowSize.width)
      setRotation(angle * (180 / Math.PI))
    }
  }, [windowSize])

  return (
    <Root>
      <svg viewBox="0 0 1000 1000">
        <defs>
          <pattern
            id="horizontal"
            x="0"
            y="-20"
            width="1000"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <rect width="3000" height="40" fill="black" stroke="none" />
          </pattern>
          <pattern
            id="vertical"
            x="0"
            y="0"
            width="80"
            height="1000"
            patternUnits="userSpaceOnUse"
          >
            <rect width="40" height="1000" fill="black" stroke="none" />
          </pattern>
        </defs>
        {rotation != null && (
          <>
            <rect
              x="-1000"
              y="-500"
              width="3000"
              height="1000"
              fill="url(#horizontal)"
              style={{ transformOrigin: 'center center' }}
              transform={`rotate(${rotation})`}
            />
            <rect
              x="-1000"
              y="499"
              width="3000"
              height="1000"
              fill="url(#vertical)"
              style={{ transformOrigin: 'center center' }}
              transform={`rotate(${rotation})`}
            />
          </>
        )}
      </svg>
    </Root>
  )
}

export default WallDrawing631
