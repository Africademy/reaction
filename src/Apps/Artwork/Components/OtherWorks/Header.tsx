import { Button, Flex, Serif } from "@artsy/palette"
import { RouterLink } from "Artsy/Router/RouterLink"
import React from "react"

interface HeaderProps {
  buttonHref?: string
  children?: JSX.Element
  title: string
}

export const Header: React.SFC<HeaderProps> = props => {
  const { buttonHref, children, title } = props

  return (
    <Flex flexDirection="column" alignItems="center">
      <Serif size={["5t", "8"]} color="black100" mb={2} textAlign="center">
        {title}
      </Serif>
      {buttonHref && (
        <RouterLink to={buttonHref}>
          <Button variant="secondaryOutline" mb={3}>
            View all
          </Button>
        </RouterLink>
      )}
      {children}
    </Flex>
  )
}
