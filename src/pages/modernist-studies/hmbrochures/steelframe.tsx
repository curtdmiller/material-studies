import * as React from 'react'
import styled from '@emotion/styled'

const bg = '#c434a3'
const red = '#fd2a0d'

const SVG = styled.svg`
  background-color: ${bg};
  width: 200px;
  height: 440px;
  box-shadow: -10px 5px 12px #aaa;
  border-radius: 2px;
`

const Title = styled.text`
  font-family: 'Playfair Display', serif;
  font-size: 12px;
  fill: #333;
`

const SteelframeBrochure = () => {
  return (
    <SVG>
      <defs>
        <clipPath id="semi-circle-horizontal">
          <rect x="0" y="0" width="200" height="70" />
        </clipPath>
        <clipPath id="semi-circle-vertical">
          <rect x="0" y="0" width="100" height="140" />
        </clipPath>
      </defs>
      <rect x="0" y="275" width="200" height="220" fill={bg} />
      <g transform="translate(36,14) scale(0.93,0.93)">
        <rect x="0" y="0" width="52" height="52" fill="#fff" />
        <ellipse cx="26" cy="-14" rx="26" ry="60" fill={bg} />
        <ellipse cx="26" cy="56" rx="32" ry="8" fill={bg} />
        <Title x="64" y="40">
          Steelframe Seating
        </Title>
      </g>

      <g transform="translate(0,275)">
        <rect x="0" y="0" width="100%" height="175" fill={red} />
        <rect x="100" y="0" width="100" height="140" fill="#fff" />
        <circle cx="100" cy="70" r="70" fill="#fff" />
        <circle cx="100" cy="70" r="57" fill="#000" />
        <circle
          cx="100"
          cy="70"
          r="57"
          fill={bg}
          clip-path="url(#semi-circle-horizontal)"
        />
      </g>
      <g transform="translate(0,135)">
        <rect x="0" y="0" width="100" height="140" fill="#fff" />
        <circle cx="100" cy="70" r="70" fill="#fff" />
        <circle cx="100" cy="70" r="57" fill="#000" />
        <circle
          cx="100"
          cy="70"
          r="57.05"
          fill={red}
          clip-path="url(#semi-circle-vertical)"
        />
      </g>
    </SVG>
  )
}

export default SteelframeBrochure
