import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import 'styles/index.scss'

class App extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired
  }

  static defaultProps = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}

export default App
