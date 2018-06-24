import { Sans } from "@artsy/palette"
import { IconName } from "Assets/Icons"
import Icon from "Components/Icon"
import React from "react"
import styled from "styled-components"
import { Flex } from "../../Elements/Flex"
import { Separator } from "../../Elements/Separator"

interface ShareProps {
  url: string
}

// TODO: We need to figure out if this is going to be a new re-usable panel type
//       in which I wouldn’t want to add this into Share
const Container = styled(Flex)`
  width: 300px;
  height: 216px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
`

const SansGrow = styled(Sans)`
  display: flex;
  flex-grow: 1;
`

const URLInput = styled.input`
  border: 0;
  text-overflow: ellipsis;
  display: flex;
  flex-grow: 1;
  color: inherit;
`

const Platform: React.SFC<{ iconName: IconName; title: string }> = ({
  iconName,
  title,
}) => (
  <Flex flexDirection="row" flexBasis="50%">
    <Icon name={iconName} color="black" />
    <Sans size="3" color="black60">
      {title}
    </Sans>
  </Flex>
)

export class Share extends React.Component<ShareProps> {
  private input: HTMLInputElement

  selectURL = () => {
    this.input.focus()
    this.input.setSelectionRange(0, this.input.value.length)
    document.execCommand("copy")
  }

  render() {
    return (
      <Container flexDirection="column" p={2}>
        <Sans size="3" weight="medium" color="black100" mb={2}>
          Share
        </Sans>
        <Flex flexDirection="row" mb={1}>
          <SansGrow size="2" color="black60" mr={4}>
            <URLInput
              type="text"
              readOnly
              value={this.props.url}
              innerRef={input => (this.input = input)}
              onClick={this.selectURL}
            />
          </SansGrow>
          <a onClick={this.selectURL}>
            <Sans size="2" weight="medium" color="black60">
              Copy
            </Sans>
          </a>
        </Flex>
        <Separator />
        <Flex flexDirection="row" flexWrap>
          <Platform iconName="facebook" title="Facebook" />
          <Platform iconName="twitter" title="Twitter" />
          <Platform iconName="mail" title="Email" />
          <Platform iconName="pinterest" title="Pinterest" />
          <Platform iconName="tumblr" title="Tumblr" />
        </Flex>
      </Container>
    )
  }
}
