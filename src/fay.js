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

  animate(e) {
    this.setState({open: !this.state.open}, () => {console.log(this.state.open)})
  },

  render() {
    return (
      <div>
        <Menu type="float" />
        <h1>Fay</h1>
        <div className={"fay " + (this.state.open ? "open" : "closed")} onClick={this.animate}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <Fay />,
  document.getElementById('main')
)
