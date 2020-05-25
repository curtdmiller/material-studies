import * as React from 'react'
import styled from '@emotion/styled'

const DescriptionRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 0;
  padding-top: 100%;
  position: relative;
`
const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`
const P = styled.p`
  text-align: center;
  margin: 0;
  font-family: neusa-next-std-compact, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 4vw;
  letter-spacing: 1px;
  line-height: 130%;
  @media (min-width: 992px) {
    font-size: 3em;
  }
`

const Description = () => {
  return (
    <DescriptionRoot>
      <Wrapper>
        <P>SOL LEWITT</P>
        <P>WALL DRAWINGS &amp; STRUCTURES</P>
        <P>THE LOCATION OF SIX GEOMETRIC FIGURES:</P>
        <P>VARIATIONS OF INCOMPLETE OPEN CUBES</P>
        <P>THE JOHN WEBER GALLERY</P>
        <P>420 W. BROADWAY NEW YORK</P>
        <P>OCTOBER 26 - NOVEMBER 20, 1974</P>
      </Wrapper>
    </DescriptionRoot>
  )
}

export default Description
