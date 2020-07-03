import * as React from 'react'
import styled from '@emotion/styled'

const bg = '#2ed5ff'
const green = '#2bffa0'

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

const EamesChairs = () => (
  <SVG>
    <g transform="translate(0,220)">
      <rect x="0" y="0" width="200" height="220" fill={green} />
      <g transform="rotate(-60) translate(-200, 55)">
        <rect x="0" y="0" width="1000" height="18" fill="#fff" />
        <rect x="0" y="36" width="1000" height="18" fill="#fff" />
        <rect x="0" y="72" width="1000" height="18" fill="#fff" />
        <rect x="0" y="108" width="1000" height="18" fill="#fff" />
        <rect x="0" y="144" width="1000" height="18" fill="#fff" />
        <rect x="0" y="180" width="1000" height="18" fill="#fff" />
        <rect x="0" y="216" width="1000" height="18" fill="#fff" />
      </g>
    </g>
    <rect x="0" y="0" width="200" height="220" fill={bg} />
    <g id="logo" transform="translate(36,14) scale(0.93,0.93)">
      <rect x="0" y="0" width="52" height="52" fill="#fff" />
      <ellipse cx="26" cy="-14" rx="26" ry="60" fill={bg} />
      <ellipse cx="26" cy="56" rx="32" ry="8" fill={bg} />
      <Title x="64" y="26">
        Eameschairs
      </Title>
      <Title x="64" y="40">
        for the home
      </Title>
    </g>
  </SVG>
)

export default EamesChairs
