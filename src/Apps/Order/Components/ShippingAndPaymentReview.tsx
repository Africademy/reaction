import { Sans } from "@artsy/palette"
import { Flex, FlexProps } from "@artsy/palette"
import { ShippingAndPaymentReview_order } from "__generated__/ShippingAndPaymentReview_order.graphql"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { StepSummaryItem } from "Styleguide/Components/StepSummaryItem"
import { CreditCardDetails } from "./CreditCardDetails"
import { ShippingAddressFragmentContainer as ShippingAddress } from "./ShippingAddress"

export const ShippingAndPaymentReview = ({
  order: { requestedFulfillment, lineItems, creditCard },
  onChangePayment,
  onChangeShipping,
  ...others
}: {
  order: ShippingAndPaymentReview_order
  onChangePayment(): void
  onChangeShipping(): void
} & FlexProps) => {
  return (
    <Flex flexDirection="column" {...others}>
      {requestedFulfillment.__typename === "Ship" ? (
        <StepSummaryItem onChange={onChangeShipping} title="Shipping address">
          <ShippingAddress ship={requestedFulfillment} />
        </StepSummaryItem>
      ) : (
        <StepSummaryItem
          onChange={onChangeShipping}
          title={
            <>Pick up ({lineItems.edges[0].node.artwork.shippingOrigin})</>
          }
        >
          <Sans size="2">
            After you place your order, you’ll be appointed an Artsy specialist
            within 2 business days to handle pickup logistics.
          </Sans>
        </StepSummaryItem>
      )}
      <StepSummaryItem onChange={onChangePayment} title="Payment method">
        <CreditCardDetails {...creditCard} />
      </StepSummaryItem>
    </Flex>
  )
}

export const ShippingAndPaymentReviewFragmentContainer = createFragmentContainer(
  ShippingAndPaymentReview,
  graphql`
    fragment ShippingAndPaymentReview_order on Order {
      requestedFulfillment {
        __typename
        ...ShippingAddress_ship
      }
      lineItems {
        edges {
          node {
            artwork {
              shippingOrigin
            }
          }
        }
      }
      creditCard {
        brand
        last_digits
        expiration_year
        expiration_month
      }
    }
  `
)
