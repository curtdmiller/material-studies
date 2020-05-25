import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import IndexLayout from '../../layouts'
import Page from '../../components/Page'
import Container from '../../components/Container'
import Grid from '../../components/open-cubes/Grid'
import { data } from '../../components/open-cubes/data'
import Description from '../../components/open-cubes/Description'

export const borderStyle = '1px solid #bbb'

const Excerpt = styled.div`
  width: 100%;
  background-color: #fffcf2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.5%;
`
const TableContainer = styled.div`
  width: 100%;
  border: ${borderStyle};
  &:first-child {
    border-bottom: none;
    margin-bottom: 3.5%;
  }
`
const HeaderRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6%;
  border-bottom: ${borderStyle};
`
const Title = styled.h1`
  margin: 0;
  position: relative;
  text-transform: uppercase;
  font-family: 'neusa-next-std-compact', sans-serif;
  font-weight: 700;
  font-size: 4.5vw;
  letter-spacing: 1px;
  @media screen and (min-width: 992px) {
    font-size: 3em;
  }
`
const Footer = styled.div`
  font-family: sans-serif;
  margin-top: 32px;
  & hr {
    color: #ccc;
  }
  & p,
  & a {
    max-width: 30em;
    font-size: 0.75em;
    line-height: 150%;
  }
`

const OpenCubesPage = () => (
  <IndexLayout>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/fmr8wjv.css" />
    </Helmet>
    <Page>
      <Container>
        <Excerpt>
          <TableContainer>
            <HeaderRow>
              <Title>Variations of Incomplete Open Cubes</Title>
            </HeaderRow>
            <Grid rows={data} />
          </TableContainer>
          <TableContainer>
            <Description />
          </TableContainer>
        </Excerpt>
        <Footer>
          <p>
            <cite>
              Poster, Exhibition Poster: Sol Lewitt, Wall Drawings & Structures,
              John Weber Gallery, New York, 1974; offset lithograph; 38.3 x 76.2
              cm (15 1/16 x 30 in. ); Museum purchase from General Acquisitions
              Endowment and Smithsonian Institution Collections Acquisition
              Program Funds; 1999-45-16
            </cite>
          </p>
          <p>Cooper Hewitt, Smithsonian Design Museum:</p>
          <a href="http://cprhw.tt/o/2DGzD/">http://cprhw.tt/o/2DGzD/</a>
        </Footer>
      </Container>
    </Page>
  </IndexLayout>
)

export default OpenCubesPage
