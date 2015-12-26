import './menu.scss'
import './float.scss'
import './fold.scss'
import React from 'react'
import FayBase from './../common/fay_base'

const Menu = React.createClass({
  getInitialState() {
    return {
      open: false,
      initialLoad: true
    }
  },

  getDefaultProps() {
    return {
      type: 'float'
    }
  },

  firstClick() {
    this.setState({initialLoad: false})
  },

  toggleOpen() {
    let currentOpenState = !!this.state.open
    this.setState({
      open: !currentOpenState
    })
  },

  render() {
    let init, onClick,
        open = this.state.open ? "open" : "closed"

    if (this.state.initialLoad) {
      init = "init"
      onClick = this.firstClick
    } else {
      init = ""
      onClick = this.toggleOpen
    }

    return (
      <FayBase
        className={[this.props.type, "menu", open, init].join(" ")}
        onClick={onClick} >
        <div></div>
        <div></div>
        <div></div>
      </FayBase>
    )
  }
})

export default Menu
