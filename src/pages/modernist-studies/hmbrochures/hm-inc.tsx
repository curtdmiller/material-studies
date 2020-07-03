import * as React from 'react'
import styled from '@emotion/styled'

const bg = '#ff8cf0'

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

const HMInc = () => (
  <SVG>
    <g id="logo" transform="translate(36,14) scale(0.93,0.93)">
      <rect x="0" y="0" width="52" height="52" fill="#fff" />
      <ellipse cx="26" cy="-14" rx="26" ry="60" fill="#ff8cf0" />
      <ellipse cx="26" cy="56" rx="32" ry="8" fill="#ff8cf0" />
      <Title x="64" y="40">
        Herman Miller Inc.
      </Title>
    </g>
    <g transform="translate(0,145)">
      <rect x="0" y="0" width="100" height="295" fill="#333" />
      <rect x="100" y="0" width="100" height="295" fill="#ff7526" />
      <polygon points="0,0 200,0 200,295" fill="#fff" />
      <polygon points="200,0 200,295 100,147.5" fill="#ff8cf0" />
    </g>
  </SVG>
)

export default HMInc
