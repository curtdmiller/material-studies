import * as React from 'react'
import styled from '@emotion/styled'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  & svg {
    margin: 0;
    padding: 0;
    background-color: black;
    width: 100%;
  }
  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-content: center;
  }
`
const WallDrawing335 = () => (
  <Root>
    <svg viewBox="0 0 400 400">
      <defs>
        <pattern id="pattern-bg" x="0" y="0" width=".01408" height="1">
          <line
            x1="0"
            y1="-1000"
            x2="0"
            y2="1400"
            stroke="white"
            stroke-width="2"
          />
        </pattern>
        <pattern id="pattern-shape" x="0" y="0" width="1" height=".01815">
          <rect fill="black" width="100%" height="100%" />
          <line x1="0" y1="0" x2="400" y2="0" stroke="white" stroke-width="2" />
        </pattern>
      </defs>
      <rect x="0" y="-200" width="100%" height="800" fill="url(#pattern-bg)" />
      <rect
        x="51.5"
        y="51"
        width="298"
        height="298"
        fill="url(#pattern-shape)"
        stroke="white"
      />
    </svg>
    <svg viewBox="0 0 400 400">
      <rect x="0" y="-200" width="100%" height="800" fill="url(#pattern-bg)" />
      <circle
        cx="200.5"
        cy="200"
        r="149"
        fill="url(#pattern-shape)"
        stroke="white"
      />
    </svg>
  </Root>
)

export default WallDrawing335
