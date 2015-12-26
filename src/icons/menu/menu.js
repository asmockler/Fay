import './menu.scss'
import React from 'react'
import FayBase from './../common/fay_base'

const Menu = React.createClass({
  getInitialState() {
    return {
      open: false
    }
  },

  getDefaultProps() {
    return {
      type: 'float'
    }
  },

  toggleOpen() {
    let currentOpenState = !!this.state.open
    this.setState({open: !currentOpenState})
  },

  render() {
    let open = this.state.open ? "open" : "closed"
    return (
      <FayBase
        className={[this.props.type, open, "menu"].join(" ")}
        onClick={this.toggleOpen} >
        <div></div>
        <div></div>
        <div></div>
      </FayBase>
    )
  }
})

export default Menu
