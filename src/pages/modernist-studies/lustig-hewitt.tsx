import * as React from 'react'
import styles from './lustig-hewitt.module.scss'
import commonStyles from './common-styles.module.css'
import IndexLayout from '../../layouts'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'

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

const LustigHewitt = () => {
  const data = useStaticQuery(query)
  return (
    <IndexLayout>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/moe5wud.css" />
      </Helmet>
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
          <p>
            <a
              href="https://collection.cooperhewitt.org/objects/18694907/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Original
            </a>{' '}
            - Alvin Lustig
          </p>
          <div className={commonStyles.captionImageWrap}>
            <Img fluid={data.fileName.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </IndexLayout>
  )
}

export default LustigHewitt
