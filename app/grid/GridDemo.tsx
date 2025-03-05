import {Screen, Grid, Header, Heading, Footer} from "@amsterdam/design-system-react"

import styles from './GridDemo.module.css'

export function GridDemo() {
  return (
    <Screen>
      <Header brandName="Header"></Header>
      <Grid as="article" paddingVertical="medium" gapVertical="small">
        <Grid.Cell span={{narrow: 4, medium: 6, wide: 9}} className={styles.subgrid}>
          <header>
            <Heading level={3}>Main</Heading>
          </header>
          <div className={styles.left}>Left</div>
          <div className={styles.right}>Right</div>


            <div class={styles.block}></div>
            <div class={styles.block}></div>
            <div class={styles.block}></div>
            <div class={styles.block}></div>
            <div class={styles.block}></div>
            <div class={styles.block}></div>

        </Grid.Cell>
        <Grid.Cell span={{narrow: 4, medium: 2, wide: 3}} as="aside">
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
