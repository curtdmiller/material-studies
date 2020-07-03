import * as React from 'react'
import styled from '@emotion/styled'

const red = '#ff7526'
const pink = '#ff70fc'

const SVG = styled.svg`
  background-color: ${pink};
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
const EamesLounge = () => (
  <SVG>
    <g id="logo" transform="translate(36,14) scale(0.93,0.93)">
      <rect x="0" y="0" width="52" height="52" fill="#fff" />
      <ellipse cx="26" cy="-14" rx="26" ry="60" fill={pink} />
      <ellipse cx="26" cy="56" rx="32" ry="8" fill={pink} />
      <g transform="translate(0,15)">
        <Title x="64" y="0">
          Eames lounge
        </Title>
        <Title x="64" y="14">
          chair and
        </Title>
        <Title x="64" y="28">
          aluminum group
        </Title>
      </g>
    </g>
    <g transform="translate(0,155)">
      <polygon points="0,122 200,122 100,0" fill="#fff" />
      <polygon
        fill={red}
        points="0,101.667 33.333,101.667 16.667,122"
        transform="translate(16.666,0)"
      />
      <polygon
        fill={red}
        points="0,101.667 33.333,101.667 16.667,122"
        transform="translate(50,0)"
      />
      <polygon
        fill={red}
        points="0,101.667 33.333,101.667 16.667,122"
        transform="translate(83.333,0)"
      />
      <polygon
        fill={red}
        points="0,101.667 33.333,101.667 16.667,122"
        transform="translate(116.666,0)"
      />
      <polygon
        fill={red}
        points="0,101.667 33.333,101.667 16.667,122"
        transform="translate(150,0)"
      />
      <g transform="translate(33.333,-20.333)">
        <polygon
          fill={pink}
          points="0,101.667 33.333,101.667 16.667,122"
          transform="translate(0,0)"
        />
        <polygon
          fill={pink}
          points="0,101.667 33.333,101.667 16.667,122"
          transform="translate(33.333,0)"
        />
        <polygon
          fill={pink}
          points="0,101.667 33.333,101.667 16.667,122"
          transform="translate(66.667,0)"
        />
        <polygon
          fill={pink}
          points="0,101.667 33.333,101.667 16.667,122"
          transform="translate(100,0)"
        />
      </g>
      <g transform="translate(50,-40.667)">
        <polygon
          fill={red}
          points="0,101.667 33.333,101.667 16.667,122"
          transform="translate(0,0)"
        />
        <polygon
          fill={red}
          points="0,101.667 33.333,101.667 16.667,122"
          transform="translate(33.333,0)"
        />
        <polygon
          fill={red}
          points="0,101.667 33.333,101.667 16.667,122"
          transform="translate(66.667,0)"
        />
      </g>
      <g transform="translate(66.667,-61)">
        <polygon
          fill={pink}
          points="0,101.667 33.333,101.667 16.667,122"
          transform="translate(0,0)"
        />
        <polygon
          fill={pink}
          points="0,101.667 33.333,101.667 16.667,122"
          transform="translate(33.333,0)"
        />
      </g>
      <g transform="translate(83.333,-81.333)">
        <polygon
          fill={red}
          points="0,101.667 33.333,101.667 16.667,122"
          transform="translate(0,0)"
        />
      </g>
    </g>
    <g transform="translate(0,277)">
      <rect x="0" y="0" width="200" height="163" fill={pink} />
      <polygon points="0,0 200,0 100,122" fill="#444" />
    </g>
  </SVG>
)

export default EamesLounge
