import * as React from 'react'
import styles from './interaction.module.css'
import commonStyles from './common-styles.module.css'
import IndexLayout from '../../layouts'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

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

const AlbersInteraction = () => {
  const data = useStaticQuery(query)
  return (
    <IndexLayout>
      <HeaderWrapper>
        <Header>
          <h1>Josef Albers, Interaction</h1>
          <p>Cover design: Ingo Offermans, 2018</p>
          <p>
            <a
              href="https://davidzwirnerbooks.com/product/josef-albers-interaction"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </p>
        </Header>
      </HeaderWrapper>
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
          <div className={commonStyles.captionImageWrap}>
            <Img fluid={data.fileName.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </IndexLayout>
  )
}

export default AlbersInteraction
