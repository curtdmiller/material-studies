import * as React from 'react'
import styles from './lustig-vivaldi.module.scss'
import commonStyles from './common-styles.module.css'
import IndexLayout from '../../layouts'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/lustig-vivaldi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const LustigVivaldi = () => {
  const data = useStaticQuery(query)
  return (
    <IndexLayout>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway:600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:500&display=swap"
        />
      </Helmet>
      <div className={styles.wrapper}>
        <svg width="100%" height="auto" viewBox="0 -100 200 200">
          <defs>
            <polygon id="triangle-up" points="0,0 66,0 33,-100" />
            <polygon id="triangle-down" points="0,0 66,0 33,100" />
            <clipPath id="v-clip">
              <rect x="-5" y="0" width="30" height="40" />
            </clipPath>
            <path
              id="v"
              clip-path="url(#v-clip)"
              stroke="#e6e1d3"
              stroke-width="2.5"
              fill="none"
              d="M-1,-3 L9,27 L19,-3"
            />
            <line
              id="i"
              x1="0"
              y1="0"
              x2="0"
              y2="30"
              stroke="#e6e1d3"
              stroke-width="2.5"
            />
            <polyline
              id="l"
              points="0,0 0,28.75 10.75,28.75"
              stroke="#e6e1d3"
              stroke-width="2.5"
              fill="none"
            />
            <g id="d">
              <use href="#i" x="0" y="0" />
              <polyline
                points="0,1.25 10.75,1.25 10.75,28.75 0,28.75"
                stroke="#e6e1d3"
                stroke-width="2.5"
                stroke-linejoin="round"
                fill="none"
              />
            </g>
          </defs>

          <rect className={styles.gold} x="0" y="0" width="137" height="100" />
          <g transform="translate(70,0)">
            <use x="0" y="0" href="#triangle-up" className={styles.red} />
            <use x="0" y="0" href="#triangle-down" className={styles.purple} />
            <use
              x="33"
              y="-100"
              href="#triangle-down"
              className={styles.purple}
            />
            <use x="66" y="0" href="#triangle-up" className={styles.gold} />
            <use x="33" y="100" href="#triangle-up" className={styles.gold} />
            <use x="66" y="0" href="#triangle-down" className={styles.red} />
            <g id="vivaldi">
              <use href="#v" x="4.25" y="-8.8" />
              <circle cx="29" cy="-29" r="4.5" className={styles.gold} />
              <use href="#i" x="29" y="-16" />
              <use href="#v" x="36" y="0" />
              <use href="#v" x="-75" y="-10" transform="rotate(180)" />
              <use href="#l" x="81" y="-7" />
              <use href="#d" x="98" y="-14.25" />
              <circle cx="120.7" cy="-14" r="4.5" className={styles.purple} />
              <use href="#i" x="120.7" y="0" />
            </g>
          </g>
          <g transform="translate(5,-87)">
            <text>
              Concerto for Five Instruments in D major "La Pastorella"
            </text>
            <text y="15">
              Sonata for Flute, Bassoon, and Harpsichord in A minor
            </text>
            <text y="30">Concerto for Flute, Oboe and Bassoon in G minor</text>
            <text y="45">Sonata for Oboe and Harpsichord in C minor</text>
            <text y="60">Concerto for Four Instruments in F major</text>
          </g>
          <g transform="translate(5,8)">
            <text>Jean-Pierre Rampal, Flute</text>
            <text y="5">Perre Pierlot, Oboe</text>
            <text y="10">Robert Gendre, Violin</text>
            <text y="15">Paul Hongne, Bassoon</text>
            <text y="20">Robert Veyron-Lacroix, Harpsichord</text>
          </g>
          <text x="5" y="95" letter-spacing=".2px">
            &copy; THE HAYDN SOCIETY/BOSTON HSL-82
          </text>
        </svg>
        <div className={commonStyles.caption}>
          <p>
            <a
              href="https://www.discogs.com/Vivaldi-Jean-Pierre-Rampal-Pierre-Pierlot-Robert-Gendre-Paul-Hongne-Robert-Veyron-Lacroix-Concerto-f/release/10864849"
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

export default LustigVivaldi
