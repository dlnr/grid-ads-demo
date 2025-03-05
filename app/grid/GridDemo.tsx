import {Screen, Grid, Header, Heading, Footer} from "@amsterdam/design-system-react"

export function GridDemo() {
  return (
    <Screen>
      <Header brandName="Header"></Header>
      <Grid as="article" paddingVertical="medium">
        <Grid.Cell span={{narrow: 4, medium: 5, wide: 8}} as="main">
          <Heading level={3}>Main</Heading>
        </Grid.Cell>
        <Grid.Cell span={{narrow: 4, medium: 3, wide: 4}} as="aside">
          <Heading level={3}>Aside</Heading>
        </Grid.Cell>
      </Grid>
      <Footer>
        <Footer.Bottom>
          <Grid paddingVertical="small">
            <Grid.Cell span="all">
              <Heading level={3}>Footer</Heading>
            </Grid.Cell>
          </Grid>
        </Footer.Bottom>
      </Footer>
    </Screen>
  )
}
