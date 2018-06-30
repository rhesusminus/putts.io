import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Toolbar, ToolbarButton, BackButton, Icon } from 'react-onsenui'
import '../styles/AppToolbar.css'

class AppToolbar extends Component {
  static defaultProps = {
    title: 'defaultTitle'
  }

  render() {
    const { title, showMenuIcon, onClick, toolbarType } = this.props
    console.log('toolbarType:', toolbarType)

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
  showMenuIcon: PropTypes.bool
}

export default AppToolbar
