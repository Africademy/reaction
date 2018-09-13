import { BorderBox, color, Sans } from "@artsy/palette"
import { fontFamily } from "@artsy/palette/dist/platform/fonts"
import {
  border as inputBorder,
  BorderProps as InputBorderProps,
} from "Components/Mixins"
import React from "react"
import { CardElement } from "react-stripe-elements"
import styled from "styled-components"

export const StyledCardElement = styled(CardElement)`
  width: 100%;
`

// Re-uses old input border behavior
const StyledBorderBox = styled(BorderBox).attrs<InputBorderProps>({})`
  ${inputBorder};
`

interface CreditCardInputProps {
  error?: stripe.Error
  onChange?: (response: stripe.elements.ElementChangeResponse) => void
}

interface CreditCardInputState {
  focused: boolean
}

export class CreditCardInput extends React.Component<
  CreditCardInputProps,
  CreditCardInputState
> {
  state = {
    focused: false,
  }

  onChange(response: stripe.elements.ElementChangeResponse) {
    if (this.props.onChange) {
      this.props.onChange(response)
    }
  }

  render() {
    const { message } = this.props.error ? this.props.error : { message: null }

    return (
      <>
        <StyledBorderBox
          className={`${this.state.focused ? "focused" : ""}`}
          hasError={!!message}
          p={1}
        >
          <StyledCardElement
            onChange={this.onChange.bind(this)}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
            style={{
              base: {
                "::placeholder": {
                  color: color("black30"),
                },
                fontFamily: fontFamily.serif.regular as string,
                fontSmoothing: "antialiased",
                lineHeight: "20px",
              },
            }}
          />
        </StyledBorderBox>
        {message && (
          <Sans pt={1} size="2" color="red100">
            {message}
          </Sans>
        )}
      </>
    )
  }
}
