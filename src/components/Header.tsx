import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0
    ${(props: { headerWidth: 'wide' | 'narrow' | undefined }) =>
      props.headerWidth === 'wide'
        ? '5%'
        : dimensions.containerPadding + 'rem'};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin-left: ${(props: { headerWidth: 'wide' | 'narrow' | undefined }) =>
    props.headerWidth === 'wide' && '0'};
`

const HomepageLink = styled(Link)`
  color: ${colors.gray.dark};
  font-size: 1.5rem;
  font-weight: 500;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
  title: string
  headerWidth: 'wide' | 'narrow' | undefined
}

const Header: React.FC<HeaderProps> = ({ title, headerWidth }) => (
  <StyledHeader headerWidth={headerWidth}>
    <HeaderInner headerWidth={headerWidth}>
      <HomepageLink to="/">{title}</HomepageLink>
    </HeaderInner>
  </StyledHeader>
)

export default Header
