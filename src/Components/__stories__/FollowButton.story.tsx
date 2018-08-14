import { storiesOf } from "@storybook/react"
import React from "react"
import { FollowArtistButton } from "../FollowButton/FollowArtistButton"
import { FollowGeneButton } from "../FollowButton/FollowGeneButton"

storiesOf("Components/Follow Button", module)
  .add("Artist", () => {
    return (
      <div style={{ margin: 20 }}>
        <FollowArtistButton
          artist={
            {
              id: "damon-zucconi",
              __id: "1234",
              is_followed: false,
              counts: { follows: 100 },
            } as any
          }
        />
        <br />
        <FollowArtistButton
          artist={
            {
              id: "damon-zucconi",
              __id: "1234",
              is_followed: true,
              counts: { follows: 100 },
            } as any
          }
        />
      </div>
    )
  })
  .add("Gene", () => {
    return (
      <div style={{ margin: 20 }}>
        <FollowGeneButton
          gene={
            {
              id: "brooklyn-artists",
              __id: "1234",
              is_followed: false,
            } as any
          }
        />
        <br />
        <FollowGeneButton
          gene={
            {
              id: "brooklyn-artists",
              __id: "1234",
              is_followed: true,
            } as any
          }
        />
      </div>
    )
  })
