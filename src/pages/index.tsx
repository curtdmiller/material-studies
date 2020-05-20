import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import MainMenu from '../components/menu/Menu'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <MainMenu />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
