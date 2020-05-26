import * as React from 'react'
import styled from '@emotion/styled'

const Root = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  flex: 1;
  width: 80vw;
  margin: 20px 0;
  max-height: calc(100vw - 40px);
  & svg {
    width: 100%;
    & line {
      stroke: black;
    }
  }
`

const WallDrawing1180 = () => {
  const renderLines = () => {
    const radius = 2000
    const lines = []

    for (let i = 0; i < 10000; i++) {
      // random angle in radians
      var angle1 = Math.random() * Math.PI * 2
      var angle2 = Math.random() * Math.PI * 2
      // calculate coordinates on circle at angle
      var x1 = radius * Math.sin(angle1)
      var y1 = radius * Math.cos(angle1)
      var x2 = radius * Math.sin(angle2)
      var y2 = radius * Math.cos(angle2)

      lines.push(
        <line
          key={i}
          x1={String(x1)}
          y1={String(y1)}
          x2={String(x2)}
          y2={String(y2)}
        />
      )
    }
    return lines
  }

  return (
    <Root>
      <Wrapper>
        <svg id="canvas" viewBox="-2001 -2001 4002 4002">
          <circle
            cx="0"
            cy="0"
            r="2000"
            fill="white"
            stroke="black"
            strokeWidth="1"
          />
          {renderLines()}
        </svg>
      </Wrapper>
    </Root>
  )
}

export default WallDrawing1180
