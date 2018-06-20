import { injectGlobalCSS, Theme, themeProps } from "@artsy/palette"
import { ContextProvider } from "Components/Artsy"
import React from "react"
import { Footer } from "Styleguide/Components/Footer"
import { Tab, Tabs } from "Styleguide/Components/Tabs"
import { Box } from "Styleguide/Elements/Box"
import { GlobalStyles } from "Styleguide/Elements/GlobalStyles"
import { Col, Grid, Row } from "Styleguide/Elements/Grid"
import { Separator } from "Styleguide/Elements/Separator"
import { Spacer } from "Styleguide/Elements/Spacer"
import { ResponsiveProvider } from "Styleguide/Utils/Responsive"
import { ArtistHeader } from "./ArtistHeader"
import { ArticlesContent } from "./Routes/Articles"
import { AuctionResults } from "./Routes/AuctionResults"
import { CV } from "./Routes/CV"
import { Overview } from "./Routes/Overview"
import { RelatedArtists } from "./Routes/RelatedArtists"
import { ShowsContent } from "./Routes/Shows"

injectGlobalCSS()

export class Artist extends React.Component {
  render() {
    return (
      <Theme>
        <GlobalStyles>
          <ResponsiveProvider breakpoints={themeProps.mediaQueries}>
            <Grid fluid>
              <Row>
                <Col>
                  <ArtistHeader />
                </Col>
              </Row>

              <Spacer mb={3} />

              <Row>
                <Col>
                  <Tabs initialTabIndex={4}>
                    <Tab name="Overview">
                      <Overview />
                    </Tab>
                    <Tab name="CV">
                      <CV />
                    </Tab>
                    <Tab name="Articles">
                      <ContextProvider>
                        <ArticlesContent artistID="pablo-picasso" />
                      </ContextProvider>
                    </Tab>
                    <Tab name="Shows">
                      <ContextProvider>
                        <ShowsContent
                          status="running"
                          artistID="pablo-picasso"
                          sort="end_at_asc"
                        />
                      </ContextProvider>
                    </Tab>
                    <Tab name="Auction results">
                      <AuctionResults />
                    </Tab>
                    <Tab name="Related artists">
                      <RelatedArtists />
                    </Tab>
                  </Tabs>
                </Col>
              </Row>

              <Box my={3}>
                <Separator />
              </Box>

              <Row>
                <Col>
                  <Footer />
                </Col>
              </Row>
            </Grid>
          </ResponsiveProvider>
        </GlobalStyles>
      </Theme>
    )
  }
}
