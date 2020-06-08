import * as React from 'react'
import styles from './ives-beethoven.module.scss'
import commonStyles from './common-styles.module.css'
import IndexLayout from '../../layouts'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/ives-beethoven.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IvesBeethoven = () => {
  const data = useStaticQuery(query)
  return (
    <IndexLayout>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/moe5wud.css" />
      </Helmet>
      <div className={commonStyles.wrapper}>
        <div className={styles.ivesBeethoven}>
          <div className={styles.inner}>
            <div className={styles.title}>
              <div>
                <p>BEETHOVEN</p>
                <p>YVES NAT piano</p>
              </div>
              <p>PIANO SONATAS</p>
            </div>
            <div className={styles.toc}>
              <ul>
                <li>OPUS 109 sonata no. 30 in E major</li>
                <li>OPUS 110 sonata no. 31 in A flat major</li>
                <li>OPUS 111 sonata no. 32 in C minor</li>
              </ul>
            </div>
          </div>
          <div className={styles.credits}>
            <p className={styles.label}>
              <span className={styles.copyright}>&copy;</span>HAYDN SOCIETY
            </p>
            <p className={styles.series}>Collection des Discophiles Français</p>
            <p className={styles.catalog}>HSL-110</p>
          </div>
        </div>
        <div className={commonStyles.caption}>
          <p>
            <a
              href="https://www.discogs.com/Beethoven-Yves-Nat-Piano-Sonatas-Opus-109-Sonata-No-30-In-E-Major-Opus-111-Sonata-No-31-In-A-Flat-Ma/release/10689817"
              target="_blank"
              rel="noopener noreferrer"
            >
              Original
            </a>{' '}
            - Norman Ives
          </p>
          <div className={commonStyles.captionImageWrap}>
            <Img fluid={data.fileName.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </IndexLayout>
  )
}

export default IvesBeethoven
