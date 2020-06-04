import * as React from 'react'
import styles from './interaction.module.css'
import commonStyles from './common-styles.module.css'
import IndexLayout from '../../layouts'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/JA_Michael.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AlbersInteraction = () => {
  const data = useStaticQuery(query)
  return (
    <IndexLayout>
      <div className={commonStyles.wrapper}>
        <div className={`${styles.albersInteraction} ${styles.aot}`}>
          <div className={styles.inner}>
            <div className={styles.header}>
              <svg className={styles.title} viewBox="0 0 75 16">
                <text x="1.5" y="12">
                  Josef Albers
                </text>
              </svg>
              <p className={styles.subtitle}>Interaction</p>
            </div>

            <div className={`${styles.square} ${styles.squareOuter}`}>
              <div className={`${styles.square} ${styles.squareCenter}`}>
                <div className={`${styles.square} ${styles.squareInner}`}></div>
              </div>
            </div>

            <div className={styles.footer}>
              <p>Yale University Press</p>
            </div>
          </div>
        </div>
        <div
          className={`${commonStyles.caption} ${styles.albersInteractionNotes}`}
        >
          <p>
            <a
              href="https://davidzwirnerbooks.com/product/josef-albers-interaction"
              target="_blank"
              rel="noopener noreferrer"
            >
              Original
            </a>
          </p>
          <div className={commonStyles.captionImageWrap}>
            <Img fluid={data.fileName.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </IndexLayout>
  )
}

export default AlbersInteraction
