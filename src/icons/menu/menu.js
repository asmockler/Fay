import './menu.scss'
import './float.scss'
import './fold.scss'
import './spin.scss'
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
    this.setState({initialLoad: false}, () => {
      this.toggleOpen()
    })
  },

  toggleOpen() {
    let currentOpenState = !!this.state.open
    this.setState({
      open: !currentOpenState
    })
  },

  render() {
    let init = this.state.initialLoad ? "init" : "",
        onClick = this.state.initialLoad ? this.firstClick : this.toggleOpen,
        open = this.state.open ? "open" : "closed"

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
