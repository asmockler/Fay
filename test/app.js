import React from 'react'
import ReactDOM from 'react-dom'

import Fay from './../src/fay.js'
const {
  Menu
} = Fay

const Test = React.createClass({
  render() {
    return (
      <Menu type="fold" />
    )
  }
})

ReactDOM.render(
  <Test />,
  document.getElementById('main')
)
