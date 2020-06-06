import * as React from 'react'
import styles from './albers-color.module.css'
import commonStyles from './common-styles.module.css'
import IndexLayout from '../../layouts'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
  query {
    fileName: file(
      relativePath: { eq: "images/amazon-albers-interactionOfColor.jpg" }
    ) {
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
        <div className={styles.albersColor}>
          <div className={styles.header}>
            <div>
              <p className={styles.author}>Josef Albers</p>
            </div>
            <div>
              <p className={styles.title}>Interaction of Color</p>
              <p className={styles.subtitle}>50th Anniversary Edition</p>
            </div>
          </div>
          <div className={styles.boxes}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
          </div>
        </div>
        <div className={commonStyles.caption}>
          <p>
            <a
              href="https://www.amazon.com/Interaction-Color-Anniversary-Josef-Albers/dp/0300179359/ref=sr_1_2?keywords=josef+albers+interaction&qid=1570027756&sr=8-2"
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
