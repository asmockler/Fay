import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Menu from './icons/menu/menu'

const Fay = React.createClass({
  getInitialState() {
    return({
      open: false
    })
  },

  animate() {
    this.setState({open: !this.state.open})
  },

  render() {
    return (
      <div>
        <Menu type="float" />
        <Menu type="fold" />
        <Menu type="spin" />
      </div>
    )
  }
});

ReactDOM.render(
  <Fay />,
  document.getElementById('main')
)
