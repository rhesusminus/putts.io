import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Toolbar, ToolbarButton, BackButton, Icon } from 'react-onsenui'
import { UserImage } from './'
import '../styles/AppToolbar.css'

class AppToolbar extends PureComponent {
  render() {
    console.log('AppToolbar: render')
    const { showMenuIcon, openMenu, toolbarType, toolbarTitle } = this.props

    return (
      <Toolbar className="AppToolbar">
        <div className="left">{toolbarType === 'game' ? <BackButton>Back</BackButton> : <UserImage size="32" />}</div>
        <div className="center">{toolbarTitle}</div>
        <div className="right">
          {showMenuIcon && (
            <ToolbarButton>
              <Icon icon="ion-navicon, material:md-menu" onClick={openMenu} />
            </ToolbarButton>
          )}
        </div>
      </Toolbar>
    )
  }
}

AppToolbar.propTypes = {
  toolbarTitle: PropTypes.string.isRequired,
  toolbarType: PropTypes.string.isRequired,
  openMenu: PropTypes.func.isRequired,
  showMenuIcon: PropTypes.bool
}

const mapStateToProps = ({ ui: { toolbarType, toolbarTitle } }) => ({ toolbarType, toolbarTitle })

export default connect(
  mapStateToProps,
  null
)(AppToolbar)
