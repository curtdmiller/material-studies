import * as React from 'react'
import Row from './Row'

export interface Cube {
  cube: boolean
  sides: {
    outer: [boolean, boolean, boolean, boolean, boolean, boolean]
    inner: [boolean, boolean, boolean, boolean, boolean, boolean]
  } | null
}

interface Props {
  rows: Cube[][]
}

const Grid = ({ rows }: Props) => {
  return (
    <React.Fragment>
      {rows.map((row, index) => {
        return <Row cells={row} key={index} />
      })}
    </React.Fragment>
  )
}

export default Grid
