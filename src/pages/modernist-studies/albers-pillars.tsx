import * as React from 'react'
import styles from './pillars.module.scss'
import commonStyles from './common-styles.module.css'
import IndexLayout from '../../layouts'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import clsx from 'clsx'
import styled from '@emotion/styled'

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/ja-pillars.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HeaderWrapper = styled.div`
  padding: 1.5em;
`

const Header = styled.div`
  margin: 0 auto;
  width: auto;
  max-width: 60em;
  p {
    margin: 0;
    a {
      font-style: italic;
    }
  }
`

const ProvocativePercussion = () => {
  const data = useStaticQuery(query)
  return (
    <IndexLayout>
      <HeaderWrapper>
        <Header>
          <h1>Pillars</h1>
          <p>Josef Albers, Screenprint, 1970</p>
          <p>
            <a
              href="https://www.artic.edu/artworks/37068/mma-pillars-1928"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </p>
        </Header>
      </HeaderWrapper>
      <div className={commonStyles.wrapper}>
        <div className={styles.albersPillars}>
          <div className={styles.inner}>
            <div className={styles.imageBlock}>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col5, styles.black)}></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col5, styles.black)}></div>
                <div
                  className={clsx(styles.col15, styles.push3, styles.black)}
                ></div>
                <div className={clsx(styles.col2, styles.white)}></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col5, styles.black)}></div>
                <div
                  className={clsx(styles.col3, styles.white, styles.push1)}
                ></div>
                <div className={clsx(styles.col15, styles.black)}></div>
                <div className={clsx(styles.col1, styles.white)}></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col5, styles.black)}></div>
                <div
                  className={clsx(styles.col15, styles.push3, styles.black)}
                ></div>
                <div className={clsx(styles.col2, styles.white)}></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col5, styles.black)}></div>
                <div
                  className={clsx(styles.col3, styles.white, styles.push1)}
                ></div>
                <div className={clsx(styles.col15, styles.black)}></div>
                <div className={clsx(styles.col1, styles.white)}></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col5, styles.white)}></div>
                <div
                  className={clsx(styles.col9, styles.black, styles.push2)}
                ></div>
                <div className={clsx(styles.col1, styles.white)}></div>
                <div
                  className={clsx(styles.col2, styles.white, styles.push5)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col5, styles.black)}></div>
                <div
                  className={clsx(styles.col3, styles.white, styles.push1)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push4)}
                ></div>
                <div
                  className={clsx(styles.col5, styles.white, styles.push4)}
                ></div>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col1, styles.white)}></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col5, styles.white)}></div>
                <div
                  className={clsx(styles.col5, styles.black, styles.push2)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.white, styles.push4)}
                ></div>
                <div
                  className={clsx(styles.col2, styles.white, styles.push5)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col5, styles.black)}></div>
                <div
                  className={clsx(styles.col3, styles.white, styles.push1)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push4)}
                ></div>
                <div
                  className={clsx(styles.col5, styles.white, styles.push4)}
                ></div>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col1, styles.white)}></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col5, styles.white)}></div>
                <div
                  className={clsx(styles.col5, styles.black, styles.push2)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.white, styles.push4)}
                ></div>
                <div
                  className={clsx(styles.col2, styles.white, styles.push5)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col5, styles.black)}></div>
                <div
                  className={clsx(styles.col3, styles.white, styles.push1)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push4)}
                ></div>
                <div
                  className={clsx(styles.col5, styles.white, styles.push4)}
                ></div>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col1, styles.white)}></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col5, styles.white)}></div>
                <div
                  className={clsx(styles.col5, styles.black, styles.push2)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.white, styles.push4)}
                ></div>
                <div
                  className={clsx(styles.col2, styles.white, styles.push5)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col5, styles.black)}></div>
                <div
                  className={clsx(styles.col3, styles.white, styles.push1)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push4)}
                ></div>
                <div
                  className={clsx(styles.col5, styles.white, styles.push4)}
                ></div>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col1, styles.white)}></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col5, styles.white)}></div>
                <div
                  className={clsx(styles.col5, styles.black, styles.push2)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.white, styles.push4)}
                ></div>
                <div
                  className={clsx(styles.col2, styles.white, styles.push5)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col5, styles.black)}></div>
                <div
                  className={clsx(styles.col3, styles.white, styles.push1)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push4)}
                ></div>
                <div
                  className={clsx(styles.col5, styles.white, styles.push4)}
                ></div>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col1, styles.white)}></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col5, styles.white)}></div>
                <div
                  className={clsx(styles.col5, styles.black, styles.push2)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.white, styles.push4)}
                ></div>
                <div
                  className={clsx(styles.col2, styles.white, styles.push5)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col5, styles.black)}></div>
                <div
                  className={clsx(styles.col3, styles.white, styles.push1)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push4)}
                ></div>
                <div
                  className={clsx(styles.col5, styles.white, styles.push4)}
                ></div>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col1, styles.white)}></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col5, styles.white)}></div>
                <div
                  className={clsx(styles.col5, styles.black, styles.push2)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.white, styles.push4)}
                ></div>
                <div
                  className={clsx(styles.col2, styles.white, styles.push5)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col5, styles.black)}></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push8)}
                ></div>
                <div
                  className={clsx(styles.col5, styles.white, styles.push4)}
                ></div>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col1, styles.white)}></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col5, styles.white)}></div>
                <div
                  className={clsx(styles.col5, styles.black, styles.push2)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.white, styles.push4)}
                ></div>
                <div
                  className={clsx(styles.col2, styles.white, styles.push5)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col5, styles.black)}></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push8)}
                ></div>
                <div
                  className={clsx(styles.col5, styles.white, styles.push4)}
                ></div>
                <div className={clsx(styles.col1, styles.black)}></div>
                <div className={clsx(styles.col1, styles.white)}></div>
              </div>
              <div className={clsx(styles.row, styles.white)}>
                <div className={clsx(styles.col1, styles.red)}></div>
                <div
                  className={clsx(styles.col5, styles.black, styles.push7)}
                ></div>
                <div
                  className={clsx(styles.col5, styles.red, styles.push5)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.white)}>
                <div className={clsx(styles.col1, styles.red)}></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push12)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push9)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.white)}>
                <div className={clsx(styles.col1, styles.red)}></div>
                <div
                  className={clsx(styles.col5, styles.black, styles.push7)}
                ></div>
                <div
                  className={clsx(styles.col5, styles.red, styles.push5)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.white)}>
                <div className={clsx(styles.col1, styles.red)}></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push12)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push9)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.white)}>
                <div className={clsx(styles.col1, styles.red)}></div>
                <div
                  className={clsx(styles.col5, styles.black, styles.push7)}
                ></div>
                <div
                  className={clsx(styles.col5, styles.red, styles.push5)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.white)}>
                <div className={clsx(styles.col1, styles.red)}></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push12)}
                ></div>
                <div
                  className={clsx(styles.col1, styles.black, styles.push9)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col13, styles.black)}></div>
                <div
                  className={clsx(styles.col2, styles.white, styles.push10)}
                ></div>
              </div>
              <div className={clsx(styles.row, styles.red)}>
                <div className={clsx(styles.col13, styles.black)}></div>
                <div
                  className={clsx(styles.col5, styles.white, styles.push5)}
                ></div>
                <div className={clsx(styles.col1, styles.black)}></div>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <p>The aim of life is living creatures</p>
            <p>The aim of art is living creations&nbsp;&nbsp;&nbsp;J.A.</p>
            <p>JOSEF ALBERS, PILLARS, 1928</p>
            <p>
              In Commemoration of the One Hundredth Anniversary of The
              Metropolitan Museum of Art
            </p>
          </div>
        </div>
        <div className={commonStyles.caption}>
          <div className={commonStyles.captionImageWrap}>
            <Img fluid={data.fileName.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </IndexLayout>
  )
}

export default ProvocativePercussion
