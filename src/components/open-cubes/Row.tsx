import * as React from 'react'
import Cell from './Cell'
import { Cube } from './Grid'
import styled from '@emotion/styled'

interface Props {
  cells: Cube[]
}

const RowRoot = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 6%;
  border-bottom: 1px solid #bbb;
`

const Row = ({ cells }: Props) => {
  return (
    <RowRoot>
      {cells.map((cell, i) => (
        <Cell cube={cell.cube} sides={cell.sides} key={i} />
      ))}
    </RowRoot>
  )
}

export default Row
