import { cloneDeep, isNil, omit, omitBy, uniq, without } from "lodash"
import { Container } from "unstated"

interface State {
  // Search filters
  medium: string
  major_periods?: string[]
  partner_id?: string
  for_sale?: boolean
  page?: number
  sort?: string
  acquireable?: boolean
  at_auction?: boolean
  inquireable_only?: boolean
  price_range?: string

  // UI
  selectedFilters: string[]
  showActionSheet: boolean
}

const initialState = {
  medium: "*",
  for_sale: null,
  page: 1,
  major_periods: [],
  partner_id: null,
  sort: "-partner_updated_at",
  acquireable: null,
  at_auction: null,
  inquireable_only: null,
  price_range: null,
  selectedFilters: [],
  showActionSheet: false,
}

export class FilterState extends Container<State> {
  state = cloneDeep(initialState)

  constructor(props: State) {
    super()
    if (props) {
      Object.keys(this.state).forEach(filter => {
        if (props[filter]) {
          if (filter === "major_periods") {
            this.state[filter] = [props[filter]]
          } else if (
            [
              "for_sale",
              "acquireable",
              "at_auction",
              "inquireable_only",
            ].includes(filter)
          ) {
            this.state[filter] = props[filter] ? true : null
          } else {
            this.state[filter] = props[filter]
          }
        }
      })
    }
  }

  setPage(page, mediator) {
    this.setState({ page }, () => {
      mediator.trigger("artist:filter:changed", this.state)
    })
  }

  setSort = (sort, mediator) => {
    this.setState({ sort }, () => {
      mediator.trigger("artist:filter:changed", this.state)
    })
  }

  setPriceRange = (price_range, mediator) => {
    this.setState({ price_range }, () => {
      mediator.trigger("artist:filter:changed", this.state)
    })
  }

  showActionSheet = show => {
    if (show) {
      // TODO: Manage this side-effect in a more react-like fashion
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }

    this.setState({ showActionSheet: show })
  }

  resetFilters = () => {
    this.setState({
      ...initialState,
      showActionSheet: true,
    })
  }

  unsetFilter(filter, mediator) {
    let { selectedFilters } = this.state
    let newPartialState = {}
    if (filter === "major_periods") {
      newPartialState = { major_periods: [] }
    }
    if (
      [
        "for_sale",
        "acquireable",
        "at_auction",
        "partner_id",
        "inquireable_only",
      ].includes(filter)
    ) {
      newPartialState[filter] = null
    }
    if (filter === "medium") {
      newPartialState = { medium: "*" }
    }

    selectedFilters = without(selectedFilters, "radio")

    this.setState({ page: 1, selectedFilters, ...newPartialState }, () => {
      const filterState = omit(this.state, [
        "selectedFilterCount",
        "showActionSheet",
      ])
      mediator.trigger("artist:filter:changed", filterState)
    })
  }

  setFilter(filter, value, mediator) {
    let { selectedFilters } = this.state

    let newPartialState = {}
    if (filter === "major_periods") {
      newPartialState = {
        partner_id: null,
        major_periods: [value],
        medium: "*",
      }
    } else if (filter === "partner_id") {
      newPartialState = { major_periods: [], partner_id: value, medium: "*" }
    } else if (filter === "medium") {
      newPartialState = { medium: value, partner_id: null, major_periods: [] }
    } else if (
      ["for_sale", "acquireable", "at_auction", "inquireable_only"].includes(
        filter
      )
    ) {
      if (value) {
        selectedFilters = selectedFilters.concat([filter])
        newPartialState[filter] = true
      } else {
        selectedFilters = without(selectedFilters, filter)
        newPartialState[filter] = null
      }
    }

    if (["major_periods", "partner_id", "medium"].includes(filter)) {
      selectedFilters = selectedFilters.concat(["radio"])
    }

    selectedFilters = uniq(selectedFilters)

    this.setState({ page: 1, selectedFilters, ...newPartialState }, () => {
      let filterState: any = omit(this.state, [
        "selectedFilters",
        "showActionSheet",
      ])
      filterState = omitBy(filterState, isNil)

      mediator.trigger("artist:filter:changed", filterState)
    })
  }
}
