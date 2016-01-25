import React from 'react'
import ReactDOM from 'react-dom'

import Fay from './../src/fay.js'
const {
  Menu,
  Chevron
} = Fay

const Test = React.createClass({
  render() {
    return (
      <div>
        <Menu type="float" />
        <Menu type="fold" />
        <Menu type = "spin" />
        <Chevron />
      </div>
    )
  }
})

ReactDOM.render(
  <Test />,
  document.getElementById('main')
)
