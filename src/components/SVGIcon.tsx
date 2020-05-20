import * as React from 'react'
import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
  fontSize?: string
  margin?: string
}

const SVGContainer = styled.div(
  {
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  ({ fontSize, margin }: Props) => ({
    fontSize: fontSize || '1em',
    margin: margin || '0 10px 0 0'
  })
)

const SVGIcon: React.FC<Props> = ({ children, fontSize }: Props) => {
  return <SVGContainer fontSize={fontSize}>{children}</SVGContainer>
}

export default SVGIcon
