import * as React from 'react'
import styles from './provocative-percussion-3.module.scss'
import commonStyles from './common-styles.module.css'
import IndexLayout from '../../layouts'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'

export const query = graphql`
  query {
    fileName: file(
      relativePath: { eq: "images/provocative-percussion-iii-cover.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ProvocativePercussionVol3 = () => {
  const data = useStaticQuery(query)
  return (
    <IndexLayout>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/moe5wud.css" />
      </Helmet>
      <div className={commonStyles.wrapper}>
        <div className={styles.percussionVol3}>
          <div className={styles.header}>
            <div className={styles.top}>
              <div className={styles.technicalInfo}>
                <p>STEREO</p>
                <p>RS&nbsp;&nbsp;821&nbsp;&nbsp;SD</p>
              </div>
              <svg
                className={styles.logo}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 963.14 309.97"
              >
                <title>Command Records Logo</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path d="M384.24,164.61c-2.42,3.1-5,6.1-7.25,9.31-3.93,5.57-7.61,11.33-11.55,16.91-4.75,6.74-10.89,11.21-19.59,10.88s-14.43-5.23-15.4-13.94c-.64-5.77-.36-11.64-.82-17.44-.13-1.74-1.36-3.4-2.08-5.1-1.7.86-4,1.29-5,2.67-5.18,7.3-10.51,14.58-14.83,22.4-3.31,6-7,9.17-14.19,8-4.55-.72-9.28-.28-13.93-.54-5.52-.31-6.07-1.05-6-6.71,0-8.15.36-16.32-.11-24.45a28.93,28.93,0,0,0-3.26-10.85c-2.74-5.49-11.27-7.17-15.94-3.25-1.21,1-1.82,3.38-1.79,5.1,0,2.27,1.24,4.5,1.49,6.79,1.67,15.11-7.25,27.55-22.74,32.54a84.33,84.33,0,0,1-40.49,2.47c-8.89-1.52-17.82-3.66-25.5-9.21-14.09-10.18-14.46-30.17-2.48-41.88,8.65-8.46,19.48-12.35,31.35-13.84,15.79-2,30.91,0,44.93,7.73,3.77,2.07,6.68,1.75,10.2-.19,9.11-5,18.71-9.07,29.24-9.32a48,48,0,0,1,16.1,2.38c7.24,2.43,10.6,8.69,12.05,15.94.22,1.13,0,2.35.23,3.48a29.46,29.46,0,0,0,1.11,3.53,20.39,20.39,0,0,0,2.62-2.07c6.35-6.82,12.51-13.76,20.46-18.91,11.21-7.28,26.33-.47,31.54,8.16,1.28,2.12,1.25,5.08,1.62,7.69.3,2.09.29,4.23.48,7.26,1.49-1.29,2.32-1.92,3.05-2.65,6.47-6.44,12.82-13,19.42-19.34,7.79-7.45,28.44-.26,30.59,9.07,1.28,5.53.76,11.51.78,17.29,0,3.12-.53,6.24-.82,9.36l1.06.85c1.48-1.23,3.29-2.22,4.39-3.73,5.56-7.67,10.91-15.5,16.39-23.24,9.47-13.37,12-15,29.39-10.56,8.47,2.15,10.89,5.57,11.2,14.15.11,3,0,5.94,0,8.9l1.05.49c1.32-1.54,2.69-3,4-4.61,4.08-5,8.08-10.13,12.2-15.13,5-6,11.46-5.85,18.28-4.35,10.5,2.31,14.9,8.36,13.82,19.06-.14,1.35,0,2.74,0,5.19,6-6.79,11.35-12.44,16.21-18.49,6.31-7.84,13.88-7.87,22.46-4.78s11.42,9.81,11.73,17.93c.26,6.47-.47,13-.46,19.46,0,2,1,4,1.49,6,2-.6,4.44-.67,6-1.88,6.6-5.2,12-11.44,15.19-19.39,2.93-7.32,6.54-14,13.63-18.4A36.64,36.64,0,0,1,634.16,136c8.64-.27,17.37-.2,25.46,3.63,2.23,1.05,3.56.67,3.87-1.84.49-4,2.84-4.75,6.39-4.15,6.89,1.15,13.82,2.1,20.74,3.14,5.61.85,6.29,1.45,6.09,6.92-.31,8.48-.79,16.95-1.33,25.42-.23,3.54-.84,7.75,2.48,9.52,3.52,1.87,6.2-1.93,8.27-4.17,7.45-8.06,14.52-16.46,21.68-24.78,4.23-4.92,8.08-10.33,14.36-12.82,2.52-1,5.59-1.81,8.14-1.3a59.48,59.48,0,0,1,13.14,4.49c4.08,1.89,5.74,5.82,6.45,10.13.34,2.06.75,4.12,1.29,7,2.48-2.92,4.27-5.28,6.32-7.39,2.66-2.72,5.64-5.14,8.29-7.88,10.45-10.81,34.64-3.29,34.64,13.58,0,6.63.27,13.28.64,19.9.11,1.84,1,3.64,1.55,5.45,1.86-.81,4.14-1.18,5.51-2.51,5-4.82,8.1-10.8,10.31-17.4,2.68-8,6.86-15.08,14.11-20a28.66,28.66,0,0,1,17.07-4.68,81.58,81.58,0,0,1,18.1,2.87c3.31.85,4.07.3,4.27-2.89.47-7.26,1.4-14.5,1.77-21.76.22-4.27-.31-8.57-.42-12.86-.06-2.27,1-3.38,3.41-3,9,1.59,18,3.1,27,4.68,3.27.57,3.54,3.08,3.49,5.71q-.46,23.22-.94,46.44c-.14,6.79-.54,13.59-.34,20.37,0,1.76,1.58,4.46,3,5s4.69-.39,5.67-1.74a91.42,91.42,0,0,0,7.45-12.74c1.16-2.26.93-5.61,4.91-4.87,4.28.79,6.52,3.54,6,7.63-.81,6.48-4,12-7.89,17-5,6.33-11,11.53-18.55,14.77-9.28,4-23.09.94-28.51-7-2.26-3.32-3.59-3-5.8-.38-11.67,14-38.1,11-48.35-1.33a31.06,31.06,0,0,1-3.76-5.27c-1.61-3.07-2.52-2.19-4.56-.13-4.41,4.44-9,8.92-14.1,12.45-10,6.86-21.09,3.9-29.21-3.58-4.28-3.95-5-9.69-5.34-15.2-.22-3.62.47-7.29.51-10.94,0-1.21-.71-2.42-1.1-3.64-1.12.57-2.7.85-3.28,1.76-4,6.28-7.92,12.69-11.8,19.08a73.36,73.36,0,0,0-3.65,6.53c-2.87,6.11-8,7.44-14.1,7-4.65-.33-9.31-.49-14-.63-5.61-.17-5.55-.25-5.08-5.69.72-8.28,1.22-16.59,1.72-24.9.07-1.07-.37-2.18-.76-4.2-2,2-3.53,3.44-5,4.87-8.4,8.05-16.56,16.38-25.29,24a31.51,31.51,0,0,1-20.62,7.8c-6.61.1-12.54-1.86-16.88-7.06-2.4-2.86-4.34-1.84-6.84-.3-12.09,7.39-25.19,9.06-38.94,6.42-8.3-1.6-14.81-6-18.87-13.46-1.71-3.16-3.07-3.09-5.61-.83-7.36,6.56-15.06,12.47-24.91,15.19-11.07,3.06-24.56-1-25.45-17.74-.26-4.8.13-9.63.19-14.45a5.88,5.88,0,0,0-1-3.59c-1.1,1.33-2.29,2.6-3.27,4-5.63,8.05-11.18,16.15-16.8,24.2-4.6,6.61-10.94,9.07-18,7.09-5.61-1.56-9.44-7.62-9.58-15.47-.1-5.49,0-11,0-16.46a9.9,9.9,0,0,0-.79-2.65c-.73.53-1.7.91-2.15,1.63-5.24,8.3-10.55,16.55-15.49,25-2.19,3.75-4.85,5.43-9.23,5.37-6.12-.09-12.24.37-18.37.63s-6.5-.5-6.24-6.74c.4-9.57.11-19.16.11-29.85-2.92,4-5.32,7.3-7.66,10.62-6.84,9.7-14.32,18.73-24.22,25.59-6.27,4.35-12.71,4.7-19.34,1.63-6.17-2.85-9.09-8.12-9.27-14.83-.13-4.64-.05-9.29-.06-13.93v-6.33ZM218,168.83c.24-8.69-5.36-14.08-14.87-14.32-8.25-.21-14.08,5.27-14.2,13.36-.14,8.67,5.64,15.14,13.68,15.31A14.89,14.89,0,0,0,218,168.83Zm444.6-2.89c-.88-3.27-1.12-6.91-2.77-9.73-2.83-4.85-17-5.85-21.27.77a14.66,14.66,0,0,0-.46,16c2.64,4.77,7.49,5.67,12.53,5.26C660.34,177.42,662.17,175.39,662.56,165.94ZM891,168h.31c0-2.31.14-4.64,0-6.94-.39-5.15-2.92-7.61-8-7.19a13.26,13.26,0,0,0-6.7,2.65c-4.44,3.46-6,12.59-3.49,17.81s7.18,7.39,12.71,5.93c4-1.06,5.45-3.84,5.25-10.28C891,169.35,891,168.69,891,168ZM510.85,182.89l-.43-.64c-.11.09-.31.19-.3.27a4.12,4.12,0,0,0,.14.78Z" />
                    <path d="M219.41,37.61C191,37.09,163.25,41.77,136,48.79,105.35,56.65,76,68,49.54,85.6c-14.64,9.74-26.69,22-34,38.33-5.77,12.81-5.63,24.76,3.74,36.38,11.19,13.87,25.34,23.51,41.27,30.62,14.41,6.43,29,12.76,43.95,17.62a222.5,222.5,0,0,0,51.2,10.58c19.55,1.54,39.14,3.55,58.72,3.61,18.9.06,37.84-1.74,56.69-3.43,11.41-1,22.73-3.21,34-5.23,4.55-.81,8.93-2.55,13.4-3.85a10,10,0,0,1,3.34-.84,12.35,12.35,0,0,1,3.41,1.38c-.53.94-.83,2.23-1.63,2.78-7.44,5-14.56,10.74-22.53,14.75-44.77,22.52-92.1,33.64-142.38,29.85-11.07-.83-22-3.26-33-4.84-2.85-.4-5.76-.33-8.63-.48-.32,0-.76.14-.93,0-6.17-5.38-14.39-5.39-21.57-8.07-13.74-5.11-27.15-10.81-39.78-18.22-3.57-2.09-6.43-5.37-9.73-8S38,213.8,34.92,211c-11.3-10.18-19.34-22.72-25.79-36.36a82.51,82.51,0,0,1-7.55-31.78c-.35-7.5-1.89-15-1.52-22.48C.71,107.28,4.88,95.29,12,83.94A103.69,103.69,0,0,1,30.54,61.48,284.33,284.33,0,0,1,54.07,43.17c5.5-4,11.44-7.32,17.28-10.79,18.43-11,38.22-18.54,59-23.73a295.82,295.82,0,0,1,99.94-7.28c18.1,1.69,35.95,4.91,53.14,11.09A97.74,97.74,0,0,1,323,38.64c6.88,7.48,8.08,19.44,3.14,28.42a61.87,61.87,0,0,0-4.21,10c-4.06,12.07-11.32,21.41-22.81,27.19a107.75,107.75,0,0,1-57.65,11.09c-17.12-1.3-32.27-8.59-47.06-16.91-10.43-5.86-17.58-15.14-26-23.11-2.54-2.4-5-4.85-7.44-7.37-.48-.5-.47-1.45-.69-2.2.78-.09,1.7-.51,2.31-.23,3.64,1.63,7.28,3.29,10.79,5.19,17.88,9.66,37.26,12.82,57.26,13.69a193.56,193.56,0,0,0,70.23-9.53A59.31,59.31,0,0,0,309.54,71c3.67-1.93,3.95-3.18,1.89-6.76A30.17,30.17,0,0,0,296.55,51.5a170,170,0,0,0-56.69-12.87C233.05,38.22,226.23,38,219.41,37.61ZM9.07,163.52a9.61,9.61,0,0,0,2.09.63c.32,0,.64-.43.95-.67a5.4,5.4,0,0,0-1.46-.73C10.34,162.69,9.94,163.07,9.07,163.52Zm10.4-84.38c-.19-.14-.38-.3-.58-.43,0,0-.17.18-.26.27l.6.49ZM7.62,140.86a5.58,5.58,0,0,0,.69.35s.27-.25.25-.33a3.48,3.48,0,0,0-.38-.64C8,140.45,7.8,140.65,7.62,140.86Z" />
                    <path d="M840.45,256.17c3.5.51,8.73,1.22,13.95,2,5.54.87,6.38.18,6.58-5.33.1-2.65.58-5.29.64-7.94.14-5.48-.84-6.61-6.25-7.66-.32-.07-.79.08-1-.1-1.22-1.16-3.38-2.46-3.31-3.59.1-1.53,1.83-4.11,3-4.21a93.93,93.93,0,0,1,15.28.11c3.47.3,5,3,5,6.35,0,7.64-.15,15.28-.24,22.92-.1,8.48-.33,17-.25,25.43.05,5.9.51,5.94,6.17,7.91,1.74.61,4.15,2.54,4.23,4,.14,2.64-2.44,3.76-5,3.62-6.25-.34-12.49-1.15-18.73-1.17-4.61,0-9.24.83-13.83,1.47-13.87,1.95-27.23.33-39.73-6.08-12-6.16-13.23-20.56-2.51-28.58C814.62,257.76,826.59,256.89,840.45,256.17Zm-1.07,37.16a87.61,87.61,0,0,0,11.06-2c5.91-1.71,9.6-5.76,10.14-12.16.56-6.66-3.74-10.58-8.94-12.4-11-3.84-22.23-4.26-32.64,2.15-7.94,4.9-7.69,15,.07,20.13C824.65,292.79,830.9,293,839.38,293.33Z" />
                    <path d="M500.2,298.75a63.27,63.27,0,0,1-29.53-5.39c-13.05-5.65-15.12-20.43-4-29.19,5.78-4.55,12.52-6.7,19.65-7.75,13.3-2,26.49-1.94,39.25,3.08,5.75,2.26,10.39,5.85,13.08,11.63,2,4.23.37,7.45-4.24,7.64-6.77.29-13.56.19-20.35.28-10.78.14-21.56.26-32.33.54-1.34,0-3.55.82-3.75,1.64-.31,1.29.31,3.7,1.3,4.25,4,2.21,8.12,4.91,12.47,5.56,9.45,1.42,18.93.86,27.47-4.4,4.78-2.95,10-1.71,15.1-1.5,2.75.11,3.64,3.39,1.33,5.11-3,2.24-6.36,4.67-9.91,5.45-8.37,1.86-16.95,2.78-25.44,4.09Zm6.73-28.29c2.4-.12,5.07-.13,7.7-.46,1-.11,1.85-1,2.78-1.49a10.75,10.75,0,0,0-2-2c-6.18-3.43-12.92-4.15-19.75-3.38a64.28,64.28,0,0,0-11.91,2.91c-.95.3-1.48,1.93-2.2,2.95,1.1.49,2.2,1.37,3.31,1.39C492.13,270.52,499.4,270.46,506.93,270.46Z" />
                    <path d="M928.29,301.32c-8.62-1.6-17.31-2.9-25.82-4.95-2.86-.69-5.51-3-7.79-5.11-2.87-2.63-1.95-5.74,1.84-6.65,4.41-1.06,9-.69,12.1,2.77a16.27,16.27,0,0,0,11.4,5.47,131.73,131.73,0,0,0,20.81-.87c1.69-.19,3.11-2.86,4.66-4.39-1.69-1.1-3.3-3-5.1-3.19-10.71-1.24-21.5-1.88-32.2-3.17a36.85,36.85,0,0,1-11.84-3.39c-6.33-3.11-6.88-10.72-1-14.52a38.21,38.21,0,0,1,12.2-5.11,85.67,85.67,0,0,1,38.59.4c3.74.89,7.19,3.26,10.55,5.32,1,.62,2.08,2.74,1.74,3.66a5.22,5.22,0,0,1-3.49,2.89c-3.94.54-8,.72-11.57-1.73-9.13-6.19-19.25-5.21-29.38-3.86a9.1,9.1,0,0,0-3.65,1.53c-2,1.33-2,3.13-.16,4.51a8.28,8.28,0,0,0,4.07,1.65c5.61.51,11.25.68,16.86,1.17,8.9.77,18,.39,26.37,4.38,6.56,3.13,7.58,9.35,2.3,14.48-5,4.8-11.41,6-17.84,6.88-4.43.63-8.95.67-13.43,1Z" />
                    <path d="M676.68,300.74c-9.18-.35-19.09-1.52-28-6.57-11.06-6.26-12.19-19.34-2.78-28,6.67-6.11,15.06-7.68,23.41-8.92,9.71-1.43,19.64-1.62,29.17,1.06,5.14,1.45,10.74,3.5,14.54,7,9.35,8.6,7.06,21.22-4.23,27.79A52,52,0,0,1,689,299.59C685.19,300.08,681.37,300.31,676.68,300.74Zm.78-7.33c5-1,10.49-1.58,15.68-3.13,5.89-1.77,9.57-6.86,9.35-11.56-.29-6.45-3.62-10.6-10.18-12.58a34.85,34.85,0,0,0-4.84-1.18c-8.56-1.35-17-1.06-24.75,3.24-5.43,3-7.78,7.38-7.09,12.6.64,4.85,4.62,9.13,10.08,10.44C669.38,292.12,673.14,292.63,677.46,293.41Z" />
                    <path d="M589.76,256.07c10.08.37,19.74,1,28.41,6a25.85,25.85,0,0,1,7,5.47c2.76,3.23,1.36,6.1-2.88,6.33-4.71.26-9.07-.34-12.91-3.9-8.43-7.79-26.21-8.54-35.57-1.91-6.36,4.51-6.65,14.76-.43,19.41,10.39,7.77,21.72,7.07,33.26,3.25a8.53,8.53,0,0,0,3.48-2.75c3.44-4.13,8-4.43,12.72-3.73,1.33.19,3.28,1.09,3.58,2.07.39,1.31,0,3.71-1,4.44-3.83,2.83-7.71,6.15-12.13,7.52-9.1,2.82-18.6,3.13-28.17,2-8-1-15.81-2.19-22.82-6.39a18.88,18.88,0,0,1-9.4-12.9c-1.55-8.16,2.7-13.65,9.1-17.9C570.54,257.33,580.27,256.38,589.76,256.07Z" />
                    <path d="M751,299.86c-4.81-.32-9.64-.47-14.41-1.07-1.34-.17-2.51-1.68-3.76-2.58,1.12-1.26,2-3.1,3.39-3.69,6.4-2.7,6.8-3.06,6.73-10q0-5.49-.19-11c-.12-4.65-.68-5.26-5.34-6-.66-.11-1.56,0-1.92-.39-1-1.1-2.56-2.43-2.53-3.63a4.4,4.4,0,0,1,2.83-3.19A45.32,45.32,0,0,1,757,259.52c1.64.52,3.79.08,5.53-.48,3.78-1.2,7.35-3.32,11.19-4a28.45,28.45,0,0,1,10.79.41c4.65,1,7.31,4.35,7.56,8.16a10.39,10.39,0,0,1-6.18,10,10.16,10.16,0,0,1-11.19-1.69,16.58,16.58,0,0,1-2.8-3.46c-2.39-3.48-3.91-3.93-7.27-1.41-4,3-7,6.7-6.76,12.11.07,1.83,0,3.66,0,5.49.15,5.63.19,5.52,5.91,6.92,2.45.6,6.1.75,5.83,4.27s-3.7,3.77-6.6,3.81c-4,.07-8,0-12,0Z" />
                    <path d="M406.57,299.5c-3.82,0-7.68.33-11.43-.16a6,6,0,0,1-4-3.44c-.31-.87,1.63-3.54,2.89-3.8,5.78-1.16,6-5.62,6.27-9.89.23-3.47-.16-7-.26-10.47-.1-3.23-1.22-5.49-4.92-5.6a5.47,5.47,0,0,1-2.88-.64c-1-.69-2.32-1.94-2.21-2.79.14-1.18,1.49-3.16,2.31-3.16,7.68,0,15.62-4,23.07,1.51,1.13.84,3.7.14,5.48-.34,5.09-1.38,10-3.5,15.2-4.34,3.05-.5,6.55.46,9.6,1.5,4,1.39,6.53,5,6.1,8.19-.57,4.26-2.71,7.68-6.95,8.94-3.75,1.1-7.59,1-10.65-2.11a4.67,4.67,0,0,1-.67-.74c-2-3.24-3.7-6.9-8.81-5.08-5.58,2-9.35,6.19-9.76,11.48-.15,2-.15,4-.19,6-.11,5.79-.05,5.62,5.39,7.68,1.56.59,3.54,2.29,3.76,3.73.41,2.69-2.18,3.57-4.38,3.68-4.3.21-8.62.06-12.93.06Z" />
                    <path d="M955.4,107.37a9.73,9.73,0,0,1-9.9,10.14c-5.56.12-11.08-5.1-11.13-10.54a10.34,10.34,0,0,1,10-10.22C951.22,96.81,955.38,100.83,955.4,107.37Zm-10.28,6.83,2.79-1.19c-.88-1.06-1.59-2.48-2.72-3-.49-.24-1.85,1.31-2.81,2Zm-6.48-5.46c.43-.62.81-.91.83-1.23a3.87,3.87,0,0,0-.38-1.26c-.3.28-.79.5-.87.83S938.41,107.91,938.64,108.74Zm8.49-8,.07-.4a5.93,5.93,0,0,0-.72-.1,2.15,2.15,0,0,0-.07.39Zm4,6.76c.14-.27.46-.67.38-.79s-.56-.36-.86-.52c-.09.29-.31.62-.24.87S950.85,107.33,951.11,107.47Z" />
                    <path d="M933.46,308.83c.81-.3,1.24-.62,1.62-.56s.56.56.65.91-.25.52-.39.79Z" />
                    <path d="M704.56,145.19c-.1.29-.21.57-.31.85-.27-.13-.68-.21-.75-.41s.19-.53.3-.8Z" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.circleRow}>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.circleRow}>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.circleRow}>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.circleRow}>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.circleRow}>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.circleRow}>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.circleRow}>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.circleRow}>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.circleRow}>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.circleRow}>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.circleRow}>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.circleRow}>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.circleOuter}>
                <div className={styles.circle}></div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <h2 className={styles.title}>provocative percussion vol. iii</h2>
            <p>&copy; 1961 GRAND AWARD RECORD CO., INC., NEW YORK, N. Y.</p>
          </div>
        </div>
        <div className={commonStyles.caption}>
          <p>
            <a
              href="https://collection.cooperhewitt.org/objects/18734869/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Original
            </a>{' '}
            - Josef Albers
          </p>
          <div className={commonStyles.captionImageWrap}>
            <Img fluid={data.fileName.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </IndexLayout>
  )
}

export default ProvocativePercussionVol3
