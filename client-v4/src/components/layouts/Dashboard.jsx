import React, { PureComponent } from 'react'
import { Page, Splitter, SplitterContent } from 'react-onsenui'
import NavMenu from '../NavMenu'
import AppToolbar from '../AppToolbar'

class Dashboard extends PureComponent {
  state = {
    toolbarType: 'normal',
    menuIsOpen: false
  }

  openMenu = () => this.setState({ menuIsOpen: true })
  closeMenu = () => this.setState({ menuIsOpen: false })
  setToolbarType = type => this.setState({ toolbarType: type })

  changeToolbarType() {
    const { location } = this.props
    switch (location.pathname) {
      case '/dashboard':
        this.setToolbarType('normal')
        break
      case '/dashboard/game':
        this.setToolbarType('game')
        break
      default:
        this.setToolbarType('normal')
        break
    }
  }

  render() {
    console.log('location:', this.props.location)
    return (
      <Splitter>
        <NavMenu
          closeMenu={this.closeMenu}
          openMenu={this.openMenu}
          menuIsOpen={this.state.menuIsOpen}
          navigate={this.props.navigate}
        />
        <SplitterContent>
          <Page
            renderToolbar={() => (
              <AppToolbar showMenuIcon onClick={this.openMenu} toolbarType={this.state.toolbarType} />
            )}
          >
            {this.props.children}
          </Page>
        </SplitterContent>
      </Splitter>
    )
  }
}

export default Dashboard
