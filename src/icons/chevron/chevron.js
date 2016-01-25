import React from 'react'
import FayBase from './../common/fay_base'

const Chevron = React.createClass({
  getInitialState() {
    return {
      direction: 'up',
      initialLoad: true
    }
  },

  getDefaultProps() {
    return {
      type: 'fold'
    }
  },

  firstClick() {
    this.setState({initialLoad: false}, () => {
      this.toggleDirection()
    })
  },

  toggleDirection() {
    let newDirection,
        currentDirection = this.state.direction

    if (currentDirection === 'up')
      newDirection = 'down'
    else
      newDirection = 'up'

      this.setState({direction: newDirection})
  },

  render() {
    let init = this.state.initialLoad ? "init" : "",
        onClick = this.state.initialLoad ? this.firstClick : this.toggleDirection

    return (
      <FayBase
        className={[this.props.type], "chevron", this.state.direction, init].join(" ")}
        onClick={onClick}>
        <div></div>
        <div></div>
      </FayBase>
    )
  }
})
