import React from "react"
import { BorderProps, SizeProps, SpaceProps } from "styled-system"

import { Flex } from "Styleguide/Elements/Flex"
import { Radio } from "Styleguide/Elements/Radio"

export interface RadioGroupProps {
  disabled?: boolean
  onSelect: (selectedOption: string) => void
  defaultValue?: string
  options: Array<{ label: React.ReactNode | null; id: string }>
  renderRadio?: (
    props: {
      id: string
      label: React.ReactNode
      selected: boolean
      onSelect: () => void
      disabled: boolean
    }
  ) => React.ReactNode | null
}

export interface RadioGroupToggleProps
  extends RadioGroupProps,
    BorderProps,
    SizeProps,
    SpaceProps {}

interface RadioGroupState {
  selectedOption: string | null
}

export class RadioGroup extends React.Component<
  RadioGroupProps,
  RadioGroupState
> {
  state = {
    selectedOption: this.props.defaultValue || null,
  }
  onSelectionChange = (id: string) => {
    if (id !== this.state.selectedOption) {
      this.setState({ selectedOption: id }, () => {
        this.props.onSelect(id)
      })
    }
  }
  static defaultProps = {
    renderRadio: ({ id, label, selected, onSelect, disabled }) => (
      <StyledRadio
        p={2}
        key={id}
        selected={selected}
        onSelect={onSelect}
        disabled={disabled}
      >
        {label}
      </StyledRadio>
    ),
  }
  render() {
    const { disabled, options, renderRadio } = this.props

    return (
      <Flex flexDirection="column">
        {options.map(({ id, label }) =>
          renderRadio({
            id,
            label,
            onSelect: () => this.onSelectionChange(id),
            selected: this.state.selectedOption === id,
            disabled,
          })
        )}
      </Flex>
    )
  }
}

const StyledRadio = Radio.extend`
  border: 1px solid #eee;
  :not(:first-child) {
    border-top: 0;
  }
`
