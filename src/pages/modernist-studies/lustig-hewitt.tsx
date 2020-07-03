import * as React from 'react'
import styles from './lustig-hewitt.module.scss'
import commonStyles from './common-styles.module.css'
import IndexLayout from '../../layouts'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/lustig_bach.jpg" }) {
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

const LustigHewitt = () => {
  const data = useStaticQuery(query)
  return (
    <IndexLayout>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/moe5wud.css" />
      </Helmet>
      <HeaderWrapper>
        <Header>
          <h1>The Suites for Orchestra by J.S. Bach</h1>
          <p>Cover design: Alvin Lustig, 1952</p>
          <p>
            <a
              href="https://collection.cooperhewitt.org/objects/18694907/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </p>
        </Header>
      </HeaderWrapper>
      <div className={commonStyles.wrapper}>
        <div className={styles.lustigBach}>
          <div className={styles.inner}>
            <div className={styles.header}>
              <p>J.S.BACH</p>
            </div>
            <div className={styles.title}>
              <p>THE SUITES FOR ORCHESTRA</p>
            </div>
            <div className={styles.toc}>
              <ul>
                <li>
                  <span className={commonStyles.italic}>
                    Number One in C major
                  </span>
                </li>
                <li>
                  <span className={commonStyles.italic}>
                    Number Two in B minor
                  </span>{' '}
                  Jean-Pierre Rampal,{' '}
                  <span className={commonStyles.italic}>Flute</span>
                </li>
              </ul>
              <p>THE HEWITT ORCHESTRA</p>
              <div className={styles.footer}>
                <p>
                  &copy;HAYDN SOCIETY{' '}
                  <span className={commonStyles.italic}>
                    / Collection Discophiles Français
                  </span>{' '}
                  &nbsp;HSL-90{' '}
                  <span className={commonStyles.italic}>
                    Record 1 of Two Records
                  </span>
                </p>
              </div>
            </div>
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

export default LustigHewitt
