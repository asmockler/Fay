import './fay_base.scss'
import React from 'react'

const Base = React.createClass({
  getDefaultProps() {
    return {
      className: "",
      onClick: function () {}
    }
  },

  render() {
    return (
      <div
        className={["fay", this.props.className].join(" ")}
        onClick={this.props.onClick} >
        {this.props.children}
      </div>
    )
  }
})

export default Base
