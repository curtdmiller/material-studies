import * as React from 'react'
import styled from '@emotion/styled'

const Root = styled.main`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const SVGWrapper = styled.div`
  height: 100%;
  & svg {
    position: relative;
    background-color: black;
    height: 125%;
    circle:nth-of-type(2n) {
      stroke: white;
      stroke-width: 0;
      /* animation-name: breathe;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    */
    }
  }
  @keyframes breathe {
    from {
      stroke-width: 0;
    }
    to {
      stroke-width: 3;
    }
  }
`

const WallDrawing462: React.FC = () => (
  <Root>
    <SVGWrapper>
      <svg viewBox="-400 0 800 400">
        <circle cx="0" cy="0" r="800" fill="black" />
        <circle cx="0" cy="0" r="790" fill="white" />
        <circle cx="0" cy="0" r="780" fill="black" />
        <circle cx="0" cy="0" r="770" fill="white" />
        <circle cx="0" cy="0" r="760" fill="black" />
        <circle cx="0" cy="0" r="750" fill="white" />
        <circle cx="0" cy="0" r="740" fill="black" />
        <circle cx="0" cy="0" r="730" fill="white" />
        <circle cx="0" cy="0" r="720" fill="black" />
        <circle cx="0" cy="0" r="710" fill="white" />
        <circle cx="0" cy="0" r="700" fill="black" />
        <circle cx="0" cy="0" r="690" fill="white" />
        <circle cx="0" cy="0" r="680" fill="black" />
        <circle cx="0" cy="0" r="670" fill="white" />
        <circle cx="0" cy="0" r="660" fill="black" />
        <circle cx="0" cy="0" r="650" fill="white" />
        <circle cx="0" cy="0" r="640" fill="black" />
        <circle cx="0" cy="0" r="630" fill="white" />
        <circle cx="0" cy="0" r="620" fill="black" />
        <circle cx="0" cy="0" r="610" fill="white" />
        <circle cx="0" cy="0" r="600" fill="black" />
        <circle cx="0" cy="0" r="590" fill="white" />
        <circle cx="0" cy="0" r="580" fill="black" />
        <circle cx="0" cy="0" r="570" fill="white" />
        <circle cx="0" cy="0" r="560" fill="black" />
        <circle cx="0" cy="0" r="550" fill="white" />
        <circle cx="0" cy="0" r="540" fill="black" />
        <circle cx="0" cy="0" r="530" fill="white" />
        <circle cx="0" cy="0" r="520" fill="black" />
        <circle cx="0" cy="0" r="510" fill="white" />
        <circle cx="0" cy="0" r="500" fill="black" />
        <circle cx="0" cy="0" r="490" fill="white" />
        <circle cx="0" cy="0" r="480" fill="black" />
        <circle cx="0" cy="0" r="470" fill="white" />
        <circle cx="0" cy="0" r="460" fill="black" />
        <circle cx="0" cy="0" r="450" fill="white" />
        <circle cx="0" cy="0" r="440" fill="black" />
        <circle cx="0" cy="0" r="430" fill="white" />
        <circle cx="0" cy="0" r="420" fill="black" />
        <circle cx="0" cy="0" r="410" fill="white" />
        <circle cx="0" cy="0" r="400" fill="black" />
        <circle cx="0" cy="0" r="390" fill="white" />
        <circle cx="0" cy="0" r="380" fill="black" />
        <circle cx="0" cy="0" r="370" fill="white" />
        <circle cx="0" cy="0" r="360" fill="black" />
        <circle cx="0" cy="0" r="350" fill="white" />
        <circle cx="0" cy="0" r="340" fill="black" />
        <circle cx="0" cy="0" r="330" fill="white" />
        <circle cx="0" cy="0" r="320" fill="black" />
        <circle cx="0" cy="0" r="310" fill="white" />
        <circle cx="0" cy="0" r="300" fill="black" />
        <circle cx="0" cy="0" r="290" fill="white" />
        <circle cx="0" cy="0" r="280" fill="black" />
        <circle cx="0" cy="0" r="270" fill="white" />
        <circle cx="0" cy="0" r="260" fill="black" />
        <circle cx="0" cy="0" r="250" fill="white" />
        <circle cx="0" cy="0" r="240" fill="black" />
        <circle cx="0" cy="0" r="230" fill="white" />
        <circle cx="0" cy="0" r="220" fill="black" />
        <circle cx="0" cy="0" r="210" fill="white" />
        <circle cx="0" cy="0" r="200" fill="black" />
        <circle cx="0" cy="0" r="190" fill="white" />
        <circle cx="0" cy="0" r="180" fill="black" />
        <circle cx="0" cy="0" r="170" fill="white" />
        <circle cx="0" cy="0" r="160" fill="black" />
        <circle cx="0" cy="0" r="150" fill="white" />
        <circle cx="0" cy="0" r="140" fill="black" />
        <circle cx="0" cy="0" r="130" fill="white" />
        <circle cx="0" cy="0" r="120" fill="black" />
        <circle cx="0" cy="0" r="110" fill="white" />
        <circle cx="0" cy="0" r="100" fill="black" />
        <circle cx="0" cy="0" r="90" fill="white" />
        <circle cx="0" cy="0" r="80" fill="black" />
        <circle cx="0" cy="0" r="70" fill="white" />
        <circle cx="0" cy="0" r="60" fill="black" />
        <circle cx="0" cy="0" r="50" fill="white" />
        <circle cx="0" cy="0" r="40" fill="black" />
        <circle cx="0" cy="0" r="30" fill="white" />
        <circle cx="0" cy="0" r="20" fill="black" />
        <circle cx="0" cy="0" r="10" fill="white" />
      </svg>
    </SVGWrapper>
  </Root>
)

export default WallDrawing462
