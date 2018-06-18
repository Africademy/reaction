// @ts-ignore
import React from "react"
import styled, { css } from "styled-components"
import { Flex, FlexProps } from "./Flex"
import {
  bottom,
  display,
  DisplayProps,
  height,
  HeightProps,
  left,
  maxWidth,
  MaxWidthProps,
  position,
  PositionProps,
  right,
  space,
  SpaceProps,
  themeGet,
  top,
  width,
  WidthProps,
} from "styled-system"

const hover = css`
  &:hover {
    border-color: ${themeGet("colors.black60")};
  }
`

export interface BorderBoxProps
  extends FlexProps,
    SpaceProps,
    MaxWidthProps,
    WidthProps,
    HeightProps {
  hover?: boolean
}

export const BorderBox = styled(Flex).attrs<BorderBoxProps>({})`
  border: 1px solid ${themeGet("colors.black10")};
  border-radius: 2px;
  ${props => props.hover && hover};
  ${space};
  ${maxWidth};
  ${width};
  ${height};
`
BorderBox.defaultProps = {
  p: 4,
}

export interface BoxProps
  extends DisplayProps,
    SpaceProps,
    WidthProps,
    HeightProps,
    PositionProps {}
export const Box = styled.div.attrs<BoxProps>({})`
  ${space};
  ${display};
  ${width};
  ${height};
  ${position};
  ${top};
  ${right};
  ${bottom};
  ${left};
`
