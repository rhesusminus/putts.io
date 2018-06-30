import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Toolbar, ToolbarButton, BackButton, Icon } from 'react-onsenui'
import '../styles/AppToolbar.css'

class AppToolbar extends PureComponent {
  static defaultProps = {
    title: 'defaultTitle'
  }

  render() {
    const { title, showMenuIcon, onClick } = this.props

    return (
      <Toolbar className="AppToolbar">
        <div className="left">
          <BackButton>Back</BackButton>
        </div>
        <div className="center">{title}</div>
        <div className="right">
          {showMenuIcon && (
            <ToolbarButton>
              <Icon icon="ion-navicon, material:md-menu" onClick={onClick} />
            </ToolbarButton>
          )}
        </div>
      </Toolbar>
    )
  }
}

AppToolbar.propTypes = {
  title: PropTypes.string,
  menu: PropTypes.bool
}

export default AppToolbar
