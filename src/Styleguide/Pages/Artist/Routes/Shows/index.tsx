import { Sans } from "@artsy/palette"
import { ContextConsumer } from "Components/Artsy"
import React from "react"

import { Pagination } from "Styleguide/Components/Pagination"
import { Box } from "Styleguide/Elements/Box"
import { Flex } from "Styleguide/Elements/Flex"
import { Col, Row } from "Styleguide/Elements/Grid"
import { Separator } from "Styleguide/Elements/Separator"
import { Spacer } from "Styleguide/Elements/Spacer"
import { paginationProps } from "Styleguide/Pages/Fixtures/Pagination"
import { showBlockProps, showListProps } from "Styleguide/Pages/Fixtures/Show"
import { Responsive } from "Styleguide/Utils/Responsive"

import { ShowBlockItem } from "./ShowBlockItem"
import { ShowListItem } from "./ShowListItem"

import { ShowsQueryRenderer } from "./ShowContents"

const ShowBlocks = Flex
const ShowList = Box
const Category = Sans

export const ShowsContent: any = ContextConsumer(ShowsQueryRenderer)

export const Shows = () => {
  const { cursor, callbacks } = paginationProps

  return (
    <Responsive>
      {({ xs }) => {
        const blockWidth = xs ? "100%" : "50%"
        const blockDirection = xs ? "column" : "row"

        return (
          <React.Fragment>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Category size="3" weight="medium">
                      Currently on view
                    </Category>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ShowBlocks
                      flexDirection={blockDirection}
                      wrap={"true" as any}
                    >
                      <ShowBlockItem
                        blockWidth={blockWidth}
                        {...showBlockProps}
                      />
                      <ShowBlockItem
                        blockWidth={blockWidth}
                        {...showBlockProps}
                      />
                      <ShowBlockItem
                        blockWidth={blockWidth}
                        {...showBlockProps}
                      />
                      <ShowBlockItem
                        blockWidth={blockWidth}
                        {...showBlockProps}
                      />
                    </ShowBlocks>
                  </Col>
                </Row>

                <Box py={2}>
                  <Separator />
                </Box>

                <Row>
                  <Col>
                    <Flex justifyContent="flex-end">
                      <Pagination {...cursor} {...callbacks} />
                    </Flex>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Spacer mb={6} />

            <Row>
              <Col>
                <Row>
                  <Col>
                    <Category size="3" weight="medium">
                      Upcoming
                    </Category>
                  </Col>
                </Row>

                <Box py={1}>
                  <Separator />
                </Box>

                <Row>
                  <Col>
                    <ShowList>
                      <ShowListItem {...showListProps} />
                      <ShowListItem {...showListProps} />
                      <ShowListItem {...showListProps} />
                    </ShowList>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Flex mb={2} justifyContent="flex-end">
                      <Pagination {...cursor} {...callbacks} />
                    </Flex>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Spacer mb={6} />

            <Row>
              <Col>
                <Row>
                  <Col>
                    <Category size="3" weight="medium">
                      Past
                    </Category>
                  </Col>
                </Row>

                <Box py={1}>
                  <Separator />
                </Box>

                <Row>
                  <Col>
                    <ShowList>
                      <ShowListItem {...showListProps} />
                      <ShowListItem {...showListProps} />
                      <ShowListItem {...showListProps} />
                    </ShowList>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Flex mb={3} justifyContent="flex-end">
                      <Pagination {...cursor} {...callbacks} />
                    </Flex>
                  </Col>
                </Row>
              </Col>
            </Row>
          </React.Fragment>
        )
      }}
    </Responsive>
  )
}
