import { isFunction } from "lodash"
import PropTypes from "prop-types"
import { Component } from "react"

interface Props {
  children: any
}

interface State {
  viewerIsOpen: boolean
  slideIndex: number
}

export class FullScreenProvider extends Component<Props, State> {
  state = {
    slideIndex: 0,
    viewerIsOpen: false,
  }

  static childContextTypes = {
    closeViewer: PropTypes.func.isRequired,
    onViewFullscreen: PropTypes.func.isRequired,
    openViewer: PropTypes.func.isRequired,
    slideIndex: PropTypes.number.isRequired,
    viewerIsOpen: PropTypes.bool.isRequired,
  }

  getChildContext() {
    return {
      closeViewer: this.closeViewer,
      onViewFullscreen: this.openViewer,
      openViewer: this.openViewer,
      slideIndex: this.state.slideIndex,
      viewerIsOpen: this.state.viewerIsOpen,
    }
  }

  openViewer = index => {
    const body = document.getElementsByTagName("BODY")[0]
    body.setAttribute("style", "overflow: hidden;")

    this.setState({
      viewerIsOpen: true,
      slideIndex: index,
    })
  }

  closeViewer = () => {
    const body = document.getElementsByTagName("BODY")[0]
    body.setAttribute("style", "overflow: scroll;")

    this.setState({
      viewerIsOpen: false,
      slideIndex: 0, // go to beginning on close
    })
  }

  render() {
    const { children } = this.props
    const { slideIndex, viewerIsOpen } = this.state

    if (isFunction(children)) {
      return children({
        closeViewer: this.closeViewer,
        onViewFullscreen: this.openViewer,
        openViewer: this.openViewer,
        slideIndex,
        viewerIsOpen,
      })
    } else {
      return children
    }
  }
}
