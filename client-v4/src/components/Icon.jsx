import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ons from 'onsenui'
import icons from '../icons'

class Icon extends PureComponent {
  static defaultProps = {
    size: 'small'
  }

  styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    path: {
      fill: this.props.color
    }
  }

  sizes = Object.freeze({
    small: '32'
  })

  render() {
    const { icon, onClick, size } = this.props
    const platform = ons.platform.isIOS() ? 'ios' : 'md'

    return (
      <svg
        style={this.styles.svg}
        width={this.sizes[size]}
        height={this.sizes[size]}
        viewBox="0 0 512 512"
        onClick={onClick}
      >
        <path style={this.styles.path} d={icons[icon][platform]} />
      </svg>
    )
  }
}

Icon.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string
}

export default Icon
