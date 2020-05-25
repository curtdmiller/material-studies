import * as React from 'react'
import Cube from './Cube'
import styled from '@emotion/styled'

interface Props {
  cube: boolean
  sides: {
    outer: [boolean, boolean, boolean, boolean, boolean, boolean]
    inner: [boolean, boolean, boolean, boolean, boolean, boolean]
  } | null
}

const CellContainer = styled.div`
  width: 7.14%;
  border-right: 1px solid #bbb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:last-child {
    border-right: none;
  }
  & svg {
    margin: 10%;
    & line {
      stroke: #555;
      stroke-width: 4;
      stroke-linecap: round;
      transition: all 200ms;
    }
    & .bg {
      stroke-width: 2;
      stroke: transparent;
    }
    &:hover {
      line {
        stroke: red;
      }
      .bg {
        stroke: #ccc;
      }
    }
  }
`

const Cell = ({ cube, sides }: Props) => (
  <CellContainer>
    {cube && sides && <Cube outer={sides.outer} inner={sides.inner} />}
  </CellContainer>
)

export default Cell
