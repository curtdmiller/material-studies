import * as React from 'react'
import IndexLayout from '../../layouts'
import { Helmet } from 'react-helmet'
import Container from '../../components/Container'
import SteelframeBrochure from './hmbrochures/steelframe'
import EamesLounge from './hmbrochures/eames-lounge'
import styled from '@emotion/styled'
import EamesChairs from './hmbrochures/eameschairs'
import Textiles from './hmbrochures/textiles'
import HMInc from './hmbrochures/hm-inc'
import Page from '../../components/Page'

const BrochureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  margin: 24px;
  @media (min-width: 510px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    row-gap: 40px;
  }
  @media (min-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 60px;
    row-gap: 60px;
  }
`

const SVGWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Header = styled.div`
  margin-bottom: 5em;
`

const HermanMillerBrochures = () => {
  return (
    <IndexLayout>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700&display=swap"
        />
      </Helmet>
      <Page>
        <Container>
          <Header>
            <h1>Hermann Miller Brochures in SVG</h1>
            <p>
              George Nelson, Irving Harper, Don Ervin, Tony Zamora and Dick
              Schiffer, 1960
            </p>
            <p>
              <a
                href="http://www.javiergd.com/blog/?p=2341"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </p>
          </Header>
          <BrochureContainer>
            <SVGWrapper>
              <HMInc />
            </SVGWrapper>
            <SVGWrapper>
              <EamesChairs />
            </SVGWrapper>
            <SVGWrapper>
              <SteelframeBrochure />
            </SVGWrapper>
            <SVGWrapper>
              <EamesLounge />
            </SVGWrapper>
            <SVGWrapper>
              <Textiles />
            </SVGWrapper>
          </BrochureContainer>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default HermanMillerBrochures
