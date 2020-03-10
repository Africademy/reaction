import { Grid, injectGlobalStyles, Theme, themeProps } from "@artsy/palette"
import * as Sentry from "@sentry/browser"
import * as Artsy from "Artsy"
import { track } from "Artsy/Analytics"
import { ErrorBoundary } from "Components/ErrorBoundary"
import { RouteConfig } from "found"
import React from "react"
import { HeadProvider } from "react-head"
import { Environment } from "relay-runtime"
import { data as sd } from "sharify"
import { Provider as StateProvider } from "unstated"
import { BreakpointVisualizer } from "Utils/BreakpointVisualizer"
import Events from "Utils/Events"

import {
  MatchingMediaQueries,
  MediaContextProvider,
  ResponsiveProvider,
} from "Utils/Responsive"

export interface BootProps {
  context: object
  user: User
  onlyMatchMediaQueries?: MatchingMediaQueries
  relayEnvironment: Environment
  routes: RouteConfig
  headTags?: JSX.Element[]
}

// FIXME: When we update to latest @types/styled-components `suppressMultiMountWarning`
// issue will be fixed
const { GlobalStyles } = injectGlobalStyles<{
  suppressMultiMountWarning: boolean
}>()

@track(null, {
  dispatch: data => {
    Events.postEvent(data)
  },
})
export class Boot extends React.Component<BootProps> {
  componentDidMount() {
    const env = sd.NODE_ENV || (process.env && process.env.NODE_ENV)
    if (env === "production") {
      Sentry.init({ dsn: sd.SENTRY_PUBLIC_DSN })
    }

    // Let our end-to-end tests know that the app is hydrated and ready to go
    document.body.setAttribute("data-test", "AppReady")
  }

  render() {
    const { children, context, headTags = [], ...props } = this.props
    const contextProps = {
      ...props,
      ...context,
    }

    return (
      <ErrorBoundary>
        <HeadProvider headTags={headTags}>
          <StateProvider>
            <Artsy.SystemContextProvider {...contextProps}>
              <MediaContextProvider onlyMatch={props.onlyMatchMediaQueries}>
                <ResponsiveProvider
                  mediaQueries={themeProps.mediaQueries}
                  initialMatchingMediaQueries={
                    props.onlyMatchMediaQueries as any
                  }
                >
                  <Theme>
                    <Grid fluid>
                      <GlobalStyles suppressMultiMountWarning />
                      {children}
                      {process.env.NODE_ENV === "development" && (
                        <BreakpointVisualizer />
                      )}
                    </Grid>
                  </Theme>
                </ResponsiveProvider>
              </MediaContextProvider>
            </Artsy.SystemContextProvider>
          </StateProvider>
        </HeadProvider>
      </ErrorBoundary>
    )
  }
}

// Tests
GlobalStyles.displayName = "GlobalStyles"
Grid.displayName = "Grid"
