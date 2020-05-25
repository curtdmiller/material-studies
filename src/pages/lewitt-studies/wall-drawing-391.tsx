import * as React from 'react'
import styled from '@emotion/styled'

const Root = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  padding: 0;
  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    padding: 2.5%;
  }
`
const SVGWrapper = styled.div`
  width: 100%;
  padding: 10%;
  padding-bottom: 0;
  @media screen and (min-width: 900px) {
    padding: 2.5%;
    & svg {
      width: 100%;
      height: auto;
    }
  }
`

const WallDrawing391 = () => {
  return (
    <Root>
      <SVGWrapper>
        <svg viewBox="0 0 1700 1700">
          <defs>
            <clipPath id="clipSquare">
              <rect width="700" height="700" />
            </clipPath>
          </defs>
          <rect width="1700" height="1700" />
          <rect x="100" y="100" width="100" height="700" fill="#fff" />
          <rect x="300" y="100" width="100" height="700" fill="#fff" />
          <rect x="500" y="100" width="100" height="700" fill="#fff" />
          <rect x="700" y="100" width="100" height="700" fill="#fff" />
          <rect x="900" y="100" width="700" height="100" fill="#fff" />
          <rect x="900" y="300" width="700" height="100" fill="#fff" />
          <rect x="900" y="500" width="700" height="100" fill="#fff" />
          <rect x="900" y="700" width="700" height="100" fill="#fff" />
          <g clipPath="url(#clipSquare)" transform="translate(100,900)">
            <g
              style={{ transformOrigin: 'top left' }}
              transform="rotate(45) translate(-55,-550)"
            >
              <rect width="100" height="1000" fill="#fff" x="0" y="0" />
              <rect width="100" height="1000" fill="#fff" x="200" y="0" />
              <rect width="100" height="1000" fill="#fff" x="400" y="0" />
              <rect width="100" height="1000" fill="#fff" x="600" y="0" />
              <rect width="100" height="1000" fill="#fff" x="800" y="0" />
              <rect width="100" height="1000" fill="#fff" x="1000" y="0" />
            </g>
          </g>
          <g clipPath="url(#clipSquare)" transform="translate(900,900)">
            <g
              style={{ transformOrigin: 'top left' }}
              transform="rotate(-45) translate(-550)"
            >
              <rect width="100" height="1000" fill="#fff" x="0" y="0" />
              <rect width="100" height="1000" fill="#fff" x="200" y="0" />
              <rect width="100" height="1000" fill="#fff" x="400" y="0" />
              <rect width="100" height="1000" fill="#fff" x="600" y="0" />
              <rect width="100" height="1000" fill="#fff" x="800" y="0" />
              <rect width="100" height="1000" fill="#fff" x="1000" y="0" />
            </g>
          </g>
        </svg>
      </SVGWrapper>
      <SVGWrapper>
        <svg viewBox="0 0 1700 1700">
          <defs>
            <clipPath id="clipSquare">
              <rect width="700" height="700" />
            </clipPath>
          </defs>
          <rect width="1700" height="1700" />
          <rect x="100" y="100" width="100" height="700" fill="#fff" />
          <rect x="300" y="100" width="100" height="700" fill="#fff" />
          <rect x="500" y="100" width="100" height="700" fill="#fff" />
          <rect x="700" y="100" width="100" height="700" fill="#fff" />

          <rect x="900" y="100" width="700" height="700" fill="#ff0" />
          <rect x="900" y="100" width="700" height="100" fill="#fff" />
          <rect x="900" y="300" width="700" height="100" fill="#fff" />
          <rect x="900" y="500" width="700" height="100" fill="#fff" />
          <rect x="900" y="700" width="700" height="100" fill="#fff" />
          <g clipPath="url(#clipSquare)" transform="translate(100,900)">
            <rect width="1000" height="1000" fill="#f00" x="-100" y="-100" />
            <g
              style={{ transformOrigin: 'top left' }}
              transform="rotate(45) translate(-55,-550)"
            >
              <rect width="100" height="1000" fill="#fff" x="0" y="0" />
              <rect width="100" height="1000" fill="#fff" x="200" y="0" />
              <rect width="100" height="1000" fill="#fff" x="400" y="0" />
              <rect width="100" height="1000" fill="#fff" x="600" y="0" />
              <rect width="100" height="1000" fill="#fff" x="800" y="0" />
              <rect width="100" height="1000" fill="#fff" x="1000" y="0" />
            </g>
          </g>
          <g clipPath="url(#clipSquare)" transform="translate(900,900)">
            <rect width="1000" height="1000" fill="#00f" x="-100" y="-100" />
            <g
              style={{ transformOrigin: 'top left' }}
              transform="rotate(-45) translate(-550)"
            >
              <rect width="100" height="1000" fill="#fff" x="0" y="0" />
              <rect width="100" height="1000" fill="#fff" x="200" y="0" />
              <rect width="100" height="1000" fill="#fff" x="400" y="0" />
              <rect width="100" height="1000" fill="#fff" x="600" y="0" />
              <rect width="100" height="1000" fill="#fff" x="800" y="0" />
              <rect width="100" height="1000" fill="#fff" x="1000" y="0" />
            </g>
          </g>
        </svg>
      </SVGWrapper>
    </Root>
  )
}

export default WallDrawing391
