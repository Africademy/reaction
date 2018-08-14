import { Sans } from "@artsy/palette"
import { Overview_artist } from "__generated__/Overview_artist.graphql"
import { track } from "Analytics"
import * as Schema from "Analytics/Schema"
import { ArtworkFilterFragmentContainer as ArtworkFilter } from "Apps/Artist/Routes/Overview/Components/ArtworkFilter"
import { GenesFragmentContainer as Genes } from "Apps/Artist/Routes/Overview/Components/Genes"
import { hasSections as showMarketInsights } from "Components/Artist/MarketInsights/MarketInsights"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { ArtistBioFragmentContainer as ArtistBio } from "Styleguide/Components/ArtistBio"
import { MarketInsightsFragmentContainer as MarketInsights } from "Styleguide/Components/MarketInsights"
import { SelectedExhibitionFragmentContainer as SelectedExhibitions } from "Styleguide/Components/SelectedExhibitions"
import { Box } from "Styleguide/Elements/Box"
import { Col, Row } from "Styleguide/Elements/Grid"
import { Spacer } from "Styleguide/Elements/Spacer"
import { CurrentEventFragmentContainer as CurrentEvent } from "./Components/CurrentEvent"

export interface OverviewRouteProps {
  artist: Overview_artist & {
    __fragments: Array<object>
  }
}

interface State {
  isReadMoreExpanded: boolean
}

@track({
  context_module: Schema.Context.ArtistOverview,
})
class OverviewRoute extends React.Component<OverviewRouteProps, State> {
  state = {
    isReadMoreExpanded: false,
  }

  @track<OverviewRouteProps>(props => ({
    action_type: Schema.ActionType.Click,
    // TODO: Feel like these should become enums too
    subject: "Learn more about consignment",
    destination_path: props.artist.href,
  }))
  handleConsignClick() {
    // no-op
  }

  render() {
    const { artist } = this.props
    const showGenes =
      Boolean(artist.related.genes.edges.length) &&
      (this.state.isReadMoreExpanded || !artist.biography_blurb.text)

    const showSelectedExhibitions = Boolean(artist.exhibition_highlights.length)
    const showArtistBio = Boolean(artist.biography_blurb.text)
    const showCurrentEvent = Boolean(artist.currentEvent)
    const showConsignable = Boolean(artist.is_consignable)

    const hideMainOverviewSection =
      !showMarketInsights(this.props.artist) &&
      !showSelectedExhibitions &&
      !showArtistBio &&
      !showCurrentEvent &&
      !showConsignable

    // TODO: Hide right column if missing current event. Waiting on feedback
    const colNum = 9 // artist.currentEvent ? 9 : 12

    return (
      <>
        <Row>
          <Col sm={colNum}>
            {showMarketInsights && (
              <>
                <MarketInsights artist={artist} />
                <Spacer mb={1} />
              </>
            )}

            {showSelectedExhibitions && (
              <>
                <SelectedExhibitions
                  artistID={artist.id}
                  totalExhibitions={this.props.artist.counts.partner_shows}
                  exhibitions={this.props.artist.exhibition_highlights}
                />
                <Spacer mb={1} />
              </>
            )}

            {showArtistBio && (
              <>
                <ArtistBio
                  onReadMoreClicked={() => {
                    this.setState({ isReadMoreExpanded: true })
                  }}
                  bio={artist}
                />
                <Spacer mb={1} />
              </>
            )}

            {showGenes && (
              <>
                <Genes artist={artist} />
                <Spacer mb={1} />
              </>
            )}

            {showConsignable && (
              <Sans size="2" color="black60">
                Want to sell a work by this artist?{" "}
                <a href="/consign" onClick={this.handleConsignClick.bind(this)}>
                  Learn more
                </a>.
              </Sans>
            )}
          </Col>

          {showCurrentEvent && (
            <Col sm={3}>
              <Box pl={2}>
                <CurrentEvent artist={artist} />
              </Box>
            </Col>
          )}
        </Row>

        {!hideMainOverviewSection && <Spacer mb={4} />}

        <Row>
          <Col>
            <span id="jump--artistArtworkGrid" />

            <ArtworkFilter
              artist={artist}
              hideTopBorder={hideMainOverviewSection}
            />
          </Col>
        </Row>
      </>
    )
  }
}

export const OverviewRouteFragmentContainer = createFragmentContainer(
  OverviewRoute,
  graphql`
    fragment Overview_artist on Artist
      @argumentDefinitions(
        medium: { type: "String", defaultValue: "*" }
        major_periods: { type: "[String]" }
        partner_id: { type: "ID!" }
        for_sale: { type: "Boolean" }
        at_auction: { type: "Boolean" }
        ecommerce: { type: "Boolean" }
        sort: { type: "String", defaultValue: "-partner_updated_at" }
        partner_category: {
          type: "[String]"
          defaultValue: ["blue-chip", "top-established", "top-emerging"]
        }
      ) {
      ...ArtistBio_bio
      ...CurrentEvent_artist
      ...MarketInsightsArtistPage_artist
      ...Genes_artist
      ...ArtworkFilter_artist
        @arguments(
          medium: $medium
          major_periods: $major_periods
          partner_id: $partner_id
          for_sale: $for_sale
          sort: $sort
        )

      id
      exhibition_highlights(size: 3) {
        ...SelectedExhibitions_exhibitions
      }
      counts {
        partner_shows
      }

      href
      is_consignable

      # NOTE: The following are used to determine whether sections
      # should be rendered.

      biography_blurb(format: HTML, partner_bio: true) {
        text
        credit
      }

      currentEvent {
        name
      }

      related {
        genes {
          edges {
            node {
              id
            }
          }
        }
      }

      _id
      collections
      highlights {
        partners(
          first: 10
          display_on_partner_profile: true
          represented_by: true
          partner_category: $partner_category
        ) {
          edges {
            node {
              categories {
                id
              }
            }
          }
        }
      }
    }
  `
)
